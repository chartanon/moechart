import styled from 'styled-components';
import {
    Column,
    HeaderFont,
    Row,
    StaggeredEntranceFadeSlow
} from '../../utils';
import { Popup } from './Popup';
import { SeriesRelationshipMap } from './MoegeChart';
import { VisualNovelCard } from './VisualNovelCard';
import { AnimatePresence } from 'framer-motion';

interface IProps {
    isOpen?: boolean;
    onClose?: () => void;
    originalGame: string;
    allSequelRelations: SeriesRelationshipMap;
    shouldDisplayDateInTitle?: boolean;
}

export const SequelsPopup: React.FC<IProps> = ({
    isOpen,
    onClose,
    originalGame,
    allSequelRelations,
    shouldDisplayDateInTitle
}) => {
    if (shouldDisplayDateInTitle) {
        allSequelRelations[originalGame].sort(
            (visualNovelOne, visualNovelTwo) =>
                visualNovelTwo.translationReleaseDate! -
                visualNovelOne.translationReleaseDate!
        );
    }

    return (
        <Popup isOpen={isOpen} onClose={onClose}>
            <Column $centered>
                <EntriesContainer $maxHeight $centered>
                    <AnimatePresence>
                        {allSequelRelations[originalGame].map(
                            (relationship, index) => {
                                return (
                                    <StaggeredEntranceFadeSlow
                                        key={relationship.vndbLink}
                                        index={index}
                                    >
                                        <VisualNovelCard {...relationship} />
                                    </StaggeredEntranceFadeSlow>
                                );
                            }
                        )}
                    </AnimatePresence>
                </EntriesContainer>
                <StyledHeaderFont>
                    Translated Fandiscs and Sequels
                </StyledHeaderFont>
            </Column>
        </Popup>
    );
};

const EntriesContainer = styled(Row)`
    position: fixed;
    flex-wrap: wrap;
    top: 0;
    gap: 0px 80px;
    margin-top: 100px;
    @media (max-width: 1050px) {
        margin-top: 250px;
        overflow: auto;
        height: 75vh;
    }
`;

const StyledHeaderFont = styled(HeaderFont)`
    position: fixed;
    top: 5%;
`;
