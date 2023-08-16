import React, { useState } from 'react'
import './navbarCSS.css'



let arrayOfTabs = [
  {
    'name': 'Home',
    'link': '#'
  },
  {
    'name': 'About Us',
    'link': '#'
  },
  {
    'name': 'Contact Us',
    'link': '#'
  },
  {
    'name': 'Our Team',
    'link': '#'
  }
]
const Logo = (props) => {
  const link = props.link;
  return (
    <a href={link}>

      <img src="https://i0.wp.com/edtechhub.org/wp-content/uploads/2022/01/EdTech-Hub-Logotype-WM-4.png?fit=400%2C173&ssl=1" alt="Tech Ed Hub" />
    </a>
  )
}




const NavOption = ({name, link, tabActive, handleClick}) => {
  const id = name;
  const linkOfTheTab = link;


  console.log(name, tabActive)

  return <>
          <a href='#'>
            <li className={tabActive===id? "activeTab" : ""} onClick={() => {handleClick(id);}}>
              {name}
            </li>
          </a>
        </>
}


const NavTab = () => {
  const [tabActive, setTabActive] = useState('Home');



  function handleClick(nameOfTheTab)
  {
    console.log("The name of the tab active has been set to ",nameOfTheTab);
    setTabActive(nameOfTheTab);
  }

  return (
    <ul>
      {arrayOfTabs.map((item) => {
        return <NavOption name={item.name} link={item.link} tabActive={tabActive} handleClick={handleClick} />
      })}
    </ul>
  )
}

const Navbar = () => {




  return (
    <nav>
      <div className='logoContainer'>
        <Logo link="#"/>
      </div>

      <div className='tabContainers'>
        <ul>
          <NavTab />
        </ul>
      </div>


      <div className='loginSign_UpContainer'>

      </div>
    </nav>

  )
}

export default Navbar