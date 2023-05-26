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
    StaggeredEntranceFade,
    VerticalFade
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
import Background from '../../assets/thumbnails/Background.jpg';

export interface SeriesRelationshipMap {
    [originalGameVNDBLink: string]: VisualNovelProps[];
}
interface IProps {
    selectedMiscellaneousSortingOptions: MiscellaneousSortingOption[];
    selectedPlaytimeFilter: PlaytimeLength | null;
    selectedGenreFocusFilter: GenreFocus | null;
    selectedFilterAttributes: FilterAttribute[];
    isSelectedHasSequelFilter: boolean;
    isSelectedShowSequelFilter: boolean;
    isSelectedShowRecommendedFilter: boolean;
    setIsInPopupView: (value: boolean) => void;
    bookmarkedVisualNovels: VisualNovelProps[];
    handleBookmarkVisualNovel: (visualNovel: VisualNovelProps) => void;
    isSelectedBookmarkFilter: boolean;
}

export const MoegeChart: React.FC<IProps> = ({
    selectedMiscellaneousSortingOptions,
    selectedPlaytimeFilter,
    selectedGenreFocusFilter,
    selectedFilterAttributes,
    isSelectedHasSequelFilter,
    isSelectedShowSequelFilter,
    isSelectedShowRecommendedFilter,
    setIsInPopupView,
    bookmarkedVisualNovels,
    handleBookmarkVisualNovel,
    isSelectedBookmarkFilter
}) => {
    let allSequelRelationships: SeriesRelationshipMap = {};
    let recommendedVisualNovels: VisualNovelProps[] = [];

    const filteredReleasedVisualNovels = visualNovelData.filter(visualNovel => {
        if (visualNovel.isUpcomingRelease) {
            return false;
        } else if (
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
        } else if (!isSelectedShowSequelFilter && visualNovel.originalGame) {
            if (allSequelRelationships[visualNovel.originalGame]) {
                allSequelRelationships[visualNovel.originalGame].push({
                    ...visualNovel
                });
            } else {
                allSequelRelationships[visualNovel.originalGame] = [
                    {
                        ...visualNovel
                    }
                ];
            }
            return false;
        }
        // important that this comes after the allSequelRelationships check, so that the card can still stack when the has sequel filters is enabled
        else if (
            isSelectedHasSequelFilter &&
            (!visualNovel.sequels || visualNovel.sequels.length === 0)
        ) {
            return false;
        }
        // important that this comes before recommended filter, so that it properly filters from both the filtered list and recommended list
        else if (
            isSelectedBookmarkFilter &&
            bookmarkedVisualNovels.some(
                currentVisualNovel =>
                    currentVisualNovel.vndbLink === visualNovel.vndbLink
            )
        ) {
            return false;
        }
        // important that this comes last, so that it properly filters
        else if (isSelectedShowRecommendedFilter && visualNovel.isRecommended) {
            recommendedVisualNovels.push(visualNovel);
            return false;
        }
        return true;
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
                    recommendedVisualNovels.sort(
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
                    while (recommendedVisualNovels.length > 10) {
                        recommendedVisualNovels.splice(
                            Math.floor(
                                Math.random() * recommendedVisualNovels.length
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
        selectedFilterAttributes.length === 0 &&
        isSelectedHasSequelFilter === false
    ) {
        unreleasedVisualNovels = visualNovelData.filter(visualNovel => {
            if (
                isSelectedBookmarkFilter &&
                bookmarkedVisualNovels.some(
                    currentVisualNovel =>
                        currentVisualNovel.vndbLink === visualNovel.vndbLink
                )
            ) {
                return false;
            }
            if (
                selectedGenreFocusFilter !== null &&
                visualNovel.genreFocus !== selectedGenreFocusFilter
            ) {
                return false;
            }

            return visualNovel.isUpcomingRelease;
        });
    }

    const moechartTitleRef = React.useRef<HTMLDivElement>(null);
    const translatedMoegeRef = React.useRef<HTMLDivElement>(null);
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
            <MoechartFont>
                <Row>
                    <VNFont ref={moechartTitleRef}>/vn/</VNFont> MOECHART
                </Row>
                <Row $gap={10}>
                    {isSelectedShowRecommendedFilter ||
                    isSelectedBookmarkFilter ? (
                        <Button
                            onClick={() =>
                                translatedMoegeRef.current?.scrollIntoView({
                                    behavior: 'smooth'
                                })
                            }
                        >
                            <Row>
                                <ArrowIcon />
                                <UpcomingReleasesFont>
                                    Go to translated moege
                                </UpcomingReleasesFont>
                            </Row>
                        </Button>
                    ) : null}
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
                </Row>
            </MoechartFont>

            <InfoBar>
                <MusicButton
                    onClick={handlePlaySong}
                    $isSelected={isPlayingSong}
                >
                    <MusicNoteIcon />
                </MusicButton>
                <UpdatedInfoFont>(Last Updated: 2023-05-21)</UpdatedInfoFont>
            </InfoBar>

            <AnimatePresence>
                {bookmarkedVisualNovels.length > 0 &&
                isSelectedBookmarkFilter ? (
                    <VerticalFade>
                        <SectionHeader>bookmarked</SectionHeader>
                        <EntriesContainer>
                            <AnimatePresence>
                                {bookmarkedVisualNovels.map(
                                    (visualNovel, index) => {
                                        const isBookmarked =
                                            bookmarkedVisualNovels.some(
                                                currentVisualNovel =>
                                                    currentVisualNovel.vndbLink ===
                                                    visualNovel.vndbLink
                                            );
                                        return (
                                            <StaggeredEntranceFade
                                                key={
                                                    visualNovel.thumbnailSource
                                                }
                                                index={index}
                                            >
                                                <Entry
                                                    {...visualNovel}
                                                    allSequelRelationships={
                                                        allSequelRelationships
                                                    }
                                                    isSelectedShowSequelFilter={
                                                        isSelectedShowSequelFilter
                                                    }
                                                    setIsInPopupView={
                                                        setIsInPopupView
                                                    }
                                                    shouldDisplayDateInTitle={
                                                        isSortingByChronological
                                                    }
                                                    shouldDisplayUpcomingDisclaimerInTitle={
                                                        isBookmarked &&
                                                        visualNovel.isUpcomingRelease
                                                    }
                                                    isBookmarked={isBookmarked}
                                                    onBookmark={
                                                        handleBookmarkVisualNovel
                                                    }
                                                />
                                            </StaggeredEntranceFade>
                                        );
                                    }
                                )}
                            </AnimatePresence>
                        </EntriesContainer>
                    </VerticalFade>
                ) : null}
            </AnimatePresence>
            <AnimatePresence>
                {recommendedVisualNovels.length > 0 ? (
                    <VerticalFade>
                        <SectionHeader>recommended</SectionHeader>
                        <EntriesContainer>
                            <AnimatePresence>
                                {recommendedVisualNovels.map(
                                    (visualNovel, index) => {
                                        return (
                                            <StaggeredEntranceFade
                                                key={
                                                    visualNovel.thumbnailSource
                                                }
                                                index={index}
                                            >
                                                <Entry
                                                    {...visualNovel}
                                                    allSequelRelationships={
                                                        allSequelRelationships
                                                    }
                                                    isSelectedShowSequelFilter={
                                                        isSelectedShowSequelFilter
                                                    }
                                                    setIsInPopupView={
                                                        setIsInPopupView
                                                    }
                                                    shouldDisplayDateInTitle={
                                                        isSortingByChronological
                                                    }
                                                    isBookmarked={bookmarkedVisualNovels.some(
                                                        currentVisualNovel =>
                                                            currentVisualNovel.vndbLink ===
                                                            visualNovel.vndbLink
                                                    )}
                                                    onBookmark={
                                                        handleBookmarkVisualNovel
                                                    }
                                                />
                                            </StaggeredEntranceFade>
                                        );
                                    }
                                )}
                            </AnimatePresence>
                        </EntriesContainer>
                    </VerticalFade>
                ) : null}
            </AnimatePresence>
            <EntriesContainer ref={translatedMoegeRef}>
                <HeaderWithJump>
                    translated moege
                    {isSelectedShowRecommendedFilter ||
                    isSelectedBookmarkFilter ? (
                        <Row $gap={10}>
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
                                        Back to top
                                    </UpcomingReleasesFont>
                                </Row>
                            </Button>
                            <Button
                                onClick={() =>
                                    upcomingReleasesRef.current?.scrollIntoView(
                                        {
                                            behavior: 'smooth'
                                        }
                                    )
                                }
                            >
                                <Row>
                                    <ArrowIcon />
                                    <UpcomingReleasesFont>
                                        Go to upcoming Releases
                                    </UpcomingReleasesFont>
                                </Row>
                            </Button>
                        </Row>
                    ) : null}
                </HeaderWithJump>
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
                                    isSelectedShowSequelFilter={
                                        isSelectedShowSequelFilter
                                    }
                                    setIsInPopupView={setIsInPopupView}
                                    shouldDisplayDateInTitle={
                                        isSortingByChronological
                                    }
                                    isBookmarked={bookmarkedVisualNovels.some(
                                        currentVisualNovel =>
                                            currentVisualNovel.vndbLink ===
                                            visualNovel.vndbLink
                                    )}
                                    onBookmark={handleBookmarkVisualNovel}
                                />
                            </StaggeredEntranceFade>
                        );
                    })}
                </AnimatePresence>
            </EntriesContainer>
            <AnimatePresence>
                {unreleasedVisualNovels.length > 0 ? (
                    <VerticalFade>
                        <HeaderWithJump ref={upcomingReleasesRef}>
                            upcoming
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
                                        Back to top
                                    </UpcomingReleasesFont>
                                </Row>
                            </Button>
                        </HeaderWithJump>
                        <EntriesContainer>
                            <AnimatePresence>
                                {unreleasedVisualNovels.map(
                                    (visualNovel, index) => {
                                        return (
                                            <StaggeredEntranceFade
                                                key={
                                                    visualNovel.thumbnailSource
                                                }
                                                index={index}
                                            >
                                                <Entry
                                                    {...visualNovel}
                                                    isBookmarked={bookmarkedVisualNovels.some(
                                                        currentVisualNovel =>
                                                            currentVisualNovel.vndbLink ===
                                                            visualNovel.vndbLink
                                                    )}
                                                    onBookmark={
                                                        handleBookmarkVisualNovel
                                                    }
                                                />
                                            </StaggeredEntranceFade>
                                        );
                                    }
                                )}
                            </AnimatePresence>
                        </EntriesContainer>
                    </VerticalFade>
                ) : null}
            </AnimatePresence>
            <BackgroundImage src={Background} />
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
    gap: 100px;
    flex-wrap: wrap;
`;

const BaseHeader = styled(HeaderFont)`
    display: flex;
    padding-top: 20px;
    border-bottom: 2px solid ${COLOURS.TEXT};

    width: 100%;
    font-family: monospace;
`;

const SectionHeader = styled(BaseHeader)`
    margin-bottom: 40px;
`;

const HeaderWithJump = styled(BaseHeader)`
    &>: last-child {
        margin-left: auto;
    }
`;

const MoechartFont = styled(BaseHeader)`
    font-weight: 800;
    letter-spacing: 0.07rem;
    & > :last-child {
        margin-left: auto;
    }
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

const InfoBar = styled(Row)`
    & > :last-child {
        margin-left: auto;
    }
`;

const BackgroundImage = styled.img`
    position: fixed;
    z-index: -1000;
    bottom: 0;
    right: 0;
`;
