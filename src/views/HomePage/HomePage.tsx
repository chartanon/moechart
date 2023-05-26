import styled from 'styled-components';
import { MoegeChart } from './Chart/MoegeChart';
import { SideNav } from '../SideNav/SideNav';
import React, { useState } from 'react';

import { SIDE_NAV_WIDTH } from '../SideNav/utils';
import { GenreFocus, FilterAttribute } from './Chart/utils';
import { PlaytimeLength } from './Chart/utils';
import { VisualNovelProps } from './Chart/visualNovelData';
import {
    FILTER_ATTRIBUTES,
    GENRE_FOCUS_KEY,
    HAS_SEQUEL,
    SHOW_SEQUEL,
    PLAYTIME_KEY,
    SHOW_BOOKMARKS,
    SHOW_RECOMMENDED,
    CHRONOLOGICAL_SORT,
    RANDOM_TEN,
    BOOKMARKS
} from '../localStorage';

export const HomePage: React.FC = () => {
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

    const [isSelectedBookmarkFilter, setIsSelectedBookmarkFilter] =
        useState<boolean>(
            localStorage.getItem(SHOW_BOOKMARKS) === 'false' ? false : true
        );
    const [
        isSelectedShowRecommendedFilter,
        setIsSelectedShowRecommendedFilter
    ] = useState<boolean>(
        localStorage.getItem(SHOW_RECOMMENDED) === 'false' ? false : true
    );
    const [isSelectedHasSequelFilter, setIsSelectedHasSequelFilter] =
        useState<boolean>(localStorage.getItem(HAS_SEQUEL) === 'true');
    const [isSelectedShowSequelFilter, setIsSelectedShowSequelFilter] =
        useState<boolean>(localStorage.getItem(SHOW_SEQUEL) === 'true');

    const [bookmarkedVisualNovels, setBookmarkedVisualNovels] = useState<
        VisualNovelProps[]
    >(JSON.parse(localStorage.getItem(BOOKMARKS) ?? '[]'));

    const [isSelectedChronologicalSort, setIsSelectedChronologicalSort] =
        useState<boolean>(localStorage.getItem(CHRONOLOGICAL_SORT) === 'true');
    const [isSelectedRandomTenFilter, setIsSelectedRandomTenFilter] =
        useState<boolean>(localStorage.getItem(RANDOM_TEN) === 'true');

    const [isInPopupView, setIsInPopupView] = useState<boolean>(false);

    const handleSetSelectedPlaytimeFilter = (value: PlaytimeLength | null) => {
        if (selectedPlaytimeFilter === value || value === null) {
            setSelectedPlaytimeFilter(null);
            localStorage.removeItem(PLAYTIME_KEY);
        } else {
            setSelectedPlaytimeFilter(value);
            localStorage.setItem(PLAYTIME_KEY, value);
        }
    };
    const handleSetSelectedGenreFocusFilter = (value: GenreFocus | null) => {
        if (selectedGenreFocusFilter === value || value === null) {
            setSelectedGenreFocusFilter(null);
            localStorage.removeItem(GENRE_FOCUS_KEY);
        } else {
            setSelectedGenreFocusFilter(value);
            localStorage.setItem(GENRE_FOCUS_KEY, value);
        }
    };
    const handleSetSelectedFilterAttributes = (
        value: FilterAttribute | null
    ) => {
        if (value === null) {
            setSelectedFilterAttributes([]);
            localStorage.setItem(FILTER_ATTRIBUTES, '[]');
        } else if (
            selectedFilterAttributes.some(attribute => attribute === value)
        ) {
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
        setIsSelectedShowRecommendedFilter(value);
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
            localStorage.setItem(
                BOOKMARKS,
                JSON.stringify(
                    bookmarkedVisualNovels.filter(
                        currentVisualNovel =>
                            currentVisualNovel.vndbLink !== visualNovel.vndbLink
                    )
                )
            );
        } else {
            setBookmarkedVisualNovels([...bookmarkedVisualNovels, visualNovel]);
            localStorage.setItem(
                BOOKMARKS,
                JSON.stringify([...bookmarkedVisualNovels, visualNovel])
            );
        }
    };

    const handleSetIsSelectedHasSequelFilter = (value: boolean) => {
        setIsSelectedHasSequelFilter(value);
        localStorage.setItem(HAS_SEQUEL, JSON.stringify(value));
    };

    const handleSetIsSelectedShowSequelFilter = (value: boolean) => {
        setIsSelectedShowSequelFilter(value);
        localStorage.setItem(SHOW_SEQUEL, JSON.stringify(value));
    };

    const handleSetIsSelectedChronologicalSort = (value: boolean) => {
        setIsSelectedChronologicalSort(value);
        localStorage.setItem(CHRONOLOGICAL_SORT, JSON.stringify(value));
    };
    const handleSetIsSelectedRandomTenFilter = (value: boolean) => {
        setIsSelectedRandomTenFilter(value);
        localStorage.setItem(RANDOM_TEN, JSON.stringify(value));
    };

    const clearFilters = () => {
        handleSetSelectedPlaytimeFilter(null);
        handleSetSelectedGenreFocusFilter(null);
        handleSetSelectedFilterAttributes(null);
        handleSetIsSelectedHasSequelFilter(false);
        handleSetIsSelectedShowSequelFilter(false);
        handleSetIsSelectedShowRecommendedFilter(false);
        handleSetIsSelectedBookmarkFilter(false);
        handleSetIsSelectedChronologicalSort(false);
        handleSetIsSelectedRandomTenFilter(false);
    };

    return (
        <Container>
            <SideNav
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
                handleSetIsSelectedHasSequelFilter={
                    handleSetIsSelectedHasSequelFilter
                }
                isSelectedShowSequelFilter={isSelectedShowSequelFilter}
                handleSetIsSelectedShowSequelFilter={
                    handleSetIsSelectedShowSequelFilter
                }
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
                isSelectedChronologicalSort={isSelectedChronologicalSort}
                handleSetIsSelectedChronologicalSort={
                    handleSetIsSelectedChronologicalSort
                }
                isSelectedRandomTenFilter={isSelectedRandomTenFilter}
                handleSetIsSelectedRandomTenFilter={
                    handleSetIsSelectedRandomTenFilter
                }
            />
            <MoegeChart
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
                isSelectedChronologicalSort={isSelectedChronologicalSort}
                isSelectedRandomTenFilter={isSelectedRandomTenFilter}
            />
        </Container>
    );
};

const Container = styled.div`
    padding-left: calc(${SIDE_NAV_WIDTH}px + 20px);
    padding-bottom: 40px;
    margin-bottom: -10px;
`;
