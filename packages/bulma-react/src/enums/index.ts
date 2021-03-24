import { SpacingMagnitude } from './SpacingMagnitude';
import { GutterProperty } from './GutterProperty';
import { GutterSideAndMag } from './GutterSideAndMag';
import { GutterType } from './GutterType';
import { JustifyContentDirection } from './JustifyContentDirection';
import { ShrinkSize } from './ShrinkSize';
import { FlexDirection } from './FlexDirection';
import { AlignSelfType } from './AlignSelfType';
import { AlignItemsType } from './AlignItemsType';
import { AlignContentType } from './AlignContentType';
import { GrowSize } from './GrowSize';
import { Side } from './Side';

export interface Spacing {
    GutterType: GutterType,
    GutterSideAndMag: GutterSideAndMag,
    GutterProperty: GutterProperty,
    Side: Side,
    SpacingMagnitude: SpacingMagnitude   
}
export interface Flexbox {
    AlignContentType: AlignContentType,
    AlignItemType: AlignItemsType,
    AlignSelfType: AlignSelfType,
    FlexDirection: FlexDirection,
    GrowSize: GrowSize,
    JustifyContentDirection: JustifyContentDirection,
    ShrinkSize: ShrinkSize
}