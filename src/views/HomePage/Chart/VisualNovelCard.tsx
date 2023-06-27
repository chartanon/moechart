import React from 'react';
import styled, { css } from 'styled-components';
import { PlaytimeShortIcon } from '../../assets/icons/playtime/PlaytimeShortIcon';
import {
    COLOURS,
    Column,
    Row,
    LabelFont,
    TitleFont,
    Button
} from '../../utils';
import { PlaytimeMediumIcon } from '../../assets/icons/playtime/PlaytimeMediumIcon';
import { PlaytimeVeryLongIcon } from '../../assets/icons/playtime/PlaytimeVeryLongIcon';
import { PlaytimeLongIcon } from '../../assets/icons/playtime/PlaytimeLongIcon';
import { ADVIcon } from '../../assets/icons/attribute/ADVIcon';
import { NVLIcon } from '../../assets/icons/attribute/NVLIcon';
import { FloatingTextIcon } from '../../assets/icons/attribute/FloatingTextIcon';
import { LockIcon } from '../../assets/icons/attribute/LockIcon';
import { BranchIcon } from '../../assets/icons/attribute/BranchIcon';
import { LadderIcon } from '../../assets/icons/attribute/LadderIcon';
import { TrueIcon } from '../../assets/icons/attribute/TrueIcon';
import { LinearPlotIcon } from '../../assets/icons/attribute/LinearPlotIcon';
import { KineticNovelIcon } from '../../assets/icons/attribute/KineticNovelIcon';
import { FrenchGirlIcon } from '../../assets/icons/attribute/FrenchGirlIcon';
import { VisualNovelProps } from './visualNovelData';
import { ScenarioSelectionIcon } from '../../assets/icons/attribute/ScenarioSelectionIcon';
import { HasSequelIcon } from '../../assets/icons/attribute/HasSequalIcon';
import { IsSequelIcon } from '../../assets/icons/attribute/IsSequelIcon';
import {
    FilterAttribute,
    GenreFocus,
    IMAGE_HEIGHT,
    IMAGE_WIDTH,
    SEQUELS_OFFSET,
    ThumbnailImage
} from './utils';
import { PlaytimeLength } from './utils';
import moment from 'moment';
import { StarIcon } from '../../assets/icons/attribute/StarIcon';
import { QuestionDiscIcon } from '../../assets/icons/misc/QuestionDiscIcon';
import { QuestionStarIcon } from '../../assets/icons/misc/QuestionStarIcon';
import { BookmarkIcon } from '../../assets/icons/misc/BookmarkIcon';

export interface VisualNovelCardProps extends VisualNovelProps {
    sequelInfoOnClick?: () => void;
    shouldDisplayDateInTitle?: boolean;
    shouldDisplayUpcomingDisclaimerInTitle?: boolean;
    descriptionInfoOnClick?: () => void;
    isBookmarked?: boolean;
    onBookmark?: (visualNovel: VisualNovelProps) => void;
}

export const VisualNovelCard: React.FC<VisualNovelCardProps> = props => {
    const {
        name,
        vndbLink,
        playtime,
        thumbnailSource,
        attributes,
        genreFocus,
        descriptionFirstRowText,
        descriptionSecondRowText,
        sequels,
        originalGame,
        sequelInfoOnClick,
        shouldDisplayDateInTitle,
        shouldDisplayUpcomingDisclaimerInTitle,
        translationReleaseDate,
        isRecommended,
        descriptionInfoOnClick,
        isUpcomingRelease,
        isBookmarked,
        onBookmark
    } = props;
    const attributesOrder = Object.values(FilterAttribute);
    let outlineColour = COLOURS.GENRE.NUKIGE;
    switch (genreFocus) {
        case GenreFocus.COMEDY:
            outlineColour = COLOURS.GENRE.COMEDY;
            break;
        case GenreFocus.ROMANCE:
            outlineColour = COLOURS.GENRE.ROMANCE;
            break;
        case GenreFocus.ROM_COM:
            outlineColour = COLOURS.GENRE.ROM_COM;
            break;
        case GenreFocus.STORYLINE:
            outlineColour = COLOURS.GENRE.STORYLINE;
            break;
        case GenreFocus.STORY_ROMANCE:
            outlineColour = COLOURS.GENRE.STORY_ROMANCE;
            break;
        default:
            break;
    }

    return (
        <Container $outlineColour={outlineColour}>
            <TopRow>
                <HelpIcons>
                    {descriptionInfoOnClick ? (
                        <HelpButton onClick={descriptionInfoOnClick}>
                            <QuestionStarIcon />
                        </HelpButton>
                    ) : null}
                    {sequelInfoOnClick ? (
                        <HelpButton onClick={sequelInfoOnClick}>
                            <QuestionDiscIcon />
                        </HelpButton>
                    ) : null}
                </HelpIcons>
                <VisualNovelCardTitle
                    name={name}
                    translationReleaseDate={translationReleaseDate}
                    shouldDisplayDateInTitle={!!shouldDisplayDateInTitle}
                    shouldDisplayUpcomingDisclaimerInTitle={
                        !!shouldDisplayUpcomingDisclaimerInTitle
                    }
                    outlineColour={outlineColour}
                />
            </TopRow>
            <ContentBody>
                <Link href={vndbLink}>
                    <ThumbnailImage
                        src={thumbnailSource}
                        loading="lazy"
                        alt=""
                        $outlineColour={outlineColour}
                        $cardStackCount={sequels?.length}
                        $shouldScaleSize={!!sequelInfoOnClick}
                    />
                </Link>
                <IconsContainer
                    $cardStackCount={sequels?.length}
                    $shouldScaleMarginLeft={!!sequelInfoOnClick}
                >
                    <BookmarkContainer
                        $outlineColour={outlineColour}
                        $isBookmarked={!!isBookmarked}
                    >
                        <Button onClick={() => onBookmark?.({ ...props })}>
                            <BookmarkIcon />
                        </Button>
                    </BookmarkContainer>
                    <PlaytimeIconContainer>
                        {playtime === PlaytimeLength.SHORT ? (
                            <PlaytimeShortIcon />
                        ) : null}
                        {playtime === PlaytimeLength.MEDIUM ? (
                            <PlaytimeMediumIcon />
                        ) : null}
                        {playtime === PlaytimeLength.LONG ? (
                            <PlaytimeLongIcon />
                        ) : null}
                        {playtime === PlaytimeLength.VERY_LONG ? (
                            <PlaytimeVeryLongIcon />
                        ) : null}
                    </PlaytimeIconContainer>
                    <AdditionalIconsContainerWrapper>
                        <AdditionalIconsContainer>
                            {isRecommended ? <StarIcon /> : null}
                            {attributes
                                .sort(
                                    (attributeOne, attributeTwo) =>
                                        attributesOrder.indexOf(attributeOne) -
                                        attributesOrder.indexOf(attributeTwo)
                                )
                                .map(attribute => {
                                    if (
                                        attribute ===
                                        FilterAttribute.ADV_TEXTBOX
                                    ) {
                                        return <ADVIcon key="adv" />;
                                    }
                                    if (
                                        attribute ===
                                        FilterAttribute.NVL_TEXTBOX
                                    ) {
                                        return <NVLIcon key="nvl" />;
                                    }
                                    if (
                                        attribute ===
                                        FilterAttribute.FLOATING_TEXTBOX
                                    ) {
                                        return <FloatingTextIcon key="float" />;
                                    }
                                    if (
                                        attribute ===
                                        FilterAttribute.UNLOCKABLE_ROUTES
                                    ) {
                                        return <LockIcon key="lock" />;
                                    }
                                    if (
                                        attribute ===
                                        FilterAttribute.BRANCHING_PLOT
                                    ) {
                                        return <BranchIcon key="branch" />;
                                    }
                                    if (
                                        attribute ===
                                        FilterAttribute.LADDER_STRUCTURE
                                    ) {
                                        return <LadderIcon key="ladder" />;
                                    }
                                    if (
                                        attribute === FilterAttribute.TRUE_ROUTE
                                    ) {
                                        return <TrueIcon key="true" />;
                                    }
                                    if (
                                        attribute ===
                                        FilterAttribute.LINEAR_PLOT
                                    ) {
                                        return <LinearPlotIcon key="linear" />;
                                    }
                                    if (
                                        attribute ===
                                        FilterAttribute.KINETIC_NOVEL
                                    ) {
                                        return (
                                            <KineticNovelIcon key="kinetic" />
                                        );
                                    }
                                    if (
                                        attribute ===
                                        FilterAttribute.SCENARIO_SELECTION
                                    ) {
                                        return (
                                            <ScenarioSelectionIcon key="scenario" />
                                        );
                                    }
                                    if (
                                        attribute ===
                                        FilterAttribute.SUITABLE_FOR_12_YEAR_OLD_FRENCH_GIRLS
                                    ) {
                                        return (
                                            <FrenchGirlIcon key="frenchgirl" />
                                        );
                                    }
                                    return <></>;
                                })}
                            {sequels?.length && sequels.length > 0 ? (
                                <HasSequelIcon />
                            ) : null}
                            {originalGame ? <IsSequelIcon /> : null}
                        </AdditionalIconsContainer>
                    </AdditionalIconsContainerWrapper>
                </IconsContainer>
            </ContentBody>
            <DescriptionContainer>
                <DescriptionFont
                    $outlineColour={outlineColour}
                    $textAlign="right"
                >
                    {descriptionFirstRowText}
                </DescriptionFont>
                <DescriptionFont
                    $outlineColour={outlineColour}
                    $textAlign="right"
                >
                    {descriptionSecondRowText}
                </DescriptionFont>
            </DescriptionContainer>
        </Container>
    );
};

const VisualNovelCardTitle: React.FC<{
    name: string;
    translationReleaseDate?: number;
    shouldDisplayDateInTitle: boolean;
    shouldDisplayUpcomingDisclaimerInTitle: boolean;
    outlineColour: string;
}> = ({
    name,
    translationReleaseDate,
    shouldDisplayDateInTitle,
    shouldDisplayUpcomingDisclaimerInTitle,
    outlineColour
}) => {
    if (shouldDisplayDateInTitle && translationReleaseDate) {
        return (
            <TitleContainer>
                <Title $outlineColour={outlineColour} >{name}</Title>
                <SubtitleFont>
                    ({moment(translationReleaseDate).format('ll')})
                </SubtitleFont>
            </TitleContainer>
        );
    }
    if (shouldDisplayUpcomingDisclaimerInTitle) {
        return (
            <TitleContainer>
                <Title $outlineColour={outlineColour} >{name}</Title>
                <SubtitleFont>(Upcoming release)</SubtitleFont>
            </TitleContainer>
        );
    }

    return (
        <TitleContainer>
            <Title $outlineColour={outlineColour} >{name}</Title>
            <SubtitleFont> </SubtitleFont>
        </TitleContainer>
    );
};

const TitleContainer = styled(Column)``;

const HelpIcons = styled(Row)`
    align-items: flex-start;
`;

const Container = styled(Column)<{
    $outlineColour: string;
}>`
    max-width: ${IMAGE_WIDTH}px;

    ${({ $outlineColour }) => $outlineColour
    ? css`
        svg {
            filter: drop-shadow(0 0 3px ${$outlineColour})
                    drop-shadow(0 0 4px ${$outlineColour});
        }
        `
    : ''}
`;

const Title = styled(TitleFont)`
    margin-left: 5px;
    font-size: 1.15rem;
`;

const ContentBody = styled(Row)`
    height: ${IMAGE_HEIGHT}px;
`;

const IconsContainer = styled(Column)<{
    $cardStackCount?: number;
    $shouldScaleMarginLeft?: boolean;
}>`
    padding: 5px;
    display: flex;
    height: 100%;
    gap: 5px;
    & > :last-child {
        align-self: flex-end;
        justify-content: flex-end;
    }

    ${({ $cardStackCount, $shouldScaleMarginLeft }) =>
        $cardStackCount && $shouldScaleMarginLeft
            ? css`
                  margin-left: ${$cardStackCount * SEQUELS_OFFSET + 10}px;
              `
            : css`
                  margin-left: 10px;
              `}
`;

const PlaytimeIconContainer = styled.div<{
}>`
    height: auto;
`;

const BookmarkContainer = styled.div<{
    $outlineColour: string;
    $isBookmarked: boolean;
}>`
    height: auto;
    border-radius: 15px;

    :hover {
        #bookmark-fill  {
            fill: #fff8;
        }
    }

    ${({ $outlineColour, $isBookmarked }) =>
        $outlineColour && $isBookmarked
            ? css`
                #bookmark-fill {
                    fill: white;
                }
              `
            : ''}
`;

const AdditionalIconsContainer = styled(Column)`
    gap: 3px;
`;

const AdditionalIconsContainerWrapper = styled(Column)`
    height: 100%;
`;

const Link = styled.a`
    text-decoration: none;
`;

const DescriptionFont = styled(LabelFont)`
    font-size: 0.8rem;
    white-space: nowrap;
`;

const DescriptionContainer = styled(Column)`
    flex-wrap: wrap-reverse;
`;

const HelpButton = styled(Button)``;

const TopRow = styled(Row)`
    padding-bottom: 14px;
`;

const SubtitleFont = styled(LabelFont)`
    padding-left: 4px;
`;
