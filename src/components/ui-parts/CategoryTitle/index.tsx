'use client';

type Props = {
    titleText: string;
};

function CategoryTitle({ titleText }: Props) {
    return <h1 className="text-4xl font-extrabold tracking-tight text-lightBlack">{titleText}</h1>;
}

export default CategoryTitle;
