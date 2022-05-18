import Row from "../../Components/General/Flexboxes/Row/Row";
import HomeInfo from "../../Components/Nutritionality/HomeInfo/HomeInfo";
import HomeSlides from "../../Components/Nutritionality/HomeSlides/HomeSlides";
import '../skinnyPage.css';
import './HomePage.css';

function HomePage() {
    return (
        <Row styles='home-page skinny-page'>
            <HomeInfo />
            <HomeSlides />
        </Row>
    );
}

export default HomePage;