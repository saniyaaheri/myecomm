import React from 'react'
import Features from './Features'
import FeatureData from './FeatureData'
import './Features.css'


function  myCards(shopcard)
{
return(
    <Features 
    image={shopcard.image}
    name={shopcard.title}
    description={shopcard.text}
    price={shopcard.prices}
    />
)    
}
const FeatureCards = () => {
  return (
    <div className='Shopingcards'>
      {/* <Features 
      image={FeatureData[0].image}
      name={FeatureData[0].title}
      description={FeatureData[0].text}
      price={FeatureData[0].prices}
      /> */}
        {FeatureData.map(myCards)}
    </div>
  )
}
export default FeatureCards
