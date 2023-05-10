import React from 'react';
import styled from 'styled-components';
import { COLOURS, Column, LabelFont, TitleFont } from '../utils';
import { legendData } from './LegendData';
import { LegendItem } from './LegendItem';

export const SIDE_NAV_WIDTH = 300;

export const SideNav: React.FC = () => {
    return (
        <NavBar>
            <TextContainer>
                <Section>
                    <TitleFont>THE FUCK IS A MOEGE</TitleFont>
                    <LabelFont $textAlign="justify">
                        A "moege" is a type of visual novel that is generally
                        lacking in serious drama and has nothing major at stake.
                        Instead, moege tend to focus on romance and cute girls.
                        At the extreme end, they may have no appreciable
                        conflict or plot whatsoever.
                    </LabelFont>
                </Section>
                <Section>
                    <TitleFont>ABOUT THE MOECHART</TitleFont>
                    <LabelFont $textAlign="justify">
                        This is <strong>not</strong> a recommendation chart, and
                        no game will be rated here. The main purpose of the
                        chart is to provide a complete list of moege (currently
                        translated and future releases) sorted by 3
                        content-related focuses. Additionally, some Moenukige
                        (ero centric titles with significant moege elements)
                        will also be listed on this chart.
                    </LabelFont>
                </Section>
                <Section>
                    <TitleFont>FOCUSES OF INTEREST</TitleFont>
                    <GradientText>
                        <GradientTopLabel>Storyline</GradientTopLabel>
                        <GradientTopLabel>Romance</GradientTopLabel>
                        <GradientTopLabel>Comedy</GradientTopLabel>
                    </GradientText>
                    <GradientBar />
                    <GradientText>
                        <GradientBottomLabel>Sto-Rom</GradientBottomLabel>
                        <GradientBottomLabel>Rom-Com</GradientBottomLabel>
                    </GradientText>
                    <LabelFont $textAlign="justify">
                        Note: Romance and comedy are present (to varying
                        degrees) in all the titles listed here. Generally, moege
                        have simple storylines, but there are still some titles
                        that are more engaging or memorable than others in this
                        aspect.
                    </LabelFont>
                </Section>
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

const Section = styled(Column)`
    display: flex;
    gap: 10px;
`;

const GradientText = styled.div`
    display: flex;
    font-size: 0.9rem;
    text-align: center;
`;

const GradientBar = styled.div`
    height: 1rem;
    margin: 0.4rem 0;
    border-radius: 0.2rem;
    background: linear-gradient(
        90deg,
        #2e62dd 0%,
        #9b3add 25%,
        #dd4b4b 50%,
        #dd7b4b 75%,
        #e1cd5d 100%
    );
    position: relative;
    transform-style: preserve-3d;
`;

const GradientTopLabel = styled(LabelFont)`
    width: 33%;
`;

const GradientBottomLabel = styled(LabelFont)`
    width: 50%;
`;
