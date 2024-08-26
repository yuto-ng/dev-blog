import React from 'react';

import * as style from './style.css';

import Title from '@/components/ui-elements/Title';

type Props = {
    titleText: string;
};

const CategoryTitle: React.FC<Props> = ({ titleText }) => {
    return (
        <div className={style.container}>
            <Title size="l" color="white">
                {titleText}
            </Title>
        </div>
    );
};

export default CategoryTitle;
