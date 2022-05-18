import { SearchResultsProps } from './ISearchResultsProps';
import { useInspectedPet } from '../../../Hooks/useInspectedPet';
import { useWindowSize } from '../../../Hooks/useWindowSize';
import { InspectedPetContextType } from '../../../Contexts/InspectedPetContext/InspectedPetContextType';
import { NO_PETS_FOUND_MESSAGE } from '../../../Utils/Constants/constants';
import { Pet } from '../../../Interfaces/IPet';
import SymmetricalGrid from '../../General/Grids/SymmetricalGrid/SymmetricalGrid';
import PetResult from './PetResult/PetResult';
import Col from '../../General/Flexboxes/Column/Col';
import Row from '../../General/Flexboxes/Row/Row';
import '../../../Styles/general.css';
import './SearchResults.css';

function SearchResults({ pets, errorMessage }: SearchResultsProps) {
    const { updateInspectedPet } = useInspectedPet() as InspectedPetContextType;
    const [windowHeight, windowWidth] = useWindowSize();

    //Event sent by default by PetResult component:
    const moreDetailsRequestHandler = (event: any, pet: Pet) => {
        updateInspectedPet(pet);
    };

    const getNumOfColumns = () => {
        return windowWidth <= 1000 ? 1 : windowWidth <= 1500 ? 2 : 3;
    };

    return (
        <Col styles='search-results-grid-container card'>
            <>
                {errorMessage ?
                    <Row styles='no-pets-found-message'>
                        <>{errorMessage}</>
                    </Row>
                    :
                    !pets ?
                        <Row styles='no-pets-found-message'>
                            <>{NO_PETS_FOUND_MESSAGE}</>
                        </Row>
                        :
                        <SymmetricalGrid styles='search-results-grid' numOfColumns={getNumOfColumns()}>
                            {pets.map((pet: Pet, index: number) => (
                                <Row styles='search-pet-result-wrapper'>
                                    <PetResult
                                        key={index}
                                        pet={pet}
                                        onMoreDetailsRequest={moreDetailsRequestHandler}
                                    />
                                </Row>
                            ))}
                        </SymmetricalGrid>}
            </>
        </Col >
    );
}

export default SearchResults;