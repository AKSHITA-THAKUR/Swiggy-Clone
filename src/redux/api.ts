import axios from "axios";

export const fetchDishes = async () => {
try{
    const response = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.352710703183785&lng=75.44903855770826&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    return response.data;
}
catch(error){
    console.error("Error fetching dishes:", error);

}
}