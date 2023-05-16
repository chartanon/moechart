import React from 'react';
import styled from 'styled-components';
import {
    COLOURS,
    Column,
    HeaderFont,
    LabelFont,
    Row,
    StaggeredEntranceFade
} from '../../utils';
import { visualNovelData } from './visualNovelData';
import {
    Attribute,
    GenreFocus,
    PlaytimeLength,
    VisualNovelCard
} from './VisualNovelCard';
import { AnimatePresence } from 'framer-motion';
import { SortingOption } from '../../SideNav/LegendData';

interface IProps {
    selectedSortingOptions: SortingOption[];
    selectedPlaytimeFilter: PlaytimeLength | null;
    selectedGenreFocusFilter: GenreFocus | null;
    selectedAttributesFilters: Attribute[];
}

export const MoegeChart: React.FC<IProps> = ({
    selectedSortingOptions,
    selectedPlaytimeFilter,
    selectedGenreFocusFilter,
    selectedAttributesFilters
}) => {
    const filteredReleasedVisualNovels = visualNovelData.filter(visualNovel => {
        if (
            selectedPlaytimeFilter !== null &&
            selectedPlaytimeFilter !== visualNovel.playtime
        ) {
            return false;
        } else if (
            selectedGenreFocusFilter !== null &&
            selectedGenreFocusFilter !== visualNovel.genreFocus
        ) {
            return false;
        } else if (
            selectedAttributesFilters.length !== 0 &&
            selectedAttributesFilters.some(
                attribute => !visualNovel.attributes.includes(attribute)
            )
        ) {
            return false;
        }
        return !visualNovel.isUpcomingRelease;
    });

    if (selectedGenreFocusFilter === null) {
        const genreFocusOrder = Object.values(GenreFocus);
        filteredReleasedVisualNovels.sort(
            (visualNovelOne, visualNovelTwo) =>
                genreFocusOrder.indexOf(visualNovelOne.genreFocus) -
                genreFocusOrder.indexOf(visualNovelTwo.genreFocus)
        );
    }

    if (selectedSortingOptions.length !== 0) {
        selectedSortingOptions.forEach(option => {
            switch (option) {
                case SortingOption.CHRONOLOGICAL:
                    filteredReleasedVisualNovels.sort(
                        (visualNovelOne, visualNovelTwo) =>
                            visualNovelTwo.translationReleaseDate! -
                            visualNovelOne.translationReleaseDate!
                    );
                    break;
                case SortingOption.RANDOM:
                    break;
            }
        });
    }

    const unreleasedVisualNovels = visualNovelData.filter(
        visualNovel =>
            visualNovel.isUpcomingRelease &&
            selectedPlaytimeFilter === null &&
            selectedGenreFocusFilter === null &&
            selectedAttributesFilters.length === 0
    );

    return (
        <Container>
            <SectionHeader>
                <VNFont>/vn/</VNFont> MOECHART
            </SectionHeader>
            <UpdatedInfoFont>(Last Updated: 2023-05-11)</UpdatedInfoFont>
            <EntriesContainer>
                <AnimatePresence>
                    {filteredReleasedVisualNovels.map((visualNovel, index) => {
                        return (
                            <StaggeredEntranceFade
                                key={visualNovel.thumbnailSource}
                                index={index}
                            >
                                <Entry {...visualNovel} />
                            </StaggeredEntranceFade>
                        );
                    })}
                </AnimatePresence>
            </EntriesContainer>

            {unreleasedVisualNovels.length > 0 ? (
                <>
                    <SectionHeader>UPCOMING</SectionHeader>
                    <EntriesContainer>
                        <AnimatePresence>
                            {unreleasedVisualNovels.map(
                                (visualNovel, index) => {
                                    return (
                                        <StaggeredEntranceFade
                                            key={visualNovel.thumbnailSource}
                                            index={index}
                                        >
                                            <Entry {...visualNovel} />
                                        </StaggeredEntranceFade>
                                    );
                                }
                            )}
                        </AnimatePresence>
                    </EntriesContainer>
                </>
            ) : null}
        </Container>
    );
};

const Container = styled(Column)`
    display: flex;
    gap: 20px;
`;

const UpdatedInfoFont = styled(LabelFont)`
    display: flex;
    justify-content: flex-end;
`;

const Entry = styled(VisualNovelCard)`
    padding: 20px;
`;

const EntriesContainer = styled(Row)`
    gap: 80px;
    flex-wrap: wrap;
`;

const SectionHeader = styled(HeaderFont)`
    display: flex;
    padding-top: 20px;
    border-bottom: 2px solid ${COLOURS.TEXT};
    width: 100%;
`;

const VNFont = styled.div`
    padding-right: 10px;
    opacity: 0.4;
`;
