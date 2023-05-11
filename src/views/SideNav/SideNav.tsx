import React from 'react';
import styled from 'styled-components';
import { COLOURS, Column, TitleFont, Section } from '../utils';
import { legendData } from './LegendData';
import { LegendItem } from './LegendItem';
import { FAQ } from './FAQ';
import { FocusesOfInterest } from './FocusesOfInterest';

export const SIDE_NAV_WIDTH = 300;

export const SideNav: React.FC = () => {
    return (
        <NavBar>
            <TextContainer>
                <Section>
                    <TitleFont>LEGEND</TitleFont>
                    {legendData.map(legendItem => {
                        return (
                            <LegendItem
                                {...legendItem}
                                key={legendItem.label}
                            />
                        );
                    })}
                </Section>
                <FocusesOfInterest />
                <Divider />
                <FAQ />
            </TextContainer>
        </NavBar>
    );
};

const NavBar = styled(Column)`
    height: 100%;
    width: ${SIDE_NAV_WIDTH}px;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    background-color: ${COLOURS.NAVBAR};
    overflow-y: scroll;
    scrollbar-color: ${COLOURS.TEXT} ${COLOURS.NAVBAR};
`;

const TextContainer = styled(Column)`
    display: flex;
    gap: 20px;
    padding: 20px;
`;

const Divider = styled.div`
    padding: 20px;
    border-bottom: 2px solid ${COLOURS.SECONDARY};
`;
