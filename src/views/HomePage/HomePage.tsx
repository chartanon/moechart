import styled from 'styled-components';
import { MoegeChart } from './Chart/MoegeChart';
import { SideNav } from '../SideNav/SideNav';
import React, { useState } from 'react';

import { MiscellaneousSortingOption } from '../SideNav/LegendData';
import { SIDE_NAV_WIDTH } from '../SideNav/utils';
import { GenreFocus, FilterAttribute } from './Chart/utils';
import { PlaytimeLength } from './Chart/utils';
import { VisualNovelProps } from './Chart/visualNovelData';
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
    const [isSelectedShowSequelFilter, setIsSelectedShowSequelFilter] =
        useState<boolean>(false);
    const [
        isSelectedShowRecommendedFilter,
        setIsSelectedShowRecommendedFilter
    ] = useState<boolean>(true);
    const [bookmarkedVisualNovels, setBookmarkedVisualNovels] = useState<
        VisualNovelProps[]
    >([]);
    const [isSelectedBookmarkFilter, setIsSelectedBookmarkFilter] =
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

    const handleBookmarkVisualNovel = (visualNovel: VisualNovelProps) => {
        if (
            bookmarkedVisualNovels.some(
                currentVisualNovel =>
                    currentVisualNovel.vndbLink === visualNovel.vndbLink
            )
        ) {
            setBookmarkedVisualNovels(
                bookmarkedVisualNovels.filter(
                    currentVisualNovel =>
                        currentVisualNovel.vndbLink !== visualNovel.vndbLink
                )
            );
        } else {
            setBookmarkedVisualNovels([...bookmarkedVisualNovels, visualNovel]);
        }
    };
    const clearFilters = () => {
        setSelectedMiscellaneousSortingOptions([]);
        setSelectedPlaytimeFilter(null);
        setSelectedGenreFocusFilter(null);
        setSelectedFilterAttributes([]);
        setIsSelectedHasSequelFilter(false);
        setIsSelectedShowSequelFilter(false);
        setIsSelectedShowRecommendedFilter(false);
        setIsSelectedBookmarkFilter(false);
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
                isSelectedShowSequelFilter={isSelectedShowSequelFilter}
                setIsSelectedShowSequelFilter={setIsSelectedShowSequelFilter}
                isSelectedShowRecommendedFilter={
                    isSelectedShowRecommendedFilter
                }
                setIsSelectedShowRecommendedFilter={
                    setIsSelectedShowRecommendedFilter
                }
                isInPopupView={isInPopupView}
                clearFilters={clearFilters}
                isSelectedBookmarkFilter={isSelectedBookmarkFilter}
                setIsSelectedBookmarkFilter={setIsSelectedBookmarkFilter}
            />
            <MoegeChart
                selectedMiscellaneousSortingOptions={
                    selectedMiscellaneousSortingOptions
                }
                selectedPlaytimeFilter={selectedPlaytimeFilter}
                selectedGenreFocusFilter={selectedGenreFocusFilter}
                selectedFilterAttributes={selectedFilterAttributes}
                isSelectedHasSequelFilter={isSelectedHasSequelFilter}
                isSelectedShowSequelFilter={isSelectedShowSequelFilter}
                isSelectedShowRecommendedFilter={
                    isSelectedShowRecommendedFilter
                }
                setIsInPopupView={setIsInPopupView}
                bookmarkedVisualNovels={bookmarkedVisualNovels}
                handleBookmarkVisualNovel={handleBookmarkVisualNovel}
                isSelectedBookmarkFilter={isSelectedBookmarkFilter}
            />
        </Container>
    );
};

const Container = styled.div`
    padding-left: calc(${SIDE_NAV_WIDTH}px + 20px);
    padding-bottom: 40px;
    margin-bottom: -10px;
`;
