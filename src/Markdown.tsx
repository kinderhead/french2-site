import { useState } from "react";
import { Placeholder } from "react-bootstrap";
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";
import './markdown.css'

export interface RemoteMarkdownProps {
    src: string;
    className?: string;
}

export default function RemoteMarkdown({ src, className } : RemoteMarkdownProps) {
    const [data, setData] = useState<string>();

    fetch(src).then((response) => response.text()).then((textContent) => setData(textContent));

    if (data == undefined) {
        return (
            <>
                <Placeholder xs={4} /> <br/>
                <Placeholder xs={3} /> <br/>
                <Placeholder xs={7} /> <br/>
                <Placeholder xs={5} />
            </>
        );
    } else {
        return (
            <>
                <ReactMarkdown className={"markdown " + className} remarkPlugins={[remarkGfm]}>{data}</ReactMarkdown>
            </>
        );
    }
}