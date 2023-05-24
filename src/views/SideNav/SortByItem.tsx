import React from 'react';
import { MiscellaneousSortingOption, SortingProps } from './LegendData';
import { LegendItemContainer, LegendLabel } from './utils';
import { ResponsiveButton } from '../utils';

interface IProps extends SortingProps {
    isSelected: boolean;
    onClick: (value: MiscellaneousSortingOption) => void;
}

export const SortByItem: React.FC<IProps> = ({
    option,
    IconSVG,
    label,
    isSelected,
    onClick
}) => {
    return (
        <ResponsiveButton
            $isSelected={!!isSelected}
            onClick={() => onClick(option)}
        >
            <LegendItemContainer>
                <IconSVG />
                <LegendLabel>{label}</LegendLabel>
            </LegendItemContainer>
        </ResponsiveButton>
    );
};
