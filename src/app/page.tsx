import { style } from '@vanilla-extract/css';

export default function Home() {
    const sample = style({
        backgroundColor: 'red',
    });

    return <div className={sample}>Hello</div>;
}
