import styled from 'styled-components';
import { SIDE_NAV_WIDTH } from '../../SideNav/utils';
import { COLOURS, Column } from '../../utils';

export const Popup: React.FC<{
    children?: React.ReactNode | undefined;
    isOpen?: boolean;
    onClose?: () => void;
}> = ({ children, isOpen, onClose }) => {
    return (
        <>
            {isOpen ? (
                <Background onClick={onClose}>
                    <Container>{children}</Container>
                </Background>
            ) : null}
        </>
    );
};

const Background = styled(Column)`
    position: fixed;
    background-color: ${COLOURS.BACKGROUND}dd;
    top: 0px;
    left: ${SIDE_NAV_WIDTH}px;
    width: 100%;
    height: 120vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = styled(Column)`
    margin-left: -${SIDE_NAV_WIDTH}px;
    width: calc(80% - ${SIDE_NAV_WIDTH}px);
    height: 80vh;
`;
