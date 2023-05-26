import styled from 'styled-components';
import { MoegeChart } from './Chart/MoegeChart';
import { SideNav } from '../SideNav/SideNav';
import React, { useState } from 'react';

import { MiscellaneousSortingOption } from '../SideNav/LegendData';
import { SIDE_NAV_WIDTH } from '../SideNav/utils';
import { GenreFocus, FilterAttribute } from './Chart/utils';
import { PlaytimeLength } from './Chart/utils';
import { VisualNovelProps } from './Chart/visualNovelData';
import {
    FILTER_ATTRIBUTES,
    GENRE_FOCUS_KEY,
    PLAYTIME_KEY,
    SHOW_BOOKMARKS,
    SHOW_RECOMMENDED
} from '../localStorage';

export const HomePage: React.FC = () => {
    const [
        selectedMiscellaneousSortingOptions,
        setSelectedMiscellaneousSortingOptions
    ] = useState<MiscellaneousSortingOption[]>([]);
    const [selectedPlaytimeFilter, setSelectedPlaytimeFilter] =
        useState<PlaytimeLength | null>(
            localStorage.getItem(PLAYTIME_KEY) as PlaytimeLength
        );
    const [selectedGenreFocusFilter, setSelectedGenreFocusFilter] =
        useState<GenreFocus | null>(
            localStorage.getItem(GENRE_FOCUS_KEY) as GenreFocus
        );
    const [selectedFilterAttributes, setSelectedFilterAttributes] = useState<
        FilterAttribute[]
    >(JSON.parse(localStorage.getItem(FILTER_ATTRIBUTES) ?? '[]'));
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
        useState<boolean>(
            localStorage.getItem(SHOW_BOOKMARKS) === 'false' ? false : true
        );

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
        if (selectedPlaytimeFilter === value) {
            setSelectedPlaytimeFilter(null);
            localStorage.removeItem(PLAYTIME_KEY);
        } else {
            setSelectedPlaytimeFilter(value);
            localStorage.setItem(PLAYTIME_KEY, value);
        }
    };
    const handleSetSelectedGenreFocusFilter = (value: GenreFocus) => {
        if (selectedGenreFocusFilter === value) {
            setSelectedGenreFocusFilter(null);
            localStorage.removeItem(GENRE_FOCUS_KEY);
        } else {
            setSelectedGenreFocusFilter(value);
            localStorage.setItem(GENRE_FOCUS_KEY, value);
        }
    };
    const handleSetSelectedFilterAttributes = (value: FilterAttribute) => {
        if (selectedFilterAttributes.some(attribute => attribute === value)) {
            setSelectedFilterAttributes(
                selectedFilterAttributes.filter(
                    attribute => attribute !== value
                )
            );
            localStorage.setItem(
                FILTER_ATTRIBUTES,
                JSON.stringify(
                    selectedFilterAttributes.filter(
                        attribute => attribute !== value
                    )
                )
            );
        } else {
            setSelectedFilterAttributes([...selectedFilterAttributes, value]);
            localStorage.setItem(
                FILTER_ATTRIBUTES,
                JSON.stringify([...selectedFilterAttributes, value])
            );
        }
    };

    const handleSetIsSelectedBookmarkFilter = (value: boolean) => {
        setIsSelectedBookmarkFilter(value);
        localStorage.setItem(SHOW_BOOKMARKS, JSON.stringify(value));
    };

    const handleSetIsSelectedShowRecommendedFilter = (value: boolean) => {
        setIsSelectedBookmarkFilter(value);
        localStorage.setItem(SHOW_RECOMMENDED, JSON.stringify(value));
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
                handleSetIsSelectedShowRecommendedFilter={
                    handleSetIsSelectedShowRecommendedFilter
                }
                isInPopupView={isInPopupView}
                clearFilters={clearFilters}
                isSelectedBookmarkFilter={isSelectedBookmarkFilter}
                handleSetIsSelectedBookmarkFilter={
                    handleSetIsSelectedBookmarkFilter
                }
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
