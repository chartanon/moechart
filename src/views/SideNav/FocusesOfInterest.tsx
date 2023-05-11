import React, { useState } from 'react';
import { Section, TitleFont, LabelFont, VerticalFade, Button } from '../utils';
import styled from 'styled-components';
import { HelpIcon } from '../assets/icons/HelpIcon';
import { Row } from '../utils';
import { AnimatePresence } from 'framer-motion';

export const FocusesOfInterest: React.FC = () => {
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
                <GradientTopLabel>Storyline</GradientTopLabel>
                <GradientTopLabel>Romance</GradientTopLabel>
                <GradientTopLabel>Comedy</GradientTopLabel>
            </GradientText>
            <GradientBar />
            <GradientText>
                <GradientBottomLabel>Sto-Rom</GradientBottomLabel>
                <GradientBottomLabel>Rom-Com</GradientBottomLabel>
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

const GradientTopLabel = styled(LabelFont)`
    width: 33%;
`;

const GradientBottomLabel = styled(LabelFont)`
    width: 50%;
`;

const DisclaimerContainer = styled(Row)`
    gap: 12px;
`;
