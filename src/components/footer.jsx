import React from 'react'

const Footer = () => {
  return (
    <div>
      
      <div className="">
        {/* Footer */}
        <footer className="text-center text-lg-start text-white" style={{backgroundColor: '#1c2331'}}>
          {/* Section: Social media */}
          <section className="d-flex justify-content-between p-4" style={{backgroundColor: '#6351ce'}}>
            {/* Left */}
            <div className="me-5">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* Left */}
            {/* Right */}
            <div>
              <a href className="text-white me-4 no-underline">
                <i className="fab fa-facebook-f" />
              </a>
              <a href className="text-white me-4 ">
                <i className="fab fa-twitter" />
              </a>
              <a href className="text-white me-4">
                <i className="fab fa-google" />
              </a>
              <a href className="text-white me-4">
                <i className="fab fa-instagram" />
              </a>
              <a href className="text-white me-4">
                <i className="fab fa-linkedin" />
              </a>
              <a href className="text-white me-4">
                <i className="fab fa-github" />
              </a>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}
          {/* Section: Links  */}
          <section className>
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold">Company name</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Products</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                  <p>
                    <a href="#!" className="text-white no-underline hover:underline">MDBootstrap</a>
                  </p>
                  <p>
                    <a href="#!" className="text-white no-underline hover:underline">MDWordPress</a>
                  </p>
                  <p>
                    <a href="#!" className="text-white no-underline hover:underline">BrandFlow</a>
                  </p>
                  <p>
                    <a href="#!" className="text-white no-underline hover:underline">Bootstrap Angular</a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                  <p>
                    <a href="#!" className="text-white no-underline hover:underline">Your Account</a>
                  </p>
                  <p>
                    <a href="#!" className="text-white no-underline hover:underline">Become an Affiliate</a>
                  </p>
                  <p>
                    <a href="#!" className="text-white no-underline hover:underline">Shipping Rates</a>
                  </p>
                  <p>
                    <a href="#!" className="text-white no-underline hover:underline">Help</a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                  <p><i className="fas fa-home mr-3" /> New York, NY 10012, US</p>
                  <p><i className="fas fa-envelope mr-3" /> info@example.com</p>
                  <p><i className="fas fa-phone mr-3" /> + 01 234 567 88</p>
                  <p><i className="fas fa-print mr-3" /> + 01 234 567 89</p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}
          {/* Copyright */}
          <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
            © 2020 Copyright : 
            <a className="text-white no-underline hover:underline" href="https://mdbootstrap.com/"> MDBootstrap.com</a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </div>
      

</div>

  )
}

export default Footer