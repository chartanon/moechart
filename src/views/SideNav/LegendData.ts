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
import { ReactElement } from 'react';
import { Attribute, PlaytimeLength } from '../HomePage/Chart/VisualNovelEntry';

interface BaseProps {
    IconSVG: () => ReactElement;
    label: string;
}
export interface AttributeProps extends BaseProps {
    type: Attribute;
}

export interface PlaytimeProps extends BaseProps {
    length: PlaytimeLength;
    secondaryLabel: string;
}

export const playtimesList: PlaytimeProps[] = [
    {
        IconSVG: PlaytimeShortIcon,
        label: 'Short',
        secondaryLabel: '2-10 hrs',
        length: PlaytimeLength.SHORT
    },
    {
        IconSVG: PlaytimeMediumIcon,
        label: 'Medium',
        secondaryLabel: '10-30 hrs',
        length: PlaytimeLength.MEDIUM
    },
    {
        IconSVG: PlaytimeLongIcon,
        label: 'Long',
        secondaryLabel: '30-50 hrs',
        length: PlaytimeLength.LONG
    },
    {
        IconSVG: PlaytimeVeryLongIcon,
        label: 'Very Long',
        secondaryLabel: '>50 hrs',
        length: PlaytimeLength.VERY_LONG
    }
];

export const attributesList: AttributeProps[] = [
    {
        IconSVG: ADVIcon,
        label: 'Part-screen Textbox',
        type: Attribute.ADV_TEXTBOX
    },
    {
        IconSVG: NVLIcon,
        label: 'Full-screen Text-box',
        type: Attribute.NVL_TEXTBOX
    },
    {
        IconSVG: FloatingTextIcon,
        label: 'Floating Textbox',
        type: Attribute.FLOATING_TEXTBOX
    },
    {
        IconSVG: LockIcon,
        label: 'Unlockable Routes',
        type: Attribute.UNLOCKABLE_ROUTES
    },
    {
        IconSVG: BranchIcon,
        label: 'Branching Plot',
        type: Attribute.BRANCHING_PLOT
    },
    {
        IconSVG: LadderIcon,
        label: 'Ladder Structure',
        type: Attribute.LADDER_STRUCTURE
    },
    {
        IconSVG: TrueIcon,
        label: 'One True Route',
        type: Attribute.TRUE_ROUTE
    },
    {
        IconSVG: LinearPlotIcon,
        label: 'Linear Plot',
        type: Attribute.LINEAR_PLOT
    },
    {
        IconSVG: KineticNovelIcon,
        label: 'Kinetic Novel',
        type: Attribute.KINETIC_NOVEL
    },
    {
        IconSVG: FandiscIcon,
        label: "TL'd Fandisc(s)/Sequel",
        type: Attribute.HAS_SEQUELS
    },
    {
        IconSVG: FrenchGirlIcon,
        label: 'Suitable for 12-year-old French Girls',
        type: Attribute.SUITABLE_FOR_12_YEAR_OLD_FRENCH_GIRLS
    }
];
