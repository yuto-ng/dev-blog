'use client';

import Image from 'next/image';

type Props = {
    profileImageUrl: string;
};

function Avatar({ profileImageUrl }: Props) {
    return (
        <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full">
            <Image src={profileImageUrl} alt="profile" fill />
        </div>
    );
}

export default Avatar;
