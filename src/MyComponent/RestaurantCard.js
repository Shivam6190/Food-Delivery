import {RESTAURANT_IMG_URL} from '../common/restaurant_img_url';
import {MdDeliveryDining} from 'react-icons/md';
import {TbUserStar} from 'react-icons/tb'

const RestaurantCard = ({restaurant})=>{
    // const {
    //     name,
    //     cuisine,
    //     avgRating,
    //     deliverytime,
    //     costForTwoString,
    //     cloudinaryImageId,
    // } =props.restaurant;

     const {
        name,
        cuisines,
        avgRating,
        deliveryTime,
        // costForTwoString,
        cloudinaryImageId,
    } =restaurant;


    
    return(
      <div className='restaurant-card'>
        <img  src={`${RESTAURANT_IMG_URL}${cloudinaryImageId}`} alt="rest-pic" />

        
  
  
  
        <h3>{name}</h3>
        
        {/* template literal helped in adding comma */}
        <h4>{`${cuisines}`}.</h4>
  
        <div className='res-info' >
          <h4 >{avgRating}   <TbUserStar/> </h4>
          <h4>{deliveryTime}    <MdDeliveryDining/></h4>
          {/* <h4>{costForTwoString}</h4> */}
        </div>
      </div>
    );
};

export default RestaurantCard;



