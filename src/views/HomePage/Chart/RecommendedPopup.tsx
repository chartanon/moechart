import styled from 'styled-components';
import { Column, HeaderFont, Row } from '../../utils';
import { Popup } from './Popup';

interface IProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export const RecommendedPopup: React.FC<IProps> = ({ isOpen, onClose }) => {
    return (
        <Popup isOpen={isOpen} onClose={onClose}>
            <Column $centered>
                <EntriesContainer $maxHeight $centered></EntriesContainer>
                <StyledHeaderFont>Recommended VN Information</StyledHeaderFont>
            </Column>
        </Popup>
    );
};

const EntriesContainer = styled(Row)`
    position: fixed;
    flex-wrap: wrap;
    top: 0;
    gap: 0px 80px;
    margin-top: 100px;
    @media (max-width: 1050px) {
        margin-top: 250px;
        overflow: auto;
        height: 75vh;
    }
`;

const StyledHeaderFont = styled(HeaderFont)`
    position: fixed;
    top: 5%;
`;
