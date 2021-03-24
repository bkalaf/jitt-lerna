import { JustifyContentDirection } from './JustifyContentDirection';
import { ShrinkSize } from './ShrinkSize';
import { FlexDirection } from './FlexDirection';
import { AlignSelfType } from './AlignSelfType';
import { AlignItemsType } from './AlignItemsType';
import { AlignContentType } from './AlignContentType';
import { GrowSize } from './GrowSize';

export interface Flexbox {
    AlignContentType: AlignContentType,
    AlignItemType: AlignItemsType,
    AlignSelfType: AlignSelfType,
    FlexDirection: FlexDirection,
    GrowSize: GrowSize,
    JustifyContentDirection: JustifyContentDirection,
    ShrinkSize: ShrinkSize
}