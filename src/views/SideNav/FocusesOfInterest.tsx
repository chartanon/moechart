import React, { useState } from 'react';
import {
    Section,
    TitleFont,
    LabelFont,
    VerticalFade,
    Button,
    COLOURS
} from '../utils';
import styled from 'styled-components';
import { HelpIcon } from '../assets/icons/HelpIcon';
import { Row } from '../utils';
import { AnimatePresence } from 'framer-motion';
import { GenreFocus } from '../HomePage/Chart/VisualNovelEntry';

interface IProps {
    selectedGenreFocusFilter: GenreFocus | null;
    onClick: (value: GenreFocus) => void;
}

export const FocusesOfInterest: React.FC<IProps> = ({
    selectedGenreFocusFilter,
    onClick
}) => {
    const [shouldShowFocusDisclaimer, setShouldShowFocusDisclaimer] =
        useState<boolean>(false);

    return (
        <Section>
            <Row>
                <TitleFont>FOCUS OF INTEREST</TitleFont>
                <Button
                    onClick={() =>
                        setShouldShowFocusDisclaimer(!shouldShowFocusDisclaimer)
                    }
                >
                    <HelpIcon />
                </Button>
            </Row>

            <GradientText>
                <GradientTopButton
                    onClick={() => onClick(GenreFocus.STORYLINE)}
                >
                    <LabelFont
                        $outlineColour={
                            selectedGenreFocusFilter === GenreFocus.STORYLINE
                                ? COLOURS.GENRE.STORYLINE
                                : undefined
                        }
                    >
                        Storyline
                    </LabelFont>
                </GradientTopButton>
                <GradientTopButton onClick={() => onClick(GenreFocus.ROMANCE)}>
                    <LabelFont
                        $outlineColour={
                            selectedGenreFocusFilter === GenreFocus.ROMANCE
                                ? COLOURS.GENRE.ROMANCE
                                : undefined
                        }
                    >
                        Romance
                    </LabelFont>
                </GradientTopButton>
                <GradientTopButton onClick={() => onClick(GenreFocus.COMEDY)}>
                    <LabelFont
                        $outlineColour={
                            selectedGenreFocusFilter === GenreFocus.COMEDY
                                ? COLOURS.GENRE.COMEDY
                                : undefined
                        }
                    >
                        Comedy
                    </LabelFont>
                </GradientTopButton>
            </GradientText>
            <GradientBar />
            <GradientText>
                <GradientBottomButton
                    onClick={() => onClick(GenreFocus.STORY_ROMANCE)}
                >
                    <LabelFont
                        $outlineColour={
                            selectedGenreFocusFilter ===
                            GenreFocus.STORY_ROMANCE
                                ? COLOURS.GENRE.STORY_ROMANCE
                                : undefined
                        }
                    >
                        Sto-Rom
                    </LabelFont>
                </GradientBottomButton>
                <GradientBottomButton
                    onClick={() => onClick(GenreFocus.ROM_COM)}
                >
                    <LabelFont
                        $outlineColour={
                            selectedGenreFocusFilter === GenreFocus.ROM_COM
                                ? COLOURS.GENRE.ROM_COM
                                : undefined
                        }
                    >
                        Rom-Com
                    </LabelFont>
                </GradientBottomButton>
            </GradientText>
            <DisclaimerContainer>
                <AnimatePresence>
                    {shouldShowFocusDisclaimer ? (
                        <VerticalFade>
                            <LabelFont $textAlign="justify">
                                Romance and comedy are present (to varying
                                degrees) in all the titles listed here.
                                Generally, moege have simple storylines, but
                                there are still some titles that are more
                                engaging or memorable than others in this
                                aspect.
                            </LabelFont>
                        </VerticalFade>
                    ) : null}
                </AnimatePresence>
            </DisclaimerContainer>
        </Section>
    );
};

const GradientText = styled.div`
    display: flex;
    font-size: 0.9rem;
    text-align: center;
`;

const GradientBar = styled.div`
    height: 1rem;
    margin: 0.4rem 0;
    border-radius: 0.2rem;
    background: linear-gradient(
        90deg,
        #2e62dd 0%,
        #9b3add 25%,
        #dd4b4b 50%,
        #dd7b4b 75%,
        #e1cd5d 100%
    );
    position: relative;
    transform-style: preserve-3d;
`;

const GradientTopButton = styled(Button)`
    width: 33%;
    border: none;
    background: none;
    cursor: pointer;
`;

const GradientBottomButton = styled(Button)`
    width: 50%;
    border: none;
    background: none;
    cursor: pointer;
`;

const DisclaimerContainer = styled(Row)`
    gap: 12px;
`;
