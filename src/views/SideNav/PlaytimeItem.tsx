import React from 'react';
import { PlaytimeProps } from './LegendData';
import { LegendItemContainer, LegendLabel } from './components';
import { PlaytimeLength } from '../HomePage/Chart/VisualNovelCard';
import { ResponsiveButton } from '../utils';

interface IProps extends PlaytimeProps {
    isSelected: boolean;
    onClick: (value: PlaytimeLength) => void;
}

export const PlaytimeItem: React.FC<IProps> = ({
    length,
    IconSVG,
    label,
    secondaryLabel,
    isSelected,
    onClick
}) => {
    return (
        <ResponsiveButton
            $isSelected={!!isSelected}
            onClick={() => onClick(length)}
        >
            <LegendItemContainer>
                <IconSVG />
                <LegendLabel>{label}</LegendLabel>
                <LegendLabel>{secondaryLabel}</LegendLabel>
            </LegendItemContainer>
        </ResponsiveButton>
    );
};