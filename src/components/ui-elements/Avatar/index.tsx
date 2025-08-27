'use client';

import Image from 'next/image';

type Props = {
    profileImageUrl?: string;
};

function Avatar({ profileImageUrl }: Props) {
    const imageUrl = profileImageUrl ?? '/reactIcons/Avatar.svg';

    return (
        <div className="relative h-[100px] w-[100px] rounded-full overflow-hidden">
            <Image src={imageUrl} alt="profile" fill />
        </div>
    );
}

export default Avatar;
