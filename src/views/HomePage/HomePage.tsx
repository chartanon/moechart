import styled from 'styled-components';
import { MoegeChart } from './Chart/MoegeChart';
import { SIDE_NAV_WIDTH, SideNav } from '../SideNav/SideNav';
import React, { useState } from 'react';
import Background from '../assets/thumbnails/Background.jpg';
import { PlaytimeLength, Attribute, GenreFocus } from './Chart/VisualNovelCard';
import { SortingOption } from '../SideNav/LegendData';

export const HomePage: React.FC = () => {
    const [selectedSortingOptions, setSelectedSortingOptions] = useState<
        SortingOption[]
    >([]);
    const [selectedPlaytimeFilter, setSelectedPlaytimeFilter] =
        useState<PlaytimeLength | null>(null);
    const [selectedGenreFocusFilter, setSelectedGenreFocusFilter] =
        useState<GenreFocus | null>(null);
    const [selectedAttributesFilters, setSelectedAttributesFilters] = useState<
        Attribute[]
    >([]);

    const handleSetSelectedSortingOptions = (value: SortingOption) => {
        if (
            selectedSortingOptions.some(
                sortingOption => sortingOption === value
            )
        ) {
            setSelectedSortingOptions(
                selectedSortingOptions.filter(
                    sortingOption => sortingOption !== value
                )
            );
        } else {
            setSelectedSortingOptions([...selectedSortingOptions, value]);
        }
    };

    const handleSetSelectedPlaytimeFilter = (value: PlaytimeLength) => {
        selectedPlaytimeFilter === value
            ? setSelectedPlaytimeFilter(null)
            : setSelectedPlaytimeFilter(value);
    };

    const handleSetSelectedGenreFocusFilter = (value: GenreFocus) => {
        selectedGenreFocusFilter === value
            ? setSelectedGenreFocusFilter(null)
            : setSelectedGenreFocusFilter(value);
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

    const clearFilters = () => {
        setSelectedSortingOptions([]);
        setSelectedPlaytimeFilter(null);
        setSelectedGenreFocusFilter(null);
        setSelectedAttributesFilters([]);
    };

    return (
        <Container>
            <SideNav
                selectedSortingOptions={selectedSortingOptions}
                handleSetSelectedSortingOptions={
                    handleSetSelectedSortingOptions
                }
                selectedPlaytimeFilter={selectedPlaytimeFilter}
                handleSetSelectedPlaytimeFilter={
                    handleSetSelectedPlaytimeFilter
                }
                selectedGenreFocusFilter={selectedGenreFocusFilter}
                handleSetSelectedGenreFocusFilter={
                    handleSetSelectedGenreFocusFilter
                }
                selectedAttributesFilters={selectedAttributesFilters}
                handleSetSelectedAttributesFilters={
                    handleSetSelectedAttributesFilters
                }
                clearFilters={clearFilters}
            />
            <MoegeChart
                selectedSortingOptions={selectedSortingOptions}
                selectedPlaytimeFilter={selectedPlaytimeFilter}
                selectedGenreFocusFilter={selectedGenreFocusFilter}
                selectedAttributesFilters={selectedAttributesFilters}
            />
        </Container>
    );
};

const Container = styled.div`
    padding-left: calc(${SIDE_NAV_WIDTH}px + 20px);
    padding-bottom: 40px;
    margin-bottom: -10px;
    min-height: 96vh;
    background: fixed url(${Background}) bottom right no-repeat;
`;
