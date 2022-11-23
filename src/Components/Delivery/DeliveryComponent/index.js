import React from "react";
import Slider from "react-slick";
import NextArrow from "../../Common/Carousel/NextArrow";
import PrevArrow from "../../Common/Carousel/PrevArrow";
import "./deliveryComponent.css";
import DeliveryItems from "./DeliveryItems";
const deliveryItems = [
  {
    id: 1,
    title: "Paratha",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
  },
  {
    id: 2,
    title: "Biryani",
    cover:
      "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
  },
  {
    id: 3,
    title: "Rolls",
    cover:
      "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
  },
  {
    id: 4,
    title: "Chicken",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
  },
  {
    id: 5,
    title: "Bowl",
    cover:
      "https://b.zmtcdn.com/data/dish_images/838c7929dcc09479600f118c9088af7b1614910398.png",
  },
  {
    id: 6,
    title: "Thali",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
  },
  {
    id: 7,
    title: "Burgur",
    cover:
      "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
  },
  {
    id: 8,
    title: "Chhole Bhature",
    cover:
      "https://b.zmtcdn.com/data/dish_images/c953e5ca07150e9a51f8b21102e20f7e1634805157.png",
  },
  {
    id: 9,
    title: "Samosa",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/bc0cc8557a06fcd3aacdd7b241cf9db71632716547.png",
  },
  {
    id: 10,
    title: "Chay",
    cover:
      "https://b.zmtcdn.com/data/dish_images/743abc4d4dad9c3f8163084ae4b30bad1635165809.png",
  },
  {
    id: 11,
    title: "Pakoda",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/d0c68372932bf3f93acd9e1c52116cdf1632716606.png",
  },
  {
    id: 12,
    title: "Pizza",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  },


];

const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow: <PrevArrow/>
  };
const DeliveryComponent = () => {
  return (
    <div className="delivery-collection">
      <div className="max-width">
        <div className="collection-title">Eat what makes you happy</div>
      <Slider {...settings}>
        {deliveryItems.map((item)=>{
            return(
                <DeliveryItems item={item}/>
            )
        })}
      </Slider>
      </div>
    </div>
  );
};

export default DeliveryComponent;
