import { Button, css } from '@kuma-ui/core';

export default function Home() {
    const style = {
        container: css`
            background-color: red;
        `,
    };

    return <Button className={style.container}>Hello</Button>;
}
