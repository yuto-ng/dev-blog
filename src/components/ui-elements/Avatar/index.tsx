import Image from 'next/image';

import * as style from './style.css';

type Props = {
    profileImageUrl?: string;
};

const Avatar: React.FC<Props> = ({ profileImageUrl }) => {
    const imageUrl = profileImageUrl || '/reactIcons/Avatar.svg';

    return (
        <div className={style.container}>
            <Image className={style.content} src={imageUrl} alt="profile" fill />
        </div>
    );
};

export default Avatar;
