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
                    <Row $centered $maxWidth>
                        <ContentContainer>
                            <ImageFont $outlineColour={outlineColour} >{name}</ImageFont>
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
                        </ContentContainer>
                    </Row>
                </VerticalFade>
            </AnimatePresence>
        </Modal>
    );
};

const ContentContainer = styled(Column)`
    border: 1px solid ${COLOURS.TEXT};
    padding: 50px;
    max-width: 1200px;
    margin: 5px;
`;

const RecommendedImage = styled(ThumbnailImage)`
    height: 23vw;
    width: 17vw;
    max-height: 410px;
    max-width: 300px;
    pointer-events: none;
`;

const ImageContainer = styled(Column)`
    margin-right: 30px;
`;

const ImageFont = styled(TitleFont)`
    display: flex;
    width: 100%;
    justify-content: center;
    font-size: clamp(2rem, 3.3vw, 4.5rem);
    margin-bottom: 30px;
`;

const DescriptionContainer = styled(Column)``;

const DescriptionFont = styled(LabelFont)`
    font-size: clamp(1rem, 2vw, 2rem);
    text-align: justify;
`;
