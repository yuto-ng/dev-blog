import { globalStyle } from '@vanilla-extract/css';

const HOVER_STYLE = {
    cursor: 'pointer',
    opacity: 0.7,
    transition: 'opacity 0.2s',
};

globalStyle('a', {
    textDecoration: 'none',
    transition: 'opacity 0.2s',
});

globalStyle('a:hover', HOVER_STYLE);

globalStyle('button', {
    border: 'none',
    transition: 'opacity 0.2s',
});

globalStyle('button:hover', HOVER_STYLE);
