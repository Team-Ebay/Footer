import ExploreLinks from "./ExploreLinks"

export default function FooterLinks({links}) {
  return (
    <div className='footer-links'>

      <div className='footer-anchor-container'>

        <div className='search-results'>
          <h5>Back to search results</h5>
        </div>

        <div className='return-to-top'>
          <h5>Return to top</h5>
        </div>

      </div>

      <div className='related-links-container'>
        {links.map((link) => 
          <ExploreLinks key={link.id} link={link}/>
          )}
      </div>

    </div>
    )
  
}
