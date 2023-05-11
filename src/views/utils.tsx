import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
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
}> = ({ children }) => {
    return (
        <motion.div
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
        </motion.div>
    );
};

export const Section = styled(Column)`
    display: flex;
    gap: 10px;
`;
