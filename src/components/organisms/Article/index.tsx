import React from 'react';

import * as style from './style.css';

type Props = {
    text: string;
};

const Article: React.FC<Props> = ({ text }) => {
    return <div className={style.SampleStyle}>{text}</div>;
};

export default Article;
