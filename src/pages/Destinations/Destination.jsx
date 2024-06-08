import "./Destination.css";
import paris from '../../assets/cards/paris.jpeg'
import rome from '../../assets/cards/rome.jpeg'
import mombasa from '../../assets/cards/mombasa.jpeg'
import kisumu from '../../assets/cards/kisumu.jpeg'
import dubai from '../../assets/cards/dubai.jpeg'
import brazil from '../../assets/cards/brazil.jpeg'
const Destination = () => {
  return (
<div>
  <h1 className="card-heading">Explore Our Destinations</h1>
<div className="cards-container">
      
  <div className="cards">
      <div className="card">
          <div className="card-name">
            <h2>Paris</h2>
          </div>
          <div className="card-image">
              <img src={paris} alt="Paris" className="card-image-img" />
          </div>
          <div className="card-description">
                <p>
                  Paris, the capital of France, is a global center for art,
                  fashion, and cuisine. The city is famous for its iconic landmarks
                  such as the Eiffel Tower, Notre-Dame Cathedral, and the Louvre
                  Museum.
                </p>
          </div>
          <div className="card-prices">
            <p>Individual Cost: Ksh 80,000</p>
            <p>Price per Group: Ksh 350,000</p>
          </div>
          <div className="card-button">
                    <button>Learn More</button>
          </div>
                
      </div>
   </div>
</div>
</div>
    
  );
};
export default Destination;
