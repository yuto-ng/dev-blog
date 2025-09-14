import Image from 'next/image';

import DateLabel from '@/components/ui-parts/DateLabel';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

type BaseProps = {
    title: string;
    postDate: Date;
    onClick: () => void;
};

type WithImageUrlProps = BaseProps & {
    imageUrl: string;
    emoji?: never;
};

type WithEmojiProps = BaseProps & {
    emoji: string;
    imageUrl?: never;
};

function Article({
    title,
    postDate,
    imageUrl,
    emoji,
    onClick,
}: WithImageUrlProps | WithEmojiProps) {
    return (
        <Card
            className="cursor-pointer hover:shadow-lg transition-shadow duration-200 overflow-hidden"
            onClick={onClick}
        >
            <div className="h-48 bg-teal-400 flex items-center justify-center relative">
                {imageUrl ? (
                    <Image src={imageUrl} alt={title} fill className="object-cover" />
                ) : (
                    <span className="text-6xl">{emoji}</span>
                )}
            </div>
            <CardContent className="p-4 space-y-3">
                <CardTitle className="text-gray-800 text-sm leading-relaxed font-normal">
                    {title}
                </CardTitle>
                <DateLabel postDate={postDate} />
            </CardContent>
        </Card>
    );
}

export default Article;
