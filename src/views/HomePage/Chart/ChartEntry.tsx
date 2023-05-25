import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { COLOURS, Column, Row, TitleFont } from '../../utils';

import { SeriesRelationshipMap } from './MoegeChart';
import { VisualNovelProps } from './visualNovelData';
import { SequelsPopup } from './SequelsPopup';
import { IMAGE_WIDTH, SEQUELS_OFFSET, ThumbnailImage } from './utils';
import { GenreFocus } from './utils';
import { VisualNovelCard } from './VisualNovelCard';
import { RecommendedPopup } from './RecommendedPopup';

export interface ChartEntryProps extends VisualNovelProps {
    allSequelRelationships?: SeriesRelationshipMap;
    isSelectedShowSequelFilter?: boolean;
    setIsInPopupView?: (value: boolean) => void;
    shouldDisplayDateInTitle?: boolean;
}

export const ChartEntry: React.FC<ChartEntryProps> = props => {
    const {
        vndbLink,
        genreFocus,
        sequels,
        allSequelRelationships,
        isSelectedShowSequelFilter,
        setIsInPopupView,
        shouldDisplayDateInTitle,
        isRecommended
    } = props;

    let outlineColour = COLOURS.GENRE.NUKIGE;
    switch (genreFocus) {
        case GenreFocus.COMEDY:
            outlineColour = COLOURS.GENRE.COMEDY;
            break;
        case GenreFocus.ROMANCE:
            outlineColour = COLOURS.GENRE.ROMANCE;
            break;
        case GenreFocus.ROM_COM:
            outlineColour = COLOURS.GENRE.ROM_COM;
            break;
        case GenreFocus.STORYLINE:
            outlineColour = COLOURS.GENRE.STORYLINE;
            break;
        case GenreFocus.STORY_ROMANCE:
            outlineColour = COLOURS.GENRE.STORY_ROMANCE;
            break;
        default:
            break;
    }

    const isVNWithSequels =
        sequels &&
        sequels.length > 0 &&
        allSequelRelationships &&
        allSequelRelationships[vndbLink];

    const [shouldShowSequelInfo, setShouldShowSequelInfo] =
        useState<boolean>(false);

    const [shouldShowRecommendedInfo, setShouldShowRecommendedInfo] =
        useState<boolean>(false);

    const handleShowMoreSequelInfo = () => {
        setShouldShowSequelInfo(true);
        setIsInPopupView?.(true);
    };

    const handleCloseMoreSequelInfo = () => {
        setShouldShowSequelInfo(false);
        setIsInPopupView?.(false);
    };

    const handleShowRecommendedInfo = () => {
        setShouldShowRecommendedInfo(true);
        setIsInPopupView?.(true);
    };

    const handleCloseRecommendedInfo = () => {
        setShouldShowRecommendedInfo(false);
        setIsInPopupView?.(false);
    };

    return (
        <Container>
            {shouldShowSequelInfo ? (
                <SequelsPopup
                    isOpen={shouldShowSequelInfo}
                    onClose={handleCloseMoreSequelInfo}
                    sequelRelations={allSequelRelationships?.[vndbLink] ?? []}
                    shouldDisplayDateInTitle={shouldDisplayDateInTitle}
                />
            ) : null}
            {shouldShowRecommendedInfo ? (
                <RecommendedPopup
                    isOpen={shouldShowRecommendedInfo}
                    onClose={handleCloseRecommendedInfo}
                    outlineColour={outlineColour}
                    {...props}
                />
            ) : null}
            <VisualNovelCard
                {...props}
                sequelInfoOnClick={
                    isVNWithSequels ? handleShowMoreSequelInfo : undefined
                }
                descriptionInfoOnClick={
                    isRecommended ? handleShowRecommendedInfo : undefined
                }
            />
            {isVNWithSequels && !isSelectedShowSequelFilter ? (
                <SequelRow>
                    {allSequelRelationships[vndbLink].map(
                        (relationship, index) => (
                            <Row key={relationship.vndbLink}>
                                <TitleFont>{(index + 1) * -1}</TitleFont>
                                <SequelImage
                                    src={relationship.thumbnailSource}
                                    loading="lazy"
                                    alt=""
                                    $outlineColour={outlineColour}
                                    $index={index}
                                    $cardStackCount={sequels?.length}
                                    $shouldScaleSize={!!sequels?.length}
                                />
                            </Row>
                        )
                    )}
                </SequelRow>
            ) : null}
        </Container>
    );
};

const Container = styled(Column)`
    max-width: ${IMAGE_WIDTH}px;
`;

const SequelImage = styled(ThumbnailImage)<{ $index: number }>`
    position: absolute;
    box-shadow: unset;
    ${({ $index }) =>
        $index
            ? css`
                  left: ${$index * SEQUELS_OFFSET}px;
                  top: ${$index * SEQUELS_OFFSET}px;
                  z-index: ${($index + 1) * -1};
              `
            : ''}
`;

const SequelRow = styled(Row)`
    width: 0;
    height: 0;
    position: relative;
    left: ${SEQUELS_OFFSET}px;
    bottom: ${290 - SEQUELS_OFFSET}px;
    z-index: -1;
`;
