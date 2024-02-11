import Image from 'next/image';

import * as style from './style.css';

type Props = {
    profileImage?: string;
};

const Avatar: React.FC<Props> = ({ profileImage }) => {
    const imageUrl = profileImage || '/reactIcons/Avatar.svg';

    return (
        <div className={style.container}>
            <Image className={style.content} src={imageUrl} alt="profile" fill />
        </div>
    );
};

export default Avatar;
