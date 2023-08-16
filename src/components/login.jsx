import './login.css';
function Login() {
    const url='http://'
    const handleSubmit=async()=>{
    //    const res= await fetch(url)
    }
    return (
        <div className='body'>
            <img src="http://wallpapercave.com/wp/ntYEFqo.jpg" alt="" />
            <div className="wrapper">
                <form action="http://localhost:3000/login" method="post" id="loginForm" >
                    <h1>Login</h1>
                    <div className="input-box">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            autoComplete="off"
                            name="email"
                            
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