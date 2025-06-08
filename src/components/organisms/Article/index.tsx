type Props = {
    text: string;
};

function Article({ text }: Props) {
    return <div>{text}</div>;
}

export default Article;
