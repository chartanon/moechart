import styled from 'styled-components';
import { SIDE_NAV_WIDTH } from '../../SideNav/utils';
import { COLOURS, Column } from '../../utils';

export const Modal: React.FC<{
    children?: React.ReactNode | undefined;
    isOpen?: boolean;
    onClose?: () => void;
}> = ({ children, isOpen, onClose }) => {
    return (
        <>
            {isOpen ? (
                <Background onClick={onClose}>
                    {children}
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
    width: calc(100% - ${SIDE_NAV_WIDTH}px);;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
`;
