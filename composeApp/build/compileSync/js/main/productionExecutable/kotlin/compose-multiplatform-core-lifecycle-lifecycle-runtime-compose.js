(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['compose-multiplatform-core-lifecycle-lifecycle-runtime-compose'] = factory(typeof this['compose-multiplatform-core-lifecycle-lifecycle-runtime-compose'] === 'undefined' ? {} : this['compose-multiplatform-core-lifecycle-lifecycle-runtime-compose']);
}(globalThis, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-lifecycle-lifecycle-runtime-compose.js.map
