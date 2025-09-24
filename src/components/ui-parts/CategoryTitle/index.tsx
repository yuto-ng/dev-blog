'use client';

type Props = {
    titleText: string;
};

function CategoryTitle({ titleText }: Props) {
    return (
        <div className="w-full rounded-lg bg-royalBlue py-3 px-5">
            <h2 className="text-center text-white text-xl md:text-2xl font-semibold tracking-tight">
                {titleText}
            </h2>
        </div>
    );
}

export default CategoryTitle;
