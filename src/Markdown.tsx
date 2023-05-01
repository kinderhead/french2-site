import { useState } from "react";
import { Placeholder } from "react-bootstrap";
import ReactMarkdown from 'react-markdown'

export interface RemoteMarkdownProps {
    src: string;
}

export default function RemoteMarkdown({ src } : RemoteMarkdownProps) {
    const [data, setData] = useState<string>();

    if (data == undefined) {
        fetch(src).then((response) => response.text()).then((textContent) => setData(textContent));
        return (
            <>
                <Placeholder xs={15} />
                <Placeholder xs={32} />
                <Placeholder xs={14} />
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