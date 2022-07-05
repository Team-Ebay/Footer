
export default function CaroselItems({item}) {
  return (
    <div className='carosel-items mouse-over mouse-over-underline snaps-inline'>
      <div className='item-img'>
        <img src={item.url_img} alt="" />
      </div>
      <div className="itemDetails">
        <h3 className='item-title'>{item.title}</h3>
        <h3 className='item-age sub-text'>{item.condition}</h3>
        <h3 className='item-price bold-text'>{item.price}</h3>
        <h6 className='item-shipping sub-text'>{item.shipping}</h6>
        <h6 className='item-amount-sold bold-text'>{item.sold} sold</h6>
      </div> 
    </div>
  )
}
