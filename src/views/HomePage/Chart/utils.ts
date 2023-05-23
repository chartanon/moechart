import styled, { css } from 'styled-components';

export const IMAGE_HEIGHT = 260;
export const IMAGE_WIDTH = 190;

export const ThumbnailImage = styled.img<{ $outlineColour?: string }>`
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
