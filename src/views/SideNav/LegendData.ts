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
import { FilterAttribute } from '../HomePage/Chart/utils';
import { PlaytimeLength } from '../HomePage/Chart/utils';

interface BaseProps {
    IconSVG: () => ReactElement;
    label: string;
}
export interface AttributeProps extends BaseProps {
    type: FilterAttribute;
}

export interface PlaytimeProps extends BaseProps {
    length: PlaytimeLength;
    secondaryLabel: string;
}

export interface SortingProps extends BaseProps {
    option: MiscellaneousSortingOption;
}

export enum MiscellaneousSortingOption {
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

export const miscellaneousSortingToolsList: SortingProps[] = [
    {
        IconSVG: ClockIcon,
        label: 'Newest Releases',
        option: MiscellaneousSortingOption.CHRONOLOGICAL
    },
    {
        IconSVG: DiceIcon,
        label: 'Random 10',
        option: MiscellaneousSortingOption.RANDOM
    }
];

export const filterAttributesList: AttributeProps[] = [
    {
        IconSVG: ADVIcon,
        label: 'Part-screen Textbox',
        type: FilterAttribute.ADV_TEXTBOX
    },
    {
        IconSVG: NVLIcon,
        label: 'Full-screen Text-box',
        type: FilterAttribute.NVL_TEXTBOX
    },
    {
        IconSVG: FloatingTextIcon,
        label: 'Floating Textbox',
        type: FilterAttribute.FLOATING_TEXTBOX
    },
    {
        IconSVG: LockIcon,
        label: 'Unlockable Routes',
        type: FilterAttribute.UNLOCKABLE_ROUTES
    },
    {
        IconSVG: BranchIcon,
        label: 'Branching Plot',
        type: FilterAttribute.BRANCHING_PLOT
    },
    {
        IconSVG: LadderIcon,
        label: 'Ladder Structure',
        type: FilterAttribute.LADDER_STRUCTURE
    },
    {
        IconSVG: TrueIcon,
        label: 'One True Route',
        type: FilterAttribute.TRUE_ROUTE
    },
    {
        IconSVG: LinearPlotIcon,
        label: 'Linear Plot',
        type: FilterAttribute.LINEAR_PLOT
    },
    {
        IconSVG: KineticNovelIcon,
        label: 'Kinetic Novel',
        type: FilterAttribute.KINETIC_NOVEL
    },
    {
        IconSVG: ScenarioSelectionIcon,
        label: 'Scenario Selection',
        type: FilterAttribute.SCENARIO_SELECTION
    },
    {
        IconSVG: FrenchGirlIcon,
        label: 'Suitable for 12-year-old French Girls',
        type: FilterAttribute.SUITABLE_FOR_12_YEAR_OLD_FRENCH_GIRLS
    }
];
