import { useState } from 'react';
import './Rating.css';

const Rating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
        <>
        <div id="comments">
        <section className='section'>
            <h1>Person 1</h1>
            <p>This is awsome url shorner. It helped me a lot</p>
        </section>
        <section className='section'>
            <h1>Person 2</h1>
            <p>This is awsome url shorner. It helped me a lot</p>
        </section>
        <section className='section'>
            <h1>Person 3</h1>
            <p>This is awsome url shorner. It helped me a lot</p>
        </section>
        </div>
            <div className="star-rating">
                <h1>Rate us</h1>
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index <= (hover || rating) ? "on" : "off"}
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                        >
                            <span className="star">&#9733;</span>
                            {/* <span className="star">&#9785;</span> */}
                        </button>
                    );
                })}
                <div className='txt'>
                    <input placeholder='Type your message here...'/>
                    <button>Submit</button>
                </div>
            </div>
        </>
    );
};

export default Rating;