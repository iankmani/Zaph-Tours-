import './ContactUs.css'
import { FaInstagram} from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const ContactUs = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>We would love to respond to your queries and help yo succeed</p>
            <div className="contact-box">
                <div className="contact-left">
                    <h3>Send your request</h3>
                    <form>
                        <div className="contact-input-row">
                            <div className="contact-input-group">
                                <label>Name</label>
                                <input type="text" placeholder='santorini' />
                            </div>
                            <div className="contact-input-group">
                                <label>Phone Number</label>
                                <input type="text" placeholder='+254 708838737' />
                            </div>
                        </div>
                        <div className="contact-input-row">
                            <div className="contact-input-group">
                                <label>Email</label>
                                <input type="email" placeholder='user@gmail.com' />
                            </div>
                            <div className="contact-input-group">
                                <label>Subject</label>
                                <input type="text" placeholder='subject' />
                            </div>
                        </div>

                        <label>Message</label>
                        <textarea rows="5" placeholder='write your message here'></textarea>
                        <button type='submit'>Click to Submit</button>

                        <h5>Follow us on:</h5>
                    </form>
                    <div className='mediabuttons'>
                        <a href='#' target='_blank' className='linko' ><FaInstagram/></a>
                            <a href='#' target='_blank' className='linko'>< FaFacebook /></a>
                                <a href='#' target='_blank' className='linko'>< FaTwitter /></a>
                                <a href='#' target='_blank' className='linko'>< FaWhatsapp /></a>


                        
                    </div>
                    

                </div>
                <div className="contact-right">
                    <h3>Reach us</h3>

                    <table>
                        <tr>
                            <td>Email Us:</td>
                            <td>ZaphTours254@gmail.com</td>
                        </tr>
                        <tr>
                            <td>phone number:</td>
                            <td>+254 722 455 434</td>
                        </tr>
                        <tr>
                            <td>physical Adress:</td>
                            <td>P.O BOX 344-5677, Amboseli,kenya</td>
                        </tr>

                       

                    </table>
                    <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.543017364938!2d37.25804577408829!3d-2.652670497325041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18309e7455555555%3A0x8405eed269adf949!2sAmboseli%20National%20Park!5e0!3m2!1sen!2ske!4v1717836438185!5m2!1sen!2ske" width="400" height="300" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
                    <p>
                       Office Hours: Open from 8AM - 5PM.
                    </p>


                </div>
            </div>
        </div>

    )
}
export default ContactUs;