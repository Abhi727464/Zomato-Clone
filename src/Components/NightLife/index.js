import React from 'react'
import Collection from '../Common/Collection'
import ExploreSection from '../Common/ExploreSection'
import Filters from '../Common/Filters'
import './nightLife.css'
import { nightLife } from '../../data/NightLife'
const collectionList = [
  {
      id:1,
      title:"Best bars & Pubs",
      cover:"https://b.zmtcdn.com/data/collections/b80f739090610e0212597384dd08d834_1665569124.jpg?output-format=webp",
      places: "26 places"
  },
  {
      id:2,
      title:"Luxury at its best",
      cover:"https://b.zmtcdn.com/data/collections/454e33b19950986d4c7c34bc70f99ada_1612761218.jpg?output-format=webp",
      places: "10 places"
  },
  {
      id:3,
      title:"Bingeworth Desserts",
      cover:"https://b.zmtcdn.com/data/collections/7ae59a69ae37746b8a565a5b73bb6daf_1665564647.jpg?output-format=webp",
      places: "15 places"
  },
  {
      id:4,
      title:"Stunning Rooftops",
      cover:"https://b.zmtcdn.com/data/collections/3dfd3a9082b04d661891abd003eef3eb_1666068315.jpg?output-format=webp",
      places: "28 places"
  },
  {
      id:6,
      title:"Great Buffets",
      cover:"https://b.zmtcdn.com/data/collections/f6d732dc7432ad6e80a309cce6f0745a_1665640262.jpg",
      places: "12 places"
  },
  {
      id:7,
      title:"Stunning Rooftops",
      cover:"https://b.zmtcdn.com/data/collections/3dfd3a9082b04d661891abd003eef3eb_1666068315.jpg",
      places: "14 places"
  },
  {
      id:8,
      title:"World Vegan Month",
      cover:"https://b.zmtcdn.com/data/collections/8a5d8298d4f218d1ae8923419f1af2fb_1667298875.jpg",
      places: "19 places"
  },
  {
      id:9,
      title:"World on Your Plate ",
      cover:"https://b.zmtcdn.com/data/collections/d9eea3ef785def3a1d4e19c89bf19b11_1660816040.jpg",
      places: "14 places"
  },
]
const nightFilters = [
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
]
const nightList = nightLife
const NightLife = () => {
  return (
    <div>
      <Collection list={collectionList}/>
      <div className="max-width">
        <Filters filtersList={nightFilters}/>
      </div>
      <ExploreSection list={nightList} collectionName="Night Life restaurants in Benglore"/>
    </div>
  )
}

export default NightLife