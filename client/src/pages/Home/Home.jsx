import React from 'react';
import "./Home.css";
import {BsBuildingsFill,BsRocketTakeoffFill,BsHouseFill} from "react-icons/bs" 
import {MdStoreMallDirectory} from "react-icons/md"
import {FaStar, FaUserAlt} from "react-icons/fa"
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
const Home = () => {
  return (
    <>
    <Navbar/>

    <div className="hero">
    <div className="overlay">
      </div>

      <div className="heroContainer">
      <span>

        <h1>The modern way to get legal work done </h1>
        <p>Whether you need a one-time or an entire freelance legal department, Attorney network of experienced lawyers has covered </p>
      </span>
        <div className="heroBtns">
            <Link to="/lawyer-signUp">
            <button>
            Apply as Lawyer
            </button>
            </Link>
            <Link to="/client-signUp">
            <button>
            Apply as Client
            </button>
            </Link>
        </div>
    </div>
    </div>

    <div className="popular">
        <h1>Popular Legal Areas</h1>
        <div className="popularContainer">
            <div className="popularCard">
                <img src="/images/popular1.png" alt="" />
                <h4>Agreements</h4>
            </div>
            <div className="popularCard">
                <img src="/images/popular2.png" alt="" />
                <h4>Business Formation</h4>
            </div>


            <div className="popularCard">
                <img src="/images/popular3.png" alt="" />
                <h4>Patents</h4>
            </div>
            <div className="popularCard">
                <img src="/images/popular4.png" alt="" />
                <h4>Trademarks</h4>
            </div>


            
            
            <div className="popularCard">
                <img src="/images/popular5.png" alt="" />
                <h4>Immigration</h4>
            </div>
            <div className="popularCard">
                <img src="/images/popular6.png" alt="" />
                <h4>General Counsel</h4>
            </div>
            <div className="popularCard">
                <img src="/images/popular7.png" alt="" />
                <h4>Labor & Employment</h4>
            </div>


            <div className="popularCard">
                <img src="/images/popular8.png" alt="" />
                <h4>Securities &Finance</h4>
            </div>


            
        </div>
    </div>

    <div className="qualities">
        <div className="qualitiesContainer">
        <div className="heading">

            <h1>Trusted by <span className='number'>10,000+</span> Businesses</h1>
            <p>From small businesses to the Fortune 1000, groundbreaking companies of all sizes trust UpCounsel and its attorney community to provide
high quality, cost-effective legal services.</p>
        </div>
        <div className="qualitiesCardContainer">
           
        <div className="qualitiesCard">
                <MdStoreMallDirectory  color='#559CEA'/>
                <h4>Small Businesses</h4>
                <button>Get Started</button>
            </div>

            <div className="qualitiesCard">
                <BsRocketTakeoffFill  color='#559CEA'/>
                <h4>Startups</h4>
                <button>Get Started</button>
            </div>


            <div className="qualitiesCard">
                <FaUserAlt  color='#559CEA'/>
                <h4>Mgmt Teams</h4>
                <button>Get Started</button>
            </div>



            <div className="qualitiesCard">
                <BsBuildingsFill 
                  color='#559CEA'/>
                <h4>Legal Depts</h4>
                <button>Get Started</button>
            </div>




            <div className="qualitiesCard">
                <BsHouseFill  color='#559CEA'/>
                <h4>Law Firms</h4>
                <button>Get Started</button>
            </div>

                  
        </div>
        </div>


        <div className="attorneysDemand">
            <div className="left">
                <h1>Access to  <span className='green'>high quality</span> <br />
 attorneys on demand</h1>
 <ul>
    <li> Business  Ask an attorney and receive legal advice onlineattorneys have an average of <b>14 years</b>  of experience</li>
    <li> Profiles of our online attorneys display client ratings and reviews of recent work</li>
    <li> Find business lawyers anywhere for every legal need</li>
    <li> Ask an attorney and receive legal advice online</li>
 </ul>
 <button>Learn More</button>
            </div>
            <div className="right">
                <div className="user">
                <span>

                    <h3>Liz Oliner</h3>
                    <div className="stars">
                    <FaStar color='#E3b900'/>
                    <FaStar color='#E3b900'/>
                    <FaStar color='#E3b900'/>
                    <FaStar color='#E3b900'/>
                    <FaStar color='#E3b900'/>

                    </div>
                </span>
                    <div className="details">
                        <b>260 projects on UpCounsel</b>
                        <p>Business Transactional Lawyer</p>
                    </div>

                </div>




                <div className="user">
                <span>

                    <h3>Alejandro Maher</h3>
                    <div className="stars">
                    <FaStar color='#E3b900'/>
                    <FaStar color='#E3b900'/>
                    <FaStar color='#E3b900'/>
                    <FaStar color='#E3b900'/>
                    <FaStar color='#E3b900'/>

                    </div>
                </span>
                    <div className="details">
                        <b>12 years experience</b>
                        <p>Business, Finance and Technology Lawyer</p>
                    </div>

                </div>










                <div className="user">
                <span>

                    <h3>Kanika Radhakrishnan</h3>
                    <div className="stars">
                    <FaStar color='#E3b900'/>
                    <FaStar color='#E3b900'/>
                    <FaStar color='#E3b900'/>
                    <FaStar color='#E3b900'/>
                    <FaStar color='#E3b900'/>

                    </div>
                </span>
                    <div className="details">
                        <b>Harvard Law School</b>
                        <p>Intellectual Property Lawyer</p>
                    </div>

                </div>
            </div>
        </div>
    </div>

<div className="pricing">
<div className="pricingContainer">

    <div className="left">
        
        <img src="/images/banner.png" alt="" />
    </div>
    <div className="right">
        <h1>Compare detailed
proposals and
transparent pricing</h1>
<ul>
    <li>Receive custom proposals within hours</li>
    <li>Save up to 60% compared to law firms</li>
    <li>Pay only for quality legal work</li>
</ul>
 <button>Learn More</button>

    </div>
</div>
</div>

<div className="legalWork">
    <div className="legalWorkContainer">
        <div className="left">
            <h1> 
           <span className='green'>

            Easily </span> manage your <br />
legal work</h1>
<ul>
    <li>Free document management and e-signature</li>
    <li>Quick and secure online payments</li>
    <li>24/7 support for any questions</li>

</ul>
<button>Learn more</button>
        </div>
        <div className="right">
            <img src="/images/laptop.png" alt="" />
        </div>
    </div>
</div>

<div className="legalWork1">
    <div className="legalWorkContainer1">
    <div className="left">
            <img src="/images/papers.png" alt="" />
        </div>
        <div className="right">
            <h1> 
            <span className='green'>
            Free
            </span>  Legal Documents,
Forms and Articles</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac odio in est sollicitudin condimentum in eget magna. Fusce in suscipit mi, eget maximus enim. In consectetur magnaestibulum non metus ac eros tempus facilisis ac vel arcu. Mauris a leo vel dui iacunec sed egestas erat.</p>
<button>Learn more</button>
        </div>
        
    </div>
</div>

<div id='buttonContainers'>
    <h2>Start using today - Legal You Can Love</h2>
    <button>Post a Job & Get Free Proposals</button>
</div>

    </>
  );
}

export default Home;
