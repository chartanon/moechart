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
    ThumbnailImage
} from './utils';
import { PlaytimeLength } from './utils';
import { HelpIcon } from '../../assets/icons/misc/HelpIcon';
import moment from 'moment';

export interface VisualNovelCardProps extends VisualNovelProps {
    moreInfoOnClick?: () => void;
    shouldDisplayDateInTitle?: boolean;
}

export const VisualNovelCard: React.FC<VisualNovelCardProps> = ({
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
    moreInfoOnClick,
    shouldDisplayDateInTitle,
    translationReleaseDate
}) => {
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
        <Container>
            <TopRow>
                {moreInfoOnClick ? (
                    <HelpButton onClick={moreInfoOnClick}>
                        <HelpIcon />
                    </HelpButton>
                ) : null}
                {shouldDisplayDateInTitle ? (
                    <Column>
                        <Title>{name}</Title>
                        <DateFont>
                            ({moment(translationReleaseDate).format('ll')})
                        </DateFont>
                    </Column>
                ) : (
                    <Title>{name}</Title>
                )}
            </TopRow>
            <ContentBody>
                <Link href={vndbLink}>
                    <ThumbnailImage
                        src={thumbnailSource}
                        loading="lazy"
                        alt=""
                        $outlineColour={outlineColour}
                        $cardStackCount={sequels?.length}
                    />
                </Link>
                <IconsContainer>
                    <PlaytimeIconContainer $outlineColour={outlineColour}>
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
                        <AdditionalIconsContainer
                            $outlineColour={outlineColour}
                        >
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
                                <HasSequelIcon key="has-sequel" />
                            ) : null}
                            {originalGame ? (
                                <IsSequelIcon key="has-sequel" />
                            ) : null}
                        </AdditionalIconsContainer>
                    </AdditionalIconsContainerWrapper>
                </IconsContainer>
            </ContentBody>
            <DescriptionFont $outlineColour={outlineColour} $textAlign="right">
                {descriptionFirstRowText}
            </DescriptionFont>
            <DescriptionFont $outlineColour={outlineColour} $textAlign="right">
                {descriptionSecondRowText}
            </DescriptionFont>
        </Container>
    );
};

const Container = styled(Column)`
    max-width: ${IMAGE_WIDTH}px;
`;

const Title = styled(TitleFont)`
    margin-left: 5px;
    font-size: 1.15rem;
`;

const ContentBody = styled(Row)`
    height: ${IMAGE_HEIGHT}px;
`;

const IconsContainer = styled(Column)`
    margin-left: 10px;
    padding: 5px;
    display: flex;
    height: 100%;
    & > :last-child {
        align-self: flex-end;
        justify-content: flex-end;
    }
`;

const PlaytimeIconContainer = styled.div<{ $outlineColour: string }>`
    height: auto;
    ${({ $outlineColour }) =>
        $outlineColour
            ? css`
                  background-color: ${$outlineColour}bb;
                  border-radius: 15px;
                  padding: 5px;
              `
            : ''}
`;

const AdditionalIconsContainer = styled(Column)<{ $outlineColour: string }>`
    ${({ $outlineColour }) =>
        $outlineColour
            ? css`
                  background-color: ${$outlineColour}bb;
                  border-radius: 15px;
                  padding: 5px;
              `
            : ''}
`;

const AdditionalIconsContainerWrapper = styled(Column)`
    height: 100%;
`;

const Link = styled.a`
    text-decoration: none;
`;

const DescriptionFont = styled(LabelFont)`
    font-size: 0.8rem;
`;

const HelpButton = styled(Button)``;

const TopRow = styled(Row)`
    padding-bottom: 14px;
`;

const DateFont = styled(LabelFont)`
    padding-left: 4px;
`;
