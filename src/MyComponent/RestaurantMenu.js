import {useEffect} from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { RESTAURANT_MENU_CARD } from "../common/restaurant_img_url";
import Shimmer from "./Shimmer";
import RestaurantMenuItemCard from "./RestaurantMenuItemCard";



const RestaurantMenu = () => {

    const { resId } = useParams();
    
    const [restaurantMenuItems, setRestaurantMenuItems] = useState([]);


    
    useEffect(() => {async function fetchMenu(){
        
        const response = await fetch(`${RESTAURANT_MENU_CARD}${resId}`);
        const restaurantMenu = await response.json();
        
        let menu = restaurantMenu?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR
        ?.cards[1]?.card?.card?.itemCards;

        if (menu === undefined){
            
            menu =restaurantMenu?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR
            ?.cards[2]?.card?.card?.itemCards;

        }

        setRestaurantMenuItems(menu);

    
    }
        fetchMenu();
    
    },[resId]);
    
    
    if(restaurantMenuItems === undefined){
        return <h1>No menu items found.</h1>
    }
    
    
    
   
    return restaurantMenuItems.length === 0 ? (<Shimmer/>) : (
        <>
        {restaurantMenuItems.map((menu) => (
            <RestaurantMenuItemCard key={menu.card.info.id} menuDetails={menu}></RestaurantMenuItemCard>
            ))}
        
        </>
    )
}

export default RestaurantMenu

// {restaurantMenuItems.map((menu) => {
//     <RestaurantMenuItemCard menuDetails = {menu}></RestaurantMenuItemCard>
// })}

// {restaurantMenuItems.map((menu) => (
//     <RestaurantMenuItemCard menuDetails={menu}></RestaurantMenuItemCard>
//   ))}













