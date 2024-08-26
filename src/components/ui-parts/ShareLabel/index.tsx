import React from 'react';

import * as style from './style.css';

import Text from '@/components/ui-elements/Text';

const ShareLabel: React.FC = () => {
    return (
        <div className={style.container}>
            <Text color="royalBlue" weight="bold">
                SHARE
            </Text>
        </div>
    );
};

export default ShareLabel;
