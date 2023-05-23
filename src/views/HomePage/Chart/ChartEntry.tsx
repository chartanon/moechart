import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { COLOURS, Column, Row, TitleFont } from '../../utils';

import { SeriesRelationshipMap } from './MoegeChart';
import { VisualNovelProps } from './visualNovelData';
import { SequelsPopup } from './SequelsPopup';
import { IMAGE_WIDTH, ThumbnailImage } from './utils';
import { GenreFocus, VisualNovelCard } from './VisualNovelCard';

export interface ChartEntryProps extends VisualNovelProps {
    allSequelRelationships?: SeriesRelationshipMap;
    isSelectedHideSequelFilter?: boolean;
    setIsInPopupView?: (value: boolean) => void;
    shouldDisplayDateInTitle?: boolean;
}

export const ChartEntry: React.FC<ChartEntryProps> = ({
    name,
    vndbLink,
    playtime,
    thumbnailSource,
    attributes,
    genreFocus,
    descriptionFirstRowText,
    descriptionSecondRowText,
    sequels,
    originalGame,
    allSequelRelationships,
    isSelectedHideSequelFilter,
    setIsInPopupView,
    shouldDisplayDateInTitle,
    translationReleaseDate
}) => {
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

    const handleSetShowMoreSequelInfo = () => {
        setShouldShowSequelInfo(true);
        setIsInPopupView?.(true);
    };

    const handleCloseShowMoreSequelInfo = () => {
        setShouldShowSequelInfo(false);
        setIsInPopupView?.(false);
    };

    return (
        <Container>
            {shouldShowSequelInfo ? (
                <SequelsPopup
                    isOpen={shouldShowSequelInfo}
                    onClose={handleCloseShowMoreSequelInfo}
                    originalGame={vndbLink}
                    allSequelRelations={allSequelRelationships ?? {}}
                    shouldDisplayDateInTitle={shouldDisplayDateInTitle}
                />
            ) : null}

            <VisualNovelCard
                name={name}
                vndbLink={vndbLink}
                thumbnailSource={thumbnailSource}
                attributes={attributes}
                genreFocus={genreFocus}
                descriptionFirstRowText={descriptionFirstRowText}
                descriptionSecondRowText={descriptionSecondRowText}
                playtime={playtime}
                sequels={sequels}
                originalGame={originalGame}
                moreInfoOnClick={
                    isVNWithSequels ? handleSetShowMoreSequelInfo : undefined
                }
                shouldDisplayDateInTitle={shouldDisplayDateInTitle}
                translationReleaseDate={translationReleaseDate}
            />
            {isVNWithSequels && isSelectedHideSequelFilter ? (
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
                                />
                            </Row>
                        )
                    )}
                </SequelRow>
            ) : null}
        </Container>
    );
};

const SEQUELS_OFFSET = 5;

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
