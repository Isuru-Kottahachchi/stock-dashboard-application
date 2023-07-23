import React from 'react'
import "./login.scss"
import LoginImage from './login-image.png';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';


const Login = () => {

    const handleLogin = (event) => {

        event.preventDefault();

    }
    return (
        <div className="login" >
            <div className="card">
                <div className="left">
                    <form>

                        <PersonOutlineSharpIcon className='userClass' />
                        <input type="text" className='userName' placeholder="Username" />

                        <LockOutlinedIcon className='passwordClass' />
                        <input type="password" className='passwordName' placeholder="Password" />
                        <label>
                            <input
                                type="checkbox"
                            />
                            <span className='othertext'>  Remember me</span>  <span style={{ color: 'purple' }}> Forget password</span>
                        </label>

                        <button onClick={handleLogin}>Log in</button>

                        <p>Or <span style={{ color: 'purple' }}>register now!</span></p>

                    </form>
                </div>
                
                <div className="right">
                    <img src={LoginImage} alt="LoginImage" />
                </div>
            </div>
        </div>
    );
}

export default Login