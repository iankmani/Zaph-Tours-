import "./Trip.css";
import honeymoon from "../../assets/packages/honeymoon.jpeg";
import Familyadventure from "../../assets/packages/familyAdventures.jpeg";
import culturalTours from "../../assets/packages/culturaltours.jpeg";
import wildlifeSafaris from "../../assets/packages/wildlifesafaris.jpeg";
import ecoTours from "../../assets/packages/ecotours.jpeg";
import Luxury from "../../assets/packages/luxury.jpeg";
import beach from "../../assets/packages/beachholiday.jpeg";
import retreat from "../../assets/packages/wellnessRetreat.jpeg";
import culinary from "../../assets/packages/culinaryTours.jpeg";
const Trip = () => {
  return (
    <div className="trip-container">
      <h1>Trip-Types</h1>
      <div className="packages">
        <div className="package">
          <div className="package-image">
            <img src={honeymoon} alt="" className="package-image-img" />
          </div>
          <div className="package-name">
            <h3>Honey Moon</h3>
          </div>
          <div className="package-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
              quam.
            </p>
          </div>
          <div className="package-price">
            <p>Price: Ksh 450,000</p>
          </div>
        </div>
        <div className="package">
          <div className="package-image">
            <img src={Familyadventure} alt="" className="package-image-img" />
          </div>
          <div className="package-name">
            <h3>Family Adventure</h3>
          </div>
          <div className="package-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
              quam.
            </p>
          </div>
          <div className="package-price">
            <p>Price: Ksh 79,000</p>
          </div>
        </div>
        <div className="package">
          <div className="package-image">
            <img src={culturalTours} alt="" className="package-image-img" />
          </div>
          <div className="package-name">
            <h3>Cultural Tours</h3>
          </div>
          <div className="package-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
              quam.
            </p>
          </div>
          <div className="package-price">
            <p>Price: Ksh 20,000</p>
          </div>
        </div>
        <div className="package">
          <div className="package-image">
            <img src={wildlifeSafaris} alt="" className="package-image-img" />
          </div>
          <div className="package-name">
            <h3>Wildlife Safaris</h3>
          </div>
          <div className="package-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
              quam.
            </p>
          </div>
          <div className="package-price">
            <p>Price: Ksh 12,000</p>
          </div>
        </div>
        <div className="package">
          <div className="package-image">
            <img src={ecoTours} alt="" className="package-image-img" />
          </div>
          <div className="package-name">
            <h3>Eco-Tourism</h3>
          </div>
          <div className="package-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
              quam.
            </p>
          </div>
          <div className="package-price">
            <p>Price: Ksh 25,000</p>
          </div>
        </div>
        <div className="package">
          <div className="package-image">
            <img src={Luxury} alt="" className="package-image-img" />
          </div>
          <div className="package-name">
            <h3>Luxury Vacations</h3>
          </div>
          <div className="package-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
              quam.
            </p>
          </div>
          <div className="package-price">
            <p>Price: Ksh 55,000</p>
          </div>
        </div>
        <div className="package">
          <div className="package-image">
            <img src={beach} alt="" className="package-image-img" />
          </div>
          <div className="package-name">
            <h3>Beach Holidays</h3>
          </div>
          <div className="package-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
              quam.
            </p>
          </div>
          <div className="package-price">
            <p>Price: Ksh 120,000</p>
          </div>
        </div>
        <div className="package">
          <div className="package-image">
            <img src={retreat} alt="" className="package-image-img" />
          </div>
          <div className="package-name">
            <h3>Wellness Retreats</h3>
          </div>
          <div className="package-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
              quam.
            </p>
          </div>
          <div className="package-price">
            <p>Price: Ksh 40,000</p>
          </div>
        </div>
        <div className="package">
          <div className="package-image">
            <img src={culinary} alt="" className="package-image-img" />
          </div>
          <div className="package-name">
            <h3>Culinary Tours</h3>
          </div>
          <div className="package-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
              quam.
            </p>
          </div>
          <div className="package-price">
            <p>Price: Ksh 12,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Trip;
