import { useSearchParams as useSearchParamsRRD } from "react-router-dom"

const useSearchParams = () => {

  const [searchParams, setSearchParams] = useSearchParamsRRD()

  const getAllSearchParams = () => {
    return searchParams
  }

  const getSearchParam = (param: string) => {
    return searchParams.get(param)
  }

  const setSearchParam = (param: string, value: string) => {
    if(value === ""){
      searchParams.delete(param)
    } else {
      searchParams.set(param, value)
    }
    setSearchParams(searchParams)
  }

  return {
    getAllSearchParams,
    getSearchParam,
    setSearchParam
  }
  
}

export default useSearchParams