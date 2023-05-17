import { createRef, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";

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
    var button = createRef<HTMLButtonElement>();
    var [score, setScore] = useState<JSX.Element>();

    return (
        <>
            <Form ref={form} key="test-base">
                <Form.Group controlId="test" key="test">
                    {
                        questions.map((i) => {
                            return (
                                <>
                                    <hr/>
                                    <Form.Label key={i.question}>{i.question}</Form.Label>
                                    {
                                        i.answers.map((answer) => {
                                            return <Form.Check type="radio" id={i.question + "-" + answer} key={i.question + "-" + answer} label={answer} name={i.question}></Form.Check>
                                        })
                                    }
                                </>
                            );
                        })
                    }
                    <hr />
                {score}
                <Button ref={button} key="submit" onClick={() => {
                        var correct = 0;
                        questions.forEach(i => {
                            var radio: HTMLInputElement | null = document.getElementById(i.question + "-" + i.answers[i.correct]) as HTMLInputElement;
                            if (radio.checked) correct++;
                            i.answers.forEach(e => {
                                (document.getElementById(i.question + "-" + e) as HTMLInputElement).disabled = true;
                            });
                        });
                        console.log(correct);
                        var scoreCalc = Math.round(correct / questions.length * 100);
                        
                        if (scoreCalc >= 90) {
                            setScore(<Alert variant="success">{"Score: " + scoreCalc.toString() + "%"}</Alert>);
                        } else if (scoreCalc >= 70) {
                            setScore(<Alert variant="warning">{"Score: " + scoreCalc.toString() + "%"}</Alert>);
                        } else {
                            setScore(<Alert variant="danger">{"Score: " + scoreCalc.toString() + "%"}</Alert>);
                        }

                        if (button.current != null) {
                            button.current.disabled = true;
                        }
                }}>Finish</Button>
                </Form.Group>
            </Form>
            <br/>
        </>
    );
}