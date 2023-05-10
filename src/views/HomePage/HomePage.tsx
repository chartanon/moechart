import styled from 'styled-components';
import { MoegeChart } from './Chart/MoegeChart';
import { SIDE_NAV_WIDTH, SideNav } from '../SideNav/SideNav';
import React from 'react';
import Background from '../assets/thumbnails/Background.jpg';

export const HomePage: React.FC = () => {
    return (
        <Container>
            <SideNav />
            <MoegeChart />
        </Container>
    );
};

const Container = styled.div`
    padding-left: calc(${SIDE_NAV_WIDTH}px + 20px);
    padding-bottom: 40px;
    margin-bottom: -10px;
    background: fixed url(${Background}) bottom right no-repeat;
`;
