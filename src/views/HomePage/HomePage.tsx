import styled from 'styled-components';
import { MoegeChart } from './Chart/MoegeChart';
import { SideNav } from '../SideNav/SideNav';
import React, { useState } from 'react';
import Background from '../assets/thumbnails/Background.jpg';
import { MiscellaneousSortingOption } from '../SideNav/LegendData';
import { SIDE_NAV_WIDTH } from '../SideNav/utils';
import { GenreFocus, FilterAttribute } from './Chart/utils';
import { PlaytimeLength } from './Chart/utils';
export const HomePage: React.FC = () => {
    const [
        selectedMiscellaneousSortingOptions,
        setSelectedMiscellaneousSortingOptions
    ] = useState<MiscellaneousSortingOption[]>([]);
    const [selectedPlaytimeFilter, setSelectedPlaytimeFilter] =
        useState<PlaytimeLength | null>(null);
    const [selectedGenreFocusFilter, setSelectedGenreFocusFilter] =
        useState<GenreFocus | null>(null);
    const [selectedFilterAttributes, setSelectedFilterAttributes] = useState<
        FilterAttribute[]
    >([]);
    const [isSelectedHasSequelFilter, setIsSelectedHasSequelFilter] =
        useState<boolean>(false);
    const [isSelectedHideSequelFilter, setIsSelectedHideSequelFilter] =
        useState<boolean>(true);

    const [isInPopupView, setIsInPopupView] = useState<boolean>(false);

    const handleSetSelectedMiscellaneousSortingOptions = (
        value: MiscellaneousSortingOption
    ) => {
        if (
            selectedMiscellaneousSortingOptions.some(
                sortingOption => sortingOption === value
            )
        ) {
            setSelectedMiscellaneousSortingOptions(
                selectedMiscellaneousSortingOptions.filter(
                    sortingOption => sortingOption !== value
                )
            );
        } else {
            setSelectedMiscellaneousSortingOptions([
                ...selectedMiscellaneousSortingOptions,
                value
            ]);
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
    const handleSetSelectedFilterAttributes = (value: FilterAttribute) => {
        if (selectedFilterAttributes.some(attribute => attribute === value)) {
            setSelectedFilterAttributes(
                selectedFilterAttributes.filter(
                    attribute => attribute !== value
                )
            );
        } else {
            setSelectedFilterAttributes([...selectedFilterAttributes, value]);
        }
    };
    const clearFilters = () => {
        setSelectedMiscellaneousSortingOptions([]);
        setSelectedPlaytimeFilter(null);
        setSelectedGenreFocusFilter(null);
        setSelectedFilterAttributes([]);
        setIsSelectedHasSequelFilter(false);
        setIsSelectedHideSequelFilter(false);
    };

    return (
        <Container>
            <SideNav
                selectedMiscellaneousSortingOptions={
                    selectedMiscellaneousSortingOptions
                }
                handleSetSelectedMiscellaneousSortingOptions={
                    handleSetSelectedMiscellaneousSortingOptions
                }
                selectedPlaytimeFilter={selectedPlaytimeFilter}
                handleSetSelectedPlaytimeFilter={
                    handleSetSelectedPlaytimeFilter
                }
                selectedGenreFocusFilter={selectedGenreFocusFilter}
                handleSetSelectedGenreFocusFilter={
                    handleSetSelectedGenreFocusFilter
                }
                selectedFilterAttributes={selectedFilterAttributes}
                handleSetSelectedFilterAttributes={
                    handleSetSelectedFilterAttributes
                }
                isSelectedHasSequelFilter={isSelectedHasSequelFilter}
                setIsSelectedHasSequelFilter={setIsSelectedHasSequelFilter}
                isSelectedHideSequelFilter={isSelectedHideSequelFilter}
                setIsSelectedHideSequelFilter={setIsSelectedHideSequelFilter}
                isInPopupView={isInPopupView}
                clearFilters={clearFilters}
            />
            <MoegeChart
                selectedMiscellaneousSortingOptions={
                    selectedMiscellaneousSortingOptions
                }
                selectedPlaytimeFilter={selectedPlaytimeFilter}
                selectedGenreFocusFilter={selectedGenreFocusFilter}
                selectedFilterAttributes={selectedFilterAttributes}
                isSelectedHasSequelFilter={isSelectedHasSequelFilter}
                isSelectedHideSequelFilter={isSelectedHideSequelFilter}
                setIsInPopupView={setIsInPopupView}
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
