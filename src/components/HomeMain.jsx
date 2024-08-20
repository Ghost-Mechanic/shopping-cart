import '../styles/home-main.css';
import smileImage from '../assets/computer-smile.jpg';
import groupImage from '../assets/happy-group.jpg';

function HomeMain() {
    return (
        <>
            <main>
                <h1 className="tagline" tabIndex="0">Make Shopping Simpler.</h1>
                <h2 className="tagline-sentence">Browse through our wide variety of products to find exactly what you&apos;re looking for today.</h2>
                <img className="smile-image" src={smileImage} alt="" />
                <div className="tagline-large-container">
                    <div className="tagline-and-sentence">
                        <img className="smile-image-large" src={smileImage} alt="" />
                        <div>
                            <h1 className="tagline-large" tabIndex="0">Make Shopping Simpler.</h1>
                            <h2 className="tagline-sentence-large">Browse through our wide variety of products to find exactly what you&apos;re looking for today.</h2>
                        </div>
                    </div>
                </div>
                <div className="tagline-larger-container">
                    <div className="tagline-and-image">
                        <img className="smile-image-larger" src={smileImage} alt="" />
                        <div className="tagline-and-about">
                            <div>
                                <h1 className="tagline-larger" tabIndex="0">Make Shopping Simpler.</h1>
                                <h2 className="tagline-sentence-larger">Browse through our wide variety of products to find exactly what you&apos;re looking for today.</h2>
                            </div>
                            <div>
                                <h1 className="about-larger" tabIndex="0">About</h1>
                                <p className="about-paragraph-larger">Here at Ghost&apos;s Shop, we believe that shopping should be made as simple as possible. To fulfill our mission, everything that you will need and want can be found in our store right here. What are you waiting for? Get to shopping!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="about" tabIndex="0">About</h1>
                <p className="about-paragraph">Here at Ghost&apos;s Shop, we believe that shopping should be made as simple as possible. To fulfill our mission, everything that you will need and want can be found in our store right here. What are you waiting for? Get to shopping!</p>
                <h2 className="satisfaction" tabIndex="0">Customer Satisfaction Guaranteed</h2>
                <h3 className="satisfaction-paragraph">Not completely satisfied with your purchase? Return your item in like-new condition within 2 months of purchase for a FULL refund, no questions asked!</h3>
                <img className="group" src={groupImage} alt="" />
            </main>
        </>
    )
}

export default HomeMain;