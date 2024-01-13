import { selector } from 'recoil';

import { sampleState } from './atoms';
import { SelectorKeys } from './recoilKeys';

export const focusedHeadingState = selector({
    key: SelectorKeys.GET_SAMPLE_STATE,
    get: ({ get }) => {
        return get(sampleState);
    },
});
