import { style } from '@vanilla-extract/css';

export const container = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'royalBlue',
    color: 'white',
    width: '9%',
    border: '2px solid white',
});

export const content = style({
    height: '100%',
    width: '100%',
});
