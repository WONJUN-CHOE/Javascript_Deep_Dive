const str = '   foo   ';

// String.prototype.{trimStrat, trimEnd} : Proposal stage 4
str.trimStart(); // -> 'foo   '
str.trimEnd();   // -> '   foo'