import * as constants from '../../../Utils/Constants/constants';
import Col from "../../General/Flexboxes/Column/Col";
import Row from "../../General/Flexboxes/Row/Row";
import home_page_food_image from '../../../Images/home_page_food_image.jpg';
import NutritionalityTitle from "../../General/Title/NutritionalityTitle";
import '../../../Styles/general.css';
import './HomeInfo.css';

function HomeInfo() {
    const HOME_DESCRIPTION = "Welcome to Nutritionality. Enjoy the world of food while maintaining loyalty to your diet!";
    const TITLE_WORDING = "Stay Loyal to Your Diet!";

    return (
        <Col styles='home-info-container card'>
            <Col styles='home-info-inner-container'>
                <Row styles='home-info-title-container'>
                    <NutritionalityTitle styles={constants.NUTRITIONALITY_TITLE_STYLES} wording={TITLE_WORDING} />
                </Row>
                <Row styles='home-main-image'>
                    <img className="home-main-image-src" src={home_page_food_image} alt="Plate of Food" />
                </Row>
                <Row styles='home-description-container'>
                    <Row styles='home-description-inner-container'>
                        <>{HOME_DESCRIPTION}</>
                    </Row>
                </Row>
            </Col>
        </Col>
    );
}

export default HomeInfo;