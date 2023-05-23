import styled from 'styled-components';
import { Column, HeaderFont, Row } from '../../utils';
import { Popup } from './Popup';
import { SeriesRelationshipMap } from './MoegeChart';
import { VisualNovelCard } from './VisualNovelCard';

interface IProps {
    isOpen?: boolean;
    onClose?: () => void;
    originalGame: string;
    allSequelRelations: SeriesRelationshipMap;
}

export const SequelsPopup: React.FC<IProps> = ({
    isOpen,
    onClose,
    originalGame,
    allSequelRelations
}) => {
    return (
        <Popup isOpen={isOpen} onClose={onClose}>
            <Column $centered>
                <EntriesContainer $maxHeight $centered>
                    {allSequelRelations[originalGame].map(relationship => {
                        return (
                            <VisualNovelCard
                                name={relationship.name}
                                vndbLink={relationship.vndbLink}
                                thumbnailSource={relationship.thumbnailSource}
                                attributes={relationship.attributes}
                                genreFocus={relationship.genreFocus}
                                descriptionFirstRowText={
                                    relationship.descriptionFirstRowText
                                }
                                descriptionSecondRowText={
                                    relationship.descriptionSecondRowText
                                }
                                playtime={relationship.playtime}
                            />
                        );
                    })}
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
