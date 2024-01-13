import { atom } from 'recoil';

import { AtomKeys } from './recoilKeys';

export const sampleState = atom({
    key: AtomKeys.SAMPLE_STATE,
    default: '',
});
