import { PlaytimeShortIcon } from '../assets/icons/playtime/PlaytimeShortIcon';
import { PlaytimeMediumIcon } from '../assets/icons/playtime/PlaytimeMediumIcon';
import { PlaytimeLongIcon } from '../assets/icons/playtime/PlaytimeLongIcon';
import { PlaytimeVeryLongIcon } from '../assets/icons/playtime/PlaytimeVeryLongIcon';
import { ADVIcon } from '../assets/icons/attribute/ADVIcon';
import { NVLIcon } from '../assets/icons/attribute/NVLIcon';
import { FloatingTextIcon } from '../assets/icons/attribute/FloatingTextIcon';
import { LockIcon } from '../assets/icons/attribute/LockIcon';
import { BranchIcon } from '../assets/icons/attribute/BranchIcon';
import { LadderIcon } from '../assets/icons/attribute/LadderIcon';
import { TrueIcon } from '../assets/icons/attribute/TrueIcon';
import { LinearPlotIcon } from '../assets/icons/attribute/LinearPlotIcon';
import { KineticNovelIcon } from '../assets/icons/attribute/KineticNovelIcon';
import { FrenchGirlIcon } from '../assets/icons/attribute/FrenchGirlIcon';
import { ReactElement } from 'react';
import { ClockIcon } from '../assets/icons/sorting/ClockIcon';
import { DiceIcon } from '../assets/icons/sorting/DiceIcon';
import { ScenarioSelectionIcon } from '../assets/icons/attribute/ScenarioSelectionIcon';
import { Attribute } from '../HomePage/Chart/utils';
import { PlaytimeLength } from '../HomePage/Chart/utils';

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

export interface SortingProps extends BaseProps {
    option: SortingOption;
}

export enum SortingOption {
    CHRONOLOGICAL = 'CHRONOLOGICAL',
    RANDOM = 'RANDOM'
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

export const sortingList: SortingProps[] = [
    {
        IconSVG: ClockIcon,
        label: 'Newest Releases',
        option: SortingOption.CHRONOLOGICAL
    },
    {
        IconSVG: DiceIcon,
        label: 'Random 10',
        option: SortingOption.RANDOM
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
        IconSVG: ScenarioSelectionIcon,
        label: 'Scenario Selection',
        type: Attribute.SCENARIO_SELECTION
    },
    {
        IconSVG: FrenchGirlIcon,
        label: 'Suitable for 12-year-old French Girls',
        type: Attribute.SUITABLE_FOR_12_YEAR_OLD_FRENCH_GIRLS
    }
];
