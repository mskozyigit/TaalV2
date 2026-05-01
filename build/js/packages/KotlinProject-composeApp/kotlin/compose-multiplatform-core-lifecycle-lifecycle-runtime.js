(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['compose-multiplatform-core-lifecycle-lifecycle-runtime'] = factory(typeof this['compose-multiplatform-core-lifecycle-lifecycle-runtime'] === 'undefined' ? {} : this['compose-multiplatform-core-lifecycle-lifecycle-runtime']);
}(globalThis, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-lifecycle-lifecycle-runtime.js.map
