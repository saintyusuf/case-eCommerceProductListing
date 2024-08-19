import { Box, Select, useMediaQuery } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { BsSliders as IconFilter } from "react-icons/bs"
import ButtonComponent from "../components/button.component"
import App from "../classes/app.class"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

export type SortBy = "price" | "title" | ""
export type SortOrder = "asc" | "desc" | ""

const TopbarLayout = () => {

  const app = new App()
  const appStates = useSelector((state:RootState)=>state.app)

  const [isMobile] = useMediaQuery("(max-width: 900px)")
  const [isSidebarVisible, setIsSidebarVisible] = useState(isMobile ? app.getSidebarVisibility() : true)

  useEffect(()=>{
    setIsSidebarVisible(isMobile ? app.getSidebarVisibility() : true)
  },[isMobile, appStates])

  const [searchParam, setSearchParam] = useSearchParams()

  const [sortBy, setSortBy] = useState<SortBy>(searchParam.get("sortBy") as SortBy ?? "")
  const [sortOrder, setSortOrder] = useState<SortOrder>(searchParam.get("sortOrder") as SortOrder ?? "")

  function updateSearch(sortBy:SortBy, sortOrder:SortOrder){
    setSortBy(sortBy)
    setSortOrder(sortOrder)
    searchParam.set("sortBy", sortBy)
    searchParam.set("sortOrder", sortOrder)
    setSearchParam(searchParam)
  }

  function resetSearch(){
    setSortBy("")
    setSortOrder("")
    searchParam.delete("sortBy")
    searchParam.delete("sortOrder")
    setSearchParam(searchParam)
  }

  useEffect(()=>{
    setSortBy(searchParam.get("sortBy") as SortBy ?? "")
    setSortOrder(searchParam.get("sortOrder") as SortOrder ?? "")
  },[searchParam])
  
  return (
    <Box w="100%" display="flex" flexDir="row" justifyContent="end" mb="5px" pr="5px">
      {
        isMobile && (
          <ButtonComponent mr="auto" bg="transparent" w="30px" h="30px" onClick={()=>app.toggleSidebar()}>
            <Box as={IconFilter} fontSize={{mobile: 18, desktop: 24}}/>
          </ButtonComponent>
        )
      }
      <Select w={{mobile: "150px", desktop: "200px"}} h={{mobile: "30px", desktop: "40px"}} fontSize={{mobile: "12px", desktop: "13px"}} value={`${sortBy}-${sortOrder}`} onChange={(e)=>{
        e.target.value ? updateSearch(e.target.value.split("-")[0] as SortBy, e.target.value.split("-")[1] as SortOrder) : resetSearch()
      }}>
        <option value="">Default</option>
        <option value="title-asc">Title: A to Z</option>
        <option value="title-desc">Title: Z to A</option>
        <option value="price-asc">Price: Lower to Higher</option>
        <option value="price-desc">Price: Higher to Lower</option>
      </Select>
    </Box>
  )
}

export default TopbarLayout