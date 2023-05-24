import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import {
    Button,
    COLOURS,
    Column,
    HeaderFont,
    LabelFont,
    ResponsiveButton,
    Row,
    StaggeredEntranceFade
} from '../../utils';
import { VisualNovelProps, visualNovelData } from './visualNovelData';

import { AnimatePresence } from 'framer-motion';
import { MiscellaneousSortingOption } from '../../SideNav/LegendData';
import { MusicNoteIcon } from '../../assets/icons/misc/MusicNoteIcon';
import { ArrowIcon } from '../../assets/icons/misc/DownArrowIcon';
import first_cherry_blossom from '../../assets/audio/first-cherry-blossom.mp3';
import chiisaku_mo_tsuyoki_kokoro from '../../assets/audio/chiisaku-mo-tsuyoki-kokoro.mp3';
import cute_shining_idol from '../../assets/audio/cute-shining-idol.mp3';
import { ChartEntry } from './ChartEntry';
import { GenreFocus, FilterAttribute } from './utils';
import { PlaytimeLength } from './utils';

export interface SeriesRelationshipMap {
    [originalGameVNDBLink: string]: VisualNovelProps[];
}
interface IProps {
    selectedMiscellaneousSortingOptions: MiscellaneousSortingOption[];
    selectedPlaytimeFilter: PlaytimeLength | null;
    selectedGenreFocusFilter: GenreFocus | null;
    selectedFilterAttributes: FilterAttribute[];
    isSelectedHasSequelFilter: boolean;
    isSelectedHideSequelFilter: boolean;
    setIsInPopupView: (value: boolean) => void;
}

export const MoegeChart: React.FC<IProps> = ({
    selectedMiscellaneousSortingOptions,
    selectedPlaytimeFilter,
    selectedGenreFocusFilter,
    selectedFilterAttributes,
    isSelectedHasSequelFilter,
    isSelectedHideSequelFilter,
    setIsInPopupView
}) => {
    let allSequelRelationships: SeriesRelationshipMap = {};

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
            selectedFilterAttributes.length !== 0 &&
            selectedFilterAttributes.some(
                attribute => !visualNovel.attributes.includes(attribute)
            )
        ) {
            return false;
        } else if (
            isSelectedHasSequelFilter &&
            (!visualNovel.sequels || visualNovel.sequels.length === 0)
        ) {
            return false;
        } else if (isSelectedHideSequelFilter && visualNovel.originalGame) {
            if (allSequelRelationships[visualNovel.originalGame]) {
                allSequelRelationships[visualNovel.originalGame].push({
                    vndbLink: visualNovel.vndbLink,
                    thumbnailSource: visualNovel.thumbnailSource,
                    name: visualNovel.name,
                    attributes: visualNovel.attributes,
                    genreFocus: visualNovel.genreFocus,
                    descriptionFirstRowText:
                        visualNovel.descriptionFirstRowText,
                    descriptionSecondRowText:
                        visualNovel.descriptionSecondRowText,
                    playtime: visualNovel.playtime,
                    translationReleaseDate: visualNovel.translationReleaseDate
                });
            } else {
                allSequelRelationships[visualNovel.originalGame] = [
                    {
                        vndbLink: visualNovel.vndbLink,
                        thumbnailSource: visualNovel.thumbnailSource,
                        name: visualNovel.name,
                        attributes: visualNovel.attributes,
                        genreFocus: visualNovel.genreFocus,
                        descriptionFirstRowText:
                            visualNovel.descriptionFirstRowText,
                        descriptionSecondRowText:
                            visualNovel.descriptionSecondRowText,
                        playtime: visualNovel.playtime,
                        translationReleaseDate:
                            visualNovel.translationReleaseDate
                    }
                ];
            }
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

    let isSortingByChronological = false;

    if (selectedMiscellaneousSortingOptions.length !== 0) {
        selectedMiscellaneousSortingOptions.forEach(option => {
            switch (option) {
                case MiscellaneousSortingOption.CHRONOLOGICAL:
                    filteredReleasedVisualNovels.sort(
                        (visualNovelOne, visualNovelTwo) =>
                            visualNovelTwo.translationReleaseDate! -
                            visualNovelOne.translationReleaseDate!
                    );
                    isSortingByChronological = true;
                    break;
                case MiscellaneousSortingOption.RANDOM: {
                    while (filteredReleasedVisualNovels.length > 10) {
                        filteredReleasedVisualNovels.splice(
                            Math.floor(
                                Math.random() *
                                    filteredReleasedVisualNovels.length
                            ),
                            1
                        );
                    }
                    break;
                }
                default:
                    break;
            }
        });
    }

    let unreleasedVisualNovels: VisualNovelProps[] = [];

    if (
        selectedMiscellaneousSortingOptions.length === 0 &&
        selectedPlaytimeFilter === null &&
        selectedGenreFocusFilter === null &&
        selectedFilterAttributes.length === 0 &&
        isSelectedHasSequelFilter === false
    ) {
        unreleasedVisualNovels = visualNovelData.filter(
            visualNovel => visualNovel.isUpcomingRelease
        );
    }

    const moechartTitleRef = React.useRef<HTMLDivElement>(null);
    const upcomingReleasesRef = React.useRef<HTMLDivElement>(null);

    const [backgroundSongs] = useState<HTMLAudioElement[]>([
        new Audio(first_cherry_blossom),
        new Audio(cute_shining_idol),
        new Audio(chiisaku_mo_tsuyoki_kokoro)
    ]);
    const [isPlayingSong, setIsPlayingSong] = useState<boolean>(false);
    const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);

    const handlePlaySong = () => {
        if (!isPlayingSong) {
            const randomSongIndex = Math.floor(
                Math.random() * backgroundSongs.length
            );
            setCurrentSongIndex(randomSongIndex);
            backgroundSongs[randomSongIndex].volume = 0.2;
            backgroundSongs[randomSongIndex].loop = true;
            backgroundSongs[randomSongIndex].play();
            setIsPlayingSong(true);
        } else {
            backgroundSongs[currentSongIndex].pause();
            backgroundSongs[currentSongIndex].load();
            setIsPlayingSong(false);
        }
    };

    return (
        <Container>
            <SectionHeader>
                <Row>
                    <VNFont ref={moechartTitleRef}>/vn/</VNFont> MOECHART
                </Row>
                {unreleasedVisualNovels.length > 0 ? (
                    <Button
                        onClick={() =>
                            upcomingReleasesRef.current?.scrollIntoView({
                                behavior: 'smooth'
                            })
                        }
                    >
                        <Row>
                            <ArrowIcon />
                            <UpcomingReleasesFont>
                                Go to upcoming Releases
                            </UpcomingReleasesFont>
                        </Row>
                    </Button>
                ) : null}
            </SectionHeader>
            <Row>
                <MusicButton
                    onClick={handlePlaySong}
                    $isSelected={isPlayingSong}
                >
                    <MusicNoteIcon />
                </MusicButton>
            </Row>

            <UpdatedInfoFont>(Last Updated: 2023-05-21)</UpdatedInfoFont>
            <EntriesContainer>
                <AnimatePresence>
                    {filteredReleasedVisualNovels.map((visualNovel, index) => {
                        return (
                            <StaggeredEntranceFade
                                key={visualNovel.thumbnailSource}
                                index={index}
                            >
                                <Entry
                                    {...visualNovel}
                                    allSequelRelationships={
                                        allSequelRelationships
                                    }
                                    isSelectedHideSequelFilter={
                                        isSelectedHideSequelFilter
                                    }
                                    setIsInPopupView={setIsInPopupView}
                                    shouldDisplayDateInTitle={
                                        isSortingByChronological
                                    }
                                />
                            </StaggeredEntranceFade>
                        );
                    })}
                </AnimatePresence>
            </EntriesContainer>
            {unreleasedVisualNovels.length > 0 ? (
                <>
                    <SectionHeader ref={upcomingReleasesRef}>
                        UPCOMING
                        <Button
                            onClick={() =>
                                moechartTitleRef.current?.scrollIntoView({
                                    block: 'end',
                                    behavior: 'smooth'
                                })
                            }
                        >
                            <Row>
                                <ArrowIcon rotate={180} />
                                <UpcomingReleasesFont>
                                    Back to translated releases
                                </UpcomingReleasesFont>
                            </Row>
                        </Button>
                    </SectionHeader>

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

const Entry = styled(ChartEntry)`
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
    justify-content: space-between;
`;

const VNFont = styled.div`
    padding-right: 10px;
    opacity: 0.4;
`;

const UpcomingReleasesFont = styled(LabelFont)`
    padding-top: 3px;
`;

const MusicButton = styled(ResponsiveButton)`
    :hover {
        border-radius: 4px;
    }

    :active {
        border-radius: 4px;
    }

    ${({ $isSelected }) =>
        $isSelected
            ? css`
                  border-radius: 4px;
              `
            : ''};
`;
