import React from "react";
import { useLocation } from "react-router-dom";


const useScrollTop = () => {
 const location = useLocation();
 React.useEffect(()=>{
  window.scrollTo({top:400});

 },[location.pathname])
}

export default useScrollTop
