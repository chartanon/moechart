import React from 'react';
import { AttributeProps } from './LegendData';
import { LegendItemContainer, LegendLabel } from './utils';
import { FilterAttribute } from '../HomePage/Chart/utils';
import { ResponsiveButton } from '../utils';

interface IProps extends AttributeProps {
    isSelected: boolean;
    onClick: (value: FilterAttribute) => void;
}

export const AttributeItem: React.FC<IProps> = ({
    type,
    IconSVG,
    label,
    isSelected,
    onClick
}) => {
    return (
        <ResponsiveButton
            $isSelected={!!isSelected}
            onClick={() => onClick(type)}
        >
            <LegendItemContainer>
                <IconSVG />
                <LegendLabel>{label}</LegendLabel>
            </LegendItemContainer>
        </ResponsiveButton>
    );
};
