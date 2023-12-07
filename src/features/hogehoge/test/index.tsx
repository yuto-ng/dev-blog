import { SampleStyle } from './style.css';

type Props = {
    text: string;
};

const Hogehoge: React.FC<Props> = ({ text }) => {
    return <div className={SampleStyle}>{text}</div>;
};

export default Hogehoge;
