import React from 'react';
import styled, { css } from 'styled-components';

export const ArrowIcon: React.FC<{ rotate?: number }> = ({ rotate }) => {
    return (
        <StyledSVG
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            version="1.1"
            viewBox="0 0 5.821 5.821"
            $rotate={rotate}
        >
            <g strokeWidth="0.529">
                <rect
                    width="2.381"
                    height="0.529"
                    x="2.646"
                    y="-3.175"
                    fill="#fff"
                    fillOpacity="1"
                    rx="0.265"
                    ry="0.265"
                    transform="rotate(90)"
                ></rect>
                <path
                    fill="none"
                    stroke="#fff"
                    strokeDasharray="none"
                    strokeLinecap="round"
                    strokeLinejoin="miter"
                    strokeMiterlimit="4"
                    strokeOpacity="1"
                    d="M1.587 3.969L2.91 5.292l1.323-1.323"
                ></path>
                <ellipse
                    cx="2.91"
                    cy="1.852"
                    fill="#fff"
                    stroke="none"
                    strokeDasharray="none"
                    strokeLinecap="round"
                    strokeMiterlimit="4"
                    strokeOpacity="1"
                    rx="0.265"
                    ry="0.265"
                ></ellipse>
                <ellipse
                    cx="2.91"
                    cy="0.794"
                    fill="#fff"
                    stroke="none"
                    strokeDasharray="none"
                    strokeLinecap="round"
                    strokeMiterlimit="4"
                    strokeOpacity="1"
                    rx="0.265"
                    ry="0.265"
                ></ellipse>
            </g>
        </StyledSVG>
    );
};

const StyledSVG = styled.svg<{ $rotate?: number }>`
    ${({ $rotate }) =>
        $rotate
            ? css`
                  transform: rotate(${$rotate}deg);
              `
            : ''}
`;
