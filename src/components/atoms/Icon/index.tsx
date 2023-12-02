import Image from 'next/image';

import * as style from './style.css';

import { IconName, IconSize } from '@/util/type/Icon';

type Props = {
    iconName: IconName;
    size: IconSize;
};

const Icon: React.FC<Props> = ({ iconName, size }) => {
    const iconStyle = style.iconStyles[size];
    const ICON_URL = `/reactIcons/${iconName}.svg`;

    return (
        <div className={iconStyle}>
            <Image src={ICON_URL} alt="icon" fill />
        </div>
    );
};

export default Icon;
