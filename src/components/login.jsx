import './login.css';
import { API } from '../assets/constant';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    console.log("Step1")
    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log("inside")
        try{
            const res= await fetch(`${API}/login`,{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json' 
                },
                body:JSON.stringify({
                    email: email,
                    password: password
                })
            }
            )
            const data=await res.json()
            console.log("afete",data)
            if(data.success){
                localStorage.setItem('token',data.token)
                window.location.href="/"
            }
        }catch(e){
            console.log("hello")
              
        }
     
    }
    return (
        <div className='body'>
            <div class="logoContainerInLogin">
                <Link to="/">
                    <img src="src\components\TechEdHubLogo-fotor-bg-remover-2023081622354.png" />
                </Link>
            </div>
            <img src="http://wallpapercave.com/wp/ntYEFqo.jpg" alt="" />
            <div className="wrapper">
                <form method="post" id="loginForm" onClick={handleSubmit} >
                    <h1>Login</h1>
                    <div className="input-box">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            autoComplete="off"
                            name="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            
                        />
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/456/456212.png"
                            alt="user"
                        /> 
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Enter password"
                            name="password"
                            required=""
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/1828/1828471.png"
                            alt="lock"
                        />
                    </div>
                    <div className="remember-forget">
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <a href="#">Forget password</a>
                    </div>
                    <button type="submit" id="submitLogin" className="btn">
                        Login
                    </button>
                    <div className="register-link">
                        <p>
                            Don't have an acoount <a href="/signup">Register</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default Login;