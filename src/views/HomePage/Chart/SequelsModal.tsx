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
            <ContentContainer>
                <AnimatePresence>
                    <VerticalFade>
                        <StyledHeaderFont>
                            Translated Fandiscs and Sequels
                        </StyledHeaderFont>
                    </VerticalFade>
                </AnimatePresence>
                <EntriesContainer $centered>
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
            </ContentContainer>
        </Modal>
    );
};

const ContentContainer = styled(Column)`
    overflow: auto;
    width: 100%;
`;

const EntriesContainer = styled(Row)`
    flex-wrap: wrap;
    gap: 40px 80px;
    width: 80%;
    align-self: center;
`;

const StyledHeaderFont = styled(HeaderFont)`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 5%;
    font-size: clamp(2rem, 3.3vw, 3rem);
`;
