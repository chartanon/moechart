import React, { ReactElement } from 'react';
import { LabelFont, Row } from '../utils';
import styled from 'styled-components';

export interface LegendItemProps {
    IconSVG: () => ReactElement;
    label: string;
    secondaryLabel?: string;
}

export const LegendItem: React.FC<LegendItemProps> = ({
    IconSVG,
    label,
    secondaryLabel
}) => {
    return (
        <LegendItemContainer>
            <IconSVG />
            <LegendLabel>{label}</LegendLabel>
            <LegendLabel>{secondaryLabel}</LegendLabel>
        </LegendItemContainer>
    );
};

const LegendItemContainer = styled(Row)`
    & > :last-child {
        margin-left: auto;
    }
`;

const LegendLabel = styled(LabelFont)`
    display: flex;
    align-items: center;
    padding-left: 8px;
`;
