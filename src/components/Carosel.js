import CaroselItems from './CaroselItems'

export default function Carosel({data}) {

  return (
    <div className='footer-container'>
      <header>
        People who viewed this item alos viewed
      </header>

      <div className='carosel-container'>
      {data.map((item) => <CaroselItems key={item.id} item={item} />)}
      </div>
      
    </div>
  )
}
