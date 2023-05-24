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
            <Column $centered>
                <EntriesContainer $maxHeight $centered>
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
