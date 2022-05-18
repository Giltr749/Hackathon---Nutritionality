import SearchForm from '../../Components/Nutritionality/SearchForm/SearchForm';
import SearchResults from '../../Components/Nutritionality/SearchResults/SearchResults';
import Col from '../../Components/General/Flexboxes/Column/Col';
import { useState } from 'react';
import '../skinnyPage.css';
import './SearchPage.css';

function SearchPage() {
    const [petResults, setPetResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    const searchPetsHandler = (petResults) => {
        setPetResults(petResults);
    };

    const searchPetsErrorHandler = (errorMessage) => {
        setErrorMessage(errorMessage);
    };

    return (
        <Col styles='skinny-page search-page'>
            <SearchForm onSearchPets={searchPetsHandler} onError={searchPetsErrorHandler} />
            <SearchResults pets={petResults} errorMessage={errorMessage} />
        </Col>
    );
}

export default SearchPage;