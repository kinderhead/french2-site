import { useState } from "react";
import { Placeholder } from "react-bootstrap";
import ReactMarkdown from 'react-markdown'

export interface RemoteMarkdownProps {
    src: string;
}

export default function RemoteMarkdown({ src } : RemoteMarkdownProps) {
    const [data, setData] = useState<string>();

    fetch(src).then((response) => response.text()).then((textContent) => setData(textContent));

    if (data == undefined) {
        return (
            <>
                <Placeholder xs={15} /> <br/>
                <Placeholder xs={32} /> <br/>
                <Placeholder xs={14} /> <br/>
                <Placeholder xs={5} />
            </>
        );
    } else {
        return (
            <>
                <ReactMarkdown>{data}</ReactMarkdown>
            </>
        );
    }
}