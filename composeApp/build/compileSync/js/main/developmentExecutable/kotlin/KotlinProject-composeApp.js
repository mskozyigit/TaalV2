(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './components-resources-library.js', './compose-multiplatform-core-compose-material3-material3.js', './compose-multiplatform-core-compose-foundation-foundation-layout.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui-text.js', './compose-multiplatform-core-compose-material-material-icons-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./components-resources-library.js'), require('./compose-multiplatform-core-compose-material3-material3.js'), require('./compose-multiplatform-core-compose-foundation-foundation-layout.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'), require('./compose-multiplatform-core-compose-material-material-icons-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'KotlinProject:composeApp'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'KotlinProject:composeApp'.");
    }
    if (typeof this['components-resources-library'] === 'undefined') {
      throw new Error("Error loading module 'KotlinProject:composeApp'. Its dependency 'components-resources-library' was not found. Please, check whether 'components-resources-library' is loaded prior to 'KotlinProject:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-compose-material3-material3'] === 'undefined') {
      throw new Error("Error loading module 'KotlinProject:composeApp'. Its dependency 'compose-multiplatform-core-compose-material3-material3' was not found. Please, check whether 'compose-multiplatform-core-compose-material3-material3' is loaded prior to 'KotlinProject:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'KotlinProject:composeApp'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation-layout' is loaded prior to 'KotlinProject:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'KotlinProject:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'KotlinProject:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'KotlinProject:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'KotlinProject:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'KotlinProject:composeApp'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'KotlinProject:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'KotlinProject:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'KotlinProject:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'KotlinProject:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'KotlinProject:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-compose-material-material-icons-core'] === 'undefined') {
      throw new Error("Error loading module 'KotlinProject:composeApp'. Its dependency 'compose-multiplatform-core-compose-material-material-icons-core' was not found. Please, check whether 'compose-multiplatform-core-compose-material-material-icons-core' is loaded prior to 'KotlinProject:composeApp'.");
    }
    root['KotlinProject:composeApp'] = factory(typeof this['KotlinProject:composeApp'] === 'undefined' ? {} : this['KotlinProject:composeApp'], this['kotlin-kotlin-stdlib'], this['components-resources-library'], this['compose-multiplatform-core-compose-material3-material3'], this['compose-multiplatform-core-compose-foundation-foundation-layout'], this['compose-multiplatform-core-compose-ui-ui-unit'], this['compose-multiplatform-core-compose-ui-ui'], this['compose-multiplatform-core-compose-runtime-runtime'], this['compose-multiplatform-core-compose-ui-ui-graphics'], this['compose-multiplatform-core-compose-ui-ui-text'], this['compose-multiplatform-core-compose-material-material-icons-core']);
  }
}(globalThis, function (_, kotlin_kotlin, kotlin_components_resources_library, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_material_material_icons_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.yd;
  var initMetadataForObject = kotlin_kotlin.$_$.cd;
  var readResourceBytes = kotlin_components_resources_library.$_$.a;
  var getResourceUri = kotlin_components_resources_library.$_$.b;
  var VOID = kotlin_kotlin.$_$.e;
  var MaterialTheme = kotlin_org_jetbrains_compose_material3_material3.$_$.d;
  var listOf = kotlin_kotlin.$_$.i9;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e1;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.v6;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.w6;
  var fillMaxWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.n;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var columnMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.j;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.s6;
  var materializerOf = kotlin_org_jetbrains_compose_ui_ui.$_$.u2;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  var isInterface = kotlin_kotlin.$_$.md;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var equals = kotlin_kotlin.$_$.oc;
  var Unit_getInstance = kotlin_kotlin.$_$.z4;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var ColumnScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.g1;
  var MaterialTheme_getInstance = kotlin_org_jetbrains_compose_material3_material3.$_$.i;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.u;
  var Long = kotlin_kotlin.$_$.jh;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.p3;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r2;
  var _TextUnit___init__impl__r5fj1s = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b3;
  var _TextOverflow___init__impl__obguoe = kotlin_org_jetbrains_compose_ui_ui_text.$_$.c1;
  var Text = kotlin_org_jetbrains_compose_material3_material3.$_$.f;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var THROW_CCE = kotlin_kotlin.$_$.qh;
  var height = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.p;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var Button = kotlin_org_jetbrains_compose_material3_material3.$_$.a;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.m;
  var padding_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.s;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.q1;
  var Filled_getInstance = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.b;
  var get_Home = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.a;
  var Icon = kotlin_org_jetbrains_compose_material3_material3.$_$.c;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var _FabPosition___init__impl__9ib2hj = kotlin_org_jetbrains_compose_material3_material3.$_$.h;
  var Scaffold = kotlin_org_jetbrains_compose_material3_material3.$_$.e;
  var KMutableProperty0 = kotlin_kotlin.$_$.af;
  var THROW_ISE = kotlin_kotlin.$_$.sh;
  var getLocalDelegateReference = kotlin_kotlin.$_$.sc;
  var IconButton = kotlin_org_jetbrains_compose_material3_material3.$_$.b;
  var TopAppBarDefaults_getInstance = kotlin_org_jetbrains_compose_material3_material3.$_$.j;
  var TopAppBar = kotlin_org_jetbrains_compose_material3_material3.$_$.g;
  var padding_1 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.t;
  var ensureNotNull = kotlin_kotlin.$_$.ji;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var CanvasBasedWindow = kotlin_org_jetbrains_compose_ui_ui.$_$.l5;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(drawable, 'drawable');
  initMetadataForObject(string, 'string');
  initMetadataForObject(array, 'array');
  initMetadataForObject(plurals, 'plurals');
  initMetadataForObject(font, 'font');
  initMetadataForObject(Res, 'Res', VOID, VOID, VOID, [1]);
  initMetadataForObject(ComposableSingletons$AppKt, 'ComposableSingletons$AppKt');
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  //endregion
  var kotlinproject_composeapp_generated_resources_Res_drawable$stable;
  var kotlinproject_composeapp_generated_resources_Res_string$stable;
  var kotlinproject_composeapp_generated_resources_Res_array$stable;
  var kotlinproject_composeapp_generated_resources_Res_plurals$stable;
  var kotlinproject_composeapp_generated_resources_Res_font$stable;
  var kotlinproject_composeapp_generated_resources_Res$stable;
  function drawable() {
    drawable_instance = this;
  }
  var drawable_instance;
  function drawable_getInstance() {
    if (drawable_instance == null)
      new drawable();
    return drawable_instance;
  }
  function string() {
    string_instance = this;
  }
  var string_instance;
  function string_getInstance() {
    if (string_instance == null)
      new string();
    return string_instance;
  }
  function array() {
    array_instance = this;
  }
  var array_instance;
  function array_getInstance() {
    if (array_instance == null)
      new array();
    return array_instance;
  }
  function plurals() {
    plurals_instance = this;
  }
  var plurals_instance;
  function plurals_getInstance() {
    if (plurals_instance == null)
      new plurals();
    return plurals_instance;
  }
  function font() {
    font_instance = this;
  }
  var font_instance;
  function font_getInstance() {
    if (font_instance == null)
      new font();
    return font_instance;
  }
  function Res() {
    Res_instance = this;
  }
  protoOf(Res).readBytes_74yvde_k$ = function (path, $completion) {
    return readResourceBytes('composeResources/kotlinproject.composeapp.generated.resources/' + path, $completion);
  };
  protoOf(Res).getUri_3gtoqs_k$ = function (path) {
    return getResourceUri('composeResources/kotlinproject.composeapp.generated.resources/' + path);
  };
  var Res_instance;
  function Res_getInstance() {
    if (Res_instance == null)
      new Res();
    return Res_instance;
  }
  function App($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1359525739);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      MaterialTheme(null, null, null, ComposableSingletons$AppKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 3072, 7);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(App$lambda($changed));
    }
  }
  function LanguageLevelMenu(onLevelSelected, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(467677170);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onLevelSelected) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      var levels = listOf(['A1 - Beginner', 'A2 - Elementair', 'B1 - Gevorderd', 'B2 - Vergevorderd', 'C1 - Expert', 'C2 - Meester']);
      var tmp = Arrangement_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
      var tmp6_verticalArrangement = tmp.spacedBy_wt7oji_k$(tmp$ret$0);
      var tmp7_horizontalAlignment = Companion_getInstance().get_CenterHorizontally_97ab0v_k$();
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = fillMaxWidth(Companion_getInstance_0());
      var verticalArrangement = tmp6_verticalArrangement;
      var horizontalAlignment = tmp7_horizontalAlignment;
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-483455358);
      sourceInformation($composer_1, 'CC(Column)P(2,3,1)78@3944L61,79@4010L133:Column.kt#2w3rfo');
      if (!((0 & 1) === 0))
        modifier = Companion_getInstance_0();
      if (!((0 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((0 & 4) === 0))
        horizontalAlignment = Companion_getInstance().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 438 >> 3 | 112 & 438 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $changed_0 = 112 & 438 << 3;
      var modifier_1 = modifier_0;
      var $composer_2 = $composer_1;
      $composer_2.startReplaceableGroup_ip860b_k$(-1323940314);
      sourceInformation($composer_2, 'CC(Layout)P(!1,2)79@3208L23,81@3298L420:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_1 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_1().get_Constructor_f7ieep_k$();
      var skippableUpdate = materializerOf(modifier_1);
      var $changed_1 = 6 | 7168 & $changed_0 << 9;
      var $composer_3 = $composer_2;
      var tmp_0 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_0, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(factory);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_1().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
      }
      skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_1 >> 3);
      $composer_3.startReplaceableGroup_ip860b_k$(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -385166937, 'C80@4058L9:Column.kt#2w3rfo');
      // Inline function 'org.example.project.LanguageLevelMenu.<anonymous>' call
      ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      var tmp4_style = MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_5, 0).get_headlineMedium_mllw1e_k$();
      var tmp_1 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$3 = _Dp___init__impl__ms3zkb(32);
      var tmp5_modifier = padding(tmp_1, VOID, VOID, VOID, tmp$ret$3);
      var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_6 = _TextOverflow___init__impl__obguoe(0);
      Text('Kies uw niveau', tmp5_modifier, tmp_2, tmp_3, null, null, null, tmp_4, null, null, tmp_5, tmp_6, false, 0, 0, null, tmp4_style, $composer_5, 54, 0, 65532);
      $composer_5.startReplaceableGroup_ip860b_k$(748544234);
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = levels.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'org.example.project.LanguageLevelMenu.<anonymous>.<anonymous>' call
        $composer_5.startReplaceableGroup_ip860b_k$(-2019149984);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!(($dirty & 14) === 4 | $composer_0.changed_ga7h3f_k$(element));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_5.rememberedValue_4dg93v_k$();
        var tmp_7;
        if (invalid || it === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          // Inline function 'org.example.project.LanguageLevelMenu.<anonymous>.<anonymous>.<anonymous>' call
          var value = LanguageLevelMenu$lambda(onLevelSelected, element);
          $composer_5.updateRememberedValue_l1wh71_k$(value);
          tmp_7 = value;
        } else {
          tmp_7 = it;
        }
        var tmp_8 = tmp_7;
        var tmp0_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        $composer_5.endReplaceableGroup_ern0ak_k$();
        var tmp_9 = fillMaxWidth(Companion_getInstance_0(), 0.8);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$8 = _Dp___init__impl__ms3zkb(72);
        var tmp_10 = height(tmp_9, tmp$ret$8);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.project.LanguageLevelMenu.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_11 = $composer_5;
        var dispatchReceiver = composableLambda(tmp_11, -1788019364, true, LanguageLevelMenu$lambda_0(element));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_6 = $composer_5;
        $composer_6.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_6, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_6.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_6.rememberedValue_4dg93v_k$();
        var tmp_12;
        if (invalid_0 || it_0 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          // Inline function 'org.example.project.LanguageLevelMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_5(dispatchReceiver);
          $composer_6.updateRememberedValue_l1wh71_k$(value_0);
          tmp_12 = value_0;
        } else {
          tmp_12 = it_0;
        }
        var tmp_13 = tmp_12;
        var tmp0 = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
        $composer_6.endReplaceableGroup_ern0ak_k$();
        Button(tmp0_group, tmp_10, false, null, null, null, null, null, null, tmp0, $composer_5, 805306416, 508);
      }
      $composer_5.endReplaceableGroup_ern0ak_k$();
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endReplaceableGroup_ern0ak_k$();
      $composer_3.endNode_3m0yfn_k$();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      $composer_1.endReplaceableGroup_ern0ak_k$();
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(LanguageLevelMenu$lambda_1(onLevelSelected, $changed));
    }
  }
  function LevelDetailScreen(level, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1288744317);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(level) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      var tmp14_modifier = fillMaxSize(modifier_0._v);
      var tmp15_horizontalAlignment = Companion_getInstance().get_CenterHorizontally_97ab0v_k$();
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = tmp14_modifier;
      var verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      var horizontalAlignment = tmp15_horizontalAlignment;
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-483455358);
      sourceInformation($composer_1, 'CC(Column)P(2,3,1)78@3944L61,79@4010L133:Column.kt#2w3rfo');
      if (!((0 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((0 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((0 & 4) === 0))
        horizontalAlignment = Companion_getInstance().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 432 >> 3 | 112 & 432 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $changed_0 = 112 & 432 << 3;
      var modifier_3 = modifier_2;
      var $composer_2 = $composer_1;
      $composer_2.startReplaceableGroup_ip860b_k$(-1323940314);
      sourceInformation($composer_2, 'CC(Layout)P(!1,2)79@3208L23,81@3298L420:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_3 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_1().get_Constructor_f7ieep_k$();
      var skippableUpdate = materializerOf(modifier_3);
      var $changed_1 = 6 | 7168 & $changed_0 << 9;
      var $composer_3 = $composer_2;
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(factory);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_1().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
      }
      skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_1 >> 3);
      $composer_3.startReplaceableGroup_ip860b_k$(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -385166937, 'C80@4058L9:Column.kt#2w3rfo');
      // Inline function 'org.example.project.LevelDetailScreen.<anonymous>' call
      ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      var tmp9_style = MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_5, 0).get_headlineLarge_nmi9we_k$();
      var tmp_0 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(16);
      var tmp10_modifier = padding_0(tmp_0, tmp$ret$2);
      var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_5 = _TextOverflow___init__impl__obguoe(0);
      Text(level, tmp10_modifier, tmp_1, tmp_2, null, null, null, tmp_3, null, null, tmp_4, tmp_5, false, 0, 0, null, tmp9_style, $composer_5, 48 | 14 & $dirty, 0, 65532);
      var tmp11_style = MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_5, 0).get_bodyLarge_sxra4w_k$();
      var tmp_6 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$3 = _Dp___init__impl__ms3zkb(16);
      var tmp12_modifier = padding_0(tmp_6, tmp$ret$3);
      var tmp13_textAlign = Companion_getInstance_3().get_Center_fp5t1o_k$();
      var tmp_7 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_8 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_9 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_10 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_11 = _TextOverflow___init__impl__obguoe(0);
      Text('Inhoud voor dit niveau wordt binnenkort toegevoegd.', tmp12_modifier, tmp_7, tmp_8, null, null, null, tmp_9, null, tmp13_textAlign, tmp_10, tmp_11, false, 0, 0, null, tmp11_style, $composer_5, 54, 0, 65020);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endReplaceableGroup_ern0ak_k$();
      $composer_3.endNode_3m0yfn_k$();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      $composer_1.endReplaceableGroup_ern0ak_k$();
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(LevelDetailScreen$lambda(level, modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$AppKt$lambda_1$lambda_ua4ft5($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('TaalV2', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$AppKt$lambda_2$lambda_1ghyqy($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = get_Home(Filled_getInstance());
      Icon(tmp, 'Home', null, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 48, 12);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$AppKt$lambda_3$lambda_rd4ib9($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startReplaceableGroup_ip860b_k$(-567239738);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
        // Inline function 'org.example.project.ComposableSingletons$AppKt.lambda-3.<anonymous>.<anonymous>' call
        var value = mutableStateOf(null);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var selectedLevel$delegate = tmp0_group;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.project.ComposableSingletons$AppKt.lambda-3.<anonymous>.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 2087744251, true, ComposableSingletons$AppKt$lambda_3$lambda$lambda_69kfai(selectedLevel$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
        // Inline function 'org.example.project.ComposableSingletons$AppKt.lambda-3.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_3(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      var tmp_4 = tmp0;
      var tmp_5 = _FabPosition___init__impl__9ib2hj(0);
      var tmp_6 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_7 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.example.project.ComposableSingletons$AppKt.lambda-3.<anonymous>.<anonymous>' call
      var tmp_8 = $composer_0;
      var dispatchReceiver_0 = composableLambda(tmp_8, 217424592, true, ComposableSingletons$AppKt$lambda_3$lambda$lambda_69kfai_0(selectedLevel$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (invalid_0 || it_1 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
        // Inline function 'org.example.project.ComposableSingletons$AppKt.lambda-3.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_4(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_9 = value_1;
      } else {
        tmp_9 = it_1;
      }
      var tmp_10 = tmp_9;
      var tmp0_0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      Scaffold(null, tmp_4, null, null, null, tmp_5, tmp_6, tmp_7, null, tmp0_0, $composer_0, 805306416, 509);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function invoke$lambda($selectedLevel$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('selectedLevel', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $selectedLevel$delegate.get_value_j01efc_k$();
  }
  function invoke$lambda_0($selectedLevel$delegate, _set____db54di) {
    getLocalDelegateReference('selectedLevel', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $selectedLevel$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ComposableSingletons$AppKt$lambda_3$lambda$lambda$lambda$lambda_ry2oui($selectedLevel$delegate) {
    return function () {
      invoke$lambda_0($selectedLevel$delegate, null);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda_3$lambda$lambda$lambda_f1wo7p($selectedLevel$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        if (!(invoke$lambda($selectedLevel$delegate) == null)) {
          $composer_0.startReplaceableGroup_ip860b_k$(-1606120910);
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_0.rememberedValue_4dg93v_k$();
          var tmp_0;
          if (false || it === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
            // Inline function 'org.example.project.ComposableSingletons$AppKt.lambda-3.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = ComposableSingletons$AppKt$lambda_3$lambda$lambda$lambda$lambda_ry2oui($selectedLevel$delegate);
            $composer_0.updateRememberedValue_l1wh71_k$(value);
            tmp_0 = value;
          } else {
            tmp_0 = it;
          }
          var tmp_1 = tmp_0;
          var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
          $composer_0.endReplaceableGroup_ern0ak_k$();
          IconButton(tmp0_group, null, false, null, null, ComposableSingletons$AppKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 196614, 30);
        }
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$AppKt$lambda_3$lambda$lambda_69kfai($selectedLevel$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = TopAppBarDefaults_getInstance();
        var tmp_1 = MaterialTheme_getInstance().get_colorScheme_hfp9ie_k$($composer_0, 0).get_primaryContainer_7luo29_k$();
        var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_4 = MaterialTheme_getInstance().get_colorScheme_hfp9ie_k$($composer_0, 0).get_primary_gfn28_k$();
        var tmp0_colors = tmp_0.topAppBarColors_gcslxz_k$(tmp_1, tmp_2, tmp_3, tmp_4, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 22);
        var tmp_5 = ComposableSingletons$AppKt_getInstance().lambda_1_r8sbbp_1;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.example.project.ComposableSingletons$AppKt.lambda-3.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_6 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_6, -1558433983, true, ComposableSingletons$AppKt$lambda_3$lambda$lambda$lambda_f1wo7p($selectedLevel$delegate));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_7;
        if (invalid || it === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          // Inline function 'org.example.project.ComposableSingletons$AppKt.lambda-3.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_7 = value;
        } else {
          tmp_7 = it;
        }
        var tmp_8 = tmp_7;
        var tmp0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        var tmp_9 = tmp0;
        TopAppBar(tmp_5, null, tmp_9, null, null, tmp0_colors, null, $composer_0, 390, 90);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$AppKt$lambda_3$lambda$lambda$lambda_f1wo7p_0($selectedLevel$delegate) {
    return function (it) {
      invoke$lambda_0($selectedLevel$delegate, it);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$AppKt$lambda_3$lambda$lambda_69kfai_0($selectedLevel$delegate) {
    return function (innerPadding, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(innerPadding) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_1 = padding_1(fillMaxSize(Companion_getInstance_0()), innerPadding);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
        var tmp1_modifier = padding_0(tmp_1, tmp$ret$0);
        var tmp2_horizontalAlignment = Companion_getInstance().get_CenterHorizontally_97ab0v_k$();
        var modifier = tmp1_modifier;
        var verticalArrangement = Arrangement_getInstance().get_Center_3arb0i_k$();
        var horizontalAlignment = tmp2_horizontalAlignment;
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-483455358);
        sourceInformation($composer_1, 'CC(Column)P(2,3,1)78@3944L61,79@4010L133:Column.kt#2w3rfo');
        if (!((0 & 1) === 0))
          modifier = Companion_getInstance_0();
        if (!((0 & 2) === 0))
          verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
        if (!((0 & 4) === 0))
          horizontalAlignment = Companion_getInstance().get_Start_ih4i6x_k$();
        var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 432 >> 3 | 112 & 432 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $changed_0 = 112 & 432 << 3;
        var modifier_1 = modifier_0;
        var $composer_2 = $composer_1;
        $composer_2.startReplaceableGroup_ip860b_k$(-1323940314);
        sourceInformation($composer_2, 'CC(Layout)P(!1,2)79@3208L23,81@3298L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_1 = Companion_getInstance_0();
        var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
        var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var factory = Companion_getInstance_1().get_Constructor_f7ieep_k$();
        var skippableUpdate = materializerOf(modifier_1);
        var $changed_1 = 6 | 7168 & $changed_0 << 9;
        var $composer_3 = $composer_2;
        var tmp_2 = $composer_3.get_applier_bupu8u_k$();
        if (!isInterface(tmp_2, Applier)) {
          invalidApplier();
        }
        $composer_3.startReusableNode_jjgeyp_k$();
        if ($composer_3.get_inserting_25mlsw_k$()) {
          $composer_3.createNode_ahrd54_k$(factory);
        } else {
          $composer_3.useNode_io5s9l_k$();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().get_SetResolvedCompositionLocals_rc2u9t_k$());
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_1().get_SetCompositeKeyHash_n8lgg1_k$();
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.get_inserting_25mlsw_k$() || !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
          $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
        }
        skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_1 >> 3);
        $composer_3.startReplaceableGroup_ip860b_k$(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -385166937, 'C80@4058L9:Column.kt#2w3rfo');
        // Inline function 'org.example.project.ComposableSingletons$AppKt.lambda-3.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        ColumnScopeInstance_getInstance();
        var $composer_5 = $composer_4;
        if (invoke$lambda($selectedLevel$delegate) == null) {
          $composer_5.startReplaceableGroup_ip860b_k$(1750462821);
          $composer_5.startReplaceableGroup_ip860b_k$(-1606099664);
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_5.rememberedValue_4dg93v_k$();
          var tmp_3;
          if (false || it === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
            // Inline function 'org.example.project.ComposableSingletons$AppKt.lambda-3.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = ComposableSingletons$AppKt$lambda_3$lambda$lambda$lambda_f1wo7p_0($selectedLevel$delegate);
            $composer_5.updateRememberedValue_l1wh71_k$(value);
            tmp_3 = value;
          } else {
            tmp_3 = it;
          }
          var tmp_4 = tmp_3;
          var tmp0_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
          $composer_5.endReplaceableGroup_ern0ak_k$();
          LanguageLevelMenu(tmp0_group, $composer_5, 6);
          $composer_5.endReplaceableGroup_ern0ak_k$();
        } else {
          $composer_5.startReplaceableGroup_ip860b_k$(1750566454);
          var tmp_5 = ensureNotNull(invoke$lambda($selectedLevel$delegate));
          LevelDetailScreen(tmp_5, null, $composer_5, 0, 2);
          $composer_5.endReplaceableGroup_ern0ak_k$();
        }
        sourceInformationMarkerEnd($composer_4);
        $composer_3.endReplaceableGroup_ern0ak_k$();
        $composer_3.endNode_3m0yfn_k$();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        tmp_0 = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AppKt() {
    ComposableSingletons$AppKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(211037631, false, ComposableSingletons$AppKt$lambda_1$lambda_ua4ft5));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-99751111, false, ComposableSingletons$AppKt$lambda_2$lambda_1ghyqy));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(-419397569, false, ComposableSingletons$AppKt$lambda_3$lambda_rd4ib9));
  }
  protoOf(ComposableSingletons$AppKt).get_lambda_1_petan0_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda_2_v7o5lp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda_3_y0l1eq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  var ComposableSingletons$AppKt_instance;
  function ComposableSingletons$AppKt_getInstance() {
    if (ComposableSingletons$AppKt_instance == null)
      new ComposableSingletons$AppKt();
    return ComposableSingletons$AppKt_instance;
  }
  function App$lambda($$changed) {
    return function ($composer, $force) {
      App($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function LanguageLevelMenu$lambda($onLevelSelected, $level) {
    return function () {
      $onLevelSelected($level);
      return Unit_getInstance();
    };
  }
  function LanguageLevelMenu$lambda_0($level) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_4 = _TextOverflow___init__impl__obguoe(0);
        Text($level, null, tmp_0, tmp_1, null, null, null, tmp_2, null, null, tmp_3, tmp_4, false, 0, 0, null, MaterialTheme_getInstance().get_typography_xjkk5b_k$($composer_0, 0).get_titleLarge_l89m4s_k$(), $composer_0, 0, 0, 65534);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function LanguageLevelMenu$lambda_1($onLevelSelected, $$changed) {
    return function ($composer, $force) {
      LanguageLevelMenu($onLevelSelected, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function LevelDetailScreen$lambda($level, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      LevelDetailScreen($level, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function main() {
    CanvasBasedWindow('KotlinProject', VOID, VOID, VOID, ComposableSingletons$MainKt_getInstance().lambda_1_r8sbbp_1);
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('Hello World', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(370242225, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda_1_petan0_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function mainWrapper() {
    main();
  }
  //region block: init
  kotlinproject_composeapp_generated_resources_Res_drawable$stable = 0;
  kotlinproject_composeapp_generated_resources_Res_string$stable = 0;
  kotlinproject_composeapp_generated_resources_Res_array$stable = 0;
  kotlinproject_composeapp_generated_resources_Res_plurals$stable = 0;
  kotlinproject_composeapp_generated_resources_Res_font$stable = 0;
  kotlinproject_composeapp_generated_resources_Res$stable = 0;
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=KotlinProject-composeApp.js.map
