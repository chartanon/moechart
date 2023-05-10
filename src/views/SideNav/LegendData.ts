import { LegendItemProps } from './LegendItem';
import { PlaytimeShortIcon } from '../assets/icons/PlaytimeShortIcon';
import { PlaytimeMediumIcon } from '../assets/icons/PlaytimeMediumIcon';
import { PlaytimeLongIcon } from '../assets/icons/PlaytimeLongIcon';
import { PlaytimeVeryLongIcon } from '../assets/icons/PlaytimeVeryLongIcon';
import { ADVIcon } from '../assets/icons/ADVIcon';
import { NVLIcon } from '../assets/icons/NVLIcon';
import { FloatingTextIcon } from '../assets/icons/FloatingTextIcon';
import { LockIcon } from '../assets/icons/LockIcon';
import { BranchIcon } from '../assets/icons/BranchIcon';
import { LadderIcon } from '../assets/icons/LadderIcon';
import { TrueIcon } from '../assets/icons/TrueIcon';
import { LinearPlotIcon } from '../assets/icons/LinearPlotIcon';
import { KineticNovelIcon } from '../assets/icons/KineticNovelIcon';
import { FandiscIcon } from '../assets/icons/FandiscIcon';
import { FrenchGirlIcon } from '../assets/icons/FrenchGirlIcon';

export const legendData: LegendItemProps[] = [
    { IconSVG: PlaytimeShortIcon, label: 'Short', secondaryLabel: '2-10 hrs' },
    {
        IconSVG: PlaytimeMediumIcon,
        label: 'Medium',
        secondaryLabel: '10-30 hrs'
    },
    { IconSVG: PlaytimeLongIcon, label: 'Long', secondaryLabel: '30-50 hrs' },
    {
        IconSVG: PlaytimeVeryLongIcon,
        label: 'Very Long',
        secondaryLabel: '>50 hrs'
    },
    {
        IconSVG: ADVIcon,
        label: 'Part-screen Textbox'
    },
    {
        IconSVG: NVLIcon,
        label: 'Full-screen Text-box'
    },
    {
        IconSVG: FloatingTextIcon,
        label: 'Floating Textbox'
    },
    {
        IconSVG: LockIcon,
        label: 'Unlockable Routes'
    },
    {
        IconSVG: BranchIcon,
        label: 'Branching Plot'
    },
    {
        IconSVG: LadderIcon,
        label: 'Ladder Structure'
    },
    { IconSVG: TrueIcon, label: 'One True Route' },
    {
        IconSVG: LinearPlotIcon,
        label: 'Linear Plot'
    },
    {
        IconSVG: KineticNovelIcon,
        label: 'Kinetic Novel'
    },
    {
        IconSVG: FandiscIcon,
        label: "TL'd Fandisc(s)/Sequel"
    },
    {
        IconSVG: FrenchGirlIcon,
        label: 'Suitable for 12-year-old French Girls'
    }
];
