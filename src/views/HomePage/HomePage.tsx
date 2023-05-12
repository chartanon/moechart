import styled from 'styled-components';
import { MoegeChart } from './Chart/MoegeChart';
import { SIDE_NAV_WIDTH, SideNav } from '../SideNav/SideNav';
import React, { useState } from 'react';
import Background from '../assets/thumbnails/Background.jpg';
import { PlaytimeLength, Attribute } from './Chart/VisualNovelEntry';

export const HomePage: React.FC = () => {
    const [selectedPlaytimeFilter, setSelectedPlaytimeFilter] =
        useState<PlaytimeLength | null>(null);
    const [selectedAttributesFilters, setSelectedAttributesFilters] = useState<
        Attribute[]
    >([]);

    const handleSetSelectedPlaytimeFilter = (value: PlaytimeLength | null) => {
        selectedPlaytimeFilter === value
            ? setSelectedPlaytimeFilter(null)
            : setSelectedPlaytimeFilter(value);
    };

    const handleSetSelectedAttributesFilters = (value: Attribute) => {
        if (selectedAttributesFilters.some(attribute => attribute === value)) {
            setSelectedAttributesFilters(
                selectedAttributesFilters.filter(
                    attribute => attribute !== value
                )
            );
        } else {
            setSelectedAttributesFilters([...selectedAttributesFilters, value]);
        }
    };

    return (
        <Container>
            <SideNav
                selectedPlaytimeFilter={selectedPlaytimeFilter}
                handleSetSelectedPlaytimeFilter={
                    handleSetSelectedPlaytimeFilter
                }
                selectedAttributesFilters={selectedAttributesFilters}
                handleSetSelectedAttributesFilters={
                    handleSetSelectedAttributesFilters
                }
            />
            <MoegeChart
                selectedPlaytimeFilter={selectedPlaytimeFilter}
                selectedAttributesFilters={selectedAttributesFilters}
            />
        </Container>
    );
};

const Container = styled.div`
    padding-left: calc(${SIDE_NAV_WIDTH}px + 20px);
    padding-bottom: 40px;
    margin-bottom: -10px;
    background: fixed url(${Background}) bottom right no-repeat;
`;
