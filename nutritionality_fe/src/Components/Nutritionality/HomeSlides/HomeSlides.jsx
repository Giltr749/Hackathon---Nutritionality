import ImageCarousel from '../../General/Carousels/ImageCarousel';
import Col from "../../General/Flexboxes/Column/Col";
// import dog2_image from '../../../Images/dog_2.jpg';
// import dog3_image from '../../../Images/dog_3.jpg';
// import dog4_image from '../../../Images/dog_4.jpg';
// import dog5_image from '../../../Images/dog_5.jpg';
// import cat1_image from '../../../Images/cat_1.jpg';
import './HomeSlides.css';

function HomeSlides() {
    return (
        <Col styles='home-slides-container card' >
            <Col styles='home-slides-inner-container'>
                <ImageCarousel
                    images={[]}
                />
            </Col>
        </Col >
    );
}

export default HomeSlides;