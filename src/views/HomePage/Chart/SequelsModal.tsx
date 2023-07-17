import styled from 'styled-components';
import {
    Column,
    HeaderFont,
    Row,
    StaggeredEntranceFadeSlow,
    VerticalFade
} from '../../utils';
import { Modal } from './Modal';
import { VisualNovelCard, VisualNovelCardProps } from './VisualNovelCard';
import { AnimatePresence } from 'framer-motion';

interface IProps {
    isOpen?: boolean;
    onClose?: () => void;
    sequelRelations: VisualNovelCardProps[];
    shouldDisplayDateInTitle?: boolean;
}

export const SequelsModal: React.FC<IProps> = ({
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
        <Modal isOpen={isOpen} onClose={onClose}>
            <Column>
                <AnimatePresence>
                    <VerticalFade>
                        <StyledHeaderFont>
                            Translated Fandiscs and Sequels
                        </StyledHeaderFont>
                    </VerticalFade>
                </AnimatePresence>
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
        </Modal>
    );
};

const EntriesContainer = styled(Row)`
    flex-wrap: wrap;
    gap: 0px 80px;
`;

const StyledHeaderFont = styled(HeaderFont)`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 50px;
    font-size: clamp(2rem, 3.3vw, 3rem);
`;
