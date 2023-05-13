import React from 'react';
import { PlaytimeProps } from './LegendData';
import { LegendButton, LegendItemContainer, LegendLabel } from './components';
import { PlaytimeLength } from '../HomePage/Chart/VisualNovelCard';

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
        <LegendButton
            $isSelected={!!isSelected}
            onClick={() => onClick(length)}
        >
            <LegendItemContainer>
                <IconSVG />
                <LegendLabel>{label}</LegendLabel>
                <LegendLabel>{secondaryLabel}</LegendLabel>
            </LegendItemContainer>
        </LegendButton>
    );
};
