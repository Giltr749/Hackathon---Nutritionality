import ImageCarousel from '../../General/Carousels/ImageCarousel';
import Col from "../../General/Flexboxes/Column/Col";
import home_page_food_image from '../../../Images/home_page_food_image.jpg';
import './HomeSlides.css';

function HomeSlides() {
    return (
        <Col styles='home-slides-container' >
            <Col styles='home-slides-inner-container'>
                <ImageCarousel
                    images={[home_page_food_image]}
                />
            </Col>
        </Col >
    );
}

export default HomeSlides;