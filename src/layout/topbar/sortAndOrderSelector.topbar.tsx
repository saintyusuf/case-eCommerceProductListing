import { Select } from "@chakra-ui/react"
import useSearchParams from "../../hooks/useSearchParams.hook"
import { useEffect, useState } from "react"

export type SortBy = "price" | "title" | ""
export type SortOrder = "asc" | "desc" | ""

const SortAndOrderSelectorTopbar = () => {

  const { getSearchParam, setSearchParam, getAllSearchParams } = useSearchParams()

  const [sortBy, setSortBy] = useState<SortBy>(getSearchParam("sortBy") as SortBy ?? "")
  const [sortOrder, setSortOrder] = useState<SortOrder>(getSearchParam("sortOrder") as SortOrder ?? "")

  function updateSearch(sortBy:SortBy, sortOrder:SortOrder){
    setSortBy(sortBy)
    setSortOrder(sortOrder)
    setSearchParam("sortBy", sortBy)
    setSearchParam("sortOrder", sortOrder)
  }

  function resetSearch(){
    setSearchParam("sortBy", "")
    setSearchParam("sortOrder", "")
  }

  useEffect(()=>{
    setSortBy(getSearchParam("sortBy") as SortBy ?? "")
    setSortOrder(getSearchParam("sortOrder") as SortOrder ?? "")
  },[getAllSearchParams()])
  
  return (
    <Select w={{mobile: "150px", desktop: "200px"}} h={{mobile: "30px", desktop: "40px"}} fontSize={{mobile: "12px", desktop: "13px"}} value={`${sortBy}-${sortOrder}`} onChange={(e)=>{
      e.target.value ? updateSearch(e.target.value.split("-")[0] as SortBy, e.target.value.split("-")[1] as SortOrder) : resetSearch()
    }}>
      <option value="">Default</option>
      <option value="title-asc">Title: A to Z</option>
      <option value="title-desc">Title: Z to A</option>
      <option value="price-asc">Price: Lower to Higher</option>
      <option value="price-desc">Price: Higher to Lower</option>
    </Select>
  )
}

export default SortAndOrderSelectorTopbar