import React from 'react'
import './LoginDivCSS.css'

const LoginDiv = () => {
  return (
    <div className="loginDivContainer">
        <div className="profContainer childlogindiv">

            <div className="profImgOuterBox">

                <div className="profImgContainer">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profImage" />
                </div>
            </div>

            <div className='userContainer'>
                <h2>Dark Avenger</h2>
            </div>
        </div>


        <div className="optionContainer childlogindiv">
            <ul>
                <li className="optionItem">
                    <div  className='optionImageContainer' >
                        <img src="https://media.geeksforgeeks.org/img-practice/user_web-1598433228.svg"/>
                    </div>
                    <div className="optionItem-name">
                        <h2>My Profile</h2>
                    </div>
                </li>
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
                    <div className="optionItem-name">
                        <h2>Logout</h2>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default LoginDiv