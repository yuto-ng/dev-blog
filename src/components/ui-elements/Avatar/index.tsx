'use client';

import React from 'react';

import Image from 'next/image';

type Props = {
    profileImageUrl?: string;
};

function Avatar({ profileImageUrl }: Props) {
    const imageUrl = profileImageUrl ?? '/reactIcons/Avatar.svg';

    return (
        <div>
            <Image src={imageUrl} alt="profile" fill />
        </div>
    );
}

export default Avatar;
