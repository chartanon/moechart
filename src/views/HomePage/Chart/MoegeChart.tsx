import React from 'react';
import styled from 'styled-components';
import { COLOURS, Column, HeaderFont, LabelFont, Row } from '../../utils';
import { visualNovelData } from './visualNovelData';
import { VisualNovelEntry, VisualNovelProps } from './VisualNovelEntry';

//https://svg2jsx.com

export const MoegeChart: React.FC = () => {
    const releasedVisualNovels: VisualNovelProps[] = [];
    const unreleasedVisualNovels = visualNovelData.filter(visualNovel => {
        if (!visualNovel.isUpcomingRelease) {
            releasedVisualNovels.push(visualNovel);
        }
        return visualNovel.isUpcomingRelease;
    });

    return (
        <Container>
            <SectionHeader>
                <VNFont>/vn/</VNFont> MOECHART
            </SectionHeader>
            <UpdatedInfoFont>(Last Updated: Now lol)</UpdatedInfoFont>
            <EntriesContainer>
                {releasedVisualNovels.map(visualNovel => {
                    return (
                        <Entry
                            {...visualNovel}
                            key={visualNovel.thumbnailSource}
                        />
                    );
                })}
            </EntriesContainer>

            {unreleasedVisualNovels.length > 0 ? (
                <>
                    <SectionHeader>UPCOMING</SectionHeader>
                    <EntriesContainer>
                        {unreleasedVisualNovels.map(visualNovel => {
                            return (
                                <Entry
                                    {...visualNovel}
                                    key={visualNovel.thumbnailSource}
                                />
                            );
                        })}
                    </EntriesContainer>
                </>
            ) : null}
        </Container>
    );
};

const Container = styled(Column)`
    display: flex;
    gap: 20px;
`;

const UpdatedInfoFont = styled(LabelFont)`
    display: flex;
    justify-content: flex-end;
`;

const Entry = styled(VisualNovelEntry)`
    padding: 20px;
`;

const EntriesContainer = styled(Row)`
    gap: 80px;
    flex-wrap: wrap;
`;

const SectionHeader = styled(HeaderFont)`
    display: flex;
    padding-top: 20px;
    border-bottom: 2px solid ${COLOURS.TEXT};
    width: 100%;
`;

const VNFont = styled.div`
    padding-right: 10px;
    opacity: 0.4;
`;
