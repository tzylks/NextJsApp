import React, { FC } from 'react';
import Highlight, { defaultProps, type Language } from 'prism-react-renderer';
interface CodeProps {
    code: string;
    show: boolean;
    language: Language;
}

const Code: FC<CodeProps> = (props) => {
    return <div></div>;
};

export default Code;
