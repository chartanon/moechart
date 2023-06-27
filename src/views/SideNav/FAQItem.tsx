import { AnimatePresence } from 'framer-motion';
import {
    Section,
    Button,
    VerticalFade,
    LabelFont,
    TitleFont,
    COLOURS
} from '../utils';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface IProps {
    question: string;
    answer: ReactNode;
    shouldShowAnswer: boolean;
    showAnswerOnClick: (value: boolean) => void;
}

export const FAQItem: React.FC<IProps> = ({
    question,
    answer,
    shouldShowAnswer,
    showAnswerOnClick
}) => {
    return (
        <Section>
            <Button onClick={() => showAnswerOnClick(!shouldShowAnswer)}>
                <FAQFont>{question}</FAQFont>
            </Button>
            <AnimatePresence>
                {shouldShowAnswer ? (
                    <VerticalFade>
                        <Button
                            onClick={() => showAnswerOnClick(!shouldShowAnswer)}
                        >
                            <LabelFont $textAlign="justify">{answer}</LabelFont>
                        </Button>
                    </VerticalFade>
                ) : null}
            </AnimatePresence>
        </Section>
    );
};

const FAQFont = styled(TitleFont)`
    font-size: 1.15rem;
    border-bottom: 2px solid ${COLOURS.NAVBAR};
    padding: 5px;
`;
