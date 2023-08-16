import React, { useState,useEffect } from 'react'
import './navbarCSS.css'
import { Link } from 'react-router-dom';
import { API } from '../assets/constant';
import LoginDiv from "./LoginDiv";



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
    <a href='/'>

      <img src="src\components\TechEdHubLogo-fotor-bg-remover-2023081622354.png" alt="Tech Ed Hub" />
    </a>
  )
}




const NavOption = ({name, link, tabActive, handleClick}) => {
  const id = name;
  const linkOfTheTab = link;


  console.log(name, tabActive)

  return (<>
            <li className={tabActive===id? "activeTab" : ""} onClick={() => {handleClick(id);}}>
              {name}
            </li>
        </>)
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

  const [userName,setUserName] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the URL for the API endpoint
    const apiUrl =`${API}/getUser` ;
    const token=localStorage.getItem('token')
    // Use the fetch function to make the request
    fetch(apiUrl,{
      headers:{
        "Authorization":token
      }
    }).then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }).then(data => {
        console.log(data)
        // setData(data); // Update state with fetched data
        localStorage.setItem({userdata : data});
        setUserName(data.fullname);
        setLoading(false); // Set loading to false
      }).catch(error => {
        setError(error); // Set error state if the fetch fails
        setLoading(false); // Set loading to false
      });
  }, []); 

  if(userName != null){
    var userFirstNameChar = userName[0].toUpperCase();
  }





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
        <div className="container">
          {userName != null ? <div className='userImg rounded-full h-10 w-10 text-white text-3xl leading-[100
          %] bg-slate-500'>{userFirstNameChar}  </div> :
            <>
            <Link to="/login"><button className="log">Login</button></Link> 
            <Link to="/signup"><button className="reg">Sign up</button></Link>
            </>
          }
         
        </div>
        
      </div>
    </nav>

  )
}

export default Navbar