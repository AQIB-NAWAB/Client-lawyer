import React from 'react'
import "./Footer.css"
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
    <div>

        <h2>Navigation</h2>
        <ul>
            <li>How it Works</li>
            <li>For Lawyers</li>
            <li>Free Legal Documents</li>
            <li>Sitemap</li>
        </ul>
    </div>




    <div>

        <h2>About</h2>
        <ul>
            <li>Our Company</li>
            <li>Careers</li>
            <li>Customers</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Crowdfunding Report</li>
        </ul>
    </div>



    <div>

<h2>Contact</h2>
<ul>
    <li>Visit our Support Center</li>
    <li>General Inquires</li>
    <li>Sales</li>
    <li>Press</li>
     
</ul>
</div>


<div className="footer_info">
    <div className="company">
        <img src="/images/lawyer white.png" alt="" />
        <FaFacebook/>
        <FaTwitter/>
        <FaLinkedin/>
    </div>
    <h3>LEGAL YOU CAN LOVE</h3>
    <p>AttorneyEase is an interactive online service that makes it
faster and easier for businesses to find and hire legal help
solely based on their preferences. We are not a law firm, do
not provide any legal services, legal advice or "lawyer
referral services" and do not provide or participate in any
legal representation.</p>
</div>

    </footer>
  )
}

export default Footer