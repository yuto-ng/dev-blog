import * as style from './style.css';

type Props = {
    text: string;
};

const Logo: React.FC<Props> = ({ text }) => {
    return <div className={style.container}>{text}</div>;
};

export default Logo;
