import { globalStyle } from '@vanilla-extract/css';

const HOVER_STYLE = {
    cursor: 'pointer',
    opacity: 0.7,
};

globalStyle('a', {
    textDecoration: 'none',
});

globalStyle('a:hover', HOVER_STYLE);

globalStyle('button:hover', HOVER_STYLE);
