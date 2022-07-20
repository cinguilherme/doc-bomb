var $CLJS = {};
var CLJS_GLOBAL = global;
var CLOSURE_DEFINES = CLJS_GLOBAL.CLOSURE_DEFINES = $CLJS.CLOSURE_DEFINES = {"shadow.cljs.devtools.client.env.repl_pprint":false,"shadow.cljs.devtools.client.env.reload_strategy":"optimized","shadow.cljs.devtools.client.env.devtools_url":"","shadow.cljs.devtools.client.env.autoload":true,"shadow.cljs.devtools.client.env.proc_id":"978960ad-0a5b-4037-8b64-d8614f022aec","shadow.cljs.devtools.client.env.use_document_protocol":false,"goog.ENABLE_DEBUG_LOADER":false,"shadow.cljs.devtools.client.env.server_port":9630,"shadow.cljs.devtools.client.env.server_token":"be30cdf9-4393-4dea-87cd-6462238bf557","shadow.cljs.devtools.client.env.use_document_host":true,"shadow.cljs.devtools.client.env.module_format":"js","goog.LOCALE":"en","shadow.cljs.devtools.client.env.build_id":"stories","shadow.cljs.devtools.client.env.ignore_warnings":false,"goog.DEBUG":true,"shadow.cljs.devtools.client.env.log":true,"shadow.cljs.devtools.client.env.ssl":false,"shadow.cljs.devtools.client.env.enabled":true,"shadow.cljs.devtools.client.env.server_host":"localhost","shadow.cljs.devtools.client.env.worker_client_id":2,"goog.TRANSPILE":"never"};
CLJS_GLOBAL.CLOSURE_NO_DEPS = true;
CLJS_GLOBAL.$CLJS = $CLJS;
global.shadow$provide = {};
var goog = $CLJS.goog = {};
var COMPILED = false;
var goog = goog || {};
goog.global = global;
goog.global.CLOSURE_UNCOMPILED_DEFINES;
goog.global.CLOSURE_DEFINES;
goog.exportPath_ = function(name, object, overwriteImplicit, objectToExportTo) {
  var parts = name.split(".");
  var cur = objectToExportTo || goog.global;
  if (!(parts[0] in cur) && typeof cur.execScript != "undefined") {
    cur.execScript("var " + parts[0]);
  }
  for (var part; parts.length && (part = parts.shift());) {
    if (!parts.length && object !== undefined) {
      if (!overwriteImplicit && goog.isObject(object) && goog.isObject(cur[part])) {
        for (var prop in object) {
          if (object.hasOwnProperty(prop)) {
            cur[part][prop] = object[prop];
          }
        }
      } else {
        cur[part] = object;
      }
    } else if (cur[part] && cur[part] !== Object.prototype[part]) {
      cur = cur[part];
    } else {
      cur = cur[part] = {};
    }
  }
};
goog.define = function(name, defaultValue) {
  var value = defaultValue;
  if (!COMPILED) {
    var uncompiledDefines = goog.global.CLOSURE_UNCOMPILED_DEFINES;
    var defines = goog.global.CLOSURE_DEFINES;
    if (uncompiledDefines && uncompiledDefines.nodeType === undefined && Object.prototype.hasOwnProperty.call(uncompiledDefines, name)) {
      value = uncompiledDefines[name];
    } else if (defines && defines.nodeType === undefined && Object.prototype.hasOwnProperty.call(defines, name)) {
      value = defines[name];
    }
  }
  return value;
};
goog.FEATURESET_YEAR = goog.define("goog.FEATURESET_YEAR", 2012);
goog.DEBUG = goog.define("goog.DEBUG", true);
goog.LOCALE = goog.define("goog.LOCALE", "en");
goog.getLocale = function() {
  return goog.LOCALE;
};
goog.TRUSTED_SITE = goog.define("goog.TRUSTED_SITE", true);
goog.DISALLOW_TEST_ONLY_CODE = goog.define("goog.DISALLOW_TEST_ONLY_CODE", COMPILED && !goog.DEBUG);
goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = goog.define("goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING", false);
goog.provide = function(name) {
  if (goog.isInModuleLoader_()) {
    throw new Error("goog.provide cannot be used within a module.");
  }
  if (!COMPILED) {
    if (goog.isProvided_(name)) {
      throw new Error('Namespace "' + name + '" already declared.');
    }
  }
  goog.constructNamespace_(name);
};
goog.constructNamespace_ = function(name, object, overwriteImplicit) {
  if (!COMPILED) {
    delete goog.implicitNamespaces_[name];
    var namespace = name;
    while (namespace = namespace.substring(0, namespace.lastIndexOf("."))) {
      if (goog.getObjectByName(namespace)) {
        break;
      }
      goog.implicitNamespaces_[namespace] = true;
    }
  }
  goog.exportPath_(name, object, overwriteImplicit);
};
goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
goog.getScriptNonce_ = function(opt_window) {
  var doc = (opt_window || goog.global).document;
  var script = doc.querySelector && doc.querySelector("script[nonce]");
  if (script) {
    var nonce = script["nonce"] || script.getAttribute("nonce");
    if (nonce && goog.NONCE_PATTERN_.test(nonce)) {
      return nonce;
    }
  }
  return "";
};
goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
goog.module = function(name) {
  if (typeof name !== "string" || !name || name.search(goog.VALID_MODULE_RE_) == -1) {
    throw new Error("Invalid module identifier");
  }
  if (!goog.isInGoogModuleLoader_()) {
    throw new Error("Module " + name + " has been loaded incorrectly. Note, " + "modules cannot be loaded as normal scripts. They require some kind of " + "pre-processing step. You're likely trying to load a module via a " + "script tag or as a part of a concatenated bundle without rewriting the " + "module. For more info see: " + "https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
  }
  if (goog.moduleLoaderState_.moduleName) {
    throw new Error("goog.module may only be called once per module.");
  }
  goog.moduleLoaderState_.moduleName = name;
  if (!COMPILED) {
    if (goog.isProvided_(name)) {
      throw new Error('Namespace "' + name + '" already declared.');
    }
    delete goog.implicitNamespaces_[name];
  }
};
goog.module.get = function(name) {
  return goog.module.getInternal_(name);
};
goog.module.getInternal_ = function(name) {
  if (!COMPILED) {
    if (name in goog.loadedModules_) {
      return goog.loadedModules_[name].exports;
    } else if (!goog.implicitNamespaces_[name]) {
      var ns = goog.getObjectByName(name);
      return ns != null ? ns : null;
    }
  }
  return null;
};
goog.ModuleType = {ES6:"es6", GOOG:"goog"};
goog.moduleLoaderState_ = null;
goog.isInModuleLoader_ = function() {
  return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_();
};
goog.isInGoogModuleLoader_ = function() {
  return !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.GOOG;
};
goog.isInEs6ModuleLoader_ = function() {
  var inLoader = !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.ES6;
  if (inLoader) {
    return true;
  }
  var jscomp = goog.global["$jscomp"];
  if (jscomp) {
    if (typeof jscomp.getCurrentModulePath != "function") {
      return false;
    }
    return !!jscomp.getCurrentModulePath();
  }
  return false;
};
goog.module.declareLegacyNamespace = function() {
  if (!COMPILED && !goog.isInGoogModuleLoader_()) {
    throw new Error("goog.module.declareLegacyNamespace must be called from " + "within a goog.module");
  }
  if (!COMPILED && !goog.moduleLoaderState_.moduleName) {
    throw new Error("goog.module must be called prior to " + "goog.module.declareLegacyNamespace.");
  }
  goog.moduleLoaderState_.declareLegacyNamespace = true;
};
goog.declareModuleId = function(namespace) {
  if (!COMPILED) {
    if (!goog.isInEs6ModuleLoader_()) {
      throw new Error("goog.declareModuleId may only be called from " + "within an ES6 module");
    }
    if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName) {
      throw new Error("goog.declareModuleId may only be called once per module.");
    }
    if (namespace in goog.loadedModules_) {
      throw new Error('Module with namespace "' + namespace + '" already exists.');
    }
  }
  if (goog.moduleLoaderState_) {
    goog.moduleLoaderState_.moduleName = namespace;
  } else {
    var jscomp = goog.global["$jscomp"];
    if (!jscomp || typeof jscomp.getCurrentModulePath != "function") {
      throw new Error('Module with namespace "' + namespace + '" has been loaded incorrectly.');
    }
    var exports = jscomp.require(jscomp.getCurrentModulePath());
    goog.loadedModules_[namespace] = {exports:exports, type:goog.ModuleType.ES6, moduleId:namespace};
  }
};
goog.setTestOnly = function(opt_message) {
  if (goog.DISALLOW_TEST_ONLY_CODE) {
    opt_message = opt_message || "";
    throw new Error("Importing test-only code into non-debug environment" + (opt_message ? ": " + opt_message : "."));
  }
};
goog.forwardDeclare = function(name) {
};
goog.forwardDeclare("Document");
goog.forwardDeclare("HTMLScriptElement");
goog.forwardDeclare("XMLHttpRequest");
if (!COMPILED) {
  goog.isProvided_ = function(name) {
    return name in goog.loadedModules_ || !goog.implicitNamespaces_[name] && goog.getObjectByName(name) != null;
  };
  goog.implicitNamespaces_ = {"goog.module":true};
}
goog.getObjectByName = function(name, opt_obj) {
  var parts = name.split(".");
  var cur = opt_obj || goog.global;
  for (var i = 0; i < parts.length; i++) {
    cur = cur[parts[i]];
    if (cur == null) {
      return null;
    }
  }
  return cur;
};
goog.addDependency = function(relPath, provides, requires, opt_loadFlags) {
  if (!COMPILED && goog.DEPENDENCIES_ENABLED) {
    goog.debugLoader_.addDependency(relPath, provides, requires, opt_loadFlags);
  }
};
goog.ENABLE_DEBUG_LOADER = goog.define("goog.ENABLE_DEBUG_LOADER", true);
goog.logToConsole_ = function(msg) {
  if (goog.global.console) {
    goog.global.console["error"](msg);
  }
};
goog.require = function(namespace) {
  if (!COMPILED) {
    if (goog.ENABLE_DEBUG_LOADER) {
      goog.debugLoader_.requested(namespace);
    }
    if (goog.isProvided_(namespace)) {
      if (goog.isInModuleLoader_()) {
        return goog.module.getInternal_(namespace);
      }
    } else if (goog.ENABLE_DEBUG_LOADER) {
      var moduleLoaderState = goog.moduleLoaderState_;
      goog.moduleLoaderState_ = null;
      try {
        goog.debugLoader_.load_(namespace);
      } finally {
        goog.moduleLoaderState_ = moduleLoaderState;
      }
    }
    return null;
  }
};
goog.requireType = function(namespace) {
  return {};
};
goog.basePath = "";
goog.global.CLOSURE_BASE_PATH;
goog.global.CLOSURE_NO_DEPS;
goog.global.CLOSURE_IMPORT_SCRIPT;
goog.nullFunction = function() {
};
goog.abstractMethod = function() {
  throw new Error("unimplemented abstract method");
};
goog.addSingletonGetter = function(ctor) {
  ctor.instance_ = undefined;
  ctor.getInstance = function() {
    if (ctor.instance_) {
      return ctor.instance_;
    }
    if (goog.DEBUG) {
      goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = ctor;
    }
    return ctor.instance_ = new ctor();
  };
};
goog.instantiatedSingletons_ = [];
goog.LOAD_MODULE_USING_EVAL = goog.define("goog.LOAD_MODULE_USING_EVAL", true);
goog.SEAL_MODULE_EXPORTS = goog.define("goog.SEAL_MODULE_EXPORTS", goog.DEBUG);
goog.loadedModules_ = {};
goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
goog.TRANSPILE = goog.define("goog.TRANSPILE", "detect");
goog.ASSUME_ES_MODULES_TRANSPILED = goog.define("goog.ASSUME_ES_MODULES_TRANSPILED", false);
goog.TRANSPILE_TO_LANGUAGE = goog.define("goog.TRANSPILE_TO_LANGUAGE", "");
goog.TRANSPILER = goog.define("goog.TRANSPILER", "transpile.js");
goog.TRUSTED_TYPES_POLICY_NAME = goog.define("goog.TRUSTED_TYPES_POLICY_NAME", "goog");
goog.hasBadLetScoping = null;
goog.loadModule = function(moduleDef) {
  var previousState = goog.moduleLoaderState_;
  try {
    goog.moduleLoaderState_ = {moduleName:"", declareLegacyNamespace:false, type:goog.ModuleType.GOOG};
    var origExports = {};
    var exports = origExports;
    if (typeof moduleDef === "function") {
      exports = moduleDef.call(undefined, exports);
    } else if (typeof moduleDef === "string") {
      exports = goog.loadModuleFromSource_.call(undefined, exports, moduleDef);
    } else {
      throw new Error("Invalid module definition");
    }
    var moduleName = goog.moduleLoaderState_.moduleName;
    if (typeof moduleName === "string" && moduleName) {
      if (goog.moduleLoaderState_.declareLegacyNamespace) {
        var isDefaultExport = origExports !== exports;
        goog.constructNamespace_(moduleName, exports, isDefaultExport);
      } else if (goog.SEAL_MODULE_EXPORTS && Object.seal && typeof exports == "object" && exports != null) {
        Object.seal(exports);
      }
      var data = {exports:exports, type:goog.ModuleType.GOOG, moduleId:goog.moduleLoaderState_.moduleName};
      goog.loadedModules_[moduleName] = data;
    } else {
      throw new Error('Invalid module name "' + moduleName + '"');
    }
  } finally {
    goog.moduleLoaderState_ = previousState;
  }
};
goog.loadModuleFromSource_ = function(exports) {
  eval(goog.CLOSURE_EVAL_PREFILTER_.createScript(arguments[1]));
  return exports;
};
goog.normalizePath_ = function(path) {
  var components = path.split("/");
  var i = 0;
  while (i < components.length) {
    if (components[i] == ".") {
      components.splice(i, 1);
    } else if (i && components[i] == ".." && components[i - 1] && components[i - 1] != "..") {
      components.splice(--i, 2);
    } else {
      i++;
    }
  }
  return components.join("/");
};
goog.global.CLOSURE_LOAD_FILE_SYNC;
goog.loadFileSync_ = function(src) {
  if (goog.global.CLOSURE_LOAD_FILE_SYNC) {
    return goog.global.CLOSURE_LOAD_FILE_SYNC(src);
  } else {
    try {
      var xhr = new goog.global["XMLHttpRequest"]();
      xhr.open("get", src, false);
      xhr.send();
      return xhr.status == 0 || xhr.status == 200 ? xhr.responseText : null;
    } catch (err) {
      return null;
    }
  }
};
goog.transpile_ = function(code, path, target) {
  var jscomp = goog.global["$jscomp"];
  if (!jscomp) {
    goog.global["$jscomp"] = jscomp = {};
  }
  var transpile = jscomp.transpile;
  if (!transpile) {
    var transpilerPath = goog.basePath + goog.TRANSPILER;
    var transpilerCode = goog.loadFileSync_(transpilerPath);
    if (transpilerCode) {
      (function() {
        (0,eval)(transpilerCode + "\n//# sourceURL\x3d" + transpilerPath);
      }).call(goog.global);
      if (goog.global["$gwtExport"] && goog.global["$gwtExport"]["$jscomp"] && !goog.global["$gwtExport"]["$jscomp"]["transpile"]) {
        throw new Error('The transpiler did not properly export the "transpile" ' + "method. $gwtExport: " + JSON.stringify(goog.global["$gwtExport"]));
      }
      goog.global["$jscomp"].transpile = goog.global["$gwtExport"]["$jscomp"]["transpile"];
      jscomp = goog.global["$jscomp"];
      transpile = jscomp.transpile;
    }
  }
  if (!transpile) {
    var suffix = " requires transpilation but no transpiler was found.";
    transpile = jscomp.transpile = function(code, path) {
      goog.logToConsole_(path + suffix);
      return code;
    };
  }
  return transpile(code, path, target);
};
goog.typeOf = function(value) {
  var s = typeof value;
  if (s != "object") {
    return s;
  }
  if (!value) {
    return "null";
  }
  if (Array.isArray(value)) {
    return "array";
  }
  return s;
};
goog.isArrayLike = function(val) {
  var type = goog.typeOf(val);
  return type == "array" || type == "object" && typeof val.length == "number";
};
goog.isDateLike = function(val) {
  return goog.isObject(val) && typeof val.getFullYear == "function";
};
goog.isObject = function(val) {
  var type = typeof val;
  return type == "object" && val != null || type == "function";
};
goog.getUid = function(obj) {
  return Object.prototype.hasOwnProperty.call(obj, goog.UID_PROPERTY_) && obj[goog.UID_PROPERTY_] || (obj[goog.UID_PROPERTY_] = ++goog.uidCounter_);
};
goog.hasUid = function(obj) {
  return !!obj[goog.UID_PROPERTY_];
};
goog.removeUid = function(obj) {
  if (obj !== null && "removeAttribute" in obj) {
    obj.removeAttribute(goog.UID_PROPERTY_);
  }
  try {
    delete obj[goog.UID_PROPERTY_];
  } catch (ex) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + (Math.random() * 1e9 >>> 0);
goog.uidCounter_ = 0;
goog.cloneObject = function(obj) {
  var type = goog.typeOf(obj);
  if (type == "object" || type == "array") {
    if (typeof obj.clone === "function") {
      return obj.clone();
    }
    if (typeof Map !== "undefined" && obj instanceof Map) {
      return new Map(obj);
    } else if (typeof Set !== "undefined" && obj instanceof Set) {
      return new Set(obj);
    }
    var clone = type == "array" ? [] : {};
    for (var key in obj) {
      clone[key] = goog.cloneObject(obj[key]);
    }
    return clone;
  }
  return obj;
};
goog.bindNative_ = function(fn, selfObj, var_args) {
  return fn.call.apply(fn.bind, arguments);
};
goog.bindJs_ = function(fn, selfObj, var_args) {
  if (!fn) {
    throw new Error();
  }
  if (arguments.length > 2) {
    var boundArgs = Array.prototype.slice.call(arguments, 2);
    return function() {
      var newArgs = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(newArgs, boundArgs);
      return fn.apply(selfObj, newArgs);
    };
  } else {
    return function() {
      return fn.apply(selfObj, arguments);
    };
  }
};
goog.bind = function(fn, selfObj, var_args) {
  if (Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1) {
    goog.bind = goog.bindNative_;
  } else {
    goog.bind = goog.bindJs_;
  }
  return goog.bind.apply(null, arguments);
};
goog.partial = function(fn, var_args) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    var newArgs = args.slice();
    newArgs.push.apply(newArgs, arguments);
    return fn.apply(this, newArgs);
  };
};
goog.mixin = function(target, source) {
  for (var x in source) {
    target[x] = source[x];
  }
};
goog.now = function() {
  return Date.now();
};
goog.globalEval = function(script) {
  (0,eval)(script);
};
goog.cssNameMapping_;
goog.cssNameMappingStyle_;
goog.global.CLOSURE_CSS_NAME_MAP_FN;
goog.getCssName = function(className, opt_modifier) {
  if (String(className).charAt(0) == ".") {
    throw new Error('className passed in goog.getCssName must not start with ".".' + " You passed: " + className);
  }
  var getMapping = function(cssName) {
    return goog.cssNameMapping_[cssName] || cssName;
  };
  var renameByParts = function(cssName) {
    var parts = cssName.split("-");
    var mapped = [];
    for (var i = 0; i < parts.length; i++) {
      mapped.push(getMapping(parts[i]));
    }
    return mapped.join("-");
  };
  var rename;
  if (goog.cssNameMapping_) {
    rename = goog.cssNameMappingStyle_ == "BY_WHOLE" ? getMapping : renameByParts;
  } else {
    rename = function(a) {
      return a;
    };
  }
  var result = opt_modifier ? className + "-" + rename(opt_modifier) : rename(className);
  if (goog.global.CLOSURE_CSS_NAME_MAP_FN) {
    return goog.global.CLOSURE_CSS_NAME_MAP_FN(result);
  }
  return result;
};
goog.setCssNameMapping = function(mapping, opt_style) {
  goog.cssNameMapping_ = mapping;
  goog.cssNameMappingStyle_ = opt_style;
};
goog.global.CLOSURE_CSS_NAME_MAPPING;
if (!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING) {
  goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING;
}
goog.getMsg = function(str, opt_values, opt_options) {
  if (opt_options && opt_options.html) {
    str = str.replace(/</g, "\x26lt;");
  }
  if (opt_options && opt_options.unescapeHtmlEntities) {
    str = str.replace(/&lt;/g, "\x3c").replace(/&gt;/g, "\x3e").replace(/&apos;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "\x26");
  }
  if (opt_values) {
    str = str.replace(/\{\$([^}]+)}/g, function(match, key) {
      return opt_values != null && key in opt_values ? opt_values[key] : match;
    });
  }
  return str;
};
goog.getMsgWithFallback = function(a, b) {
  return a;
};
goog.exportSymbol = function(publicPath, object, objectToExportTo) {
  goog.exportPath_(publicPath, object, true, objectToExportTo);
};
goog.exportProperty = function(object, publicName, symbol) {
  object[publicName] = symbol;
};
goog.inherits = function(childCtor, parentCtor) {
  function tempCtor() {
  }
  tempCtor.prototype = parentCtor.prototype;
  childCtor.superClass_ = parentCtor.prototype;
  childCtor.prototype = new tempCtor();
  childCtor.prototype.constructor = childCtor;
  childCtor.base = function(me, methodName, var_args) {
    var args = new Array(arguments.length - 2);
    for (var i = 2; i < arguments.length; i++) {
      args[i - 2] = arguments[i];
    }
    return parentCtor.prototype[methodName].apply(me, args);
  };
};
goog.scope = function(fn) {
  if (goog.isInModuleLoader_()) {
    throw new Error("goog.scope is not supported within a module.");
  }
  fn.call(goog.global);
};
if (!COMPILED) {
  goog.global["COMPILED"] = COMPILED;
}
goog.defineClass = function(superClass, def) {
  var constructor = def.constructor;
  var statics = def.statics;
  if (!constructor || constructor == Object.prototype.constructor) {
    constructor = function() {
      throw new Error("cannot instantiate an interface (no constructor defined).");
    };
  }
  var cls = goog.defineClass.createSealingConstructor_(constructor, superClass);
  if (superClass) {
    goog.inherits(cls, superClass);
  }
  delete def.constructor;
  delete def.statics;
  goog.defineClass.applyProperties_(cls.prototype, def);
  if (statics != null) {
    if (statics instanceof Function) {
      statics(cls);
    } else {
      goog.defineClass.applyProperties_(cls, statics);
    }
  }
  return cls;
};
goog.defineClass.ClassDescriptor;
goog.defineClass.SEAL_CLASS_INSTANCES = goog.define("goog.defineClass.SEAL_CLASS_INSTANCES", goog.DEBUG);
goog.defineClass.createSealingConstructor_ = function(ctr, superClass) {
  if (!goog.defineClass.SEAL_CLASS_INSTANCES) {
    return ctr;
  }
  var wrappedCtr = function() {
    var instance = ctr.apply(this, arguments) || this;
    instance[goog.UID_PROPERTY_] = instance[goog.UID_PROPERTY_];
    return instance;
  };
  return wrappedCtr;
};
goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
goog.defineClass.applyProperties_ = function(target, source) {
  var key;
  for (key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    }
  }
  for (var i = 0; i < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; i++) {
    key = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[i];
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    }
  }
};
goog.identity_ = function(s) {
  return s;
};
goog.createTrustedTypesPolicy = function(name) {
  var policy = null;
  var policyFactory = goog.global.trustedTypes;
  if (!policyFactory || !policyFactory.createPolicy) {
    return policy;
  }
  try {
    policy = policyFactory.createPolicy(name, {createHTML:goog.identity_, createScript:goog.identity_, createScriptURL:goog.identity_});
  } catch (e) {
    goog.logToConsole_(e.message);
  }
  return policy;
};
if (!COMPILED && goog.DEPENDENCIES_ENABLED) {
  goog.isEdge_ = function() {
    var userAgent = goog.global.navigator && goog.global.navigator.userAgent ? goog.global.navigator.userAgent : "";
    var edgeRe = /Edge\/(\d+)(\.\d)*/i;
    return !!userAgent.match(edgeRe);
  };
  goog.inHtmlDocument_ = function() {
    var doc = goog.global.document;
    return doc != null && "write" in doc;
  };
  goog.isDocumentLoading_ = function() {
    var doc = goog.global.document;
    return doc.attachEvent ? doc.readyState != "complete" : doc.readyState == "loading";
  };
  goog.findBasePath_ = function() {
    if (goog.global.CLOSURE_BASE_PATH != undefined && typeof goog.global.CLOSURE_BASE_PATH === "string") {
      goog.basePath = goog.global.CLOSURE_BASE_PATH;
      return;
    } else if (!goog.inHtmlDocument_()) {
      return;
    }
    var doc = goog.global.document;
    var currentScript = doc.currentScript;
    if (currentScript) {
      var scripts = [currentScript];
    } else {
      var scripts = doc.getElementsByTagName("SCRIPT");
    }
    for (var i = scripts.length - 1; i >= 0; --i) {
      var script = scripts[i];
      var src = script.src;
      var qmark = src.lastIndexOf("?");
      var l = qmark == -1 ? src.length : qmark;
      if (src.substr(l - 7, 7) == "base.js") {
        goog.basePath = src.substr(0, l - 7);
        return;
      }
    }
  };
  goog.findBasePath_();
  goog.Transpiler = function() {
    this.requiresTranspilation_ = null;
    this.transpilationTarget_ = goog.TRANSPILE_TO_LANGUAGE;
  };
  goog.Transpiler.prototype.createRequiresTranspilation_ = function() {
    var transpilationTarget = "es3";
    var requiresTranspilation = {"es3":false};
    var transpilationRequiredForAllLaterModes = false;
    function addNewerLanguageTranspilationCheck(modeName, isSupported) {
      if (transpilationRequiredForAllLaterModes) {
        requiresTranspilation[modeName] = true;
      } else if (isSupported()) {
        transpilationTarget = modeName;
        requiresTranspilation[modeName] = false;
      } else {
        requiresTranspilation[modeName] = true;
        transpilationRequiredForAllLaterModes = true;
      }
    }
    function evalCheck(code) {
      try {
        return !!eval(goog.CLOSURE_EVAL_PREFILTER_.createScript(code));
      } catch (ignored) {
        return false;
      }
    }
    addNewerLanguageTranspilationCheck("es5", function() {
      return evalCheck("[1,].length\x3d\x3d1");
    });
    addNewerLanguageTranspilationCheck("es6", function() {
      if (goog.isEdge_()) {
        return false;
      }
      var es6fullTest = "class X{constructor(){if(new.target!\x3dString)throw 1;this.x\x3d42}}" + "let q\x3dReflect.construct(X,[],String);if(q.x!\x3d42||!(q instanceof " + "String))throw 1;for(const a of[2,3]){if(a\x3d\x3d2)continue;function " + "f(z\x3d{a}){let a\x3d0;return z.a}{function f(){return 0;}}return f()" + "\x3d\x3d3}";
      return evalCheck('(()\x3d\x3e{"use strict";' + es6fullTest + "})()");
    });
    addNewerLanguageTranspilationCheck("es7", function() {
      return evalCheck("2**3\x3d\x3d8");
    });
    addNewerLanguageTranspilationCheck("es8", function() {
      return evalCheck("async()\x3d\x3e1,1");
    });
    addNewerLanguageTranspilationCheck("es9", function() {
      return evalCheck("({...rest}\x3d{}),1");
    });
    addNewerLanguageTranspilationCheck("es_2019", function() {
      return evalCheck('let r;try{r\x3d" "}catch{};r');
    });
    addNewerLanguageTranspilationCheck("es_2020", function() {
      return evalCheck("null?.x??1");
    });
    addNewerLanguageTranspilationCheck("es_next", function() {
      return false;
    });
    return {target:transpilationTarget, map:requiresTranspilation};
  };
  goog.Transpiler.prototype.needsTranspile = function(lang, module) {
    if (goog.TRANSPILE == "always") {
      return true;
    } else if (goog.TRANSPILE == "never") {
      return false;
    } else if (!this.requiresTranspilation_) {
      var obj = this.createRequiresTranspilation_();
      this.requiresTranspilation_ = obj.map;
      this.transpilationTarget_ = this.transpilationTarget_ || obj.target;
    }
    if (lang in this.requiresTranspilation_) {
      if (this.requiresTranspilation_[lang]) {
        return true;
      } else if (goog.inHtmlDocument_() && module == "es6" && !("noModule" in goog.global.document.createElement("script"))) {
        return true;
      } else {
        return false;
      }
    } else {
      throw new Error("Unknown language mode: " + lang);
    }
  };
  goog.Transpiler.prototype.transpile = function(code, path) {
    return goog.transpile_(code, path, this.transpilationTarget_);
  };
  goog.transpiler_ = new goog.Transpiler();
  goog.protectScriptTag_ = function(str) {
    return str.replace(/<\/(SCRIPT)/ig, "\\x3c/$1");
  };
  goog.DebugLoader_ = function() {
    this.dependencies_ = {};
    this.idToPath_ = {};
    this.written_ = {};
    this.loadingDeps_ = [];
    this.depsToLoad_ = [];
    this.paused_ = false;
    this.factory_ = new goog.DependencyFactory(goog.transpiler_);
    this.deferredCallbacks_ = {};
    this.deferredQueue_ = [];
  };
  goog.DebugLoader_.prototype.bootstrap = function(namespaces, callback) {
    var cb = callback;
    function resolve() {
      if (cb) {
        goog.global.setTimeout(cb, 0);
        cb = null;
      }
    }
    if (!namespaces.length) {
      resolve();
      return;
    }
    var deps = [];
    for (var i = 0; i < namespaces.length; i++) {
      var path = this.getPathFromDeps_(namespaces[i]);
      if (!path) {
        throw new Error("Unregonized namespace: " + namespaces[i]);
      }
      deps.push(this.dependencies_[path]);
    }
    var require = goog.require;
    var loaded = 0;
    for (var i = 0; i < namespaces.length; i++) {
      require(namespaces[i]);
      deps[i].onLoad(function() {
        if (++loaded == namespaces.length) {
          resolve();
        }
      });
    }
  };
  goog.DebugLoader_.prototype.loadClosureDeps = function() {
    var relPath = "deps.js";
    this.depsToLoad_.push(this.factory_.createDependency(goog.normalizePath_(goog.basePath + relPath), relPath, [], [], {}, false));
    this.loadDeps_();
  };
  goog.DebugLoader_.prototype.requested = function(absPathOrId, opt_force) {
    var path = this.getPathFromDeps_(absPathOrId);
    if (path && (opt_force || this.areDepsLoaded_(this.dependencies_[path].requires))) {
      var callback = this.deferredCallbacks_[path];
      if (callback) {
        delete this.deferredCallbacks_[path];
        callback();
      }
    }
  };
  goog.DebugLoader_.prototype.setDependencyFactory = function(factory) {
    this.factory_ = factory;
  };
  goog.DebugLoader_.prototype.load_ = function(namespace) {
    if (!this.getPathFromDeps_(namespace)) {
      var errorMessage = "goog.require could not find: " + namespace;
      goog.logToConsole_(errorMessage);
    } else {
      var loader = this;
      var deps = [];
      var visit = function(namespace) {
        var path = loader.getPathFromDeps_(namespace);
        if (!path) {
          throw new Error("Bad dependency path or symbol: " + namespace);
        }
        if (loader.written_[path]) {
          return;
        }
        loader.written_[path] = true;
        var dep = loader.dependencies_[path];
        for (var i = 0; i < dep.requires.length; i++) {
          if (!goog.isProvided_(dep.requires[i])) {
            visit(dep.requires[i]);
          }
        }
        deps.push(dep);
      };
      visit(namespace);
      var wasLoading = !!this.depsToLoad_.length;
      this.depsToLoad_ = this.depsToLoad_.concat(deps);
      if (!this.paused_ && !wasLoading) {
        this.loadDeps_();
      }
    }
  };
  goog.DebugLoader_.prototype.loadDeps_ = function() {
    var loader = this;
    var paused = this.paused_;
    while (this.depsToLoad_.length && !paused) {
      (function() {
        var loadCallDone = false;
        var dep = loader.depsToLoad_.shift();
        var loaded = false;
        loader.loading_(dep);
        var controller = {pause:function() {
          if (loadCallDone) {
            throw new Error("Cannot call pause after the call to load.");
          } else {
            paused = true;
          }
        }, resume:function() {
          if (loadCallDone) {
            loader.resume_();
          } else {
            paused = false;
          }
        }, loaded:function() {
          if (loaded) {
            throw new Error("Double call to loaded.");
          }
          loaded = true;
          loader.loaded_(dep);
        }, pending:function() {
          var pending = [];
          for (var i = 0; i < loader.loadingDeps_.length; i++) {
            pending.push(loader.loadingDeps_[i]);
          }
          return pending;
        }, setModuleState:function(type) {
          goog.moduleLoaderState_ = {type:type, moduleName:"", declareLegacyNamespace:false};
        }, registerEs6ModuleExports:function(path, exports, opt_closureNamespace) {
          if (opt_closureNamespace) {
            goog.loadedModules_[opt_closureNamespace] = {exports:exports, type:goog.ModuleType.ES6, moduleId:opt_closureNamespace || ""};
          }
        }, registerGoogModuleExports:function(moduleId, exports) {
          goog.loadedModules_[moduleId] = {exports:exports, type:goog.ModuleType.GOOG, moduleId:moduleId};
        }, clearModuleState:function() {
          goog.moduleLoaderState_ = null;
        }, defer:function(callback) {
          if (loadCallDone) {
            throw new Error("Cannot register with defer after the call to load.");
          }
          loader.defer_(dep, callback);
        }, areDepsLoaded:function() {
          return loader.areDepsLoaded_(dep.requires);
        }};
        try {
          dep.load(controller);
        } finally {
          loadCallDone = true;
        }
      })();
    }
    if (paused) {
      this.pause_();
    }
  };
  goog.DebugLoader_.prototype.pause_ = function() {
    this.paused_ = true;
  };
  goog.DebugLoader_.prototype.resume_ = function() {
    if (this.paused_) {
      this.paused_ = false;
      this.loadDeps_();
    }
  };
  goog.DebugLoader_.prototype.loading_ = function(dep) {
    this.loadingDeps_.push(dep);
  };
  goog.DebugLoader_.prototype.loaded_ = function(dep) {
    for (var i = 0; i < this.loadingDeps_.length; i++) {
      if (this.loadingDeps_[i] == dep) {
        this.loadingDeps_.splice(i, 1);
        break;
      }
    }
    for (var i = 0; i < this.deferredQueue_.length; i++) {
      if (this.deferredQueue_[i] == dep.path) {
        this.deferredQueue_.splice(i, 1);
        break;
      }
    }
    if (this.loadingDeps_.length == this.deferredQueue_.length && !this.depsToLoad_.length) {
      while (this.deferredQueue_.length) {
        this.requested(this.deferredQueue_.shift(), true);
      }
    }
    dep.loaded();
  };
  goog.DebugLoader_.prototype.areDepsLoaded_ = function(pathsOrIds) {
    for (var i = 0; i < pathsOrIds.length; i++) {
      var path = this.getPathFromDeps_(pathsOrIds[i]);
      if (!path || !(path in this.deferredCallbacks_) && !goog.isProvided_(pathsOrIds[i])) {
        return false;
      }
    }
    return true;
  };
  goog.DebugLoader_.prototype.getPathFromDeps_ = function(absPathOrId) {
    if (absPathOrId in this.idToPath_) {
      return this.idToPath_[absPathOrId];
    } else if (absPathOrId in this.dependencies_) {
      return absPathOrId;
    } else {
      return null;
    }
  };
  goog.DebugLoader_.prototype.defer_ = function(dependency, callback) {
    this.deferredCallbacks_[dependency.path] = callback;
    this.deferredQueue_.push(dependency.path);
  };
  goog.LoadController = function() {
  };
  goog.LoadController.prototype.pause = function() {
  };
  goog.LoadController.prototype.resume = function() {
  };
  goog.LoadController.prototype.loaded = function() {
  };
  goog.LoadController.prototype.pending = function() {
  };
  goog.LoadController.prototype.registerEs6ModuleExports = function(path, exports, opt_closureNamespace) {
  };
  goog.LoadController.prototype.setModuleState = function(type) {
  };
  goog.LoadController.prototype.clearModuleState = function() {
  };
  goog.LoadController.prototype.defer = function(callback) {
  };
  goog.LoadController.prototype.areDepsLoaded = function() {
  };
  goog.Dependency = function(path, relativePath, provides, requires, loadFlags) {
    this.path = path;
    this.relativePath = relativePath;
    this.provides = provides;
    this.requires = requires;
    this.loadFlags = loadFlags;
    this.loaded_ = false;
    this.loadCallbacks_ = [];
  };
  goog.Dependency.prototype.getPathName = function() {
    var pathName = this.path;
    var protocolIndex = pathName.indexOf("://");
    if (protocolIndex >= 0) {
      pathName = pathName.substring(protocolIndex + 3);
      var slashIndex = pathName.indexOf("/");
      if (slashIndex >= 0) {
        pathName = pathName.substring(slashIndex + 1);
      }
    }
    return pathName;
  };
  goog.Dependency.prototype.onLoad = function(callback) {
    if (this.loaded_) {
      callback();
    } else {
      this.loadCallbacks_.push(callback);
    }
  };
  goog.Dependency.prototype.loaded = function() {
    this.loaded_ = true;
    var callbacks = this.loadCallbacks_;
    this.loadCallbacks_ = [];
    for (var i = 0; i < callbacks.length; i++) {
      callbacks[i]();
    }
  };
  goog.Dependency.defer_ = false;
  goog.Dependency.callbackMap_ = {};
  goog.Dependency.registerCallback_ = function(callback) {
    var key = Math.random().toString(32);
    goog.Dependency.callbackMap_[key] = callback;
    return key;
  };
  goog.Dependency.unregisterCallback_ = function(key) {
    delete goog.Dependency.callbackMap_[key];
  };
  goog.Dependency.callback_ = function(key, var_args) {
    if (key in goog.Dependency.callbackMap_) {
      var callback = goog.Dependency.callbackMap_[key];
      var args = [];
      for (var i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      callback.apply(undefined, args);
    } else {
      var errorMessage = "Callback key " + key + " does not exist (was base.js loaded more than once?).";
      throw Error(errorMessage);
    }
  };
  goog.Dependency.prototype.load = function(controller) {
    if (goog.global.CLOSURE_IMPORT_SCRIPT) {
      if (goog.global.CLOSURE_IMPORT_SCRIPT(this.path)) {
        controller.loaded();
      } else {
        controller.pause();
      }
      return;
    }
    if (!goog.inHtmlDocument_()) {
      goog.logToConsole_("Cannot use default debug loader outside of HTML documents.");
      if (this.relativePath == "deps.js") {
        goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, " + "or setting CLOSURE_NO_DEPS to true.");
        controller.loaded();
      } else {
        controller.pause();
      }
      return;
    }
    var doc = goog.global.document;
    if (doc.readyState == "complete" && !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING) {
      var isDeps = /\bdeps.js$/.test(this.path);
      if (isDeps) {
        controller.loaded();
        return;
      } else {
        throw Error('Cannot write "' + this.path + '" after document load');
      }
    }
    var nonce = goog.getScriptNonce_();
    if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && goog.isDocumentLoading_()) {
      var key;
      var callback = function(script) {
        if (script.readyState && script.readyState != "complete") {
          script.onload = callback;
          return;
        }
        goog.Dependency.unregisterCallback_(key);
        controller.loaded();
      };
      key = goog.Dependency.registerCallback_(callback);
      var defer = goog.Dependency.defer_ ? " defer" : "";
      var nonceAttr = nonce ? ' nonce\x3d"' + nonce + '"' : "";
      var script = '\x3cscript src\x3d"' + this.path + '"' + nonceAttr + defer + ' id\x3d"script-' + key + '"\x3e\x3c/script\x3e';
      script += "\x3cscript" + nonceAttr + "\x3e";
      if (goog.Dependency.defer_) {
        script += "document.getElementById('script-" + key + "').onload \x3d function() {\n" + "  goog.Dependency.callback_('" + key + "', this);\n" + "};\n";
      } else {
        script += "goog.Dependency.callback_('" + key + "', document.getElementById('script-" + key + "'));";
      }
      script += "\x3c/script\x3e";
      doc.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(script) : script);
    } else {
      var scriptEl = doc.createElement("script");
      scriptEl.defer = goog.Dependency.defer_;
      scriptEl.async = false;
      if (nonce) {
        scriptEl.nonce = nonce;
      }
      if (goog.DebugLoader_.IS_OLD_IE_) {
        controller.pause();
        scriptEl.onreadystatechange = function() {
          if (scriptEl.readyState == "loaded" || scriptEl.readyState == "complete") {
            controller.loaded();
            controller.resume();
          }
        };
      } else {
        scriptEl.onload = function() {
          scriptEl.onload = null;
          controller.loaded();
        };
      }
      scriptEl.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path) : this.path;
      doc.head.appendChild(scriptEl);
    }
  };
  goog.Es6ModuleDependency = function(path, relativePath, provides, requires, loadFlags) {
    goog.Es6ModuleDependency.base(this, "constructor", path, relativePath, provides, requires, loadFlags);
  };
  goog.inherits(goog.Es6ModuleDependency, goog.Dependency);
  goog.Es6ModuleDependency.prototype.load = function(controller) {
    if (goog.global.CLOSURE_IMPORT_SCRIPT) {
      if (goog.global.CLOSURE_IMPORT_SCRIPT(this.path)) {
        controller.loaded();
      } else {
        controller.pause();
      }
      return;
    }
    if (!goog.inHtmlDocument_()) {
      goog.logToConsole_("Cannot use default debug loader outside of HTML documents.");
      controller.pause();
      return;
    }
    var doc = goog.global.document;
    var dep = this;
    function write(src, contents) {
      var nonceAttr = "";
      var nonce = goog.getScriptNonce_();
      if (nonce) {
        nonceAttr = ' nonce\x3d"' + nonce + '"';
      }
      if (contents) {
        var script = '\x3cscript type\x3d"module" crossorigin' + nonceAttr + "\x3e" + contents + "\x3c/" + "script\x3e";
        doc.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(script) : script);
      } else {
        var script = '\x3cscript type\x3d"module" crossorigin src\x3d"' + src + '"' + nonceAttr + "\x3e\x3c/" + "script\x3e";
        doc.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(script) : script);
      }
    }
    function append(src, contents) {
      var scriptEl = doc.createElement("script");
      scriptEl.defer = true;
      scriptEl.async = false;
      scriptEl.type = "module";
      scriptEl.setAttribute("crossorigin", true);
      var nonce = goog.getScriptNonce_();
      if (nonce) {
        scriptEl.nonce = nonce;
      }
      if (contents) {
        scriptEl.text = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScript(contents) : contents;
      } else {
        scriptEl.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(src) : src;
      }
      doc.head.appendChild(scriptEl);
    }
    var create;
    if (goog.isDocumentLoading_()) {
      create = write;
      goog.Dependency.defer_ = true;
    } else {
      create = append;
    }
    var beforeKey = goog.Dependency.registerCallback_(function() {
      goog.Dependency.unregisterCallback_(beforeKey);
      controller.setModuleState(goog.ModuleType.ES6);
    });
    create(undefined, 'goog.Dependency.callback_("' + beforeKey + '")');
    create(this.path, undefined);
    var registerKey = goog.Dependency.registerCallback_(function(exports) {
      goog.Dependency.unregisterCallback_(registerKey);
      controller.registerEs6ModuleExports(dep.path, exports, goog.moduleLoaderState_.moduleName);
    });
    create(undefined, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + registerKey + '", m)');
    var afterKey = goog.Dependency.registerCallback_(function() {
      goog.Dependency.unregisterCallback_(afterKey);
      controller.clearModuleState();
      controller.loaded();
    });
    create(undefined, 'goog.Dependency.callback_("' + afterKey + '")');
  };
  goog.TransformedDependency = function(path, relativePath, provides, requires, loadFlags) {
    goog.TransformedDependency.base(this, "constructor", path, relativePath, provides, requires, loadFlags);
    this.contents_ = null;
    this.lazyFetch_ = !goog.inHtmlDocument_() || !("noModule" in goog.global.document.createElement("script"));
  };
  goog.inherits(goog.TransformedDependency, goog.Dependency);
  goog.TransformedDependency.prototype.load = function(controller) {
    var dep = this;
    function fetch() {
      dep.contents_ = goog.loadFileSync_(dep.path);
      if (dep.contents_) {
        dep.contents_ = dep.transform(dep.contents_);
        if (dep.contents_) {
          dep.contents_ += "\n//# sourceURL\x3d" + dep.path;
        }
      }
    }
    if (goog.global.CLOSURE_IMPORT_SCRIPT) {
      fetch();
      if (this.contents_ && goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_)) {
        this.contents_ = null;
        controller.loaded();
      } else {
        controller.pause();
      }
      return;
    }
    var isEs6 = this.loadFlags["module"] == goog.ModuleType.ES6;
    if (!this.lazyFetch_) {
      fetch();
    }
    function load() {
      if (dep.lazyFetch_) {
        fetch();
      }
      if (!dep.contents_) {
        return;
      }
      if (isEs6) {
        controller.setModuleState(goog.ModuleType.ES6);
      }
      var namespace;
      try {
        var contents = dep.contents_;
        dep.contents_ = null;
        goog.globalEval(goog.CLOSURE_EVAL_PREFILTER_.createScript(contents));
        if (isEs6) {
          namespace = goog.moduleLoaderState_.moduleName;
        }
      } finally {
        if (isEs6) {
          controller.clearModuleState();
        }
      }
      if (isEs6) {
        goog.global["$jscomp"]["require"]["ensure"]([dep.getPathName()], function() {
          controller.registerEs6ModuleExports(dep.path, goog.global["$jscomp"]["require"](dep.getPathName()), namespace);
        });
      }
      controller.loaded();
    }
    function fetchInOwnScriptThenLoad() {
      var doc = goog.global.document;
      var key = goog.Dependency.registerCallback_(function() {
        goog.Dependency.unregisterCallback_(key);
        load();
      });
      var nonce = goog.getScriptNonce_();
      var nonceAttr = nonce ? ' nonce\x3d"' + nonce + '"' : "";
      var script = "\x3cscript" + nonceAttr + "\x3e" + goog.protectScriptTag_('goog.Dependency.callback_("' + key + '");') + "\x3c/" + "script\x3e";
      doc.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(script) : script);
    }
    var anythingElsePending = controller.pending().length > 1;
    var useOldIeWorkAround = anythingElsePending && goog.DebugLoader_.IS_OLD_IE_;
    var needsAsyncLoading = goog.Dependency.defer_ && (anythingElsePending || goog.isDocumentLoading_());
    if (useOldIeWorkAround || needsAsyncLoading) {
      controller.defer(function() {
        load();
      });
      return;
    }
    var doc = goog.global.document;
    var isInternetExplorerOrEdge = goog.inHtmlDocument_() && ("ActiveXObject" in goog.global || goog.isEdge_());
    if (isEs6 && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !isInternetExplorerOrEdge) {
      goog.Dependency.defer_ = true;
      controller.pause();
      var oldCallback = doc.onreadystatechange;
      doc.onreadystatechange = function() {
        if (doc.readyState == "interactive") {
          doc.onreadystatechange = oldCallback;
          load();
          controller.resume();
        }
        if (typeof oldCallback === "function") {
          oldCallback.apply(undefined, arguments);
        }
      };
    } else {
      if (goog.DebugLoader_.IS_OLD_IE_ || !goog.inHtmlDocument_() || !goog.isDocumentLoading_()) {
        load();
      } else {
        fetchInOwnScriptThenLoad();
      }
    }
  };
  goog.TransformedDependency.prototype.transform = function(contents) {
  };
  goog.TranspiledDependency = function(path, relativePath, provides, requires, loadFlags, transpiler) {
    goog.TranspiledDependency.base(this, "constructor", path, relativePath, provides, requires, loadFlags);
    this.transpiler = transpiler;
  };
  goog.inherits(goog.TranspiledDependency, goog.TransformedDependency);
  goog.TranspiledDependency.prototype.transform = function(contents) {
    return this.transpiler.transpile(contents, this.getPathName());
  };
  goog.PreTranspiledEs6ModuleDependency = function(path, relativePath, provides, requires, loadFlags) {
    goog.PreTranspiledEs6ModuleDependency.base(this, "constructor", path, relativePath, provides, requires, loadFlags);
  };
  goog.inherits(goog.PreTranspiledEs6ModuleDependency, goog.TransformedDependency);
  goog.PreTranspiledEs6ModuleDependency.prototype.transform = function(contents) {
    return contents;
  };
  goog.GoogModuleDependency = function(path, relativePath, provides, requires, loadFlags, needsTranspile, transpiler) {
    goog.GoogModuleDependency.base(this, "constructor", path, relativePath, provides, requires, loadFlags);
    this.needsTranspile_ = needsTranspile;
    this.transpiler_ = transpiler;
  };
  goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency);
  goog.GoogModuleDependency.prototype.transform = function(contents) {
    if (this.needsTranspile_) {
      contents = this.transpiler_.transpile(contents, this.getPathName());
    }
    if (!goog.LOAD_MODULE_USING_EVAL || goog.global.JSON === undefined) {
      return "" + "goog.loadModule(function(exports) {" + '"use strict";' + contents + "\n" + ";return exports" + "});" + "\n//# sourceURL\x3d" + this.path + "\n";
    } else {
      return "" + "goog.loadModule(" + goog.global.JSON.stringify(contents + "\n//# sourceURL\x3d" + this.path + "\n") + ");";
    }
  };
  goog.DebugLoader_.IS_OLD_IE_ = !!(!goog.global.atob && goog.global.document && goog.global.document["all"]);
  goog.DebugLoader_.prototype.addDependency = function(relPath, provides, requires, opt_loadFlags) {
    provides = provides || [];
    relPath = relPath.replace(/\\/g, "/");
    var path = goog.normalizePath_(goog.basePath + relPath);
    if (!opt_loadFlags || typeof opt_loadFlags === "boolean") {
      opt_loadFlags = opt_loadFlags ? {"module":goog.ModuleType.GOOG} : {};
    }
    var dep = this.factory_.createDependency(path, relPath, provides, requires, opt_loadFlags, goog.transpiler_.needsTranspile(opt_loadFlags["lang"] || "es3", opt_loadFlags["module"]));
    this.dependencies_[path] = dep;
    for (var i = 0; i < provides.length; i++) {
      this.idToPath_[provides[i]] = path;
    }
    this.idToPath_[relPath] = path;
  };
  goog.DependencyFactory = function(transpiler) {
    this.transpiler = transpiler;
  };
  goog.DependencyFactory.prototype.createDependency = function(path, relativePath, provides, requires, loadFlags, needsTranspile) {
    if (loadFlags["module"] == goog.ModuleType.GOOG) {
      return new goog.GoogModuleDependency(path, relativePath, provides, requires, loadFlags, needsTranspile, this.transpiler);
    } else if (needsTranspile) {
      return new goog.TranspiledDependency(path, relativePath, provides, requires, loadFlags, this.transpiler);
    } else {
      if (loadFlags["module"] == goog.ModuleType.ES6) {
        if (goog.TRANSPILE == "never" && goog.ASSUME_ES_MODULES_TRANSPILED) {
          return new goog.PreTranspiledEs6ModuleDependency(path, relativePath, provides, requires, loadFlags);
        } else {
          return new goog.Es6ModuleDependency(path, relativePath, provides, requires, loadFlags);
        }
      } else {
        return new goog.Dependency(path, relativePath, provides, requires, loadFlags);
      }
    }
  };
  goog.debugLoader_ = new goog.DebugLoader_();
  goog.loadClosureDeps = function() {
    goog.debugLoader_.loadClosureDeps();
  };
  goog.setDependencyFactory = function(factory) {
    goog.debugLoader_.setDependencyFactory(factory);
  };
  goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#base") : null;
  if (!goog.global.CLOSURE_NO_DEPS) {
    goog.debugLoader_.loadClosureDeps();
  }
  goog.bootstrap = function(namespaces, callback) {
    goog.debugLoader_.bootstrap(namespaces, callback);
  };
}
if (!COMPILED) {
  var isChrome87 = false;
  try {
    isChrome87 = eval(goog.global.trustedTypes.emptyScript) !== goog.global.trustedTypes.emptyScript;
  } catch (err) {
  }
  goog.CLOSURE_EVAL_PREFILTER_ = goog.global.trustedTypes && isChrome87 && goog.createTrustedTypesPolicy("goog#base#devonly#eval") || {createScript:goog.identity_};
}

$CLJS.$jscomp = {};
goog.global = CLJS_GLOBAL;var SHADOW_ENV = $CLJS.SHADOW_ENV = (function() {
    var env = {};

    var loadedFiles = {};

    env.setLoaded = function(name) {
        loadedFiles[name] = true;
    };

    env.load = function(opts, paths) {
        paths.forEach(function(name) {
            env.setLoaded(name);
        });
    };

    env.isLoaded = function(name) {
        // this is only used by live-reload checking if it should reload a file
        // since all files will always be loaded we don't really need to track this?
        return true;
        // return loadedFiles[name] || false;
    }

    return env;
})();

var originalGoogExportPath = goog.exportPath_;

goog.exportPath_ = function(name, object, overwriteImplicit, objectToExportTo) {
  // must keep the export to global for things like (goog/exportSymbol js/React ...)
  originalGoogExportPath(name, object, overwriteImplicit, objectToExportTo);
  // goog.module.declareLegacyNamespace() otherwise only exports to global but we need it on the $CLJS object
  if (goog.isInModuleLoader_()) {
    originalGoogExportPath(name, object, overwriteImplicit, $CLJS);
  }
}

goog.provide = function(name) {
  return originalGoogExportPath(name, undefined, undefined, $CLJS);
};


// in goog.module this needs to have a return value
// the getObjectByName will only find modules that declareLegacyNamespace
// otherwise get the module directly. can't use default goog.require since
// we are never using the debug loader and it never has a return value in that case
goog.require = function(name) {
  return goog.getObjectByName(name, $CLJS) || goog.module.getInternal_(name);
};

module.exports = $CLJS;

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.debug.Error");
  goog.module.declareLegacyNamespace();
  function DebugError(msg = undefined, cause = undefined) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DebugError);
    } else {
      const stack = (new Error()).stack;
      if (stack) {
        this.stack = stack;
      }
    }
    if (msg) {
      this.message = String(msg);
    }
    if (cause !== undefined) {
      this.cause = cause;
    }
    this.reportErrorToServer = true;
  }
  goog.inherits(DebugError, Error);
  DebugError.prototype.name = "CustomError";
  exports = DebugError;
  return exports;
});

goog.provide("goog.dom.NodeType");
goog.dom.NodeType = {ELEMENT:1, ATTRIBUTE:2, TEXT:3, CDATA_SECTION:4, ENTITY_REFERENCE:5, ENTITY:6, PROCESSING_INSTRUCTION:7, COMMENT:8, DOCUMENT:9, DOCUMENT_TYPE:10, DOCUMENT_FRAGMENT:11, NOTATION:12};

goog.provide("goog.asserts");
goog.provide("goog.asserts.AssertionError");
goog.require("goog.debug.Error");
goog.require("goog.dom.NodeType");
goog.asserts.ENABLE_ASSERTS = goog.define("goog.asserts.ENABLE_ASSERTS", goog.DEBUG);
goog.asserts.AssertionError = function(messagePattern, messageArgs) {
  goog.debug.Error.call(this, goog.asserts.subs_(messagePattern, messageArgs));
  this.messagePattern = messagePattern;
};
goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
goog.asserts.AssertionError.prototype.name = "AssertionError";
goog.asserts.DEFAULT_ERROR_HANDLER = function(e) {
  throw e;
};
goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER;
goog.asserts.subs_ = function(pattern, subs) {
  var splitParts = pattern.split("%s");
  var returnString = "";
  var subLast = splitParts.length - 1;
  for (var i = 0; i < subLast; i++) {
    var sub = i < subs.length ? subs[i] : "%s";
    returnString += splitParts[i] + sub;
  }
  return returnString + splitParts[subLast];
};
goog.asserts.doAssertFailure_ = function(defaultMessage, defaultArgs, givenMessage, givenArgs) {
  var message = "Assertion failed";
  if (givenMessage) {
    message += ": " + givenMessage;
    var args = givenArgs;
  } else if (defaultMessage) {
    message += ": " + defaultMessage;
    args = defaultArgs;
  }
  var e = new goog.asserts.AssertionError("" + message, args || []);
  goog.asserts.errorHandler_(e);
};
goog.asserts.setErrorHandler = function(errorHandler) {
  if (goog.asserts.ENABLE_ASSERTS) {
    goog.asserts.errorHandler_ = errorHandler;
  }
};
goog.asserts.assert = function(condition, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && !condition) {
    goog.asserts.doAssertFailure_("", null, opt_message, Array.prototype.slice.call(arguments, 2));
  }
  return condition;
};
goog.asserts.assertExists = function(value, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && value == null) {
    goog.asserts.doAssertFailure_("Expected to exist: %s.", [value], opt_message, Array.prototype.slice.call(arguments, 2));
  }
  return value;
};
goog.asserts.fail = function(opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS) {
    goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + (opt_message ? ": " + opt_message : ""), Array.prototype.slice.call(arguments, 1)));
  }
};
goog.asserts.assertNumber = function(value, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && typeof value !== "number") {
    goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
  }
  return value;
};
goog.asserts.assertString = function(value, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && typeof value !== "string") {
    goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
  }
  return value;
};
goog.asserts.assertFunction = function(value, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && typeof value !== "function") {
    goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
  }
  return value;
};
goog.asserts.assertObject = function(value, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && !goog.isObject(value)) {
    goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
  }
  return value;
};
goog.asserts.assertArray = function(value, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && !Array.isArray(value)) {
    goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
  }
  return value;
};
goog.asserts.assertBoolean = function(value, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && typeof value !== "boolean") {
    goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
  }
  return value;
};
goog.asserts.assertElement = function(value, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && (!goog.isObject(value) || value.nodeType != goog.dom.NodeType.ELEMENT)) {
    goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
  }
  return value;
};
goog.asserts.assertInstanceof = function(value, type, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && !(value instanceof type)) {
    goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [goog.asserts.getType_(type), goog.asserts.getType_(value)], opt_message, Array.prototype.slice.call(arguments, 3));
  }
  return value;
};
goog.asserts.assertFinite = function(value, opt_message, var_args) {
  if (goog.asserts.ENABLE_ASSERTS && (typeof value != "number" || !isFinite(value))) {
    goog.asserts.doAssertFailure_("Expected %s to be a finite number but it is not.", [value], opt_message, Array.prototype.slice.call(arguments, 2));
  }
  return value;
};
goog.asserts.getType_ = function(value) {
  if (value instanceof Function) {
    return value.displayName || value.name || "unknown type name";
  } else if (value instanceof Object) {
    return value.constructor.displayName || value.constructor.name || Object.prototype.toString.call(value);
  } else {
    return value === null ? "null" : typeof value;
  }
};

goog.provide("goog.reflect");
goog.reflect.object = function(type, object) {
  return object;
};
goog.reflect.objectProperty = function(prop, object) {
  return prop;
};
goog.reflect.sinkValue = function(x) {
  goog.reflect.sinkValue[" "](x);
  return x;
};
goog.reflect.sinkValue[" "] = goog.nullFunction;
goog.reflect.canAccessProperty = function(obj, prop) {
  try {
    goog.reflect.sinkValue(obj[prop]);
    return true;
  } catch (e) {
  }
  return false;
};
goog.reflect.cache = function(cacheObj, key, valueFn, opt_keyFn) {
  const storedKey = opt_keyFn ? opt_keyFn(key) : key;
  if (Object.prototype.hasOwnProperty.call(cacheObj, storedKey)) {
    return cacheObj[storedKey];
  }
  return cacheObj[storedKey] = valueFn(key);
};

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.math.Long");
  goog.module.declareLegacyNamespace();
  const asserts = goog.require("goog.asserts");
  const reflect = goog.require("goog.reflect");
  class Long {
    constructor(low, high) {
      this.low_ = low | 0;
      this.high_ = high | 0;
    }
    toInt() {
      return this.low_;
    }
    toNumber() {
      return this.high_ * TWO_PWR_32_DBL_ + this.getLowBitsUnsigned();
    }
    isSafeInteger() {
      var top11Bits = this.high_ >> 21;
      return top11Bits == 0 || top11Bits == -1 && !(this.low_ == 0 && this.high_ == (4292870144 | 0));
    }
    toString(opt_radix) {
      var radix = opt_radix || 10;
      if (radix < 2 || 36 < radix) {
        throw new Error("radix out of range: " + radix);
      }
      if (this.isSafeInteger()) {
        var asNumber = this.toNumber();
        return radix == 10 ? "" + asNumber : asNumber.toString(radix);
      }
      var safeDigits = 14 - (radix >> 2);
      var radixPowSafeDigits = Math.pow(radix, safeDigits);
      var radixToPower = Long.fromBits(radixPowSafeDigits, radixPowSafeDigits / TWO_PWR_32_DBL_);
      var remDiv = this.div(radixToPower);
      var val = Math.abs(this.subtract(remDiv.multiply(radixToPower)).toNumber());
      var digits = radix == 10 ? "" + val : val.toString(radix);
      if (digits.length < safeDigits) {
        digits = "0000000000000".substr(digits.length - safeDigits) + digits;
      }
      val = remDiv.toNumber();
      return (radix == 10 ? val : val.toString(radix)) + digits;
    }
    getHighBits() {
      return this.high_;
    }
    getLowBits() {
      return this.low_;
    }
    getLowBitsUnsigned() {
      return this.low_ >>> 0;
    }
    getNumBitsAbs() {
      if (this.isNegative()) {
        if (this.equals(Long.getMinValue())) {
          return 64;
        } else {
          return this.negate().getNumBitsAbs();
        }
      } else {
        var val = this.high_ != 0 ? this.high_ : this.low_;
        for (var bit = 31; bit > 0; bit--) {
          if ((val & 1 << bit) != 0) {
            break;
          }
        }
        return this.high_ != 0 ? bit + 33 : bit + 1;
      }
    }
    isZero() {
      return this.low_ == 0 && this.high_ == 0;
    }
    isNegative() {
      return this.high_ < 0;
    }
    isOdd() {
      return (this.low_ & 1) == 1;
    }
    hashCode() {
      return this.getLowBits() ^ this.getHighBits();
    }
    equals(other) {
      return this.low_ == other.low_ && this.high_ == other.high_;
    }
    notEquals(other) {
      return !this.equals(other);
    }
    lessThan(other) {
      return this.compare(other) < 0;
    }
    lessThanOrEqual(other) {
      return this.compare(other) <= 0;
    }
    greaterThan(other) {
      return this.compare(other) > 0;
    }
    greaterThanOrEqual(other) {
      return this.compare(other) >= 0;
    }
    compare(other) {
      if (this.high_ == other.high_) {
        if (this.low_ == other.low_) {
          return 0;
        }
        return this.getLowBitsUnsigned() > other.getLowBitsUnsigned() ? 1 : -1;
      }
      return this.high_ > other.high_ ? 1 : -1;
    }
    negate() {
      var negLow = ~this.low_ + 1 | 0;
      var overflowFromLow = !negLow;
      var negHigh = ~this.high_ + overflowFromLow | 0;
      return Long.fromBits(negLow, negHigh);
    }
    add(other) {
      var a48 = this.high_ >>> 16;
      var a32 = this.high_ & 65535;
      var a16 = this.low_ >>> 16;
      var a00 = this.low_ & 65535;
      var b48 = other.high_ >>> 16;
      var b32 = other.high_ & 65535;
      var b16 = other.low_ >>> 16;
      var b00 = other.low_ & 65535;
      var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
      c00 += a00 + b00;
      c16 += c00 >>> 16;
      c00 &= 65535;
      c16 += a16 + b16;
      c32 += c16 >>> 16;
      c16 &= 65535;
      c32 += a32 + b32;
      c48 += c32 >>> 16;
      c32 &= 65535;
      c48 += a48 + b48;
      c48 &= 65535;
      return Long.fromBits(c16 << 16 | c00, c48 << 16 | c32);
    }
    subtract(other) {
      return this.add(other.negate());
    }
    multiply(other) {
      if (this.isZero()) {
        return this;
      }
      if (other.isZero()) {
        return other;
      }
      var a48 = this.high_ >>> 16;
      var a32 = this.high_ & 65535;
      var a16 = this.low_ >>> 16;
      var a00 = this.low_ & 65535;
      var b48 = other.high_ >>> 16;
      var b32 = other.high_ & 65535;
      var b16 = other.low_ >>> 16;
      var b00 = other.low_ & 65535;
      var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
      c00 += a00 * b00;
      c16 += c00 >>> 16;
      c00 &= 65535;
      c16 += a16 * b00;
      c32 += c16 >>> 16;
      c16 &= 65535;
      c16 += a00 * b16;
      c32 += c16 >>> 16;
      c16 &= 65535;
      c32 += a32 * b00;
      c48 += c32 >>> 16;
      c32 &= 65535;
      c32 += a16 * b16;
      c48 += c32 >>> 16;
      c32 &= 65535;
      c32 += a00 * b32;
      c48 += c32 >>> 16;
      c32 &= 65535;
      c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
      c48 &= 65535;
      return Long.fromBits(c16 << 16 | c00, c48 << 16 | c32);
    }
    div(other) {
      if (other.isZero()) {
        throw new Error("division by zero");
      }
      if (this.isNegative()) {
        if (this.equals(Long.getMinValue())) {
          if (other.equals(Long.getOne()) || other.equals(Long.getNegOne())) {
            return Long.getMinValue();
          }
          if (other.equals(Long.getMinValue())) {
            return Long.getOne();
          }
          var halfThis = this.shiftRight(1);
          var approx = halfThis.div(other).shiftLeft(1);
          if (approx.equals(Long.getZero())) {
            return other.isNegative() ? Long.getOne() : Long.getNegOne();
          }
          var rem = this.subtract(other.multiply(approx));
          var result = approx.add(rem.div(other));
          return result;
        }
        if (other.isNegative()) {
          return this.negate().div(other.negate());
        }
        return this.negate().div(other).negate();
      }
      if (this.isZero()) {
        return Long.getZero();
      }
      if (other.isNegative()) {
        if (other.equals(Long.getMinValue())) {
          return Long.getZero();
        }
        return this.div(other.negate()).negate();
      }
      var res = Long.getZero();
      var rem = this;
      while (rem.greaterThanOrEqual(other)) {
        var approx = Math.max(1, Math.floor(rem.toNumber() / other.toNumber()));
        var log2 = Math.ceil(Math.log(approx) / Math.LN2);
        var delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
        var approxRes = Long.fromNumber(approx);
        var approxRem = approxRes.multiply(other);
        while (approxRem.isNegative() || approxRem.greaterThan(rem)) {
          approx -= delta;
          approxRes = Long.fromNumber(approx);
          approxRem = approxRes.multiply(other);
        }
        if (approxRes.isZero()) {
          approxRes = Long.getOne();
        }
        res = res.add(approxRes);
        rem = rem.subtract(approxRem);
      }
      return res;
    }
    modulo(other) {
      return this.subtract(this.div(other).multiply(other));
    }
    not() {
      return Long.fromBits(~this.low_, ~this.high_);
    }
    and(other) {
      return Long.fromBits(this.low_ & other.low_, this.high_ & other.high_);
    }
    or(other) {
      return Long.fromBits(this.low_ | other.low_, this.high_ | other.high_);
    }
    xor(other) {
      return Long.fromBits(this.low_ ^ other.low_, this.high_ ^ other.high_);
    }
    shiftLeft(numBits) {
      numBits &= 63;
      if (numBits == 0) {
        return this;
      } else {
        var low = this.low_;
        if (numBits < 32) {
          var high = this.high_;
          return Long.fromBits(low << numBits, high << numBits | low >>> 32 - numBits);
        } else {
          return Long.fromBits(0, low << numBits - 32);
        }
      }
    }
    shiftRight(numBits) {
      numBits &= 63;
      if (numBits == 0) {
        return this;
      } else {
        var high = this.high_;
        if (numBits < 32) {
          var low = this.low_;
          return Long.fromBits(low >>> numBits | high << 32 - numBits, high >> numBits);
        } else {
          return Long.fromBits(high >> numBits - 32, high >= 0 ? 0 : -1);
        }
      }
    }
    shiftRightUnsigned(numBits) {
      numBits &= 63;
      if (numBits == 0) {
        return this;
      } else {
        var high = this.high_;
        if (numBits < 32) {
          var low = this.low_;
          return Long.fromBits(low >>> numBits | high << 32 - numBits, high >>> numBits);
        } else if (numBits == 32) {
          return Long.fromBits(high, 0);
        } else {
          return Long.fromBits(high >>> numBits - 32, 0);
        }
      }
    }
    static fromInt(value) {
      var intValue = value | 0;
      asserts.assert(value === intValue, "value should be a 32-bit integer");
      if (-128 <= intValue && intValue < 128) {
        return getCachedIntValue_(intValue);
      } else {
        return new Long(intValue, intValue < 0 ? -1 : 0);
      }
    }
    static fromNumber(value) {
      if (value > 0) {
        if (value >= TWO_PWR_63_DBL_) {
          return Long.getMaxValue();
        }
        return new Long(value, value / TWO_PWR_32_DBL_);
      } else if (value < 0) {
        if (value <= -TWO_PWR_63_DBL_) {
          return Long.getMinValue();
        }
        return (new Long(-value, -value / TWO_PWR_32_DBL_)).negate();
      } else {
        return Long.getZero();
      }
    }
    static fromBits(lowBits, highBits) {
      return new Long(lowBits, highBits);
    }
    static fromString(str, opt_radix) {
      if (str.charAt(0) == "-") {
        return Long.fromString(str.substring(1), opt_radix).negate();
      }
      var numberValue = parseInt(str, opt_radix || 10);
      if (numberValue <= MAX_SAFE_INTEGER_) {
        return new Long(numberValue % TWO_PWR_32_DBL_ | 0, numberValue / TWO_PWR_32_DBL_ | 0);
      }
      if (str.length == 0) {
        throw new Error("number format error: empty string");
      }
      if (str.indexOf("-") >= 0) {
        throw new Error('number format error: interior "-" character: ' + str);
      }
      var radix = opt_radix || 10;
      if (radix < 2 || 36 < radix) {
        throw new Error("radix out of range: " + radix);
      }
      var radixToPower = Long.fromNumber(Math.pow(radix, 8));
      var result = Long.getZero();
      for (var i = 0; i < str.length; i += 8) {
        var size = Math.min(8, str.length - i);
        var value = parseInt(str.substring(i, i + size), radix);
        if (size < 8) {
          var power = Long.fromNumber(Math.pow(radix, size));
          result = result.multiply(power).add(Long.fromNumber(value));
        } else {
          result = result.multiply(radixToPower);
          result = result.add(Long.fromNumber(value));
        }
      }
      return result;
    }
    static isStringInRange(str, opt_radix) {
      var radix = opt_radix || 10;
      if (radix < 2 || 36 < radix) {
        throw new Error("radix out of range: " + radix);
      }
      var extremeValue = str.charAt(0) == "-" ? MIN_VALUE_FOR_RADIX_[radix] : MAX_VALUE_FOR_RADIX_[radix];
      if (str.length < extremeValue.length) {
        return true;
      } else if (str.length == extremeValue.length && str <= extremeValue) {
        return true;
      } else {
        return false;
      }
    }
    static getZero() {
      return ZERO_;
    }
    static getOne() {
      return ONE_;
    }
    static getNegOne() {
      return NEG_ONE_;
    }
    static getMaxValue() {
      return MAX_VALUE_;
    }
    static getMinValue() {
      return MIN_VALUE_;
    }
    static getTwoPwr24() {
      return TWO_PWR_24_;
    }
  }
  exports = Long;
  const IntCache_ = {};
  function getCachedIntValue_(value) {
    return reflect.cache(IntCache_, value, function(val) {
      return new Long(val, val < 0 ? -1 : 0);
    });
  }
  const MAX_VALUE_FOR_RADIX_ = ["", "", "111111111111111111111111111111111111111111111111111111111111111", "2021110011022210012102010021220101220221", "13333333333333333333333333333333", "1104332401304422434310311212", "1540241003031030222122211", "22341010611245052052300", "777777777777777777777", "67404283172107811827", "9223372036854775807", "1728002635214590697", "41a792678515120367", "10b269549075433c37", "4340724c6c71dc7a7", "160e2ad3246366807", "7fffffffffffffff", "33d3d8307b214008", "16agh595df825fa7", 
  "ba643dci0ffeehh", "5cbfjia3fh26ja7", "2heiciiie82dh97", "1adaibb21dckfa7", "i6k448cf4192c2", "acd772jnc9l0l7", "64ie1focnn5g77", "3igoecjbmca687", "27c48l5b37oaop", "1bk39f3ah3dmq7", "q1se8f0m04isb", "hajppbc1fc207", "bm03i95hia437", "7vvvvvvvvvvvv", "5hg4ck9jd4u37", "3tdtk1v8j6tpp", "2pijmikexrxp7", "1y2p0ij32e8e7"];
  const MIN_VALUE_FOR_RADIX_ = ["", "", "-1000000000000000000000000000000000000000000000000000000000000000", "-2021110011022210012102010021220101220222", "-20000000000000000000000000000000", "-1104332401304422434310311213", "-1540241003031030222122212", "-22341010611245052052301", "-1000000000000000000000", "-67404283172107811828", "-9223372036854775808", "-1728002635214590698", "-41a792678515120368", "-10b269549075433c38", "-4340724c6c71dc7a8", "-160e2ad3246366808", "-8000000000000000", "-33d3d8307b214009", 
  "-16agh595df825fa8", "-ba643dci0ffeehi", "-5cbfjia3fh26ja8", "-2heiciiie82dh98", "-1adaibb21dckfa8", "-i6k448cf4192c3", "-acd772jnc9l0l8", "-64ie1focnn5g78", "-3igoecjbmca688", "-27c48l5b37oaoq", "-1bk39f3ah3dmq8", "-q1se8f0m04isc", "-hajppbc1fc208", "-bm03i95hia438", "-8000000000000", "-5hg4ck9jd4u38", "-3tdtk1v8j6tpq", "-2pijmikexrxp8", "-1y2p0ij32e8e8"];
  const MAX_SAFE_INTEGER_ = 9007199254740991;
  const TWO_PWR_32_DBL_ = 4294967296;
  const TWO_PWR_63_DBL_ = 0x7fffffffffffffff;
  const ZERO_ = Long.fromBits(0, 0);
  const ONE_ = Long.fromBits(1, 0);
  const NEG_ONE_ = Long.fromBits(-1, -1);
  const MAX_VALUE_ = Long.fromBits(4294967295, 2147483647);
  const MIN_VALUE_ = Long.fromBits(0, 2147483648);
  const TWO_PWR_24_ = Long.fromBits(1 << 24, 0);
  return exports;
});

goog.provide("goog.math.Integer");
goog.require("goog.reflect");
goog.math.Integer = function(bits, sign) {
  this.sign_ = sign;
  var localBits = [];
  var top = true;
  for (var i = bits.length - 1; i >= 0; i--) {
    var val = bits[i] | 0;
    if (!top || val != sign) {
      localBits[i] = val;
      top = false;
    }
  }
  this.bits_ = localBits;
};
goog.math.Integer.IntCache_ = {};
goog.math.Integer.fromInt = function(value) {
  if (-128 <= value && value < 128) {
    return goog.reflect.cache(goog.math.Integer.IntCache_, value, function(val) {
      return new goog.math.Integer([val | 0], val < 0 ? -1 : 0);
    });
  }
  return new goog.math.Integer([value | 0], value < 0 ? -1 : 0);
};
goog.math.Integer.fromNumber = function(value) {
  if (isNaN(value) || !isFinite(value)) {
    return goog.math.Integer.ZERO;
  } else if (value < 0) {
    return goog.math.Integer.fromNumber(-value).negate();
  } else {
    var bits = [];
    var pow = 1;
    for (var i = 0; value >= pow; i++) {
      bits[i] = value / pow | 0;
      pow *= goog.math.Integer.TWO_PWR_32_DBL_;
    }
    return new goog.math.Integer(bits, 0);
  }
};
goog.math.Integer.fromBits = function(bits) {
  var high = bits[bits.length - 1];
  return new goog.math.Integer(bits, high & 1 << 31 ? -1 : 0);
};
goog.math.Integer.fromString = function(str, opt_radix) {
  if (str.length == 0) {
    throw new Error("number format error: empty string");
  }
  var radix = opt_radix || 10;
  if (radix < 2 || 36 < radix) {
    throw new Error("radix out of range: " + radix);
  }
  if (str.charAt(0) == "-") {
    return goog.math.Integer.fromString(str.substring(1), radix).negate();
  } else if (str.indexOf("-") >= 0) {
    throw new Error('number format error: interior "-" character');
  }
  var radixToPower = goog.math.Integer.fromNumber(Math.pow(radix, 8));
  var result = goog.math.Integer.ZERO;
  for (var i = 0; i < str.length; i += 8) {
    var size = Math.min(8, str.length - i);
    var value = parseInt(str.substring(i, i + size), radix);
    if (size < 8) {
      var power = goog.math.Integer.fromNumber(Math.pow(radix, size));
      result = result.multiply(power).add(goog.math.Integer.fromNumber(value));
    } else {
      result = result.multiply(radixToPower);
      result = result.add(goog.math.Integer.fromNumber(value));
    }
  }
  return result;
};
goog.math.Integer.TWO_PWR_32_DBL_ = (1 << 16) * (1 << 16);
goog.math.Integer.ZERO = goog.math.Integer.fromInt(0);
goog.math.Integer.ONE = goog.math.Integer.fromInt(1);
goog.math.Integer.TWO_PWR_24_ = goog.math.Integer.fromInt(1 << 24);
goog.math.Integer.prototype.toInt = function() {
  return this.bits_.length > 0 ? this.bits_[0] : this.sign_;
};
goog.math.Integer.prototype.toNumber = function() {
  if (this.isNegative()) {
    return -this.negate().toNumber();
  } else {
    var val = 0;
    var pow = 1;
    for (var i = 0; i < this.bits_.length; i++) {
      val += this.getBitsUnsigned(i) * pow;
      pow *= goog.math.Integer.TWO_PWR_32_DBL_;
    }
    return val;
  }
};
goog.math.Integer.prototype.toString = function(opt_radix) {
  var radix = opt_radix || 10;
  if (radix < 2 || 36 < radix) {
    throw new Error("radix out of range: " + radix);
  }
  if (this.isZero()) {
    return "0";
  } else if (this.isNegative()) {
    return "-" + this.negate().toString(radix);
  }
  var radixToPower = goog.math.Integer.fromNumber(Math.pow(radix, 6));
  var rem = this;
  var result = "";
  while (true) {
    var remDiv = rem.divide(radixToPower);
    var intval = rem.subtract(remDiv.multiply(radixToPower)).toInt() >>> 0;
    var digits = intval.toString(radix);
    rem = remDiv;
    if (rem.isZero()) {
      return digits + result;
    } else {
      while (digits.length < 6) {
        digits = "0" + digits;
      }
      result = "" + digits + result;
    }
  }
};
goog.math.Integer.prototype.getBits = function(index) {
  if (index < 0) {
    return 0;
  } else if (index < this.bits_.length) {
    return this.bits_[index];
  } else {
    return this.sign_;
  }
};
goog.math.Integer.prototype.getBitsUnsigned = function(index) {
  var val = this.getBits(index);
  return val >= 0 ? val : goog.math.Integer.TWO_PWR_32_DBL_ + val;
};
goog.math.Integer.prototype.getSign = function() {
  return this.sign_;
};
goog.math.Integer.prototype.isZero = function() {
  if (this.sign_ != 0) {
    return false;
  }
  for (var i = 0; i < this.bits_.length; i++) {
    if (this.bits_[i] != 0) {
      return false;
    }
  }
  return true;
};
goog.math.Integer.prototype.isNegative = function() {
  return this.sign_ == -1;
};
goog.math.Integer.prototype.isOdd = function() {
  return this.bits_.length == 0 && this.sign_ == -1 || this.bits_.length > 0 && (this.bits_[0] & 1) != 0;
};
goog.math.Integer.prototype.equals = function(other) {
  if (this.sign_ != other.sign_) {
    return false;
  }
  var len = Math.max(this.bits_.length, other.bits_.length);
  for (var i = 0; i < len; i++) {
    if (this.getBits(i) != other.getBits(i)) {
      return false;
    }
  }
  return true;
};
goog.math.Integer.prototype.notEquals = function(other) {
  return !this.equals(other);
};
goog.math.Integer.prototype.greaterThan = function(other) {
  return this.compare(other) > 0;
};
goog.math.Integer.prototype.greaterThanOrEqual = function(other) {
  return this.compare(other) >= 0;
};
goog.math.Integer.prototype.lessThan = function(other) {
  return this.compare(other) < 0;
};
goog.math.Integer.prototype.lessThanOrEqual = function(other) {
  return this.compare(other) <= 0;
};
goog.math.Integer.prototype.compare = function(other) {
  var diff = this.subtract(other);
  if (diff.isNegative()) {
    return -1;
  } else if (diff.isZero()) {
    return 0;
  } else {
    return +1;
  }
};
goog.math.Integer.prototype.shorten = function(numBits) {
  var arr_index = numBits - 1 >> 5;
  var bit_index = (numBits - 1) % 32;
  var bits = [];
  for (var i = 0; i < arr_index; i++) {
    bits[i] = this.getBits(i);
  }
  var sigBits = bit_index == 31 ? 4294967295 : (1 << bit_index + 1) - 1;
  var val = this.getBits(arr_index) & sigBits;
  if (val & 1 << bit_index) {
    val |= 4294967295 - sigBits;
    bits[arr_index] = val;
    return new goog.math.Integer(bits, -1);
  } else {
    bits[arr_index] = val;
    return new goog.math.Integer(bits, 0);
  }
};
goog.math.Integer.prototype.negate = function() {
  return this.not().add(goog.math.Integer.ONE);
};
goog.math.Integer.prototype.abs = function() {
  return this.isNegative() ? this.negate() : this;
};
goog.math.Integer.prototype.add = function(other) {
  var len = Math.max(this.bits_.length, other.bits_.length);
  var arr = [];
  var carry = 0;
  for (var i = 0; i <= len; i++) {
    var a1 = this.getBits(i) >>> 16;
    var a0 = this.getBits(i) & 65535;
    var b1 = other.getBits(i) >>> 16;
    var b0 = other.getBits(i) & 65535;
    var c0 = carry + a0 + b0;
    var c1 = (c0 >>> 16) + a1 + b1;
    carry = c1 >>> 16;
    c0 &= 65535;
    c1 &= 65535;
    arr[i] = c1 << 16 | c0;
  }
  return goog.math.Integer.fromBits(arr);
};
goog.math.Integer.prototype.subtract = function(other) {
  return this.add(other.negate());
};
goog.math.Integer.prototype.multiply = function(other) {
  if (this.isZero()) {
    return goog.math.Integer.ZERO;
  } else if (other.isZero()) {
    return goog.math.Integer.ZERO;
  }
  if (this.isNegative()) {
    if (other.isNegative()) {
      return this.negate().multiply(other.negate());
    } else {
      return this.negate().multiply(other).negate();
    }
  } else if (other.isNegative()) {
    return this.multiply(other.negate()).negate();
  }
  if (this.lessThan(goog.math.Integer.TWO_PWR_24_) && other.lessThan(goog.math.Integer.TWO_PWR_24_)) {
    return goog.math.Integer.fromNumber(this.toNumber() * other.toNumber());
  }
  var len = this.bits_.length + other.bits_.length;
  var arr = [];
  for (var i = 0; i < 2 * len; i++) {
    arr[i] = 0;
  }
  for (var i = 0; i < this.bits_.length; i++) {
    for (var j = 0; j < other.bits_.length; j++) {
      var a1 = this.getBits(i) >>> 16;
      var a0 = this.getBits(i) & 65535;
      var b1 = other.getBits(j) >>> 16;
      var b0 = other.getBits(j) & 65535;
      arr[2 * i + 2 * j] += a0 * b0;
      goog.math.Integer.carry16_(arr, 2 * i + 2 * j);
      arr[2 * i + 2 * j + 1] += a1 * b0;
      goog.math.Integer.carry16_(arr, 2 * i + 2 * j + 1);
      arr[2 * i + 2 * j + 1] += a0 * b1;
      goog.math.Integer.carry16_(arr, 2 * i + 2 * j + 1);
      arr[2 * i + 2 * j + 2] += a1 * b1;
      goog.math.Integer.carry16_(arr, 2 * i + 2 * j + 2);
    }
  }
  for (var i = 0; i < len; i++) {
    arr[i] = arr[2 * i + 1] << 16 | arr[2 * i];
  }
  for (var i = len; i < 2 * len; i++) {
    arr[i] = 0;
  }
  return new goog.math.Integer(arr, 0);
};
goog.math.Integer.carry16_ = function(bits, index) {
  while ((bits[index] & 65535) != bits[index]) {
    bits[index + 1] += bits[index] >>> 16;
    bits[index] &= 65535;
    index++;
  }
};
goog.math.Integer.prototype.slowDivide_ = function(other) {
  if (this.isNegative() || other.isNegative()) {
    throw new Error("slowDivide_ only works with positive integers.");
  }
  var twoPower = goog.math.Integer.ONE;
  var multiple = other;
  while (multiple.lessThanOrEqual(this)) {
    twoPower = twoPower.shiftLeft(1);
    multiple = multiple.shiftLeft(1);
  }
  var res = twoPower.shiftRight(1);
  var total = multiple.shiftRight(1);
  var total2;
  multiple = multiple.shiftRight(2);
  twoPower = twoPower.shiftRight(2);
  while (!multiple.isZero()) {
    total2 = total.add(multiple);
    if (total2.lessThanOrEqual(this)) {
      res = res.add(twoPower);
      total = total2;
    }
    multiple = multiple.shiftRight(1);
    twoPower = twoPower.shiftRight(1);
  }
  var remainder = this.subtract(res.multiply(other));
  return new goog.math.Integer.DivisionResult(res, remainder);
};
goog.math.Integer.prototype.divide = function(other) {
  return this.divideAndRemainder(other).quotient;
};
goog.math.Integer.DivisionResult = function(quotient, remainder) {
  this.quotient = quotient;
  this.remainder = remainder;
};
goog.math.Integer.prototype.divideAndRemainder = function(other) {
  if (other.isZero()) {
    throw new Error("division by zero");
  } else if (this.isZero()) {
    return new goog.math.Integer.DivisionResult(goog.math.Integer.ZERO, goog.math.Integer.ZERO);
  }
  if (this.isNegative()) {
    var result = this.negate().divideAndRemainder(other);
    return new goog.math.Integer.DivisionResult(result.quotient.negate(), result.remainder.negate());
  } else if (other.isNegative()) {
    var result = this.divideAndRemainder(other.negate());
    return new goog.math.Integer.DivisionResult(result.quotient.negate(), result.remainder);
  }
  if (this.bits_.length > 30) {
    return this.slowDivide_(other);
  }
  var res = goog.math.Integer.ZERO;
  var rem = this;
  while (rem.greaterThanOrEqual(other)) {
    var approx = Math.max(1, Math.floor(rem.toNumber() / other.toNumber()));
    var log2 = Math.ceil(Math.log(approx) / Math.LN2);
    var delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
    var approxRes = goog.math.Integer.fromNumber(approx);
    var approxRem = approxRes.multiply(other);
    while (approxRem.isNegative() || approxRem.greaterThan(rem)) {
      approx -= delta;
      approxRes = goog.math.Integer.fromNumber(approx);
      approxRem = approxRes.multiply(other);
    }
    if (approxRes.isZero()) {
      approxRes = goog.math.Integer.ONE;
    }
    res = res.add(approxRes);
    rem = rem.subtract(approxRem);
  }
  return new goog.math.Integer.DivisionResult(res, rem);
};
goog.math.Integer.prototype.modulo = function(other) {
  return this.divideAndRemainder(other).remainder;
};
goog.math.Integer.prototype.not = function() {
  var len = this.bits_.length;
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr[i] = ~this.bits_[i];
  }
  return new goog.math.Integer(arr, ~this.sign_);
};
goog.math.Integer.prototype.and = function(other) {
  var len = Math.max(this.bits_.length, other.bits_.length);
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr[i] = this.getBits(i) & other.getBits(i);
  }
  return new goog.math.Integer(arr, this.sign_ & other.sign_);
};
goog.math.Integer.prototype.or = function(other) {
  var len = Math.max(this.bits_.length, other.bits_.length);
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr[i] = this.getBits(i) | other.getBits(i);
  }
  return new goog.math.Integer(arr, this.sign_ | other.sign_);
};
goog.math.Integer.prototype.xor = function(other) {
  var len = Math.max(this.bits_.length, other.bits_.length);
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr[i] = this.getBits(i) ^ other.getBits(i);
  }
  return new goog.math.Integer(arr, this.sign_ ^ other.sign_);
};
goog.math.Integer.prototype.shiftLeft = function(numBits) {
  var arr_delta = numBits >> 5;
  var bit_delta = numBits % 32;
  var len = this.bits_.length + arr_delta + (bit_delta > 0 ? 1 : 0);
  var arr = [];
  for (var i = 0; i < len; i++) {
    if (bit_delta > 0) {
      arr[i] = this.getBits(i - arr_delta) << bit_delta | this.getBits(i - arr_delta - 1) >>> 32 - bit_delta;
    } else {
      arr[i] = this.getBits(i - arr_delta);
    }
  }
  return new goog.math.Integer(arr, this.sign_);
};
goog.math.Integer.prototype.shiftRight = function(numBits) {
  var arr_delta = numBits >> 5;
  var bit_delta = numBits % 32;
  var len = this.bits_.length - arr_delta;
  var arr = [];
  for (var i = 0; i < len; i++) {
    if (bit_delta > 0) {
      arr[i] = this.getBits(i + arr_delta) >>> bit_delta | this.getBits(i + arr_delta + 1) << 32 - bit_delta;
    } else {
      arr[i] = this.getBits(i + arr_delta);
    }
  }
  return new goog.math.Integer(arr, this.sign_);
};

goog.provide("goog.dom.asserts");
goog.require("goog.asserts");
goog.dom.asserts.assertIsLocation = function(o) {
  if (goog.asserts.ENABLE_ASSERTS) {
    var win = goog.dom.asserts.getWindow_(o);
    if (win) {
      if (!o || !(o instanceof win.Location) && o instanceof win.Element) {
        goog.asserts.fail("Argument is not a Location (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_(o));
      }
    }
  }
  return o;
};
goog.dom.asserts.assertIsElementType_ = function(o, typename) {
  if (goog.asserts.ENABLE_ASSERTS) {
    var win = goog.dom.asserts.getWindow_(o);
    if (win && typeof win[typename] != "undefined") {
      if (!o || !(o instanceof win[typename]) && (o instanceof win.Location || o instanceof win.Element)) {
        goog.asserts.fail("Argument is not a %s (or a non-Element, non-Location mock); " + "got: %s", typename, goog.dom.asserts.debugStringForType_(o));
      }
    }
  }
  return o;
};
goog.dom.asserts.assertIsHTMLAnchorElement = function(o) {
  return goog.dom.asserts.assertIsElementType_(o, "HTMLAnchorElement");
};
goog.dom.asserts.assertIsHTMLButtonElement = function(o) {
  return goog.dom.asserts.assertIsElementType_(o, "HTMLButtonElement");
};
goog.dom.asserts.assertIsHTMLLinkElement = function(o) {
  return goog.dom.asserts.assertIsElementType_(o, "HTMLLinkElement");
};
goog.dom.asserts.assertIsHTMLImageElement = function(o) {
  return goog.dom.asserts.assertIsElementType_(o, "HTMLImageElement");
};
goog.dom.asserts.assertIsHTMLAudioElement = function(o) {
  return goog.dom.asserts.assertIsElementType_(o, "HTMLAudioElement");
};
goog.dom.asserts.assertIsHTMLVideoElement = function(o) {
  return goog.dom.asserts.assertIsElementType_(o, "HTMLVideoElement");
};
goog.dom.asserts.assertIsHTMLInputElement = function(o) {
  return goog.dom.asserts.assertIsElementType_(o, "HTMLInputElement");
};
goog.dom.asserts.assertIsHTMLTextAreaElement = function(o) {
  return goog.dom.asserts.assertIsElementType_(o, "HTMLTextAreaElement");
};
goog.dom.asserts.assertIsHTMLCanvasElement = function(o) {
  return goog.dom.asserts.assertIsElementType_(o, "HTMLCanvasElement");
};
goog.dom.asserts.assertIsHTMLEmbedElement = function(o) {
  return goog.dom.asserts.assertIsElementType_(o, "HTMLEmbedElement");
};
goog.dom.asserts.assertIsHTMLFormElement = function(o) {
  return goog.dom.asserts.assertIsElementType_(o, "HTMLFormElement");
};
goog.dom.asserts.assertIsHTMLFrameElement = function(o) {
  return goog.dom.asserts.assertIsElementType_(o, "HTMLFrameElement");
};
goog.dom.asserts.assertIsHTMLIFrameElement = function(o) {
  return goog.dom.asserts.assertIsElementType_(o, "HTMLIFrameElement");
};
goog.dom.asserts.assertIsHTMLObjectElement = function(o) {
  return goog.dom.asserts.assertIsElementType_(o, "HTMLObjectElement");
};
goog.dom.asserts.assertIsHTMLScriptElement = function(o) {
  return goog.dom.asserts.assertIsElementType_(o, "HTMLScriptElement");
};
goog.dom.asserts.debugStringForType_ = function(value) {
  if (goog.isObject(value)) {
    try {
      return value.constructor.displayName || value.constructor.name || Object.prototype.toString.call(value);
    } catch (e) {
      return "\x3cobject could not be stringified\x3e";
    }
  } else {
    return value === undefined ? "undefined" : value === null ? "null" : typeof value;
  }
};
goog.dom.asserts.getWindow_ = function(o) {
  try {
    var doc = o && o.ownerDocument;
    var win = doc && (doc.defaultView || doc.parentWindow);
    win = win || goog.global;
    if (win.Element && win.Location) {
      return win;
    }
  } catch (ex) {
  }
  return null;
};

goog.provide("goog.functions");
goog.functions.constant = function(retValue) {
  return function() {
    return retValue;
  };
};
goog.functions.FALSE = function() {
  return false;
};
goog.functions.TRUE = function() {
  return true;
};
goog.functions.NULL = function() {
  return null;
};
goog.functions.UNDEFINED = function() {
  return undefined;
};
goog.functions.EMPTY = goog.functions.UNDEFINED;
goog.functions.identity = function(opt_returnValue, var_args) {
  return opt_returnValue;
};
goog.functions.error = function(message) {
  return function() {
    throw new Error(message);
  };
};
goog.functions.fail = function(err) {
  return function() {
    throw err;
  };
};
goog.functions.lock = function(f, opt_numArgs) {
  opt_numArgs = opt_numArgs || 0;
  return function() {
    const self = this;
    return f.apply(self, Array.prototype.slice.call(arguments, 0, opt_numArgs));
  };
};
goog.functions.nth = function(n) {
  return function() {
    return arguments[n];
  };
};
goog.functions.partialRight = function(fn, var_args) {
  const rightArgs = Array.prototype.slice.call(arguments, 1);
  return function() {
    let self = this;
    if (self === goog.global) {
      self = undefined;
    }
    const newArgs = Array.prototype.slice.call(arguments);
    newArgs.push.apply(newArgs, rightArgs);
    return fn.apply(self, newArgs);
  };
};
goog.functions.withReturnValue = function(f, retValue) {
  return goog.functions.sequence(f, goog.functions.constant(retValue));
};
goog.functions.equalTo = function(value, opt_useLooseComparison) {
  return function(other) {
    return opt_useLooseComparison ? value == other : value === other;
  };
};
goog.functions.compose = function(fn, var_args) {
  const functions = arguments;
  const length = functions.length;
  return function() {
    const self = this;
    let result;
    if (length) {
      result = functions[length - 1].apply(self, arguments);
    }
    for (let i = length - 2; i >= 0; i--) {
      result = functions[i].call(self, result);
    }
    return result;
  };
};
goog.functions.sequence = function(var_args) {
  const functions = arguments;
  const length = functions.length;
  return function() {
    const self = this;
    let result;
    for (let i = 0; i < length; i++) {
      result = functions[i].apply(self, arguments);
    }
    return result;
  };
};
goog.functions.and = function(var_args) {
  const functions = arguments;
  const length = functions.length;
  return function() {
    const self = this;
    for (let i = 0; i < length; i++) {
      if (!functions[i].apply(self, arguments)) {
        return false;
      }
    }
    return true;
  };
};
goog.functions.or = function(var_args) {
  const functions = arguments;
  const length = functions.length;
  return function() {
    const self = this;
    for (let i = 0; i < length; i++) {
      if (functions[i].apply(self, arguments)) {
        return true;
      }
    }
    return false;
  };
};
goog.functions.not = function(f) {
  return function() {
    const self = this;
    return !f.apply(self, arguments);
  };
};
goog.functions.create = function(constructor, var_args) {
  const temp = function() {
  };
  temp.prototype = constructor.prototype;
  const obj = new temp();
  constructor.apply(obj, Array.prototype.slice.call(arguments, 1));
  return obj;
};
goog.functions.CACHE_RETURN_VALUE = goog.define("goog.functions.CACHE_RETURN_VALUE", true);
goog.functions.cacheReturnValue = function(fn) {
  let called = false;
  let value;
  return function() {
    if (!goog.functions.CACHE_RETURN_VALUE) {
      return fn();
    }
    if (!called) {
      value = fn();
      called = true;
    }
    return value;
  };
};
goog.functions.once = function(f) {
  let inner = f;
  return function() {
    if (inner) {
      const tmp = inner;
      inner = null;
      tmp();
    }
  };
};
goog.functions.debounce = function(f, interval, opt_scope) {
  let timeout = 0;
  return function(var_args) {
    goog.global.clearTimeout(timeout);
    const args = arguments;
    timeout = goog.global.setTimeout(function() {
      f.apply(opt_scope, args);
    }, interval);
  };
};
goog.functions.throttle = function(f, interval, opt_scope) {
  let timeout = 0;
  let shouldFire = false;
  let storedArgs = [];
  const handleTimeout = function() {
    timeout = 0;
    if (shouldFire) {
      shouldFire = false;
      fire();
    }
  };
  const fire = function() {
    timeout = goog.global.setTimeout(handleTimeout, interval);
    let args = storedArgs;
    storedArgs = [];
    f.apply(opt_scope, args);
  };
  return function(var_args) {
    storedArgs = arguments;
    if (!timeout) {
      fire();
    } else {
      shouldFire = true;
    }
  };
};
goog.functions.rateLimit = function(f, interval, opt_scope) {
  let timeout = 0;
  const handleTimeout = function() {
    timeout = 0;
  };
  return function(var_args) {
    if (!timeout) {
      timeout = goog.global.setTimeout(handleTimeout, interval);
      f.apply(opt_scope, arguments);
    }
  };
};
goog.functions.isFunction = val => {
  return typeof val === "function";
};

goog.provide("goog.string.TypedString");
goog.string.TypedString = function() {
};
goog.string.TypedString.prototype.implementsGoogStringTypedString;
goog.string.TypedString.prototype.getTypedStringValue;

goog.provide("goog.string.Const");
goog.require("goog.asserts");
goog.require("goog.string.TypedString");
goog.string.Const = function(opt_token, opt_content) {
  this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = opt_token === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ && opt_content || "";
  this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = goog.string.Const.TYPE_MARKER_;
};
goog.string.Const.prototype.implementsGoogStringTypedString = true;
goog.string.Const.prototype.getTypedStringValue = function() {
  return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
};
if (goog.DEBUG) {
  goog.string.Const.prototype.toString = function() {
    return "Const{" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + "}";
  };
}
goog.string.Const.unwrap = function(stringConst) {
  if (stringConst instanceof goog.string.Const && stringConst.constructor === goog.string.Const && stringConst.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === goog.string.Const.TYPE_MARKER_) {
    return stringConst.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
  } else {
    goog.asserts.fail("expected object of type Const, got '" + stringConst + "'");
    return "type_error:Const";
  }
};
goog.string.Const.from = function(s) {
  return new goog.string.Const(goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_, s);
};
goog.string.Const.TYPE_MARKER_ = {};
goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {};
goog.string.Const.EMPTY = goog.string.Const.from("");

goog.provide("goog.i18n.bidi");
goog.provide("goog.i18n.bidi.Dir");
goog.provide("goog.i18n.bidi.DirectionalString");
goog.provide("goog.i18n.bidi.Format");
goog.i18n.bidi.FORCE_RTL = goog.define("goog.i18n.bidi.FORCE_RTL", false);
goog.i18n.bidi.IS_RTL = goog.i18n.bidi.FORCE_RTL || (goog.LOCALE.substring(0, 2).toLowerCase() == "ar" || goog.LOCALE.substring(0, 2).toLowerCase() == "fa" || goog.LOCALE.substring(0, 2).toLowerCase() == "he" || goog.LOCALE.substring(0, 2).toLowerCase() == "iw" || goog.LOCALE.substring(0, 2).toLowerCase() == "ps" || goog.LOCALE.substring(0, 2).toLowerCase() == "sd" || goog.LOCALE.substring(0, 2).toLowerCase() == "ug" || goog.LOCALE.substring(0, 2).toLowerCase() == "ur" || goog.LOCALE.substring(0, 
2).toLowerCase() == "yi") && (goog.LOCALE.length == 2 || goog.LOCALE.substring(2, 3) == "-" || goog.LOCALE.substring(2, 3) == "_") || goog.LOCALE.length >= 3 && goog.LOCALE.substring(0, 3).toLowerCase() == "ckb" && (goog.LOCALE.length == 3 || goog.LOCALE.substring(3, 4) == "-" || goog.LOCALE.substring(3, 4) == "_") || goog.LOCALE.length >= 7 && ((goog.LOCALE.substring(2, 3) == "-" || goog.LOCALE.substring(2, 3) == "_") && (goog.LOCALE.substring(3, 7).toLowerCase() == "adlm" || goog.LOCALE.substring(3, 
7).toLowerCase() == "arab" || goog.LOCALE.substring(3, 7).toLowerCase() == "hebr" || goog.LOCALE.substring(3, 7).toLowerCase() == "nkoo" || goog.LOCALE.substring(3, 7).toLowerCase() == "rohg" || goog.LOCALE.substring(3, 7).toLowerCase() == "thaa")) || goog.LOCALE.length >= 8 && ((goog.LOCALE.substring(3, 4) == "-" || goog.LOCALE.substring(3, 4) == "_") && (goog.LOCALE.substring(4, 8).toLowerCase() == "adlm" || goog.LOCALE.substring(4, 8).toLowerCase() == "arab" || goog.LOCALE.substring(4, 8).toLowerCase() == 
"hebr" || goog.LOCALE.substring(4, 8).toLowerCase() == "nkoo" || goog.LOCALE.substring(4, 8).toLowerCase() == "rohg" || goog.LOCALE.substring(4, 8).toLowerCase() == "thaa"));
goog.i18n.bidi.Format = {LRE:"‪", RLE:"‫", PDF:"‬", LRM:"‎", RLM:"‏"};
goog.i18n.bidi.Dir = {LTR:1, RTL:-1, NEUTRAL:0};
goog.i18n.bidi.RIGHT = "right";
goog.i18n.bidi.LEFT = "left";
goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.LEFT : goog.i18n.bidi.RIGHT;
goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT;
goog.i18n.bidi.toDir = function(givenDir, opt_noNeutral) {
  if (typeof givenDir == "number") {
    return givenDir > 0 ? goog.i18n.bidi.Dir.LTR : givenDir < 0 ? goog.i18n.bidi.Dir.RTL : opt_noNeutral ? null : goog.i18n.bidi.Dir.NEUTRAL;
  } else if (givenDir == null) {
    return null;
  } else {
    return givenDir ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
  }
};
goog.i18n.bidi.ltrChars_ = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ऀ-῿" + "‎Ⰰ-\ud801\ud804-\ud839\ud83c-\udbff" + "豈-﬜︀-﹯﻽-￿";
goog.i18n.bidi.rtlChars_ = "֑-ۯۺ-ࣿ‏\ud802-\ud803\ud83a-\ud83b" + "יִ-﷿ﹰ-ﻼ";
goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g;
goog.i18n.bidi.stripHtmlIfNeeded_ = function(str, opt_isStripNeeded) {
  return opt_isStripNeeded ? str.replace(goog.i18n.bidi.htmlSkipReg_, "") : str;
};
goog.i18n.bidi.rtlCharReg_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "]");
goog.i18n.bidi.ltrCharReg_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "]");
goog.i18n.bidi.hasAnyRtl = function(str, opt_isHtml) {
  return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml));
};
goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl;
goog.i18n.bidi.hasAnyLtr = function(str, opt_isHtml) {
  return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml));
};
goog.i18n.bidi.ltrRe_ = new RegExp("^[" + goog.i18n.bidi.ltrChars_ + "]");
goog.i18n.bidi.rtlRe_ = new RegExp("^[" + goog.i18n.bidi.rtlChars_ + "]");
goog.i18n.bidi.isRtlChar = function(str) {
  return goog.i18n.bidi.rtlRe_.test(str);
};
goog.i18n.bidi.isLtrChar = function(str) {
  return goog.i18n.bidi.ltrRe_.test(str);
};
goog.i18n.bidi.isNeutralChar = function(str) {
  return !goog.i18n.bidi.isLtrChar(str) && !goog.i18n.bidi.isRtlChar(str);
};
goog.i18n.bidi.ltrDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.rtlChars_ + "]*[" + goog.i18n.bidi.ltrChars_ + "]");
goog.i18n.bidi.rtlDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.ltrChars_ + "]*[" + goog.i18n.bidi.rtlChars_ + "]");
goog.i18n.bidi.startsWithRtl = function(str, opt_isHtml) {
  return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml));
};
goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl;
goog.i18n.bidi.startsWithLtr = function(str, opt_isHtml) {
  return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml));
};
goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr;
goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/;
goog.i18n.bidi.isNeutralText = function(str, opt_isHtml) {
  str = goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml);
  return goog.i18n.bidi.isRequiredLtrRe_.test(str) || !goog.i18n.bidi.hasAnyLtr(str) && !goog.i18n.bidi.hasAnyRtl(str);
};
goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "]" + "[^" + goog.i18n.bidi.rtlChars_ + "]*$");
goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "]" + "[^" + goog.i18n.bidi.ltrChars_ + "]*$");
goog.i18n.bidi.endsWithLtr = function(str, opt_isHtml) {
  return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml));
};
goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr;
goog.i18n.bidi.endsWithRtl = function(str, opt_isHtml) {
  return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml));
};
goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl;
goog.i18n.bidi.rtlLocalesRe_ = new RegExp("^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|" + ".*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))" + "(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)", "i");
goog.i18n.bidi.isRtlLanguage = function(lang) {
  return goog.i18n.bidi.rtlLocalesRe_.test(lang);
};
goog.i18n.bidi.bracketGuardTextRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
goog.i18n.bidi.guardBracketInText = function(s, opt_isRtlContext) {
  const useRtl = opt_isRtlContext === undefined ? goog.i18n.bidi.hasAnyRtl(s) : opt_isRtlContext;
  const mark = useRtl ? goog.i18n.bidi.Format.RLM : goog.i18n.bidi.Format.LRM;
  return s.replace(goog.i18n.bidi.bracketGuardTextRe_, mark + "$\x26" + mark);
};
goog.i18n.bidi.enforceRtlInHtml = function(html) {
  if (html.charAt(0) == "\x3c") {
    return html.replace(/<\w+/, "$\x26 dir\x3drtl");
  }
  return "\n\x3cspan dir\x3drtl\x3e" + html + "\x3c/span\x3e";
};
goog.i18n.bidi.enforceRtlInText = function(text) {
  return goog.i18n.bidi.Format.RLE + text + goog.i18n.bidi.Format.PDF;
};
goog.i18n.bidi.enforceLtrInHtml = function(html) {
  if (html.charAt(0) == "\x3c") {
    return html.replace(/<\w+/, "$\x26 dir\x3dltr");
  }
  return "\n\x3cspan dir\x3dltr\x3e" + html + "\x3c/span\x3e";
};
goog.i18n.bidi.enforceLtrInText = function(text) {
  return goog.i18n.bidi.Format.LRE + text + goog.i18n.bidi.Format.PDF;
};
goog.i18n.bidi.dimensionsRe_ = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
goog.i18n.bidi.leftRe_ = /left/gi;
goog.i18n.bidi.rightRe_ = /right/gi;
goog.i18n.bidi.tempRe_ = /%%%%/g;
goog.i18n.bidi.mirrorCSS = function(cssStr) {
  return cssStr.replace(goog.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_, "%%%%").replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT);
};
goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g;
goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g;
goog.i18n.bidi.normalizeHebrewQuote = function(str) {
  return str.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, "$1״").replace(goog.i18n.bidi.singleQuoteSubstituteRe_, "$1׳");
};
goog.i18n.bidi.wordSeparatorRe_ = /\s+/;
goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/;
goog.i18n.bidi.rtlDetectionThreshold_ = 0.40;
goog.i18n.bidi.estimateDirection = function(str, opt_isHtml) {
  let rtlCount = 0;
  let totalCount = 0;
  let hasWeaklyLtr = false;
  const tokens = goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml).split(goog.i18n.bidi.wordSeparatorRe_);
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (goog.i18n.bidi.startsWithRtl(token)) {
      rtlCount++;
      totalCount++;
    } else if (goog.i18n.bidi.isRequiredLtrRe_.test(token)) {
      hasWeaklyLtr = true;
    } else if (goog.i18n.bidi.hasAnyLtr(token)) {
      totalCount++;
    } else if (goog.i18n.bidi.hasNumeralsRe_.test(token)) {
      hasWeaklyLtr = true;
    }
  }
  return totalCount == 0 ? hasWeaklyLtr ? goog.i18n.bidi.Dir.LTR : goog.i18n.bidi.Dir.NEUTRAL : rtlCount / totalCount > goog.i18n.bidi.rtlDetectionThreshold_ ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
};
goog.i18n.bidi.detectRtlDirectionality = function(str, opt_isHtml) {
  return goog.i18n.bidi.estimateDirection(str, opt_isHtml) == goog.i18n.bidi.Dir.RTL;
};
goog.i18n.bidi.setElementDirAndAlign = function(element, dir) {
  if (element) {
    const htmlElement = element;
    dir = goog.i18n.bidi.toDir(dir);
    if (dir) {
      htmlElement.style.textAlign = dir == goog.i18n.bidi.Dir.RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT;
      htmlElement.dir = dir == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr";
    }
  }
};
goog.i18n.bidi.setElementDirByTextDirectionality = function(element, text) {
  const htmlElement = element;
  switch(goog.i18n.bidi.estimateDirection(text)) {
    case goog.i18n.bidi.Dir.LTR:
      if (htmlElement.dir !== "ltr") {
        htmlElement.dir = "ltr";
      }
      break;
    case goog.i18n.bidi.Dir.RTL:
      if (htmlElement.dir !== "rtl") {
        htmlElement.dir = "rtl";
      }
      break;
    default:
      htmlElement.removeAttribute("dir");
  }
};
goog.i18n.bidi.DirectionalString = function() {
};
goog.i18n.bidi.DirectionalString.prototype.implementsGoogI18nBidiDirectionalString;
goog.i18n.bidi.DirectionalString.prototype.getDirection;

goog.provide("goog.html.trustedtypes");
goog.html.trustedtypes.cachedPolicy_;
goog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse = function() {
  if (!goog.TRUSTED_TYPES_POLICY_NAME) {
    return null;
  }
  if (goog.html.trustedtypes.cachedPolicy_ === undefined) {
    goog.html.trustedtypes.cachedPolicy_ = goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#html");
  }
  return goog.html.trustedtypes.cachedPolicy_;
};

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.html.SafeScript");
  goog.module.declareLegacyNamespace();
  const Const = goog.require("goog.string.Const");
  const TypedString = goog.require("goog.string.TypedString");
  const trustedtypes = goog.require("goog.html.trustedtypes");
  const {fail} = goog.require("goog.asserts");
  const CONSTRUCTOR_TOKEN_PRIVATE = {};
  class SafeScript {
    constructor(value, token) {
      this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = token === CONSTRUCTOR_TOKEN_PRIVATE ? value : "";
      this.implementsGoogStringTypedString = true;
    }
    static fromConstant(script) {
      const scriptString = Const.unwrap(script);
      if (scriptString.length === 0) {
        return SafeScript.EMPTY;
      }
      return SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(scriptString);
    }
    static fromJson(val) {
      return SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(SafeScript.stringify_(val));
    }
    getTypedStringValue() {
      return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();
    }
    static unwrap(safeScript) {
      return SafeScript.unwrapTrustedScript(safeScript).toString();
    }
    static unwrapTrustedScript(safeScript) {
      if (safeScript instanceof SafeScript && safeScript.constructor === SafeScript) {
        return safeScript.privateDoNotAccessOrElseSafeScriptWrappedValue_;
      } else {
        fail("expected object of type SafeScript, got '" + safeScript + "' of type " + goog.typeOf(safeScript));
        return "type_error:SafeScript";
      }
    }
    static stringify_(val) {
      const json = JSON.stringify(val);
      return json.replace(/</g, "\\x3c");
    }
    static createSafeScriptSecurityPrivateDoNotAccessOrElse(script) {
      const policy = trustedtypes.getPolicyPrivateDoNotAccessOrElse();
      const trustedScript = policy ? policy.createScript(script) : script;
      return new SafeScript(trustedScript, CONSTRUCTOR_TOKEN_PRIVATE);
    }
  }
  SafeScript.prototype.toString = function() {
    return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();
  };
  SafeScript.EMPTY = {valueOf:function() {
    return SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("");
  },}.valueOf();
  exports = SafeScript;
  return exports;
});

goog.provide("goog.fs.url");
goog.fs.url.createObjectUrl = function(obj) {
  return goog.fs.url.getUrlObject_().createObjectURL(obj);
};
goog.fs.url.revokeObjectUrl = function(url) {
  goog.fs.url.getUrlObject_().revokeObjectURL(url);
};
goog.fs.url.UrlObject_ = function() {
};
goog.fs.url.UrlObject_.prototype.createObjectURL = function(arg) {
};
goog.fs.url.UrlObject_.prototype.revokeObjectURL = function(s) {
};
goog.fs.url.getUrlObject_ = function() {
  const urlObject = goog.fs.url.findUrlObject_();
  if (urlObject != null) {
    return urlObject;
  } else {
    throw new Error("This browser doesn't seem to support blob URLs");
  }
};
goog.fs.url.findUrlObject_ = function() {
  if (goog.global.URL !== undefined && goog.global.URL.createObjectURL !== undefined) {
    return goog.global.URL;
  } else if (goog.global.createObjectURL !== undefined) {
    return goog.global;
  } else {
    return null;
  }
};
goog.fs.url.browserSupportsObjectUrls = function() {
  return goog.fs.url.findUrlObject_() != null;
};

goog.provide("goog.fs.blob");
goog.fs.blob.getBlob = function(var_args) {
  const BlobBuilder = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
  if (BlobBuilder !== undefined) {
    const bb = new BlobBuilder();
    for (let i = 0; i < arguments.length; i++) {
      bb.append(arguments[i]);
    }
    return bb.getBlob();
  } else {
    return goog.fs.blob.getBlobWithProperties(Array.prototype.slice.call(arguments));
  }
};
goog.fs.blob.getBlobWithProperties = function(parts, opt_type, opt_endings) {
  const BlobBuilder = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
  if (BlobBuilder !== undefined) {
    const bb = new BlobBuilder();
    for (let i = 0; i < parts.length; i++) {
      bb.append(parts[i], opt_endings);
    }
    return bb.getBlob(opt_type);
  } else if (goog.global.Blob !== undefined) {
    const properties = {};
    if (opt_type) {
      properties["type"] = opt_type;
    }
    if (opt_endings) {
      properties["endings"] = opt_endings;
    }
    return new Blob(parts, properties);
  } else {
    throw new Error("This browser doesn't seem to support creating Blobs");
  }
};

goog.provide("goog.html.TrustedResourceUrl");
goog.require("goog.asserts");
goog.require("goog.fs.blob");
goog.require("goog.fs.url");
goog.require("goog.html.SafeScript");
goog.require("goog.html.trustedtypes");
goog.require("goog.i18n.bidi.Dir");
goog.require("goog.i18n.bidi.DirectionalString");
goog.require("goog.string.Const");
goog.require("goog.string.TypedString");
goog.html.TrustedResourceUrl = class {
  constructor(value, token) {
    this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = token === goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ ? value : "";
  }
};
goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = true;
goog.html.TrustedResourceUrl.prototype.getTypedStringValue = function() {
  return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString();
};
goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString = true;
goog.html.TrustedResourceUrl.prototype.getDirection = function() {
  return goog.i18n.bidi.Dir.LTR;
};
goog.html.TrustedResourceUrl.prototype.cloneWithParams = function(searchParams, opt_hashParams) {
  var url = goog.html.TrustedResourceUrl.unwrap(this);
  var parts = goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(url);
  var urlBase = parts[1];
  var urlSearch = parts[2] || "";
  var urlHash = parts[3] || "";
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(urlBase + goog.html.TrustedResourceUrl.stringifyParams_("?", urlSearch, searchParams) + goog.html.TrustedResourceUrl.stringifyParams_("#", urlHash, opt_hashParams));
};
goog.html.TrustedResourceUrl.prototype.toString = function() {
  return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + "";
};
goog.html.TrustedResourceUrl.unwrap = function(trustedResourceUrl) {
  return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(trustedResourceUrl).toString();
};
goog.html.TrustedResourceUrl.unwrapTrustedScriptURL = function(trustedResourceUrl) {
  if (trustedResourceUrl instanceof goog.html.TrustedResourceUrl && trustedResourceUrl.constructor === goog.html.TrustedResourceUrl) {
    return trustedResourceUrl.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_;
  } else {
    goog.asserts.fail("expected object of type TrustedResourceUrl, got '" + trustedResourceUrl + "' of type " + goog.typeOf(trustedResourceUrl));
    return "type_error:TrustedResourceUrl";
  }
};
goog.html.TrustedResourceUrl.format = function(format, args) {
  var formatStr = goog.string.Const.unwrap(format);
  if (!goog.html.TrustedResourceUrl.BASE_URL_.test(formatStr)) {
    throw new Error("Invalid TrustedResourceUrl format: " + formatStr);
  }
  var result = formatStr.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_, function(match, id) {
    if (!Object.prototype.hasOwnProperty.call(args, id)) {
      throw new Error('Found marker, "' + id + '", in format string, "' + formatStr + '", but no valid label mapping found ' + "in args: " + JSON.stringify(args));
    }
    var arg = args[id];
    if (arg instanceof goog.string.Const) {
      return goog.string.Const.unwrap(arg);
    } else {
      return encodeURIComponent(String(arg));
    }
  });
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(result);
};
goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g;
goog.html.TrustedResourceUrl.BASE_URL_ = new RegExp("^((https:)?//[0-9a-z.:[\\]-]+/" + "|/[^/\\\\]" + "|[^:/\\\\%]+/" + "|[^:/\\\\%]*[?#]" + "|about:blank#" + ")", "i");
goog.html.TrustedResourceUrl.URL_PARAM_PARSER_ = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
goog.html.TrustedResourceUrl.formatWithParams = function(format, args, searchParams, opt_hashParams) {
  var url = goog.html.TrustedResourceUrl.format(format, args);
  return url.cloneWithParams(searchParams, opt_hashParams);
};
goog.html.TrustedResourceUrl.fromConstant = function(url) {
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(url));
};
goog.html.TrustedResourceUrl.fromConstants = function(parts) {
  var unwrapped = "";
  for (var i = 0; i < parts.length; i++) {
    unwrapped += goog.string.Const.unwrap(parts[i]);
  }
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(unwrapped);
};
goog.html.TrustedResourceUrl.fromSafeScript = function(safeScript) {
  var blob = goog.fs.blob.getBlobWithProperties([goog.html.SafeScript.unwrap(safeScript)], "text/javascript");
  var url = goog.fs.url.createObjectUrl(blob);
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(url);
};
goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {};
goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse = function(url) {
  const policy = goog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse();
  var value = policy ? policy.createScriptURL(url) : url;
  return new goog.html.TrustedResourceUrl(value, goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_);
};
goog.html.TrustedResourceUrl.stringifyParams_ = function(prefix, currentString, params) {
  if (params == null) {
    return currentString;
  }
  if (typeof params === "string") {
    return params ? prefix + encodeURIComponent(params) : "";
  }
  for (var key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      var value = params[key];
      var outputValues = Array.isArray(value) ? value : [value];
      for (var i = 0; i < outputValues.length; i++) {
        var outputValue = outputValues[i];
        if (outputValue != null) {
          if (!currentString) {
            currentString = prefix;
          }
          currentString += (currentString.length > prefix.length ? "\x26" : "") + encodeURIComponent(key) + "\x3d" + encodeURIComponent(String(outputValue));
        }
      }
    }
  }
  return currentString;
};

goog.provide("goog.string.internal");
goog.string.internal.startsWith = function(str, prefix) {
  return str.lastIndexOf(prefix, 0) == 0;
};
goog.string.internal.endsWith = function(str, suffix) {
  const l = str.length - suffix.length;
  return l >= 0 && str.indexOf(suffix, l) == l;
};
goog.string.internal.caseInsensitiveStartsWith = function(str, prefix) {
  return goog.string.internal.caseInsensitiveCompare(prefix, str.substr(0, prefix.length)) == 0;
};
goog.string.internal.caseInsensitiveEndsWith = function(str, suffix) {
  return goog.string.internal.caseInsensitiveCompare(suffix, str.substr(str.length - suffix.length, suffix.length)) == 0;
};
goog.string.internal.caseInsensitiveEquals = function(str1, str2) {
  return str1.toLowerCase() == str2.toLowerCase();
};
goog.string.internal.isEmptyOrWhitespace = function(str) {
  return /^[\s\xa0]*$/.test(str);
};
goog.string.internal.trim = goog.TRUSTED_SITE && String.prototype.trim ? function(str) {
  return str.trim();
} : function(str) {
  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(str)[1];
};
goog.string.internal.caseInsensitiveCompare = function(str1, str2) {
  const test1 = String(str1).toLowerCase();
  const test2 = String(str2).toLowerCase();
  if (test1 < test2) {
    return -1;
  } else if (test1 == test2) {
    return 0;
  } else {
    return 1;
  }
};
goog.string.internal.newLineToBr = function(str, opt_xml) {
  return str.replace(/(\r\n|\r|\n)/g, opt_xml ? "\x3cbr /\x3e" : "\x3cbr\x3e");
};
goog.string.internal.htmlEscape = function(str, opt_isLikelyToContainHtmlChars) {
  if (opt_isLikelyToContainHtmlChars) {
    str = str.replace(goog.string.internal.AMP_RE_, "\x26amp;").replace(goog.string.internal.LT_RE_, "\x26lt;").replace(goog.string.internal.GT_RE_, "\x26gt;").replace(goog.string.internal.QUOT_RE_, "\x26quot;").replace(goog.string.internal.SINGLE_QUOTE_RE_, "\x26#39;").replace(goog.string.internal.NULL_RE_, "\x26#0;");
    return str;
  } else {
    if (!goog.string.internal.ALL_RE_.test(str)) {
      return str;
    }
    if (str.indexOf("\x26") != -1) {
      str = str.replace(goog.string.internal.AMP_RE_, "\x26amp;");
    }
    if (str.indexOf("\x3c") != -1) {
      str = str.replace(goog.string.internal.LT_RE_, "\x26lt;");
    }
    if (str.indexOf("\x3e") != -1) {
      str = str.replace(goog.string.internal.GT_RE_, "\x26gt;");
    }
    if (str.indexOf('"') != -1) {
      str = str.replace(goog.string.internal.QUOT_RE_, "\x26quot;");
    }
    if (str.indexOf("'") != -1) {
      str = str.replace(goog.string.internal.SINGLE_QUOTE_RE_, "\x26#39;");
    }
    if (str.indexOf("\x00") != -1) {
      str = str.replace(goog.string.internal.NULL_RE_, "\x26#0;");
    }
    return str;
  }
};
goog.string.internal.AMP_RE_ = /&/g;
goog.string.internal.LT_RE_ = /</g;
goog.string.internal.GT_RE_ = />/g;
goog.string.internal.QUOT_RE_ = /"/g;
goog.string.internal.SINGLE_QUOTE_RE_ = /'/g;
goog.string.internal.NULL_RE_ = /\x00/g;
goog.string.internal.ALL_RE_ = /[\x00&<>"']/;
goog.string.internal.whitespaceEscape = function(str, opt_xml) {
  return goog.string.internal.newLineToBr(str.replace(/  /g, " \x26#160;"), opt_xml);
};
goog.string.internal.contains = function(str, subString) {
  return str.indexOf(subString) != -1;
};
goog.string.internal.caseInsensitiveContains = function(str, subString) {
  return goog.string.internal.contains(str.toLowerCase(), subString.toLowerCase());
};
goog.string.internal.compareVersions = function(version1, version2) {
  let order = 0;
  const v1Subs = goog.string.internal.trim(String(version1)).split(".");
  const v2Subs = goog.string.internal.trim(String(version2)).split(".");
  const subCount = Math.max(v1Subs.length, v2Subs.length);
  for (let subIdx = 0; order == 0 && subIdx < subCount; subIdx++) {
    let v1Sub = v1Subs[subIdx] || "";
    let v2Sub = v2Subs[subIdx] || "";
    do {
      const v1Comp = /(\d*)(\D*)(.*)/.exec(v1Sub) || ["", "", "", ""];
      const v2Comp = /(\d*)(\D*)(.*)/.exec(v2Sub) || ["", "", "", ""];
      if (v1Comp[0].length == 0 && v2Comp[0].length == 0) {
        break;
      }
      const v1CompNum = v1Comp[1].length == 0 ? 0 : parseInt(v1Comp[1], 10);
      const v2CompNum = v2Comp[1].length == 0 ? 0 : parseInt(v2Comp[1], 10);
      order = goog.string.internal.compareElements_(v1CompNum, v2CompNum) || goog.string.internal.compareElements_(v1Comp[2].length == 0, v2Comp[2].length == 0) || goog.string.internal.compareElements_(v1Comp[2], v2Comp[2]);
      v1Sub = v1Comp[3];
      v2Sub = v2Comp[3];
    } while (order == 0);
  }
  return order;
};
goog.string.internal.compareElements_ = function(left, right) {
  if (left < right) {
    return -1;
  } else if (left > right) {
    return 1;
  }
  return 0;
};

goog.provide("goog.html.SafeUrl");
goog.require("goog.asserts");
goog.require("goog.fs.url");
goog.require("goog.html.TrustedResourceUrl");
goog.require("goog.i18n.bidi.Dir");
goog.require("goog.i18n.bidi.DirectionalString");
goog.require("goog.string.Const");
goog.require("goog.string.TypedString");
goog.require("goog.string.internal");
goog.html.SafeUrl = class {
  constructor(value, token) {
    this.privateDoNotAccessOrElseSafeUrlWrappedValue_ = token === goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ ? value : "";
  }
};
goog.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez";
goog.html.SafeUrl.prototype.implementsGoogStringTypedString = true;
goog.html.SafeUrl.prototype.getTypedStringValue = function() {
  return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString();
};
goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString = true;
goog.html.SafeUrl.prototype.getDirection = function() {
  return goog.i18n.bidi.Dir.LTR;
};
goog.html.SafeUrl.prototype.toString = function() {
  return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString();
};
goog.html.SafeUrl.unwrap = function(safeUrl) {
  if (safeUrl instanceof goog.html.SafeUrl && safeUrl.constructor === goog.html.SafeUrl) {
    return safeUrl.privateDoNotAccessOrElseSafeUrlWrappedValue_;
  } else {
    goog.asserts.fail("expected object of type SafeUrl, got '" + safeUrl + "' of type " + goog.typeOf(safeUrl));
    return "type_error:SafeUrl";
  }
};
goog.html.SafeUrl.fromConstant = function(url) {
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(url));
};
goog.html.SAFE_MIME_TYPE_PATTERN_ = new RegExp("^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|" + "font/\\w+|" + "image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|" + "video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))" + '(?:;\\w+\x3d(?:\\w+|"[\\w;,\x3d ]+"))*$', "i");
goog.html.SafeUrl.isSafeMimeType = function(mimeType) {
  return goog.html.SAFE_MIME_TYPE_PATTERN_.test(mimeType);
};
goog.html.SafeUrl.fromBlob = function(blob) {
  var url = goog.html.SafeUrl.isSafeMimeType(blob.type) ? goog.fs.url.createObjectUrl(blob) : goog.html.SafeUrl.INNOCUOUS_STRING;
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(url);
};
goog.html.SafeUrl.revokeObjectUrl = function(safeUrl) {
  var url = safeUrl.getTypedStringValue();
  if (url !== goog.html.SafeUrl.INNOCUOUS_STRING) {
    goog.fs.url.revokeObjectUrl(url);
  }
};
goog.html.SafeUrl.fromMediaSource = function(mediaSource) {
  goog.asserts.assert("MediaSource" in goog.global, "No support for MediaSource");
  const url = mediaSource instanceof MediaSource ? goog.fs.url.createObjectUrl(mediaSource) : goog.html.SafeUrl.INNOCUOUS_STRING;
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(url);
};
goog.html.DATA_URL_PATTERN_ = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
goog.html.SafeUrl.tryFromDataUrl = function(dataUrl) {
  dataUrl = String(dataUrl);
  var filteredDataUrl = dataUrl.replace(/(%0A|%0D)/g, "");
  var match = filteredDataUrl.match(goog.html.DATA_URL_PATTERN_);
  var valid = match && goog.html.SafeUrl.isSafeMimeType(match[1]);
  if (valid) {
    return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(filteredDataUrl);
  }
  return null;
};
goog.html.SafeUrl.fromDataUrl = function(dataUrl) {
  return goog.html.SafeUrl.tryFromDataUrl(dataUrl) || goog.html.SafeUrl.INNOCUOUS_URL;
};
goog.html.SafeUrl.fromTelUrl = function(telUrl) {
  if (!goog.string.internal.caseInsensitiveStartsWith(telUrl, "tel:")) {
    telUrl = goog.html.SafeUrl.INNOCUOUS_STRING;
  }
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(telUrl);
};
goog.html.SIP_URL_PATTERN_ = new RegExp("^sip[s]?:[+a-z0-9_.!$%\x26'*\\/\x3d^`{|}~-]+@([a-z0-9-]+\\.)+[a-z0-9]{2,63}$", "i");
goog.html.SafeUrl.fromSipUrl = function(sipUrl) {
  if (!goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(sipUrl))) {
    sipUrl = goog.html.SafeUrl.INNOCUOUS_STRING;
  }
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(sipUrl);
};
goog.html.SafeUrl.fromFacebookMessengerUrl = function(facebookMessengerUrl) {
  if (!goog.string.internal.caseInsensitiveStartsWith(facebookMessengerUrl, "fb-messenger://share")) {
    facebookMessengerUrl = goog.html.SafeUrl.INNOCUOUS_STRING;
  }
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(facebookMessengerUrl);
};
goog.html.SafeUrl.fromWhatsAppUrl = function(whatsAppUrl) {
  if (!goog.string.internal.caseInsensitiveStartsWith(whatsAppUrl, "whatsapp://send")) {
    whatsAppUrl = goog.html.SafeUrl.INNOCUOUS_STRING;
  }
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(whatsAppUrl);
};
goog.html.SafeUrl.fromSmsUrl = function(smsUrl) {
  if (!goog.string.internal.caseInsensitiveStartsWith(smsUrl, "sms:") || !goog.html.SafeUrl.isSmsUrlBodyValid_(smsUrl)) {
    smsUrl = goog.html.SafeUrl.INNOCUOUS_STRING;
  }
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(smsUrl);
};
goog.html.SafeUrl.isSmsUrlBodyValid_ = function(smsUrl) {
  var hash = smsUrl.indexOf("#");
  if (hash > 0) {
    smsUrl = smsUrl.substring(0, hash);
  }
  var bodyParams = smsUrl.match(/[?&]body=/gi);
  if (!bodyParams) {
    return true;
  }
  if (bodyParams.length > 1) {
    return false;
  }
  var bodyValue = smsUrl.match(/[?&]body=([^&]*)/)[1];
  if (!bodyValue) {
    return true;
  }
  try {
    decodeURIComponent(bodyValue);
  } catch (error) {
    return false;
  }
  return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(bodyValue);
};
goog.html.SafeUrl.fromSshUrl = function(sshUrl) {
  if (!goog.string.internal.caseInsensitiveStartsWith(sshUrl, "ssh://")) {
    sshUrl = goog.html.SafeUrl.INNOCUOUS_STRING;
  }
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(sshUrl);
};
goog.html.SafeUrl.sanitizeChromeExtensionUrl = function(url, extensionId) {
  return goog.html.SafeUrl.sanitizeExtensionUrl_(/^chrome-extension:\/\/([^\/]+)\//, url, extensionId);
};
goog.html.SafeUrl.sanitizeFirefoxExtensionUrl = function(url, extensionId) {
  return goog.html.SafeUrl.sanitizeExtensionUrl_(/^moz-extension:\/\/([^\/]+)\//, url, extensionId);
};
goog.html.SafeUrl.sanitizeEdgeExtensionUrl = function(url, extensionId) {
  return goog.html.SafeUrl.sanitizeExtensionUrl_(/^ms-browser-extension:\/\/([^\/]+)\//, url, extensionId);
};
goog.html.SafeUrl.sanitizeExtensionUrl_ = function(scheme, url, extensionId) {
  var matches = scheme.exec(url);
  if (!matches) {
    url = goog.html.SafeUrl.INNOCUOUS_STRING;
  } else {
    var extractedExtensionId = matches[1];
    var acceptedExtensionIds;
    if (extensionId instanceof goog.string.Const) {
      acceptedExtensionIds = [goog.string.Const.unwrap(extensionId)];
    } else {
      acceptedExtensionIds = extensionId.map(function unwrap(x) {
        return goog.string.Const.unwrap(x);
      });
    }
    if (acceptedExtensionIds.indexOf(extractedExtensionId) == -1) {
      url = goog.html.SafeUrl.INNOCUOUS_STRING;
    }
  }
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(url);
};
goog.html.SafeUrl.fromTrustedResourceUrl = function(trustedResourceUrl) {
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.TrustedResourceUrl.unwrap(trustedResourceUrl));
};
goog.html.SAFE_URL_PATTERN_ = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
goog.html.SafeUrl.SAFE_URL_PATTERN = goog.html.SAFE_URL_PATTERN_;
goog.html.SafeUrl.trySanitize = function(url) {
  if (url instanceof goog.html.SafeUrl) {
    return url;
  }
  if (typeof url == "object" && url.implementsGoogStringTypedString) {
    url = url.getTypedStringValue();
  } else {
    url = String(url);
  }
  if (!goog.html.SAFE_URL_PATTERN_.test(url)) {
    return goog.html.SafeUrl.tryFromDataUrl(url);
  }
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(url);
};
goog.html.SafeUrl.sanitize = function(url) {
  return goog.html.SafeUrl.trySanitize(url) || goog.html.SafeUrl.INNOCUOUS_URL;
};
goog.html.SafeUrl.sanitizeAssertUnchanged = function(url, opt_allowDataUrl) {
  if (url instanceof goog.html.SafeUrl) {
    return url;
  } else if (typeof url == "object" && url.implementsGoogStringTypedString) {
    url = url.getTypedStringValue();
  } else {
    url = String(url);
  }
  if (opt_allowDataUrl && /^data:/i.test(url)) {
    var safeUrl = goog.html.SafeUrl.fromDataUrl(url);
    if (safeUrl.getTypedStringValue() == url) {
      return safeUrl;
    }
  }
  if (!goog.asserts.assert(goog.html.SAFE_URL_PATTERN_.test(url), "%s does not match the safe URL pattern", url)) {
    url = goog.html.SafeUrl.INNOCUOUS_STRING;
  }
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(url);
};
goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {};
goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function(url) {
  return new goog.html.SafeUrl(url, goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_);
};
goog.html.SafeUrl.INNOCUOUS_URL = goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.SafeUrl.INNOCUOUS_STRING);
goog.html.SafeUrl.ABOUT_BLANK = goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank");

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.html.SafeStyle");
  goog.module.declareLegacyNamespace();
  const Const = goog.require("goog.string.Const");
  const SafeUrl = goog.require("goog.html.SafeUrl");
  const TypedString = goog.require("goog.string.TypedString");
  const {AssertionError, assert, fail} = goog.require("goog.asserts");
  const {contains, endsWith} = goog.require("goog.string.internal");
  const CONSTRUCTOR_TOKEN_PRIVATE = {};
  class SafeStyle {
    constructor(value, token) {
      this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = token === CONSTRUCTOR_TOKEN_PRIVATE ? value : "";
      this.implementsGoogStringTypedString = true;
    }
    static fromConstant(style) {
      const styleString = Const.unwrap(style);
      if (styleString.length === 0) {
        return SafeStyle.EMPTY;
      }
      assert(endsWith(styleString, ";"), `Last character of style string is not ';': ${styleString}`);
      assert(contains(styleString, ":"), "Style string must contain at least one ':', to " + 'specify a "name: value" pair: ' + styleString);
      return SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(styleString);
    }
    getTypedStringValue() {
      return this.privateDoNotAccessOrElseSafeStyleWrappedValue_;
    }
    toString() {
      return this.privateDoNotAccessOrElseSafeStyleWrappedValue_.toString();
    }
    static unwrap(safeStyle) {
      if (safeStyle instanceof SafeStyle && safeStyle.constructor === SafeStyle) {
        return safeStyle.privateDoNotAccessOrElseSafeStyleWrappedValue_;
      } else {
        fail(`expected object of type SafeStyle, got '${safeStyle}` + "' of type " + goog.typeOf(safeStyle));
        return "type_error:SafeStyle";
      }
    }
    static createSafeStyleSecurityPrivateDoNotAccessOrElse(style) {
      return new SafeStyle(style, CONSTRUCTOR_TOKEN_PRIVATE);
    }
    static create(map) {
      let style = "";
      for (let name in map) {
        if (Object.prototype.hasOwnProperty.call(map, name)) {
          if (!/^[-_a-zA-Z0-9]+$/.test(name)) {
            throw new Error(`Name allows only [-_a-zA-Z0-9], got: ${name}`);
          }
          let value = map[name];
          if (value == null) {
            continue;
          }
          if (Array.isArray(value)) {
            value = value.map(sanitizePropertyValue).join(" ");
          } else {
            value = sanitizePropertyValue(value);
          }
          style += `${name}:${value};`;
        }
      }
      if (!style) {
        return SafeStyle.EMPTY;
      }
      return SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(style);
    }
    static concat(var_args) {
      let style = "";
      const addArgument = argument => {
        if (Array.isArray(argument)) {
          argument.forEach(addArgument);
        } else {
          style += SafeStyle.unwrap(argument);
        }
      };
      Array.prototype.forEach.call(arguments, addArgument);
      if (!style) {
        return SafeStyle.EMPTY;
      }
      return SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(style);
    }
  }
  SafeStyle.EMPTY = SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse("");
  SafeStyle.INNOCUOUS_STRING = "zClosurez";
  SafeStyle.PropertyValue;
  SafeStyle.PropertyMap;
  function sanitizePropertyValue(value) {
    if (value instanceof SafeUrl) {
      const url = SafeUrl.unwrap(value);
      return 'url("' + url.replace(/</g, "%3c").replace(/[\\"]/g, "\\$\x26") + '")';
    }
    const result = value instanceof Const ? Const.unwrap(value) : sanitizePropertyValueString(String(value));
    if (/[{;}]/.test(result)) {
      throw new AssertionError("Value does not allow [{;}], got: %s.", [result]);
    }
    return result;
  }
  function sanitizePropertyValueString(value) {
    const valueWithoutFunctions = value.replace(FUNCTIONS_RE, "$1").replace(FUNCTIONS_RE, "$1").replace(URL_RE, "url");
    if (!VALUE_RE.test(valueWithoutFunctions)) {
      fail(`String value allows only ${VALUE_ALLOWED_CHARS}` + " and simple functions, got: " + value);
      return SafeStyle.INNOCUOUS_STRING;
    } else if (COMMENT_RE.test(value)) {
      fail(`String value disallows comments, got: ${value}`);
      return SafeStyle.INNOCUOUS_STRING;
    } else if (!hasBalancedQuotes(value)) {
      fail(`String value requires balanced quotes, got: ${value}`);
      return SafeStyle.INNOCUOUS_STRING;
    } else if (!hasBalancedSquareBrackets(value)) {
      fail("String value requires balanced square brackets and one" + " identifier per pair of brackets, got: " + value);
      return SafeStyle.INNOCUOUS_STRING;
    }
    return sanitizeUrl(value);
  }
  function hasBalancedQuotes(value) {
    let outsideSingle = true;
    let outsideDouble = true;
    for (let i = 0; i < value.length; i++) {
      const c = value.charAt(i);
      if (c == "'" && outsideDouble) {
        outsideSingle = !outsideSingle;
      } else if (c == '"' && outsideSingle) {
        outsideDouble = !outsideDouble;
      }
    }
    return outsideSingle && outsideDouble;
  }
  function hasBalancedSquareBrackets(value) {
    let outside = true;
    const tokenRe = /^[-_a-zA-Z0-9]$/;
    for (let i = 0; i < value.length; i++) {
      const c = value.charAt(i);
      if (c == "]") {
        if (outside) {
          return false;
        }
        outside = true;
      } else if (c == "[") {
        if (!outside) {
          return false;
        }
        outside = false;
      } else if (!outside && !tokenRe.test(c)) {
        return false;
      }
    }
    return outside;
  }
  const VALUE_ALLOWED_CHARS = "[-,.\"'%_!# a-zA-Z0-9\\[\\]]";
  const VALUE_RE = new RegExp(`^${VALUE_ALLOWED_CHARS}+\$`);
  const URL_RE = new RegExp("\\b(url\\([ \t\n]*)(" + "'[ -\x26(-\\[\\]-~]*'" + '|"[ !#-\\[\\]-~]*"' + "|[!#-\x26*-\\[\\]-~]*" + ")([ \t\n]*\\))", "g");
  const ALLOWED_FUNCTIONS = ["calc", "cubic-bezier", "fit-content", "hsl", "hsla", "linear-gradient", "matrix", "minmax", "repeat", "rgb", "rgba", "(rotate|scale|translate)(X|Y|Z|3d)?", "var",];
  const FUNCTIONS_RE = new RegExp("\\b(" + ALLOWED_FUNCTIONS.join("|") + ")" + "\\([-+*/0-9a-z.%#\\[\\], ]+\\)", "g");
  const COMMENT_RE = /\/\*/;
  function sanitizeUrl(value) {
    return value.replace(URL_RE, (match, before, url, after) => {
      let quote = "";
      url = url.replace(/^(['"])(.*)\1$/, (match, start, inside) => {
        quote = start;
        return inside;
      });
      const sanitized = SafeUrl.sanitize(url).getTypedStringValue();
      return before + quote + sanitized + quote + after;
    });
  }
  exports = SafeStyle;
  return exports;
});

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.object");
  goog.module.declareLegacyNamespace();
  function forEach(obj, f, opt_obj) {
    for (const key in obj) {
      f.call(opt_obj, obj[key], key, obj);
    }
  }
  function filter(obj, f, opt_obj) {
    const res = {};
    for (const key in obj) {
      if (f.call(opt_obj, obj[key], key, obj)) {
        res[key] = obj[key];
      }
    }
    return res;
  }
  function map(obj, f, opt_obj) {
    const res = {};
    for (const key in obj) {
      res[key] = f.call(opt_obj, obj[key], key, obj);
    }
    return res;
  }
  function some(obj, f, opt_obj) {
    for (const key in obj) {
      if (f.call(opt_obj, obj[key], key, obj)) {
        return true;
      }
    }
    return false;
  }
  function every(obj, f, opt_obj) {
    for (const key in obj) {
      if (!f.call(opt_obj, obj[key], key, obj)) {
        return false;
      }
    }
    return true;
  }
  function getCount(obj) {
    let rv = 0;
    for (const key in obj) {
      rv++;
    }
    return rv;
  }
  function getAnyKey(obj) {
    for (const key in obj) {
      return key;
    }
  }
  function getAnyValue(obj) {
    for (const key in obj) {
      return obj[key];
    }
  }
  function contains(obj, val) {
    return containsValue(obj, val);
  }
  function getValues(obj) {
    const res = [];
    let i = 0;
    for (const key in obj) {
      res[i++] = obj[key];
    }
    return res;
  }
  function getKeys(obj) {
    const res = [];
    let i = 0;
    for (const key in obj) {
      res[i++] = key;
    }
    return res;
  }
  function getValueByKeys(obj, var_args) {
    const isArrayLike = goog.isArrayLike(var_args);
    const keys = isArrayLike ? var_args : arguments;
    for (let i = isArrayLike ? 0 : 1; i < keys.length; i++) {
      if (obj == null) {
        return undefined;
      }
      obj = obj[keys[i]];
    }
    return obj;
  }
  function containsKey(obj, key) {
    return obj !== null && key in obj;
  }
  function containsValue(obj, val) {
    for (const key in obj) {
      if (obj[key] == val) {
        return true;
      }
    }
    return false;
  }
  function findKey(obj, f, thisObj = undefined) {
    for (const key in obj) {
      if (f.call(thisObj, obj[key], key, obj)) {
        return key;
      }
    }
    return undefined;
  }
  function findValue(obj, f, thisObj = undefined) {
    const key = findKey(obj, f, thisObj);
    return key && obj[key];
  }
  function isEmpty(obj) {
    for (const key in obj) {
      return false;
    }
    return true;
  }
  function clear(obj) {
    for (const i in obj) {
      delete obj[i];
    }
  }
  function remove(obj, key) {
    let rv;
    if (rv = key in obj) {
      delete obj[key];
    }
    return rv;
  }
  function add(obj, key, val) {
    if (obj !== null && key in obj) {
      throw new Error(`The object already contains the key "${key}"`);
    }
    set(obj, key, val);
  }
  function get(obj, key, val = undefined) {
    if (obj !== null && key in obj) {
      return obj[key];
    }
    return val;
  }
  function set(obj, key, value) {
    obj[key] = value;
  }
  function setIfUndefined(obj, key, value) {
    return key in obj ? obj[key] : obj[key] = value;
  }
  function setWithReturnValueIfNotSet(obj, key, f) {
    if (key in obj) {
      return obj[key];
    }
    const val = f();
    obj[key] = val;
    return val;
  }
  function equals(a, b) {
    for (const k in a) {
      if (!(k in b) || a[k] !== b[k]) {
        return false;
      }
    }
    for (const k in b) {
      if (!(k in a)) {
        return false;
      }
    }
    return true;
  }
  function clone(obj) {
    const res = {};
    for (const key in obj) {
      res[key] = obj[key];
    }
    return res;
  }
  function unsafeClone(obj) {
    if (!obj || typeof obj !== "object") {
      return obj;
    }
    if (typeof obj.clone === "function") {
      return obj.clone();
    }
    if (typeof Map !== "undefined" && obj instanceof Map) {
      return new Map(obj);
    } else if (typeof Set !== "undefined" && obj instanceof Set) {
      return new Set(obj);
    }
    const clone = Array.isArray(obj) ? [] : typeof ArrayBuffer === "function" && typeof ArrayBuffer.isView === "function" && ArrayBuffer.isView(obj) && !(obj instanceof DataView) ? new obj.constructor(obj.length) : {};
    for (const key in obj) {
      clone[key] = unsafeClone(obj[key]);
    }
    return clone;
  }
  function transpose(obj) {
    const transposed = {};
    for (const key in obj) {
      transposed[obj[key]] = key;
    }
    return transposed;
  }
  const PROTOTYPE_FIELDS = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf",];
  function extend(target, var_args) {
    let key;
    let source;
    for (let i = 1; i < arguments.length; i++) {
      source = arguments[i];
      for (key in source) {
        target[key] = source[key];
      }
      for (let j = 0; j < PROTOTYPE_FIELDS.length; j++) {
        key = PROTOTYPE_FIELDS[j];
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
  }
  function create(var_args) {
    const argLength = arguments.length;
    if (argLength == 1 && Array.isArray(arguments[0])) {
      return create.apply(null, arguments[0]);
    }
    if (argLength % 2) {
      throw new Error("Uneven number of arguments");
    }
    const rv = {};
    for (let i = 0; i < argLength; i += 2) {
      rv[arguments[i]] = arguments[i + 1];
    }
    return rv;
  }
  function createSet(var_args) {
    const argLength = arguments.length;
    if (argLength == 1 && Array.isArray(arguments[0])) {
      return createSet.apply(null, arguments[0]);
    }
    const rv = {};
    for (let i = 0; i < argLength; i++) {
      rv[arguments[i]] = true;
    }
    return rv;
  }
  function createImmutableView(obj) {
    let result = obj;
    if (Object.isFrozen && !Object.isFrozen(obj)) {
      result = Object.create(obj);
      Object.freeze(result);
    }
    return result;
  }
  function isImmutableView(obj) {
    return !!Object.isFrozen && Object.isFrozen(obj);
  }
  function getAllPropertyNames(obj, includeObjectPrototype = undefined, includeFunctionPrototype = undefined) {
    if (!obj) {
      return [];
    }
    if (!Object.getOwnPropertyNames || !Object.getPrototypeOf) {
      return getKeys(obj);
    }
    const visitedSet = {};
    let proto = obj;
    while (proto && (proto !== Object.prototype || !!includeObjectPrototype) && (proto !== Function.prototype || !!includeFunctionPrototype)) {
      const names = Object.getOwnPropertyNames(proto);
      for (let i = 0; i < names.length; i++) {
        visitedSet[names[i]] = true;
      }
      proto = Object.getPrototypeOf(proto);
    }
    return getKeys(visitedSet);
  }
  function getSuperClass(constructor) {
    const proto = Object.getPrototypeOf(constructor.prototype);
    return proto && proto.constructor;
  }
  exports = {add, clear, clone, contains, containsKey, containsValue, create, createImmutableView, createSet, equals, every, extend, filter, findKey, findValue, forEach, get, getAllPropertyNames, getAnyKey, getAnyValue, getCount, getKeys, getSuperClass, getValueByKeys, getValues, isEmpty, isImmutableView, map, remove, set, setIfUndefined, setWithReturnValueIfNotSet, some, transpose, unsafeClone,};
  return exports;
});

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.html.SafeStyleSheet");
  goog.module.declareLegacyNamespace();
  const Const = goog.require("goog.string.Const");
  const SafeStyle = goog.require("goog.html.SafeStyle");
  const TypedString = goog.require("goog.string.TypedString");
  const googObject = goog.require("goog.object");
  const {assert, fail} = goog.require("goog.asserts");
  const {contains} = goog.require("goog.string.internal");
  const CONSTRUCTOR_TOKEN_PRIVATE = {};
  class SafeStyleSheet {
    constructor(value, token) {
      this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = token === CONSTRUCTOR_TOKEN_PRIVATE ? value : "";
      this.implementsGoogStringTypedString = true;
    }
    static createRule(selector, style) {
      if (contains(selector, "\x3c")) {
        throw new Error(`Selector does not allow '<', got: ${selector}`);
      }
      const selectorToCheck = selector.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
      if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(selectorToCheck)) {
        throw new Error("Selector allows only [-_a-zA-Z0-9#.:* ,\x3e+~[\\]()\x3d^$|] and " + "strings, got: " + selector);
      }
      if (!SafeStyleSheet.hasBalancedBrackets_(selectorToCheck)) {
        throw new Error("() and [] in selector must be balanced, got: " + selector);
      }
      if (!(style instanceof SafeStyle)) {
        style = SafeStyle.create(style);
      }
      const styleSheet = `${selector}{` + SafeStyle.unwrap(style).replace(/</g, "\\3C ") + "}";
      return SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheet);
    }
    static hasBalancedBrackets_(s) {
      const brackets = {"(":")", "[":"]"};
      const expectedBrackets = [];
      for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (brackets[ch]) {
          expectedBrackets.push(brackets[ch]);
        } else if (googObject.contains(brackets, ch)) {
          if (expectedBrackets.pop() != ch) {
            return false;
          }
        }
      }
      return expectedBrackets.length == 0;
    }
    static concat(var_args) {
      let result = "";
      const addArgument = argument => {
        if (Array.isArray(argument)) {
          argument.forEach(addArgument);
        } else {
          result += SafeStyleSheet.unwrap(argument);
        }
      };
      Array.prototype.forEach.call(arguments, addArgument);
      return SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(result);
    }
    static fromConstant(styleSheet) {
      const styleSheetString = Const.unwrap(styleSheet);
      if (styleSheetString.length === 0) {
        return SafeStyleSheet.EMPTY;
      }
      assert(!contains(styleSheetString, "\x3c"), `Forbidden '<' character in style sheet string: ${styleSheetString}`);
      return SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheetString);
    }
    getTypedStringValue() {
      return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
    }
    static unwrap(safeStyleSheet) {
      if (safeStyleSheet instanceof SafeStyleSheet && safeStyleSheet.constructor === SafeStyleSheet) {
        return safeStyleSheet.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
      } else {
        fail("expected object of type SafeStyleSheet, got '" + safeStyleSheet + "' of type " + goog.typeOf(safeStyleSheet));
        return "type_error:SafeStyleSheet";
      }
    }
    static createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheet) {
      return new SafeStyleSheet(styleSheet, CONSTRUCTOR_TOKEN_PRIVATE);
    }
  }
  SafeStyleSheet.prototype.toString = function() {
    return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_.toString();
  };
  SafeStyleSheet.EMPTY = SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse("");
  exports = SafeStyleSheet;
  return exports;
});

goog.provide("goog.dom.HtmlElement");
goog.dom.HtmlElement = function() {
};

goog.provide("goog.dom.TagName");
goog.require("goog.dom.HtmlElement");
goog.dom.TagName = class {
  static cast(name, type) {
    return name;
  }
  constructor() {
    this.googDomTagName_doNotImplementThisTypeOrElse_;
    this.ensureTypeScriptRemembersTypeT_;
  }
  toString() {
  }
};
goog.dom.TagName.A = "A";
goog.dom.TagName.ABBR = "ABBR";
goog.dom.TagName.ACRONYM = "ACRONYM";
goog.dom.TagName.ADDRESS = "ADDRESS";
goog.dom.TagName.APPLET = "APPLET";
goog.dom.TagName.AREA = "AREA";
goog.dom.TagName.ARTICLE = "ARTICLE";
goog.dom.TagName.ASIDE = "ASIDE";
goog.dom.TagName.AUDIO = "AUDIO";
goog.dom.TagName.B = "B";
goog.dom.TagName.BASE = "BASE";
goog.dom.TagName.BASEFONT = "BASEFONT";
goog.dom.TagName.BDI = "BDI";
goog.dom.TagName.BDO = "BDO";
goog.dom.TagName.BIG = "BIG";
goog.dom.TagName.BLOCKQUOTE = "BLOCKQUOTE";
goog.dom.TagName.BODY = "BODY";
goog.dom.TagName.BR = "BR";
goog.dom.TagName.BUTTON = "BUTTON";
goog.dom.TagName.CANVAS = "CANVAS";
goog.dom.TagName.CAPTION = "CAPTION";
goog.dom.TagName.CENTER = "CENTER";
goog.dom.TagName.CITE = "CITE";
goog.dom.TagName.CODE = "CODE";
goog.dom.TagName.COL = "COL";
goog.dom.TagName.COLGROUP = "COLGROUP";
goog.dom.TagName.COMMAND = "COMMAND";
goog.dom.TagName.DATA = "DATA";
goog.dom.TagName.DATALIST = "DATALIST";
goog.dom.TagName.DD = "DD";
goog.dom.TagName.DEL = "DEL";
goog.dom.TagName.DETAILS = "DETAILS";
goog.dom.TagName.DFN = "DFN";
goog.dom.TagName.DIALOG = "DIALOG";
goog.dom.TagName.DIR = "DIR";
goog.dom.TagName.DIV = "DIV";
goog.dom.TagName.DL = "DL";
goog.dom.TagName.DT = "DT";
goog.dom.TagName.EM = "EM";
goog.dom.TagName.EMBED = "EMBED";
goog.dom.TagName.FIELDSET = "FIELDSET";
goog.dom.TagName.FIGCAPTION = "FIGCAPTION";
goog.dom.TagName.FIGURE = "FIGURE";
goog.dom.TagName.FONT = "FONT";
goog.dom.TagName.FOOTER = "FOOTER";
goog.dom.TagName.FORM = "FORM";
goog.dom.TagName.FRAME = "FRAME";
goog.dom.TagName.FRAMESET = "FRAMESET";
goog.dom.TagName.H1 = "H1";
goog.dom.TagName.H2 = "H2";
goog.dom.TagName.H3 = "H3";
goog.dom.TagName.H4 = "H4";
goog.dom.TagName.H5 = "H5";
goog.dom.TagName.H6 = "H6";
goog.dom.TagName.HEAD = "HEAD";
goog.dom.TagName.HEADER = "HEADER";
goog.dom.TagName.HGROUP = "HGROUP";
goog.dom.TagName.HR = "HR";
goog.dom.TagName.HTML = "HTML";
goog.dom.TagName.I = "I";
goog.dom.TagName.IFRAME = "IFRAME";
goog.dom.TagName.IMG = "IMG";
goog.dom.TagName.INPUT = "INPUT";
goog.dom.TagName.INS = "INS";
goog.dom.TagName.ISINDEX = "ISINDEX";
goog.dom.TagName.KBD = "KBD";
goog.dom.TagName.KEYGEN = "KEYGEN";
goog.dom.TagName.LABEL = "LABEL";
goog.dom.TagName.LEGEND = "LEGEND";
goog.dom.TagName.LI = "LI";
goog.dom.TagName.LINK = "LINK";
goog.dom.TagName.MAIN = "MAIN";
goog.dom.TagName.MAP = "MAP";
goog.dom.TagName.MARK = "MARK";
goog.dom.TagName.MATH = "MATH";
goog.dom.TagName.MENU = "MENU";
goog.dom.TagName.MENUITEM = "MENUITEM";
goog.dom.TagName.META = "META";
goog.dom.TagName.METER = "METER";
goog.dom.TagName.NAV = "NAV";
goog.dom.TagName.NOFRAMES = "NOFRAMES";
goog.dom.TagName.NOSCRIPT = "NOSCRIPT";
goog.dom.TagName.OBJECT = "OBJECT";
goog.dom.TagName.OL = "OL";
goog.dom.TagName.OPTGROUP = "OPTGROUP";
goog.dom.TagName.OPTION = "OPTION";
goog.dom.TagName.OUTPUT = "OUTPUT";
goog.dom.TagName.P = "P";
goog.dom.TagName.PARAM = "PARAM";
goog.dom.TagName.PICTURE = "PICTURE";
goog.dom.TagName.PRE = "PRE";
goog.dom.TagName.PROGRESS = "PROGRESS";
goog.dom.TagName.Q = "Q";
goog.dom.TagName.RP = "RP";
goog.dom.TagName.RT = "RT";
goog.dom.TagName.RTC = "RTC";
goog.dom.TagName.RUBY = "RUBY";
goog.dom.TagName.S = "S";
goog.dom.TagName.SAMP = "SAMP";
goog.dom.TagName.SCRIPT = "SCRIPT";
goog.dom.TagName.SECTION = "SECTION";
goog.dom.TagName.SELECT = "SELECT";
goog.dom.TagName.SMALL = "SMALL";
goog.dom.TagName.SOURCE = "SOURCE";
goog.dom.TagName.SPAN = "SPAN";
goog.dom.TagName.STRIKE = "STRIKE";
goog.dom.TagName.STRONG = "STRONG";
goog.dom.TagName.STYLE = "STYLE";
goog.dom.TagName.SUB = "SUB";
goog.dom.TagName.SUMMARY = "SUMMARY";
goog.dom.TagName.SUP = "SUP";
goog.dom.TagName.SVG = "SVG";
goog.dom.TagName.TABLE = "TABLE";
goog.dom.TagName.TBODY = "TBODY";
goog.dom.TagName.TD = "TD";
goog.dom.TagName.TEMPLATE = "TEMPLATE";
goog.dom.TagName.TEXTAREA = "TEXTAREA";
goog.dom.TagName.TFOOT = "TFOOT";
goog.dom.TagName.TH = "TH";
goog.dom.TagName.THEAD = "THEAD";
goog.dom.TagName.TIME = "TIME";
goog.dom.TagName.TITLE = "TITLE";
goog.dom.TagName.TR = "TR";
goog.dom.TagName.TRACK = "TRACK";
goog.dom.TagName.TT = "TT";
goog.dom.TagName.U = "U";
goog.dom.TagName.UL = "UL";
goog.dom.TagName.VAR = "VAR";
goog.dom.TagName.VIDEO = "VIDEO";
goog.dom.TagName.WBR = "WBR";

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.array");
  goog.module.declareLegacyNamespace();
  const asserts = goog.require("goog.asserts");
  goog.NATIVE_ARRAY_PROTOTYPES = goog.define("goog.NATIVE_ARRAY_PROTOTYPES", goog.TRUSTED_SITE);
  const ASSUME_NATIVE_FUNCTIONS = goog.define("goog.array.ASSUME_NATIVE_FUNCTIONS", goog.FEATURESET_YEAR > 2012);
  exports.ASSUME_NATIVE_FUNCTIONS = ASSUME_NATIVE_FUNCTIONS;
  function peek(array) {
    return array[array.length - 1];
  }
  exports.peek = peek;
  exports.last = peek;
  const indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function(arr, obj, opt_fromIndex) {
    asserts.assert(arr.length != null);
    return Array.prototype.indexOf.call(arr, obj, opt_fromIndex);
  } : function(arr, obj, opt_fromIndex) {
    const fromIndex = opt_fromIndex == null ? 0 : opt_fromIndex < 0 ? Math.max(0, arr.length + opt_fromIndex) : opt_fromIndex;
    if (typeof arr === "string") {
      if (typeof obj !== "string" || obj.length != 1) {
        return -1;
      }
      return arr.indexOf(obj, fromIndex);
    }
    for (let i = fromIndex; i < arr.length; i++) {
      if (i in arr && arr[i] === obj) {
        return i;
      }
    }
    return -1;
  };
  exports.indexOf = indexOf;
  const lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function(arr, obj, opt_fromIndex) {
    asserts.assert(arr.length != null);
    const fromIndex = opt_fromIndex == null ? arr.length - 1 : opt_fromIndex;
    return Array.prototype.lastIndexOf.call(arr, obj, fromIndex);
  } : function(arr, obj, opt_fromIndex) {
    let fromIndex = opt_fromIndex == null ? arr.length - 1 : opt_fromIndex;
    if (fromIndex < 0) {
      fromIndex = Math.max(0, arr.length + fromIndex);
    }
    if (typeof arr === "string") {
      if (typeof obj !== "string" || obj.length != 1) {
        return -1;
      }
      return arr.lastIndexOf(obj, fromIndex);
    }
    for (let i = fromIndex; i >= 0; i--) {
      if (i in arr && arr[i] === obj) {
        return i;
      }
    }
    return -1;
  };
  exports.lastIndexOf = lastIndexOf;
  const forEach = goog.NATIVE_ARRAY_PROTOTYPES && (ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function(arr, f, opt_obj) {
    asserts.assert(arr.length != null);
    Array.prototype.forEach.call(arr, f, opt_obj);
  } : function(arr, f, opt_obj) {
    const l = arr.length;
    const arr2 = typeof arr === "string" ? arr.split("") : arr;
    for (let i = 0; i < l; i++) {
      if (i in arr2) {
        f.call(opt_obj, arr2[i], i, arr);
      }
    }
  };
  exports.forEach = forEach;
  function forEachRight(arr, f, opt_obj) {
    const l = arr.length;
    const arr2 = typeof arr === "string" ? arr.split("") : arr;
    for (let i = l - 1; i >= 0; --i) {
      if (i in arr2) {
        f.call(opt_obj, arr2[i], i, arr);
      }
    }
  }
  exports.forEachRight = forEachRight;
  const filter = goog.NATIVE_ARRAY_PROTOTYPES && (ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function(arr, f, opt_obj) {
    asserts.assert(arr.length != null);
    return Array.prototype.filter.call(arr, f, opt_obj);
  } : function(arr, f, opt_obj) {
    const l = arr.length;
    const res = [];
    let resLength = 0;
    const arr2 = typeof arr === "string" ? arr.split("") : arr;
    for (let i = 0; i < l; i++) {
      if (i in arr2) {
        const val = arr2[i];
        if (f.call(opt_obj, val, i, arr)) {
          res[resLength++] = val;
        }
      }
    }
    return res;
  };
  exports.filter = filter;
  const map = goog.NATIVE_ARRAY_PROTOTYPES && (ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function(arr, f, opt_obj) {
    asserts.assert(arr.length != null);
    return Array.prototype.map.call(arr, f, opt_obj);
  } : function(arr, f, opt_obj) {
    const l = arr.length;
    const res = new Array(l);
    const arr2 = typeof arr === "string" ? arr.split("") : arr;
    for (let i = 0; i < l; i++) {
      if (i in arr2) {
        res[i] = f.call(opt_obj, arr2[i], i, arr);
      }
    }
    return res;
  };
  exports.map = map;
  const reduce = goog.NATIVE_ARRAY_PROTOTYPES && (ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function(arr, f, val, opt_obj) {
    asserts.assert(arr.length != null);
    if (opt_obj) {
      f = goog.bind(f, opt_obj);
    }
    return Array.prototype.reduce.call(arr, f, val);
  } : function(arr, f, val, opt_obj) {
    let rval = val;
    forEach(arr, function(val, index) {
      rval = f.call(opt_obj, rval, val, index, arr);
    });
    return rval;
  };
  exports.reduce = reduce;
  const reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function(arr, f, val, opt_obj) {
    asserts.assert(arr.length != null);
    asserts.assert(f != null);
    if (opt_obj) {
      f = goog.bind(f, opt_obj);
    }
    return Array.prototype.reduceRight.call(arr, f, val);
  } : function(arr, f, val, opt_obj) {
    let rval = val;
    forEachRight(arr, function(val, index) {
      rval = f.call(opt_obj, rval, val, index, arr);
    });
    return rval;
  };
  exports.reduceRight = reduceRight;
  const some = goog.NATIVE_ARRAY_PROTOTYPES && (ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function(arr, f, opt_obj) {
    asserts.assert(arr.length != null);
    return Array.prototype.some.call(arr, f, opt_obj);
  } : function(arr, f, opt_obj) {
    const l = arr.length;
    const arr2 = typeof arr === "string" ? arr.split("") : arr;
    for (let i = 0; i < l; i++) {
      if (i in arr2 && f.call(opt_obj, arr2[i], i, arr)) {
        return true;
      }
    }
    return false;
  };
  exports.some = some;
  const every = goog.NATIVE_ARRAY_PROTOTYPES && (ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function(arr, f, opt_obj) {
    asserts.assert(arr.length != null);
    return Array.prototype.every.call(arr, f, opt_obj);
  } : function(arr, f, opt_obj) {
    const l = arr.length;
    const arr2 = typeof arr === "string" ? arr.split("") : arr;
    for (let i = 0; i < l; i++) {
      if (i in arr2 && !f.call(opt_obj, arr2[i], i, arr)) {
        return false;
      }
    }
    return true;
  };
  exports.every = every;
  function count(arr, f, opt_obj) {
    let count = 0;
    forEach(arr, function(element, index, arr) {
      if (f.call(opt_obj, element, index, arr)) {
        ++count;
      }
    }, opt_obj);
    return count;
  }
  exports.count = count;
  function find(arr, f, opt_obj) {
    const i = findIndex(arr, f, opt_obj);
    return i < 0 ? null : typeof arr === "string" ? arr.charAt(i) : arr[i];
  }
  exports.find = find;
  function findIndex(arr, f, opt_obj) {
    const l = arr.length;
    const arr2 = typeof arr === "string" ? arr.split("") : arr;
    for (let i = 0; i < l; i++) {
      if (i in arr2 && f.call(opt_obj, arr2[i], i, arr)) {
        return i;
      }
    }
    return -1;
  }
  exports.findIndex = findIndex;
  function findRight(arr, f, opt_obj) {
    const i = findIndexRight(arr, f, opt_obj);
    return i < 0 ? null : typeof arr === "string" ? arr.charAt(i) : arr[i];
  }
  exports.findRight = findRight;
  function findIndexRight(arr, f, opt_obj) {
    const l = arr.length;
    const arr2 = typeof arr === "string" ? arr.split("") : arr;
    for (let i = l - 1; i >= 0; i--) {
      if (i in arr2 && f.call(opt_obj, arr2[i], i, arr)) {
        return i;
      }
    }
    return -1;
  }
  exports.findIndexRight = findIndexRight;
  function contains(arr, obj) {
    return indexOf(arr, obj) >= 0;
  }
  exports.contains = contains;
  function isEmpty(arr) {
    return arr.length == 0;
  }
  exports.isEmpty = isEmpty;
  function clear(arr) {
    if (!Array.isArray(arr)) {
      for (let i = arr.length - 1; i >= 0; i--) {
        delete arr[i];
      }
    }
    arr.length = 0;
  }
  exports.clear = clear;
  function insert(arr, obj) {
    if (!contains(arr, obj)) {
      arr.push(obj);
    }
  }
  exports.insert = insert;
  function insertAt(arr, obj, opt_i) {
    splice(arr, opt_i, 0, obj);
  }
  exports.insertAt = insertAt;
  function insertArrayAt(arr, elementsToAdd, opt_i) {
    goog.partial(splice, arr, opt_i, 0).apply(null, elementsToAdd);
  }
  exports.insertArrayAt = insertArrayAt;
  function insertBefore(arr, obj, opt_obj2) {
    let i;
    if (arguments.length == 2 || (i = indexOf(arr, opt_obj2)) < 0) {
      arr.push(obj);
    } else {
      insertAt(arr, obj, i);
    }
  }
  exports.insertBefore = insertBefore;
  function remove(arr, obj) {
    const i = indexOf(arr, obj);
    let rv;
    if (rv = i >= 0) {
      removeAt(arr, i);
    }
    return rv;
  }
  exports.remove = remove;
  function removeLast(arr, obj) {
    const i = lastIndexOf(arr, obj);
    if (i >= 0) {
      removeAt(arr, i);
      return true;
    }
    return false;
  }
  exports.removeLast = removeLast;
  function removeAt(arr, i) {
    asserts.assert(arr.length != null);
    return Array.prototype.splice.call(arr, i, 1).length == 1;
  }
  exports.removeAt = removeAt;
  function removeIf(arr, f, opt_obj) {
    const i = findIndex(arr, f, opt_obj);
    if (i >= 0) {
      removeAt(arr, i);
      return true;
    }
    return false;
  }
  exports.removeIf = removeIf;
  function removeAllIf(arr, f, opt_obj) {
    let removedCount = 0;
    forEachRight(arr, function(val, index) {
      if (f.call(opt_obj, val, index, arr)) {
        if (removeAt(arr, index)) {
          removedCount++;
        }
      }
    });
    return removedCount;
  }
  exports.removeAllIf = removeAllIf;
  function concat(var_args) {
    return Array.prototype.concat.apply([], arguments);
  }
  exports.concat = concat;
  function join(var_args) {
    return Array.prototype.concat.apply([], arguments);
  }
  exports.join = join;
  function toArray(object) {
    const length = object.length;
    if (length > 0) {
      const rv = new Array(length);
      for (let i = 0; i < length; i++) {
        rv[i] = object[i];
      }
      return rv;
    }
    return [];
  }
  exports.toArray = toArray;
  const clone = toArray;
  exports.clone = clone;
  function extend(arr1, var_args) {
    for (let i = 1; i < arguments.length; i++) {
      const arr2 = arguments[i];
      if (goog.isArrayLike(arr2)) {
        const len1 = arr1.length || 0;
        const len2 = arr2.length || 0;
        arr1.length = len1 + len2;
        for (let j = 0; j < len2; j++) {
          arr1[len1 + j] = arr2[j];
        }
      } else {
        arr1.push(arr2);
      }
    }
  }
  exports.extend = extend;
  function splice(arr, index, howMany, var_args) {
    asserts.assert(arr.length != null);
    return Array.prototype.splice.apply(arr, slice(arguments, 1));
  }
  exports.splice = splice;
  function slice(arr, start, opt_end) {
    asserts.assert(arr.length != null);
    if (arguments.length <= 2) {
      return Array.prototype.slice.call(arr, start);
    } else {
      return Array.prototype.slice.call(arr, start, opt_end);
    }
  }
  exports.slice = slice;
  function removeDuplicates(arr, opt_rv, opt_hashFn) {
    const returnArray = opt_rv || arr;
    const defaultHashFn = function(item) {
      return goog.isObject(item) ? "o" + goog.getUid(item) : (typeof item).charAt(0) + item;
    };
    const hashFn = opt_hashFn || defaultHashFn;
    let cursorInsert = 0;
    let cursorRead = 0;
    const seen = {};
    while (cursorRead < arr.length) {
      const current = arr[cursorRead++];
      const key = hashFn(current);
      if (!Object.prototype.hasOwnProperty.call(seen, key)) {
        seen[key] = true;
        returnArray[cursorInsert++] = current;
      }
    }
    returnArray.length = cursorInsert;
  }
  exports.removeDuplicates = removeDuplicates;
  function binarySearch(arr, target, opt_compareFn) {
    return binarySearch_(arr, opt_compareFn || defaultCompare, false, target);
  }
  exports.binarySearch = binarySearch;
  function binarySelect(arr, evaluator, opt_obj) {
    return binarySearch_(arr, evaluator, true, undefined, opt_obj);
  }
  exports.binarySelect = binarySelect;
  function binarySearch_(arr, compareFn, isEvaluator, opt_target, opt_selfObj) {
    let left = 0;
    let right = arr.length;
    let found;
    while (left < right) {
      const middle = left + (right - left >>> 1);
      let compareResult;
      if (isEvaluator) {
        compareResult = compareFn.call(opt_selfObj, arr[middle], middle, arr);
      } else {
        compareResult = compareFn(opt_target, arr[middle]);
      }
      if (compareResult > 0) {
        left = middle + 1;
      } else {
        right = middle;
        found = !compareResult;
      }
    }
    return found ? left : -left - 1;
  }
  function sort(arr, opt_compareFn) {
    arr.sort(opt_compareFn || defaultCompare);
  }
  exports.sort = sort;
  function stableSort(arr, opt_compareFn) {
    const compArr = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
      compArr[i] = {index:i, value:arr[i]};
    }
    const valueCompareFn = opt_compareFn || defaultCompare;
    function stableCompareFn(obj1, obj2) {
      return valueCompareFn(obj1.value, obj2.value) || obj1.index - obj2.index;
    }
    sort(compArr, stableCompareFn);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = compArr[i].value;
    }
  }
  exports.stableSort = stableSort;
  function sortByKey(arr, keyFn, opt_compareFn) {
    const keyCompareFn = opt_compareFn || defaultCompare;
    sort(arr, function(a, b) {
      return keyCompareFn(keyFn(a), keyFn(b));
    });
  }
  exports.sortByKey = sortByKey;
  function sortObjectsByKey(arr, key, opt_compareFn) {
    sortByKey(arr, function(obj) {
      return obj[key];
    }, opt_compareFn);
  }
  exports.sortObjectsByKey = sortObjectsByKey;
  function isSorted(arr, opt_compareFn, opt_strict) {
    const compare = opt_compareFn || defaultCompare;
    for (let i = 1; i < arr.length; i++) {
      const compareResult = compare(arr[i - 1], arr[i]);
      if (compareResult > 0 || compareResult == 0 && opt_strict) {
        return false;
      }
    }
    return true;
  }
  exports.isSorted = isSorted;
  function equals(arr1, arr2, opt_equalsFn) {
    if (!goog.isArrayLike(arr1) || !goog.isArrayLike(arr2) || arr1.length != arr2.length) {
      return false;
    }
    const l = arr1.length;
    const equalsFn = opt_equalsFn || defaultCompareEquality;
    for (let i = 0; i < l; i++) {
      if (!equalsFn(arr1[i], arr2[i])) {
        return false;
      }
    }
    return true;
  }
  exports.equals = equals;
  function compare3(arr1, arr2, opt_compareFn) {
    const compare = opt_compareFn || defaultCompare;
    const l = Math.min(arr1.length, arr2.length);
    for (let i = 0; i < l; i++) {
      const result = compare(arr1[i], arr2[i]);
      if (result != 0) {
        return result;
      }
    }
    return defaultCompare(arr1.length, arr2.length);
  }
  exports.compare3 = compare3;
  function defaultCompare(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  exports.defaultCompare = defaultCompare;
  function inverseDefaultCompare(a, b) {
    return -defaultCompare(a, b);
  }
  exports.inverseDefaultCompare = inverseDefaultCompare;
  function defaultCompareEquality(a, b) {
    return a === b;
  }
  exports.defaultCompareEquality = defaultCompareEquality;
  function binaryInsert(array, value, opt_compareFn) {
    const index = binarySearch(array, value, opt_compareFn);
    if (index < 0) {
      insertAt(array, value, -(index + 1));
      return true;
    }
    return false;
  }
  exports.binaryInsert = binaryInsert;
  function binaryRemove(array, value, opt_compareFn) {
    const index = binarySearch(array, value, opt_compareFn);
    return index >= 0 ? removeAt(array, index) : false;
  }
  exports.binaryRemove = binaryRemove;
  function bucket(array, sorter, opt_obj) {
    const buckets = {};
    for (let i = 0; i < array.length; i++) {
      const value = array[i];
      const key = sorter.call(opt_obj, value, i, array);
      if (key !== undefined) {
        const bucket = buckets[key] || (buckets[key] = []);
        bucket.push(value);
      }
    }
    return buckets;
  }
  exports.bucket = bucket;
  function bucketToMap(array, sorter) {
    const buckets = new Map();
    for (let i = 0; i < array.length; i++) {
      const value = array[i];
      const key = sorter(value, i, array);
      if (key !== undefined) {
        let bucket = buckets.get(key);
        if (!bucket) {
          bucket = [];
          buckets.set(key, bucket);
        }
        bucket.push(value);
      }
    }
    return buckets;
  }
  exports.bucketToMap = bucketToMap;
  function toObject(arr, keyFunc, opt_obj) {
    const ret = {};
    forEach(arr, function(element, index) {
      ret[keyFunc.call(opt_obj, element, index, arr)] = element;
    });
    return ret;
  }
  exports.toObject = toObject;
  function toMap(arr, keyFunc) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      map.set(keyFunc(element, i, arr), element);
    }
    return map;
  }
  exports.toMap = toMap;
  function range(startOrEnd, opt_end, opt_step) {
    const array = [];
    let start = 0;
    let end = startOrEnd;
    const step = opt_step || 1;
    if (opt_end !== undefined) {
      start = startOrEnd;
      end = opt_end;
    }
    if (step * (end - start) < 0) {
      return [];
    }
    if (step > 0) {
      for (let i = start; i < end; i += step) {
        array.push(i);
      }
    } else {
      for (let i = start; i > end; i += step) {
        array.push(i);
      }
    }
    return array;
  }
  exports.range = range;
  function repeat(value, n) {
    const array = [];
    for (let i = 0; i < n; i++) {
      array[i] = value;
    }
    return array;
  }
  exports.repeat = repeat;
  function flatten(var_args) {
    const CHUNK_SIZE = 8192;
    const result = [];
    for (let i = 0; i < arguments.length; i++) {
      const element = arguments[i];
      if (Array.isArray(element)) {
        for (let c = 0; c < element.length; c += CHUNK_SIZE) {
          const chunk = slice(element, c, c + CHUNK_SIZE);
          const recurseResult = flatten.apply(null, chunk);
          for (let r = 0; r < recurseResult.length; r++) {
            result.push(recurseResult[r]);
          }
        }
      } else {
        result.push(element);
      }
    }
    return result;
  }
  exports.flatten = flatten;
  function rotate(array, n) {
    asserts.assert(array.length != null);
    if (array.length) {
      n %= array.length;
      if (n > 0) {
        Array.prototype.unshift.apply(array, array.splice(-n, n));
      } else if (n < 0) {
        Array.prototype.push.apply(array, array.splice(0, -n));
      }
    }
    return array;
  }
  exports.rotate = rotate;
  function moveItem(arr, fromIndex, toIndex) {
    asserts.assert(fromIndex >= 0 && fromIndex < arr.length);
    asserts.assert(toIndex >= 0 && toIndex < arr.length);
    const removedItems = Array.prototype.splice.call(arr, fromIndex, 1);
    Array.prototype.splice.call(arr, toIndex, 0, removedItems[0]);
  }
  exports.moveItem = moveItem;
  function zip(var_args) {
    if (!arguments.length) {
      return [];
    }
    const result = [];
    let minLen = arguments[0].length;
    for (let i = 1; i < arguments.length; i++) {
      if (arguments[i].length < minLen) {
        minLen = arguments[i].length;
      }
    }
    for (let i = 0; i < minLen; i++) {
      const value = [];
      for (let j = 0; j < arguments.length; j++) {
        value.push(arguments[j][i]);
      }
      result.push(value);
    }
    return result;
  }
  exports.zip = zip;
  function shuffle(arr, opt_randFn) {
    const randFn = opt_randFn || Math.random;
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(randFn() * (i + 1));
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
  }
  exports.shuffle = shuffle;
  function copyByIndex(arr, index_arr) {
    const result = [];
    forEach(index_arr, function(index) {
      result.push(arr[index]);
    });
    return result;
  }
  exports.copyByIndex = copyByIndex;
  function concatMap(arr, f, opt_obj) {
    return concat.apply([], map(arr, f, opt_obj));
  }
  exports.concatMap = concatMap;
  return exports;
});

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.labs.userAgent");
  const USE_CLIENT_HINTS_OVERRIDE = goog.define("goog.labs.userAgent.USE_CLIENT_HINTS_OVERRIDE", "");
  const USE_CLIENT_HINTS = goog.define("goog.labs.userAgent.USE_CLIENT_HINTS", false);
  exports.USE_CLIENT_HINTS = (() => {
    const override = USE_CLIENT_HINTS_OVERRIDE ? goog.getObjectByName(USE_CLIENT_HINTS_OVERRIDE) : null;
    return override != null ? override : USE_CLIENT_HINTS;
  })();
  return exports;
});

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.labs.userAgent.util");
  goog.module.declareLegacyNamespace();
  const {USE_CLIENT_HINTS} = goog.require("goog.labs.userAgent");
  const {caseInsensitiveContains, contains} = goog.require("goog.string.internal");
  const ASSUME_CLIENT_HINTS_SUPPORT = false;
  function getNativeUserAgentString() {
    const navigator = getNavigator();
    if (navigator) {
      const userAgent = navigator.userAgent;
      if (userAgent) {
        return userAgent;
      }
    }
    return "";
  }
  function getNativeUserAgentData() {
    if (!USE_CLIENT_HINTS) {
      return null;
    }
    const navigator = getNavigator();
    if (navigator) {
      return navigator.userAgentData || null;
    }
    return null;
  }
  function getNavigator() {
    return goog.global.navigator;
  }
  let userAgentInternal = getNativeUserAgentString();
  let userAgentDataInternal = getNativeUserAgentData();
  function setUserAgent(userAgent = undefined) {
    userAgentInternal = typeof userAgent === "string" ? userAgent : getNativeUserAgentString();
  }
  function getUserAgent() {
    return userAgentInternal;
  }
  function setUserAgentData(userAgentData) {
    userAgentDataInternal = userAgentData;
  }
  function resetUserAgentData() {
    userAgentDataInternal = getNativeUserAgentData();
  }
  function getUserAgentData() {
    return userAgentDataInternal;
  }
  function matchUserAgentDataBrand(str) {
    const data = getUserAgentData();
    if (!data) {
      return false;
    }
    return data.brands.some(({brand}) => brand && contains(brand, str));
  }
  function matchUserAgent(str) {
    const userAgent = getUserAgent();
    return contains(userAgent, str);
  }
  function matchUserAgentIgnoreCase(str) {
    const userAgent = getUserAgent();
    return caseInsensitiveContains(userAgent, str);
  }
  function extractVersionTuples(userAgent) {
    const versionRegExp = new RegExp("(\\w[\\w ]+)" + "/" + "([^\\s]+)" + "\\s*" + "(?:\\((.*?)\\))?", "g");
    const data = [];
    let match;
    while (match = versionRegExp.exec(userAgent)) {
      data.push([match[1], match[2], match[3] || undefined]);
    }
    return data;
  }
  exports = {ASSUME_CLIENT_HINTS_SUPPORT, extractVersionTuples, getNativeUserAgentString, getUserAgent, getUserAgentData, matchUserAgent, matchUserAgentDataBrand, matchUserAgentIgnoreCase, resetUserAgentData, setUserAgent, setUserAgentData,};
  return exports;
});

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.labs.userAgent.browser");
  goog.module.declareLegacyNamespace();
  const googArray = goog.require("goog.array");
  const googObject = goog.require("goog.object");
  const util = goog.require("goog.labs.userAgent.util");
  const {compareVersions} = goog.require("goog.string.internal");
  function useUserAgentBrand() {
    const userAgentData = util.getUserAgentData();
    return !!userAgentData && userAgentData.brands.length > 0;
  }
  function matchOpera() {
    if (util.ASSUME_CLIENT_HINTS_SUPPORT || util.getUserAgentData()) {
      return false;
    }
    return util.matchUserAgent("Opera");
  }
  function matchIE() {
    if (util.ASSUME_CLIENT_HINTS_SUPPORT || util.getUserAgentData()) {
      return false;
    }
    return util.matchUserAgent("Trident") || util.matchUserAgent("MSIE");
  }
  function matchEdgeHtml() {
    if (util.ASSUME_CLIENT_HINTS_SUPPORT || util.getUserAgentData()) {
      return false;
    }
    return util.matchUserAgent("Edge");
  }
  function matchEdgeChromium() {
    if (useUserAgentBrand()) {
      return util.matchUserAgentDataBrand("Edge");
    }
    return util.matchUserAgent("Edg/");
  }
  function matchOperaChromium() {
    if (useUserAgentBrand()) {
      return util.matchUserAgentDataBrand("Opera");
    }
    return util.matchUserAgent("OPR");
  }
  function matchFirefox() {
    if (useUserAgentBrand()) {
      return util.matchUserAgentDataBrand("Firefox");
    }
    return util.matchUserAgent("Firefox") || util.matchUserAgent("FxiOS");
  }
  function matchSafari() {
    if (useUserAgentBrand()) {
      return util.matchUserAgentDataBrand("Safari");
    }
    return util.matchUserAgent("Safari") && !(matchChrome() || matchCoast() || matchOpera() || matchEdgeHtml() || matchEdgeChromium() || matchOperaChromium() || matchFirefox() || isSilk() || util.matchUserAgent("Android"));
  }
  function matchCoast() {
    if (util.ASSUME_CLIENT_HINTS_SUPPORT || util.getUserAgentData()) {
      return false;
    }
    return util.matchUserAgent("Coast");
  }
  function matchIosWebview() {
    return (util.matchUserAgent("iPad") || util.matchUserAgent("iPhone")) && !matchSafari() && !matchChrome() && !matchCoast() && !matchFirefox() && util.matchUserAgent("AppleWebKit");
  }
  function matchChrome() {
    if (useUserAgentBrand()) {
      return util.matchUserAgentDataBrand("Chromium");
    }
    return (util.matchUserAgent("Chrome") || util.matchUserAgent("CriOS")) && !matchEdgeHtml();
  }
  function matchAndroidBrowser() {
    return util.matchUserAgent("Android") && !(isChrome() || isFirefox() || isOpera() || isSilk());
  }
  const isOpera = matchOpera;
  const isIE = matchIE;
  const isEdge = matchEdgeHtml;
  const isEdgeChromium = matchEdgeChromium;
  const isOperaChromium = matchOperaChromium;
  const isFirefox = matchFirefox;
  const isSafari = matchSafari;
  const isCoast = matchCoast;
  const isIosWebview = matchIosWebview;
  const isChrome = matchChrome;
  const isAndroidBrowser = matchAndroidBrowser;
  function isSilk() {
    if (useUserAgentBrand()) {
      return util.matchUserAgentDataBrand("Silk");
    }
    return util.matchUserAgent("Silk");
  }
  function getVersion() {
    const userAgentString = util.getUserAgent();
    if (isIE()) {
      return getIEVersion(userAgentString);
    }
    const versionTuples = util.extractVersionTuples(userAgentString);
    const versionMap = {};
    versionTuples.forEach(tuple => {
      const key = tuple[0];
      const value = tuple[1];
      versionMap[key] = value;
    });
    const versionMapHasKey = goog.partial(googObject.containsKey, versionMap);
    function lookUpValueWithKeys(keys) {
      const key = googArray.find(keys, versionMapHasKey);
      return versionMap[key] || "";
    }
    if (isOpera()) {
      return lookUpValueWithKeys(["Version", "Opera"]);
    }
    if (isEdge()) {
      return lookUpValueWithKeys(["Edge"]);
    }
    if (isEdgeChromium()) {
      return lookUpValueWithKeys(["Edg"]);
    }
    if (isChrome()) {
      return lookUpValueWithKeys(["Chrome", "CriOS", "HeadlessChrome"]);
    }
    const tuple = versionTuples[2];
    return tuple && tuple[1] || "";
  }
  function isVersionOrHigher(version) {
    return compareVersions(getVersion(), version) >= 0;
  }
  function getIEVersion(userAgent) {
    const rv = /rv: *([\d\.]*)/.exec(userAgent);
    if (rv && rv[1]) {
      return rv[1];
    }
    let version = "";
    const msie = /MSIE +([\d\.]+)/.exec(userAgent);
    if (msie && msie[1]) {
      const tridentVersion = /Trident\/(\d.\d)/.exec(userAgent);
      if (msie[1] == "7.0") {
        if (tridentVersion && tridentVersion[1]) {
          switch(tridentVersion[1]) {
            case "4.0":
              version = "8.0";
              break;
            case "5.0":
              version = "9.0";
              break;
            case "6.0":
              version = "10.0";
              break;
            case "7.0":
              version = "11.0";
              break;
          }
        } else {
          version = "7.0";
        }
      } else {
        version = msie[1];
      }
    }
    return version;
  }
  exports = {getVersion, isAndroidBrowser, isChrome, isCoast, isEdge, isEdgeChromium, isFirefox, isIE, isIosWebview, isOpera, isOperaChromium, isSafari, isSilk, isVersionOrHigher,};
  return exports;
});

goog.provide("goog.dom.tags");
goog.require("goog.object");
goog.dom.tags.VOID_TAGS_ = goog.object.createSet("area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr");
goog.dom.tags.isVoidTag = function(tagName) {
  return goog.dom.tags.VOID_TAGS_[tagName] === true;
};

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.html.SafeHtml");
  goog.module.declareLegacyNamespace();
  const Const = goog.require("goog.string.Const");
  const Dir = goog.require("goog.i18n.bidi.Dir");
  const DirectionalString = goog.require("goog.i18n.bidi.DirectionalString");
  const SafeScript = goog.require("goog.html.SafeScript");
  const SafeStyle = goog.require("goog.html.SafeStyle");
  const SafeStyleSheet = goog.require("goog.html.SafeStyleSheet");
  const SafeUrl = goog.require("goog.html.SafeUrl");
  const TagName = goog.require("goog.dom.TagName");
  const TrustedResourceUrl = goog.require("goog.html.TrustedResourceUrl");
  const TypedString = goog.require("goog.string.TypedString");
  const asserts = goog.require("goog.asserts");
  const browser = goog.require("goog.labs.userAgent.browser");
  const googArray = goog.require("goog.array");
  const googObject = goog.require("goog.object");
  const internal = goog.require("goog.string.internal");
  const tags = goog.require("goog.dom.tags");
  const trustedtypes = goog.require("goog.html.trustedtypes");
  const CONSTRUCTOR_TOKEN_PRIVATE = {};
  class SafeHtml {
    constructor(value, dir, token) {
      this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = token === CONSTRUCTOR_TOKEN_PRIVATE ? value : "";
      this.dir_ = dir;
      this.implementsGoogI18nBidiDirectionalString = true;
      this.implementsGoogStringTypedString = true;
    }
    getDirection() {
      return this.dir_;
    }
    getTypedStringValue() {
      return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
    }
    toString() {
      return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
    }
    static unwrap(safeHtml) {
      return SafeHtml.unwrapTrustedHTML(safeHtml).toString();
    }
    static unwrapTrustedHTML(safeHtml) {
      if (safeHtml instanceof SafeHtml && safeHtml.constructor === SafeHtml) {
        return safeHtml.privateDoNotAccessOrElseSafeHtmlWrappedValue_;
      } else {
        asserts.fail(`expected object of type SafeHtml, got '${safeHtml}' of type ` + goog.typeOf(safeHtml));
        return "type_error:SafeHtml";
      }
    }
    static htmlEscape(textOrHtml) {
      if (textOrHtml instanceof SafeHtml) {
        return textOrHtml;
      }
      const textIsObject = typeof textOrHtml == "object";
      let dir = null;
      if (textIsObject && textOrHtml.implementsGoogI18nBidiDirectionalString) {
        dir = textOrHtml.getDirection();
      }
      let textAsString;
      if (textIsObject && textOrHtml.implementsGoogStringTypedString) {
        textAsString = textOrHtml.getTypedStringValue();
      } else {
        textAsString = String(textOrHtml);
      }
      return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(internal.htmlEscape(textAsString), dir);
    }
    static htmlEscapePreservingNewlines(textOrHtml) {
      if (textOrHtml instanceof SafeHtml) {
        return textOrHtml;
      }
      const html = SafeHtml.htmlEscape(textOrHtml);
      return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(internal.newLineToBr(SafeHtml.unwrap(html)), html.getDirection());
    }
    static htmlEscapePreservingNewlinesAndSpaces(textOrHtml) {
      if (textOrHtml instanceof SafeHtml) {
        return textOrHtml;
      }
      const html = SafeHtml.htmlEscape(textOrHtml);
      return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(internal.whitespaceEscape(SafeHtml.unwrap(html)), html.getDirection());
    }
    static comment(text) {
      return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("\x3c!--" + internal.htmlEscape(text) + "--\x3e", null);
    }
    static create(tagName, attributes = undefined, content = undefined) {
      SafeHtml.verifyTagName(String(tagName));
      return SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(tagName), attributes, content);
    }
    static verifyTagName(tagName) {
      if (!VALID_NAMES_IN_TAG.test(tagName)) {
        throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? `Invalid tag name <${tagName}>.` : "");
      }
      if (tagName.toUpperCase() in NOT_ALLOWED_TAG_NAMES) {
        throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? `Tag name <${tagName}> is not allowed for SafeHtml.` : "");
      }
    }
    static createIframe(src = undefined, srcdoc = undefined, attributes = undefined, content = undefined) {
      if (src) {
        TrustedResourceUrl.unwrap(src);
      }
      const fixedAttributes = {};
      fixedAttributes["src"] = src || null;
      fixedAttributes["srcdoc"] = srcdoc && SafeHtml.unwrap(srcdoc);
      const defaultAttributes = {"sandbox":""};
      const combinedAttrs = SafeHtml.combineAttributes(fixedAttributes, defaultAttributes, attributes);
      return SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", combinedAttrs, content);
    }
    static createSandboxIframe(src = undefined, srcdoc = undefined, attributes = undefined, content = undefined) {
      if (!SafeHtml.canUseSandboxIframe()) {
        throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? "The browser does not support sandboxed iframes." : "");
      }
      const fixedAttributes = {};
      if (src) {
        fixedAttributes["src"] = SafeUrl.unwrap(SafeUrl.sanitize(src));
      } else {
        fixedAttributes["src"] = null;
      }
      fixedAttributes["srcdoc"] = srcdoc || null;
      fixedAttributes["sandbox"] = "";
      const combinedAttrs = SafeHtml.combineAttributes(fixedAttributes, {}, attributes);
      return SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", combinedAttrs, content);
    }
    static canUseSandboxIframe() {
      return goog.global["HTMLIFrameElement"] && "sandbox" in goog.global["HTMLIFrameElement"].prototype;
    }
    static createScriptSrc(src, attributes = undefined) {
      TrustedResourceUrl.unwrap(src);
      const fixedAttributes = {"src":src};
      const defaultAttributes = {};
      const combinedAttrs = SafeHtml.combineAttributes(fixedAttributes, defaultAttributes, attributes);
      return SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", combinedAttrs);
    }
    static createScript(script, attributes = undefined) {
      for (let attr in attributes) {
        if (Object.prototype.hasOwnProperty.call(attributes, attr)) {
          const attrLower = attr.toLowerCase();
          if (attrLower == "language" || attrLower == "src" || attrLower == "text" || attrLower == "type") {
            throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? `Cannot set "${attrLower}" attribute` : "");
          }
        }
      }
      let content = "";
      script = googArray.concat(script);
      for (let i = 0; i < script.length; i++) {
        content += SafeScript.unwrap(script[i]);
      }
      const htmlContent = SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(content, Dir.NEUTRAL);
      return SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", attributes, htmlContent);
    }
    static createStyle(styleSheet, attributes = undefined) {
      const fixedAttributes = {"type":"text/css"};
      const defaultAttributes = {};
      const combinedAttrs = SafeHtml.combineAttributes(fixedAttributes, defaultAttributes, attributes);
      let content = "";
      styleSheet = googArray.concat(styleSheet);
      for (let i = 0; i < styleSheet.length; i++) {
        content += SafeStyleSheet.unwrap(styleSheet[i]);
      }
      const htmlContent = SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(content, Dir.NEUTRAL);
      return SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style", combinedAttrs, htmlContent);
    }
    static createMetaRefresh(url, secs = undefined) {
      let unwrappedUrl = SafeUrl.unwrap(SafeUrl.sanitize(url));
      if (browser.isIE() || browser.isEdge()) {
        if (internal.contains(unwrappedUrl, ";")) {
          unwrappedUrl = "'" + unwrappedUrl.replace(/'/g, "%27") + "'";
        }
      }
      const attributes = {"http-equiv":"refresh", "content":(secs || 0) + "; url\x3d" + unwrappedUrl,};
      return SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta", attributes);
    }
    static createWithDir(dir, tagName, attributes = undefined, content = undefined) {
      const html = SafeHtml.create(tagName, attributes, content);
      html.dir_ = dir;
      return html;
    }
    static join(separator, parts) {
      const separatorHtml = SafeHtml.htmlEscape(separator);
      let dir = separatorHtml.getDirection();
      const content = [];
      const addArgument = argument => {
        if (Array.isArray(argument)) {
          argument.forEach(addArgument);
        } else {
          const html = SafeHtml.htmlEscape(argument);
          content.push(SafeHtml.unwrap(html));
          const htmlDir = html.getDirection();
          if (dir == Dir.NEUTRAL) {
            dir = htmlDir;
          } else if (htmlDir != Dir.NEUTRAL && dir != htmlDir) {
            dir = null;
          }
        }
      };
      parts.forEach(addArgument);
      return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(content.join(SafeHtml.unwrap(separatorHtml)), dir);
    }
    static concat(var_args) {
      return SafeHtml.join(SafeHtml.EMPTY, Array.prototype.slice.call(arguments));
    }
    static concatWithDir(dir, var_args) {
      const html = SafeHtml.concat(Array.prototype.slice.call(arguments, 1));
      html.dir_ = dir;
      return html;
    }
    static createSafeHtmlSecurityPrivateDoNotAccessOrElse(html, dir) {
      const policy = trustedtypes.getPolicyPrivateDoNotAccessOrElse();
      const trustedHtml = policy ? policy.createHTML(html) : html;
      return new SafeHtml(trustedHtml, dir, CONSTRUCTOR_TOKEN_PRIVATE);
    }
    static createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(tagName, attributes = undefined, content = undefined) {
      let dir = null;
      let result = `<${tagName}`;
      result += SafeHtml.stringifyAttributes(tagName, attributes);
      if (content == null) {
        content = [];
      } else if (!Array.isArray(content)) {
        content = [content];
      }
      if (tags.isVoidTag(tagName.toLowerCase())) {
        asserts.assert(!content.length, `Void tag <${tagName}> does not allow content.`);
        result += "\x3e";
      } else {
        const html = SafeHtml.concat(content);
        result += "\x3e" + SafeHtml.unwrap(html) + "\x3c/" + tagName + "\x3e";
        dir = html.getDirection();
      }
      const dirAttribute = attributes && attributes["dir"];
      if (dirAttribute) {
        if (/^(ltr|rtl|auto)$/i.test(dirAttribute)) {
          dir = Dir.NEUTRAL;
        } else {
          dir = null;
        }
      }
      return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(result, dir);
    }
    static stringifyAttributes(tagName, attributes = undefined) {
      let result = "";
      if (attributes) {
        for (let name in attributes) {
          if (Object.prototype.hasOwnProperty.call(attributes, name)) {
            if (!VALID_NAMES_IN_TAG.test(name)) {
              throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? `Invalid attribute name "${name}".` : "");
            }
            const value = attributes[name];
            if (value == null) {
              continue;
            }
            result += " " + getAttrNameAndValue(tagName, name, value);
          }
        }
      }
      return result;
    }
    static combineAttributes(fixedAttributes, defaultAttributes, attributes = undefined) {
      const combinedAttributes = {};
      for (const name in fixedAttributes) {
        if (Object.prototype.hasOwnProperty.call(fixedAttributes, name)) {
          asserts.assert(name.toLowerCase() == name, "Must be lower case");
          combinedAttributes[name] = fixedAttributes[name];
        }
      }
      for (const name in defaultAttributes) {
        if (Object.prototype.hasOwnProperty.call(defaultAttributes, name)) {
          asserts.assert(name.toLowerCase() == name, "Must be lower case");
          combinedAttributes[name] = defaultAttributes[name];
        }
      }
      if (attributes) {
        for (const name in attributes) {
          if (Object.prototype.hasOwnProperty.call(attributes, name)) {
            const nameLower = name.toLowerCase();
            if (nameLower in fixedAttributes) {
              throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? `Cannot override "${nameLower}" attribute, got "` + name + '" with value "' + attributes[name] + '"' : "");
            }
            if (nameLower in defaultAttributes) {
              delete combinedAttributes[nameLower];
            }
            combinedAttributes[name] = attributes[name];
          }
        }
      }
      return combinedAttributes;
    }
  }
  SafeHtml.ENABLE_ERROR_MESSAGES = goog.define("goog.html.SafeHtml.ENABLE_ERROR_MESSAGES", goog.DEBUG);
  SafeHtml.SUPPORT_STYLE_ATTRIBUTE = goog.define("goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE", true);
  SafeHtml.TextOrHtml_;
  SafeHtml.from = SafeHtml.htmlEscape;
  const VALID_NAMES_IN_TAG = /^[a-zA-Z0-9-]+$/;
  const URL_ATTRIBUTES = googObject.createSet("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
  const NOT_ALLOWED_TAG_NAMES = googObject.createSet(TagName.APPLET, TagName.BASE, TagName.EMBED, TagName.IFRAME, TagName.LINK, TagName.MATH, TagName.META, TagName.OBJECT, TagName.SCRIPT, TagName.STYLE, TagName.SVG, TagName.TEMPLATE);
  SafeHtml.AttributeValue;
  function getAttrNameAndValue(tagName, name, value) {
    if (value instanceof Const) {
      value = Const.unwrap(value);
    } else if (name.toLowerCase() == "style") {
      if (SafeHtml.SUPPORT_STYLE_ATTRIBUTE) {
        value = getStyleValue(value);
      } else {
        throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "style" not supported.' : "");
      }
    } else if (/^on/i.test(name)) {
      throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? `Attribute "${name}` + '" requires goog.string.Const value, "' + value + '" given.' : "");
    } else if (name.toLowerCase() in URL_ATTRIBUTES) {
      if (value instanceof TrustedResourceUrl) {
        value = TrustedResourceUrl.unwrap(value);
      } else if (value instanceof SafeUrl) {
        value = SafeUrl.unwrap(value);
      } else if (typeof value === "string") {
        value = SafeUrl.sanitize(value).getTypedStringValue();
      } else {
        throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? `Attribute "${name}" on tag "${tagName}` + '" requires goog.html.SafeUrl, goog.string.Const, or' + ' string, value "' + value + '" given.' : "");
      }
    }
    if (value.implementsGoogStringTypedString) {
      value = value.getTypedStringValue();
    }
    asserts.assert(typeof value === "string" || typeof value === "number", "String or number value expected, got " + typeof value + " with value: " + value);
    return `${name}="` + internal.htmlEscape(String(value)) + '"';
  }
  function getStyleValue(value) {
    if (!goog.isObject(value)) {
      throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? 'The "style" attribute requires goog.html.SafeStyle or map ' + "of style properties, " + typeof value + " given: " + value : "");
    }
    if (!(value instanceof SafeStyle)) {
      value = SafeStyle.create(value);
    }
    return SafeStyle.unwrap(value);
  }
  SafeHtml.DOCTYPE_HTML = {valueOf:function() {
    return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("\x3c!DOCTYPE html\x3e", Dir.NEUTRAL);
  },}.valueOf();
  SafeHtml.EMPTY = new SafeHtml(goog.global.trustedTypes && goog.global.trustedTypes.emptyHTML || "", Dir.NEUTRAL, CONSTRUCTOR_TOKEN_PRIVATE);
  SafeHtml.BR = {valueOf:function() {
    return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("\x3cbr\x3e", Dir.NEUTRAL);
  },}.valueOf();
  exports = SafeHtml;
  return exports;
});

goog.provide("goog.html.uncheckedconversions");
goog.require("goog.asserts");
goog.require("goog.html.SafeHtml");
goog.require("goog.html.SafeScript");
goog.require("goog.html.SafeStyle");
goog.require("goog.html.SafeStyleSheet");
goog.require("goog.html.SafeUrl");
goog.require("goog.html.TrustedResourceUrl");
goog.require("goog.string.Const");
goog.require("goog.string.internal");
goog.requireType("goog.i18n.bidi.Dir");
goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function(justification, html, opt_dir) {
  goog.asserts.assertString(goog.string.Const.unwrap(justification), "must provide justification");
  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), "must provide non-empty justification");
  return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(html, opt_dir || null);
};
goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function(justification, script) {
  goog.asserts.assertString(goog.string.Const.unwrap(justification), "must provide justification");
  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), "must provide non-empty justification");
  return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(script);
};
goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function(justification, style) {
  goog.asserts.assertString(goog.string.Const.unwrap(justification), "must provide justification");
  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), "must provide non-empty justification");
  return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(style);
};
goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function(justification, styleSheet) {
  goog.asserts.assertString(goog.string.Const.unwrap(justification), "must provide justification");
  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), "must provide non-empty justification");
  return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheet);
};
goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function(justification, url) {
  goog.asserts.assertString(goog.string.Const.unwrap(justification), "must provide justification");
  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), "must provide non-empty justification");
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(url);
};
goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract = function(justification, url) {
  goog.asserts.assertString(goog.string.Const.unwrap(justification), "must provide justification");
  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), "must provide non-empty justification");
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(url);
};

goog.provide("goog.dom.safe");
goog.provide("goog.dom.safe.InsertAdjacentHtmlPosition");
goog.require("goog.asserts");
goog.require("goog.dom.asserts");
goog.require("goog.functions");
goog.require("goog.html.SafeHtml");
goog.require("goog.html.SafeScript");
goog.require("goog.html.SafeStyle");
goog.require("goog.html.SafeUrl");
goog.require("goog.html.TrustedResourceUrl");
goog.require("goog.html.uncheckedconversions");
goog.require("goog.string.Const");
goog.require("goog.string.internal");
goog.dom.safe.InsertAdjacentHtmlPosition = {AFTERBEGIN:"afterbegin", AFTEREND:"afterend", BEFOREBEGIN:"beforebegin", BEFOREEND:"beforeend"};
goog.dom.safe.insertAdjacentHtml = function(node, position, html) {
  node.insertAdjacentHTML(position, goog.html.SafeHtml.unwrapTrustedHTML(html));
};
goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = {"MATH":true, "SCRIPT":true, "STYLE":true, "SVG":true, "TEMPLATE":true};
goog.dom.safe.isInnerHtmlCleanupRecursive_ = goog.functions.cacheReturnValue(function() {
  if (goog.DEBUG && typeof document === "undefined") {
    return false;
  }
  var div = document.createElement("div");
  var childDiv = document.createElement("div");
  childDiv.appendChild(document.createElement("div"));
  div.appendChild(childDiv);
  if (goog.DEBUG && !div.firstChild) {
    return false;
  }
  var innerChild = div.firstChild.firstChild;
  div.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(goog.html.SafeHtml.EMPTY);
  return !innerChild.parentElement;
});
goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function(elem, html) {
  if (goog.dom.safe.isInnerHtmlCleanupRecursive_()) {
    while (elem.lastChild) {
      elem.removeChild(elem.lastChild);
    }
  }
  elem.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(html);
};
goog.dom.safe.setInnerHtml = function(elem, html) {
  if (goog.asserts.ENABLE_ASSERTS && elem.tagName) {
    var tagName = elem.tagName.toUpperCase();
    if (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[tagName]) {
      throw new Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + elem.tagName + ".");
    }
  }
  goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(elem, html);
};
goog.dom.safe.setInnerHtmlFromConstant = function(element, constHtml) {
  goog.dom.safe.setInnerHtml(element, goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Constant HTML to be immediatelly used."), goog.string.Const.unwrap(constHtml)));
};
goog.dom.safe.setOuterHtml = function(elem, html) {
  elem.outerHTML = goog.html.SafeHtml.unwrapTrustedHTML(html);
};
goog.dom.safe.setFormElementAction = function(form, url) {
  var safeUrl;
  if (url instanceof goog.html.SafeUrl) {
    safeUrl = url;
  } else {
    safeUrl = goog.html.SafeUrl.sanitizeAssertUnchanged(url);
  }
  goog.dom.asserts.assertIsHTMLFormElement(form).action = goog.html.SafeUrl.unwrap(safeUrl);
};
goog.dom.safe.setButtonFormAction = function(button, url) {
  var safeUrl;
  if (url instanceof goog.html.SafeUrl) {
    safeUrl = url;
  } else {
    safeUrl = goog.html.SafeUrl.sanitizeAssertUnchanged(url);
  }
  goog.dom.asserts.assertIsHTMLButtonElement(button).formAction = goog.html.SafeUrl.unwrap(safeUrl);
};
goog.dom.safe.setInputFormAction = function(input, url) {
  var safeUrl;
  if (url instanceof goog.html.SafeUrl) {
    safeUrl = url;
  } else {
    safeUrl = goog.html.SafeUrl.sanitizeAssertUnchanged(url);
  }
  goog.dom.asserts.assertIsHTMLInputElement(input).formAction = goog.html.SafeUrl.unwrap(safeUrl);
};
goog.dom.safe.setStyle = function(elem, style) {
  elem.style.cssText = goog.html.SafeStyle.unwrap(style);
};
goog.dom.safe.documentWrite = function(doc, html) {
  doc.write(goog.html.SafeHtml.unwrapTrustedHTML(html));
};
goog.dom.safe.setAnchorHref = function(anchor, url) {
  goog.dom.asserts.assertIsHTMLAnchorElement(anchor);
  var safeUrl;
  if (url instanceof goog.html.SafeUrl) {
    safeUrl = url;
  } else {
    safeUrl = goog.html.SafeUrl.sanitizeAssertUnchanged(url);
  }
  anchor.href = goog.html.SafeUrl.unwrap(safeUrl);
};
goog.dom.safe.setImageSrc = function(imageElement, url) {
  goog.dom.asserts.assertIsHTMLImageElement(imageElement);
  var safeUrl;
  if (url instanceof goog.html.SafeUrl) {
    safeUrl = url;
  } else {
    var allowDataUrl = /^data:image\//i.test(url);
    safeUrl = goog.html.SafeUrl.sanitizeAssertUnchanged(url, allowDataUrl);
  }
  imageElement.src = goog.html.SafeUrl.unwrap(safeUrl);
};
goog.dom.safe.setAudioSrc = function(audioElement, url) {
  goog.dom.asserts.assertIsHTMLAudioElement(audioElement);
  var safeUrl;
  if (url instanceof goog.html.SafeUrl) {
    safeUrl = url;
  } else {
    var allowDataUrl = /^data:audio\//i.test(url);
    safeUrl = goog.html.SafeUrl.sanitizeAssertUnchanged(url, allowDataUrl);
  }
  audioElement.src = goog.html.SafeUrl.unwrap(safeUrl);
};
goog.dom.safe.setVideoSrc = function(videoElement, url) {
  goog.dom.asserts.assertIsHTMLVideoElement(videoElement);
  var safeUrl;
  if (url instanceof goog.html.SafeUrl) {
    safeUrl = url;
  } else {
    var allowDataUrl = /^data:video\//i.test(url);
    safeUrl = goog.html.SafeUrl.sanitizeAssertUnchanged(url, allowDataUrl);
  }
  videoElement.src = goog.html.SafeUrl.unwrap(safeUrl);
};
goog.dom.safe.setEmbedSrc = function(embed, url) {
  goog.dom.asserts.assertIsHTMLEmbedElement(embed);
  embed.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(url);
};
goog.dom.safe.setFrameSrc = function(frame, url) {
  goog.dom.asserts.assertIsHTMLFrameElement(frame);
  frame.src = goog.html.TrustedResourceUrl.unwrap(url);
};
goog.dom.safe.setIframeSrc = function(iframe, url) {
  goog.dom.asserts.assertIsHTMLIFrameElement(iframe);
  iframe.src = goog.html.TrustedResourceUrl.unwrap(url);
};
goog.dom.safe.setIframeSrcdoc = function(iframe, html) {
  goog.dom.asserts.assertIsHTMLIFrameElement(iframe);
  iframe.srcdoc = goog.html.SafeHtml.unwrapTrustedHTML(html);
};
goog.dom.safe.setLinkHrefAndRel = function(link, url, rel) {
  goog.dom.asserts.assertIsHTMLLinkElement(link);
  link.rel = rel;
  if (goog.string.internal.caseInsensitiveContains(rel, "stylesheet")) {
    goog.asserts.assert(url instanceof goog.html.TrustedResourceUrl, 'URL must be TrustedResourceUrl because "rel" contains "stylesheet"');
    link.href = goog.html.TrustedResourceUrl.unwrap(url);
    const win = link.ownerDocument && link.ownerDocument.defaultView;
    const nonce = goog.dom.safe.getStyleNonce(win);
    if (nonce) {
      link.setAttribute("nonce", nonce);
    }
  } else if (url instanceof goog.html.TrustedResourceUrl) {
    link.href = goog.html.TrustedResourceUrl.unwrap(url);
  } else if (url instanceof goog.html.SafeUrl) {
    link.href = goog.html.SafeUrl.unwrap(url);
  } else {
    link.href = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitizeAssertUnchanged(url));
  }
};
goog.dom.safe.setObjectData = function(object, url) {
  goog.dom.asserts.assertIsHTMLObjectElement(object);
  object.data = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(url);
};
goog.dom.safe.setScriptSrc = function(script, url) {
  goog.dom.asserts.assertIsHTMLScriptElement(script);
  script.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(url);
  goog.dom.safe.setNonceForScriptElement_(script);
};
goog.dom.safe.setScriptContent = function(script, content) {
  goog.dom.asserts.assertIsHTMLScriptElement(script);
  script.textContent = goog.html.SafeScript.unwrapTrustedScript(content);
  goog.dom.safe.setNonceForScriptElement_(script);
};
goog.dom.safe.setNonceForScriptElement_ = function(script) {
  var win = script.ownerDocument && script.ownerDocument.defaultView;
  const nonce = goog.dom.safe.getScriptNonce(win);
  if (nonce) {
    script.setAttribute("nonce", nonce);
  }
};
goog.dom.safe.setLocationHref = function(loc, url) {
  goog.dom.asserts.assertIsLocation(loc);
  var safeUrl;
  if (url instanceof goog.html.SafeUrl) {
    safeUrl = url;
  } else {
    safeUrl = goog.html.SafeUrl.sanitizeAssertUnchanged(url);
  }
  loc.href = goog.html.SafeUrl.unwrap(safeUrl);
};
goog.dom.safe.assignLocation = function(loc, url) {
  goog.dom.asserts.assertIsLocation(loc);
  var safeUrl;
  if (url instanceof goog.html.SafeUrl) {
    safeUrl = url;
  } else {
    safeUrl = goog.html.SafeUrl.sanitizeAssertUnchanged(url);
  }
  loc.assign(goog.html.SafeUrl.unwrap(safeUrl));
};
goog.dom.safe.replaceLocation = function(loc, url) {
  var safeUrl;
  if (url instanceof goog.html.SafeUrl) {
    safeUrl = url;
  } else {
    safeUrl = goog.html.SafeUrl.sanitizeAssertUnchanged(url);
  }
  loc.replace(goog.html.SafeUrl.unwrap(safeUrl));
};
goog.dom.safe.openInWindow = function(url, opt_openerWin, opt_name, opt_specs) {
  var safeUrl;
  if (url instanceof goog.html.SafeUrl) {
    safeUrl = url;
  } else {
    safeUrl = goog.html.SafeUrl.sanitizeAssertUnchanged(url);
  }
  var win = opt_openerWin || goog.global;
  var name = opt_name instanceof goog.string.Const ? goog.string.Const.unwrap(opt_name) : opt_name || "";
  if (opt_specs !== undefined) {
    return win.open(goog.html.SafeUrl.unwrap(safeUrl), name, opt_specs);
  } else {
    return win.open(goog.html.SafeUrl.unwrap(safeUrl), name);
  }
};
goog.dom.safe.parseFromStringHtml = function(parser, html) {
  return goog.dom.safe.parseFromString(parser, html, "text/html");
};
goog.dom.safe.parseFromString = function(parser, content, type) {
  return parser.parseFromString(goog.html.SafeHtml.unwrapTrustedHTML(content), type);
};
goog.dom.safe.createImageFromBlob = function(blob) {
  if (!/^image\/.*/g.test(blob.type)) {
    throw new Error("goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.");
  }
  var objectUrl = goog.global.URL.createObjectURL(blob);
  var image = new goog.global.Image();
  image.onload = function() {
    goog.global.URL.revokeObjectURL(objectUrl);
  };
  goog.dom.safe.setImageSrc(image, goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Image blob URL."), objectUrl));
  return image;
};
goog.dom.safe.createContextualFragment = function(range, html) {
  return range.createContextualFragment(goog.html.SafeHtml.unwrapTrustedHTML(html));
};
goog.dom.safe.getScriptNonce = function(opt_window) {
  return goog.dom.safe.getNonce_("script[nonce]", opt_window);
};
goog.dom.safe.getStyleNonce = function(opt_window) {
  return goog.dom.safe.getNonce_('style[nonce],link[rel\x3d"stylesheet"][nonce]', opt_window);
};
goog.dom.safe.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
goog.dom.safe.getNonce_ = function(selector, win) {
  const doc = (win || goog.global).document;
  if (!doc.querySelector) {
    return "";
  }
  let el = doc.querySelector(selector);
  if (el) {
    const nonce = el["nonce"] || el.getAttribute("nonce");
    if (nonce && goog.dom.safe.NONCE_PATTERN_.test(nonce)) {
      return nonce;
    }
  }
  return "";
};

goog.provide("goog.string");
goog.provide("goog.string.Unicode");
goog.require("goog.dom.safe");
goog.require("goog.html.uncheckedconversions");
goog.require("goog.string.Const");
goog.require("goog.string.internal");
goog.string.DETECT_DOUBLE_ESCAPING = goog.define("goog.string.DETECT_DOUBLE_ESCAPING", false);
goog.string.FORCE_NON_DOM_HTML_UNESCAPING = goog.define("goog.string.FORCE_NON_DOM_HTML_UNESCAPING", false);
goog.string.Unicode = {NBSP:" "};
goog.string.startsWith = goog.string.internal.startsWith;
goog.string.endsWith = goog.string.internal.endsWith;
goog.string.caseInsensitiveStartsWith = goog.string.internal.caseInsensitiveStartsWith;
goog.string.caseInsensitiveEndsWith = goog.string.internal.caseInsensitiveEndsWith;
goog.string.caseInsensitiveEquals = goog.string.internal.caseInsensitiveEquals;
goog.string.subs = function(str, var_args) {
  const splitParts = str.split("%s");
  let returnString = "";
  const subsArguments = Array.prototype.slice.call(arguments, 1);
  while (subsArguments.length && splitParts.length > 1) {
    returnString += splitParts.shift() + subsArguments.shift();
  }
  return returnString + splitParts.join("%s");
};
goog.string.collapseWhitespace = function(str) {
  return str.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
goog.string.isEmptyOrWhitespace = goog.string.internal.isEmptyOrWhitespace;
goog.string.isEmptyString = function(str) {
  return str.length == 0;
};
goog.string.isEmpty = goog.string.isEmptyOrWhitespace;
goog.string.isEmptyOrWhitespaceSafe = function(str) {
  return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(str));
};
goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe;
goog.string.isBreakingWhitespace = function(str) {
  return !/[^\t\n\r ]/.test(str);
};
goog.string.isAlpha = function(str) {
  return !/[^a-zA-Z]/.test(str);
};
goog.string.isNumeric = function(str) {
  return !/[^0-9]/.test(str);
};
goog.string.isAlphaNumeric = function(str) {
  return !/[^a-zA-Z0-9]/.test(str);
};
goog.string.isSpace = function(ch) {
  return ch == " ";
};
goog.string.isUnicodeChar = function(ch) {
  return ch.length == 1 && ch >= " " && ch <= "~" || ch >= "" && ch <= "�";
};
goog.string.stripNewlines = function(str) {
  return str.replace(/(\r\n|\r|\n)+/g, " ");
};
goog.string.canonicalizeNewlines = function(str) {
  return str.replace(/(\r\n|\r|\n)/g, "\n");
};
goog.string.normalizeWhitespace = function(str) {
  return str.replace(/\xa0|\s/g, " ");
};
goog.string.normalizeSpaces = function(str) {
  return str.replace(/\xa0|[ \t]+/g, " ");
};
goog.string.collapseBreakingSpaces = function(str) {
  return str.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
};
goog.string.trim = goog.string.internal.trim;
goog.string.trimLeft = function(str) {
  return str.replace(/^[\s\xa0]+/, "");
};
goog.string.trimRight = function(str) {
  return str.replace(/[\s\xa0]+$/, "");
};
goog.string.caseInsensitiveCompare = goog.string.internal.caseInsensitiveCompare;
goog.string.numberAwareCompare_ = function(str1, str2, tokenizerRegExp) {
  if (str1 == str2) {
    return 0;
  }
  if (!str1) {
    return -1;
  }
  if (!str2) {
    return 1;
  }
  const tokens1 = str1.toLowerCase().match(tokenizerRegExp);
  const tokens2 = str2.toLowerCase().match(tokenizerRegExp);
  const count = Math.min(tokens1.length, tokens2.length);
  for (let i = 0; i < count; i++) {
    const a = tokens1[i];
    const b = tokens2[i];
    if (a != b) {
      const num1 = parseInt(a, 10);
      if (!isNaN(num1)) {
        const num2 = parseInt(b, 10);
        if (!isNaN(num2) && num1 - num2) {
          return num1 - num2;
        }
      }
      return a < b ? -1 : 1;
    }
  }
  if (tokens1.length != tokens2.length) {
    return tokens1.length - tokens2.length;
  }
  return str1 < str2 ? -1 : 1;
};
goog.string.intAwareCompare = function(str1, str2) {
  return goog.string.numberAwareCompare_(str1, str2, /\d+|\D+/g);
};
goog.string.floatAwareCompare = function(str1, str2) {
  return goog.string.numberAwareCompare_(str1, str2, /\d+|\.\d+|\D+/g);
};
goog.string.numerateCompare = goog.string.floatAwareCompare;
goog.string.urlEncode = function(str) {
  return encodeURIComponent(String(str));
};
goog.string.urlDecode = function(str) {
  return decodeURIComponent(str.replace(/\+/g, " "));
};
goog.string.newLineToBr = goog.string.internal.newLineToBr;
goog.string.htmlEscape = function(str, opt_isLikelyToContainHtmlChars) {
  str = goog.string.internal.htmlEscape(str, opt_isLikelyToContainHtmlChars);
  if (goog.string.DETECT_DOUBLE_ESCAPING) {
    str = str.replace(goog.string.E_RE_, "\x26#101;");
  }
  return str;
};
goog.string.E_RE_ = /e/g;
goog.string.unescapeEntities = function(str) {
  if (goog.string.contains(str, "\x26")) {
    if (!goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global) {
      return goog.string.unescapeEntitiesUsingDom_(str);
    } else {
      return goog.string.unescapePureXmlEntities_(str);
    }
  }
  return str;
};
goog.string.unescapeEntitiesWithDocument = function(str, document) {
  if (goog.string.contains(str, "\x26")) {
    return goog.string.unescapeEntitiesUsingDom_(str, document);
  }
  return str;
};
goog.string.unescapeEntitiesUsingDom_ = function(str, opt_document) {
  const seen = {"\x26amp;":"\x26", "\x26lt;":"\x3c", "\x26gt;":"\x3e", "\x26quot;":'"'};
  let div;
  if (opt_document) {
    div = opt_document.createElement("div");
  } else {
    div = goog.global.document.createElement("div");
  }
  return str.replace(goog.string.HTML_ENTITY_PATTERN_, function(s, entity) {
    let value = seen[s];
    if (value) {
      return value;
    }
    if (entity.charAt(0) == "#") {
      const n = Number("0" + entity.substr(1));
      if (!isNaN(n)) {
        value = String.fromCharCode(n);
      }
    }
    if (!value) {
      goog.dom.safe.setInnerHtml(div, goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Single HTML entity."), s + " "));
      value = div.firstChild.nodeValue.slice(0, -1);
    }
    return seen[s] = value;
  });
};
goog.string.unescapePureXmlEntities_ = function(str) {
  return str.replace(/&([^;]+);/g, function(s, entity) {
    switch(entity) {
      case "amp":
        return "\x26";
      case "lt":
        return "\x3c";
      case "gt":
        return "\x3e";
      case "quot":
        return '"';
      default:
        if (entity.charAt(0) == "#") {
          const n = Number("0" + entity.substr(1));
          if (!isNaN(n)) {
            return String.fromCharCode(n);
          }
        }
        return s;
    }
  });
};
goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
goog.string.whitespaceEscape = function(str, opt_xml) {
  return goog.string.newLineToBr(str.replace(/  /g, " \x26#160;"), opt_xml);
};
goog.string.preserveSpaces = function(str) {
  return str.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
};
goog.string.stripQuotes = function(str, quoteChars) {
  const length = quoteChars.length;
  for (let i = 0; i < length; i++) {
    const quoteChar = length == 1 ? quoteChars : quoteChars.charAt(i);
    if (str.charAt(0) == quoteChar && str.charAt(str.length - 1) == quoteChar) {
      return str.substring(1, str.length - 1);
    }
  }
  return str;
};
goog.string.truncate = function(str, chars, opt_protectEscapedCharacters) {
  if (opt_protectEscapedCharacters) {
    str = goog.string.unescapeEntities(str);
  }
  if (str.length > chars) {
    str = str.substring(0, chars - 3) + "...";
  }
  if (opt_protectEscapedCharacters) {
    str = goog.string.htmlEscape(str);
  }
  return str;
};
goog.string.truncateMiddle = function(str, chars, opt_protectEscapedCharacters, opt_trailingChars) {
  if (opt_protectEscapedCharacters) {
    str = goog.string.unescapeEntities(str);
  }
  if (opt_trailingChars && str.length > chars) {
    if (opt_trailingChars > chars) {
      opt_trailingChars = chars;
    }
    const endPoint = str.length - opt_trailingChars;
    const startPoint = chars - opt_trailingChars;
    str = str.substring(0, startPoint) + "..." + str.substring(endPoint);
  } else if (str.length > chars) {
    let half = Math.floor(chars / 2);
    const endPos = str.length - half;
    half += chars % 2;
    str = str.substring(0, half) + "..." + str.substring(endPos);
  }
  if (opt_protectEscapedCharacters) {
    str = goog.string.htmlEscape(str);
  }
  return str;
};
goog.string.specialEscapeChars_ = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\v":"\\x0B", '"':'\\"', "\\":"\\\\", "\x3c":"\\u003C"};
goog.string.jsEscapeCache_ = {"'":"\\'"};
goog.string.quote = function(s) {
  s = String(s);
  const sb = ['"'];
  for (let i = 0; i < s.length; i++) {
    const ch = s.charAt(i);
    const cc = ch.charCodeAt(0);
    sb[i + 1] = goog.string.specialEscapeChars_[ch] || (cc > 31 && cc < 127 ? ch : goog.string.escapeChar(ch));
  }
  sb.push('"');
  return sb.join("");
};
goog.string.escapeString = function(str) {
  const sb = [];
  for (let i = 0; i < str.length; i++) {
    sb[i] = goog.string.escapeChar(str.charAt(i));
  }
  return sb.join("");
};
goog.string.escapeChar = function(c) {
  if (c in goog.string.jsEscapeCache_) {
    return goog.string.jsEscapeCache_[c];
  }
  if (c in goog.string.specialEscapeChars_) {
    return goog.string.jsEscapeCache_[c] = goog.string.specialEscapeChars_[c];
  }
  let rv = c;
  const cc = c.charCodeAt(0);
  if (cc > 31 && cc < 127) {
    rv = c;
  } else {
    if (cc < 256) {
      rv = "\\x";
      if (cc < 16 || cc > 256) {
        rv += "0";
      }
    } else {
      rv = "\\u";
      if (cc < 4096) {
        rv += "0";
      }
    }
    rv += cc.toString(16).toUpperCase();
  }
  return goog.string.jsEscapeCache_[c] = rv;
};
goog.string.contains = goog.string.internal.contains;
goog.string.caseInsensitiveContains = goog.string.internal.caseInsensitiveContains;
goog.string.countOf = function(s, ss) {
  return s && ss ? s.split(ss).length - 1 : 0;
};
goog.string.removeAt = function(s, index, stringLength) {
  let resultStr = s;
  if (index >= 0 && index < s.length && stringLength > 0) {
    resultStr = s.substr(0, index) + s.substr(index + stringLength, s.length - index - stringLength);
  }
  return resultStr;
};
goog.string.remove = function(str, substr) {
  return str.replace(substr, "");
};
goog.string.removeAll = function(s, ss) {
  const re = new RegExp(goog.string.regExpEscape(ss), "g");
  return s.replace(re, "");
};
goog.string.replaceAll = function(s, ss, replacement) {
  const re = new RegExp(goog.string.regExpEscape(ss), "g");
  return s.replace(re, replacement.replace(/\$/g, "$$$$"));
};
goog.string.regExpEscape = function(s) {
  return String(s).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
goog.string.repeat = String.prototype.repeat ? function(string, length) {
  return string.repeat(length);
} : function(string, length) {
  return (new Array(length + 1)).join(string);
};
goog.string.padNumber = function(num, length, opt_precision) {
  let s = opt_precision !== undefined ? num.toFixed(opt_precision) : String(num);
  let index = s.indexOf(".");
  if (index === -1) {
    index = s.length;
  }
  const sign = s[0] === "-" ? "-" : "";
  if (sign) {
    s = s.substring(1);
  }
  return sign + goog.string.repeat("0", Math.max(0, length - index)) + s;
};
goog.string.makeSafe = function(obj) {
  return obj == null ? "" : String(obj);
};
goog.string.buildString = function(var_args) {
  return Array.prototype.join.call(arguments, "");
};
goog.string.getRandomString = function() {
  const x = 2147483648;
  return Math.floor(Math.random() * x).toString(36) + Math.abs(Math.floor(Math.random() * x) ^ goog.now()).toString(36);
};
goog.string.compareVersions = goog.string.internal.compareVersions;
goog.string.hashCode = function(str) {
  let result = 0;
  for (let i = 0; i < str.length; ++i) {
    result = 31 * result + str.charCodeAt(i) >>> 0;
  }
  return result;
};
goog.string.uniqueStringCounter_ = Math.random() * 2147483648 | 0;
goog.string.createUniqueString = function() {
  return "goog_" + goog.string.uniqueStringCounter_++;
};
goog.string.toNumber = function(str) {
  const num = Number(str);
  if (num == 0 && goog.string.isEmptyOrWhitespace(str)) {
    return NaN;
  }
  return num;
};
goog.string.isLowerCamelCase = function(str) {
  return /^[a-z]+([A-Z][a-z]*)*$/.test(str);
};
goog.string.isUpperCamelCase = function(str) {
  return /^([A-Z][a-z]*)+$/.test(str);
};
goog.string.toCamelCase = function(str) {
  return String(str).replace(/\-([a-z])/g, function(all, match) {
    return match.toUpperCase();
  });
};
goog.string.toSelectorCase = function(str) {
  return String(str).replace(/([A-Z])/g, "-$1").toLowerCase();
};
goog.string.toTitleCase = function(str, opt_delimiters) {
  let delimiters = typeof opt_delimiters === "string" ? goog.string.regExpEscape(opt_delimiters) : "\\s";
  delimiters = delimiters ? "|[" + delimiters + "]+" : "";
  const regexp = new RegExp("(^" + delimiters + ")([a-z])", "g");
  return str.replace(regexp, function(all, p1, p2) {
    return p1 + p2.toUpperCase();
  });
};
goog.string.capitalize = function(str) {
  return String(str.charAt(0)).toUpperCase() + String(str.substr(1)).toLowerCase();
};
goog.string.parseInt = function(value) {
  if (isFinite(value)) {
    value = String(value);
  }
  if (typeof value === "string") {
    return /^\s*-?0x/i.test(value) ? parseInt(value, 16) : parseInt(value, 10);
  }
  return NaN;
};
goog.string.splitLimit = function(str, separator, limit) {
  const parts = str.split(separator);
  const returnVal = [];
  while (limit > 0 && parts.length) {
    returnVal.push(parts.shift());
    limit--;
  }
  if (parts.length) {
    returnVal.push(parts.join(separator));
  }
  return returnVal;
};
goog.string.lastComponent = function(str, separators) {
  if (!separators) {
    return str;
  } else if (typeof separators == "string") {
    separators = [separators];
  }
  let lastSeparatorIndex = -1;
  for (let i = 0; i < separators.length; i++) {
    if (separators[i] == "") {
      continue;
    }
    const currentSeparatorIndex = str.lastIndexOf(separators[i]);
    if (currentSeparatorIndex > lastSeparatorIndex) {
      lastSeparatorIndex = currentSeparatorIndex;
    }
  }
  if (lastSeparatorIndex == -1) {
    return str;
  }
  return str.slice(lastSeparatorIndex + 1);
};
goog.string.editDistance = function(a, b) {
  const v0 = [];
  const v1 = [];
  if (a == b) {
    return 0;
  }
  if (!a.length || !b.length) {
    return Math.max(a.length, b.length);
  }
  for (let i = 0; i < b.length + 1; i++) {
    v0[i] = i;
  }
  for (let i = 0; i < a.length; i++) {
    v1[0] = i + 1;
    for (let j = 0; j < b.length; j++) {
      const cost = Number(a[i] != b[j]);
      v1[j + 1] = Math.min(v1[j] + 1, v0[j + 1] + 1, v0[j] + cost);
    }
    for (let j = 0; j < v0.length; j++) {
      v0[j] = v1[j];
    }
  }
  return v1[b.length];
};

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.collections.maps");
  goog.module.declareLegacyNamespace();
  class MapLike {
    constructor() {
      this.size;
    }
    set(key, val) {
    }
    get(key) {
    }
    keys() {
    }
    values() {
    }
    has(key) {
    }
  }
  exports.MapLike = MapLike;
  function setAll(map, entries) {
    if (!entries) {
      return;
    }
    for (const [k, v] of entries) {
      map.set(k, v);
    }
  }
  exports.setAll = setAll;
  function hasValue(map, val, valueEqualityFn = defaultEqualityFn) {
    for (const v of map.values()) {
      if (valueEqualityFn(v, val)) {
        return true;
      }
    }
    return false;
  }
  exports.hasValue = hasValue;
  const defaultEqualityFn = (a, b) => a === b;
  function equals(map, otherMap, valueEqualityFn = defaultEqualityFn) {
    if (map === otherMap) {
      return true;
    }
    if (map.size !== otherMap.size) {
      return false;
    }
    for (const key of map.keys()) {
      if (!otherMap.has(key)) {
        return false;
      }
      if (!valueEqualityFn(map.get(key), otherMap.get(key))) {
        return false;
      }
    }
    return true;
  }
  exports.equals = equals;
  function transpose(map) {
    const transposed = new Map();
    for (const key of map.keys()) {
      const val = map.get(key);
      transposed.set(val, key);
    }
    return transposed;
  }
  exports.transpose = transpose;
  function toObject(map) {
    const obj = {};
    for (const key of map.keys()) {
      obj[key] = map.get(key);
    }
    return obj;
  }
  exports.toObject = toObject;
  return exports;
});

goog.provide("goog.structs");
goog.require("goog.array");
goog.require("goog.object");
goog.structs.getCount = function(col) {
  if (col.getCount && typeof col.getCount == "function") {
    return col.getCount();
  }
  if (goog.isArrayLike(col) || typeof col === "string") {
    return col.length;
  }
  return goog.object.getCount(col);
};
goog.structs.getValues = function(col) {
  if (col.getValues && typeof col.getValues == "function") {
    return col.getValues();
  }
  if (typeof Map !== "undefined" && col instanceof Map || typeof Set !== "undefined" && col instanceof Set) {
    return Array.from(col.values());
  }
  if (typeof col === "string") {
    return col.split("");
  }
  if (goog.isArrayLike(col)) {
    var rv = [];
    var l = col.length;
    for (var i = 0; i < l; i++) {
      rv.push(col[i]);
    }
    return rv;
  }
  return goog.object.getValues(col);
};
goog.structs.getKeys = function(col) {
  if (col.getKeys && typeof col.getKeys == "function") {
    return col.getKeys();
  }
  if (col.getValues && typeof col.getValues == "function") {
    return undefined;
  }
  if (typeof Map !== "undefined" && col instanceof Map) {
    return Array.from(col.keys());
  }
  if (typeof Set !== "undefined" && col instanceof Set) {
    return undefined;
  }
  if (goog.isArrayLike(col) || typeof col === "string") {
    var rv = [];
    var l = col.length;
    for (var i = 0; i < l; i++) {
      rv.push(i);
    }
    return rv;
  }
  return goog.object.getKeys(col);
};
goog.structs.contains = function(col, val) {
  if (col.contains && typeof col.contains == "function") {
    return col.contains(val);
  }
  if (col.containsValue && typeof col.containsValue == "function") {
    return col.containsValue(val);
  }
  if (goog.isArrayLike(col) || typeof col === "string") {
    return goog.array.contains(col, val);
  }
  return goog.object.containsValue(col, val);
};
goog.structs.isEmpty = function(col) {
  if (col.isEmpty && typeof col.isEmpty == "function") {
    return col.isEmpty();
  }
  if (goog.isArrayLike(col) || typeof col === "string") {
    return col.length === 0;
  }
  return goog.object.isEmpty(col);
};
goog.structs.clear = function(col) {
  if (col.clear && typeof col.clear == "function") {
    col.clear();
  } else if (goog.isArrayLike(col)) {
    goog.array.clear(col);
  } else {
    goog.object.clear(col);
  }
};
goog.structs.forEach = function(col, f, opt_obj) {
  if (col.forEach && typeof col.forEach == "function") {
    col.forEach(f, opt_obj);
  } else if (goog.isArrayLike(col) || typeof col === "string") {
    Array.prototype.forEach.call(col, f, opt_obj);
  } else {
    var keys = goog.structs.getKeys(col);
    var values = goog.structs.getValues(col);
    var l = values.length;
    for (var i = 0; i < l; i++) {
      f.call(opt_obj, values[i], keys && keys[i], col);
    }
  }
};
goog.structs.filter = function(col, f, opt_obj) {
  if (typeof col.filter == "function") {
    return col.filter(f, opt_obj);
  }
  if (goog.isArrayLike(col) || typeof col === "string") {
    return Array.prototype.filter.call(col, f, opt_obj);
  }
  var rv;
  var keys = goog.structs.getKeys(col);
  var values = goog.structs.getValues(col);
  var l = values.length;
  if (keys) {
    rv = {};
    for (var i = 0; i < l; i++) {
      if (f.call(opt_obj, values[i], keys[i], col)) {
        rv[keys[i]] = values[i];
      }
    }
  } else {
    rv = [];
    for (var i = 0; i < l; i++) {
      if (f.call(opt_obj, values[i], undefined, col)) {
        rv.push(values[i]);
      }
    }
  }
  return rv;
};
goog.structs.map = function(col, f, opt_obj) {
  if (typeof col.map == "function") {
    return col.map(f, opt_obj);
  }
  if (goog.isArrayLike(col) || typeof col === "string") {
    return Array.prototype.map.call(col, f, opt_obj);
  }
  var rv;
  var keys = goog.structs.getKeys(col);
  var values = goog.structs.getValues(col);
  var l = values.length;
  if (keys) {
    rv = {};
    for (var i = 0; i < l; i++) {
      rv[keys[i]] = f.call(opt_obj, values[i], keys[i], col);
    }
  } else {
    rv = [];
    for (var i = 0; i < l; i++) {
      rv[i] = f.call(opt_obj, values[i], undefined, col);
    }
  }
  return rv;
};
goog.structs.some = function(col, f, opt_obj) {
  if (typeof col.some == "function") {
    return col.some(f, opt_obj);
  }
  if (goog.isArrayLike(col) || typeof col === "string") {
    return Array.prototype.some.call(col, f, opt_obj);
  }
  var keys = goog.structs.getKeys(col);
  var values = goog.structs.getValues(col);
  var l = values.length;
  for (var i = 0; i < l; i++) {
    if (f.call(opt_obj, values[i], keys && keys[i], col)) {
      return true;
    }
  }
  return false;
};
goog.structs.every = function(col, f, opt_obj) {
  if (typeof col.every == "function") {
    return col.every(f, opt_obj);
  }
  if (goog.isArrayLike(col) || typeof col === "string") {
    return Array.prototype.every.call(col, f, opt_obj);
  }
  var keys = goog.structs.getKeys(col);
  var values = goog.structs.getValues(col);
  var l = values.length;
  for (var i = 0; i < l; i++) {
    if (!f.call(opt_obj, values[i], keys && keys[i], col)) {
      return false;
    }
  }
  return true;
};

goog.provide("goog.uri.utils");
goog.provide("goog.uri.utils.ComponentIndex");
goog.provide("goog.uri.utils.QueryArray");
goog.provide("goog.uri.utils.QueryValue");
goog.provide("goog.uri.utils.StandardQueryParam");
goog.require("goog.asserts");
goog.require("goog.string");
goog.uri.utils.CharCode_ = {AMPERSAND:38, EQUAL:61, HASH:35, QUESTION:63};
goog.uri.utils.buildFromEncodedParts = function(opt_scheme, opt_userInfo, opt_domain, opt_port, opt_path, opt_queryData, opt_fragment) {
  var out = "";
  if (opt_scheme) {
    out += opt_scheme + ":";
  }
  if (opt_domain) {
    out += "//";
    if (opt_userInfo) {
      out += opt_userInfo + "@";
    }
    out += opt_domain;
    if (opt_port) {
      out += ":" + opt_port;
    }
  }
  if (opt_path) {
    out += opt_path;
  }
  if (opt_queryData) {
    out += "?" + opt_queryData;
  }
  if (opt_fragment) {
    out += "#" + opt_fragment;
  }
  return out;
};
goog.uri.utils.splitRe_ = new RegExp("^" + "(?:" + "([^:/?#.]+)" + ":)?" + "(?://" + "(?:([^\\\\/?#]*)@)?" + "([^\\\\/?#]*?)" + "(?::([0-9]+))?" + "(?\x3d[\\\\/?#]|$)" + ")?" + "([^?#]+)?" + "(?:\\?([^#]*))?" + "(?:#([\\s\\S]*))?" + "$");
goog.uri.utils.ComponentIndex = {SCHEME:1, USER_INFO:2, DOMAIN:3, PORT:4, PATH:5, QUERY_DATA:6, FRAGMENT:7};
goog.uri.utils.urlPackageSupportLoggingHandler_ = null;
goog.uri.utils.setUrlPackageSupportLoggingHandler = function(handler) {
  goog.uri.utils.urlPackageSupportLoggingHandler_ = handler;
};
goog.uri.utils.split = function(uri) {
  var result = uri.match(goog.uri.utils.splitRe_);
  if (goog.uri.utils.urlPackageSupportLoggingHandler_ && ["http", "https", "ws", "wss", "ftp"].indexOf(result[goog.uri.utils.ComponentIndex.SCHEME]) >= 0) {
    goog.uri.utils.urlPackageSupportLoggingHandler_(uri);
  }
  return result;
};
goog.uri.utils.decodeIfPossible_ = function(uri, opt_preserveReserved) {
  if (!uri) {
    return uri;
  }
  return opt_preserveReserved ? decodeURI(uri) : decodeURIComponent(uri);
};
goog.uri.utils.getComponentByIndex_ = function(componentIndex, uri) {
  return goog.uri.utils.split(uri)[componentIndex] || null;
};
goog.uri.utils.getScheme = function(uri) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.SCHEME, uri);
};
goog.uri.utils.getEffectiveScheme = function(uri) {
  var scheme = goog.uri.utils.getScheme(uri);
  if (!scheme && goog.global.self && goog.global.self.location) {
    var protocol = goog.global.self.location.protocol;
    scheme = protocol.substr(0, protocol.length - 1);
  }
  return scheme ? scheme.toLowerCase() : "";
};
goog.uri.utils.getUserInfoEncoded = function(uri) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.USER_INFO, uri);
};
goog.uri.utils.getUserInfo = function(uri) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getUserInfoEncoded(uri));
};
goog.uri.utils.getDomainEncoded = function(uri) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.DOMAIN, uri);
};
goog.uri.utils.getDomain = function(uri) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getDomainEncoded(uri), true);
};
goog.uri.utils.getPort = function(uri) {
  return Number(goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.PORT, uri)) || null;
};
goog.uri.utils.getPathEncoded = function(uri) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.PATH, uri);
};
goog.uri.utils.getPath = function(uri) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getPathEncoded(uri), true);
};
goog.uri.utils.getQueryData = function(uri) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.QUERY_DATA, uri);
};
goog.uri.utils.getFragmentEncoded = function(uri) {
  var hashIndex = uri.indexOf("#");
  return hashIndex < 0 ? null : uri.substr(hashIndex + 1);
};
goog.uri.utils.setFragmentEncoded = function(uri, fragment) {
  return goog.uri.utils.removeFragment(uri) + (fragment ? "#" + fragment : "");
};
goog.uri.utils.getFragment = function(uri) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getFragmentEncoded(uri));
};
goog.uri.utils.getHost = function(uri) {
  var pieces = goog.uri.utils.split(uri);
  return goog.uri.utils.buildFromEncodedParts(pieces[goog.uri.utils.ComponentIndex.SCHEME], pieces[goog.uri.utils.ComponentIndex.USER_INFO], pieces[goog.uri.utils.ComponentIndex.DOMAIN], pieces[goog.uri.utils.ComponentIndex.PORT]);
};
goog.uri.utils.getOrigin = function(uri) {
  var pieces = goog.uri.utils.split(uri);
  return goog.uri.utils.buildFromEncodedParts(pieces[goog.uri.utils.ComponentIndex.SCHEME], null, pieces[goog.uri.utils.ComponentIndex.DOMAIN], pieces[goog.uri.utils.ComponentIndex.PORT]);
};
goog.uri.utils.getPathAndAfter = function(uri) {
  var pieces = goog.uri.utils.split(uri);
  return goog.uri.utils.buildFromEncodedParts(null, null, null, null, pieces[goog.uri.utils.ComponentIndex.PATH], pieces[goog.uri.utils.ComponentIndex.QUERY_DATA], pieces[goog.uri.utils.ComponentIndex.FRAGMENT]);
};
goog.uri.utils.removeFragment = function(uri) {
  var hashIndex = uri.indexOf("#");
  return hashIndex < 0 ? uri : uri.substr(0, hashIndex);
};
goog.uri.utils.haveSameDomain = function(uri1, uri2) {
  var pieces1 = goog.uri.utils.split(uri1);
  var pieces2 = goog.uri.utils.split(uri2);
  return pieces1[goog.uri.utils.ComponentIndex.DOMAIN] == pieces2[goog.uri.utils.ComponentIndex.DOMAIN] && pieces1[goog.uri.utils.ComponentIndex.SCHEME] == pieces2[goog.uri.utils.ComponentIndex.SCHEME] && pieces1[goog.uri.utils.ComponentIndex.PORT] == pieces2[goog.uri.utils.ComponentIndex.PORT];
};
goog.uri.utils.assertNoFragmentsOrQueries_ = function(uri) {
  goog.asserts.assert(uri.indexOf("#") < 0 && uri.indexOf("?") < 0, "goog.uri.utils: Fragment or query identifiers are not supported: [%s]", uri);
};
goog.uri.utils.QueryValue;
goog.uri.utils.QueryArray;
goog.uri.utils.parseQueryData = function(encodedQuery, callback) {
  if (!encodedQuery) {
    return;
  }
  var pairs = encodedQuery.split("\x26");
  for (var i = 0; i < pairs.length; i++) {
    var indexOfEquals = pairs[i].indexOf("\x3d");
    var name = null;
    var value = null;
    if (indexOfEquals >= 0) {
      name = pairs[i].substring(0, indexOfEquals);
      value = pairs[i].substring(indexOfEquals + 1);
    } else {
      name = pairs[i];
    }
    callback(name, value ? goog.string.urlDecode(value) : "");
  }
};
goog.uri.utils.splitQueryData_ = function(uri) {
  var hashIndex = uri.indexOf("#");
  if (hashIndex < 0) {
    hashIndex = uri.length;
  }
  var questionIndex = uri.indexOf("?");
  var queryData;
  if (questionIndex < 0 || questionIndex > hashIndex) {
    questionIndex = hashIndex;
    queryData = "";
  } else {
    queryData = uri.substring(questionIndex + 1, hashIndex);
  }
  return [uri.substr(0, questionIndex), queryData, uri.substr(hashIndex)];
};
goog.uri.utils.joinQueryData_ = function(parts) {
  return parts[0] + (parts[1] ? "?" + parts[1] : "") + parts[2];
};
goog.uri.utils.appendQueryData_ = function(queryData, newData) {
  if (!newData) {
    return queryData;
  }
  return queryData ? queryData + "\x26" + newData : newData;
};
goog.uri.utils.appendQueryDataToUri_ = function(uri, queryData) {
  if (!queryData) {
    return uri;
  }
  var parts = goog.uri.utils.splitQueryData_(uri);
  parts[1] = goog.uri.utils.appendQueryData_(parts[1], queryData);
  return goog.uri.utils.joinQueryData_(parts);
};
goog.uri.utils.appendKeyValuePairs_ = function(key, value, pairs) {
  goog.asserts.assertString(key);
  if (Array.isArray(value)) {
    goog.asserts.assertArray(value);
    for (var j = 0; j < value.length; j++) {
      goog.uri.utils.appendKeyValuePairs_(key, String(value[j]), pairs);
    }
  } else if (value != null) {
    pairs.push(key + (value === "" ? "" : "\x3d" + goog.string.urlEncode(value)));
  }
};
goog.uri.utils.buildQueryData = function(keysAndValues, opt_startIndex) {
  goog.asserts.assert(Math.max(keysAndValues.length - (opt_startIndex || 0), 0) % 2 == 0, "goog.uri.utils: Key/value lists must be even in length.");
  var params = [];
  for (var i = opt_startIndex || 0; i < keysAndValues.length; i += 2) {
    var key = keysAndValues[i];
    goog.uri.utils.appendKeyValuePairs_(key, keysAndValues[i + 1], params);
  }
  return params.join("\x26");
};
goog.uri.utils.buildQueryDataFromMap = function(map) {
  var params = [];
  for (var key in map) {
    goog.uri.utils.appendKeyValuePairs_(key, map[key], params);
  }
  return params.join("\x26");
};
goog.uri.utils.appendParams = function(uri, var_args) {
  var queryData = arguments.length == 2 ? goog.uri.utils.buildQueryData(arguments[1], 0) : goog.uri.utils.buildQueryData(arguments, 1);
  return goog.uri.utils.appendQueryDataToUri_(uri, queryData);
};
goog.uri.utils.appendParamsFromMap = function(uri, map) {
  var queryData = goog.uri.utils.buildQueryDataFromMap(map);
  return goog.uri.utils.appendQueryDataToUri_(uri, queryData);
};
goog.uri.utils.appendParam = function(uri, key, opt_value) {
  var value = opt_value != null ? "\x3d" + goog.string.urlEncode(opt_value) : "";
  return goog.uri.utils.appendQueryDataToUri_(uri, key + value);
};
goog.uri.utils.findParam_ = function(uri, startIndex, keyEncoded, hashOrEndIndex) {
  var index = startIndex;
  var keyLength = keyEncoded.length;
  while ((index = uri.indexOf(keyEncoded, index)) >= 0 && index < hashOrEndIndex) {
    var precedingChar = uri.charCodeAt(index - 1);
    if (precedingChar == goog.uri.utils.CharCode_.AMPERSAND || precedingChar == goog.uri.utils.CharCode_.QUESTION) {
      var followingChar = uri.charCodeAt(index + keyLength);
      if (!followingChar || followingChar == goog.uri.utils.CharCode_.EQUAL || followingChar == goog.uri.utils.CharCode_.AMPERSAND || followingChar == goog.uri.utils.CharCode_.HASH) {
        return index;
      }
    }
    index += keyLength + 1;
  }
  return -1;
};
goog.uri.utils.hashOrEndRe_ = /#|$/;
goog.uri.utils.hasParam = function(uri, keyEncoded) {
  return goog.uri.utils.findParam_(uri, 0, keyEncoded, uri.search(goog.uri.utils.hashOrEndRe_)) >= 0;
};
goog.uri.utils.getParamValue = function(uri, keyEncoded) {
  var hashOrEndIndex = uri.search(goog.uri.utils.hashOrEndRe_);
  var foundIndex = goog.uri.utils.findParam_(uri, 0, keyEncoded, hashOrEndIndex);
  if (foundIndex < 0) {
    return null;
  } else {
    var endPosition = uri.indexOf("\x26", foundIndex);
    if (endPosition < 0 || endPosition > hashOrEndIndex) {
      endPosition = hashOrEndIndex;
    }
    foundIndex += keyEncoded.length + 1;
    return goog.string.urlDecode(uri.substr(foundIndex, endPosition - foundIndex));
  }
};
goog.uri.utils.getParamValues = function(uri, keyEncoded) {
  var hashOrEndIndex = uri.search(goog.uri.utils.hashOrEndRe_);
  var position = 0;
  var foundIndex;
  var result = [];
  while ((foundIndex = goog.uri.utils.findParam_(uri, position, keyEncoded, hashOrEndIndex)) >= 0) {
    position = uri.indexOf("\x26", foundIndex);
    if (position < 0 || position > hashOrEndIndex) {
      position = hashOrEndIndex;
    }
    foundIndex += keyEncoded.length + 1;
    result.push(goog.string.urlDecode(uri.substr(foundIndex, position - foundIndex)));
  }
  return result;
};
goog.uri.utils.trailingQueryPunctuationRe_ = /[?&]($|#)/;
goog.uri.utils.removeParam = function(uri, keyEncoded) {
  var hashOrEndIndex = uri.search(goog.uri.utils.hashOrEndRe_);
  var position = 0;
  var foundIndex;
  var buffer = [];
  while ((foundIndex = goog.uri.utils.findParam_(uri, position, keyEncoded, hashOrEndIndex)) >= 0) {
    buffer.push(uri.substring(position, foundIndex));
    position = Math.min(uri.indexOf("\x26", foundIndex) + 1 || hashOrEndIndex, hashOrEndIndex);
  }
  buffer.push(uri.substr(position));
  return buffer.join("").replace(goog.uri.utils.trailingQueryPunctuationRe_, "$1");
};
goog.uri.utils.setParam = function(uri, keyEncoded, value) {
  return goog.uri.utils.appendParam(goog.uri.utils.removeParam(uri, keyEncoded), keyEncoded, value);
};
goog.uri.utils.setParamsFromMap = function(uri, params) {
  var parts = goog.uri.utils.splitQueryData_(uri);
  var queryData = parts[1];
  var buffer = [];
  if (queryData) {
    queryData.split("\x26").forEach(function(pair) {
      var indexOfEquals = pair.indexOf("\x3d");
      var name = indexOfEquals >= 0 ? pair.substr(0, indexOfEquals) : pair;
      if (!params.hasOwnProperty(name)) {
        buffer.push(pair);
      }
    });
  }
  parts[1] = goog.uri.utils.appendQueryData_(buffer.join("\x26"), goog.uri.utils.buildQueryDataFromMap(params));
  return goog.uri.utils.joinQueryData_(parts);
};
goog.uri.utils.appendPath = function(baseUri, path) {
  goog.uri.utils.assertNoFragmentsOrQueries_(baseUri);
  if (goog.string.endsWith(baseUri, "/")) {
    baseUri = baseUri.substr(0, baseUri.length - 1);
  }
  if (goog.string.startsWith(path, "/")) {
    path = path.substr(1);
  }
  return "" + baseUri + "/" + path;
};
goog.uri.utils.setPath = function(uri, path) {
  if (!goog.string.startsWith(path, "/")) {
    path = "/" + path;
  }
  var parts = goog.uri.utils.split(uri);
  return goog.uri.utils.buildFromEncodedParts(parts[goog.uri.utils.ComponentIndex.SCHEME], parts[goog.uri.utils.ComponentIndex.USER_INFO], parts[goog.uri.utils.ComponentIndex.DOMAIN], parts[goog.uri.utils.ComponentIndex.PORT], path, parts[goog.uri.utils.ComponentIndex.QUERY_DATA], parts[goog.uri.utils.ComponentIndex.FRAGMENT]);
};
goog.uri.utils.StandardQueryParam = {RANDOM:"zx"};
goog.uri.utils.makeUnique = function(uri) {
  return goog.uri.utils.setParam(uri, goog.uri.utils.StandardQueryParam.RANDOM, goog.string.getRandomString());
};

goog.provide("goog.Uri");
goog.provide("goog.Uri.QueryData");
goog.require("goog.array");
goog.require("goog.asserts");
goog.require("goog.collections.maps");
goog.require("goog.string");
goog.require("goog.structs");
goog.require("goog.uri.utils");
goog.require("goog.uri.utils.ComponentIndex");
goog.require("goog.uri.utils.StandardQueryParam");
goog.Uri = function(opt_uri, opt_ignoreCase) {
  this.scheme_ = "";
  this.userInfo_ = "";
  this.domain_ = "";
  this.port_ = null;
  this.path_ = "";
  this.fragment_ = "";
  this.isReadOnly_ = false;
  this.ignoreCase_ = false;
  this.queryData_;
  var m;
  if (opt_uri instanceof goog.Uri) {
    this.ignoreCase_ = opt_ignoreCase !== undefined ? opt_ignoreCase : opt_uri.getIgnoreCase();
    this.setScheme(opt_uri.getScheme());
    this.setUserInfo(opt_uri.getUserInfo());
    this.setDomain(opt_uri.getDomain());
    this.setPort(opt_uri.getPort());
    this.setPath(opt_uri.getPath());
    this.setQueryData(opt_uri.getQueryData().clone());
    this.setFragment(opt_uri.getFragment());
  } else if (opt_uri && (m = goog.uri.utils.split(String(opt_uri)))) {
    this.ignoreCase_ = !!opt_ignoreCase;
    this.setScheme(m[goog.uri.utils.ComponentIndex.SCHEME] || "", true);
    this.setUserInfo(m[goog.uri.utils.ComponentIndex.USER_INFO] || "", true);
    this.setDomain(m[goog.uri.utils.ComponentIndex.DOMAIN] || "", true);
    this.setPort(m[goog.uri.utils.ComponentIndex.PORT]);
    this.setPath(m[goog.uri.utils.ComponentIndex.PATH] || "", true);
    this.setQueryData(m[goog.uri.utils.ComponentIndex.QUERY_DATA] || "", true);
    this.setFragment(m[goog.uri.utils.ComponentIndex.FRAGMENT] || "", true);
  } else {
    this.ignoreCase_ = !!opt_ignoreCase;
    this.queryData_ = new goog.Uri.QueryData(null, this.ignoreCase_);
  }
};
goog.Uri.RANDOM_PARAM = goog.uri.utils.StandardQueryParam.RANDOM;
goog.Uri.prototype.toString = function() {
  var out = [];
  var scheme = this.getScheme();
  if (scheme) {
    out.push(goog.Uri.encodeSpecialChars_(scheme, goog.Uri.reDisallowedInSchemeOrUserInfo_, true), ":");
  }
  var domain = this.getDomain();
  if (domain || scheme == "file") {
    out.push("//");
    var userInfo = this.getUserInfo();
    if (userInfo) {
      out.push(goog.Uri.encodeSpecialChars_(userInfo, goog.Uri.reDisallowedInSchemeOrUserInfo_, true), "@");
    }
    out.push(goog.Uri.removeDoubleEncoding_(goog.string.urlEncode(domain)));
    var port = this.getPort();
    if (port != null) {
      out.push(":", String(port));
    }
  }
  var path = this.getPath();
  if (path) {
    if (this.hasDomain() && path.charAt(0) != "/") {
      out.push("/");
    }
    out.push(goog.Uri.encodeSpecialChars_(path, path.charAt(0) == "/" ? goog.Uri.reDisallowedInAbsolutePath_ : goog.Uri.reDisallowedInRelativePath_, true));
  }
  var query = this.getEncodedQuery();
  if (query) {
    out.push("?", query);
  }
  var fragment = this.getFragment();
  if (fragment) {
    out.push("#", goog.Uri.encodeSpecialChars_(fragment, goog.Uri.reDisallowedInFragment_));
  }
  return out.join("");
};
goog.Uri.prototype.resolve = function(relativeUri) {
  var absoluteUri = this.clone();
  var overridden = relativeUri.hasScheme();
  if (overridden) {
    absoluteUri.setScheme(relativeUri.getScheme());
  } else {
    overridden = relativeUri.hasUserInfo();
  }
  if (overridden) {
    absoluteUri.setUserInfo(relativeUri.getUserInfo());
  } else {
    overridden = relativeUri.hasDomain();
  }
  if (overridden) {
    absoluteUri.setDomain(relativeUri.getDomain());
  } else {
    overridden = relativeUri.hasPort();
  }
  var path = relativeUri.getPath();
  if (overridden) {
    absoluteUri.setPort(relativeUri.getPort());
  } else {
    overridden = relativeUri.hasPath();
    if (overridden) {
      if (path.charAt(0) != "/") {
        if (this.hasDomain() && !this.hasPath()) {
          path = "/" + path;
        } else {
          var lastSlashIndex = absoluteUri.getPath().lastIndexOf("/");
          if (lastSlashIndex != -1) {
            path = absoluteUri.getPath().substr(0, lastSlashIndex + 1) + path;
          }
        }
      }
      path = goog.Uri.removeDotSegments(path);
    }
  }
  if (overridden) {
    absoluteUri.setPath(path);
  } else {
    overridden = relativeUri.hasQuery();
  }
  if (overridden) {
    absoluteUri.setQueryData(relativeUri.getQueryData().clone());
  } else {
    overridden = relativeUri.hasFragment();
  }
  if (overridden) {
    absoluteUri.setFragment(relativeUri.getFragment());
  }
  return absoluteUri;
};
goog.Uri.prototype.clone = function() {
  return new goog.Uri(this);
};
goog.Uri.prototype.getScheme = function() {
  return this.scheme_;
};
goog.Uri.prototype.setScheme = function(newScheme, opt_decode) {
  this.enforceReadOnly();
  this.scheme_ = opt_decode ? goog.Uri.decodeOrEmpty_(newScheme, true) : newScheme;
  if (this.scheme_) {
    this.scheme_ = this.scheme_.replace(/:$/, "");
  }
  return this;
};
goog.Uri.prototype.hasScheme = function() {
  return !!this.scheme_;
};
goog.Uri.prototype.getUserInfo = function() {
  return this.userInfo_;
};
goog.Uri.prototype.setUserInfo = function(newUserInfo, opt_decode) {
  this.enforceReadOnly();
  this.userInfo_ = opt_decode ? goog.Uri.decodeOrEmpty_(newUserInfo) : newUserInfo;
  return this;
};
goog.Uri.prototype.hasUserInfo = function() {
  return !!this.userInfo_;
};
goog.Uri.prototype.getDomain = function() {
  return this.domain_;
};
goog.Uri.prototype.setDomain = function(newDomain, opt_decode) {
  this.enforceReadOnly();
  this.domain_ = opt_decode ? goog.Uri.decodeOrEmpty_(newDomain, true) : newDomain;
  return this;
};
goog.Uri.prototype.hasDomain = function() {
  return !!this.domain_;
};
goog.Uri.prototype.getPort = function() {
  return this.port_;
};
goog.Uri.prototype.setPort = function(newPort) {
  this.enforceReadOnly();
  if (newPort) {
    newPort = Number(newPort);
    if (isNaN(newPort) || newPort < 0) {
      throw new Error("Bad port number " + newPort);
    }
    this.port_ = newPort;
  } else {
    this.port_ = null;
  }
  return this;
};
goog.Uri.prototype.hasPort = function() {
  return this.port_ != null;
};
goog.Uri.prototype.getPath = function() {
  return this.path_;
};
goog.Uri.prototype.setPath = function(newPath, opt_decode) {
  this.enforceReadOnly();
  this.path_ = opt_decode ? goog.Uri.decodeOrEmpty_(newPath, true) : newPath;
  return this;
};
goog.Uri.prototype.hasPath = function() {
  return !!this.path_;
};
goog.Uri.prototype.hasQuery = function() {
  return this.queryData_.toString() !== "";
};
goog.Uri.prototype.setQueryData = function(queryData, opt_decode) {
  this.enforceReadOnly();
  if (queryData instanceof goog.Uri.QueryData) {
    this.queryData_ = queryData;
    this.queryData_.setIgnoreCase(this.ignoreCase_);
  } else {
    if (!opt_decode) {
      queryData = goog.Uri.encodeSpecialChars_(queryData, goog.Uri.reDisallowedInQuery_);
    }
    this.queryData_ = new goog.Uri.QueryData(queryData, this.ignoreCase_);
  }
  return this;
};
goog.Uri.prototype.setQuery = function(newQuery, opt_decode) {
  return this.setQueryData(newQuery, opt_decode);
};
goog.Uri.prototype.getEncodedQuery = function() {
  return this.queryData_.toString();
};
goog.Uri.prototype.getDecodedQuery = function() {
  return this.queryData_.toDecodedString();
};
goog.Uri.prototype.getQueryData = function() {
  return this.queryData_;
};
goog.Uri.prototype.getQuery = function() {
  return this.getEncodedQuery();
};
goog.Uri.prototype.setParameterValue = function(key, value) {
  this.enforceReadOnly();
  this.queryData_.set(key, value);
  return this;
};
goog.Uri.prototype.setParameterValues = function(key, values) {
  this.enforceReadOnly();
  if (!Array.isArray(values)) {
    values = [String(values)];
  }
  this.queryData_.setValues(key, values);
  return this;
};
goog.Uri.prototype.getParameterValues = function(name) {
  return this.queryData_.getValues(name);
};
goog.Uri.prototype.getParameterValue = function(paramName) {
  return this.queryData_.get(paramName);
};
goog.Uri.prototype.getFragment = function() {
  return this.fragment_;
};
goog.Uri.prototype.setFragment = function(newFragment, opt_decode) {
  this.enforceReadOnly();
  this.fragment_ = opt_decode ? goog.Uri.decodeOrEmpty_(newFragment) : newFragment;
  return this;
};
goog.Uri.prototype.hasFragment = function() {
  return !!this.fragment_;
};
goog.Uri.prototype.hasSameDomainAs = function(uri2) {
  return (!this.hasDomain() && !uri2.hasDomain() || this.getDomain() == uri2.getDomain()) && (!this.hasPort() && !uri2.hasPort() || this.getPort() == uri2.getPort());
};
goog.Uri.prototype.makeUnique = function() {
  this.enforceReadOnly();
  this.setParameterValue(goog.Uri.RANDOM_PARAM, goog.string.getRandomString());
  return this;
};
goog.Uri.prototype.removeParameter = function(key) {
  this.enforceReadOnly();
  this.queryData_.remove(key);
  return this;
};
goog.Uri.prototype.setReadOnly = function(isReadOnly) {
  this.isReadOnly_ = isReadOnly;
  return this;
};
goog.Uri.prototype.isReadOnly = function() {
  return this.isReadOnly_;
};
goog.Uri.prototype.enforceReadOnly = function() {
  if (this.isReadOnly_) {
    throw new Error("Tried to modify a read-only Uri");
  }
};
goog.Uri.prototype.setIgnoreCase = function(ignoreCase) {
  this.ignoreCase_ = ignoreCase;
  if (this.queryData_) {
    this.queryData_.setIgnoreCase(ignoreCase);
  }
  return this;
};
goog.Uri.prototype.getIgnoreCase = function() {
  return this.ignoreCase_;
};
goog.Uri.parse = function(uri, opt_ignoreCase) {
  return uri instanceof goog.Uri ? uri.clone() : new goog.Uri(uri, opt_ignoreCase);
};
goog.Uri.create = function(opt_scheme, opt_userInfo, opt_domain, opt_port, opt_path, opt_query, opt_fragment, opt_ignoreCase) {
  var uri = new goog.Uri(null, opt_ignoreCase);
  opt_scheme && uri.setScheme(opt_scheme);
  opt_userInfo && uri.setUserInfo(opt_userInfo);
  opt_domain && uri.setDomain(opt_domain);
  opt_port && uri.setPort(opt_port);
  opt_path && uri.setPath(opt_path);
  opt_query && uri.setQueryData(opt_query);
  opt_fragment && uri.setFragment(opt_fragment);
  return uri;
};
goog.Uri.resolve = function(base, rel) {
  if (!(base instanceof goog.Uri)) {
    base = goog.Uri.parse(base);
  }
  if (!(rel instanceof goog.Uri)) {
    rel = goog.Uri.parse(rel);
  }
  return base.resolve(rel);
};
goog.Uri.removeDotSegments = function(path) {
  if (path == ".." || path == ".") {
    return "";
  } else if (!goog.string.contains(path, "./") && !goog.string.contains(path, "/.")) {
    return path;
  } else {
    var leadingSlash = goog.string.startsWith(path, "/");
    var segments = path.split("/");
    var out = [];
    for (var pos = 0; pos < segments.length;) {
      var segment = segments[pos++];
      if (segment == ".") {
        if (leadingSlash && pos == segments.length) {
          out.push("");
        }
      } else if (segment == "..") {
        if (out.length > 1 || out.length == 1 && out[0] != "") {
          out.pop();
        }
        if (leadingSlash && pos == segments.length) {
          out.push("");
        }
      } else {
        out.push(segment);
        leadingSlash = true;
      }
    }
    return out.join("/");
  }
};
goog.Uri.decodeOrEmpty_ = function(val, opt_preserveReserved) {
  if (!val) {
    return "";
  }
  return opt_preserveReserved ? decodeURI(val.replace(/%25/g, "%2525")) : decodeURIComponent(val);
};
goog.Uri.encodeSpecialChars_ = function(unescapedPart, extra, opt_removeDoubleEncoding) {
  if (typeof unescapedPart === "string") {
    var encoded = encodeURI(unescapedPart).replace(extra, goog.Uri.encodeChar_);
    if (opt_removeDoubleEncoding) {
      encoded = goog.Uri.removeDoubleEncoding_(encoded);
    }
    return encoded;
  }
  return null;
};
goog.Uri.encodeChar_ = function(ch) {
  var n = ch.charCodeAt(0);
  return "%" + (n >> 4 & 15).toString(16) + (n & 15).toString(16);
};
goog.Uri.removeDoubleEncoding_ = function(doubleEncodedString) {
  return doubleEncodedString.replace(/%25([0-9a-fA-F]{2})/g, "%$1");
};
goog.Uri.reDisallowedInSchemeOrUserInfo_ = /[#\/\?@]/g;
goog.Uri.reDisallowedInRelativePath_ = /[#\?:]/g;
goog.Uri.reDisallowedInAbsolutePath_ = /[#\?]/g;
goog.Uri.reDisallowedInQuery_ = /[#\?@]/g;
goog.Uri.reDisallowedInFragment_ = /#/g;
goog.Uri.haveSameDomain = function(uri1String, uri2String) {
  var pieces1 = goog.uri.utils.split(uri1String);
  var pieces2 = goog.uri.utils.split(uri2String);
  return pieces1[goog.uri.utils.ComponentIndex.DOMAIN] == pieces2[goog.uri.utils.ComponentIndex.DOMAIN] && pieces1[goog.uri.utils.ComponentIndex.PORT] == pieces2[goog.uri.utils.ComponentIndex.PORT];
};
goog.Uri.QueryData = function(opt_query, opt_ignoreCase) {
  this.keyMap_ = null;
  this.count_ = null;
  this.encodedQuery_ = opt_query || null;
  this.ignoreCase_ = !!opt_ignoreCase;
};
goog.Uri.QueryData.prototype.ensureKeyMapInitialized_ = function() {
  if (!this.keyMap_) {
    this.keyMap_ = new Map();
    this.count_ = 0;
    if (this.encodedQuery_) {
      var self = this;
      goog.uri.utils.parseQueryData(this.encodedQuery_, function(name, value) {
        self.add(goog.string.urlDecode(name), value);
      });
    }
  }
};
goog.Uri.QueryData.createFromMap = function(map, opt_ignoreCase) {
  var keys = goog.structs.getKeys(map);
  if (typeof keys == "undefined") {
    throw new Error("Keys are undefined");
  }
  var queryData = new goog.Uri.QueryData(null, opt_ignoreCase);
  var values = goog.structs.getValues(map);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = values[i];
    if (!Array.isArray(value)) {
      queryData.add(key, value);
    } else {
      queryData.setValues(key, value);
    }
  }
  return queryData;
};
goog.Uri.QueryData.createFromKeysValues = function(keys, values, opt_ignoreCase) {
  if (keys.length != values.length) {
    throw new Error("Mismatched lengths for keys/values");
  }
  var queryData = new goog.Uri.QueryData(null, opt_ignoreCase);
  for (var i = 0; i < keys.length; i++) {
    queryData.add(keys[i], values[i]);
  }
  return queryData;
};
goog.Uri.QueryData.prototype.getCount = function() {
  this.ensureKeyMapInitialized_();
  return this.count_;
};
goog.Uri.QueryData.prototype.add = function(key, value) {
  this.ensureKeyMapInitialized_();
  this.invalidateCache_();
  key = this.getKeyName_(key);
  var values = this.keyMap_.get(key);
  if (!values) {
    this.keyMap_.set(key, values = []);
  }
  values.push(value);
  this.count_ = goog.asserts.assertNumber(this.count_) + 1;
  return this;
};
goog.Uri.QueryData.prototype.remove = function(key) {
  this.ensureKeyMapInitialized_();
  key = this.getKeyName_(key);
  if (this.keyMap_.has(key)) {
    this.invalidateCache_();
    this.count_ = goog.asserts.assertNumber(this.count_) - this.keyMap_.get(key).length;
    return this.keyMap_.delete(key);
  }
  return false;
};
goog.Uri.QueryData.prototype.clear = function() {
  this.invalidateCache_();
  this.keyMap_ = null;
  this.count_ = 0;
};
goog.Uri.QueryData.prototype.isEmpty = function() {
  this.ensureKeyMapInitialized_();
  return this.count_ == 0;
};
goog.Uri.QueryData.prototype.containsKey = function(key) {
  this.ensureKeyMapInitialized_();
  key = this.getKeyName_(key);
  return this.keyMap_.has(key);
};
goog.Uri.QueryData.prototype.containsValue = function(value) {
  var vals = this.getValues();
  return goog.array.contains(vals, value);
};
goog.Uri.QueryData.prototype.forEach = function(f, opt_scope) {
  this.ensureKeyMapInitialized_();
  this.keyMap_.forEach(function(values, key) {
    values.forEach(function(value) {
      f.call(opt_scope, value, key, this);
    }, this);
  }, this);
};
goog.Uri.QueryData.prototype.getKeys = function() {
  this.ensureKeyMapInitialized_();
  const vals = Array.from(this.keyMap_.values());
  const keys = Array.from(this.keyMap_.keys());
  const rv = [];
  for (let i = 0; i < keys.length; i++) {
    const val = vals[i];
    for (let j = 0; j < val.length; j++) {
      rv.push(keys[i]);
    }
  }
  return rv;
};
goog.Uri.QueryData.prototype.getValues = function(opt_key) {
  this.ensureKeyMapInitialized_();
  let rv = [];
  if (typeof opt_key === "string") {
    if (this.containsKey(opt_key)) {
      rv = rv.concat(this.keyMap_.get(this.getKeyName_(opt_key)));
    }
  } else {
    const values = Array.from(this.keyMap_.values());
    for (let i = 0; i < values.length; i++) {
      rv = rv.concat(values[i]);
    }
  }
  return rv;
};
goog.Uri.QueryData.prototype.set = function(key, value) {
  this.ensureKeyMapInitialized_();
  this.invalidateCache_();
  key = this.getKeyName_(key);
  if (this.containsKey(key)) {
    this.count_ = goog.asserts.assertNumber(this.count_) - this.keyMap_.get(key).length;
  }
  this.keyMap_.set(key, [value]);
  this.count_ = goog.asserts.assertNumber(this.count_) + 1;
  return this;
};
goog.Uri.QueryData.prototype.get = function(key, opt_default) {
  if (!key) {
    return opt_default;
  }
  var values = this.getValues(key);
  return values.length > 0 ? String(values[0]) : opt_default;
};
goog.Uri.QueryData.prototype.setValues = function(key, values) {
  this.remove(key);
  if (values.length > 0) {
    this.invalidateCache_();
    this.keyMap_.set(this.getKeyName_(key), goog.array.clone(values));
    this.count_ = goog.asserts.assertNumber(this.count_) + values.length;
  }
};
goog.Uri.QueryData.prototype.toString = function() {
  if (this.encodedQuery_) {
    return this.encodedQuery_;
  }
  if (!this.keyMap_) {
    return "";
  }
  const sb = [];
  const keys = Array.from(this.keyMap_.keys());
  for (var i = 0; i < keys.length; i++) {
    const key = keys[i];
    const encodedKey = goog.string.urlEncode(key);
    const val = this.getValues(key);
    for (var j = 0; j < val.length; j++) {
      var param = encodedKey;
      if (val[j] !== "") {
        param += "\x3d" + goog.string.urlEncode(val[j]);
      }
      sb.push(param);
    }
  }
  return this.encodedQuery_ = sb.join("\x26");
};
goog.Uri.QueryData.prototype.toDecodedString = function() {
  return goog.Uri.decodeOrEmpty_(this.toString());
};
goog.Uri.QueryData.prototype.invalidateCache_ = function() {
  this.encodedQuery_ = null;
};
goog.Uri.QueryData.prototype.filterKeys = function(keys) {
  this.ensureKeyMapInitialized_();
  this.keyMap_.forEach(function(value, key) {
    if (!goog.array.contains(keys, key)) {
      this.remove(key);
    }
  }, this);
  return this;
};
goog.Uri.QueryData.prototype.clone = function() {
  var rv = new goog.Uri.QueryData();
  rv.encodedQuery_ = this.encodedQuery_;
  if (this.keyMap_) {
    rv.keyMap_ = new Map(this.keyMap_);
    rv.count_ = this.count_;
  }
  return rv;
};
goog.Uri.QueryData.prototype.getKeyName_ = function(arg) {
  var keyName = String(arg);
  if (this.ignoreCase_) {
    keyName = keyName.toLowerCase();
  }
  return keyName;
};
goog.Uri.QueryData.prototype.setIgnoreCase = function(ignoreCase) {
  var resetKeys = ignoreCase && !this.ignoreCase_;
  if (resetKeys) {
    this.ensureKeyMapInitialized_();
    this.invalidateCache_();
    this.keyMap_.forEach(function(value, key) {
      var lowerCase = key.toLowerCase();
      if (key != lowerCase) {
        this.remove(key);
        this.setValues(lowerCase, value);
      }
    }, this);
  }
  this.ignoreCase_ = ignoreCase;
};
goog.Uri.QueryData.prototype.extend = function(var_args) {
  for (var i = 0; i < arguments.length; i++) {
    var data = arguments[i];
    goog.structs.forEach(data, function(value, key) {
      this.add(key, value);
    }, this);
  }
};

goog.provide("goog.string.StringBuffer");
goog.string.StringBuffer = function(opt_a1, var_args) {
  if (opt_a1 != null) {
    this.append.apply(this, arguments);
  }
};
goog.string.StringBuffer.prototype.buffer_ = "";
goog.string.StringBuffer.prototype.set = function(s) {
  this.buffer_ = "" + s;
};
goog.string.StringBuffer.prototype.append = function(a1, opt_a2, var_args) {
  this.buffer_ += String(a1);
  if (opt_a2 != null) {
    for (let i = 1; i < arguments.length; i++) {
      this.buffer_ += arguments[i];
    }
  }
  return this;
};
goog.string.StringBuffer.prototype.clear = function() {
  this.buffer_ = "";
};
goog.string.StringBuffer.prototype.getLength = function() {
  return this.buffer_.length;
};
goog.string.StringBuffer.prototype.toString = function() {
  return this.buffer_;
};
