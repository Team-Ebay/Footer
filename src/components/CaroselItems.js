import { isTemplateElement } from '@babel/types'
import React from 'react'

 
{/* <p className='item-title'>Title</p>
<p className=';age'>New</p>
<p className='amount'>Price</p>
<footer>
  <p>
  Free Shipping 
  </p>
  <p>
  Amount Sold
  </p>
</footer> */}
export default function CaroselItems({item}) {
  return (
    <div className='carosel-items'>
      <div className='item-img'>
        <img src={item.url_img} alt="" />
      </div>
     <h3 className='item-title'>{item.title}</h3>
     <h6 className='item-age sub-text'>{item.condition}</h6>
     <h3 className='item-price bold-text'>{item.price}</h3>
     <h6 className='item-shipping sub-text'>{item.shipping}</h6>
     <h6 className='item-amount-sold sub text'>{item.sold} sold</h6>
    </div>
  )
}
