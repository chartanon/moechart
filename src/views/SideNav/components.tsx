import styled, { css } from 'styled-components';
import { Row, LabelFont, Button, COLOURS } from '../utils';

export const LegendItemContainer = styled(Row)`
    padding: 7px 5px 7px 5px;
    & > :last-child {
        margin-left: auto;
        text-align: right;
    }
`;

export const LegendLabel = styled(LabelFont)`
    display: flex;
    align-items: center;
    padding-left: 8px;
`;

export const LegendButton = styled(Button)<{ $isSelected: boolean }>`
    :hover {
        font-weight: bold;
        box-shadow: 2px 2px 4px ${COLOURS.TEXT};
        outline: 3px solid ${COLOURS.TEXT};
    }

    :active {
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
