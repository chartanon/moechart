import React, { useState } from 'react';
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
import { SeriesRelationshipMap } from './MoegeChart';
import { VisualNovelProps } from './visualNovelData';
import { ScenarioSelectionIcon } from '../../assets/icons/attribute/ScenarioSelectionIcon';
import { HasSequelIcon } from '../../assets/icons/attribute/HasSequalIcon';
import { IsSequelIcon } from '../../assets/icons/attribute/IsSequelIcon';
import { HelpIcon } from '../../assets/icons/misc/HelpIcon';
import { MoreInfoModal } from './MoreInfoModal';

export enum PlaytimeLength {
    SHORT = 'SHORT',
    MEDIUM = 'MEDIUM',
    LONG = 'LONG',
    VERY_LONG = 'VERY_LONG'
}

export enum Attribute {
    ADV_TEXTBOX = 'ADV_TEXTBOX',
    NVL_TEXTBOX = 'NVL_TEXTBOX',
    FLOATING_TEXTBOX = 'FLOATING_TEXTBOX',
    UNLOCKABLE_ROUTES = 'UNLOCKABLE_ROUTES',
    BRANCHING_PLOT = 'BRANCHING_PLOT',
    LADDER_STRUCTURE = 'LADDER_STRUCTURE',
    TRUE_ROUTE = 'TRUE_ROUTE',
    LINEAR_PLOT = 'LINEAR_PLOT',
    KINETIC_NOVEL = 'KINETIC_NOVEL',
    SCENARIO_SELECTION = 'SCENARIO_SELECTION',
    SUITABLE_FOR_12_YEAR_OLD_FRENCH_GIRLS = 'SUITABLE_FOR_12_YEAR_OLD_FRENCH_GIRLS'
}

export enum GenreFocus {
    STORYLINE = 'STORYLINE',
    STORY_ROMANCE = 'STORY_ROMANCE',
    ROMANCE = 'ROMANCE',
    ROM_COM = 'ROM_COM',
    COMEDY = 'COMEDY',
    NUKIGE = 'NUKIGE'
}

export interface VisualNovelCardProps extends VisualNovelProps {
    allSequelRelationships?: SeriesRelationshipMap;
    isSelectedHideSequelFilter?: boolean;
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
    allSequelRelationships,
    isSelectedHideSequelFilter
}) => {
    const attributesOrder = Object.values(Attribute);
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

    const isVNWithSequels =
        sequels &&
        sequels.length > 0 &&
        allSequelRelationships &&
        allSequelRelationships[vndbLink];

    const [shouldShowMoreInfo, setShouldShowMoreInfo] =
        useState<boolean>(false);

    return (
        <Container>
            {shouldShowMoreInfo ? <MoreInfoModal /> : null}
            <Row>
                {isVNWithSequels && isSelectedHideSequelFilter ? (
                    <HelpButton onClick={() => setShouldShowMoreInfo(true)}>
                        <HelpIcon />
                    </HelpButton>
                ) : null}
                <Name>{name}</Name>
            </Row>
            <ContentBody>
                <Link href={vndbLink}>
                    <ThumbnailImage
                        src={thumbnailSource}
                        loading="lazy"
                        alt=""
                        $outlineColour={outlineColour}
                    />
                </Link>
                <IconsContainer $outlineColour={outlineColour}>
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
                    <AdditionalIconsContainer>
                        {attributes
                            .sort(
                                (attributeOne, attributeTwo) =>
                                    attributesOrder.indexOf(attributeOne) -
                                    attributesOrder.indexOf(attributeTwo)
                            )
                            .map(attribute => {
                                if (attribute === Attribute.ADV_TEXTBOX) {
                                    return <ADVIcon key="adv" />;
                                }
                                if (attribute === Attribute.NVL_TEXTBOX) {
                                    return <NVLIcon key="nvl" />;
                                }
                                if (attribute === Attribute.FLOATING_TEXTBOX) {
                                    return <FloatingTextIcon key="float" />;
                                }
                                if (attribute === Attribute.UNLOCKABLE_ROUTES) {
                                    return <LockIcon key="lock" />;
                                }
                                if (attribute === Attribute.BRANCHING_PLOT) {
                                    return <BranchIcon key="branch" />;
                                }
                                if (attribute === Attribute.LADDER_STRUCTURE) {
                                    return <LadderIcon key="ladder" />;
                                }
                                if (attribute === Attribute.TRUE_ROUTE) {
                                    return <TrueIcon key="true" />;
                                }
                                if (attribute === Attribute.LINEAR_PLOT) {
                                    return <LinearPlotIcon key="linear" />;
                                }
                                if (attribute === Attribute.KINETIC_NOVEL) {
                                    return <KineticNovelIcon key="kinetic" />;
                                }
                                if (
                                    attribute === Attribute.SCENARIO_SELECTION
                                ) {
                                    return (
                                        <ScenarioSelectionIcon key="scenario" />
                                    );
                                }
                                if (
                                    attribute ===
                                    Attribute.SUITABLE_FOR_12_YEAR_OLD_FRENCH_GIRLS
                                ) {
                                    return <FrenchGirlIcon key="frenchgirl" />;
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
                </IconsContainer>
            </ContentBody>
            <DescriptionFont $outlineColour={outlineColour} $textAlign="right">
                {descriptionFirstRowText}
            </DescriptionFont>
            <DescriptionFont $outlineColour={outlineColour} $textAlign="right">
                {descriptionSecondRowText}
            </DescriptionFont>
            {isVNWithSequels && isSelectedHideSequelFilter ? (
                <SequelRow>
                    {allSequelRelationships[vndbLink].map(
                        (relationship, index) => (
                            <Row key={relationship.vndbLink}>
                                <TitleFont>{(index + 1) * -1}</TitleFont>
                                <SequelImage
                                    src={relationship.thumbnailSource}
                                    loading="lazy"
                                    alt=""
                                    $outlineColour={outlineColour}
                                    $index={index}
                                />
                            </Row>
                        )
                    )}
                </SequelRow>
            ) : null}
        </Container>
    );
};

const IMAGE_HEIGHT = 260;
const IMAGE_WIDTH = 190;
const SEQUELS_OFFSET = 5;

const Container = styled(Column)`
    max-width: ${IMAGE_WIDTH}px;
`;

const Name = styled(TitleFont)`
    margin-left: 5px;
    padding-bottom: 14px;
    font-size: 1.2rem;
`;

const ContentBody = styled(Row)`
    height: ${IMAGE_HEIGHT}px;
`;

const ThumbnailImage = styled.img<{ $outlineColour: string }>`
    width: ${IMAGE_WIDTH}px;
    height: ${IMAGE_HEIGHT}px;
    object-fit: cover;
    box-sizing: border-box;
    border-radius: 9px;

    ${({ $outlineColour }) => {
        return css`
            :hover {
                outline: 4px solid ${$outlineColour};
                margin-top: -10px;
            }
            box-shadow: 0 10px 40px ${$outlineColour};
        `;
    }}
`;

const SequelImage = styled(ThumbnailImage)<{ $index: number }>`
    position: absolute;
    box-shadow: unset;
    ${({ $index }) =>
        $index
            ? css`
                  left: ${$index * SEQUELS_OFFSET}px;
                  top: ${$index * SEQUELS_OFFSET}px;
                  z-index: ${($index + 1) * -1};
              `
            : ''}
`;

const SequelRow = styled(Row)`
    width: 0;
    height: 0;
    position: relative;
    left: ${SEQUELS_OFFSET}px;
    bottom: ${290 - SEQUELS_OFFSET}px;
    z-index: -1;
`;

const IconsContainer = styled(Column)<{ $outlineColour: string }>`
    margin-left: 10px;
    padding: 5px;
    display: flex;
    height: 100%;
    & > :last-child {
        align-self: flex-end;
        justify-content: flex-end;
    }
    ${({ $outlineColour }) =>
        $outlineColour
            ? css`
                  background-color: ${$outlineColour}88;
                  border-radius: 15px;
              `
            : ''}
`;

const PlaytimeIconContainer = styled.div``;

const AdditionalIconsContainer = styled(Column)`
    height: 100%;
`;

const Link = styled.a`
    text-decoration: none;
`;

const DescriptionFont = styled(LabelFont)`
    font-size: 0.8rem;
`;

const HelpButton = styled(Button)`
    margin-top: -13px;
`;
