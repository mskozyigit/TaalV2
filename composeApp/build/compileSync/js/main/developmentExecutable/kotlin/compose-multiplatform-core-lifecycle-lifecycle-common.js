(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-common'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-common'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-common'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-common'.");
    }
    if (typeof this['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-common'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-common'.");
    }
    root['compose-multiplatform-core-lifecycle-lifecycle-common'] = factory(typeof this['compose-multiplatform-core-lifecycle-lifecycle-common'] === 'undefined' ? {} : this['compose-multiplatform-core-lifecycle-lifecycle-common'], this['kotlin-kotlin-stdlib'], this['kotlinx-coroutines-core'], this['kotlinx-atomicfu']);
  }
}(globalThis, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.yd;
  var initMetadataForInterface = kotlin_kotlin.$_$.ad;
  var VOID = kotlin_kotlin.$_$.e;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var initMetadataForClass = kotlin_kotlin.$_$.xc;
  var initMetadataForCompanion = kotlin_kotlin.$_$.yc;
  var THROW_IAE = kotlin_kotlin.$_$.rh;
  var enumEntries = kotlin_kotlin.$_$.ac;
  var Unit_getInstance = kotlin_kotlin.$_$.z4;
  var Enum = kotlin_kotlin.$_$.eh;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var isInterface = kotlin_kotlin.$_$.md;
  var THROW_CCE = kotlin_kotlin.$_$.qh;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.s1;
  var replace = kotlin_kotlin.$_$.gg;
  var initMetadataForObject = kotlin_kotlin.$_$.cd;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(LifecycleObserver, 'LifecycleObserver');
  function onCreate(owner) {
  }
  function onStart(owner) {
  }
  function onResume(owner) {
  }
  function onPause(owner) {
  }
  function onStop(owner) {
  }
  function onDestroy(owner) {
  }
  initMetadataForInterface(DefaultLifecycleObserver, 'DefaultLifecycleObserver', VOID, VOID, [LifecycleObserver]);
  initMetadataForInterface(LifecycleEventObserver, 'LifecycleEventObserver', VOID, VOID, [LifecycleObserver]);
  initMetadataForClass(DefaultLifecycleObserverAdapter, 'DefaultLifecycleObserverAdapter', VOID, VOID, [LifecycleEventObserver]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(Event, 'Event', VOID, Enum);
  initMetadataForClass(State, 'State', VOID, Enum);
  initMetadataForClass(sam$androidx_lifecycle_LifecycleEventObserver$0, 'sam$androidx_lifecycle_LifecycleEventObserver$0', VOID, VOID, [LifecycleEventObserver]);
  initMetadataForClass(Lifecycle, 'Lifecycle');
  initMetadataForInterface(LifecycleOwner, 'LifecycleOwner');
  initMetadataForClass(AtomicReference, 'AtomicReference');
  initMetadataForObject(Lifecycling, 'Lifecycling');
  //endregion
  function DefaultLifecycleObserver() {
  }
  function _get_defaultLifecycleObserver__ot7r0s($this) {
    return $this.defaultLifecycleObserver_1;
  }
  function _get_lifecycleEventObserver__4qumx1($this) {
    return $this.lifecycleEventObserver_1;
  }
  function DefaultLifecycleObserverAdapter(defaultLifecycleObserver, lifecycleEventObserver) {
    this.defaultLifecycleObserver_1 = defaultLifecycleObserver;
    this.lifecycleEventObserver_1 = lifecycleEventObserver;
  }
  protoOf(DefaultLifecycleObserverAdapter).onStateChanged_3qr65s_k$ = function (source, event) {
    switch (event.get_ordinal_ip24qg_k$()) {
      case 0:
        this.defaultLifecycleObserver_1.onCreate_z7qps3_k$(source);
        break;
      case 1:
        this.defaultLifecycleObserver_1.onStart_9ksdtx_k$(source);
        break;
      case 2:
        this.defaultLifecycleObserver_1.onResume_vmdoc2_k$(source);
        break;
      case 3:
        this.defaultLifecycleObserver_1.onPause_s08bd_k$(source);
        break;
      case 4:
        this.defaultLifecycleObserver_1.onStop_k3f0fx_k$(source);
        break;
      case 5:
        this.defaultLifecycleObserver_1.onDestroy_5f5w7x_k$(source);
        break;
      case 6:
        throw IllegalArgumentException_init_$Create$('ON_ANY must not been send by anybody');
    }
    var tmp1_safe_receiver = this.lifecycleEventObserver_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.onStateChanged_3qr65s_k$(source, event);
    }
  };
  var Event_ON_CREATE_instance;
  var Event_ON_START_instance;
  var Event_ON_RESUME_instance;
  var Event_ON_PAUSE_instance;
  var Event_ON_STOP_instance;
  var Event_ON_DESTROY_instance;
  var Event_ON_ANY_instance;
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).downFrom_nwe7y8_k$ = function (state) {
    switch (state.get_ordinal_ip24qg_k$()) {
      case 2:
        return Event_ON_DESTROY_getInstance();
      case 3:
        return Event_ON_STOP_getInstance();
      case 4:
        return Event_ON_PAUSE_getInstance();
      default:
        return null;
    }
  };
  protoOf(Companion).downTo_hdtf5_k$ = function (state) {
    switch (state.get_ordinal_ip24qg_k$()) {
      case 0:
        return Event_ON_DESTROY_getInstance();
      case 2:
        return Event_ON_STOP_getInstance();
      case 3:
        return Event_ON_PAUSE_getInstance();
      default:
        return null;
    }
  };
  protoOf(Companion).upFrom_qzigd5_k$ = function (state) {
    switch (state.get_ordinal_ip24qg_k$()) {
      case 1:
        return Event_ON_CREATE_getInstance();
      case 2:
        return Event_ON_START_getInstance();
      case 3:
        return Event_ON_RESUME_getInstance();
      default:
        return null;
    }
  };
  protoOf(Companion).upTo_nwcq_k$ = function (state) {
    switch (state.get_ordinal_ip24qg_k$()) {
      case 2:
        return Event_ON_CREATE_getInstance();
      case 3:
        return Event_ON_START_getInstance();
      case 4:
        return Event_ON_RESUME_getInstance();
      default:
        return null;
    }
  };
  var Companion_instance;
  function Companion_getInstance() {
    Event_initEntries();
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function values() {
    return [Event_ON_CREATE_getInstance(), Event_ON_START_getInstance(), Event_ON_RESUME_getInstance(), Event_ON_PAUSE_getInstance(), Event_ON_STOP_getInstance(), Event_ON_DESTROY_getInstance(), Event_ON_ANY_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'ON_CREATE':
        return Event_ON_CREATE_getInstance();
      case 'ON_START':
        return Event_ON_START_getInstance();
      case 'ON_RESUME':
        return Event_ON_RESUME_getInstance();
      case 'ON_PAUSE':
        return Event_ON_PAUSE_getInstance();
      case 'ON_STOP':
        return Event_ON_STOP_getInstance();
      case 'ON_DESTROY':
        return Event_ON_DESTROY_getInstance();
      case 'ON_ANY':
        return Event_ON_ANY_getInstance();
      default:
        Event_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Event_entriesInitialized;
  function Event_initEntries() {
    if (Event_entriesInitialized)
      return Unit_getInstance();
    Event_entriesInitialized = true;
    Event_ON_CREATE_instance = new Event('ON_CREATE', 0);
    Event_ON_START_instance = new Event('ON_START', 1);
    Event_ON_RESUME_instance = new Event('ON_RESUME', 2);
    Event_ON_PAUSE_instance = new Event('ON_PAUSE', 3);
    Event_ON_STOP_instance = new Event('ON_STOP', 4);
    Event_ON_DESTROY_instance = new Event('ON_DESTROY', 5);
    Event_ON_ANY_instance = new Event('ON_ANY', 6);
    Companion_getInstance();
  }
  var $ENTRIES;
  var State_DESTROYED_instance;
  var State_INITIALIZED_instance;
  var State_CREATED_instance;
  var State_STARTED_instance;
  var State_RESUMED_instance;
  function values_0() {
    return [State_DESTROYED_getInstance(), State_INITIALIZED_getInstance(), State_CREATED_getInstance(), State_STARTED_getInstance(), State_RESUMED_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'DESTROYED':
        return State_DESTROYED_getInstance();
      case 'INITIALIZED':
        return State_INITIALIZED_getInstance();
      case 'CREATED':
        return State_CREATED_getInstance();
      case 'STARTED':
        return State_STARTED_getInstance();
      case 'RESUMED':
        return State_RESUMED_getInstance();
      default:
        State_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_getInstance();
    State_entriesInitialized = true;
    State_DESTROYED_instance = new State('DESTROYED', 0);
    State_INITIALIZED_instance = new State('INITIALIZED', 1);
    State_CREATED_instance = new State('CREATED', 2);
    State_STARTED_instance = new State('STARTED', 3);
    State_RESUMED_instance = new State('RESUMED', 4);
  }
  var $ENTRIES_0;
  function Event(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(Event).get_targetState_kri3mx_k$ = function () {
    switch (this.get_ordinal_ip24qg_k$()) {
      case 0:
      case 4:
        return State_CREATED_getInstance();
      case 1:
      case 3:
        return State_STARTED_getInstance();
      case 2:
        return State_RESUMED_getInstance();
      case 5:
        return State_DESTROYED_getInstance();
      case 6:
        break;
    }
    throw IllegalArgumentException_init_$Create$(this.toString() + ' has no target state');
  };
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(State).isAtLeast_pbz9hc_k$ = function (state) {
    return this.compareTo_30rs7w_k$(state) >= 0;
  };
  function sam$androidx_lifecycle_LifecycleEventObserver$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).onStateChanged_3qr65s_k$ = function (source, event) {
    return this.function_1(source, event);
  };
  function Lifecycle$_get_currentStateFlow_$lambda_o0jp3g($mutableStateFlow) {
    return function (_anonymous_parameter_0__qggqh8, event) {
      $mutableStateFlow.set_value_v1vabv_k$(event.get_targetState_kri3mx_k$());
      return Unit_getInstance();
    };
  }
  function Event_ON_CREATE_getInstance() {
    Event_initEntries();
    return Event_ON_CREATE_instance;
  }
  function Event_ON_START_getInstance() {
    Event_initEntries();
    return Event_ON_START_instance;
  }
  function Event_ON_RESUME_getInstance() {
    Event_initEntries();
    return Event_ON_RESUME_instance;
  }
  function Event_ON_PAUSE_getInstance() {
    Event_initEntries();
    return Event_ON_PAUSE_instance;
  }
  function Event_ON_STOP_getInstance() {
    Event_initEntries();
    return Event_ON_STOP_instance;
  }
  function Event_ON_DESTROY_getInstance() {
    Event_initEntries();
    return Event_ON_DESTROY_instance;
  }
  function Event_ON_ANY_getInstance() {
    Event_initEntries();
    return Event_ON_ANY_instance;
  }
  function State_DESTROYED_getInstance() {
    State_initEntries();
    return State_DESTROYED_instance;
  }
  function State_INITIALIZED_getInstance() {
    State_initEntries();
    return State_INITIALIZED_instance;
  }
  function State_CREATED_getInstance() {
    State_initEntries();
    return State_CREATED_instance;
  }
  function State_STARTED_getInstance() {
    State_initEntries();
    return State_STARTED_instance;
  }
  function State_RESUMED_getInstance() {
    State_initEntries();
    return State_RESUMED_instance;
  }
  function Lifecycle() {
    this.internalScopeRef_1 = new AtomicReference(null);
  }
  protoOf(Lifecycle).set_internalScopeRef_a17or0_k$ = function (_set____db54di) {
    this.internalScopeRef_1 = _set____db54di;
  };
  protoOf(Lifecycle).get_internalScopeRef_nrkdol_k$ = function () {
    return this.internalScopeRef_1;
  };
  protoOf(Lifecycle).get_currentStateFlow_8lod67_k$ = function () {
    var mutableStateFlow = MutableStateFlow(this.get_currentState_snihnl_k$());
    // Inline function 'kotlin.also' call
    var tmp = Lifecycle$_get_currentStateFlow_$lambda_o0jp3g(mutableStateFlow);
    var this_0 = new sam$androidx_lifecycle_LifecycleEventObserver$0(tmp);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.Lifecycle.<get-currentStateFlow>.<anonymous>' call
    this.addObserver_xhlg3u_k$(this_0);
    return asStateFlow(mutableStateFlow);
  };
  function LifecycleEventObserver() {
  }
  function LifecycleObserver() {
  }
  function LifecycleOwner() {
  }
  function _get_delegate__idh0py($this) {
    return $this.delegate_1;
  }
  function AtomicReference(value) {
    this.delegate_1 = atomic$ref$1(value);
  }
  protoOf(AtomicReference).get_26vq_k$ = function () {
    return this.delegate_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(AtomicReference).compareAndSet_10iwom_k$ = function (expect, newValue) {
    return this.delegate_1.atomicfu$compareAndSet(expect, newValue);
  };
  function Lifecycling() {
    Lifecycling_instance = this;
  }
  protoOf(Lifecycling).lifecycleEventObserver_pvwem0_k$ = function (object) {
    var isLifecycleEventObserver = isInterface(object, LifecycleEventObserver);
    var isDefaultLifecycleObserver = isInterface(object, DefaultLifecycleObserver);
    if (isLifecycleEventObserver && isDefaultLifecycleObserver) {
      var tmp = isInterface(object, DefaultLifecycleObserver) ? object : THROW_CCE();
      return new DefaultLifecycleObserverAdapter(tmp, isInterface(object, LifecycleEventObserver) ? object : THROW_CCE());
    }
    if (isDefaultLifecycleObserver) {
      return new DefaultLifecycleObserverAdapter(isInterface(object, DefaultLifecycleObserver) ? object : THROW_CCE(), null);
    }
    if (isLifecycleEventObserver) {
      return isInterface(object, LifecycleEventObserver) ? object : THROW_CCE();
    }
    throw IllegalArgumentException_init_$Create$_0();
  };
  protoOf(Lifecycling).getAdapterName_mvmx86_k$ = function (className) {
    return replace(className, '.', '_') + '_LifecycleAdapter';
  };
  var Lifecycling_instance;
  function Lifecycling_getInstance() {
    if (Lifecycling_instance == null)
      new Lifecycling();
    return Lifecycling_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = LifecycleOwner;
  _.$_$.b = Lifecycle;
  _.$_$.c = Event_ON_DESTROY_getInstance;
  _.$_$.d = Event_ON_PAUSE_getInstance;
  _.$_$.e = Event_ON_RESUME_getInstance;
  _.$_$.f = Event_ON_START_getInstance;
  _.$_$.g = State_DESTROYED_getInstance;
  _.$_$.h = State_INITIALIZED_getInstance;
  _.$_$.i = Companion_getInstance;
  _.$_$.j = Lifecycling_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-lifecycle-lifecycle-common.js.map
