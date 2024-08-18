import Logo from '../Logo';

import * as style from './style.css';

const Header: React.FC = () => {
    return (
        <div className={style.container}>
            <Logo />
        </div>
    );
};

export default Header;
