import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="">
      <div className="navbar bg-[#000000] p-[10px]" id="navbarID">
        <ul className="nav">
          <li>
              <a class="navbar-brand" href="/">
                  <img src="https://i0.wp.com/www.theloremipsumco.com/wp-content/uploads/2016/07/LoremIpsumLogo.png?fit=600%2C138&ssl=1" className="LogoImg" width="30" height="30" alt="" />
              </a>
          </li>
          <li className="nav-item m-[5px]" id="navitem1">
            <a className="nav-link active" href="#">
              Active
            </a>
          </li>
          <li className="nav-item dropdown m-[5px]" id='navitem2'>
            <a
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </div>
          </li>
          <li className="nav-item m-[5px]" id="navitem3">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item m-[5px]">
            <a className="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Navbar