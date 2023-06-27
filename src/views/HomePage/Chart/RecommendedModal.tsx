import styled from 'styled-components';
import {
    COLOURS,
    Column,
    LabelFont,
    Row,
    TitleFont,
    VerticalFade
} from '../../utils';
import { Modal } from './Modal';
import { ChartEntryProps } from './ChartEntry';
import { ThumbnailImage } from './utils';
import { AnimatePresence } from 'framer-motion';

interface IProps extends ChartEntryProps {
    isOpen?: boolean;
    onClose?: () => void;
    outlineColour?: string;
}

export const RecommendedModal: React.FC<IProps> = ({
    isOpen,
    onClose,
    name,
    thumbnailSource,
    sequels,
    outlineColour,
    recommendedDescription
}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <AnimatePresence>
                <VerticalFade $maxHeight>
                    <ContentContainer $centered $maxWidth $maxHeight>
                        <Column>
                            <ImageFont>{name}</ImageFont>
                            <Row>
                                <ImageContainer>
                                    <RecommendedImage
                                        src={thumbnailSource}
                                        loading="lazy"
                                        alt=""
                                        $outlineColour={outlineColour}
                                        $cardStackCount={sequels?.length}
                                    />
                                </ImageContainer>
                                <DescriptionContainer>
                                    <DescriptionFont>
                                        {recommendedDescription}
                                    </DescriptionFont>
                                </DescriptionContainer>
                            </Row>
                        </Column>
                    </ContentContainer>
                </VerticalFade>
            </AnimatePresence>
        </Modal>
    );
};

const ContentContainer = styled(Column)`
    border: 1px solid ${COLOURS.TEXT};
`;

const RecommendedImage = styled(ThumbnailImage)`
    height: 300px;
    width: 220px;
    pointer-events: none;
`;

const ImageContainer = styled(Column)`
    margin-left: 50px;
    margin-right: auto;
`;

const ImageFont = styled(TitleFont)`
    display: flex;
    width: 100%;
    justify-content: center;
    font-size: 2.5rem;
    margin-bottom: 40px;
`;

const DescriptionContainer = styled(Column)`
    margin: 0 30px 0;
`;

const DescriptionFont = styled(LabelFont)`
    font-size: 1.5rem;
    text-align: justify;
`;
