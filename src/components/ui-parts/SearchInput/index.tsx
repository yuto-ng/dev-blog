import React from 'react';

import * as style from './style.css';

import Icon from '@/components/ui-elements/Icon';

type Props = {
    handleClickSearchButton: () => void;
};

const SearchInput: React.FC<Props> = ({ handleClickSearchButton }) => {
    return (
        <div className={style.container}>
            <input className={style.input} placeholder="検索" />
            {/* TODO: IconButtonコンポーネント作成してもいいかも */}
            <button className={style.iconButton} onClick={handleClickSearchButton}>
                <Icon iconName="OutlineSearch" size="m"></Icon>
            </button>
        </div>
    );
};

export default SearchInput;
