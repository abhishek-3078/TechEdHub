import { API } from '../assets/constant';
import './signup.css';
import { Link } from 'react-router-dom';
function SignUp() {
    return (
        <div className='body'>
            <img src="http://wallpapercave.com/wp/ntYEFqo.jpg" alt="" />
            <div id="logo">
                <Link to="/">
                    <img src="src\components\TechEdHubLogo-fotor-bg-remover-2023081622354.png" alt="" />
                </Link>
            </div>
            <div className="wrapper">
                <form action={`${API}/signup`} method="post" id="loginForm">
                    <h1>SignUp</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            name="fullname"
                            autoComplete="off"
                            required=""
                        />
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/456/456212.png"
                            alt="user"
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Enter Your UserName"
                            name="username"
                            autoComplete="off"
                            required=""
                        />
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/456/456212.png"
                            alt="user"
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            autoComplete="off"
                            required=""
                        />
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/597/597177.png"
                            alt="lock"
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
                    <button type="submit" id="submitLogin" className="btn">
                        SignUp
                    </button>
                    <div className="register-link">
                        <p>
                            Have an acoount <a href="/login">Login</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default SignUp;