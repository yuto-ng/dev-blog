import Image from 'next/image';

import * as style from './style.css';

import { IconSize } from '@/constants';
import { IconName } from '@/type';

type Props = {
    iconName: IconName;
    size: IconSize;
};

const Icon: React.FC<Props> = ({ iconName, size }) => {
    const container = style.container[size];
    const ICON_URL = `/reactIcons/${iconName}.svg`;

    return (
        <div className={container}>
            <Image src={ICON_URL} alt="icon" fill />
        </div>
    );
};

export default Icon;
