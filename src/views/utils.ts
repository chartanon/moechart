import styled, { css } from 'styled-components';

export const Row = styled.div<{
    $centered?: boolean;
    $maxWidth?: boolean;
    $maxHeight?: boolean;
    $gap?: number;
}>`
    display: flex;
    flex-direction: row;
    ${({ $centered }) =>
        $centered
            ? css`
                  justify-content: center;
                  align-items: center;
              `
            : ''};

    ${({ $maxWidth }) =>
        $maxWidth
            ? css`
                  width: 100%;
              `
            : ''};

    ${({ $maxHeight }) =>
        $maxHeight
            ? css`
                  height: 100vh;
              `
            : ''};
    ${({ $gap }) =>
        $gap
            ? css`
                  gap: ${$gap}px;
              `
            : ''};
`;

export const Column = styled(Row)<{
    $centered?: boolean;
    $maxWidth?: boolean;
    $maxHeight?: boolean;
    $gap?: number;
}>`
    flex-direction: column;
`;

export const COLOURS = {
    GENRE: {
        STORYLINE: '#2e62dd',
        STORY_ROMANCE: '#9b3add',
        ROMANCE: '#dd4b4b',
        ROM_COM: '#dd7b4b',
        COMEDY: '#e1cd5d',
        NUKIGE: '#e8e8e8'
    },
    TEXT: '#ffffff',
    SECONDARY: '#AED6F1',
    BACKGROUND: '#000000',
    NAVBAR: '#232323'
};

const BaseFont = styled.div<{ $textAlign?: string }>`
    font-family: sans-serif;
    ${({ $textAlign }) =>
        $textAlign
            ? css`
                  text-align: ${$textAlign};
              `
            : ''};
`;

export const TitleFont = styled(BaseFont)<{ $fontColour?: string }>`
    font-size: 1.3rem;
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ $fontColour }) =>
        $fontColour
            ? css`
                  ${$fontColour}
              `
            : css`
                  ${COLOURS.TEXT}
              `};
`;

export const LabelFont = styled(BaseFont)<{
    $outlineColour?: string;
}>`
    font-size: 0.9rem;
    color: ${COLOURS.TEXT};
    ${({ $outlineColour }) =>
        $outlineColour
            ? css`
                  text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px,
                      #fff 0px 0px 15px, ${$outlineColour} 0px 0px 20px,
                      ${$outlineColour} 0px 0px 30px,
                      ${$outlineColour} 0px 0px 40px,
                      ${$outlineColour} 0px 0px 50px,
                      ${$outlineColour} 0px 0px 75px;
              `
            : ''};
`;

export const HeaderFont = styled(BaseFont)`
    font-size: 3rem;
    color: ${COLOURS.TEXT};
`;
