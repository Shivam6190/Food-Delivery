import SearchComponent from "./Search";
import RestaurantCard from "./RestaurantCard";
// import {restaurants} from "../common/restaurants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../common/useOnline";



const BodyComponent = () =>{
  
  const[filteredRestaurantsArray,setFilteredRestaurants] = useState([]);
  const[allRestaurants,setAllRestaurants]=useState([]); //this was declared so that when searching it does'nt select among filteredrestaurants array.
  
  const isOnline = useOnline();

  
  
  useEffect(() => {
    fetchData();
    console.log('useEffect called');
  
  },[]);

  async function fetchData(){
   
    const result = await fetch(
     
      "http://localhost:8000/api/restaurants"
      
    );
    

    const response = await result.json();

    console.log('data',response);

    setFilteredRestaurants(response);
    setAllRestaurants(response);
  }
  
  
  function filteredRestaurants(restaurants){
    setFilteredRestaurants(restaurants);
  }
  //function for taking a array of restaurant cards and passing it to filtered array.
  
  
  if (!isOnline){
    return <h1>Please Check your Internet Connection</h1>
  }
  
  
  
  
  //conditional rendering after return
  return (
      <>
      
      <div className="filter-search-bar">
        <SearchComponent restaurants={allRestaurants} filteredRestaurants={filteredRestaurants}/>
      </div>
      
      {/* It is displaying the restaurants name in the restaurant card */}
      {filteredRestaurantsArray.length === 0 ? <Shimmer/> : 
      <div className='res-container'>
        {filteredRestaurantsArray.map((restaurant)=>
          <Link key={restaurant.id} to={"/restaurant/" + restaurant}>
            <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
          </Link>
        )}
      </div>
      }
      
      </>
    );
}

export default BodyComponent;