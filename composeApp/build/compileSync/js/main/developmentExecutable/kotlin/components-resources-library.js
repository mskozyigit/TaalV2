(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-text.js', './compose-multiplatform-core-compose-foundation-foundation.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'components-resources-library'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'components-resources-library'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'components-resources-library'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'components-resources-library'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'components-resources-library'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'components-resources-library'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'components-resources-library'.");
    }
    if (typeof this['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'components-resources-library'.");
    }
    root['components-resources-library'] = factory(typeof this['components-resources-library'] === 'undefined' ? {} : this['components-resources-library'], this['kotlin-kotlin-stdlib'], this['kotlinx-coroutines-core'], this['compose-multiplatform-core-compose-ui-ui-graphics'], this['compose-multiplatform-core-compose-ui-ui-unit'], this['compose-multiplatform-core-compose-ui-ui'], this['compose-multiplatform-core-compose-runtime-runtime'], this['compose-multiplatform-core-compose-ui-ui-text'], this['compose-multiplatform-core-compose-foundation-foundation']);
  }
}(globalThis, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_foundation_foundation) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var CoroutineImpl = kotlin_kotlin.$_$.ub;
  var Unit_getInstance = kotlin_kotlin.$_$.z4;
  var protoOf = kotlin_kotlin.$_$.yd;
  var THROW_CCE = kotlin_kotlin.$_$.qh;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var isInterface = kotlin_kotlin.$_$.md;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.fb;
  var initMetadataForLambda = kotlin_kotlin.$_$.bd;
  var CoroutineStart_LAZY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var VOID = kotlin_kotlin.$_$.e;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r1;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var initMetadataForClass = kotlin_kotlin.$_$.xc;
  var SuspendFunction1 = kotlin_kotlin.$_$.wb;
  var initMetadataForInterface = kotlin_kotlin.$_$.ad;
  var ImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var Builder = kotlin_org_jetbrains_compose_ui_ui.$_$.n;
  var BitmapPainter = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e;
  var KProperty0 = kotlin_kotlin.$_$.cf;
  var getPropertyCallableRef = kotlin_kotlin.$_$.uc;
  var lazy = kotlin_kotlin.$_$.qi;
  var getStringHashCode = kotlin_kotlin.$_$.vc;
  var initMetadataForCompanion = kotlin_kotlin.$_$.yc;
  var THROW_IAE = kotlin_kotlin.$_$.rh;
  var enumEntries = kotlin_kotlin.$_$.ac;
  var Enum = kotlin_kotlin.$_$.eh;
  var Annotation = kotlin_kotlin.$_$.xg;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_text.$_$.n1;
  var isSystemInDarkTheme = kotlin_org_jetbrains_compose_foundation_foundation.$_$.e1;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.j4;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var Exception = kotlin_kotlin.$_$.gh;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.n1;
  var captureStack = kotlin_kotlin.$_$.fc;
  var toString = kotlin_kotlin.$_$.ce;
  var hashCode = kotlin_kotlin.$_$.wc;
  var equals = kotlin_kotlin.$_$.oc;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.f1;
  var to = kotlin_kotlin.$_$.dj;
  var mapOf = kotlin_kotlin.$_$.l9;
  var equals_0 = kotlin_kotlin.$_$.vf;
  var numberToInt = kotlin_kotlin.$_$.vd;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.zc;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var Default_getInstance = kotlin_kotlin.$_$.i4;
  var Font = kotlin_org_jetbrains_compose_ui_ui_text.$_$.k;
  var startsWith = kotlin_kotlin.$_$.jg;
  var initMetadataForObject = kotlin_kotlin.$_$.cd;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(AsyncCache$getOrLoad$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(AsyncCache$getOrLoad$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(AsyncCache, 'AsyncCache', AsyncCache, VOID, VOID, [2]);
  initMetadataForInterface(ImageCache, 'ImageCache');
  initMetadataForClass(Bitmap, 'Bitmap', VOID, VOID, [ImageCache]);
  initMetadataForClass(Vector, 'Vector', VOID, VOID, [ImageCache]);
  initMetadataForClass(Svg, 'Svg', VOID, VOID, [ImageCache]);
  initMetadataForInterface(Qualifier, 'Qualifier');
  initMetadataForClass(LanguageQualifier, 'LanguageQualifier', VOID, VOID, [Qualifier]);
  initMetadataForClass(RegionQualifier, 'RegionQualifier', VOID, VOID, [Qualifier]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(ThemeQualifier, 'ThemeQualifier', VOID, Enum, [Enum, Qualifier]);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(DensityQualifier, 'DensityQualifier', VOID, Enum, [Enum, Qualifier]);
  initMetadataForClass(ExperimentalResourceApi, 'ExperimentalResourceApi', VOID, VOID, [Annotation]);
  initMetadataForClass(InternalResourceApi, 'InternalResourceApi', VOID, VOID, [Annotation]);
  initMetadataForInterface(ComposeEnvironment, 'ComposeEnvironment');
  initMetadataForClass(ResourceEnvironment, 'ResourceEnvironment');
  initMetadataForClass(DefaultComposeEnvironment$1, VOID, VOID, VOID, [ComposeEnvironment]);
  initMetadataForInterface(ResourceReader, 'ResourceReader', VOID, VOID, VOID, [1, 3]);
  initMetadataForClass(MissingResourceException, 'MissingResourceException', VOID, Exception);
  initMetadataForInterface(StringItem, 'StringItem');
  initMetadataForClass(Value, 'Value', VOID, VOID, [StringItem]);
  initMetadataForClass(Plurals, 'Plurals', VOID, VOID, [StringItem]);
  initMetadataForClass(Array_0, 'Array', VOID, VOID, [StringItem]);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(PluralCategory, 'PluralCategory', VOID, Enum);
  initMetadataForCoroutine($readCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($readPartCOROUTINE$1, CoroutineImpl);
  initMetadataForCoroutine($readAsBlobCOROUTINE$2, CoroutineImpl);
  initMetadataForCoroutine($asByteArrayCOROUTINE$3, CoroutineImpl);
  initMetadataForClass(getPlatformResourceReader$1, VOID, VOID, VOID, [ResourceReader], [1, 3, 0]);
  initMetadataForObject(WebResourcesConfiguration, 'WebResourcesConfiguration');
  //endregion
  function AsyncCache$getOrLoad$slambda$slambda($load, resultContinuation) {
    this.$load_1 = $load;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncCache$getOrLoad$slambda$slambda).invoke_s98mvd_k$ = function ($this$async, $completion) {
    var tmp = this.create_rcuf4x_k$($this$async, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AsyncCache$getOrLoad$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_s98mvd_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncCache$getOrLoad$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$load_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(AsyncCache$getOrLoad$slambda$slambda).create_rcuf4x_k$ = function ($this$async, completion) {
    var i = new AsyncCache$getOrLoad$slambda$slambda(this.$load_1, completion);
    i.$this$async_1 = $this$async;
    return i;
  };
  protoOf(AsyncCache$getOrLoad$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AsyncCache$getOrLoad$slambda$slambda_0($load, resultContinuation) {
    var i = new AsyncCache$getOrLoad$slambda$slambda($load, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.invoke_s98mvd_k$($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_mutex__e2dgb2($this) {
    return $this.mutex_1;
  }
  function _get_cache__j44d4h($this) {
    return $this.cache_1;
  }
  function AsyncCache$getOrLoad$slambda(this$0, $key, $load, resultContinuation) {
    this.this$0__1 = this$0;
    this.$key_1 = $key;
    this.$load_1 = $load;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncCache$getOrLoad$slambda).invoke_s98mvd_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AsyncCache$getOrLoad$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_s98mvd_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncCache$getOrLoad$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this;
            tmp_0.this0__1 = this.this$0__1.mutex_1;
            var tmp_1 = this;
            tmp_1.owner1__1 = null;
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this0__1.lock_ugrcvf_k$(this.owner1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_2 = this;
            var tmp$ret$0 = Unit_getInstance();
            l$ret$1: do {
              var tmp_3;
              try {
                var cached = this.this$0__1.cache_1.get_wei43m_k$(this.$key_1);
                if (cached == null || cached.get_isCancelled_trk8pu_k$()) {
                  var tmp_4 = CoroutineStart_LAZY_getInstance();
                  cached = async(this.$this$coroutineScope_1, VOID, tmp_4, AsyncCache$getOrLoad$slambda$slambda_0(this.$load_1, null));
                  var this_0 = this.this$0__1.cache_1;
                  var key = this.$key_1;
                  var value = cached;
                  this_0.put_4fpzoq_k$(key, value);
                }
                tmp$ret$0 = cached;
                break l$ret$1;
              } catch ($p) {
                var tmp_5;
                var t = $p;
                this.this0__1.unlock_ulcrcl_k$(this.owner1__1);
                throw t;
              }
            }
             while (false);
            var tmp_6 = tmp$ret$0;
            this.this0__1.unlock_ulcrcl_k$(this.owner1__1);
            tmp_2.deferred2__1 = tmp_6;
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.deferred2__1.await_4rdzbx_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(AsyncCache$getOrLoad$slambda).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new AsyncCache$getOrLoad$slambda(this.this$0__1, this.$key_1, this.$load_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(AsyncCache$getOrLoad$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AsyncCache$getOrLoad$slambda_0(this$0, $key, $load, resultContinuation) {
    var i = new AsyncCache$getOrLoad$slambda(this$0, $key, $load, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_s98mvd_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AsyncCache() {
    this.mutex_1 = Mutex();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.cache_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(AsyncCache).getOrLoad_lwanaa_k$ = function (key, load, $completion) {
    return coroutineScope(AsyncCache$getOrLoad$slambda_0(this, key, load, null), $completion);
  };
  protoOf(AsyncCache).clear_j9egeb_k$ = function () {
    this.cache_1.clear_j9egeb_k$();
  };
  function get_emptyImageBitmap() {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'kotlin.getValue' call
    var this_0 = emptyImageBitmap$delegate;
    emptyImageBitmap$factory();
    return this_0.get_value_j01efc_k$();
  }
  var emptyImageBitmap$delegate;
  function get_emptyImageVector() {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'kotlin.getValue' call
    var this_0 = emptyImageVector$delegate;
    emptyImageVector$factory();
    return this_0.get_value_j01efc_k$();
  }
  var emptyImageVector$delegate;
  function get_emptySvgPainter() {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'kotlin.getValue' call
    var this_0 = emptySvgPainter$delegate;
    emptySvgPainter$factory();
    return this_0.get_value_j01efc_k$();
  }
  var emptySvgPainter$delegate;
  function get_imageCache() {
    _init_properties_ImageResources_kt__6e1y7e();
    return imageCache;
  }
  var imageCache;
  function Bitmap(bitmap) {
    this.bitmap_1 = bitmap;
  }
  protoOf(Bitmap).get_bitmap_bfxu7s_k$ = function () {
    return this.bitmap_1;
  };
  function Vector(vector) {
    this.vector_1 = vector;
  }
  protoOf(Vector).get_vector_kuceh8_k$ = function () {
    return this.vector_1;
  };
  function Svg(painter) {
    this.painter_1 = painter;
  }
  protoOf(Svg).get_painter_bzl4ri_k$ = function () {
    return this.painter_1;
  };
  function ImageCache() {
  }
  function emptyImageBitmap$delegate$lambda() {
    _init_properties_ImageResources_kt__6e1y7e();
    return ImageBitmap(1, 1);
  }
  function emptyImageVector$delegate$lambda() {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(1);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(1);
    return (new Builder('emptyImageVector', tmp, tmp$ret$1, 1.0, 1.0)).build_1k0s4u_k$();
  }
  function emptySvgPainter$delegate$lambda() {
    _init_properties_ImageResources_kt__6e1y7e();
    return new BitmapPainter(get_emptyImageBitmap());
  }
  function emptyImageBitmap$factory() {
    return getPropertyCallableRef('emptyImageBitmap', 0, KProperty0, function () {
      return get_emptyImageBitmap();
    }, null);
  }
  function emptyImageVector$factory() {
    return getPropertyCallableRef('emptyImageVector', 0, KProperty0, function () {
      return get_emptyImageVector();
    }, null);
  }
  function emptySvgPainter$factory() {
    return getPropertyCallableRef('emptySvgPainter', 0, KProperty0, function () {
      return get_emptySvgPainter();
    }, null);
  }
  var properties_initialized_ImageResources_kt_9gvoi4;
  function _init_properties_ImageResources_kt__6e1y7e() {
    if (!properties_initialized_ImageResources_kt_9gvoi4) {
      properties_initialized_ImageResources_kt_9gvoi4 = true;
      emptyImageBitmap$delegate = lazy(emptyImageBitmap$delegate$lambda);
      emptyImageVector$delegate = lazy(emptyImageVector$delegate$lambda);
      emptySvgPainter$delegate = lazy(emptySvgPainter$delegate$lambda);
      imageCache = new AsyncCache();
    }
  }
  function LanguageQualifier(language) {
    this.language_1 = language;
  }
  protoOf(LanguageQualifier).get_language_cjhhk1_k$ = function () {
    return this.language_1;
  };
  protoOf(LanguageQualifier).component1_7eebsc_k$ = function () {
    return this.language_1;
  };
  protoOf(LanguageQualifier).copy_a35qlh_k$ = function (language) {
    return new LanguageQualifier(language);
  };
  protoOf(LanguageQualifier).copy$default_xh84it_k$ = function (language, $super) {
    language = language === VOID ? this.language_1 : language;
    return $super === VOID ? this.copy_a35qlh_k$(language) : $super.copy_a35qlh_k$.call(this, language);
  };
  protoOf(LanguageQualifier).toString = function () {
    return 'LanguageQualifier(language=' + this.language_1 + ')';
  };
  protoOf(LanguageQualifier).hashCode = function () {
    return getStringHashCode(this.language_1);
  };
  protoOf(LanguageQualifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LanguageQualifier))
      return false;
    var tmp0_other_with_cast = other instanceof LanguageQualifier ? other : THROW_CCE();
    if (!(this.language_1 === tmp0_other_with_cast.language_1))
      return false;
    return true;
  };
  function RegionQualifier(region) {
    this.region_1 = region;
  }
  protoOf(RegionQualifier).get_region_iy88ot_k$ = function () {
    return this.region_1;
  };
  protoOf(RegionQualifier).component1_7eebsc_k$ = function () {
    return this.region_1;
  };
  protoOf(RegionQualifier).copy_a35qlh_k$ = function (region) {
    return new RegionQualifier(region);
  };
  protoOf(RegionQualifier).copy$default_7kme0n_k$ = function (region, $super) {
    region = region === VOID ? this.region_1 : region;
    return $super === VOID ? this.copy_a35qlh_k$(region) : $super.copy_a35qlh_k$.call(this, region);
  };
  protoOf(RegionQualifier).toString = function () {
    return 'RegionQualifier(region=' + this.region_1 + ')';
  };
  protoOf(RegionQualifier).hashCode = function () {
    return getStringHashCode(this.region_1);
  };
  protoOf(RegionQualifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RegionQualifier))
      return false;
    var tmp0_other_with_cast = other instanceof RegionQualifier ? other : THROW_CCE();
    if (!(this.region_1 === tmp0_other_with_cast.region_1))
      return false;
    return true;
  };
  var ThemeQualifier_LIGHT_instance;
  var ThemeQualifier_DARK_instance;
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).selectByValue_7mr6mx_k$ = function (isDark) {
    return isDark ? ThemeQualifier_DARK_getInstance() : ThemeQualifier_LIGHT_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    ThemeQualifier_initEntries();
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function values() {
    return [ThemeQualifier_LIGHT_getInstance(), ThemeQualifier_DARK_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'LIGHT':
        return ThemeQualifier_LIGHT_getInstance();
      case 'DARK':
        return ThemeQualifier_DARK_getInstance();
      default:
        ThemeQualifier_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var ThemeQualifier_entriesInitialized;
  function ThemeQualifier_initEntries() {
    if (ThemeQualifier_entriesInitialized)
      return Unit_getInstance();
    ThemeQualifier_entriesInitialized = true;
    ThemeQualifier_LIGHT_instance = new ThemeQualifier('LIGHT', 0);
    ThemeQualifier_DARK_instance = new ThemeQualifier('DARK', 1);
    Companion_getInstance_1();
  }
  var $ENTRIES;
  function ThemeQualifier(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var DensityQualifier_LDPI_instance;
  var DensityQualifier_MDPI_instance;
  var DensityQualifier_HDPI_instance;
  var DensityQualifier_XHDPI_instance;
  var DensityQualifier_XXHDPI_instance;
  var DensityQualifier_XXXHDPI_instance;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).selectByValue_h7gwd6_k$ = function (dpi) {
    return dpi <= DensityQualifier_LDPI_getInstance().dpi_1 ? DensityQualifier_LDPI_getInstance() : dpi <= DensityQualifier_MDPI_getInstance().dpi_1 ? DensityQualifier_MDPI_getInstance() : dpi <= DensityQualifier_HDPI_getInstance().dpi_1 ? DensityQualifier_HDPI_getInstance() : dpi <= DensityQualifier_XHDPI_getInstance().dpi_1 ? DensityQualifier_XHDPI_getInstance() : dpi <= DensityQualifier_XXHDPI_getInstance().dpi_1 ? DensityQualifier_XXHDPI_getInstance() : DensityQualifier_XXXHDPI_getInstance();
  };
  protoOf(Companion_0).selectByDensity_fkp6e5_k$ = function (density) {
    return density <= 0.75 ? DensityQualifier_LDPI_getInstance() : density <= 1.0 ? DensityQualifier_MDPI_getInstance() : density <= 1.5 ? DensityQualifier_HDPI_getInstance() : density <= 2.0 ? DensityQualifier_XHDPI_getInstance() : density <= 3.0 ? DensityQualifier_XXHDPI_getInstance() : DensityQualifier_XXXHDPI_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_2() {
    DensityQualifier_initEntries();
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function values_0() {
    return [DensityQualifier_LDPI_getInstance(), DensityQualifier_MDPI_getInstance(), DensityQualifier_HDPI_getInstance(), DensityQualifier_XHDPI_getInstance(), DensityQualifier_XXHDPI_getInstance(), DensityQualifier_XXXHDPI_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'LDPI':
        return DensityQualifier_LDPI_getInstance();
      case 'MDPI':
        return DensityQualifier_MDPI_getInstance();
      case 'HDPI':
        return DensityQualifier_HDPI_getInstance();
      case 'XHDPI':
        return DensityQualifier_XHDPI_getInstance();
      case 'XXHDPI':
        return DensityQualifier_XXHDPI_getInstance();
      case 'XXXHDPI':
        return DensityQualifier_XXXHDPI_getInstance();
      default:
        DensityQualifier_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var DensityQualifier_entriesInitialized;
  function DensityQualifier_initEntries() {
    if (DensityQualifier_entriesInitialized)
      return Unit_getInstance();
    DensityQualifier_entriesInitialized = true;
    DensityQualifier_LDPI_instance = new DensityQualifier('LDPI', 0, 120);
    DensityQualifier_MDPI_instance = new DensityQualifier('MDPI', 1, 160);
    DensityQualifier_HDPI_instance = new DensityQualifier('HDPI', 2, 240);
    DensityQualifier_XHDPI_instance = new DensityQualifier('XHDPI', 3, 320);
    DensityQualifier_XXHDPI_instance = new DensityQualifier('XXHDPI', 4, 480);
    DensityQualifier_XXXHDPI_instance = new DensityQualifier('XXXHDPI', 5, 640);
    Companion_getInstance_2();
  }
  var $ENTRIES_0;
  function DensityQualifier(name, ordinal, dpi) {
    Enum.call(this, name, ordinal);
    this.dpi_1 = dpi;
  }
  protoOf(DensityQualifier).get_dpi_18j764_k$ = function () {
    return this.dpi_1;
  };
  function Qualifier() {
  }
  function ThemeQualifier_LIGHT_getInstance() {
    ThemeQualifier_initEntries();
    return ThemeQualifier_LIGHT_instance;
  }
  function ThemeQualifier_DARK_getInstance() {
    ThemeQualifier_initEntries();
    return ThemeQualifier_DARK_instance;
  }
  function DensityQualifier_LDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_LDPI_instance;
  }
  function DensityQualifier_MDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_MDPI_instance;
  }
  function DensityQualifier_HDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_HDPI_instance;
  }
  function DensityQualifier_XHDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_XHDPI_instance;
  }
  function DensityQualifier_XXHDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_XXHDPI_instance;
  }
  function DensityQualifier_XXXHDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_XXXHDPI_instance;
  }
  function ExperimentalResourceApi() {
  }
  protoOf(ExperimentalResourceApi).equals = function (other) {
    if (!(other instanceof ExperimentalResourceApi))
      return false;
    other instanceof ExperimentalResourceApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalResourceApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalResourceApi).toString = function () {
    return '@org.jetbrains.compose.resources.ExperimentalResourceApi()';
  };
  function InternalResourceApi() {
  }
  protoOf(InternalResourceApi).equals = function (other) {
    if (!(other instanceof InternalResourceApi))
      return false;
    other instanceof InternalResourceApi || THROW_CCE();
    return true;
  };
  protoOf(InternalResourceApi).hashCode = function () {
    return 0;
  };
  protoOf(InternalResourceApi).toString = function () {
    return '@org.jetbrains.compose.resources.InternalResourceApi()';
  };
  function get_DefaultComposeEnvironment() {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    return DefaultComposeEnvironment;
  }
  var DefaultComposeEnvironment;
  function get_LocalComposeEnvironment() {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    return LocalComposeEnvironment;
  }
  var LocalComposeEnvironment;
  function set_getResourceEnvironment(_set____db54di) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    getResourceEnvironment = _set____db54di;
  }
  function get_getResourceEnvironment() {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    return getResourceEnvironment;
  }
  var getResourceEnvironment;
  function ComposeEnvironment() {
  }
  function ResourceEnvironment(language, region, theme, density) {
    this.language_1 = language;
    this.region_1 = region;
    this.theme_1 = theme;
    this.density_1 = density;
  }
  protoOf(ResourceEnvironment).get_language_q66oqc_k$ = function () {
    return this.language_1;
  };
  protoOf(ResourceEnvironment).get_region_424es8_k$ = function () {
    return this.region_1;
  };
  protoOf(ResourceEnvironment).get_theme_j95dl7_k$ = function () {
    return this.theme_1;
  };
  protoOf(ResourceEnvironment).get_density_75p86i_k$ = function () {
    return this.density_1;
  };
  protoOf(ResourceEnvironment).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof ResourceEnvironment))
      THROW_CCE();
    if (!this.language_1.equals(other.language_1))
      return false;
    if (!this.region_1.equals(other.region_1))
      return false;
    if (!this.theme_1.equals(other.theme_1))
      return false;
    if (!this.density_1.equals(other.density_1))
      return false;
    return true;
  };
  protoOf(ResourceEnvironment).hashCode = function () {
    var result = this.language_1.hashCode();
    result = imul(31, result) + this.region_1.hashCode() | 0;
    result = imul(31, result) + this.theme_1.hashCode() | 0;
    result = imul(31, result) + this.density_1.hashCode() | 0;
    return result;
  };
  function DefaultComposeEnvironment$1() {
  }
  protoOf(DefaultComposeEnvironment$1).rememberEnvironment_3peo8j_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1808039825);
    if (isTraceInProgress()) {
      traceEventStart(1808039825, $changed, -1, 'org.jetbrains.compose.resources.DefaultComposeEnvironment.<no name provided>.rememberEnvironment (ResourceEnvironment.kt:44)');
    }
    var composeLocale = Companion_getInstance().get_current_jwi6j4_k$();
    var composeTheme = isSystemInDarkTheme($composer_0, 0);
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalDensity();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    var composeDensity = tmp0;
    $composer_0.startReplaceableGroup_ip860b_k$(1697238779);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!($composer_0.changed_ga7h3f_k$(composeLocale) | $composer_0.changed_jpyyrz_k$(composeTheme)) | $composer_0.changed_ga7h3f_k$(composeDensity));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'org.jetbrains.compose.resources.<no name provided>.rememberEnvironment.<anonymous>' call
      var value = new ResourceEnvironment(new LanguageQualifier(composeLocale.get_language_cjhhk1_k$()), new RegionQualifier(composeLocale.get_region_iy88ot_k$()), Companion_getInstance_1().selectByValue_7mr6mx_k$(composeTheme), Companion_getInstance_2().selectByDensity_fkp6e5_k$(composeDensity.get_density_qy0267_k$()));
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp1_group;
  };
  function LocalComposeEnvironment$lambda() {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    return get_DefaultComposeEnvironment();
  }
  function getSystemEnvironment$ref() {
    var l = function () {
      return getSystemEnvironment();
    };
    l.callableName = 'getSystemEnvironment';
    return l;
  }
  var properties_initialized_ResourceEnvironment_kt_6hb9vv;
  function _init_properties_ResourceEnvironment_kt__2jx9u5() {
    if (!properties_initialized_ResourceEnvironment_kt_6hb9vv) {
      properties_initialized_ResourceEnvironment_kt_6hb9vv = true;
      DefaultComposeEnvironment = new DefaultComposeEnvironment$1();
      LocalComposeEnvironment = staticCompositionLocalOf(LocalComposeEnvironment$lambda);
      getResourceEnvironment = getSystemEnvironment$ref();
    }
  }
  function get_DefaultResourceReader() {
    _init_properties_ResourceReader_kt__hdc5sh();
    return DefaultResourceReader;
  }
  var DefaultResourceReader;
  function get_LocalResourceReader() {
    _init_properties_ResourceReader_kt__hdc5sh();
    return LocalResourceReader;
  }
  var LocalResourceReader;
  function ResourceReader() {
  }
  function MissingResourceException(path) {
    Exception_init_$Init$('Missing resource with path: ' + path, this);
    captureStack(this, MissingResourceException);
  }
  function readResourceBytes(path, $completion) {
    return get_DefaultResourceReader().read_3sms9f_k$(path, $completion);
  }
  function getResourceUri(path) {
    _init_properties_ResourceReader_kt__hdc5sh();
    return get_DefaultResourceReader().getUri_3gtoqs_k$(path);
  }
  function LocalResourceReader$lambda() {
    _init_properties_ResourceReader_kt__hdc5sh();
    return get_DefaultResourceReader();
  }
  var properties_initialized_ResourceReader_kt_tqilcj;
  function _init_properties_ResourceReader_kt__hdc5sh() {
    if (!properties_initialized_ResourceReader_kt_tqilcj) {
      properties_initialized_ResourceReader_kt_tqilcj = true;
      DefaultResourceReader = getPlatformResourceReader();
      LocalResourceReader = staticCompositionLocalOf(LocalResourceReader$lambda);
    }
  }
  function get_SimpleStringFormatRegex() {
    _init_properties_StringResourcesUtils_kt__ckiot9();
    return SimpleStringFormatRegex;
  }
  var SimpleStringFormatRegex;
  function get_stringItemsCache() {
    _init_properties_StringResourcesUtils_kt__ckiot9();
    return stringItemsCache;
  }
  var stringItemsCache;
  function Value(text) {
    this.text_1 = text;
  }
  protoOf(Value).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(Value).component1_7eebsc_k$ = function () {
    return this.text_1;
  };
  protoOf(Value).copy_a35qlh_k$ = function (text) {
    return new Value(text);
  };
  protoOf(Value).copy$default_hb93vy_k$ = function (text, $super) {
    text = text === VOID ? this.text_1 : text;
    return $super === VOID ? this.copy_a35qlh_k$(text) : $super.copy_a35qlh_k$.call(this, text);
  };
  protoOf(Value).toString = function () {
    return 'Value(text=' + this.text_1 + ')';
  };
  protoOf(Value).hashCode = function () {
    return getStringHashCode(this.text_1);
  };
  protoOf(Value).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Value))
      return false;
    var tmp0_other_with_cast = other instanceof Value ? other : THROW_CCE();
    if (!(this.text_1 === tmp0_other_with_cast.text_1))
      return false;
    return true;
  };
  function Plurals(items) {
    this.items_1 = items;
  }
  protoOf(Plurals).get_items_it823b_k$ = function () {
    return this.items_1;
  };
  protoOf(Plurals).component1_7eebsc_k$ = function () {
    return this.items_1;
  };
  protoOf(Plurals).copy_jkbmgr_k$ = function (items) {
    return new Plurals(items);
  };
  protoOf(Plurals).copy$default_xuqi0y_k$ = function (items, $super) {
    items = items === VOID ? this.items_1 : items;
    return $super === VOID ? this.copy_jkbmgr_k$(items) : $super.copy_jkbmgr_k$.call(this, items);
  };
  protoOf(Plurals).toString = function () {
    return 'Plurals(items=' + toString(this.items_1) + ')';
  };
  protoOf(Plurals).hashCode = function () {
    return hashCode(this.items_1);
  };
  protoOf(Plurals).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Plurals))
      return false;
    var tmp0_other_with_cast = other instanceof Plurals ? other : THROW_CCE();
    if (!equals(this.items_1, tmp0_other_with_cast.items_1))
      return false;
    return true;
  };
  function Array_0(items) {
    this.items_1 = items;
  }
  protoOf(Array_0).get_items_it823b_k$ = function () {
    return this.items_1;
  };
  protoOf(Array_0).component1_7eebsc_k$ = function () {
    return this.items_1;
  };
  protoOf(Array_0).copy_is4t59_k$ = function (items) {
    return new Array_0(items);
  };
  protoOf(Array_0).copy$default_2kft8e_k$ = function (items, $super) {
    items = items === VOID ? this.items_1 : items;
    return $super === VOID ? this.copy_is4t59_k$(items) : $super.copy_is4t59_k$.call(this, items);
  };
  protoOf(Array_0).toString = function () {
    return 'Array(items=' + toString(this.items_1) + ')';
  };
  protoOf(Array_0).hashCode = function () {
    return hashCode(this.items_1);
  };
  protoOf(Array_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Array_0))
      return false;
    var tmp0_other_with_cast = other instanceof Array_0 ? other : THROW_CCE();
    if (!equals(this.items_1, tmp0_other_with_cast.items_1))
      return false;
    return true;
  };
  function StringItem() {
  }
  var properties_initialized_StringResourcesUtils_kt_tq6hb5;
  function _init_properties_StringResourcesUtils_kt__ckiot9() {
    if (!properties_initialized_StringResourcesUtils_kt_tq6hb5) {
      properties_initialized_StringResourcesUtils_kt_tq6hb5 = true;
      SimpleStringFormatRegex = Regex_init_$Create$('%(\\d)\\$[ds]');
      stringItemsCache = new AsyncCache();
    }
  }
  function get_cldrPluralRuleListIndexByLocale() {
    _init_properties_CLDRPluralRuleLists_kt__djqc24();
    return cldrPluralRuleListIndexByLocale;
  }
  var cldrPluralRuleListIndexByLocale;
  function get_cldrPluralRuleLists() {
    _init_properties_CLDRPluralRuleLists_kt__djqc24();
    return cldrPluralRuleLists;
  }
  var cldrPluralRuleLists;
  var properties_initialized_CLDRPluralRuleLists_kt_25xrzi;
  function _init_properties_CLDRPluralRuleLists_kt__djqc24() {
    if (!properties_initialized_CLDRPluralRuleLists_kt_25xrzi) {
      properties_initialized_CLDRPluralRuleLists_kt_25xrzi = true;
      cldrPluralRuleListIndexByLocale = mapOf([to('bm', 0), to('bo', 0), to('dz', 0), to('hnj', 0), to('id', 0), to('ig', 0), to('ii', 0), to('in', 0), to('ja', 0), to('jbo', 0), to('jv', 0), to('jw', 0), to('kde', 0), to('kea', 0), to('km', 0), to('ko', 0), to('lkt', 0), to('lo', 0), to('ms', 0), to('my', 0), to('nqo', 0), to('osa', 0), to('root', 0), to('sah', 0), to('ses', 0), to('sg', 0), to('su', 0), to('th', 0), to('to', 0), to('tpi', 0), to('vi', 0), to('wo', 0), to('yo', 0), to('yue', 0), to('zh', 0), to('am', 1), to('as', 1), to('bn', 1), to('doi', 1), to('fa', 1), to('gu', 1), to('hi', 1), to('kn', 1), to('pcm', 1), to('zu', 1), to('ff', 2), to('hy', 2), to('kab', 2), to('ast', 3), to('de', 3), to('en', 3), to('et', 3), to('fi', 3), to('fy', 3), to('gl', 3), to('ia', 3), to('io', 3), to('ji', 3), to('lij', 3), to('nl', 3), to('sc', 3), to('scn', 3), to('sv', 3), to('sw', 3), to('ur', 3), to('yi', 3), to('si', 4), to('ak', 5), to('bho', 5), to('guw', 5), to('ln', 5), to('mg', 5), to('nso', 5), to('pa', 5), to('ti', 5), to('wa', 5), to('tzm', 6), to('af', 7), to('an', 7), to('asa', 7), to('az', 7), to('bal', 7), to('bem', 7), to('bez', 7), to('bg', 7), to('brx', 7), to('ce', 7), to('cgg', 7), to('chr', 7), to('ckb', 7), to('dv', 7), to('ee', 7), to('el', 7), to('eo', 7), to('eu', 7), to('fo', 7), to('fur', 7), to('gsw', 7), to('ha', 7), to('haw', 7), to('hu', 7), to('jgo', 7), to('jmc', 7), to('ka', 7), to('kaj', 7), to('kcg', 7), to('kk', 7), to('kkj', 7), to('kl', 7), to('ks', 7), to('ksb', 7), to('ku', 7), to('ky', 7), to('lb', 7), to('lg', 7), to('mas', 7), to('mgo', 7), to('ml', 7), to('mn', 7), to('mr', 7), to('nah', 7), to('nb', 7), to('nd', 7), to('ne', 7), to('nn', 7), to('nnh', 7), to('no', 7), to('nr', 7), to('ny', 7), to('nyn', 7), to('om', 7), to('or', 7), to('os', 7), to('pap', 7), to('ps', 7), to('rm', 7), to('rof', 7), to('rwk', 7), to('saq', 7), to('sd', 7), to('sdh', 7), to('seh', 7), to('sn', 7), to('so', 7), to('sq', 7), to('ss', 7), to('ssy', 7), to('st', 7), to('syr', 7), to('ta', 7), to('te', 7), to('teo', 7), to('tig', 7), to('tk', 7), to('tn', 7), to('tr', 7), to('ts', 7), to('ug', 7), to('uz', 7), to('ve', 7), to('vo', 7), to('vun', 7), to('wae', 7), to('xh', 7), to('xog', 7), to('da', 8), to('is', 9), to('mk', 10), to('ceb', 11), to('fil', 11), to('tl', 11), to('lv', 12), to('prg', 12), to('lag', 13), to('ksh', 14), to('blo', 15), to('he', 16), to('iw', 16), to('iu', 17), to('naq', 17), to('sat', 17), to('se', 17), to('sma', 17), to('smi', 17), to('smj', 17), to('smn', 17), to('sms', 17), to('shi', 18), to('mo', 19), to('ro', 19), to('bs', 20), to('hr', 20), to('sh', 20), to('sr', 20), to('fr', 21), to('pt', 22), to('ca', 23), to('it', 23), to('pt_PT', 23), to('vec', 23), to('es', 24), to('gd', 25), to('sl', 26), to('dsb', 27), to('hsb', 27), to('cs', 28), to('sk', 28), to('pl', 29), to('be', 30), to('lt', 31), to('ru', 32), to('uk', 32), to('br', 33), to('mt', 34), to('ga', 35), to('gv', 36), to('kw', 37), to('ar', 38), to('ars', 38), to('cy', 39)]);
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = [to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = [to(PluralCategory_ONE_getInstance(), 'i = 0 or n = 1'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = [to(PluralCategory_ONE_getInstance(), 'i = 0,1'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_2 = [to(PluralCategory_ONE_getInstance(), 'i = 1 and v = 0'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = [to(PluralCategory_ONE_getInstance(), 'n = 0,1 or i = 0 and f = 1'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_4 = [to(PluralCategory_ONE_getInstance(), 'n = 0..1'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_5 = [to(PluralCategory_ONE_getInstance(), 'n = 0..1 or n = 11..99'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_6 = [to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_7 = [to(PluralCategory_ONE_getInstance(), 'n = 1 or t != 0 and i = 0,1'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_8 = [to(PluralCategory_ONE_getInstance(), 't = 0 and i % 10 = 1 and i % 100 != 11 or t % 10 = 1 and t % 100 != 11'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_9 = [to(PluralCategory_ONE_getInstance(), 'v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_10 = [to(PluralCategory_ONE_getInstance(), 'v = 0 and i = 1,2,3 or v = 0 and i % 10 != 4,6,9 or v != 0 and f % 10 != 4,6,9'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_11 = [to(PluralCategory_ZERO_getInstance(), 'n % 10 = 0 or n % 100 = 11..19 or v = 2 and f % 100 = 11..19'), to(PluralCategory_ONE_getInstance(), 'n % 10 = 1 and n % 100 != 11 or v = 2 and f % 10 = 1 and f % 100 != 11 or v != 2 and f % 10 = 1'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_12 = [to(PluralCategory_ZERO_getInstance(), 'n = 0'), to(PluralCategory_ONE_getInstance(), 'i = 0,1 and n != 0'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_13 = [to(PluralCategory_ZERO_getInstance(), 'n = 0'), to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_14 = [to(PluralCategory_ZERO_getInstance(), 'n = 0'), to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_15 = [to(PluralCategory_ONE_getInstance(), 'i = 1 and v = 0 or i = 0 and v != 0'), to(PluralCategory_TWO_getInstance(), 'i = 2 and v = 0'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_16 = [to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_TWO_getInstance(), 'n = 2'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_17 = [to(PluralCategory_ONE_getInstance(), 'i = 0 or n = 1'), to(PluralCategory_FEW_getInstance(), 'n = 2..10'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_18 = [to(PluralCategory_ONE_getInstance(), 'i = 1 and v = 0'), to(PluralCategory_FEW_getInstance(), 'v != 0 or n = 0 or n != 1 and n % 100 = 1..19'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_19 = [to(PluralCategory_ONE_getInstance(), 'v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11'), to(PluralCategory_FEW_getInstance(), 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_20 = [to(PluralCategory_ONE_getInstance(), 'i = 0,1'), to(PluralCategory_MANY_getInstance(), 'e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_21 = [to(PluralCategory_ONE_getInstance(), 'i = 0..1'), to(PluralCategory_MANY_getInstance(), 'e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_22 = [to(PluralCategory_ONE_getInstance(), 'i = 1 and v = 0'), to(PluralCategory_MANY_getInstance(), 'e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_23 = [to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_MANY_getInstance(), 'e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_24 = [to(PluralCategory_ONE_getInstance(), 'n = 1,11'), to(PluralCategory_TWO_getInstance(), 'n = 2,12'), to(PluralCategory_FEW_getInstance(), 'n = 3..10,13..19'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_25 = [to(PluralCategory_ONE_getInstance(), 'v = 0 and i % 100 = 1'), to(PluralCategory_TWO_getInstance(), 'v = 0 and i % 100 = 2'), to(PluralCategory_FEW_getInstance(), 'v = 0 and i % 100 = 3..4 or v != 0'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_26 = [to(PluralCategory_ONE_getInstance(), 'v = 0 and i % 100 = 1 or f % 100 = 1'), to(PluralCategory_TWO_getInstance(), 'v = 0 and i % 100 = 2 or f % 100 = 2'), to(PluralCategory_FEW_getInstance(), 'v = 0 and i % 100 = 3..4 or f % 100 = 3..4'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_27 = [to(PluralCategory_ONE_getInstance(), 'i = 1 and v = 0'), to(PluralCategory_FEW_getInstance(), 'i = 2..4 and v = 0'), to(PluralCategory_MANY_getInstance(), 'v != 0'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_28 = [to(PluralCategory_ONE_getInstance(), 'i = 1 and v = 0'), to(PluralCategory_FEW_getInstance(), 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14'), to(PluralCategory_MANY_getInstance(), 'v = 0 and i != 1 and i % 10 = 0..1 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 12..14'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_29 = [to(PluralCategory_ONE_getInstance(), 'n % 10 = 1 and n % 100 != 11'), to(PluralCategory_FEW_getInstance(), 'n % 10 = 2..4 and n % 100 != 12..14'), to(PluralCategory_MANY_getInstance(), 'n % 10 = 0 or n % 10 = 5..9 or n % 100 = 11..14'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_30 = [to(PluralCategory_ONE_getInstance(), 'n % 10 = 1 and n % 100 != 11..19'), to(PluralCategory_FEW_getInstance(), 'n % 10 = 2..9 and n % 100 != 11..19'), to(PluralCategory_MANY_getInstance(), 'f != 0'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_31 = [to(PluralCategory_ONE_getInstance(), 'v = 0 and i % 10 = 1 and i % 100 != 11'), to(PluralCategory_FEW_getInstance(), 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14'), to(PluralCategory_MANY_getInstance(), 'v = 0 and i % 10 = 0 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 11..14'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_32 = [to(PluralCategory_ONE_getInstance(), 'n % 10 = 1 and n % 100 != 11,71,91'), to(PluralCategory_TWO_getInstance(), 'n % 10 = 2 and n % 100 != 12,72,92'), to(PluralCategory_FEW_getInstance(), 'n % 10 = 3..4,9 and n % 100 != 10..19,70..79,90..99'), to(PluralCategory_MANY_getInstance(), 'n != 0 and n % 1000000 = 0'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_33 = [to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_TWO_getInstance(), 'n = 2'), to(PluralCategory_FEW_getInstance(), 'n = 0 or n % 100 = 3..10'), to(PluralCategory_MANY_getInstance(), 'n % 100 = 11..19'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_34 = [to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_TWO_getInstance(), 'n = 2'), to(PluralCategory_FEW_getInstance(), 'n = 3..6'), to(PluralCategory_MANY_getInstance(), 'n = 7..10'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_35 = [to(PluralCategory_ONE_getInstance(), 'v = 0 and i % 10 = 1'), to(PluralCategory_TWO_getInstance(), 'v = 0 and i % 10 = 2'), to(PluralCategory_FEW_getInstance(), 'v = 0 and i % 100 = 0,20,40,60,80'), to(PluralCategory_MANY_getInstance(), 'v != 0'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_36 = [to(PluralCategory_ZERO_getInstance(), 'n = 0'), to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_TWO_getInstance(), 'n % 100 = 2,22,42,62,82 or n % 1000 = 0 and n % 100000 = 1000..20000,40000,60000,80000 or n != 0 and n % 1000000 = 100000'), to(PluralCategory_FEW_getInstance(), 'n % 100 = 3,23,43,63,83'), to(PluralCategory_MANY_getInstance(), 'n != 1 and n % 100 = 1,21,41,61,81'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_37 = [to(PluralCategory_ZERO_getInstance(), 'n = 0'), to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_TWO_getInstance(), 'n = 2'), to(PluralCategory_FEW_getInstance(), 'n % 100 = 3..10'), to(PluralCategory_MANY_getInstance(), 'n % 100 = 11..99'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      cldrPluralRuleLists = [tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, tmp_20, tmp_21, tmp_22, tmp_23, tmp_24, tmp_25, tmp_26, tmp_27, tmp_28, tmp_29, tmp_30, tmp_31, tmp_32, tmp_33, tmp_34, tmp_35, tmp_36, tmp_37, [to(PluralCategory_ZERO_getInstance(), 'n = 0'), to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_TWO_getInstance(), 'n = 2'), to(PluralCategory_FEW_getInstance(), 'n = 3'), to(PluralCategory_MANY_getInstance(), 'n = 6'), to(PluralCategory_OTHER_getInstance(), '')]];
    }
  }
  var PluralCategory_ZERO_instance;
  var PluralCategory_ONE_instance;
  var PluralCategory_TWO_instance;
  var PluralCategory_FEW_instance;
  var PluralCategory_MANY_instance;
  var PluralCategory_OTHER_instance;
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).fromString_g5hge7_k$ = function (name) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = get_entries_1().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'org.jetbrains.compose.resources.plural.Companion.fromString.<anonymous>' call
        if (equals_0(element.get_name_woqyms_k$(), name, true)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  var Companion_instance_1;
  function Companion_getInstance_3() {
    PluralCategory_initEntries();
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function values_1() {
    return [PluralCategory_ZERO_getInstance(), PluralCategory_ONE_getInstance(), PluralCategory_TWO_getInstance(), PluralCategory_FEW_getInstance(), PluralCategory_MANY_getInstance(), PluralCategory_OTHER_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'ZERO':
        return PluralCategory_ZERO_getInstance();
      case 'ONE':
        return PluralCategory_ONE_getInstance();
      case 'TWO':
        return PluralCategory_TWO_getInstance();
      case 'FEW':
        return PluralCategory_FEW_getInstance();
      case 'MANY':
        return PluralCategory_MANY_getInstance();
      case 'OTHER':
        return PluralCategory_OTHER_getInstance();
      default:
        PluralCategory_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var PluralCategory_entriesInitialized;
  function PluralCategory_initEntries() {
    if (PluralCategory_entriesInitialized)
      return Unit_getInstance();
    PluralCategory_entriesInitialized = true;
    PluralCategory_ZERO_instance = new PluralCategory('ZERO', 0);
    PluralCategory_ONE_instance = new PluralCategory('ONE', 1);
    PluralCategory_TWO_instance = new PluralCategory('TWO', 2);
    PluralCategory_FEW_instance = new PluralCategory('FEW', 3);
    PluralCategory_MANY_instance = new PluralCategory('MANY', 4);
    PluralCategory_OTHER_instance = new PluralCategory('OTHER', 5);
    Companion_getInstance_3();
  }
  var $ENTRIES_1;
  function PluralCategory(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PluralCategory_ZERO_getInstance() {
    PluralCategory_initEntries();
    return PluralCategory_ZERO_instance;
  }
  function PluralCategory_ONE_getInstance() {
    PluralCategory_initEntries();
    return PluralCategory_ONE_instance;
  }
  function PluralCategory_TWO_getInstance() {
    PluralCategory_initEntries();
    return PluralCategory_TWO_instance;
  }
  function PluralCategory_FEW_getInstance() {
    PluralCategory_initEntries();
    return PluralCategory_FEW_instance;
  }
  function PluralCategory_MANY_getInstance() {
    PluralCategory_initEntries();
    return PluralCategory_MANY_instance;
  }
  function PluralCategory_OTHER_getInstance() {
    PluralCategory_initEntries();
    return PluralCategory_OTHER_instance;
  }
  function getSystemEnvironment() {
    var locale = new Intl.Locale(window.navigator.language);
    var isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dpi = numberToInt(window.devicePixelRatio * 96);
    return new ResourceEnvironment(new LanguageQualifier(locale.language), new RegionQualifier(locale.region), Companion_getInstance_1().selectByValue_7mr6mx_k$(isDarkTheme), Companion_getInstance_2().selectByValue_h7gwd6_k$(dpi));
  }
  function getPlatformResourceReader() {
    return new getPlatformResourceReader$1();
  }
  function readAsBlob($this, path, $completion) {
    var tmp = new $readAsBlobCOROUTINE$2($this, path, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function asByteArray(_this__u8e3s4, $this, $completion) {
    var tmp = new $asByteArrayCOROUTINE$3($this, _this__u8e3s4, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $readCOROUTINE$0(_this__u8e3s4, path, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.path_1 = path;
  }
  protoOf($readCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = readAsBlob(this._this__u8e3s4__1, this.path_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            suspendResult = asByteArray(this.ARGUMENT0__1, this._this__u8e3s4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $readPartCOROUTINE$1(_this__u8e3s4, path, offset, size, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.path_1 = path;
    this.offset_1 = offset;
    this.size_1 = size;
  }
  protoOf($readPartCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = readAsBlob(this._this__u8e3s4__1, this.path_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            this.part1__1 = this.ARGUMENT0__1.slice(this.offset_1.toInt_1tsl84_k$(), this.offset_1.plus_r93sks_k$(this.size_1).toInt_1tsl84_k$());
            this.set_state_rjd8d0_k$(2);
            suspendResult = asByteArray(this.part1__1, this._this__u8e3s4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $readAsBlobCOROUTINE$2(_this__u8e3s4, path, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.path_1 = path;
  }
  protoOf($readAsBlobCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.resPath0__1 = WebResourcesConfiguration_getInstance().get_getResourcePath_p3mxjf_k$()(this.path_1);
            this.set_state_rjd8d0_k$(1);
            suspendResult = await_0(window.fetch(this.resPath0__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.response1__1 = suspendResult;
            if (!this.response1__1.ok) {
              throw new MissingResourceException(this.resPath0__1);
            }

            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(this.response1__1.blob(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $asByteArrayCOROUTINE$3(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this._this__u8e3s4__2 = _this__u8e3s4_0;
  }
  protoOf($asByteArrayCOROUTINE$3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            var tmp_1 = this._this__u8e3s4__2.arrayBuffer();
            tmp_0.buffer0__1 = tmp_1 instanceof Promise ? tmp_1 : THROW_CCE();
            this.set_state_rjd8d0_k$(1);
            suspendResult = await_0(this.buffer0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new Int8Array(ARGUMENT);
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function getPlatformResourceReader$1() {
  }
  protoOf(getPlatformResourceReader$1).read_3sms9f_k$ = function (path, $completion) {
    var tmp = new $readCOROUTINE$0(this, path, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(getPlatformResourceReader$1).readPart_jv4s5i_k$ = function (path, offset, size, $completion) {
    var tmp = new $readPartCOROUTINE$1(this, path, offset, size, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(getPlatformResourceReader$1).getUri_3gtoqs_k$ = function (path) {
    var location = window.location;
    return getResourceUrl(location.origin, location.pathname, path);
  };
  function get_emptyFontBase64() {
    _init_properties_FontResources_skiko_kt__g77iad();
    return emptyFontBase64;
  }
  var emptyFontBase64;
  function get_defaultEmptyFont() {
    _init_properties_FontResources_skiko_kt__g77iad();
    // Inline function 'kotlin.getValue' call
    var this_0 = defaultEmptyFont$delegate;
    defaultEmptyFont$factory();
    return this_0.get_value_j01efc_k$();
  }
  var defaultEmptyFont$delegate;
  function defaultEmptyFont$delegate$lambda() {
    _init_properties_FontResources_skiko_kt__g77iad();
    return Font('org.jetbrains.compose.emptyFont', Default_getInstance().decode$default_mne14l_k$(get_emptyFontBase64()));
  }
  function defaultEmptyFont$factory() {
    return getPropertyCallableRef('defaultEmptyFont', 0, KProperty0, function () {
      return get_defaultEmptyFont();
    }, null);
  }
  var properties_initialized_FontResources_skiko_kt_wwtlnx;
  function _init_properties_FontResources_skiko_kt__g77iad() {
    if (!properties_initialized_FontResources_skiko_kt_wwtlnx) {
      properties_initialized_FontResources_skiko_kt_wwtlnx = true;
      emptyFontBase64 = 'T1RUTwAJAIAAAwAQQ0ZGIML7MfIAAAQIAAAA2U9TLzJmMV8PAAABAAAAAGBjbWFwANUAVwAAA6QAAABEaGVhZCMuU7IAAACcAAAANmhoZWECvgAmAAAA1AAAACRobXR4Az4AAAAABOQAAAAQbWF4cAAEUAAAAAD4AAAABm5hbWUpw3nbAAABYAAAAkNwb3N0AAMAAAAAA+gAAAAgAAEAAAABAADs7nftXw889QADA+gAAAAA4WWJaQAAAADhZYlpAAAAAAFNAAAAAAADAAIAAAAAAAAAAQAAArz+1AAAAU0AAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAQAAFAAAAQAAAADAHwB9AAFAAACigK7AAAAjAKKArsAAAHfADEBAgAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAABYWFhYAEAAIABfArz+1AAAAAAAAAAAAAEAAAAAAV4AAAAgACAAAAAAACIBngABAAAAAAAAAAIAbwABAAAAAAABAAUAAAABAAAAAAACAAcADwABAAAAAAADABAAdQABAAAAAAAEAA0AJAABAAAAAAAFAAIAbwABAAAAAAAGAAwASwABAAAAAAAHAAIAbwABAAAAAAAIAAIAbwABAAAAAAAJAAIAbwABAAAAAAAKAAIAbwABAAAAAAALAAIAbwABAAAAAAAMAAIAbwABAAAAAAANAAIAbwABAAAAAAAOAAIAbwABAAAAAAAQAAUAAAABAAAAAAARAAcADwADAAEECQAAAAQAcQADAAEECQABAAoABQADAAEECQACAA4AFgADAAEECQADACAAhQADAAEECQAEABoAMQADAAEECQAFAAQAcQADAAEECQAGABgAVwADAAEECQAHAAQAcQADAAEECQAIAAQAcQADAAEECQAJAAQAcQADAAEECQAKAAQAcQADAAEECQALAAQAcQADAAEECQAMAAQAcQADAAEECQANAAQAcQADAAEECQAOAAQAcQADAAEECQAQAAoABQADAAEECQARAA4AFmVtcHR5AGUAbQBwAHQAeVJlZ3VsYXIAUgBlAGcAdQBsAGEAcmVtcHR5IFJlZ3VsYXIAZQBtAHAAdAB5ACAAUgBlAGcAdQBsAGEAcmVtcHR5UmVndWxhcgBlAG0AcAB0AHkAUgBlAGcAdQBsAGEAciIiACIAIiIiOmVtcHR5IFJlZ3VsYXIAIgAiADoAZQBtAHAAdAB5ACAAUgBlAGcAdQBsAGEAcgAAAAABAAMAAQAAAAwABAA4AAAACgAIAAIAAgAAACAAQQBf//8AAAAAACAAQQBf//8AAP/h/8H/pAABAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEAQABAQENZW1wdHlSZWd1bGFyAAEBASf4GwD4HAL4HQP4HgSLi/lQ9+EFHQAAAHgPHQAAAH8Rix0AAADZEgAHAQEDEBUcISIsIiJlbXB0eSBSZWd1bGFyZW1wdHlSZWd1bGFyc3BhY2VBdW5kZXJzY29yZQAAAAGLAYwBjQAEAQFMT1FT+F2f+TcVi4uL/TeLiwiLi/g1i4uLCIuLi/k3i4sIi4v8NYuLiwi7/QcVi4uL+NeLiwiLi/fUi4uLCIuLi/zXi4sIi4v71IuLiwgO9+EOnw6fDgAAAAHJAAABTQAAABQAAAAUAAA=';
      defaultEmptyFont$delegate = lazy(defaultEmptyFont$delegate$lambda);
    }
  }
  function getResourceUrl(windowOrigin, windowPathname, resourcePath) {
    var path = WebResourcesConfiguration_getInstance().getResourcePath_1(resourcePath);
    return startsWith(path, '/') ? windowOrigin + path : startsWith(path, 'http://') || startsWith(path, 'https://') ? path : windowOrigin + windowPathname + path;
  }
  function WebResourcesConfiguration$getResourcePath$lambda(it) {
    return './' + it;
  }
  function WebResourcesConfiguration() {
    WebResourcesConfiguration_instance = this;
    var tmp = this;
    tmp.getResourcePath_1 = WebResourcesConfiguration$getResourcePath$lambda;
  }
  protoOf(WebResourcesConfiguration).set_getResourcePath_5sasn4_k$ = function (_set____db54di) {
    this.getResourcePath_1 = _set____db54di;
  };
  protoOf(WebResourcesConfiguration).get_getResourcePath_p3mxjf_k$ = function () {
    return this.getResourcePath_1;
  };
  protoOf(WebResourcesConfiguration).resourcePathMapping_vnuvms_k$ = function (map) {
    this.getResourcePath_1 = map;
  };
  var WebResourcesConfiguration_instance;
  function WebResourcesConfiguration_getInstance() {
    if (WebResourcesConfiguration_instance == null)
      new WebResourcesConfiguration();
    return WebResourcesConfiguration_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = readResourceBytes;
  _.$_$.b = getResourceUri;
  //endregion
  return _;
}));

//# sourceMappingURL=components-resources-library.js.map
