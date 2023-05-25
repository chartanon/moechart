import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import React from 'react';

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
                  height: 100%;
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
    NAVBAR: '#2e1c2b'
};

const BaseFont = styled.div<{ $textAlign?: string }>`
    font-family: monospace;
    ${({ $textAlign }) =>
        $textAlign
            ? css`
                  text-align: ${$textAlign};
              `
            : ''};
`;

export const TitleFont = styled(BaseFont)<{ $fontColour?: string }>`
    font-family: sans-serif;
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
                  text-shadow: #fff 0px 0px 20px, #fff 0px 0px 20px,
                      #fff 0px 0px 20px, ${$outlineColour} 0px 0px 5px,
                      ${$outlineColour} 0px 0px 10px,
                      ${$outlineColour} 0px 0px 10px,
                      ${$outlineColour} 0px 0px 10px,
                      ${$outlineColour} 0px 0px 10px;
              `
            : ''};
`;

export const HeaderFont = styled(BaseFont)`
    font-size: 3rem;
    color: ${COLOURS.TEXT};
`;

export const Button = styled.button`
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
`;

export const VerticalFade: React.FC<{
    children?: React.ReactNode | undefined;
    $maxHeight?: boolean;
}> = ({ children, $maxHeight }) => {
    return (
        <FadeDiv
            $maxHeight={$maxHeight}
            initial={{ opacity: 0, y: -20 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 }
            }}
            exit={{
                opacity: 0,
                y: -15,
                transition: { duration: 0.5 }
            }}
        >
            {children}
        </FadeDiv>
    );
};

const FadeDiv = styled(motion.div)<{ $maxHeight?: boolean }>`
    ${({ $maxHeight }) =>
        $maxHeight
            ? css`
                  height: 100%;
              `
            : ''}
`;

export const StaggeredEntranceFade: React.FC<{
    children?: React.ReactNode | undefined;
    index: number;
}> = ({ children, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20, y: -20 }}
            animate={{
                opacity: 1,
                x: 0,
                y: 0,
                transition: { duration: Math.min(0.1 * (index + 1), 2) }
            }}
            exit={{
                opacity: 0,
                x: 40,
                y: -40,
                transition: { duration: 0.4 }
            }}
        >
            {children}
        </motion.div>
    );
};

export const StaggeredEntranceFadeSlow: React.FC<{
    children?: React.ReactNode | undefined;
    index: number;
}> = ({ children, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -400 }}
            animate={{
                opacity: 1,
                x: 0,
                y: 0,
                transition: { duration: 0.25 * (index + 1) }
            }}
            exit={{
                opacity: 0,
                y: -400,
                transition: { duration: 0.4 }
            }}
        >
            {children}
        </motion.div>
    );
};

export const Section = styled(Column)`
    display: flex;
    gap: 10px;
`;

export const ResponsiveButton = styled(Button)<{ $isSelected?: boolean }>`
    :hover {
        font-weight: bold;
        box-shadow: 2px 2px 4px ${COLOURS.TEXT};
        outline: 3px solid ${COLOURS.TEXT};
    }

    :active {
        font-weight: normal;
        outline: 2px solid ${COLOURS.TEXT};
        box-shadow: 2px 2px 4px ${COLOURS.TEXT};
    }

    ${({ $isSelected }) =>
        $isSelected
            ? css`
                  outline: 3px solid ${COLOURS.TEXT};
              `
            : ''};
`;
