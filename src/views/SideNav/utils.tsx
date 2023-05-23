import styled from 'styled-components';
import { Row, LabelFont } from '../utils';

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

export const SIDE_NAV_WIDTH = 300;
