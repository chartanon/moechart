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

import {
    MiscellaneousSortingOption,
    filterAttributesList,
    playtimesList,
    miscellaneousSortingToolsList
} from './LegendData';
import { AttributeItem } from './AttributeItem';
import { SortByItem } from './SortByItem';
import { LegendItemContainer, LegendLabel, SIDE_NAV_WIDTH } from './utils';
import { HasSequelIcon } from '../assets/icons/attribute/HasSequalIcon';
import { IsSequelIcon } from '../assets/icons/attribute/IsSequelIcon';
import { FilterAttribute, GenreFocus } from '../HomePage/Chart/utils';
import { PlaytimeLength } from '../HomePage/Chart/utils';
import { StarIcon } from '../assets/icons/attribute/StarIcon';

interface IProps {
    selectedMiscellaneousSortingOptions: MiscellaneousSortingOption[];
    handleSetSelectedMiscellaneousSortingOptions: (
        value: MiscellaneousSortingOption
    ) => void;
    selectedPlaytimeFilter: PlaytimeLength | null;
    handleSetSelectedPlaytimeFilter: (value: PlaytimeLength) => void;
    selectedGenreFocusFilter: GenreFocus | null;
    handleSetSelectedGenreFocusFilter: (value: GenreFocus) => void;
    selectedFilterAttributes: FilterAttribute[];
    handleSetSelectedFilterAttributes: (value: FilterAttribute) => void;
    isSelectedHasSequelFilter: boolean;
    setIsSelectedHasSequelFilter: (value: boolean) => void;
    isSelectedShowSequelFilter: boolean;
    setIsSelectedShowSequelFilter: (value: boolean) => void;
    isSelectedShowRecommendedFilter: boolean;
    setIsSelectedShowRecommendedFilter: (value: boolean) => void;
    isInPopupView: boolean;
    clearFilters: () => void;
}

export const SideNav: React.FC<IProps> = ({
    selectedMiscellaneousSortingOptions,
    handleSetSelectedMiscellaneousSortingOptions,
    selectedPlaytimeFilter,
    handleSetSelectedPlaytimeFilter,
    selectedGenreFocusFilter,
    handleSetSelectedGenreFocusFilter,
    selectedFilterAttributes,
    handleSetSelectedFilterAttributes,
    isSelectedHasSequelFilter,
    setIsSelectedHasSequelFilter,
    isSelectedShowSequelFilter,
    setIsSelectedShowSequelFilter,
    isSelectedShowRecommendedFilter,
    setIsSelectedShowRecommendedFilter,
    isInPopupView,
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
                    <Row $gap={15}>
                        <ResponsiveButton
                            $isSelected={isSelectedHasSequelFilter}
                            onClick={() =>
                                setIsSelectedHasSequelFilter(
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
                                setIsSelectedShowSequelFilter(
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
                        $isSelected={isSelectedShowRecommendedFilter}
                        onClick={() =>
                            setIsSelectedShowRecommendedFilter(
                                !isSelectedShowRecommendedFilter
                            )
                        }
                    >
                        <LegendItemContainer>
                            <StarIcon />
                            <LegendLabel>Show Recommended</LegendLabel>
                        </LegendItemContainer>
                    </ResponsiveButton>
                    {miscellaneousSortingToolsList.map(sortingOption => {
                        return (
                            <SortByItem
                                key={sortingOption.option}
                                isSelected={selectedMiscellaneousSortingOptions.some(
                                    option => option === sortingOption.option
                                )}
                                {...sortingOption}
                                onClick={
                                    handleSetSelectedMiscellaneousSortingOptions
                                }
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

const ClearButton = styled(ResponsiveButton)`
    outline: 4px solid white;
    border-radius: 4px;
    padding: 12px;
`;
