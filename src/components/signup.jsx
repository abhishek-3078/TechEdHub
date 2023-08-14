import './signup.css';
function SignUp() {
    return (
        <div className='body'>
            <img src="http://wallpapercave.com/wp/ntYEFqo.jpg" alt="" />
            <div id="logo">
                <img src="https://cdn-icons-png.flaticon.com/128/1384/1384079.png" alt="" />
                <h1>MyChat</h1>
            </div>
            <div className="wrapper">
                <form action="/signup" method="post" id="loginForm">
                    <h1>SignUp</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            name="name"
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
                            type="tel"
                            placeholder="Enter your mobile no."
                            name="mobile"
                            autoComplete="off"
                            maxLength={10}
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
                    <div className="input-box">
                        <input
                            type="tel"
                            placeholder="Enter Your Age"
                            name="age"
                            autoComplete="off"
                            required=""
                        />
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/4753/4753121.png"
                            alt="lock"
                        />
                    </div>
                    <div id="genderDiv" className="input-box">
                        <span>
                            Male: <input type="radio" name="gender" defaultValue={0} />
                        </span>
                        <span>
                            Female : <input type="radio" name="gender" defaultValue={1} />
                        </span>
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