type SingleSide = 't' | 'b' | 'l' | 'r';
type PairSide = 'tb' | 'tr' | 'tl' | 'bt' | 'br' | 'bl' | 'lt' | 'lb' | 'lr' | 'rt' | 'rb' | 'rl';
type TrioSide = 'tbl' | 'tbr' | 'tlb' | 'tlr' | 'trb' | 'trl' | 'btl' | 'btr' | 'blt' | 'blr' | 'brt' |
'brl' | 'ltb' | 'ltr' | 'lbt' | 'lbr' | 'lrt' | 'lrb' | 'rtb' | 'rtl' | 'rbt' | 'rbl' | 'rlt' | 'rlb';
type QuadSide = 'tblr' | 'tbrl' | 'tlbr' | 'tlrb' | 'trlb' | 'trbl' | 'btlr' | 'btrl' | 'bltr' | 
'blrt' | 'brtl' | 'brlt' | 'ltbr' | 'ltrb' | 'lrtb' | 'lrbt' | 'lbrt' | 'lbtr' | 'rtlb' | 'rtbl' |
'rbtl' | 'rblt' | 'rltb' | 'rlbt';
export type Side = SingleSide | PairSide | TrioSide | QuadSide;

export function reduceSide(side: Side) {
    const hasRight = side.includes('r');
    const hasLeft = side.includes('l');
    const hasTop = side.includes('t');
    const hasBottom = side.includes('b');

    const hasX = hasRight && hasLeft;
    const hasY = hasTop && hasBottom;
    const hasAll = hasX && hasY;

    if (hasAll) { return ''; }
    if (hasX || hasY) {
        let baseSide = !hasX && hasRight ? 'r' : '';
        baseSide = !hasX && hasLeft ? `${baseSide}l` : baseSide;
        baseSide = !hasY && hasTop ? `${baseSide}t` : baseSide;
        baseSide = !hasY && hasBottom ? `${baseSide}b` : baseSide;
        baseSide = hasX ? `x${baseSide}` : baseSide;
        baseSide = hasY ? `y${baseSide}` : baseSide;
        return baseSide;
    }
    let retSide = hasTop ? 't' : '';
    retSide = hasBottom ? `${retSide}b` : retSide;
    retSide = hasLeft ? `${retSide }l` : retSide;
    retSide = hasRight ? `${retSide}r` : retSide;
    return retSide;
}