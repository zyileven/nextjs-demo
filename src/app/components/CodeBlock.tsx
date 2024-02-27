import React, { FC, useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

export const CodeBlock: FC<{
    language: string;
    code: string;
    className?: string;
}> = ({ language, code, className }) => {
    const codeBlockRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (codeBlockRef.current != null) {
            hljs.highlightBlock(codeBlockRef.current);
        }
    }, [codeBlockRef]);
    return (
        <pre className={className}>
            <code ref={codeBlockRef} className={`language-${language} w-[100%]`}>
                {code}
            </code>
        </pre>
    );
};