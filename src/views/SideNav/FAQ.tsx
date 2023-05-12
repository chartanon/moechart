import React, { useState } from 'react';
import {
    Button,
    LabelFont,
    Section,
    SubTitleFont,
    TitleFont,
    VerticalFade
} from '../utils';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
export const FAQ: React.FC = () => {
    const [shouldShowMoegeDescription, setShouldShowMoegeDescription] =
        useState(false);
    const [shouldShowAboutDescription, setShouldShowAboutDescription] =
        useState<boolean>(false);

    return (
        <Section>
            <Section>
                <Button
                    onClick={() =>
                        setShouldShowMoegeDescription(
                            !shouldShowMoegeDescription
                        )
                    }
                >
                    <SubTitleFont>THE FUCK IS A MOEGE?</SubTitleFont>
                </Button>
                <AnimatePresence>
                    {shouldShowMoegeDescription ? (
                        <VerticalFade>
                            <Button
                                onClick={() =>
                                    setShouldShowMoegeDescription(
                                        !shouldShowMoegeDescription
                                    )
                                }
                            >
                                <LabelFont $textAlign="justify">
                                    A "moege" is a type of visual novel that is
                                    generally lacking in serious drama and has
                                    nothing major at stake. Instead, moege tend
                                    to focus on romance and cute girls. At the
                                    extreme end, they may have no appreciable
                                    conflict or plot whatsoever.
                                </LabelFont>
                            </Button>
                        </VerticalFade>
                    ) : null}
                </AnimatePresence>
            </Section>
            <Section>
                <Button
                    onClick={() =>
                        setShouldShowAboutDescription(
                            !shouldShowAboutDescription
                        )
                    }
                >
                    <SubTitleFont>ABOUT THE MOECHART</SubTitleFont>
                </Button>
                <AnimatePresence>
                    {shouldShowAboutDescription ? (
                        <VerticalFade>
                            <Button
                                onClick={() =>
                                    setShouldShowAboutDescription(
                                        !shouldShowAboutDescription
                                    )
                                }
                            >
                                <LabelFont $textAlign="justify">
                                    This is <strong>not</strong> a
                                    recommendation chart, and no game will be
                                    rated here. The main purpose of the chart is
                                    to provide a complete list of moege
                                    (currently translated and future releases)
                                    sorted by 3 content-related focuses.
                                    Additionally, some Moenukige (ero centric
                                    titles with significant moege elements) will
                                    also be listed on this chart.
                                </LabelFont>
                            </Button>
                        </VerticalFade>
                    ) : null}
                </AnimatePresence>
            </Section>
        </Section>
    );
};

const FAQFont = styled(TitleFont)`
    display: flex;
    justify-content: center;
    width: 100%;
`;
