import React from "react";
import { useEffect } from "react";
import {  useSelector } from "react-redux";
import { RootState } from "../redux/store";
const RestrauntDetail:React.FC= () => {



const MenuList = useSelector((state:RootState)=> state.menu.MenuList)
console.log( "The menu list of Restraunt is" , MenuList)
  return (

    <div>
       <h1>This is Restraunt detail page</h1>
    </div>
  )
}

export default RestrauntDetail
