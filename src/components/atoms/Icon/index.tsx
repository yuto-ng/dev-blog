import Image from 'next/image';

import { iconStyles, IconSize } from './style.css';

import { IconName } from '@/util/type/Icon';

type Props = {
    iconType: IconName;
    size: IconSize;
};

const Icon: React.FC<Props> = ({ iconType, size }) => {
    const iconStyle = iconStyles[size];
    const ICON_URL = `/reactIcons/${iconType}.svg`;

    return (
        <div className={iconStyle}>
            <Image src={ICON_URL} alt="icon" fill />
        </div>
    );
};

export default Icon;
