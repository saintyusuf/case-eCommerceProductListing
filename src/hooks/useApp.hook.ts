import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import useMobile from "./useMobile.hook"

const useApp = () => {

  const appStates = useSelector((state:RootState)=>state.app)
  const dispatch = useDispatch()
  const {isMobile} = useMobile()

  const toggleSidebar = () => {
    if(isMobile){
      dispatch({type:"app/toggleSidebar"})
      if(document.body.classList.contains("noScroll")){
        document.body.classList.remove("noScroll")
      } else {
        document.body.classList.add("noScroll")
      }
    }
  }

  const getSidebarVisibility = () => {
    return appStates.isSidebarVisible
  }

  const toggleSearchbar = () => {
    if(isMobile){
      dispatch({type:"app/toggleSearchbar"})
      if(document.body.classList.contains("noScroll")){
        document.body.classList.remove("noScroll")
      } else {
        document.body.classList.add("noScroll")
      }
    }
  }

  const getSearchbarVisibility = () => {
    return appStates.isSearchbarVisible
  }

  const toggleCart = () => {
    dispatch({type:"app/toggleCart"})
    if(isMobile){
      if(document.body.classList.contains("noScroll")){
        document.body.classList.remove("noScroll")
      } else {
        document.body.classList.add("noScroll")
      }
    }
  }

  const closeCart = () => {
    dispatch({type:"app/closeCart"})
    if(isMobile){
      if(document.body.classList.contains("noScroll")){
        document.body.classList.remove("noScroll")
      } 
    }
  }

  const getCartVisibility = () => {
    return appStates.isCartVisible
  }

  return {
    toggleSidebar,
    getSidebarVisibility,
    toggleSearchbar,
    getSearchbarVisibility,
    toggleCart,
    closeCart,
    getCartVisibility
  }
  
}

export default useApp