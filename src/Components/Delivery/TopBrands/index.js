import React from 'react'
import './topBrands.css'
import NextArrow from '../../Common/Carousel/NextArrow';
import PrevArrow from '../../Common/Carousel/PrevArrow';
import Slider from 'react-slick';
const brandList= [
    {
        id:1,
        time:"35 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png"
    },
    {
        id:2,
        time:"36 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604387296.png"
    },
    {
        id:3,
        time:"23 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/370c304771298718e899edd29be3d4b4_1605095053.png"
    },
    {
        id:4,
        time:"44 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png"
    },
    {
        id:5,
        time:"21 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/bd13f9119a336c32432c679ec6737a32_1609220205.png"
    },
    {
        id:6,
        time:"32 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/ddc5afe51006b94eab407815b125028c_1611268568.png"
    },
    {
        id:7,
        time:"23 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/df5afe8b7789b8ff2b9abcd014b00c87_1646380179.png"
    },
    {
        id:8,
        time:"27 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/334fc7a8dcd2b4b921c0779c21c43655_1628325065.png"
    },

    
]
const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow: <PrevArrow/>
  };
const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
        <div className='collection-title'>Top brands for you</div>
        <Slider {...settings}>
            {brandList.map((brand)=>{
                return(
                    <div className='top-brands-cover'>
                        <img src={brand.cover} alt={brand.time} className='top-brands-image'/>
                    </div>
                )
            })}
        </Slider>

    </div>
  )
}

export default TopBrands