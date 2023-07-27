import { RESTAURANT_IMG_URL } from "../common/restaurant_img_url";

const RestaurantMenuItemCard = (props) => {
    
    console.log('details',props.menuDetails)
    return(
        <>

        <div className="menu-card">
            
            <h3> {props.menuDetails.card.info.name}</h3>
 
            <div className="menu-info">
                <h2>₹{props.menuDetails.card.info.price/100}/-</h2>
                {/* <h2>{props.menuDetails.card.info.ratings.aggregatedRating.rating}</h2> */}
                
            </div>

            <img src={`${RESTAURANT_IMG_URL}${props.menuDetails.card.info.imageId}`} alt="rest-pic" />

        </div>
        
        </>

    ) 
  };
  
export default RestaurantMenuItemCard;


