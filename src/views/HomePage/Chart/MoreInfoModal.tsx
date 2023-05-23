import styled from 'styled-components';
import { SIDE_NAV_WIDTH } from '../../SideNav/utils';
import { COLOURS, Column, LabelFont } from '../../utils';

export const MoreInfoModal: React.FC = () => {
    return (
        <Container>
            <Column>
                <LabelFont>Hello</LabelFont>
            </Column>
        </Container>
    );
};

const Container = styled.div`
    position: fixed;
    background-color: ${COLOURS.BACKGROUND}dd;
    top: 0px;
    left: ${SIDE_NAV_WIDTH}px;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
