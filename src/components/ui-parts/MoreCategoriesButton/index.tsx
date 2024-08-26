import React from 'react';

import * as style from './style.css';

import Text from '@/components/ui-elements/Text';

type Props = {
    label: string;
};

const MoreCategoriesButton: React.FC<Props> = ({ label }) => {
    return (
        <button className={style.container} type="button">
            <Text color="white" size="m">
                {label}
            </Text>
        </button>
    );
};

export default MoreCategoriesButton;
