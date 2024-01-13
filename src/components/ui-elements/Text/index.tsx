import { ReactNode } from 'react';

import { SampleStyle } from './style.css';

type Props = {
    children: ReactNode;
};

const Text: React.FC<Props> = ({ children }) => {
    return <div className={SampleStyle}>{children}</div>;
};

export default Text;
