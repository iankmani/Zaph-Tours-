import '@splidejs/splide/dist/css/splide.min.css';
import './Testimonials.css'
import { reviews } from "./reviewsdata"
import { Splide, SplideSlide } from '@splidejs/react-splide'; 
const Testimonials = () =>{
    return(
        <section className="testimonial-container">
            <div className="title">
                <h1>Testimonials</h1>
            </div>

            <div className="slider-container">
            
            <Splide
            options={{
                perPage: 1,
                autoplay: true,
                speed: 500,
                rewind: true,
                rewindByDrag: true,
                
            }}
            >
                {reviews.map((review) => (
                    <SplideSlide key = {review.id}>
                        <img src={review.Image} alt={review.name}  className="review-img"/>

                        <div className="content">
                            <p className="text">{review.text}</p>

                            <div className="info">
                                <div className="rating">
                                    <span className="star">&#9733;</span>
                                    <span className="star">&#9733;</span>
                                    <span className="star">&#9733;</span>
                                    <span className="star">&#9733;</span>
                                    <span className="star">&#9733;</span>
                                </div>
                                <p className="user">{review.name}</p>
                            </div>
                        </div>
                        </SplideSlide>
                ))}
                </Splide>
            </div>
        </section>
       
    )
       
}     
export default Testimonials;