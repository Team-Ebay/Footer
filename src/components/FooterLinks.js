import ExploreLinks from "./ExploreLinks"

export default function FooterLinks({links}) {
  return (
    <div className='footer-links'>

      <div className='footer-anchor-container'>

        <div className='search-results'>
          <a href="http://www.ebay.com" className="text-link">
            <h5>Back to home page</h5>
          </a>
        </div>

        <div className='return-to-top'>
          <a href="#" className="text-link">
            <h5>Return to top</h5>
          </a>
        </div>

      </div>

      <div className='related-links-container'>
        <ul className="explore-list">
          <span className="explore-span">More to explore: </span>
          {links.map((link) => 
            <ExploreLinks key={link.id} link={link}/>
            )}
        </ul>
      </div>

    </div>
    )
  
}
