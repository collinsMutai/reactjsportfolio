import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faCheck, faBullhorn, faBullseye } from '@fortawesome/free-solid-svg-icons'


const Services = () => {
    return (
        <div className="album py-5 bg-light">
        <div className="container">
    
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 services">
            <div className="col-lg-3">
              <div className="card shadow-sm">
                <FontAwesomeIcon icon={faLaptop} style={{color:"#ed1a4f", fontSize:"2.625rem"}}/>
                <div className="card-body">
                <h5 class="card-title">Web Design</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card shadow-sm">
                <FontAwesomeIcon icon={faBullhorn} style={{color:"#ed1a4f", fontSize:"2.625rem"}}/>
                <div className="card-body">
                <h5 class="card-title">SEO Optimazation</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card shadow-sm">
                <FontAwesomeIcon icon={faBullseye} style={{color:"#ed1a4f", fontSize:"2.625rem"}}/>
                <div className="card-body">
                <h5 class="card-title">Google Ads</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card shadow-sm">
                <FontAwesomeIcon icon={faCheck} style={{color:"#ed1a4f", fontSize:"2.625rem"}}/>
                <div className="card-body">
                <h5 class="card-title">Facebook Ads</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    
    )
}

export default Services
