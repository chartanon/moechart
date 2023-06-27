import React from 'react';
import styled from 'styled-components';
import {
    COLOURS,
    Column,
    TitleFont,
    Section,
    LabelFont,
    ResponsiveButton,
    Row
} from '../utils';
import { PlaytimeItem } from './PlaytimeItem';
import { FAQ } from './FAQ';
import { FocusesOfInterest } from './FocusesOfInterest';

import { filterAttributesList, playtimesList } from './LegendData';
import { AttributeItem } from './AttributeItem';
import { LegendItemContainer, LegendLabel, SIDE_NAV_WIDTH } from './utils';
import { HasSequelIcon } from '../assets/icons/attribute/HasSequalIcon';
import { IsSequelIcon } from '../assets/icons/attribute/IsSequelIcon';
import { FilterAttribute, GenreFocus } from '../HomePage/Chart/utils';
import { PlaytimeLength } from '../HomePage/Chart/utils';
import { StarIcon } from '../assets/icons/attribute/StarIcon';
import { BookmarkIcon } from '../assets/icons/misc/BookmarkIcon';
import { ClockIcon } from '../assets/icons/sorting/ClockIcon';
import { DiceIcon } from '../assets/icons/sorting/DiceIcon';

interface IProps {
    selectedPlaytimeFilter: PlaytimeLength | null;
    handleSetSelectedPlaytimeFilter: (value: PlaytimeLength) => void;
    selectedGenreFocusFilter: GenreFocus | null;
    handleSetSelectedGenreFocusFilter: (value: GenreFocus) => void;
    selectedFilterAttributes: FilterAttribute[];
    handleSetSelectedFilterAttributes: (value: FilterAttribute) => void;
    isSelectedHasSequelFilter: boolean;
    handleSetIsSelectedHasSequelFilter: (value: boolean) => void;
    isSelectedShowSequelFilter: boolean;
    handleSetIsSelectedShowSequelFilter: (value: boolean) => void;
    isSelectedShowRecommendedFilter: boolean;
    handleSetIsSelectedShowRecommendedFilter: (value: boolean) => void;
    isInPopupView: boolean;
    clearFilters: () => void;
    isSelectedBookmarkFilter: boolean;
    handleSetIsSelectedBookmarkFilter: (value: boolean) => void;
    isSelectedChronologicalSort: boolean;
    handleSetIsSelectedChronologicalSort: (value: boolean) => void;
    isSelectedRandomTenFilter: boolean;
    handleSetIsSelectedRandomTenFilter: (value: boolean) => void;
}

export const SideNav: React.FC<IProps> = ({
    selectedPlaytimeFilter,
    handleSetSelectedPlaytimeFilter,
    selectedGenreFocusFilter,
    handleSetSelectedGenreFocusFilter,
    selectedFilterAttributes,
    handleSetSelectedFilterAttributes,
    isSelectedHasSequelFilter,
    handleSetIsSelectedHasSequelFilter,
    isSelectedShowSequelFilter,
    handleSetIsSelectedShowSequelFilter,
    isSelectedShowRecommendedFilter,
    handleSetIsSelectedShowRecommendedFilter,
    isInPopupView,
    clearFilters,
    isSelectedBookmarkFilter,
    handleSetIsSelectedBookmarkFilter,
    isSelectedChronologicalSort,
    handleSetIsSelectedChronologicalSort,
    isSelectedRandomTenFilter,
    handleSetIsSelectedRandomTenFilter
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
                    {filterAttributesList.map(attribute => (
                        <AttributeItem
                            key={attribute.type}
                            isSelected={selectedFilterAttributes.some(
                                attributeFilter =>
                                    attributeFilter === attribute.type
                            )}
                            {...attribute}
                            onClick={handleSetSelectedFilterAttributes}
                        />
                    ))}
                </Section>
                <Section>
                    <TitleFont>EXTRA TOOLS</TitleFont>
                    <ResponsiveButton
                        $isSelected={isSelectedBookmarkFilter}
                        onClick={() =>
                            handleSetIsSelectedBookmarkFilter(
                                !isSelectedBookmarkFilter
                            )
                        }
                    >
                        <LegendItemContainer>
                            <BookmarkIcon />
                            <LegendLabel>Show Bookmarked</LegendLabel>
                        </LegendItemContainer>
                    </ResponsiveButton>
                    <ResponsiveButton
                        $isSelected={isSelectedShowRecommendedFilter}
                        onClick={() =>
                            handleSetIsSelectedShowRecommendedFilter(
                                !isSelectedShowRecommendedFilter
                            )
                        }
                    >
                        <LegendItemContainer>
                            <StarIcon />
                            <LegendLabel>Show Recommended</LegendLabel>
                        </LegendItemContainer>
                    </ResponsiveButton>
                    <Row $gap={15}>
                        <ResponsiveButton
                            $isSelected={isSelectedHasSequelFilter}
                            onClick={() =>
                                handleSetIsSelectedHasSequelFilter(
                                    !isSelectedHasSequelFilter
                                )
                            }
                        >
                            <LegendItemContainer>
                                <HasSequelIcon size={35} />
                                <LegendLabel>Show VNs with sequels</LegendLabel>
                            </LegendItemContainer>
                        </ResponsiveButton>
                        <ResponsiveButton
                            disabled={isInPopupView}
                            $isSelected={isSelectedShowSequelFilter}
                            onClick={() => {
                                handleSetIsSelectedShowSequelFilter(
                                    !isSelectedShowSequelFilter
                                );
                            }}
                        >
                            <LegendItemContainer>
                                <IsSequelIcon size={35} />
                                <LegendLabel>Split off Sequels</LegendLabel>
                            </LegendItemContainer>
                        </ResponsiveButton>
                    </Row>
                    <ResponsiveButton
                        $isSelected={isSelectedChronologicalSort}
                        onClick={() =>
                            handleSetIsSelectedChronologicalSort(
                                !isSelectedChronologicalSort
                            )
                        }
                    >
                        <LegendItemContainer>
                            <ClockIcon />
                            <LegendLabel>Newest Releases</LegendLabel>
                        </LegendItemContainer>
                    </ResponsiveButton>
                    <ResponsiveButton
                        $isSelected={isSelectedRandomTenFilter}
                        onClick={() =>
                            handleSetIsSelectedRandomTenFilter(
                                !isSelectedRandomTenFilter
                            )
                        }
                    >
                        <LegendItemContainer>
                            <DiceIcon />
                            <LegendLabel>Random 10</LegendLabel>
                        </LegendItemContainer>
                    </ResponsiveButton>
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

const ClearButton = styled(ResponsiveButton)`
    outline: 2px solid white;
    //border-radius: 4px;
    padding: 10px;
`;
