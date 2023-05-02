import { createRef } from "react";
import { Button, Form } from "react-bootstrap";

export interface TestProps {
    questions: TestQuestion[];
}

export interface TestQuestion {
    question: string;
    answers: string[];
    correct: number;
}

export default function Test({ questions }: TestProps) {
    var form = createRef<HTMLFormElement>();

    return (
        <>
            <Form ref={form}>
                <Form.Group controlId="test">
                    {
                        questions.map((question) => {
                            return (
                                <>
                                    <Form.Label>{question.question}</Form.Label>
                                    {
                                        question.answers.map((answer) => {
                                            return <Form.Check type="radio" id={question.question + "-" + answer} label={answer} name={question.question}></Form.Check>
                                        })
                                    }
                                </>
                            );
                        })
                    }
                <Button onClick={() => {
                    
                }}>Finish</Button>
                </Form.Group>
            </Form>
        </>
    );
}