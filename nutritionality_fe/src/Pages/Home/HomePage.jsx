import Col from "../../Components/General/Flexboxes/Column/Col";
import Row from "../../Components/General/Flexboxes/Row/Row";
import HomeInfo from "../../Components/Nutritionality/HomeInfo/HomeInfo";
import HomeSlides from "../../Components/Nutritionality/HomeSlides/HomeSlides";
import '../skinnyPage.css';
import './HomePage.css';

function HomePage() {
    return (
        <Col styles='home-page wide-page'>
            <Row styles="home-page-title">{'Nutritionality'}</Row>
            <HomeInfo />
            <HomeSlides />
        </Col>
    );
}

export default HomePage;