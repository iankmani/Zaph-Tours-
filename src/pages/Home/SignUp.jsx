import './SignUp.css'
import user_icon from '../../assets/icons/person.png'
import email_icon from '../../assets/icons/email.png'
import password_icon from '../../assets/icons/password.png'
const SignUp = () =>{
    return(
        <section className="container">
            <div className="head">
                <div className="txt">
                    <h1>Sign Up</h1>
                </div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="Username" />
                </div>
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="email address" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="password" />
                </div>
            </div>
            <div className="forgot-password">forgot password? <span>Click Here!</span></div>
            <div className="submit-container">
                <div className="submit">Sign up</div>
                <div className="submit">Login</div>
            </div>
        </section>

    )
}
export default SignUp;