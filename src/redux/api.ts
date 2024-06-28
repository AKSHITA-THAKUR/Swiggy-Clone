import axios from "axios";

export const fetchDishes = async () => { //API to fetch the restraunt names and batches
try{
    const response = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.352710703183785&lng=75.44903855770826&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    return response.data;
}
catch(error){
    console.error("Error fetching dishes:", error);

}
}

export const RestDetail = async (id:number) => { //API to fetch the menu of the restraunt
try{

    const fetchedData = await axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.352710703183785&lng=75.44903855770826&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
    return fetchedData.data
}
catch(error) {
    console.error("Error fetching restaurant details:", error);
}

}
