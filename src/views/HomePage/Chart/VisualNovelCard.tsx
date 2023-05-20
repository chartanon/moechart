import React from 'react';
import styled, { css } from 'styled-components';
import { PlaytimeShortIcon } from '../../assets/icons/playtime/PlaytimeShortIcon';
import { COLOURS, Column, Row, LabelFont, TitleFont } from '../../utils';
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
import { FandiscIcon } from '../../assets/icons/attribute/FandiscIcon';
import { FrenchGirlIcon } from '../../assets/icons/attribute/FrenchGirlIcon';

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
    SEQUEL = 'SEQUEL',
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

export enum Series {
    AOKANA = 'AOKANA'
}

export interface VisualNovelProps {
    name: string;
    vndbLink: string;
    playtime?: PlaytimeLength;
    thumbnailSource: string;
    attributes: Attribute[];
    genreFocus: GenreFocus;
    descriptionFirstRowText: string;
    descriptionSecondRowText: string;
    translationReleaseDate?: number;
    isUpcomingRelease?: boolean;
    series?: Series;
}

export const VisualNovelCard: React.FC<VisualNovelProps> = ({
    name,
    vndbLink,
    playtime,
    thumbnailSource,
    attributes,
    genreFocus,
    descriptionFirstRowText,
    descriptionSecondRowText
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
    return (
        <Container>
            <Link href={vndbLink}>
                <Name>{name}</Name>
            </Link>
            <ContentBody>
                <Link href={vndbLink}>
                    <ThumbnailImage
                        src={thumbnailSource}
                        loading="lazy"
                        alt=""
                        $outlineColour={outlineColour}
                    />
                </Link>
                <IconsContainer>
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
                                if (attribute === Attribute.SEQUEL) {
                                    return <FandiscIcon key="fandisc" />;
                                }
                                if (
                                    attribute ===
                                    Attribute.SUITABLE_FOR_12_YEAR_OLD_FRENCH_GIRLS
                                ) {
                                    return <FrenchGirlIcon key="frenchgirl" />;
                                }
                                return <></>;
                            })}
                    </AdditionalIconsContainer>
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

const IMAGE_HEIGHT = 260;
const IMAGE_WIDTH = 190;

const Container = styled(Column)`
    max-width: ${IMAGE_WIDTH}px;
`;

const Name = styled(TitleFont)`
    padding-bottom: 14px;
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

const IconsContainer = styled(Column)`
    padding-left: 5px;
    display: flex;
    height: 100%;
    & > :last-child {
        align-self: flex-end;
        justify-content: flex-end;
    }
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
