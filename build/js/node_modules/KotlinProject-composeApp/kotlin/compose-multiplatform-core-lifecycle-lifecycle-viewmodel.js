(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'] = factory(typeof this['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'] === 'undefined' ? {} : this['compose-multiplatform-core-lifecycle-lifecycle-viewmodel']);
}(globalThis, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js.map
