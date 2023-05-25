import styled from 'styled-components';
import { COLOURS, Column, LabelFont, Row, TitleFont } from '../../utils';
import { Popup } from './Popup';
import { ChartEntryProps } from './ChartEntry';
import { ThumbnailImage } from './utils';

interface IProps extends ChartEntryProps {
    isOpen?: boolean;
    onClose?: () => void;
    outlineColour?: string;
}

export const RecommendedPopup: React.FC<IProps> = ({
    isOpen,
    onClose,
    name,
    thumbnailSource,
    sequels,
    outlineColour,
    recommendedDescription
}) => {
    return (
        <Popup isOpen={isOpen} onClose={onClose}>
            <ContentContainer $centered $maxWidth $maxHeight>
                <Row>
                    <ImageContainer>
                        <ImageFont>{name}</ImageFont>
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
        </Popup>
    );
};

const ContentContainer = styled(Column)`
    border: 1px solid ${COLOURS.TEXT};
`;

const RecommendedImage = styled(ThumbnailImage)`
    height: 550px;
    width: 380px;
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
    font-family: monospace;
    margin-bottom: 20px;
`;

const DescriptionContainer = styled.div`
    margin: 200px 30px 0;
`;

const DescriptionFont = styled(LabelFont)`
    font-family: sans-serif;
    font-size: 3.2rem;
    text-align: justify;
`;
