import Carousel from 'react-elastic-carousel'
import './Homecarousel.css'

function Homecarousel(){
    
    /* Put some awesome image here*/

    return (
            <div className='carousel-container'>
                <Carousel>
                    <div> Item 1 </div>
                    <div> Item 2 </div>
                    <div> Item 3 </div>
                </Carousel>
            </div>
    )
}

export default Homecarousel
