import React, { useState } from 'react';
import { COLOURS, LabelFont, Section } from '../utils';
import { FAQItem } from './FAQItem';
import styled from 'styled-components';
export const FAQ: React.FC = () => {
    const [shouldShowMoegeDescription, setShouldShowMoegeDescription] =
        useState(false);
    const [shouldShowAboutDescription, setShouldShowAboutDescription] =
        useState<boolean>(false);
    const [shouldShowOtherDescription, setShouldShowOtherDescription] =
        useState<boolean>(false);

    return (
        <Section>
            <FAQItem
                question="THE FUCK IS A MOEGE?"
                answer={
                    <>
                        A "moege" is a type of visual novel that is generally
                        lacking in serious drama and has nothing major at stake.
                        Instead, moege tend to focus on romance and cute girls.
                        At the extreme end, they may have no appreciable
                        conflict or plot whatsoever.
                    </>
                }
                shouldShowAnswer={shouldShowMoegeDescription}
                showAnswerOnClick={setShouldShowMoegeDescription}
            />
            <FAQItem
                question="ABOUT THE MOECHART"
                answer={
                    <>
                        This is <strong>not</strong> a recommendation chart, and
                        no game will be rated here. The main purpose of the
                        chart is to provide a complete list of moege (currently
                        translated and future releases) sorted by 3
                        content-related focuses. Additionally, some{' '}
                        <MoenukigeFont $outlineColour={COLOURS.GENRE.NUKIGE}>
                            Moenukige
                        </MoenukigeFont>{' '}
                        (ero centric titles with significant moege elements)
                        will also be listed on this chart.
                    </>
                }
                shouldShowAnswer={shouldShowAboutDescription}
                showAnswerOnClick={setShouldShowAboutDescription}
            />
            <FAQItem
                question="OTHER"
                answer={
                    <>
                        Shilling the quicklink script I updated (with the help
                        of a /hgg2d/ anon) forever ago.{' '}
                        <a href="https://github.com/Pinkfag/hgg2d.github.io">
                            Check it out
                        </a>{' '}
                        if you want to be able to preview images from vndb links
                        on 4chan
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }}
                        >
                            t. pinkfag
                        </div>
                    </>
                }
                shouldShowAnswer={shouldShowOtherDescription}
                showAnswerOnClick={setShouldShowOtherDescription}
            />
        </Section>
    );
};

const MoenukigeFont = styled(LabelFont)`
    display: inline;
`;
