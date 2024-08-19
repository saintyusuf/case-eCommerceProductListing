import { Box, Select } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export type SortBy = "price" | "title" | ""
export type SortOrder = "asc" | "desc" | ""

const TopbarLayout = () => {

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
    <Box w="100%" display="flex" flexDir="row" justifyContent="end" mb="5px">
      <Select w="200px" value={`${sortBy}-${sortOrder}`} fontSize="13px" onChange={(e)=>{
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