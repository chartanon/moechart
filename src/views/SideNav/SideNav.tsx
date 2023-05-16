import React from 'react';
import styled from 'styled-components';
import { COLOURS, Column, TitleFont, Section, LabelFont } from '../utils';
import { PlaytimeItem } from './PlaytimeItem';
import { FAQ } from './FAQ';
import { FocusesOfInterest } from './FocusesOfInterest';
import {
    Attribute,
    GenreFocus,
    PlaytimeLength
} from '../HomePage/Chart/VisualNovelCard';
import {
    SortingOption,
    attributesList,
    playtimesList,
    sortingList
} from './LegendData';
import { AttributeItem } from './AttributeItem';
import { LegendButton } from './components';
import { SortByItem } from './SortByItem';

export const SIDE_NAV_WIDTH = 300;

interface IProps {
    selectedSortingOptions: SortingOption[];
    handleSetSelectedSortingOptions: (value: SortingOption) => void;
    selectedPlaytimeFilter: PlaytimeLength | null;
    handleSetSelectedPlaytimeFilter: (value: PlaytimeLength) => void;
    selectedGenreFocusFilter: GenreFocus | null;
    handleSetSelectedGenreFocusFilter: (value: GenreFocus) => void;
    selectedAttributesFilters: Attribute[];
    handleSetSelectedAttributesFilters: (value: Attribute) => void;
    clearFilters: () => void;
}

export const SideNav: React.FC<IProps> = ({
    selectedSortingOptions,
    handleSetSelectedSortingOptions,
    selectedPlaytimeFilter,
    handleSetSelectedPlaytimeFilter,
    selectedGenreFocusFilter,
    handleSetSelectedGenreFocusFilter,
    selectedAttributesFilters,
    handleSetSelectedAttributesFilters,
    clearFilters
}) => {
    return (
        <NavBar>
            <TextContainer>
                <FocusesOfInterest
                    selectedGenreFocusFilter={selectedGenreFocusFilter}
                    onClick={handleSetSelectedGenreFocusFilter}
                />
                <Section>
                    <TitleFont>FILTERS</TitleFont>
                    {playtimesList.map(playtimeItem => {
                        const isSelected =
                            selectedPlaytimeFilter === playtimeItem.length;
                        return (
                            <PlaytimeItem
                                key={playtimeItem.length}
                                isSelected={isSelected}
                                {...playtimeItem}
                                onClick={handleSetSelectedPlaytimeFilter}
                            />
                        );
                    })}
                    {attributesList.map(attribute => {
                        return (
                            <AttributeItem
                                key={attribute.type}
                                isSelected={selectedAttributesFilters.some(
                                    attributeFilter =>
                                        attributeFilter === attribute.type
                                )}
                                {...attribute}
                                onClick={handleSetSelectedAttributesFilters}
                            />
                        );
                    })}
                </Section>
                <Section>
                    <TitleFont>EXTRA TOOLS</TitleFont>
                    {sortingList.map(sortingOption => {
                        return (
                            <SortByItem
                                key={sortingOption.option}
                                isSelected={selectedSortingOptions.some(
                                    option => option === sortingOption.option
                                )}
                                {...sortingOption}
                                onClick={handleSetSelectedSortingOptions}
                            />
                        );
                    })}
                </Section>
                <ClearButton onClick={clearFilters}>
                    <LabelFont>CLEAR</LabelFont>
                </ClearButton>
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
    background-image: linear-gradient(${COLOURS.NAVBAR}, ${COLOURS.BACKGROUND});
    overflow-y: scroll;
    scrollbar-color: ${COLOURS.TEXT} ${COLOURS.NAVBAR};
`;

const TextContainer = styled(Column)`
    display: flex;
    gap: 20px;
    padding: 20px;
`;

const Divider = styled.div`
    padding-bottonm: 0px;
    border-bottom: 2px solid ${COLOURS.SECONDARY};
`;

const ClearButton = styled(LegendButton)`
    outline: 4px solid white;
    border-radius: 4px;
    padding: 12px;
`;
