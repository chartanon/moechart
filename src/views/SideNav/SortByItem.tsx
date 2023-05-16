import React from 'react';
import { SortingOption, SortingProps } from './LegendData';
import { LegendButton, LegendItemContainer, LegendLabel } from './components';

interface IProps extends SortingProps {
    isSelected: boolean;
    onClick: (value: SortingOption) => void;
}

export const SortByItem: React.FC<IProps> = ({
    option,
    IconSVG,
    label,
    isSelected,
    onClick
}) => {
    return (
        <LegendButton
            $isSelected={!!isSelected}
            onClick={() => onClick(option)}
        >
            <LegendItemContainer>
                <IconSVG />
                <LegendLabel>{label}</LegendLabel>
            </LegendItemContainer>
        </LegendButton>
    );
};
