import * as style from './style.css';

import Title from '@/components/ui-elements/Title';

const Logo: React.FC = () => {
    return (
        <div className={style.container}>
            <Title color="white" size="xl" fontFamilyType="logo" letterSpacing="s">
                SB-engineer
            </Title>
        </div>
    );
};

export default Logo;
