import styled from 'styled-components';
import {
    Column,
    HeaderFont,
    Row,
    StaggeredEntranceFadeSlow
} from '../../utils';
import { Popup } from './Popup';
import { VisualNovelCard, VisualNovelCardProps } from './VisualNovelCard';
import { AnimatePresence } from 'framer-motion';

interface IProps {
    isOpen?: boolean;
    onClose?: () => void;
    sequelRelations: VisualNovelCardProps[];
    shouldDisplayDateInTitle?: boolean;
}

export const SequelsPopup: React.FC<IProps> = ({
    isOpen,
    onClose,
    sequelRelations,
    shouldDisplayDateInTitle
}) => {
    if (shouldDisplayDateInTitle) {
        sequelRelations.sort(
            (visualNovelOne, visualNovelTwo) =>
                visualNovelTwo.translationReleaseDate! -
                visualNovelOne.translationReleaseDate!
        );
    }

    return (
        <Popup isOpen={isOpen} onClose={onClose}>
            <Column $maxWidth $maxHeight $centered>
                <StyledHeaderFont>
                    Translated Fandiscs and Sequels
                </StyledHeaderFont>
                <EntriesContainer $maxWidth $centered>
                    <AnimatePresence>
                        {sequelRelations.map((relationship, index) => {
                            return (
                                <StaggeredEntranceFadeSlow
                                    key={relationship.vndbLink}
                                    index={index}
                                >
                                    <VisualNovelCard
                                        {...relationship}
                                        shouldDisplayDateInTitle={
                                            shouldDisplayDateInTitle
                                        }
                                    />
                                </StaggeredEntranceFadeSlow>
                            );
                        })}
                    </AnimatePresence>
                </EntriesContainer>
            </Column>
        </Popup>
    );
};

const EntriesContainer = styled(Row)`
    flex-wrap: wrap;
    gap: 0px 80px;
`;

const StyledHeaderFont = styled(HeaderFont)`
    margin-bottom: 100px;
`;
