import trial from "../../assets/elephant.jpeg"
import './FeaturedDestination.css'
const FeaturedDestinations = () =>{
    return(
        <div className="destination-container">
             <h1>Featured Destinations</h1>
        <div className="ftDestinations">
           
            <div className="destination">
                <div className="destination-image">
                    <img src={trial} alt="" className="destination-image-img" />
                </div>
                <div className="destination-name">
                    <h3>Mt.Kenya</h3>
                </div>
                <div className="destination-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, quam.</p>
                </div>
                <div className="destination-price">
                    <p>Price: Ksh 12,000</p>
                </div>
            </div>
            <div className="destination">
                <div className="destination-image">
                    <img src={trial} alt="" className="destination-image-img" />
                </div>
                <div className="destination-name">
                    <h3>MT. Ruwenzori</h3>
                </div>
                <div className="destination-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, quam.</p>
                </div>
                <div className="destination-price">
                    <p>Price: Ksh 12,000</p>
                </div>
            </div>
            <div className="destination">
                <div className="destination-image">
                    <img src={trial} alt="" className="destination-image-img" />
                </div>
                <div className="destination-name">
                    <h3>Lake Nakuru</h3>
                </div>
                <div className="destination-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, quam.</p>
                </div>
                <div className="destination-price">
                    <p>Price: Ksh 12,000</p>
                </div>
            </div>
            <div className="destination">
                <div className="destination-image">
                    <img src={trial} alt="" className="destination-image-img" />
                </div>
                <div className="destination-name">
                    <h3>Tsavo National Park</h3>
                </div>
                <div className="destination-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, quam.</p>
                </div>
                <div className="destination-price">
                    <p>Price: Ksh 12,000</p>
                </div>
            </div>

            <div className="destination">
                <div className="destination-image">
                    <img src={trial} alt="" className="destination-image-img" />
                </div>
                <div className="destination-name">
                    <h3>Nairobi National park</h3>
                </div>
                <div className="destination-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, quam.</p>
                </div>
                <div className="destination-price">
                    <p>Price: Ksh 12,000</p>
                </div>
            </div>
            <div className="destination">
                <div className="destination-image">
                    <img src={trial} alt="" className="destination-image-img" />
                </div>
                <div className="destination-name">
                    <h3>Coastal Kenya</h3>
                </div>
                <div className="destination-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, quam.</p>
                </div>
                <div className="destination-price">
                    <p>Price: Ksh 12,000</p>
                </div>
            </div>
        </div>
        </div>
    )
}
export default FeaturedDestinations;