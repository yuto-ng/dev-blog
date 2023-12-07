import { ICON_SIZE } from '@/common/constants/size';

export type IconName =
    | 'FillCaretRight'
    | 'OutlineClockCircle'
    | 'OutlineDoubleRight'
    | 'OutlineSearch'
    | 'OutlineTwitter';

export type IconSize = keyof typeof ICON_SIZE;
