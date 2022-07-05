import React from 'react'

export default function SiteNav() {
  return (
    <div className='site-nav-container'>

      <div className="site-links-container">
        <ul className='site-links-list'>
          <li>About eBay</li>
          <li>Announcements</li>
          <li>Community</li>
          <li>Security Center</li>
          <li>Seller Center</li>
          <li>Policies</li>
          <li>Affiliates</li>
          <li>Help & Contact</li>
          <li>Site Map</li>
        </ul>
      </div>

      <div className="copyright">
        <h6>
          Copyright (insert-logo) 1995-2022 eBay, Inc. All Rights Reserverd.
          <span className='copyright-link'> Accesibility</span>,
          <span className="copyright-link"> User Agreement </span>,
          <span className="copyright-link"> Privacy </span>,
          <span className="copyright-link"> Cookies </span>,
          <span className="copyright-link"> Do not sell my personal information </span>
          and
          <span className="copyright-link"> AdChoice (info logo)</span>
          </h6>
      </div>
    </div>
  )
}
