import Avatar from '@/components/ui-elements/Avatar';
import Icon from '@/components/ui-elements/Icon';

type Props = {
    description: string;
    profileImageUrl: string;
    twitterUrl: string;
};

function Profile({ description, profileImageUrl, twitterUrl }: Props) {
    return (
        <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
            <div className="flex justify-center">
                <Avatar profileImageUrl={profileImageUrl} />
            </div>
            <div className="mt-4 flex justify-center">
                <a
                    href={twitterUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="X profile"
                >
                    <Icon iconName="xLogo" size="m" color="#000000" />
                </a>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-700">{description}</p>
        </div>
    );
}

export default Profile;
