import React from "react";
import {  useSelector } from "react-redux";
import { RootState } from "../redux/store";
const RestrauntDetail:React.FC= () => {

const MenuList:any = useSelector((state:RootState)=> state.menu.MenuList)
console.log( "The card list of Restraunt is" , MenuList)

const renderMenu = () =>{
const List = MenuList?.data?.cards || [];

// console.log("The list of the restraunt is " , List)

const Title = List.find((card:any) => 
card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2"
)

const Banner = List.find((card:any)=>
card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
)
const info = Banner?.card?.card?.info || [];
console.log("The info part is " , info )

// console.log( "The Menu of the restraunt is ",Title)
return(
  <div >
  <h1 className="ml-[600px] mt-10 font-bold "> {Title.card.card.text}</h1>
  <div className="max-w-[900px] h-[200px] text-lg bg-gray-200 rounded-3xl ml-[200px] mt-[50px] pl-5 pt-5 font-bold"> 
   <div className=""> <span>{info.avgRating} rating  </span>  <span className="ml-6"> {info.costForTwoMessage}</span></div>
   <div className="pt-3">  <span className="text-orange-600"> <u className="p-1">{info.cuisines }  </u></span></div>
   <div className="pt-3">  Outlet <span> {info.areaName} </span></div>
   <div> {info.sla.slaString}</div>
   <div className="text-gray-600 mt-3"> {info.feeDetails.message}</div>
  </div>
  </div>

)

}

renderMenu()

  return (

    <React.Fragment>
       <div className="">
       {renderMenu()}
       </div>
    </React.Fragment>
   
  )
}

export default RestrauntDetail
