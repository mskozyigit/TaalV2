(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['KotlinProject:composeApp'] = factory(typeof this['KotlinProject:composeApp'] === 'undefined' ? {} : this['KotlinProject:composeApp']);
}(globalThis, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=KotlinProject-composeApp.js.map
