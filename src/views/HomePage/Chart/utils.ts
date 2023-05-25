import styled, { css } from 'styled-components';

export const IMAGE_HEIGHT = 260;
export const IMAGE_WIDTH = 190;
export const SEQUELS_OFFSET = 5;

export enum PlaytimeLength {
    SHORT = 'SHORT',
    MEDIUM = 'MEDIUM',
    LONG = 'LONG',
    VERY_LONG = 'VERY_LONG'
}

export enum FilterAttribute {
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

export const ThumbnailImage = styled.img<{
    $outlineColour?: string;
    $cardStackCount?: number;
    $shouldScaleSize?: boolean;
}>`
    ${({ $cardStackCount, $shouldScaleSize }) =>
        $cardStackCount && $shouldScaleSize
            ? css`
                  width: ${IMAGE_WIDTH - $cardStackCount * SEQUELS_OFFSET}px;
                  height: ${IMAGE_HEIGHT - $cardStackCount * SEQUELS_OFFSET}px;
              `
            : css`
                  width: ${IMAGE_WIDTH}px;
                  height: ${IMAGE_HEIGHT}px;
              `}

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
