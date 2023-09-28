import './HompageSection3.css'

import image1 from "../../assets/homepage-section3/image1.jpg"
import image2 from "../../assets/homepage-section3/image2.jpg"


const HompageSection3 = () => {

    return (
        <>
            <div className="homepage-section-3">
                <div className='image-container'>
                    <img className='homepage-3-image' src={image1} alt="img" />
                    <img className='homepage-3-image' src={image2} alt="img" />
                </div>
            </div>
        </>
    )
}

export default HompageSection3;