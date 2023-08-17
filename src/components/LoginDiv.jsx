import React from 'react'
import './LoginDivCSS.css'
import { API } from '../assets/constant';
import { Link } from 'react-router-dom';

const LoginDiv = () => {
    const username = localStorage.getItem('username');
    // console.log("username : ",username);
    

    const logout = async()=>{
        const res=await fetch(`${API}/logout`)
        const data=await res.json()
        if(data.success){
          localStorage.removeItem('token')
          localStorage.removeItem('useremail');
          localStorage.removeItem('username');
          window.location.href="/login"
        }
        // ,{
        //   method: 'GET',
        //   credentials: 'include'
        // })
        // const data=await res.json()
        // console.log(data)
        // window.location.assign(`${API}/logout`)
      }

  return (
    
    <div className="loginDivContainer absolute right-10 z-[100]">
        <div className="profContainer childlogindiv">

            <div className='userContainer'>
                <h2>{(username != null) ? username : "User"}</h2>
            </div>
        </div>


        <div className="optionContainer childlogindiv">
            <ul>
                <Link to ={`/userprofile/${username}`} className='no-underline'><li className="optionItem ">
                    <div  className='optionImageContainer' >
                        <img src="https://media.geeksforgeeks.org/img-practice/user_web-1598433228.svg"/>
                    </div>
                    <div className="optionItem-name ">
                        <h2 >My Profile</h2>
                    </div>
                </li>
                </Link>
                <li className="optionItem">
                    <div className='optionImageContainer'>
                        <img src="https://img.freepik.com/free-icon/books_318-761759.jpg?w=2000"/>
                    </div>
                    <div className="optionItem-name">
                        <h2>My Courses</h2>
                    </div>
                </li>
                <li className="optionItem">
                    <div className='optionImageContainer'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5cC5dP-hjSxV6BK90FNEvaPtJ6NbSXKQbU4FUk3eUJmjUehDTwUqQIxFo3wu8hxRpj_I&usqp=CAU"/>
                    </div>
                    <div className="optionItem-name">
                        <h2>Go Premium</h2>
                    </div>
                </li>
                <li className="optionItem">
                    <div className='optionImageContainer'>
                        <img src="https://icon-library.com/images/pen-icon-png/pen-icon-png-3.jpg"/>
                    </div>
                    <div className="optionItem-name">
                        <h2>Edit Profile</h2>
                    </div>
                </li>
                <li className="optionItem">
                    <div className='optionImageContainer'>
                        <img src="https://cdn-icons-png.flaticon.com/512/900/900834.png"/>
                    </div>
                    <div className="optionItem-name">
                        <h2>Account Settings</h2>
                    </div>
                </li>
                <li className="optionItem">
                    <div className='optionImageContainer'>
                        <img src="https://cdn-icons-png.flaticon.com/512/3580/3580154.png"/>
                    </div>
                    <div className="optionItem-name" onClick={logout}>
                        <h2>Logout</h2>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default LoginDiv