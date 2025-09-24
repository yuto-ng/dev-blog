import Image from 'next/image';
import Link from 'next/link';

import DateLabel from '@/components/ui-parts/DateLabel';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

type BaseProps = {
    title: string;
    postDate: Date;
    href: string;
};

type WithImageUrlProps = BaseProps & {
    imageUrl: string;
    emoji?: never;
};

type WithEmojiProps = BaseProps & {
    emoji: string;
    imageUrl?: never;
};

function Article({ title, postDate, href, imageUrl, emoji }: WithImageUrlProps | WithEmojiProps) {
    return (
        <Link href={href} className="block group">
            <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200 group-hover:shadow-lg">
                <div className="h-48 bg-teal-400 flex items-center justify-center relative">
                    {imageUrl ? (
                        <Image src={imageUrl} alt={title} fill className="object-cover" />
                    ) : (
                        <span className="text-6xl" aria-hidden>
                            {emoji}
                        </span>
                    )}
                </div>
                <CardContent className="p-4">
                    <p className="text-gray-800 text-sm leading-relaxed line-clamp-3">{title}</p>
                </CardContent>
                <CardFooter className="px-4 pb-4 pt-0 flex items-center">
                    <DateLabel postDate={postDate} />
                </CardFooter>
            </Card>
        </Link>
    );
}

export default Article;
