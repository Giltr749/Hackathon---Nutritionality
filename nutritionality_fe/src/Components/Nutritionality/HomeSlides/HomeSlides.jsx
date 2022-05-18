import { useEffect, useState } from "react";
import Col from "../../General/Flexboxes/Column/Col";
import './HomeSlides.css';

function HomeSlides() {
    const [currentLocation, setCurrentLocation] = useState({ latitude: '', longitude: '' });

    useEffect(() => {
        calculateCurrentLocation();
    }, []);

    const calculateCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCurrentLocation(prevState => ({
                ...prevState,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }));
        });
    };

    return (
        <Col styles='home-slides-container' >
            <iframe style={{ height: "100%", width: "100%" }} src={`http://maps.google.com/maps?q=${currentLocation.longitude},${currentLocation.latitude}&z=16&output=embed`}></iframe>
        </Col >
    );
}

export default HomeSlides;