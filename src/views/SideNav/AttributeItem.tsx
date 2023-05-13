import React from 'react';
import { AttributeProps } from './LegendData';
import { LegendButton, LegendItemContainer, LegendLabel } from './components';
import { Attribute } from '../HomePage/Chart/VisualNovelCard';

interface IProps extends AttributeProps {
    isSelected: boolean;
    onClick: (value: Attribute) => void;
}

export const AttributeItem: React.FC<IProps> = ({
    type,
    IconSVG,
    label,
    isSelected,
    onClick
}) => {
    return (
        <LegendButton $isSelected={!!isSelected} onClick={() => onClick(type)}>
            <LegendItemContainer>
                <IconSVG />
                <LegendLabel>{label}</LegendLabel>
            </LegendItemContainer>
        </LegendButton>
    );
};
