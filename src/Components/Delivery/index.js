import React from 'react'
import "./delivery.css"
import Filters from '../Common/Filters'
import DeliveryComponent from './DeliveryComponent'
import TopBrands from './TopBrands'
import ExploreSection from '../Common/ExploreSection'
import { Restaurants } from '../../data/Restaurants'
const deliveryFilters = [
  {
    id:1,
    icon: <i class="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters"
  },
  {
    id:2,
    title: "Rating: 4.0+"
  },
  {
    id:3,
    title: "Safe and Hygenic"
  },
  {
    id:4,
    title: "Pure Veg"
  },
  {
    id:5,
    title:"Delivery Time",
    icon: <i className='fi fi-rr-apps-sort absolute-center'></i>
  },
  {
    id:6,
    title:"Great Offers"
  }
]
const restaurantList = Restaurants;
const Delivery = () => {
  return (
    <div>
      <div className='max-width'>
      <Filters filtersList = {deliveryFilters}/>
      </div>
      <DeliveryComponent/>
      <TopBrands/>
      <ExploreSection list = {restaurantList} collectionName='Delivery Restaurants in Banglore'/>
    </div>
  )
}

export default Delivery