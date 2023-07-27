// import { useState } from "react";
// import { restaurants } from "../common/restaurants";


let searchText="";

const SearchComponent=(props)=>{


  
  //Function which is called when  search button is clicked with input.
  function filterRestaurants(searchText){
    let filteredRestaurants = props.restaurants.filter((restaurant) =>  //this declaration will extract name of restaurants matching with keyword and return the result to function taken from body.
      restaurant.name.toLowerCase().includes(searchText.toLowerCase())
    );
        
    // This function is taken from body component and it takes filteredRestaurants name (name finded from above) from array of objects.
    props.filteredRestaurants(filteredRestaurants);
 
  }

  //Function for top rated button
  function ratedRestaurants(){
    // This ratedRestaurant variable  takes rated name from array of objects.
    let ratedRestaurants = props.restaurants.filter((restaurant)=>
      (restaurant.avgRating)>=4
    );
    props.filteredRestaurants(ratedRestaurants); //rated restaurants variable  is passed into this function which is rendered in body component.

  }
    
  return(
      
      <div className='Search'>
        <input type="text" className='search-text' value={searchText}  onChange={(e)=> {searchText=e.target.value;filterRestaurants(searchText);}}></input>
        <button onClick={(e) => filterRestaurants(searchText)} className="btn-1"  >Search</button>
        <button onClick={(e) => ratedRestaurants()}className="btn-2" >Top Rated</button>
      </div>
      
  )
  
};

export default SearchComponent;