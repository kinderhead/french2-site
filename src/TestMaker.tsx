import { useState } from "react";
import { TestQuestion } from "./Test";
import { Form } from "react-bootstrap";

export default function TestMaker() {
    const [data, setData] = useState<TestQuestion[]>([{ question: "Test", answers: ["1"], correct: 0 }]);

    return (
        <>
            <Form>
                <Form.Group controlId="test-maker">
                    {
                        data.map((i, idex) => {
                            return (
                                <>
                                    <Form.Label key={i.question}>{i.question}</Form.Label>
                                    {
                                        i.answers.map(e => {
                                            return (
                                                <>
                                                    <Form.Check type="radio" key={i.question + "-" + e} label="" name={i.question}></Form.Check>
                                                    <Form.Control type="input"></Form.Control>
                                                </>
                                            );
                                        })
                                    }
                                </>
                            );
                        })
                    }
                </Form.Group>
            </Form>
        </>
    );
}
