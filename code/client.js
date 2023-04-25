"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // ../../node_modules/reflect-metadata/Reflect.js
  var require_Reflect = __commonJS({
    "../../node_modules/reflect-metadata/Reflect.js"() {
      var Reflect2;
      (function(Reflect3) {
        (function(factory) {
          var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : Function("return this;")();
          var exporter = makeExporter(Reflect3);
          if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect3;
          } else {
            exporter = makeExporter(root.Reflect, exporter);
          }
          factory(exporter);
          function makeExporter(target, previous) {
            return function(key, value) {
              if (typeof target[key] !== "function") {
                Object.defineProperty(target, key, { configurable: true, writable: true, value });
              }
              if (previous)
                previous(key, value);
            };
          }
          __name(makeExporter, "makeExporter");
        })(function(exporter) {
          var hasOwn = Object.prototype.hasOwnProperty;
          var supportsSymbol = typeof Symbol === "function";
          var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
          var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
          var supportsCreate = typeof Object.create === "function";
          var supportsProto = { __proto__: [] } instanceof Array;
          var downLevel = !supportsCreate && !supportsProto;
          var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate ? function() {
              return MakeDictionary(/* @__PURE__ */ Object.create(null));
            } : supportsProto ? function() {
              return MakeDictionary({ __proto__: null });
            } : function() {
              return MakeDictionary({});
            },
            has: downLevel ? function(map, key) {
              return hasOwn.call(map, key);
            } : function(map, key) {
              return key in map;
            },
            get: downLevel ? function(map, key) {
              return hasOwn.call(map, key) ? map[key] : void 0;
            } : function(map, key) {
              return map[key];
            }
          };
          var functionPrototype = Object.getPrototypeOf(Function);
          var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
          var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
          var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
          var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
          var Metadata = new _WeakMap();
          function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
              if (!IsArray(decorators))
                throw new TypeError();
              if (!IsObject(target))
                throw new TypeError();
              if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                throw new TypeError();
              if (IsNull(attributes))
                attributes = void 0;
              propertyKey = ToPropertyKey(propertyKey);
              return DecorateProperty(decorators, target, propertyKey, attributes);
            } else {
              if (!IsArray(decorators))
                throw new TypeError();
              if (!IsConstructor(target))
                throw new TypeError();
              return DecorateConstructor(decorators, target);
            }
          }
          __name(decorate, "decorate");
          exporter("decorate", decorate);
          function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
              if (!IsObject(target))
                throw new TypeError();
              if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                throw new TypeError();
              OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            __name(decorator, "decorator");
            return decorator;
          }
          __name(metadata, "metadata");
          exporter("metadata", metadata);
          function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
          }
          __name(defineMetadata, "defineMetadata");
          exporter("defineMetadata", defineMetadata);
          function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
          }
          __name(hasMetadata, "hasMetadata");
          exporter("hasMetadata", hasMetadata);
          function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
          }
          __name(hasOwnMetadata, "hasOwnMetadata");
          exporter("hasOwnMetadata", hasOwnMetadata);
          function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
          }
          __name(getMetadata, "getMetadata");
          exporter("getMetadata", getMetadata);
          function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
          }
          __name(getOwnMetadata, "getOwnMetadata");
          exporter("getOwnMetadata", getOwnMetadata);
          function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
          }
          __name(getMetadataKeys, "getMetadataKeys");
          exporter("getMetadataKeys", getMetadataKeys);
          function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
          }
          __name(getOwnMetadataKeys, "getOwnMetadataKeys");
          exporter("getOwnMetadataKeys", getOwnMetadataKeys);
          function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(
              target,
              propertyKey,
              /*Create*/
              false
            );
            if (IsUndefined(metadataMap))
              return false;
            if (!metadataMap.delete(metadataKey))
              return false;
            if (metadataMap.size > 0)
              return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
              return true;
            Metadata.delete(target);
            return true;
          }
          __name(deleteMetadata, "deleteMetadata");
          exporter("deleteMetadata", deleteMetadata);
          function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
              var decorator = decorators[i];
              var decorated = decorator(target);
              if (!IsUndefined(decorated) && !IsNull(decorated)) {
                if (!IsConstructor(decorated))
                  throw new TypeError();
                target = decorated;
              }
            }
            return target;
          }
          __name(DecorateConstructor, "DecorateConstructor");
          function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
              var decorator = decorators[i];
              var decorated = decorator(target, propertyKey, descriptor);
              if (!IsUndefined(decorated) && !IsNull(decorated)) {
                if (!IsObject(decorated))
                  throw new TypeError();
                descriptor = decorated;
              }
            }
            return descriptor;
          }
          __name(DecorateProperty, "DecorateProperty");
          function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
              if (!Create)
                return void 0;
              targetMetadata = new _Map();
              Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
              if (!Create)
                return void 0;
              metadataMap = new _Map();
              targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
          }
          __name(GetOrCreateMetadataMap, "GetOrCreateMetadataMap");
          function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn2)
              return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
              return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
          }
          __name(OrdinaryHasMetadata, "OrdinaryHasMetadata");
          function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(metadataMap))
              return false;
            return ToBoolean(metadataMap.has(MetadataKey));
          }
          __name(OrdinaryHasOwnMetadata, "OrdinaryHasOwnMetadata");
          function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn2)
              return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
              return OrdinaryGetMetadata(MetadataKey, parent, P);
            return void 0;
          }
          __name(OrdinaryGetMetadata, "OrdinaryGetMetadata");
          function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(metadataMap))
              return void 0;
            return metadataMap.get(MetadataKey);
          }
          __name(OrdinaryGetOwnMetadata, "OrdinaryGetOwnMetadata");
          function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              true
            );
            metadataMap.set(MetadataKey, MetadataValue);
          }
          __name(OrdinaryDefineOwnMetadata, "OrdinaryDefineOwnMetadata");
          function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
              return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
              return ownKeys;
            if (ownKeys.length <= 0)
              return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
              var key = ownKeys_1[_i];
              var hasKey = set.has(key);
              if (!hasKey) {
                set.add(key);
                keys.push(key);
              }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
              var key = parentKeys_1[_a];
              var hasKey = set.has(key);
              if (!hasKey) {
                set.add(key);
                keys.push(key);
              }
            }
            return keys;
          }
          __name(OrdinaryMetadataKeys, "OrdinaryMetadataKeys");
          function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(metadataMap))
              return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
              var next = IteratorStep(iterator);
              if (!next) {
                keys.length = k;
                return keys;
              }
              var nextValue = IteratorValue(next);
              try {
                keys[k] = nextValue;
              } catch (e) {
                try {
                  IteratorClose(iterator);
                } finally {
                  throw e;
                }
              }
              k++;
            }
          }
          __name(OrdinaryOwnMetadataKeys, "OrdinaryOwnMetadataKeys");
          function Type(x) {
            if (x === null)
              return 1;
            switch (typeof x) {
              case "undefined":
                return 0;
              case "boolean":
                return 2;
              case "string":
                return 3;
              case "symbol":
                return 4;
              case "number":
                return 5;
              case "object":
                return x === null ? 1 : 6;
              default:
                return 6;
            }
          }
          __name(Type, "Type");
          function IsUndefined(x) {
            return x === void 0;
          }
          __name(IsUndefined, "IsUndefined");
          function IsNull(x) {
            return x === null;
          }
          __name(IsNull, "IsNull");
          function IsSymbol(x) {
            return typeof x === "symbol";
          }
          __name(IsSymbol, "IsSymbol");
          function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
          }
          __name(IsObject, "IsObject");
          function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
              case 0:
                return input;
              case 1:
                return input;
              case 2:
                return input;
              case 3:
                return input;
              case 4:
                return input;
              case 5:
                return input;
            }
            var hint = PreferredType === 3 ? "string" : PreferredType === 5 ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== void 0) {
              var result = exoticToPrim.call(input, hint);
              if (IsObject(result))
                throw new TypeError();
              return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
          }
          __name(ToPrimitive, "ToPrimitive");
          function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
              var toString_1 = O.toString;
              if (IsCallable(toString_1)) {
                var result = toString_1.call(O);
                if (!IsObject(result))
                  return result;
              }
              var valueOf = O.valueOf;
              if (IsCallable(valueOf)) {
                var result = valueOf.call(O);
                if (!IsObject(result))
                  return result;
              }
            } else {
              var valueOf = O.valueOf;
              if (IsCallable(valueOf)) {
                var result = valueOf.call(O);
                if (!IsObject(result))
                  return result;
              }
              var toString_2 = O.toString;
              if (IsCallable(toString_2)) {
                var result = toString_2.call(O);
                if (!IsObject(result))
                  return result;
              }
            }
            throw new TypeError();
          }
          __name(OrdinaryToPrimitive, "OrdinaryToPrimitive");
          function ToBoolean(argument) {
            return !!argument;
          }
          __name(ToBoolean, "ToBoolean");
          function ToString(argument) {
            return "" + argument;
          }
          __name(ToString, "ToString");
          function ToPropertyKey(argument) {
            var key = ToPrimitive(
              argument,
              3
              /* String */
            );
            if (IsSymbol(key))
              return key;
            return ToString(key);
          }
          __name(ToPropertyKey, "ToPropertyKey");
          function IsArray(argument) {
            return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
          }
          __name(IsArray, "IsArray");
          function IsCallable(argument) {
            return typeof argument === "function";
          }
          __name(IsCallable, "IsCallable");
          function IsConstructor(argument) {
            return typeof argument === "function";
          }
          __name(IsConstructor, "IsConstructor");
          function IsPropertyKey(argument) {
            switch (Type(argument)) {
              case 3:
                return true;
              case 4:
                return true;
              default:
                return false;
            }
          }
          __name(IsPropertyKey, "IsPropertyKey");
          function GetMethod(V, P) {
            var func = V[P];
            if (func === void 0 || func === null)
              return void 0;
            if (!IsCallable(func))
              throw new TypeError();
            return func;
          }
          __name(GetMethod, "GetMethod");
          function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
              throw new TypeError();
            var iterator = method.call(obj);
            if (!IsObject(iterator))
              throw new TypeError();
            return iterator;
          }
          __name(GetIterator, "GetIterator");
          function IteratorValue(iterResult) {
            return iterResult.value;
          }
          __name(IteratorValue, "IteratorValue");
          function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
          }
          __name(IteratorStep, "IteratorStep");
          function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
              f.call(iterator);
          }
          __name(IteratorClose, "IteratorClose");
          function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
              return proto;
            if (proto !== functionPrototype)
              return proto;
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
              return proto;
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
              return proto;
            if (constructor === O)
              return proto;
            return constructor;
          }
          __name(OrdinaryGetPrototypeOf, "OrdinaryGetPrototypeOf");
          function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = (
              /** @class */
              function() {
                function MapIterator2(keys, values, selector) {
                  this._index = 0;
                  this._keys = keys;
                  this._values = values;
                  this._selector = selector;
                }
                __name(MapIterator2, "MapIterator");
                MapIterator2.prototype["@@iterator"] = function() {
                  return this;
                };
                MapIterator2.prototype[iteratorSymbol] = function() {
                  return this;
                };
                MapIterator2.prototype.next = function() {
                  var index = this._index;
                  if (index >= 0 && index < this._keys.length) {
                    var result = this._selector(this._keys[index], this._values[index]);
                    if (index + 1 >= this._keys.length) {
                      this._index = -1;
                      this._keys = arraySentinel;
                      this._values = arraySentinel;
                    } else {
                      this._index++;
                    }
                    return { value: result, done: false };
                  }
                  return { value: void 0, done: true };
                };
                MapIterator2.prototype.throw = function(error) {
                  if (this._index >= 0) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                  }
                  throw error;
                };
                MapIterator2.prototype.return = function(value) {
                  if (this._index >= 0) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                  }
                  return { value, done: true };
                };
                return MapIterator2;
              }()
            );
            return (
              /** @class */
              function() {
                function Map2() {
                  this._keys = [];
                  this._values = [];
                  this._cacheKey = cacheSentinel;
                  this._cacheIndex = -2;
                }
                __name(Map2, "Map");
                Object.defineProperty(Map2.prototype, "size", {
                  get: function() {
                    return this._keys.length;
                  },
                  enumerable: true,
                  configurable: true
                });
                Map2.prototype.has = function(key) {
                  return this._find(
                    key,
                    /*insert*/
                    false
                  ) >= 0;
                };
                Map2.prototype.get = function(key) {
                  var index = this._find(
                    key,
                    /*insert*/
                    false
                  );
                  return index >= 0 ? this._values[index] : void 0;
                };
                Map2.prototype.set = function(key, value) {
                  var index = this._find(
                    key,
                    /*insert*/
                    true
                  );
                  this._values[index] = value;
                  return this;
                };
                Map2.prototype.delete = function(key) {
                  var index = this._find(
                    key,
                    /*insert*/
                    false
                  );
                  if (index >= 0) {
                    var size = this._keys.length;
                    for (var i = index + 1; i < size; i++) {
                      this._keys[i - 1] = this._keys[i];
                      this._values[i - 1] = this._values[i];
                    }
                    this._keys.length--;
                    this._values.length--;
                    if (key === this._cacheKey) {
                      this._cacheKey = cacheSentinel;
                      this._cacheIndex = -2;
                    }
                    return true;
                  }
                  return false;
                };
                Map2.prototype.clear = function() {
                  this._keys.length = 0;
                  this._values.length = 0;
                  this._cacheKey = cacheSentinel;
                  this._cacheIndex = -2;
                };
                Map2.prototype.keys = function() {
                  return new MapIterator(this._keys, this._values, getKey);
                };
                Map2.prototype.values = function() {
                  return new MapIterator(this._keys, this._values, getValue);
                };
                Map2.prototype.entries = function() {
                  return new MapIterator(this._keys, this._values, getEntry);
                };
                Map2.prototype["@@iterator"] = function() {
                  return this.entries();
                };
                Map2.prototype[iteratorSymbol] = function() {
                  return this.entries();
                };
                Map2.prototype._find = function(key, insert) {
                  if (this._cacheKey !== key) {
                    this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                  }
                  if (this._cacheIndex < 0 && insert) {
                    this._cacheIndex = this._keys.length;
                    this._keys.push(key);
                    this._values.push(void 0);
                  }
                  return this._cacheIndex;
                };
                return Map2;
              }()
            );
            function getKey(key, _) {
              return key;
            }
            __name(getKey, "getKey");
            function getValue(_, value) {
              return value;
            }
            __name(getValue, "getValue");
            function getEntry(key, value) {
              return [key, value];
            }
            __name(getEntry, "getEntry");
          }
          __name(CreateMapPolyfill, "CreateMapPolyfill");
          function CreateSetPolyfill() {
            return (
              /** @class */
              function() {
                function Set2() {
                  this._map = new _Map();
                }
                __name(Set2, "Set");
                Object.defineProperty(Set2.prototype, "size", {
                  get: function() {
                    return this._map.size;
                  },
                  enumerable: true,
                  configurable: true
                });
                Set2.prototype.has = function(value) {
                  return this._map.has(value);
                };
                Set2.prototype.add = function(value) {
                  return this._map.set(value, value), this;
                };
                Set2.prototype.delete = function(value) {
                  return this._map.delete(value);
                };
                Set2.prototype.clear = function() {
                  this._map.clear();
                };
                Set2.prototype.keys = function() {
                  return this._map.keys();
                };
                Set2.prototype.values = function() {
                  return this._map.values();
                };
                Set2.prototype.entries = function() {
                  return this._map.entries();
                };
                Set2.prototype["@@iterator"] = function() {
                  return this.keys();
                };
                Set2.prototype[iteratorSymbol] = function() {
                  return this.keys();
                };
                return Set2;
              }()
            );
          }
          __name(CreateSetPolyfill, "CreateSetPolyfill");
          function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return (
              /** @class */
              function() {
                function WeakMap2() {
                  this._key = CreateUniqueKey();
                }
                __name(WeakMap2, "WeakMap");
                WeakMap2.prototype.has = function(target) {
                  var table = GetOrCreateWeakMapTable(
                    target,
                    /*create*/
                    false
                  );
                  return table !== void 0 ? HashMap.has(table, this._key) : false;
                };
                WeakMap2.prototype.get = function(target) {
                  var table = GetOrCreateWeakMapTable(
                    target,
                    /*create*/
                    false
                  );
                  return table !== void 0 ? HashMap.get(table, this._key) : void 0;
                };
                WeakMap2.prototype.set = function(target, value) {
                  var table = GetOrCreateWeakMapTable(
                    target,
                    /*create*/
                    true
                  );
                  table[this._key] = value;
                  return this;
                };
                WeakMap2.prototype.delete = function(target) {
                  var table = GetOrCreateWeakMapTable(
                    target,
                    /*create*/
                    false
                  );
                  return table !== void 0 ? delete table[this._key] : false;
                };
                WeakMap2.prototype.clear = function() {
                  this._key = CreateUniqueKey();
                };
                return WeakMap2;
              }()
            );
            function CreateUniqueKey() {
              var key;
              do
                key = "@@WeakMap@@" + CreateUUID();
              while (HashMap.has(keys, key));
              keys[key] = true;
              return key;
            }
            __name(CreateUniqueKey, "CreateUniqueKey");
            function GetOrCreateWeakMapTable(target, create) {
              if (!hasOwn.call(target, rootKey)) {
                if (!create)
                  return void 0;
                Object.defineProperty(target, rootKey, { value: HashMap.create() });
              }
              return target[rootKey];
            }
            __name(GetOrCreateWeakMapTable, "GetOrCreateWeakMapTable");
            function FillRandomBytes(buffer, size) {
              for (var i = 0; i < size; ++i)
                buffer[i] = Math.random() * 255 | 0;
              return buffer;
            }
            __name(FillRandomBytes, "FillRandomBytes");
            function GenRandomBytes(size) {
              if (typeof Uint8Array === "function") {
                if (typeof crypto !== "undefined")
                  return crypto.getRandomValues(new Uint8Array(size));
                if (typeof msCrypto !== "undefined")
                  return msCrypto.getRandomValues(new Uint8Array(size));
                return FillRandomBytes(new Uint8Array(size), size);
              }
              return FillRandomBytes(new Array(size), size);
            }
            __name(GenRandomBytes, "GenRandomBytes");
            function CreateUUID() {
              var data = GenRandomBytes(UUID_SIZE);
              data[6] = data[6] & 79 | 64;
              data[8] = data[8] & 191 | 128;
              var result = "";
              for (var offset = 0; offset < UUID_SIZE; ++offset) {
                var byte = data[offset];
                if (offset === 4 || offset === 6 || offset === 8)
                  result += "-";
                if (byte < 16)
                  result += "0";
                result += byte.toString(16).toLowerCase();
              }
              return result;
            }
            __name(CreateUUID, "CreateUUID");
          }
          __name(CreateWeakMapPolyfill, "CreateWeakMapPolyfill");
          function MakeDictionary(obj) {
            obj.__ = void 0;
            delete obj.__;
            return obj;
          }
          __name(MakeDictionary, "MakeDictionary");
        });
      })(Reflect2 || (Reflect2 = {}));
    }
  });

  // ../../node_modules/eventemitter2/lib/eventemitter2.js
  var require_eventemitter2 = __commonJS({
    "../../node_modules/eventemitter2/lib/eventemitter2.js"(exports2, module) {
      !function(undefined2) {
        var hasOwnProperty = Object.hasOwnProperty;
        var isArray = Array.isArray ? Array.isArray : /* @__PURE__ */ __name(function _isArray(obj) {
          return Object.prototype.toString.call(obj) === "[object Array]";
        }, "_isArray");
        var defaultMaxListeners = 10;
        var nextTickSupported = typeof process == "object" && typeof process.nextTick == "function";
        var symbolsSupported = typeof Symbol === "function";
        var reflectSupported = typeof Reflect === "object";
        var setImmediateSupported = typeof setImmediate === "function";
        var _setImmediate = setImmediateSupported ? setImmediate : setTimeout;
        var ownKeys = symbolsSupported ? reflectSupported && typeof Reflect.ownKeys === "function" ? Reflect.ownKeys : function(obj) {
          var arr = Object.getOwnPropertyNames(obj);
          arr.push.apply(arr, Object.getOwnPropertySymbols(obj));
          return arr;
        } : Object.keys;
        function init() {
          this._events = {};
          if (this._conf) {
            configure.call(this, this._conf);
          }
        }
        __name(init, "init");
        function configure(conf) {
          if (conf) {
            this._conf = conf;
            conf.delimiter && (this.delimiter = conf.delimiter);
            if (conf.maxListeners !== undefined2) {
              this._maxListeners = conf.maxListeners;
            }
            conf.wildcard && (this.wildcard = conf.wildcard);
            conf.newListener && (this._newListener = conf.newListener);
            conf.removeListener && (this._removeListener = conf.removeListener);
            conf.verboseMemoryLeak && (this.verboseMemoryLeak = conf.verboseMemoryLeak);
            conf.ignoreErrors && (this.ignoreErrors = conf.ignoreErrors);
            if (this.wildcard) {
              this.listenerTree = {};
            }
          }
        }
        __name(configure, "configure");
        function logPossibleMemoryLeak(count, eventName) {
          var errorMsg = "(node) warning: possible EventEmitter memory leak detected. " + count + " listeners added. Use emitter.setMaxListeners() to increase limit.";
          if (this.verboseMemoryLeak) {
            errorMsg += " Event name: " + eventName + ".";
          }
          if (typeof process !== "undefined" && process.emitWarning) {
            var e = new Error(errorMsg);
            e.name = "MaxListenersExceededWarning";
            e.emitter = this;
            e.count = count;
            process.emitWarning(e);
          } else {
            console.error(errorMsg);
            if (console.trace) {
              console.trace();
            }
          }
        }
        __name(logPossibleMemoryLeak, "logPossibleMemoryLeak");
        var toArray = /* @__PURE__ */ __name(function(a, b, c) {
          var n = arguments.length;
          switch (n) {
            case 0:
              return [];
            case 1:
              return [a];
            case 2:
              return [a, b];
            case 3:
              return [a, b, c];
            default:
              var arr = new Array(n);
              while (n--) {
                arr[n] = arguments[n];
              }
              return arr;
          }
        }, "toArray");
        function toObject(keys, values) {
          var obj = {};
          var key;
          var len = keys.length;
          var valuesCount = values ? values.length : 0;
          for (var i = 0; i < len; i++) {
            key = keys[i];
            obj[key] = i < valuesCount ? values[i] : undefined2;
          }
          return obj;
        }
        __name(toObject, "toObject");
        function TargetObserver(emitter, target, options) {
          this._emitter = emitter;
          this._target = target;
          this._listeners = {};
          this._listenersCount = 0;
          var on, off;
          if (options.on || options.off) {
            on = options.on;
            off = options.off;
          }
          if (target.addEventListener) {
            on = target.addEventListener;
            off = target.removeEventListener;
          } else if (target.addListener) {
            on = target.addListener;
            off = target.removeListener;
          } else if (target.on) {
            on = target.on;
            off = target.off;
          }
          if (!on && !off) {
            throw Error("target does not implement any known event API");
          }
          if (typeof on !== "function") {
            throw TypeError("on method must be a function");
          }
          if (typeof off !== "function") {
            throw TypeError("off method must be a function");
          }
          this._on = on;
          this._off = off;
          var _observers = emitter._observers;
          if (_observers) {
            _observers.push(this);
          } else {
            emitter._observers = [this];
          }
        }
        __name(TargetObserver, "TargetObserver");
        Object.assign(TargetObserver.prototype, {
          subscribe: function(event, localEvent, reducer) {
            var observer = this;
            var target = this._target;
            var emitter = this._emitter;
            var listeners = this._listeners;
            var handler = /* @__PURE__ */ __name(function() {
              var args = toArray.apply(null, arguments);
              var eventObj = {
                data: args,
                name: localEvent,
                original: event
              };
              if (reducer) {
                var result = reducer.call(target, eventObj);
                if (result !== false) {
                  emitter.emit.apply(emitter, [eventObj.name].concat(args));
                }
                return;
              }
              emitter.emit.apply(emitter, [localEvent].concat(args));
            }, "handler");
            if (listeners[event]) {
              throw Error("Event '" + event + "' is already listening");
            }
            this._listenersCount++;
            if (emitter._newListener && emitter._removeListener && !observer._onNewListener) {
              this._onNewListener = function(_event) {
                if (_event === localEvent && listeners[event] === null) {
                  listeners[event] = handler;
                  observer._on.call(target, event, handler);
                }
              };
              emitter.on("newListener", this._onNewListener);
              this._onRemoveListener = function(_event) {
                if (_event === localEvent && !emitter.hasListeners(_event) && listeners[event]) {
                  listeners[event] = null;
                  observer._off.call(target, event, handler);
                }
              };
              listeners[event] = null;
              emitter.on("removeListener", this._onRemoveListener);
            } else {
              listeners[event] = handler;
              observer._on.call(target, event, handler);
            }
          },
          unsubscribe: function(event) {
            var observer = this;
            var listeners = this._listeners;
            var emitter = this._emitter;
            var handler;
            var events;
            var off = this._off;
            var target = this._target;
            var i;
            if (event && typeof event !== "string") {
              throw TypeError("event must be a string");
            }
            function clearRefs() {
              if (observer._onNewListener) {
                emitter.off("newListener", observer._onNewListener);
                emitter.off("removeListener", observer._onRemoveListener);
                observer._onNewListener = null;
                observer._onRemoveListener = null;
              }
              var index = findTargetIndex.call(emitter, observer);
              emitter._observers.splice(index, 1);
            }
            __name(clearRefs, "clearRefs");
            if (event) {
              handler = listeners[event];
              if (!handler)
                return;
              off.call(target, event, handler);
              delete listeners[event];
              if (!--this._listenersCount) {
                clearRefs();
              }
            } else {
              events = ownKeys(listeners);
              i = events.length;
              while (i-- > 0) {
                event = events[i];
                off.call(target, event, listeners[event]);
              }
              this._listeners = {};
              this._listenersCount = 0;
              clearRefs();
            }
          }
        });
        function resolveOptions(options, schema, reducers, allowUnknown) {
          var computedOptions = Object.assign({}, schema);
          if (!options)
            return computedOptions;
          if (typeof options !== "object") {
            throw TypeError("options must be an object");
          }
          var keys = Object.keys(options);
          var length = keys.length;
          var option, value;
          var reducer;
          function reject(reason) {
            throw Error('Invalid "' + option + '" option value' + (reason ? ". Reason: " + reason : ""));
          }
          __name(reject, "reject");
          for (var i = 0; i < length; i++) {
            option = keys[i];
            if (!allowUnknown && !hasOwnProperty.call(schema, option)) {
              throw Error('Unknown "' + option + '" option');
            }
            value = options[option];
            if (value !== undefined2) {
              reducer = reducers[option];
              computedOptions[option] = reducer ? reducer(value, reject) : value;
            }
          }
          return computedOptions;
        }
        __name(resolveOptions, "resolveOptions");
        function constructorReducer(value, reject) {
          if (typeof value !== "function" || !value.hasOwnProperty("prototype")) {
            reject("value must be a constructor");
          }
          return value;
        }
        __name(constructorReducer, "constructorReducer");
        function makeTypeReducer(types) {
          var message = "value must be type of " + types.join("|");
          var len = types.length;
          var firstType = types[0];
          var secondType = types[1];
          if (len === 1) {
            return function(v, reject) {
              if (typeof v === firstType) {
                return v;
              }
              reject(message);
            };
          }
          if (len === 2) {
            return function(v, reject) {
              var kind = typeof v;
              if (kind === firstType || kind === secondType)
                return v;
              reject(message);
            };
          }
          return function(v, reject) {
            var kind = typeof v;
            var i = len;
            while (i-- > 0) {
              if (kind === types[i])
                return v;
            }
            reject(message);
          };
        }
        __name(makeTypeReducer, "makeTypeReducer");
        var functionReducer = makeTypeReducer(["function"]);
        var objectFunctionReducer = makeTypeReducer(["object", "function"]);
        function makeCancelablePromise(Promise2, executor, options) {
          var isCancelable;
          var callbacks;
          var timer = 0;
          var subscriptionClosed;
          var promise = new Promise2(function(resolve, reject, onCancel) {
            options = resolveOptions(options, {
              timeout: 0,
              overload: false
            }, {
              timeout: function(value, reject2) {
                value *= 1;
                if (typeof value !== "number" || value < 0 || !Number.isFinite(value)) {
                  reject2("timeout must be a positive number");
                }
                return value;
              }
            });
            isCancelable = !options.overload && typeof Promise2.prototype.cancel === "function" && typeof onCancel === "function";
            function cleanup() {
              if (callbacks) {
                callbacks = null;
              }
              if (timer) {
                clearTimeout(timer);
                timer = 0;
              }
            }
            __name(cleanup, "cleanup");
            var _resolve = /* @__PURE__ */ __name(function(value) {
              cleanup();
              resolve(value);
            }, "_resolve");
            var _reject = /* @__PURE__ */ __name(function(err) {
              cleanup();
              reject(err);
            }, "_reject");
            if (isCancelable) {
              executor(_resolve, _reject, onCancel);
            } else {
              callbacks = [function(reason) {
                _reject(reason || Error("canceled"));
              }];
              executor(_resolve, _reject, function(cb) {
                if (subscriptionClosed) {
                  throw Error("Unable to subscribe on cancel event asynchronously");
                }
                if (typeof cb !== "function") {
                  throw TypeError("onCancel callback must be a function");
                }
                callbacks.push(cb);
              });
              subscriptionClosed = true;
            }
            if (options.timeout > 0) {
              timer = setTimeout(function() {
                var reason = Error("timeout");
                reason.code = "ETIMEDOUT";
                timer = 0;
                promise.cancel(reason);
                reject(reason);
              }, options.timeout);
            }
          });
          if (!isCancelable) {
            promise.cancel = function(reason) {
              if (!callbacks) {
                return;
              }
              var length = callbacks.length;
              for (var i = 1; i < length; i++) {
                callbacks[i](reason);
              }
              callbacks[0](reason);
              callbacks = null;
            };
          }
          return promise;
        }
        __name(makeCancelablePromise, "makeCancelablePromise");
        function findTargetIndex(observer) {
          var observers = this._observers;
          if (!observers) {
            return -1;
          }
          var len = observers.length;
          for (var i = 0; i < len; i++) {
            if (observers[i]._target === observer)
              return i;
          }
          return -1;
        }
        __name(findTargetIndex, "findTargetIndex");
        function searchListenerTree(handlers, type, tree, i, typeLength) {
          if (!tree) {
            return null;
          }
          if (i === 0) {
            var kind = typeof type;
            if (kind === "string") {
              var ns, n, l = 0, j = 0, delimiter = this.delimiter, dl = delimiter.length;
              if ((n = type.indexOf(delimiter)) !== -1) {
                ns = new Array(5);
                do {
                  ns[l++] = type.slice(j, n);
                  j = n + dl;
                } while ((n = type.indexOf(delimiter, j)) !== -1);
                ns[l++] = type.slice(j);
                type = ns;
                typeLength = l;
              } else {
                type = [type];
                typeLength = 1;
              }
            } else if (kind === "object") {
              typeLength = type.length;
            } else {
              type = [type];
              typeLength = 1;
            }
          }
          var listeners = null, branch, xTree, xxTree, isolatedBranch, endReached, currentType = type[i], nextType = type[i + 1], branches, _listeners;
          if (i === typeLength) {
            if (tree._listeners) {
              if (typeof tree._listeners === "function") {
                handlers && handlers.push(tree._listeners);
                listeners = [tree];
              } else {
                handlers && handlers.push.apply(handlers, tree._listeners);
                listeners = [tree];
              }
            }
          } else {
            if (currentType === "*") {
              branches = ownKeys(tree);
              n = branches.length;
              while (n-- > 0) {
                branch = branches[n];
                if (branch !== "_listeners") {
                  _listeners = searchListenerTree(handlers, type, tree[branch], i + 1, typeLength);
                  if (_listeners) {
                    if (listeners) {
                      listeners.push.apply(listeners, _listeners);
                    } else {
                      listeners = _listeners;
                    }
                  }
                }
              }
              return listeners;
            } else if (currentType === "**") {
              endReached = i + 1 === typeLength || i + 2 === typeLength && nextType === "*";
              if (endReached && tree._listeners) {
                listeners = searchListenerTree(handlers, type, tree, typeLength, typeLength);
              }
              branches = ownKeys(tree);
              n = branches.length;
              while (n-- > 0) {
                branch = branches[n];
                if (branch !== "_listeners") {
                  if (branch === "*" || branch === "**") {
                    if (tree[branch]._listeners && !endReached) {
                      _listeners = searchListenerTree(handlers, type, tree[branch], typeLength, typeLength);
                      if (_listeners) {
                        if (listeners) {
                          listeners.push.apply(listeners, _listeners);
                        } else {
                          listeners = _listeners;
                        }
                      }
                    }
                    _listeners = searchListenerTree(handlers, type, tree[branch], i, typeLength);
                  } else if (branch === nextType) {
                    _listeners = searchListenerTree(handlers, type, tree[branch], i + 2, typeLength);
                  } else {
                    _listeners = searchListenerTree(handlers, type, tree[branch], i, typeLength);
                  }
                  if (_listeners) {
                    if (listeners) {
                      listeners.push.apply(listeners, _listeners);
                    } else {
                      listeners = _listeners;
                    }
                  }
                }
              }
              return listeners;
            } else if (tree[currentType]) {
              listeners = searchListenerTree(handlers, type, tree[currentType], i + 1, typeLength);
            }
          }
          xTree = tree["*"];
          if (xTree) {
            searchListenerTree(handlers, type, xTree, i + 1, typeLength);
          }
          xxTree = tree["**"];
          if (xxTree) {
            if (i < typeLength) {
              if (xxTree._listeners) {
                searchListenerTree(handlers, type, xxTree, typeLength, typeLength);
              }
              branches = ownKeys(xxTree);
              n = branches.length;
              while (n-- > 0) {
                branch = branches[n];
                if (branch !== "_listeners") {
                  if (branch === nextType) {
                    searchListenerTree(handlers, type, xxTree[branch], i + 2, typeLength);
                  } else if (branch === currentType) {
                    searchListenerTree(handlers, type, xxTree[branch], i + 1, typeLength);
                  } else {
                    isolatedBranch = {};
                    isolatedBranch[branch] = xxTree[branch];
                    searchListenerTree(handlers, type, { "**": isolatedBranch }, i + 1, typeLength);
                  }
                }
              }
            } else if (xxTree._listeners) {
              searchListenerTree(handlers, type, xxTree, typeLength, typeLength);
            } else if (xxTree["*"] && xxTree["*"]._listeners) {
              searchListenerTree(handlers, type, xxTree["*"], typeLength, typeLength);
            }
          }
          return listeners;
        }
        __name(searchListenerTree, "searchListenerTree");
        function growListenerTree(type, listener, prepend) {
          var len = 0, j = 0, i, delimiter = this.delimiter, dl = delimiter.length, ns;
          if (typeof type === "string") {
            if ((i = type.indexOf(delimiter)) !== -1) {
              ns = new Array(5);
              do {
                ns[len++] = type.slice(j, i);
                j = i + dl;
              } while ((i = type.indexOf(delimiter, j)) !== -1);
              ns[len++] = type.slice(j);
            } else {
              ns = [type];
              len = 1;
            }
          } else {
            ns = type;
            len = type.length;
          }
          if (len > 1) {
            for (i = 0; i + 1 < len; i++) {
              if (ns[i] === "**" && ns[i + 1] === "**") {
                return;
              }
            }
          }
          var tree = this.listenerTree, name;
          for (i = 0; i < len; i++) {
            name = ns[i];
            tree = tree[name] || (tree[name] = {});
            if (i === len - 1) {
              if (!tree._listeners) {
                tree._listeners = listener;
              } else {
                if (typeof tree._listeners === "function") {
                  tree._listeners = [tree._listeners];
                }
                if (prepend) {
                  tree._listeners.unshift(listener);
                } else {
                  tree._listeners.push(listener);
                }
                if (!tree._listeners.warned && this._maxListeners > 0 && tree._listeners.length > this._maxListeners) {
                  tree._listeners.warned = true;
                  logPossibleMemoryLeak.call(this, tree._listeners.length, name);
                }
              }
              return true;
            }
          }
          return true;
        }
        __name(growListenerTree, "growListenerTree");
        function collectTreeEvents(tree, events, root, asArray) {
          var branches = ownKeys(tree);
          var i = branches.length;
          var branch, branchName, path;
          var hasListeners = tree["_listeners"];
          var isArrayPath;
          while (i-- > 0) {
            branchName = branches[i];
            branch = tree[branchName];
            if (branchName === "_listeners") {
              path = root;
            } else {
              path = root ? root.concat(branchName) : [branchName];
            }
            isArrayPath = asArray || typeof branchName === "symbol";
            hasListeners && events.push(isArrayPath ? path : path.join(this.delimiter));
            if (typeof branch === "object") {
              collectTreeEvents.call(this, branch, events, path, isArrayPath);
            }
          }
          return events;
        }
        __name(collectTreeEvents, "collectTreeEvents");
        function recursivelyGarbageCollect(root) {
          var keys = ownKeys(root);
          var i = keys.length;
          var obj, key, flag;
          while (i-- > 0) {
            key = keys[i];
            obj = root[key];
            if (obj) {
              flag = true;
              if (key !== "_listeners" && !recursivelyGarbageCollect(obj)) {
                delete root[key];
              }
            }
          }
          return flag;
        }
        __name(recursivelyGarbageCollect, "recursivelyGarbageCollect");
        function Listener(emitter, event, listener) {
          this.emitter = emitter;
          this.event = event;
          this.listener = listener;
        }
        __name(Listener, "Listener");
        Listener.prototype.off = function() {
          this.emitter.off(this.event, this.listener);
          return this;
        };
        function setupListener(event, listener, options) {
          if (options === true) {
            promisify = true;
          } else if (options === false) {
            async = true;
          } else {
            if (!options || typeof options !== "object") {
              throw TypeError("options should be an object or true");
            }
            var async = options.async;
            var promisify = options.promisify;
            var nextTick = options.nextTick;
            var objectify = options.objectify;
          }
          if (async || nextTick || promisify) {
            var _listener = listener;
            var _origin = listener._origin || listener;
            if (nextTick && !nextTickSupported) {
              throw Error("process.nextTick is not supported");
            }
            if (promisify === undefined2) {
              promisify = listener.constructor.name === "AsyncFunction";
            }
            listener = /* @__PURE__ */ __name(function() {
              var args = arguments;
              var context = this;
              var event2 = this.event;
              return promisify ? nextTick ? Promise.resolve() : new Promise(function(resolve) {
                _setImmediate(resolve);
              }).then(function() {
                context.event = event2;
                return _listener.apply(context, args);
              }) : (nextTick ? process.nextTick : _setImmediate)(function() {
                context.event = event2;
                _listener.apply(context, args);
              });
            }, "listener");
            listener._async = true;
            listener._origin = _origin;
          }
          return [listener, objectify ? new Listener(this, event, listener) : this];
        }
        __name(setupListener, "setupListener");
        function EventEmitter(conf) {
          this._events = {};
          this._newListener = false;
          this._removeListener = false;
          this.verboseMemoryLeak = false;
          configure.call(this, conf);
        }
        __name(EventEmitter, "EventEmitter");
        EventEmitter.EventEmitter2 = EventEmitter;
        EventEmitter.prototype.listenTo = function(target, events, options) {
          if (typeof target !== "object") {
            throw TypeError("target musts be an object");
          }
          var emitter = this;
          options = resolveOptions(options, {
            on: undefined2,
            off: undefined2,
            reducers: undefined2
          }, {
            on: functionReducer,
            off: functionReducer,
            reducers: objectFunctionReducer
          });
          function listen(events2) {
            if (typeof events2 !== "object") {
              throw TypeError("events must be an object");
            }
            var reducers = options.reducers;
            var index = findTargetIndex.call(emitter, target);
            var observer;
            if (index === -1) {
              observer = new TargetObserver(emitter, target, options);
            } else {
              observer = emitter._observers[index];
            }
            var keys = ownKeys(events2);
            var len = keys.length;
            var event;
            var isSingleReducer = typeof reducers === "function";
            for (var i = 0; i < len; i++) {
              event = keys[i];
              observer.subscribe(
                event,
                events2[event] || event,
                isSingleReducer ? reducers : reducers && reducers[event]
              );
            }
          }
          __name(listen, "listen");
          isArray(events) ? listen(toObject(events)) : typeof events === "string" ? listen(toObject(events.split(/\s+/))) : listen(events);
          return this;
        };
        EventEmitter.prototype.stopListeningTo = function(target, event) {
          var observers = this._observers;
          if (!observers) {
            return false;
          }
          var i = observers.length;
          var observer;
          var matched = false;
          if (target && typeof target !== "object") {
            throw TypeError("target should be an object");
          }
          while (i-- > 0) {
            observer = observers[i];
            if (!target || observer._target === target) {
              observer.unsubscribe(event);
              matched = true;
            }
          }
          return matched;
        };
        EventEmitter.prototype.delimiter = ".";
        EventEmitter.prototype.setMaxListeners = function(n) {
          if (n !== undefined2) {
            this._maxListeners = n;
            if (!this._conf)
              this._conf = {};
            this._conf.maxListeners = n;
          }
        };
        EventEmitter.prototype.getMaxListeners = function() {
          return this._maxListeners;
        };
        EventEmitter.prototype.event = "";
        EventEmitter.prototype.once = function(event, fn, options) {
          return this._once(event, fn, false, options);
        };
        EventEmitter.prototype.prependOnceListener = function(event, fn, options) {
          return this._once(event, fn, true, options);
        };
        EventEmitter.prototype._once = function(event, fn, prepend, options) {
          return this._many(event, 1, fn, prepend, options);
        };
        EventEmitter.prototype.many = function(event, ttl, fn, options) {
          return this._many(event, ttl, fn, false, options);
        };
        EventEmitter.prototype.prependMany = function(event, ttl, fn, options) {
          return this._many(event, ttl, fn, true, options);
        };
        EventEmitter.prototype._many = function(event, ttl, fn, prepend, options) {
          var self2 = this;
          if (typeof fn !== "function") {
            throw new Error("many only accepts instances of Function");
          }
          function listener() {
            if (--ttl === 0) {
              self2.off(event, listener);
            }
            return fn.apply(this, arguments);
          }
          __name(listener, "listener");
          listener._origin = fn;
          return this._on(event, listener, prepend, options);
        };
        EventEmitter.prototype.emit = function() {
          if (!this._events && !this._all) {
            return false;
          }
          this._events || init.call(this);
          var type = arguments[0], ns, wildcard = this.wildcard;
          var args, l, i, j, containsSymbol;
          if (type === "newListener" && !this._newListener) {
            if (!this._events.newListener) {
              return false;
            }
          }
          if (wildcard) {
            ns = type;
            if (type !== "newListener" && type !== "removeListener") {
              if (typeof type === "object") {
                l = type.length;
                if (symbolsSupported) {
                  for (i = 0; i < l; i++) {
                    if (typeof type[i] === "symbol") {
                      containsSymbol = true;
                      break;
                    }
                  }
                }
                if (!containsSymbol) {
                  type = type.join(this.delimiter);
                }
              }
            }
          }
          var al = arguments.length;
          var handler;
          if (this._all && this._all.length) {
            handler = this._all.slice();
            for (i = 0, l = handler.length; i < l; i++) {
              this.event = type;
              switch (al) {
                case 1:
                  handler[i].call(this, type);
                  break;
                case 2:
                  handler[i].call(this, type, arguments[1]);
                  break;
                case 3:
                  handler[i].call(this, type, arguments[1], arguments[2]);
                  break;
                default:
                  handler[i].apply(this, arguments);
              }
            }
          }
          if (wildcard) {
            handler = [];
            searchListenerTree.call(this, handler, ns, this.listenerTree, 0, l);
          } else {
            handler = this._events[type];
            if (typeof handler === "function") {
              this.event = type;
              switch (al) {
                case 1:
                  handler.call(this);
                  break;
                case 2:
                  handler.call(this, arguments[1]);
                  break;
                case 3:
                  handler.call(this, arguments[1], arguments[2]);
                  break;
                default:
                  args = new Array(al - 1);
                  for (j = 1; j < al; j++)
                    args[j - 1] = arguments[j];
                  handler.apply(this, args);
              }
              return true;
            } else if (handler) {
              handler = handler.slice();
            }
          }
          if (handler && handler.length) {
            if (al > 3) {
              args = new Array(al - 1);
              for (j = 1; j < al; j++)
                args[j - 1] = arguments[j];
            }
            for (i = 0, l = handler.length; i < l; i++) {
              this.event = type;
              switch (al) {
                case 1:
                  handler[i].call(this);
                  break;
                case 2:
                  handler[i].call(this, arguments[1]);
                  break;
                case 3:
                  handler[i].call(this, arguments[1], arguments[2]);
                  break;
                default:
                  handler[i].apply(this, args);
              }
            }
            return true;
          } else if (!this.ignoreErrors && !this._all && type === "error") {
            if (arguments[1] instanceof Error) {
              throw arguments[1];
            } else {
              throw new Error("Uncaught, unspecified 'error' event.");
            }
          }
          return !!this._all;
        };
        EventEmitter.prototype.emitAsync = function() {
          if (!this._events && !this._all) {
            return false;
          }
          this._events || init.call(this);
          var type = arguments[0], wildcard = this.wildcard, ns, containsSymbol;
          var args, l, i, j;
          if (type === "newListener" && !this._newListener) {
            if (!this._events.newListener) {
              return Promise.resolve([false]);
            }
          }
          if (wildcard) {
            ns = type;
            if (type !== "newListener" && type !== "removeListener") {
              if (typeof type === "object") {
                l = type.length;
                if (symbolsSupported) {
                  for (i = 0; i < l; i++) {
                    if (typeof type[i] === "symbol") {
                      containsSymbol = true;
                      break;
                    }
                  }
                }
                if (!containsSymbol) {
                  type = type.join(this.delimiter);
                }
              }
            }
          }
          var promises = [];
          var al = arguments.length;
          var handler;
          if (this._all) {
            for (i = 0, l = this._all.length; i < l; i++) {
              this.event = type;
              switch (al) {
                case 1:
                  promises.push(this._all[i].call(this, type));
                  break;
                case 2:
                  promises.push(this._all[i].call(this, type, arguments[1]));
                  break;
                case 3:
                  promises.push(this._all[i].call(this, type, arguments[1], arguments[2]));
                  break;
                default:
                  promises.push(this._all[i].apply(this, arguments));
              }
            }
          }
          if (wildcard) {
            handler = [];
            searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
          } else {
            handler = this._events[type];
          }
          if (typeof handler === "function") {
            this.event = type;
            switch (al) {
              case 1:
                promises.push(handler.call(this));
                break;
              case 2:
                promises.push(handler.call(this, arguments[1]));
                break;
              case 3:
                promises.push(handler.call(this, arguments[1], arguments[2]));
                break;
              default:
                args = new Array(al - 1);
                for (j = 1; j < al; j++)
                  args[j - 1] = arguments[j];
                promises.push(handler.apply(this, args));
            }
          } else if (handler && handler.length) {
            handler = handler.slice();
            if (al > 3) {
              args = new Array(al - 1);
              for (j = 1; j < al; j++)
                args[j - 1] = arguments[j];
            }
            for (i = 0, l = handler.length; i < l; i++) {
              this.event = type;
              switch (al) {
                case 1:
                  promises.push(handler[i].call(this));
                  break;
                case 2:
                  promises.push(handler[i].call(this, arguments[1]));
                  break;
                case 3:
                  promises.push(handler[i].call(this, arguments[1], arguments[2]));
                  break;
                default:
                  promises.push(handler[i].apply(this, args));
              }
            }
          } else if (!this.ignoreErrors && !this._all && type === "error") {
            if (arguments[1] instanceof Error) {
              return Promise.reject(arguments[1]);
            } else {
              return Promise.reject("Uncaught, unspecified 'error' event.");
            }
          }
          return Promise.all(promises);
        };
        EventEmitter.prototype.on = function(type, listener, options) {
          return this._on(type, listener, false, options);
        };
        EventEmitter.prototype.prependListener = function(type, listener, options) {
          return this._on(type, listener, true, options);
        };
        EventEmitter.prototype.onAny = function(fn) {
          return this._onAny(fn, false);
        };
        EventEmitter.prototype.prependAny = function(fn) {
          return this._onAny(fn, true);
        };
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype._onAny = function(fn, prepend) {
          if (typeof fn !== "function") {
            throw new Error("onAny only accepts instances of Function");
          }
          if (!this._all) {
            this._all = [];
          }
          if (prepend) {
            this._all.unshift(fn);
          } else {
            this._all.push(fn);
          }
          return this;
        };
        EventEmitter.prototype._on = function(type, listener, prepend, options) {
          if (typeof type === "function") {
            this._onAny(type, listener);
            return this;
          }
          if (typeof listener !== "function") {
            throw new Error("on only accepts instances of Function");
          }
          this._events || init.call(this);
          var returnValue = this, temp;
          if (options !== undefined2) {
            temp = setupListener.call(this, type, listener, options);
            listener = temp[0];
            returnValue = temp[1];
          }
          if (this._newListener) {
            this.emit("newListener", type, listener);
          }
          if (this.wildcard) {
            growListenerTree.call(this, type, listener, prepend);
            return returnValue;
          }
          if (!this._events[type]) {
            this._events[type] = listener;
          } else {
            if (typeof this._events[type] === "function") {
              this._events[type] = [this._events[type]];
            }
            if (prepend) {
              this._events[type].unshift(listener);
            } else {
              this._events[type].push(listener);
            }
            if (!this._events[type].warned && this._maxListeners > 0 && this._events[type].length > this._maxListeners) {
              this._events[type].warned = true;
              logPossibleMemoryLeak.call(this, this._events[type].length, type);
            }
          }
          return returnValue;
        };
        EventEmitter.prototype.off = function(type, listener) {
          if (typeof listener !== "function") {
            throw new Error("removeListener only takes instances of Function");
          }
          var handlers, leafs = [];
          if (this.wildcard) {
            var ns = typeof type === "string" ? type.split(this.delimiter) : type.slice();
            leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
            if (!leafs)
              return this;
          } else {
            if (!this._events[type])
              return this;
            handlers = this._events[type];
            leafs.push({ _listeners: handlers });
          }
          for (var iLeaf = 0; iLeaf < leafs.length; iLeaf++) {
            var leaf = leafs[iLeaf];
            handlers = leaf._listeners;
            if (isArray(handlers)) {
              var position = -1;
              for (var i = 0, length = handlers.length; i < length; i++) {
                if (handlers[i] === listener || handlers[i].listener && handlers[i].listener === listener || handlers[i]._origin && handlers[i]._origin === listener) {
                  position = i;
                  break;
                }
              }
              if (position < 0) {
                continue;
              }
              if (this.wildcard) {
                leaf._listeners.splice(position, 1);
              } else {
                this._events[type].splice(position, 1);
              }
              if (handlers.length === 0) {
                if (this.wildcard) {
                  delete leaf._listeners;
                } else {
                  delete this._events[type];
                }
              }
              if (this._removeListener)
                this.emit("removeListener", type, listener);
              return this;
            } else if (handlers === listener || handlers.listener && handlers.listener === listener || handlers._origin && handlers._origin === listener) {
              if (this.wildcard) {
                delete leaf._listeners;
              } else {
                delete this._events[type];
              }
              if (this._removeListener)
                this.emit("removeListener", type, listener);
            }
          }
          this.listenerTree && recursivelyGarbageCollect(this.listenerTree);
          return this;
        };
        EventEmitter.prototype.offAny = function(fn) {
          var i = 0, l = 0, fns;
          if (fn && this._all && this._all.length > 0) {
            fns = this._all;
            for (i = 0, l = fns.length; i < l; i++) {
              if (fn === fns[i]) {
                fns.splice(i, 1);
                if (this._removeListener)
                  this.emit("removeListenerAny", fn);
                return this;
              }
            }
          } else {
            fns = this._all;
            if (this._removeListener) {
              for (i = 0, l = fns.length; i < l; i++)
                this.emit("removeListenerAny", fns[i]);
            }
            this._all = [];
          }
          return this;
        };
        EventEmitter.prototype.removeListener = EventEmitter.prototype.off;
        EventEmitter.prototype.removeAllListeners = function(type) {
          if (type === undefined2) {
            !this._events || init.call(this);
            return this;
          }
          if (this.wildcard) {
            var leafs = searchListenerTree.call(this, null, type, this.listenerTree, 0), leaf, i;
            if (!leafs)
              return this;
            for (i = 0; i < leafs.length; i++) {
              leaf = leafs[i];
              leaf._listeners = null;
            }
            this.listenerTree && recursivelyGarbageCollect(this.listenerTree);
          } else if (this._events) {
            this._events[type] = null;
          }
          return this;
        };
        EventEmitter.prototype.listeners = function(type) {
          var _events = this._events;
          var keys, listeners, allListeners;
          var i;
          var listenerTree;
          if (type === undefined2) {
            if (this.wildcard) {
              throw Error("event name required for wildcard emitter");
            }
            if (!_events) {
              return [];
            }
            keys = ownKeys(_events);
            i = keys.length;
            allListeners = [];
            while (i-- > 0) {
              listeners = _events[keys[i]];
              if (typeof listeners === "function") {
                allListeners.push(listeners);
              } else {
                allListeners.push.apply(allListeners, listeners);
              }
            }
            return allListeners;
          } else {
            if (this.wildcard) {
              listenerTree = this.listenerTree;
              if (!listenerTree)
                return [];
              var handlers = [];
              var ns = typeof type === "string" ? type.split(this.delimiter) : type.slice();
              searchListenerTree.call(this, handlers, ns, listenerTree, 0);
              return handlers;
            }
            if (!_events) {
              return [];
            }
            listeners = _events[type];
            if (!listeners) {
              return [];
            }
            return typeof listeners === "function" ? [listeners] : listeners;
          }
        };
        EventEmitter.prototype.eventNames = function(nsAsArray) {
          var _events = this._events;
          return this.wildcard ? collectTreeEvents.call(this, this.listenerTree, [], null, nsAsArray) : _events ? ownKeys(_events) : [];
        };
        EventEmitter.prototype.listenerCount = function(type) {
          return this.listeners(type).length;
        };
        EventEmitter.prototype.hasListeners = function(type) {
          if (this.wildcard) {
            var handlers = [];
            var ns = typeof type === "string" ? type.split(this.delimiter) : type.slice();
            searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
            return handlers.length > 0;
          }
          var _events = this._events;
          var _all = this._all;
          return !!(_all && _all.length || _events && (type === undefined2 ? ownKeys(_events).length : _events[type]));
        };
        EventEmitter.prototype.listenersAny = function() {
          if (this._all) {
            return this._all;
          } else {
            return [];
          }
        };
        EventEmitter.prototype.waitFor = function(event, options) {
          var self2 = this;
          var type = typeof options;
          if (type === "number") {
            options = { timeout: options };
          } else if (type === "function") {
            options = { filter: options };
          }
          options = resolveOptions(options, {
            timeout: 0,
            filter: undefined2,
            handleError: false,
            Promise,
            overload: false
          }, {
            filter: functionReducer,
            Promise: constructorReducer
          });
          return makeCancelablePromise(options.Promise, function(resolve, reject, onCancel) {
            function listener() {
              var filter = options.filter;
              if (filter && !filter.apply(self2, arguments)) {
                return;
              }
              self2.off(event, listener);
              if (options.handleError) {
                var err = arguments[0];
                err ? reject(err) : resolve(toArray.apply(null, arguments).slice(1));
              } else {
                resolve(toArray.apply(null, arguments));
              }
            }
            __name(listener, "listener");
            onCancel(function() {
              self2.off(event, listener);
            });
            self2._on(event, listener, false);
          }, {
            timeout: options.timeout,
            overload: options.overload
          });
        };
        function once(emitter, name, options) {
          options = resolveOptions(options, {
            Promise,
            timeout: 0,
            overload: false
          }, {
            Promise: constructorReducer
          });
          var _Promise = options.Promise;
          return makeCancelablePromise(_Promise, function(resolve, reject, onCancel) {
            var handler;
            if (typeof emitter.addEventListener === "function") {
              handler = /* @__PURE__ */ __name(function() {
                resolve(toArray.apply(null, arguments));
              }, "handler");
              onCancel(function() {
                emitter.removeEventListener(name, handler);
              });
              emitter.addEventListener(
                name,
                handler,
                { once: true }
              );
              return;
            }
            var eventListener = /* @__PURE__ */ __name(function() {
              errorListener && emitter.removeListener("error", errorListener);
              resolve(toArray.apply(null, arguments));
            }, "eventListener");
            var errorListener;
            if (name !== "error") {
              errorListener = /* @__PURE__ */ __name(function(err) {
                emitter.removeListener(name, eventListener);
                reject(err);
              }, "errorListener");
              emitter.once("error", errorListener);
            }
            onCancel(function() {
              errorListener && emitter.removeListener("error", errorListener);
              emitter.removeListener(name, eventListener);
            });
            emitter.once(name, eventListener);
          }, {
            timeout: options.timeout,
            overload: options.overload
          });
        }
        __name(once, "once");
        var prototype = EventEmitter.prototype;
        Object.defineProperties(EventEmitter, {
          defaultMaxListeners: {
            get: function() {
              return prototype._maxListeners;
            },
            set: function(n) {
              if (typeof n !== "number" || n < 0 || Number.isNaN(n)) {
                throw TypeError("n must be a non-negative number");
              }
              prototype._maxListeners = n;
            },
            enumerable: true
          },
          once: {
            value: once,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperties(prototype, {
          _maxListeners: {
            value: defaultMaxListeners,
            writable: true,
            configurable: true
          },
          _observers: { value: null, writable: true, configurable: true }
        });
        if (typeof define === "function" && define.amd) {
          define(function() {
            return EventEmitter;
          });
        } else if (typeof exports2 === "object") {
          module.exports = EventEmitter;
        } else {
          var _global = new Function("", "return this")();
          _global.EventEmitter2 = EventEmitter;
        }
      }();
    }
  });

  // ../../node_modules/@vxframework/core/dist/types/provider.js
  var require_provider = __commonJS({
    "../../node_modules/@vxframework/core/dist/types/provider.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
    }
  });

  // ../../node_modules/@vxframework/core/dist/types/cheks.js
  var require_cheks = __commonJS({
    "../../node_modules/@vxframework/core/dist/types/cheks.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.getConstructor = exports2.isConstructor = exports2.isProvider = void 0;
      var isProvider = /* @__PURE__ */ __name((provider) => typeof provider === "object", "isProvider");
      exports2.isProvider = isProvider;
      var isConstructor = /* @__PURE__ */ __name((provider) => typeof provider === "function", "isConstructor");
      exports2.isConstructor = isConstructor;
      var getConstructor = /* @__PURE__ */ __name((provider) => (0, exports2.isConstructor)(provider) ? provider : provider.constructor, "getConstructor");
      exports2.getConstructor = getConstructor;
    }
  });

  // ../../node_modules/@vxframework/core/dist/types/func.js
  var require_func = __commonJS({
    "../../node_modules/@vxframework/core/dist/types/func.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
    }
  });

  // ../../node_modules/@vxframework/core/dist/types/index.js
  var require_types = __commonJS({
    "../../node_modules/@vxframework/core/dist/types/index.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
            __createBinding(exports3, m, p);
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      __exportStar(require_provider(), exports2);
      __exportStar(require_cheks(), exports2);
      __exportStar(require_func(), exports2);
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/handlers/tags.js
  var require_tags = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/handlers/tags.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.RESOUCE_EMITTER_TAG = exports2.LOGGER_TAG = exports2.GUARD_TAG = exports2.EXCEPTION_HANDLER_TAG = exports2.CONTROLLER_TAG = exports2.SCANNER_TAG = void 0;
      exports2.SCANNER_TAG = Symbol("SCANNER");
      exports2.CONTROLLER_TAG = Symbol("SCANNER");
      exports2.EXCEPTION_HANDLER_TAG = Symbol("EXCEPTION_HANDLER");
      exports2.GUARD_TAG = Symbol("GUARD");
      exports2.LOGGER_TAG = Symbol("LOGGER");
      exports2.RESOUCE_EMITTER_TAG = Symbol("RESOUCE_EMITTER");
    }
  });

  // ../../node_modules/@vxframework/core/dist/utils/metadata-utils.js
  var require_metadata_utils = __commonJS({
    "../../node_modules/@vxframework/core/dist/utils/metadata-utils.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.getProviderMetadata = exports2.setProviderMetadata = void 0;
      var types_1 = require_types();
      var METADATA_BACKING_FIELD = Symbol("METADATA_BACKING_FIELD");
      var setProviderMetadata = /* @__PURE__ */ __name((target, metadataKey, metadataValue) => {
        const ctor = (0, types_1.getConstructor)(target);
        if (!Reflect.has(ctor, METADATA_BACKING_FIELD)) {
          Reflect.set(ctor, METADATA_BACKING_FIELD, /* @__PURE__ */ new Map());
        }
        const metadataStorage = Reflect.get(ctor, METADATA_BACKING_FIELD);
        const value = metadataStorage.get(metadataKey);
        if (!value) {
          metadataStorage.set(metadataKey, [metadataValue]);
        } else {
          value.push(metadataValue);
        }
      }, "setProviderMetadata");
      exports2.setProviderMetadata = setProviderMetadata;
      var getProviderMetadata = /* @__PURE__ */ __name((target, metadataKey) => {
        var _a;
        const ctor = (0, types_1.getConstructor)(target);
        const map = Reflect.get(ctor, METADATA_BACKING_FIELD);
        return (_a = map === null || map === void 0 ? void 0 : map.get(metadataKey)) !== null && _a !== void 0 ? _a : [];
      }, "getProviderMetadata");
      exports2.getProviderMetadata = getProviderMetadata;
    }
  });

  // ../../node_modules/@vxframework/core/dist/utils/index.js
  var require_utils = __commonJS({
    "../../node_modules/@vxframework/core/dist/utils/index.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
            __createBinding(exports3, m, p);
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.sleep = void 0;
      __exportStar(require_metadata_utils(), exports2);
      var sleep = /* @__PURE__ */ __name((ms) => new Promise((resolve) => setTimeout(resolve, ms)), "sleep");
      exports2.sleep = sleep;
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/handlers/decorators.js
  var require_decorators = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/handlers/decorators.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Exported = exports2.OnChat = exports2.OnResourceEvent = exports2.OnNetEvent = exports2.OnEvent = exports2.createScannedDecorator = void 0;
      var utils_1 = require_utils();
      var createScannedDecorator = /* @__PURE__ */ __name((key, transformer) => {
        const decorator = /* @__PURE__ */ __name((...args) => (target, methodName) => {
          (0, utils_1.setProviderMetadata)(target, key, transformer(methodName, ...args));
        }, "decorator");
        decorator.METADATA_KEY = key;
        return decorator;
      }, "createScannedDecorator");
      exports2.createScannedDecorator = createScannedDecorator;
      exports2.OnEvent = (0, exports2.createScannedDecorator)(Symbol("OnEvent"), (methodName, eventName) => {
        return {
          methodName,
          eventName
        };
      });
      exports2.OnNetEvent = (0, exports2.createScannedDecorator)(Symbol("OnNetEvent"), (methodName, eventName) => {
        return {
          methodName,
          eventName
        };
      });
      exports2.OnResourceEvent = (0, exports2.createScannedDecorator)(Symbol("OnResourceEvent"), (methodName, eventName) => {
        return {
          methodName,
          eventName
        };
      });
      exports2.OnChat = (0, exports2.createScannedDecorator)(Symbol("OnChatCommand"), (methodName, commandName, isRestricted) => {
        return {
          methodName,
          commandName,
          isRestricted: isRestricted !== null && isRestricted !== void 0 ? isRestricted : false
        };
      });
      exports2.Exported = (0, exports2.createScannedDecorator)(Symbol("Exported"), (methodName, exportName) => {
        return {
          methodName,
          exportName
        };
      });
    }
  });

  // ../../node_modules/inversify/lib/constants/metadata_keys.js
  var require_metadata_keys = __commonJS({
    "../../node_modules/inversify/lib/constants/metadata_keys.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.NON_CUSTOM_TAG_KEYS = exports2.PRE_DESTROY = exports2.POST_CONSTRUCT = exports2.DESIGN_PARAM_TYPES = exports2.PARAM_TYPES = exports2.TAGGED_PROP = exports2.TAGGED = exports2.MULTI_INJECT_TAG = exports2.INJECT_TAG = exports2.OPTIONAL_TAG = exports2.UNMANAGED_TAG = exports2.NAME_TAG = exports2.NAMED_TAG = void 0;
      exports2.NAMED_TAG = "named";
      exports2.NAME_TAG = "name";
      exports2.UNMANAGED_TAG = "unmanaged";
      exports2.OPTIONAL_TAG = "optional";
      exports2.INJECT_TAG = "inject";
      exports2.MULTI_INJECT_TAG = "multi_inject";
      exports2.TAGGED = "inversify:tagged";
      exports2.TAGGED_PROP = "inversify:tagged_props";
      exports2.PARAM_TYPES = "inversify:paramtypes";
      exports2.DESIGN_PARAM_TYPES = "design:paramtypes";
      exports2.POST_CONSTRUCT = "post_construct";
      exports2.PRE_DESTROY = "pre_destroy";
      function getNonCustomTagKeys() {
        return [
          exports2.INJECT_TAG,
          exports2.MULTI_INJECT_TAG,
          exports2.NAME_TAG,
          exports2.UNMANAGED_TAG,
          exports2.NAMED_TAG,
          exports2.OPTIONAL_TAG
        ];
      }
      __name(getNonCustomTagKeys, "getNonCustomTagKeys");
      exports2.NON_CUSTOM_TAG_KEYS = getNonCustomTagKeys();
    }
  });

  // ../../node_modules/inversify/lib/constants/literal_types.js
  var require_literal_types = __commonJS({
    "../../node_modules/inversify/lib/constants/literal_types.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.TargetTypeEnum = exports2.BindingTypeEnum = exports2.BindingScopeEnum = void 0;
      var BindingScopeEnum = {
        Request: "Request",
        Singleton: "Singleton",
        Transient: "Transient"
      };
      exports2.BindingScopeEnum = BindingScopeEnum;
      var BindingTypeEnum = {
        ConstantValue: "ConstantValue",
        Constructor: "Constructor",
        DynamicValue: "DynamicValue",
        Factory: "Factory",
        Function: "Function",
        Instance: "Instance",
        Invalid: "Invalid",
        Provider: "Provider"
      };
      exports2.BindingTypeEnum = BindingTypeEnum;
      var TargetTypeEnum = {
        ClassProperty: "ClassProperty",
        ConstructorArgument: "ConstructorArgument",
        Variable: "Variable"
      };
      exports2.TargetTypeEnum = TargetTypeEnum;
    }
  });

  // ../../node_modules/inversify/lib/utils/id.js
  var require_id = __commonJS({
    "../../node_modules/inversify/lib/utils/id.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.id = void 0;
      var idCounter = 0;
      function id() {
        return idCounter++;
      }
      __name(id, "id");
      exports2.id = id;
    }
  });

  // ../../node_modules/inversify/lib/bindings/binding.js
  var require_binding = __commonJS({
    "../../node_modules/inversify/lib/bindings/binding.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Binding = void 0;
      var literal_types_1 = require_literal_types();
      var id_1 = require_id();
      var Binding = function() {
        function Binding2(serviceIdentifier, scope) {
          this.id = (0, id_1.id)();
          this.activated = false;
          this.serviceIdentifier = serviceIdentifier;
          this.scope = scope;
          this.type = literal_types_1.BindingTypeEnum.Invalid;
          this.constraint = function(request) {
            return true;
          };
          this.implementationType = null;
          this.cache = null;
          this.factory = null;
          this.provider = null;
          this.onActivation = null;
          this.onDeactivation = null;
          this.dynamicValue = null;
        }
        __name(Binding2, "Binding");
        Binding2.prototype.clone = function() {
          var clone = new Binding2(this.serviceIdentifier, this.scope);
          clone.activated = clone.scope === literal_types_1.BindingScopeEnum.Singleton ? this.activated : false;
          clone.implementationType = this.implementationType;
          clone.dynamicValue = this.dynamicValue;
          clone.scope = this.scope;
          clone.type = this.type;
          clone.factory = this.factory;
          clone.provider = this.provider;
          clone.constraint = this.constraint;
          clone.onActivation = this.onActivation;
          clone.onDeactivation = this.onDeactivation;
          clone.cache = this.cache;
          return clone;
        };
        return Binding2;
      }();
      exports2.Binding = Binding;
    }
  });

  // ../../node_modules/inversify/lib/constants/error_msgs.js
  var require_error_msgs = __commonJS({
    "../../node_modules/inversify/lib/constants/error_msgs.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.STACK_OVERFLOW = exports2.CIRCULAR_DEPENDENCY_IN_FACTORY = exports2.ON_DEACTIVATION_ERROR = exports2.PRE_DESTROY_ERROR = exports2.POST_CONSTRUCT_ERROR = exports2.ASYNC_UNBIND_REQUIRED = exports2.MULTIPLE_POST_CONSTRUCT_METHODS = exports2.MULTIPLE_PRE_DESTROY_METHODS = exports2.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = exports2.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = exports2.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = exports2.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = exports2.ARGUMENTS_LENGTH_MISMATCH = exports2.INVALID_DECORATOR_OPERATION = exports2.INVALID_TO_SELF_VALUE = exports2.LAZY_IN_SYNC = exports2.INVALID_FUNCTION_BINDING = exports2.INVALID_MIDDLEWARE_RETURN = exports2.NO_MORE_SNAPSHOTS_AVAILABLE = exports2.INVALID_BINDING_TYPE = exports2.NOT_IMPLEMENTED = exports2.CIRCULAR_DEPENDENCY = exports2.UNDEFINED_INJECT_ANNOTATION = exports2.MISSING_INJECT_ANNOTATION = exports2.MISSING_INJECTABLE_ANNOTATION = exports2.NOT_REGISTERED = exports2.CANNOT_UNBIND = exports2.AMBIGUOUS_MATCH = exports2.KEY_NOT_FOUND = exports2.NULL_ARGUMENT = exports2.DUPLICATED_METADATA = exports2.DUPLICATED_INJECTABLE_DECORATOR = void 0;
      exports2.DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times.";
      exports2.DUPLICATED_METADATA = "Metadata key was used more than once in a parameter:";
      exports2.NULL_ARGUMENT = "NULL argument";
      exports2.KEY_NOT_FOUND = "Key Not Found";
      exports2.AMBIGUOUS_MATCH = "Ambiguous match found for serviceIdentifier:";
      exports2.CANNOT_UNBIND = "Could not unbind serviceIdentifier:";
      exports2.NOT_REGISTERED = "No matching bindings found for serviceIdentifier:";
      exports2.MISSING_INJECTABLE_ANNOTATION = "Missing required @injectable annotation in:";
      exports2.MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:";
      var UNDEFINED_INJECT_ANNOTATION = /* @__PURE__ */ __name(function(name) {
        return "@inject called with undefined this could mean that the class " + name + " has a circular dependency problem. You can use a LazyServiceIdentifer to  overcome this limitation.";
      }, "UNDEFINED_INJECT_ANNOTATION");
      exports2.UNDEFINED_INJECT_ANNOTATION = UNDEFINED_INJECT_ANNOTATION;
      exports2.CIRCULAR_DEPENDENCY = "Circular dependency found:";
      exports2.NOT_IMPLEMENTED = "Sorry, this feature is not fully implemented yet.";
      exports2.INVALID_BINDING_TYPE = "Invalid binding type:";
      exports2.NO_MORE_SNAPSHOTS_AVAILABLE = "No snapshot available to restore.";
      exports2.INVALID_MIDDLEWARE_RETURN = "Invalid return type in middleware. Middleware must return!";
      exports2.INVALID_FUNCTION_BINDING = "Value provided to function binding must be a function!";
      var LAZY_IN_SYNC = /* @__PURE__ */ __name(function(key) {
        return "You are attempting to construct '" + key + "' in a synchronous way\n but it has asynchronous dependencies.";
      }, "LAZY_IN_SYNC");
      exports2.LAZY_IN_SYNC = LAZY_IN_SYNC;
      exports2.INVALID_TO_SELF_VALUE = "The toSelf function can only be applied when a constructor is used as service identifier";
      exports2.INVALID_DECORATOR_OPERATION = "The @inject @multiInject @tagged and @named decorators must be applied to the parameters of a class constructor or a class property.";
      var ARGUMENTS_LENGTH_MISMATCH = /* @__PURE__ */ __name(function() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          values[_i] = arguments[_i];
        }
        return "The number of constructor arguments in the derived class " + (values[0] + " must be >= than the number of constructor arguments of its base class.");
      }, "ARGUMENTS_LENGTH_MISMATCH");
      exports2.ARGUMENTS_LENGTH_MISMATCH = ARGUMENTS_LENGTH_MISMATCH;
      exports2.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = "Invalid Container constructor argument. Container options must be an object.";
      exports2.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = "Invalid Container option. Default scope must be a string ('singleton' or 'transient').";
      exports2.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = "Invalid Container option. Auto bind injectable must be a boolean";
      exports2.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = "Invalid Container option. Skip base check must be a boolean";
      exports2.MULTIPLE_PRE_DESTROY_METHODS = "Cannot apply @preDestroy decorator multiple times in the same class";
      exports2.MULTIPLE_POST_CONSTRUCT_METHODS = "Cannot apply @postConstruct decorator multiple times in the same class";
      exports2.ASYNC_UNBIND_REQUIRED = "Attempting to unbind dependency with asynchronous destruction (@preDestroy or onDeactivation)";
      var POST_CONSTRUCT_ERROR = /* @__PURE__ */ __name(function(clazz, errorMessage) {
        return "@postConstruct error in class " + clazz + ": " + errorMessage;
      }, "POST_CONSTRUCT_ERROR");
      exports2.POST_CONSTRUCT_ERROR = POST_CONSTRUCT_ERROR;
      var PRE_DESTROY_ERROR = /* @__PURE__ */ __name(function(clazz, errorMessage) {
        return "@preDestroy error in class " + clazz + ": " + errorMessage;
      }, "PRE_DESTROY_ERROR");
      exports2.PRE_DESTROY_ERROR = PRE_DESTROY_ERROR;
      var ON_DEACTIVATION_ERROR = /* @__PURE__ */ __name(function(clazz, errorMessage) {
        return "onDeactivation() error in class " + clazz + ": " + errorMessage;
      }, "ON_DEACTIVATION_ERROR");
      exports2.ON_DEACTIVATION_ERROR = ON_DEACTIVATION_ERROR;
      var CIRCULAR_DEPENDENCY_IN_FACTORY = /* @__PURE__ */ __name(function(factoryType, serviceIdentifier) {
        return "It looks like there is a circular dependency in one of the '" + factoryType + "' bindings. Please investigate bindings with" + ("service identifier '" + serviceIdentifier + "'.");
      }, "CIRCULAR_DEPENDENCY_IN_FACTORY");
      exports2.CIRCULAR_DEPENDENCY_IN_FACTORY = CIRCULAR_DEPENDENCY_IN_FACTORY;
      exports2.STACK_OVERFLOW = "Maximum call stack size exceeded";
    }
  });

  // ../../node_modules/inversify/lib/planning/metadata_reader.js
  var require_metadata_reader = __commonJS({
    "../../node_modules/inversify/lib/planning/metadata_reader.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.MetadataReader = void 0;
      var METADATA_KEY = __importStar(require_metadata_keys());
      var MetadataReader = function() {
        function MetadataReader2() {
        }
        __name(MetadataReader2, "MetadataReader");
        MetadataReader2.prototype.getConstructorMetadata = function(constructorFunc) {
          var compilerGeneratedMetadata = Reflect.getMetadata(METADATA_KEY.PARAM_TYPES, constructorFunc);
          var userGeneratedMetadata = Reflect.getMetadata(METADATA_KEY.TAGGED, constructorFunc);
          return {
            compilerGeneratedMetadata,
            userGeneratedMetadata: userGeneratedMetadata || {}
          };
        };
        MetadataReader2.prototype.getPropertiesMetadata = function(constructorFunc) {
          var userGeneratedMetadata = Reflect.getMetadata(METADATA_KEY.TAGGED_PROP, constructorFunc) || [];
          return userGeneratedMetadata;
        };
        return MetadataReader2;
      }();
      exports2.MetadataReader = MetadataReader;
    }
  });

  // ../../node_modules/inversify/lib/bindings/binding_count.js
  var require_binding_count = __commonJS({
    "../../node_modules/inversify/lib/bindings/binding_count.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.BindingCount = void 0;
      var BindingCount = {
        MultipleBindingsAvailable: 2,
        NoBindingsAvailable: 0,
        OnlyOneBindingAvailable: 1
      };
      exports2.BindingCount = BindingCount;
    }
  });

  // ../../node_modules/inversify/lib/utils/exceptions.js
  var require_exceptions = __commonJS({
    "../../node_modules/inversify/lib/utils/exceptions.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.tryAndThrowErrorIfStackOverflow = exports2.isStackOverflowExeption = void 0;
      var ERROR_MSGS = __importStar(require_error_msgs());
      function isStackOverflowExeption(error) {
        return error instanceof RangeError || error.message === ERROR_MSGS.STACK_OVERFLOW;
      }
      __name(isStackOverflowExeption, "isStackOverflowExeption");
      exports2.isStackOverflowExeption = isStackOverflowExeption;
      var tryAndThrowErrorIfStackOverflow = /* @__PURE__ */ __name(function(fn, errorCallback) {
        try {
          return fn();
        } catch (error) {
          if (isStackOverflowExeption(error)) {
            error = errorCallback();
          }
          throw error;
        }
      }, "tryAndThrowErrorIfStackOverflow");
      exports2.tryAndThrowErrorIfStackOverflow = tryAndThrowErrorIfStackOverflow;
    }
  });

  // ../../node_modules/inversify/lib/utils/serialization.js
  var require_serialization = __commonJS({
    "../../node_modules/inversify/lib/utils/serialization.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.getSymbolDescription = exports2.circularDependencyToException = exports2.listMetadataForTarget = exports2.listRegisteredBindingsForServiceIdentifier = exports2.getServiceIdentifierAsString = exports2.getFunctionName = void 0;
      var ERROR_MSGS = __importStar(require_error_msgs());
      function getServiceIdentifierAsString(serviceIdentifier) {
        if (typeof serviceIdentifier === "function") {
          var _serviceIdentifier = serviceIdentifier;
          return _serviceIdentifier.name;
        } else if (typeof serviceIdentifier === "symbol") {
          return serviceIdentifier.toString();
        } else {
          var _serviceIdentifier = serviceIdentifier;
          return _serviceIdentifier;
        }
      }
      __name(getServiceIdentifierAsString, "getServiceIdentifierAsString");
      exports2.getServiceIdentifierAsString = getServiceIdentifierAsString;
      function listRegisteredBindingsForServiceIdentifier(container, serviceIdentifier, getBindings) {
        var registeredBindingsList = "";
        var registeredBindings = getBindings(container, serviceIdentifier);
        if (registeredBindings.length !== 0) {
          registeredBindingsList = "\nRegistered bindings:";
          registeredBindings.forEach(function(binding) {
            var name = "Object";
            if (binding.implementationType !== null) {
              name = getFunctionName(binding.implementationType);
            }
            registeredBindingsList = registeredBindingsList + "\n " + name;
            if (binding.constraint.metaData) {
              registeredBindingsList = registeredBindingsList + " - " + binding.constraint.metaData;
            }
          });
        }
        return registeredBindingsList;
      }
      __name(listRegisteredBindingsForServiceIdentifier, "listRegisteredBindingsForServiceIdentifier");
      exports2.listRegisteredBindingsForServiceIdentifier = listRegisteredBindingsForServiceIdentifier;
      function alreadyDependencyChain(request, serviceIdentifier) {
        if (request.parentRequest === null) {
          return false;
        } else if (request.parentRequest.serviceIdentifier === serviceIdentifier) {
          return true;
        } else {
          return alreadyDependencyChain(request.parentRequest, serviceIdentifier);
        }
      }
      __name(alreadyDependencyChain, "alreadyDependencyChain");
      function dependencyChainToString(request) {
        function _createStringArr(req, result) {
          if (result === void 0) {
            result = [];
          }
          var serviceIdentifier = getServiceIdentifierAsString(req.serviceIdentifier);
          result.push(serviceIdentifier);
          if (req.parentRequest !== null) {
            return _createStringArr(req.parentRequest, result);
          }
          return result;
        }
        __name(_createStringArr, "_createStringArr");
        var stringArr = _createStringArr(request);
        return stringArr.reverse().join(" --> ");
      }
      __name(dependencyChainToString, "dependencyChainToString");
      function circularDependencyToException(request) {
        request.childRequests.forEach(function(childRequest) {
          if (alreadyDependencyChain(childRequest, childRequest.serviceIdentifier)) {
            var services = dependencyChainToString(childRequest);
            throw new Error(ERROR_MSGS.CIRCULAR_DEPENDENCY + " " + services);
          } else {
            circularDependencyToException(childRequest);
          }
        });
      }
      __name(circularDependencyToException, "circularDependencyToException");
      exports2.circularDependencyToException = circularDependencyToException;
      function listMetadataForTarget(serviceIdentifierString, target) {
        if (target.isTagged() || target.isNamed()) {
          var m_1 = "";
          var namedTag = target.getNamedTag();
          var otherTags = target.getCustomTags();
          if (namedTag !== null) {
            m_1 += namedTag.toString() + "\n";
          }
          if (otherTags !== null) {
            otherTags.forEach(function(tag) {
              m_1 += tag.toString() + "\n";
            });
          }
          return " " + serviceIdentifierString + "\n " + serviceIdentifierString + " - " + m_1;
        } else {
          return " " + serviceIdentifierString;
        }
      }
      __name(listMetadataForTarget, "listMetadataForTarget");
      exports2.listMetadataForTarget = listMetadataForTarget;
      function getFunctionName(func) {
        if (func.name) {
          return func.name;
        } else {
          var name_1 = func.toString();
          var match = name_1.match(/^function\s*([^\s(]+)/);
          return match ? match[1] : "Anonymous function: " + name_1;
        }
      }
      __name(getFunctionName, "getFunctionName");
      exports2.getFunctionName = getFunctionName;
      function getSymbolDescription(symbol) {
        return symbol.toString().slice(7, -1);
      }
      __name(getSymbolDescription, "getSymbolDescription");
      exports2.getSymbolDescription = getSymbolDescription;
    }
  });

  // ../../node_modules/inversify/lib/planning/context.js
  var require_context = __commonJS({
    "../../node_modules/inversify/lib/planning/context.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Context = void 0;
      var id_1 = require_id();
      var Context = function() {
        function Context2(container) {
          this.id = (0, id_1.id)();
          this.container = container;
        }
        __name(Context2, "Context");
        Context2.prototype.addPlan = function(plan) {
          this.plan = plan;
        };
        Context2.prototype.setCurrentRequest = function(currentRequest) {
          this.currentRequest = currentRequest;
        };
        return Context2;
      }();
      exports2.Context = Context;
    }
  });

  // ../../node_modules/inversify/lib/planning/metadata.js
  var require_metadata = __commonJS({
    "../../node_modules/inversify/lib/planning/metadata.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Metadata = void 0;
      var METADATA_KEY = __importStar(require_metadata_keys());
      var Metadata = function() {
        function Metadata2(key, value) {
          this.key = key;
          this.value = value;
        }
        __name(Metadata2, "Metadata");
        Metadata2.prototype.toString = function() {
          if (this.key === METADATA_KEY.NAMED_TAG) {
            return "named: " + String(this.value).toString() + " ";
          } else {
            return "tagged: { key:" + this.key.toString() + ", value: " + String(this.value) + " }";
          }
        };
        return Metadata2;
      }();
      exports2.Metadata = Metadata;
    }
  });

  // ../../node_modules/inversify/lib/planning/plan.js
  var require_plan = __commonJS({
    "../../node_modules/inversify/lib/planning/plan.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Plan = void 0;
      var Plan = function() {
        function Plan2(parentContext, rootRequest) {
          this.parentContext = parentContext;
          this.rootRequest = rootRequest;
        }
        __name(Plan2, "Plan");
        return Plan2;
      }();
      exports2.Plan = Plan;
    }
  });

  // ../../node_modules/inversify/lib/annotation/lazy_service_identifier.js
  var require_lazy_service_identifier = __commonJS({
    "../../node_modules/inversify/lib/annotation/lazy_service_identifier.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.LazyServiceIdentifer = void 0;
      var LazyServiceIdentifer = function() {
        function LazyServiceIdentifer2(cb) {
          this._cb = cb;
        }
        __name(LazyServiceIdentifer2, "LazyServiceIdentifer");
        LazyServiceIdentifer2.prototype.unwrap = function() {
          return this._cb();
        };
        return LazyServiceIdentifer2;
      }();
      exports2.LazyServiceIdentifer = LazyServiceIdentifer;
    }
  });

  // ../../node_modules/inversify/lib/planning/queryable_string.js
  var require_queryable_string = __commonJS({
    "../../node_modules/inversify/lib/planning/queryable_string.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.QueryableString = void 0;
      var QueryableString = function() {
        function QueryableString2(str) {
          this.str = str;
        }
        __name(QueryableString2, "QueryableString");
        QueryableString2.prototype.startsWith = function(searchString) {
          return this.str.indexOf(searchString) === 0;
        };
        QueryableString2.prototype.endsWith = function(searchString) {
          var reverseString = "";
          var reverseSearchString = searchString.split("").reverse().join("");
          reverseString = this.str.split("").reverse().join("");
          return this.startsWith.call({ str: reverseString }, reverseSearchString);
        };
        QueryableString2.prototype.contains = function(searchString) {
          return this.str.indexOf(searchString) !== -1;
        };
        QueryableString2.prototype.equals = function(compareString) {
          return this.str === compareString;
        };
        QueryableString2.prototype.value = function() {
          return this.str;
        };
        return QueryableString2;
      }();
      exports2.QueryableString = QueryableString;
    }
  });

  // ../../node_modules/inversify/lib/planning/target.js
  var require_target = __commonJS({
    "../../node_modules/inversify/lib/planning/target.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Target = void 0;
      var METADATA_KEY = __importStar(require_metadata_keys());
      var id_1 = require_id();
      var serialization_1 = require_serialization();
      var metadata_1 = require_metadata();
      var queryable_string_1 = require_queryable_string();
      var Target = function() {
        function Target2(type, identifier, serviceIdentifier, namedOrTagged) {
          this.id = (0, id_1.id)();
          this.type = type;
          this.serviceIdentifier = serviceIdentifier;
          var queryableName = typeof identifier === "symbol" ? (0, serialization_1.getSymbolDescription)(identifier) : identifier;
          this.name = new queryable_string_1.QueryableString(queryableName || "");
          this.identifier = identifier;
          this.metadata = new Array();
          var metadataItem = null;
          if (typeof namedOrTagged === "string") {
            metadataItem = new metadata_1.Metadata(METADATA_KEY.NAMED_TAG, namedOrTagged);
          } else if (namedOrTagged instanceof metadata_1.Metadata) {
            metadataItem = namedOrTagged;
          }
          if (metadataItem !== null) {
            this.metadata.push(metadataItem);
          }
        }
        __name(Target2, "Target");
        Target2.prototype.hasTag = function(key) {
          for (var _i = 0, _a = this.metadata; _i < _a.length; _i++) {
            var m = _a[_i];
            if (m.key === key) {
              return true;
            }
          }
          return false;
        };
        Target2.prototype.isArray = function() {
          return this.hasTag(METADATA_KEY.MULTI_INJECT_TAG);
        };
        Target2.prototype.matchesArray = function(name) {
          return this.matchesTag(METADATA_KEY.MULTI_INJECT_TAG)(name);
        };
        Target2.prototype.isNamed = function() {
          return this.hasTag(METADATA_KEY.NAMED_TAG);
        };
        Target2.prototype.isTagged = function() {
          return this.metadata.some(function(metadata) {
            return METADATA_KEY.NON_CUSTOM_TAG_KEYS.every(function(key) {
              return metadata.key !== key;
            });
          });
        };
        Target2.prototype.isOptional = function() {
          return this.matchesTag(METADATA_KEY.OPTIONAL_TAG)(true);
        };
        Target2.prototype.getNamedTag = function() {
          if (this.isNamed()) {
            return this.metadata.filter(function(m) {
              return m.key === METADATA_KEY.NAMED_TAG;
            })[0];
          }
          return null;
        };
        Target2.prototype.getCustomTags = function() {
          if (this.isTagged()) {
            return this.metadata.filter(function(metadata) {
              return METADATA_KEY.NON_CUSTOM_TAG_KEYS.every(function(key) {
                return metadata.key !== key;
              });
            });
          } else {
            return null;
          }
        };
        Target2.prototype.matchesNamedTag = function(name) {
          return this.matchesTag(METADATA_KEY.NAMED_TAG)(name);
        };
        Target2.prototype.matchesTag = function(key) {
          var _this = this;
          return function(value) {
            for (var _i = 0, _a = _this.metadata; _i < _a.length; _i++) {
              var m = _a[_i];
              if (m.key === key && m.value === value) {
                return true;
              }
            }
            return false;
          };
        };
        return Target2;
      }();
      exports2.Target = Target;
    }
  });

  // ../../node_modules/inversify/lib/planning/reflection_utils.js
  var require_reflection_utils = __commonJS({
    "../../node_modules/inversify/lib/planning/reflection_utils.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __spreadArray = exports2 && exports2.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.getFunctionName = exports2.getBaseClassDependencyCount = exports2.getDependencies = void 0;
      var lazy_service_identifier_1 = require_lazy_service_identifier();
      var ERROR_MSGS = __importStar(require_error_msgs());
      var literal_types_1 = require_literal_types();
      var METADATA_KEY = __importStar(require_metadata_keys());
      var serialization_1 = require_serialization();
      Object.defineProperty(exports2, "getFunctionName", { enumerable: true, get: function() {
        return serialization_1.getFunctionName;
      } });
      var target_1 = require_target();
      function getDependencies(metadataReader, func) {
        var constructorName = (0, serialization_1.getFunctionName)(func);
        return getTargets(metadataReader, constructorName, func, false);
      }
      __name(getDependencies, "getDependencies");
      exports2.getDependencies = getDependencies;
      function getTargets(metadataReader, constructorName, func, isBaseClass) {
        var metadata = metadataReader.getConstructorMetadata(func);
        var serviceIdentifiers = metadata.compilerGeneratedMetadata;
        if (serviceIdentifiers === void 0) {
          var msg = ERROR_MSGS.MISSING_INJECTABLE_ANNOTATION + " " + constructorName + ".";
          throw new Error(msg);
        }
        var constructorArgsMetadata = metadata.userGeneratedMetadata;
        var keys = Object.keys(constructorArgsMetadata);
        var hasUserDeclaredUnknownInjections = func.length === 0 && keys.length > 0;
        var hasOptionalParameters = keys.length > func.length;
        var iterations = hasUserDeclaredUnknownInjections || hasOptionalParameters ? keys.length : func.length;
        var constructorTargets = getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations);
        var propertyTargets = getClassPropsAsTargets(metadataReader, func, constructorName);
        var targets = __spreadArray(__spreadArray([], constructorTargets, true), propertyTargets, true);
        return targets;
      }
      __name(getTargets, "getTargets");
      function getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata) {
        var targetMetadata = constructorArgsMetadata[index.toString()] || [];
        var metadata = formatTargetMetadata(targetMetadata);
        var isManaged = metadata.unmanaged !== true;
        var serviceIdentifier = serviceIdentifiers[index];
        var injectIdentifier = metadata.inject || metadata.multiInject;
        serviceIdentifier = injectIdentifier ? injectIdentifier : serviceIdentifier;
        if (serviceIdentifier instanceof lazy_service_identifier_1.LazyServiceIdentifer) {
          serviceIdentifier = serviceIdentifier.unwrap();
        }
        if (isManaged) {
          var isObject = serviceIdentifier === Object;
          var isFunction = serviceIdentifier === Function;
          var isUndefined = serviceIdentifier === void 0;
          var isUnknownType = isObject || isFunction || isUndefined;
          if (!isBaseClass && isUnknownType) {
            var msg = ERROR_MSGS.MISSING_INJECT_ANNOTATION + " argument " + index + " in class " + constructorName + ".";
            throw new Error(msg);
          }
          var target = new target_1.Target(literal_types_1.TargetTypeEnum.ConstructorArgument, metadata.targetName, serviceIdentifier);
          target.metadata = targetMetadata;
          return target;
        }
        return null;
      }
      __name(getConstructorArgsAsTarget, "getConstructorArgsAsTarget");
      function getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations) {
        var targets = [];
        for (var i = 0; i < iterations; i++) {
          var index = i;
          var target = getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata);
          if (target !== null) {
            targets.push(target);
          }
        }
        return targets;
      }
      __name(getConstructorArgsAsTargets, "getConstructorArgsAsTargets");
      function _getServiceIdentifierForProperty(inject, multiInject, propertyName, className) {
        var serviceIdentifier = inject || multiInject;
        if (serviceIdentifier === void 0) {
          var msg = ERROR_MSGS.MISSING_INJECTABLE_ANNOTATION + " for property " + String(propertyName) + " in class " + className + ".";
          throw new Error(msg);
        }
        return serviceIdentifier;
      }
      __name(_getServiceIdentifierForProperty, "_getServiceIdentifierForProperty");
      function getClassPropsAsTargets(metadataReader, constructorFunc, constructorName) {
        var classPropsMetadata = metadataReader.getPropertiesMetadata(constructorFunc);
        var targets = [];
        var symbolKeys = Object.getOwnPropertySymbols(classPropsMetadata);
        var stringKeys = Object.keys(classPropsMetadata);
        var keys = stringKeys.concat(symbolKeys);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
          var key = keys_1[_i];
          var targetMetadata = classPropsMetadata[key];
          var metadata = formatTargetMetadata(targetMetadata);
          var identifier = metadata.targetName || key;
          var serviceIdentifier = _getServiceIdentifierForProperty(metadata.inject, metadata.multiInject, key, constructorName);
          var target = new target_1.Target(literal_types_1.TargetTypeEnum.ClassProperty, identifier, serviceIdentifier);
          target.metadata = targetMetadata;
          targets.push(target);
        }
        var baseConstructor = Object.getPrototypeOf(constructorFunc.prototype).constructor;
        if (baseConstructor !== Object) {
          var baseTargets = getClassPropsAsTargets(metadataReader, baseConstructor, constructorName);
          targets = __spreadArray(__spreadArray([], targets, true), baseTargets, true);
        }
        return targets;
      }
      __name(getClassPropsAsTargets, "getClassPropsAsTargets");
      function getBaseClassDependencyCount(metadataReader, func) {
        var baseConstructor = Object.getPrototypeOf(func.prototype).constructor;
        if (baseConstructor !== Object) {
          var baseConstructorName = (0, serialization_1.getFunctionName)(baseConstructor);
          var targets = getTargets(metadataReader, baseConstructorName, baseConstructor, true);
          var metadata = targets.map(function(t) {
            return t.metadata.filter(function(m) {
              return m.key === METADATA_KEY.UNMANAGED_TAG;
            });
          });
          var unmanagedCount = [].concat.apply([], metadata).length;
          var dependencyCount = targets.length - unmanagedCount;
          if (dependencyCount > 0) {
            return dependencyCount;
          } else {
            return getBaseClassDependencyCount(metadataReader, baseConstructor);
          }
        } else {
          return 0;
        }
      }
      __name(getBaseClassDependencyCount, "getBaseClassDependencyCount");
      exports2.getBaseClassDependencyCount = getBaseClassDependencyCount;
      function formatTargetMetadata(targetMetadata) {
        var targetMetadataMap = {};
        targetMetadata.forEach(function(m) {
          targetMetadataMap[m.key.toString()] = m.value;
        });
        return {
          inject: targetMetadataMap[METADATA_KEY.INJECT_TAG],
          multiInject: targetMetadataMap[METADATA_KEY.MULTI_INJECT_TAG],
          targetName: targetMetadataMap[METADATA_KEY.NAME_TAG],
          unmanaged: targetMetadataMap[METADATA_KEY.UNMANAGED_TAG]
        };
      }
      __name(formatTargetMetadata, "formatTargetMetadata");
    }
  });

  // ../../node_modules/inversify/lib/planning/request.js
  var require_request = __commonJS({
    "../../node_modules/inversify/lib/planning/request.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Request = void 0;
      var id_1 = require_id();
      var Request = function() {
        function Request2(serviceIdentifier, parentContext, parentRequest, bindings, target) {
          this.id = (0, id_1.id)();
          this.serviceIdentifier = serviceIdentifier;
          this.parentContext = parentContext;
          this.parentRequest = parentRequest;
          this.target = target;
          this.childRequests = [];
          this.bindings = Array.isArray(bindings) ? bindings : [bindings];
          this.requestScope = parentRequest === null ? /* @__PURE__ */ new Map() : null;
        }
        __name(Request2, "Request");
        Request2.prototype.addChildRequest = function(serviceIdentifier, bindings, target) {
          var child = new Request2(serviceIdentifier, this.parentContext, this, bindings, target);
          this.childRequests.push(child);
          return child;
        };
        return Request2;
      }();
      exports2.Request = Request;
    }
  });

  // ../../node_modules/inversify/lib/planning/planner.js
  var require_planner = __commonJS({
    "../../node_modules/inversify/lib/planning/planner.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.getBindingDictionary = exports2.createMockRequest = exports2.plan = void 0;
      var binding_count_1 = require_binding_count();
      var ERROR_MSGS = __importStar(require_error_msgs());
      var literal_types_1 = require_literal_types();
      var METADATA_KEY = __importStar(require_metadata_keys());
      var exceptions_1 = require_exceptions();
      var serialization_1 = require_serialization();
      var context_1 = require_context();
      var metadata_1 = require_metadata();
      var plan_1 = require_plan();
      var reflection_utils_1 = require_reflection_utils();
      var request_1 = require_request();
      var target_1 = require_target();
      function getBindingDictionary(cntnr) {
        return cntnr._bindingDictionary;
      }
      __name(getBindingDictionary, "getBindingDictionary");
      exports2.getBindingDictionary = getBindingDictionary;
      function _createTarget(isMultiInject, targetType, serviceIdentifier, name, key, value) {
        var metadataKey = isMultiInject ? METADATA_KEY.MULTI_INJECT_TAG : METADATA_KEY.INJECT_TAG;
        var injectMetadata = new metadata_1.Metadata(metadataKey, serviceIdentifier);
        var target = new target_1.Target(targetType, name, serviceIdentifier, injectMetadata);
        if (key !== void 0) {
          var tagMetadata = new metadata_1.Metadata(key, value);
          target.metadata.push(tagMetadata);
        }
        return target;
      }
      __name(_createTarget, "_createTarget");
      function _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target) {
        var bindings = getBindings(context.container, target.serviceIdentifier);
        var activeBindings = [];
        if (bindings.length === binding_count_1.BindingCount.NoBindingsAvailable && context.container.options.autoBindInjectable && typeof target.serviceIdentifier === "function" && metadataReader.getConstructorMetadata(target.serviceIdentifier).compilerGeneratedMetadata) {
          context.container.bind(target.serviceIdentifier).toSelf();
          bindings = getBindings(context.container, target.serviceIdentifier);
        }
        if (!avoidConstraints) {
          activeBindings = bindings.filter(function(binding) {
            var request = new request_1.Request(binding.serviceIdentifier, context, parentRequest, binding, target);
            return binding.constraint(request);
          });
        } else {
          activeBindings = bindings;
        }
        _validateActiveBindingCount(target.serviceIdentifier, activeBindings, target, context.container);
        return activeBindings;
      }
      __name(_getActiveBindings, "_getActiveBindings");
      function _validateActiveBindingCount(serviceIdentifier, bindings, target, container) {
        switch (bindings.length) {
          case binding_count_1.BindingCount.NoBindingsAvailable:
            if (target.isOptional()) {
              return bindings;
            } else {
              var serviceIdentifierString = (0, serialization_1.getServiceIdentifierAsString)(serviceIdentifier);
              var msg = ERROR_MSGS.NOT_REGISTERED;
              msg += (0, serialization_1.listMetadataForTarget)(serviceIdentifierString, target);
              msg += (0, serialization_1.listRegisteredBindingsForServiceIdentifier)(container, serviceIdentifierString, getBindings);
              throw new Error(msg);
            }
          case binding_count_1.BindingCount.OnlyOneBindingAvailable:
            return bindings;
          case binding_count_1.BindingCount.MultipleBindingsAvailable:
          default:
            if (!target.isArray()) {
              var serviceIdentifierString = (0, serialization_1.getServiceIdentifierAsString)(serviceIdentifier);
              var msg = ERROR_MSGS.AMBIGUOUS_MATCH + " " + serviceIdentifierString;
              msg += (0, serialization_1.listRegisteredBindingsForServiceIdentifier)(container, serviceIdentifierString, getBindings);
              throw new Error(msg);
            } else {
              return bindings;
            }
        }
      }
      __name(_validateActiveBindingCount, "_validateActiveBindingCount");
      function _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, parentRequest, target) {
        var activeBindings;
        var childRequest;
        if (parentRequest === null) {
          activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, null, target);
          childRequest = new request_1.Request(serviceIdentifier, context, null, activeBindings, target);
          var thePlan = new plan_1.Plan(context, childRequest);
          context.addPlan(thePlan);
        } else {
          activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target);
          childRequest = parentRequest.addChildRequest(target.serviceIdentifier, activeBindings, target);
        }
        activeBindings.forEach(function(binding) {
          var subChildRequest = null;
          if (target.isArray()) {
            subChildRequest = childRequest.addChildRequest(binding.serviceIdentifier, binding, target);
          } else {
            if (binding.cache) {
              return;
            }
            subChildRequest = childRequest;
          }
          if (binding.type === literal_types_1.BindingTypeEnum.Instance && binding.implementationType !== null) {
            var dependencies = (0, reflection_utils_1.getDependencies)(metadataReader, binding.implementationType);
            if (!context.container.options.skipBaseClassChecks) {
              var baseClassDependencyCount = (0, reflection_utils_1.getBaseClassDependencyCount)(metadataReader, binding.implementationType);
              if (dependencies.length < baseClassDependencyCount) {
                var error = ERROR_MSGS.ARGUMENTS_LENGTH_MISMATCH((0, reflection_utils_1.getFunctionName)(binding.implementationType));
                throw new Error(error);
              }
            }
            dependencies.forEach(function(dependency) {
              _createSubRequests(metadataReader, false, dependency.serviceIdentifier, context, subChildRequest, dependency);
            });
          }
        });
      }
      __name(_createSubRequests, "_createSubRequests");
      function getBindings(container, serviceIdentifier) {
        var bindings = [];
        var bindingDictionary = getBindingDictionary(container);
        if (bindingDictionary.hasKey(serviceIdentifier)) {
          bindings = bindingDictionary.get(serviceIdentifier);
        } else if (container.parent !== null) {
          bindings = getBindings(container.parent, serviceIdentifier);
        }
        return bindings;
      }
      __name(getBindings, "getBindings");
      function plan(metadataReader, container, isMultiInject, targetType, serviceIdentifier, key, value, avoidConstraints) {
        if (avoidConstraints === void 0) {
          avoidConstraints = false;
        }
        var context = new context_1.Context(container);
        var target = _createTarget(isMultiInject, targetType, serviceIdentifier, "", key, value);
        try {
          _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, null, target);
          return context;
        } catch (error) {
          if ((0, exceptions_1.isStackOverflowExeption)(error)) {
            (0, serialization_1.circularDependencyToException)(context.plan.rootRequest);
          }
          throw error;
        }
      }
      __name(plan, "plan");
      exports2.plan = plan;
      function createMockRequest(container, serviceIdentifier, key, value) {
        var target = new target_1.Target(literal_types_1.TargetTypeEnum.Variable, "", serviceIdentifier, new metadata_1.Metadata(key, value));
        var context = new context_1.Context(container);
        var request = new request_1.Request(serviceIdentifier, context, null, [], target);
        return request;
      }
      __name(createMockRequest, "createMockRequest");
      exports2.createMockRequest = createMockRequest;
    }
  });

  // ../../node_modules/inversify/lib/utils/async.js
  var require_async = __commonJS({
    "../../node_modules/inversify/lib/utils/async.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.isPromiseOrContainsPromise = exports2.isPromise = void 0;
      function isPromise(object) {
        var isObjectOrFunction = typeof object === "object" && object !== null || typeof object === "function";
        return isObjectOrFunction && typeof object.then === "function";
      }
      __name(isPromise, "isPromise");
      exports2.isPromise = isPromise;
      function isPromiseOrContainsPromise(object) {
        if (isPromise(object)) {
          return true;
        }
        return Array.isArray(object) && object.some(isPromise);
      }
      __name(isPromiseOrContainsPromise, "isPromiseOrContainsPromise");
      exports2.isPromiseOrContainsPromise = isPromiseOrContainsPromise;
    }
  });

  // ../../node_modules/inversify/lib/scope/scope.js
  var require_scope = __commonJS({
    "../../node_modules/inversify/lib/scope/scope.js"(exports2) {
      "use strict";
      var __awaiter = exports2 && exports2.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        __name(adopt, "adopt");
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          __name(fulfilled, "fulfilled");
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          __name(rejected, "rejected");
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          __name(step, "step");
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports2 && exports2.__generator || function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        __name(verb, "verb");
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
        __name(step, "step");
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.saveToScope = exports2.tryGetFromScope = void 0;
      var inversify_1 = require_inversify();
      var async_1 = require_async();
      var tryGetFromScope = /* @__PURE__ */ __name(function(requestScope, binding) {
        if (binding.scope === inversify_1.BindingScopeEnum.Singleton && binding.activated) {
          return binding.cache;
        }
        if (binding.scope === inversify_1.BindingScopeEnum.Request && requestScope.has(binding.id)) {
          return requestScope.get(binding.id);
        }
        return null;
      }, "tryGetFromScope");
      exports2.tryGetFromScope = tryGetFromScope;
      var saveToScope = /* @__PURE__ */ __name(function(requestScope, binding, result) {
        if (binding.scope === inversify_1.BindingScopeEnum.Singleton) {
          _saveToSingletonScope(binding, result);
        }
        if (binding.scope === inversify_1.BindingScopeEnum.Request) {
          _saveToRequestScope(requestScope, binding, result);
        }
      }, "saveToScope");
      exports2.saveToScope = saveToScope;
      var _saveToRequestScope = /* @__PURE__ */ __name(function(requestScope, binding, result) {
        if (!requestScope.has(binding.id)) {
          requestScope.set(binding.id, result);
        }
      }, "_saveToRequestScope");
      var _saveToSingletonScope = /* @__PURE__ */ __name(function(binding, result) {
        binding.cache = result;
        binding.activated = true;
        if ((0, async_1.isPromise)(result)) {
          void _saveAsyncResultToSingletonScope(binding, result);
        }
      }, "_saveToSingletonScope");
      var _saveAsyncResultToSingletonScope = /* @__PURE__ */ __name(function(binding, asyncResult) {
        return __awaiter(void 0, void 0, void 0, function() {
          var result, ex_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, asyncResult];
              case 1:
                result = _a.sent();
                binding.cache = result;
                return [3, 3];
              case 2:
                ex_1 = _a.sent();
                binding.cache = null;
                binding.activated = false;
                throw ex_1;
              case 3:
                return [2];
            }
          });
        });
      }, "_saveAsyncResultToSingletonScope");
    }
  });

  // ../../node_modules/inversify/lib/utils/factory_type.js
  var require_factory_type = __commonJS({
    "../../node_modules/inversify/lib/utils/factory_type.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.FactoryType = void 0;
      var FactoryType;
      (function(FactoryType2) {
        FactoryType2["DynamicValue"] = "toDynamicValue";
        FactoryType2["Factory"] = "toFactory";
        FactoryType2["Provider"] = "toProvider";
      })(FactoryType = exports2.FactoryType || (exports2.FactoryType = {}));
    }
  });

  // ../../node_modules/inversify/lib/utils/binding_utils.js
  var require_binding_utils = __commonJS({
    "../../node_modules/inversify/lib/utils/binding_utils.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.getFactoryDetails = exports2.ensureFullyBound = exports2.multiBindToService = void 0;
      var inversify_1 = require_inversify();
      var ERROR_MSGS = __importStar(require_error_msgs());
      var literal_types_1 = require_literal_types();
      var factory_type_1 = require_factory_type();
      var multiBindToService = /* @__PURE__ */ __name(function(container) {
        return function(service) {
          return function() {
            var types = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              types[_i] = arguments[_i];
            }
            return types.forEach(function(t) {
              return container.bind(t).toService(service);
            });
          };
        };
      }, "multiBindToService");
      exports2.multiBindToService = multiBindToService;
      var ensureFullyBound = /* @__PURE__ */ __name(function(binding) {
        var boundValue = null;
        switch (binding.type) {
          case literal_types_1.BindingTypeEnum.ConstantValue:
          case literal_types_1.BindingTypeEnum.Function:
            boundValue = binding.cache;
            break;
          case literal_types_1.BindingTypeEnum.Constructor:
          case literal_types_1.BindingTypeEnum.Instance:
            boundValue = binding.implementationType;
            break;
          case literal_types_1.BindingTypeEnum.DynamicValue:
            boundValue = binding.dynamicValue;
            break;
          case literal_types_1.BindingTypeEnum.Provider:
            boundValue = binding.provider;
            break;
          case literal_types_1.BindingTypeEnum.Factory:
            boundValue = binding.factory;
            break;
        }
        if (boundValue === null) {
          var serviceIdentifierAsString = (0, inversify_1.getServiceIdentifierAsString)(binding.serviceIdentifier);
          throw new Error(ERROR_MSGS.INVALID_BINDING_TYPE + " " + serviceIdentifierAsString);
        }
      }, "ensureFullyBound");
      exports2.ensureFullyBound = ensureFullyBound;
      var getFactoryDetails = /* @__PURE__ */ __name(function(binding) {
        switch (binding.type) {
          case literal_types_1.BindingTypeEnum.Factory:
            return { factory: binding.factory, factoryType: factory_type_1.FactoryType.Factory };
          case literal_types_1.BindingTypeEnum.Provider:
            return { factory: binding.provider, factoryType: factory_type_1.FactoryType.Provider };
          case literal_types_1.BindingTypeEnum.DynamicValue:
            return { factory: binding.dynamicValue, factoryType: factory_type_1.FactoryType.DynamicValue };
          default:
            throw new Error("Unexpected factory type " + binding.type);
        }
      }, "getFactoryDetails");
      exports2.getFactoryDetails = getFactoryDetails;
    }
  });

  // ../../node_modules/inversify/lib/resolution/instantiation.js
  var require_instantiation = __commonJS({
    "../../node_modules/inversify/lib/resolution/instantiation.js"(exports2) {
      "use strict";
      var __assign = exports2 && exports2.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __awaiter = exports2 && exports2.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        __name(adopt, "adopt");
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          __name(fulfilled, "fulfilled");
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          __name(rejected, "rejected");
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          __name(step, "step");
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports2 && exports2.__generator || function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        __name(verb, "verb");
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
        __name(step, "step");
      };
      var __spreadArray = exports2 && exports2.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.resolveInstance = void 0;
      var error_msgs_1 = require_error_msgs();
      var literal_types_1 = require_literal_types();
      var METADATA_KEY = __importStar(require_metadata_keys());
      var async_1 = require_async();
      function _resolveRequests(childRequests, resolveRequest) {
        return childRequests.reduce(function(resolvedRequests, childRequest) {
          var injection = resolveRequest(childRequest);
          var targetType = childRequest.target.type;
          if (targetType === literal_types_1.TargetTypeEnum.ConstructorArgument) {
            resolvedRequests.constructorInjections.push(injection);
          } else {
            resolvedRequests.propertyRequests.push(childRequest);
            resolvedRequests.propertyInjections.push(injection);
          }
          if (!resolvedRequests.isAsync) {
            resolvedRequests.isAsync = (0, async_1.isPromiseOrContainsPromise)(injection);
          }
          return resolvedRequests;
        }, { constructorInjections: [], propertyInjections: [], propertyRequests: [], isAsync: false });
      }
      __name(_resolveRequests, "_resolveRequests");
      function _createInstance(constr, childRequests, resolveRequest) {
        var result;
        if (childRequests.length > 0) {
          var resolved = _resolveRequests(childRequests, resolveRequest);
          var createInstanceWithInjectionsArg = __assign(__assign({}, resolved), { constr });
          if (resolved.isAsync) {
            result = createInstanceWithInjectionsAsync(createInstanceWithInjectionsArg);
          } else {
            result = createInstanceWithInjections(createInstanceWithInjectionsArg);
          }
        } else {
          result = new constr();
        }
        return result;
      }
      __name(_createInstance, "_createInstance");
      function createInstanceWithInjections(args) {
        var _a;
        var instance = new ((_a = args.constr).bind.apply(_a, __spreadArray([void 0], args.constructorInjections, false)))();
        args.propertyRequests.forEach(function(r, index) {
          var property = r.target.identifier;
          var injection = args.propertyInjections[index];
          instance[property] = injection;
        });
        return instance;
      }
      __name(createInstanceWithInjections, "createInstanceWithInjections");
      function createInstanceWithInjectionsAsync(args) {
        return __awaiter(this, void 0, void 0, function() {
          var constructorInjections, propertyInjections;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                return [4, possiblyWaitInjections(args.constructorInjections)];
              case 1:
                constructorInjections = _a.sent();
                return [4, possiblyWaitInjections(args.propertyInjections)];
              case 2:
                propertyInjections = _a.sent();
                return [2, createInstanceWithInjections(__assign(__assign({}, args), { constructorInjections, propertyInjections }))];
            }
          });
        });
      }
      __name(createInstanceWithInjectionsAsync, "createInstanceWithInjectionsAsync");
      function possiblyWaitInjections(possiblePromiseinjections) {
        return __awaiter(this, void 0, void 0, function() {
          var injections, _i, possiblePromiseinjections_1, injection;
          return __generator(this, function(_a) {
            injections = [];
            for (_i = 0, possiblePromiseinjections_1 = possiblePromiseinjections; _i < possiblePromiseinjections_1.length; _i++) {
              injection = possiblePromiseinjections_1[_i];
              if (Array.isArray(injection)) {
                injections.push(Promise.all(injection));
              } else {
                injections.push(injection);
              }
            }
            return [2, Promise.all(injections)];
          });
        });
      }
      __name(possiblyWaitInjections, "possiblyWaitInjections");
      function _getInstanceAfterPostConstruct(constr, result) {
        var postConstructResult = _postConstruct(constr, result);
        if ((0, async_1.isPromise)(postConstructResult)) {
          return postConstructResult.then(function() {
            return result;
          });
        } else {
          return result;
        }
      }
      __name(_getInstanceAfterPostConstruct, "_getInstanceAfterPostConstruct");
      function _postConstruct(constr, instance) {
        var _a, _b;
        if (Reflect.hasMetadata(METADATA_KEY.POST_CONSTRUCT, constr)) {
          var data = Reflect.getMetadata(METADATA_KEY.POST_CONSTRUCT, constr);
          try {
            return (_b = (_a = instance)[data.value]) === null || _b === void 0 ? void 0 : _b.call(_a);
          } catch (e) {
            throw new Error((0, error_msgs_1.POST_CONSTRUCT_ERROR)(constr.name, e.message));
          }
        }
      }
      __name(_postConstruct, "_postConstruct");
      function _validateInstanceResolution(binding, constr) {
        if (binding.scope !== literal_types_1.BindingScopeEnum.Singleton) {
          _throwIfHandlingDeactivation(binding, constr);
        }
      }
      __name(_validateInstanceResolution, "_validateInstanceResolution");
      function _throwIfHandlingDeactivation(binding, constr) {
        var scopeErrorMessage = "Class cannot be instantiated in " + (binding.scope === literal_types_1.BindingScopeEnum.Request ? "request" : "transient") + " scope.";
        if (typeof binding.onDeactivation === "function") {
          throw new Error((0, error_msgs_1.ON_DEACTIVATION_ERROR)(constr.name, scopeErrorMessage));
        }
        if (Reflect.hasMetadata(METADATA_KEY.PRE_DESTROY, constr)) {
          throw new Error((0, error_msgs_1.PRE_DESTROY_ERROR)(constr.name, scopeErrorMessage));
        }
      }
      __name(_throwIfHandlingDeactivation, "_throwIfHandlingDeactivation");
      function resolveInstance(binding, constr, childRequests, resolveRequest) {
        _validateInstanceResolution(binding, constr);
        var result = _createInstance(constr, childRequests, resolveRequest);
        if ((0, async_1.isPromise)(result)) {
          return result.then(function(resolvedResult) {
            return _getInstanceAfterPostConstruct(constr, resolvedResult);
          });
        } else {
          return _getInstanceAfterPostConstruct(constr, result);
        }
      }
      __name(resolveInstance, "resolveInstance");
      exports2.resolveInstance = resolveInstance;
    }
  });

  // ../../node_modules/inversify/lib/resolution/resolver.js
  var require_resolver = __commonJS({
    "../../node_modules/inversify/lib/resolution/resolver.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __awaiter = exports2 && exports2.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve2) {
            resolve2(value);
          });
        }
        __name(adopt, "adopt");
        return new (P || (P = Promise))(function(resolve2, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          __name(fulfilled, "fulfilled");
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          __name(rejected, "rejected");
          function step(result) {
            result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          __name(step, "step");
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports2 && exports2.__generator || function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        __name(verb, "verb");
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
        __name(step, "step");
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.resolve = void 0;
      var ERROR_MSGS = __importStar(require_error_msgs());
      var literal_types_1 = require_literal_types();
      var planner_1 = require_planner();
      var scope_1 = require_scope();
      var async_1 = require_async();
      var binding_utils_1 = require_binding_utils();
      var exceptions_1 = require_exceptions();
      var instantiation_1 = require_instantiation();
      var _resolveRequest = /* @__PURE__ */ __name(function(requestScope) {
        return function(request) {
          request.parentContext.setCurrentRequest(request);
          var bindings = request.bindings;
          var childRequests = request.childRequests;
          var targetIsAnArray = request.target && request.target.isArray();
          var targetParentIsNotAnArray = !request.parentRequest || !request.parentRequest.target || !request.target || !request.parentRequest.target.matchesArray(request.target.serviceIdentifier);
          if (targetIsAnArray && targetParentIsNotAnArray) {
            return childRequests.map(function(childRequest) {
              var _f = _resolveRequest(requestScope);
              return _f(childRequest);
            });
          } else {
            if (request.target.isOptional() && bindings.length === 0) {
              return void 0;
            }
            var binding = bindings[0];
            return _resolveBinding(requestScope, request, binding);
          }
        };
      }, "_resolveRequest");
      var _resolveFactoryFromBinding = /* @__PURE__ */ __name(function(binding, context) {
        var factoryDetails = (0, binding_utils_1.getFactoryDetails)(binding);
        return (0, exceptions_1.tryAndThrowErrorIfStackOverflow)(function() {
          return factoryDetails.factory.bind(binding)(context);
        }, function() {
          return new Error(ERROR_MSGS.CIRCULAR_DEPENDENCY_IN_FACTORY(factoryDetails.factoryType, context.currentRequest.serviceIdentifier.toString()));
        });
      }, "_resolveFactoryFromBinding");
      var _getResolvedFromBinding = /* @__PURE__ */ __name(function(requestScope, request, binding) {
        var result;
        var childRequests = request.childRequests;
        (0, binding_utils_1.ensureFullyBound)(binding);
        switch (binding.type) {
          case literal_types_1.BindingTypeEnum.ConstantValue:
          case literal_types_1.BindingTypeEnum.Function:
            result = binding.cache;
            break;
          case literal_types_1.BindingTypeEnum.Constructor:
            result = binding.implementationType;
            break;
          case literal_types_1.BindingTypeEnum.Instance:
            result = (0, instantiation_1.resolveInstance)(binding, binding.implementationType, childRequests, _resolveRequest(requestScope));
            break;
          default:
            result = _resolveFactoryFromBinding(binding, request.parentContext);
        }
        return result;
      }, "_getResolvedFromBinding");
      var _resolveInScope = /* @__PURE__ */ __name(function(requestScope, binding, resolveFromBinding) {
        var result = (0, scope_1.tryGetFromScope)(requestScope, binding);
        if (result !== null) {
          return result;
        }
        result = resolveFromBinding();
        (0, scope_1.saveToScope)(requestScope, binding, result);
        return result;
      }, "_resolveInScope");
      var _resolveBinding = /* @__PURE__ */ __name(function(requestScope, request, binding) {
        return _resolveInScope(requestScope, binding, function() {
          var result = _getResolvedFromBinding(requestScope, request, binding);
          if ((0, async_1.isPromise)(result)) {
            result = result.then(function(resolved) {
              return _onActivation(request, binding, resolved);
            });
          } else {
            result = _onActivation(request, binding, result);
          }
          return result;
        });
      }, "_resolveBinding");
      function _onActivation(request, binding, resolved) {
        var result = _bindingActivation(request.parentContext, binding, resolved);
        var containersIterator = _getContainersIterator(request.parentContext.container);
        var container;
        var containersIteratorResult = containersIterator.next();
        do {
          container = containersIteratorResult.value;
          var context_1 = request.parentContext;
          var serviceIdentifier = request.serviceIdentifier;
          var activationsIterator = _getContainerActivationsForService(container, serviceIdentifier);
          if ((0, async_1.isPromise)(result)) {
            result = _activateContainerAsync(activationsIterator, context_1, result);
          } else {
            result = _activateContainer(activationsIterator, context_1, result);
          }
          containersIteratorResult = containersIterator.next();
        } while (containersIteratorResult.done !== true && !(0, planner_1.getBindingDictionary)(container).hasKey(request.serviceIdentifier));
        return result;
      }
      __name(_onActivation, "_onActivation");
      var _bindingActivation = /* @__PURE__ */ __name(function(context, binding, previousResult) {
        var result;
        if (typeof binding.onActivation === "function") {
          result = binding.onActivation(context, previousResult);
        } else {
          result = previousResult;
        }
        return result;
      }, "_bindingActivation");
      var _activateContainer = /* @__PURE__ */ __name(function(activationsIterator, context, result) {
        var activation = activationsIterator.next();
        while (!activation.done) {
          result = activation.value(context, result);
          if ((0, async_1.isPromise)(result)) {
            return _activateContainerAsync(activationsIterator, context, result);
          }
          activation = activationsIterator.next();
        }
        return result;
      }, "_activateContainer");
      var _activateContainerAsync = /* @__PURE__ */ __name(function(activationsIterator, context, resultPromise) {
        return __awaiter(void 0, void 0, void 0, function() {
          var result, activation;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                return [4, resultPromise];
              case 1:
                result = _a.sent();
                activation = activationsIterator.next();
                _a.label = 2;
              case 2:
                if (!!activation.done)
                  return [3, 4];
                return [4, activation.value(context, result)];
              case 3:
                result = _a.sent();
                activation = activationsIterator.next();
                return [3, 2];
              case 4:
                return [2, result];
            }
          });
        });
      }, "_activateContainerAsync");
      var _getContainerActivationsForService = /* @__PURE__ */ __name(function(container, serviceIdentifier) {
        var activations = container._activations;
        return activations.hasKey(serviceIdentifier) ? activations.get(serviceIdentifier).values() : [].values();
      }, "_getContainerActivationsForService");
      var _getContainersIterator = /* @__PURE__ */ __name(function(container) {
        var containersStack = [container];
        var parent = container.parent;
        while (parent !== null) {
          containersStack.push(parent);
          parent = parent.parent;
        }
        var getNextContainer = /* @__PURE__ */ __name(function() {
          var nextContainer = containersStack.pop();
          if (nextContainer !== void 0) {
            return { done: false, value: nextContainer };
          } else {
            return { done: true, value: void 0 };
          }
        }, "getNextContainer");
        var containersIterator = {
          next: getNextContainer
        };
        return containersIterator;
      }, "_getContainersIterator");
      function resolve(context) {
        var _f = _resolveRequest(context.plan.rootRequest.requestScope);
        return _f(context.plan.rootRequest);
      }
      __name(resolve, "resolve");
      exports2.resolve = resolve;
    }
  });

  // ../../node_modules/inversify/lib/syntax/constraint_helpers.js
  var require_constraint_helpers = __commonJS({
    "../../node_modules/inversify/lib/syntax/constraint_helpers.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.typeConstraint = exports2.namedConstraint = exports2.taggedConstraint = exports2.traverseAncerstors = void 0;
      var METADATA_KEY = __importStar(require_metadata_keys());
      var metadata_1 = require_metadata();
      var traverseAncerstors = /* @__PURE__ */ __name(function(request, constraint) {
        var parent = request.parentRequest;
        if (parent !== null) {
          return constraint(parent) ? true : traverseAncerstors(parent, constraint);
        } else {
          return false;
        }
      }, "traverseAncerstors");
      exports2.traverseAncerstors = traverseAncerstors;
      var taggedConstraint = /* @__PURE__ */ __name(function(key) {
        return function(value) {
          var constraint = /* @__PURE__ */ __name(function(request) {
            return request !== null && request.target !== null && request.target.matchesTag(key)(value);
          }, "constraint");
          constraint.metaData = new metadata_1.Metadata(key, value);
          return constraint;
        };
      }, "taggedConstraint");
      exports2.taggedConstraint = taggedConstraint;
      var namedConstraint = taggedConstraint(METADATA_KEY.NAMED_TAG);
      exports2.namedConstraint = namedConstraint;
      var typeConstraint = /* @__PURE__ */ __name(function(type) {
        return function(request) {
          var binding = null;
          if (request !== null) {
            binding = request.bindings[0];
            if (typeof type === "string") {
              var serviceIdentifier = binding.serviceIdentifier;
              return serviceIdentifier === type;
            } else {
              var constructor = request.bindings[0].implementationType;
              return type === constructor;
            }
          }
          return false;
        };
      }, "typeConstraint");
      exports2.typeConstraint = typeConstraint;
    }
  });

  // ../../node_modules/inversify/lib/syntax/binding_when_syntax.js
  var require_binding_when_syntax = __commonJS({
    "../../node_modules/inversify/lib/syntax/binding_when_syntax.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.BindingWhenSyntax = void 0;
      var binding_on_syntax_1 = require_binding_on_syntax();
      var constraint_helpers_1 = require_constraint_helpers();
      var BindingWhenSyntax = function() {
        function BindingWhenSyntax2(binding) {
          this._binding = binding;
        }
        __name(BindingWhenSyntax2, "BindingWhenSyntax");
        BindingWhenSyntax2.prototype.when = function(constraint) {
          this._binding.constraint = constraint;
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax2.prototype.whenTargetNamed = function(name) {
          this._binding.constraint = (0, constraint_helpers_1.namedConstraint)(name);
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax2.prototype.whenTargetIsDefault = function() {
          this._binding.constraint = function(request) {
            if (request === null) {
              return false;
            }
            var targetIsDefault = request.target !== null && !request.target.isNamed() && !request.target.isTagged();
            return targetIsDefault;
          };
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax2.prototype.whenTargetTagged = function(tag, value) {
          this._binding.constraint = (0, constraint_helpers_1.taggedConstraint)(tag)(value);
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax2.prototype.whenInjectedInto = function(parent) {
          this._binding.constraint = function(request) {
            return request !== null && (0, constraint_helpers_1.typeConstraint)(parent)(request.parentRequest);
          };
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax2.prototype.whenParentNamed = function(name) {
          this._binding.constraint = function(request) {
            return request !== null && (0, constraint_helpers_1.namedConstraint)(name)(request.parentRequest);
          };
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax2.prototype.whenParentTagged = function(tag, value) {
          this._binding.constraint = function(request) {
            return request !== null && (0, constraint_helpers_1.taggedConstraint)(tag)(value)(request.parentRequest);
          };
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax2.prototype.whenAnyAncestorIs = function(ancestor) {
          this._binding.constraint = function(request) {
            return request !== null && (0, constraint_helpers_1.traverseAncerstors)(request, (0, constraint_helpers_1.typeConstraint)(ancestor));
          };
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax2.prototype.whenNoAncestorIs = function(ancestor) {
          this._binding.constraint = function(request) {
            return request !== null && !(0, constraint_helpers_1.traverseAncerstors)(request, (0, constraint_helpers_1.typeConstraint)(ancestor));
          };
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax2.prototype.whenAnyAncestorNamed = function(name) {
          this._binding.constraint = function(request) {
            return request !== null && (0, constraint_helpers_1.traverseAncerstors)(request, (0, constraint_helpers_1.namedConstraint)(name));
          };
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax2.prototype.whenNoAncestorNamed = function(name) {
          this._binding.constraint = function(request) {
            return request !== null && !(0, constraint_helpers_1.traverseAncerstors)(request, (0, constraint_helpers_1.namedConstraint)(name));
          };
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax2.prototype.whenAnyAncestorTagged = function(tag, value) {
          this._binding.constraint = function(request) {
            return request !== null && (0, constraint_helpers_1.traverseAncerstors)(request, (0, constraint_helpers_1.taggedConstraint)(tag)(value));
          };
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax2.prototype.whenNoAncestorTagged = function(tag, value) {
          this._binding.constraint = function(request) {
            return request !== null && !(0, constraint_helpers_1.traverseAncerstors)(request, (0, constraint_helpers_1.taggedConstraint)(tag)(value));
          };
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax2.prototype.whenAnyAncestorMatches = function(constraint) {
          this._binding.constraint = function(request) {
            return request !== null && (0, constraint_helpers_1.traverseAncerstors)(request, constraint);
          };
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        BindingWhenSyntax2.prototype.whenNoAncestorMatches = function(constraint) {
          this._binding.constraint = function(request) {
            return request !== null && !(0, constraint_helpers_1.traverseAncerstors)(request, constraint);
          };
          return new binding_on_syntax_1.BindingOnSyntax(this._binding);
        };
        return BindingWhenSyntax2;
      }();
      exports2.BindingWhenSyntax = BindingWhenSyntax;
    }
  });

  // ../../node_modules/inversify/lib/syntax/binding_on_syntax.js
  var require_binding_on_syntax = __commonJS({
    "../../node_modules/inversify/lib/syntax/binding_on_syntax.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.BindingOnSyntax = void 0;
      var binding_when_syntax_1 = require_binding_when_syntax();
      var BindingOnSyntax = function() {
        function BindingOnSyntax2(binding) {
          this._binding = binding;
        }
        __name(BindingOnSyntax2, "BindingOnSyntax");
        BindingOnSyntax2.prototype.onActivation = function(handler) {
          this._binding.onActivation = handler;
          return new binding_when_syntax_1.BindingWhenSyntax(this._binding);
        };
        BindingOnSyntax2.prototype.onDeactivation = function(handler) {
          this._binding.onDeactivation = handler;
          return new binding_when_syntax_1.BindingWhenSyntax(this._binding);
        };
        return BindingOnSyntax2;
      }();
      exports2.BindingOnSyntax = BindingOnSyntax;
    }
  });

  // ../../node_modules/inversify/lib/syntax/binding_when_on_syntax.js
  var require_binding_when_on_syntax = __commonJS({
    "../../node_modules/inversify/lib/syntax/binding_when_on_syntax.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.BindingWhenOnSyntax = void 0;
      var binding_on_syntax_1 = require_binding_on_syntax();
      var binding_when_syntax_1 = require_binding_when_syntax();
      var BindingWhenOnSyntax = function() {
        function BindingWhenOnSyntax2(binding) {
          this._binding = binding;
          this._bindingWhenSyntax = new binding_when_syntax_1.BindingWhenSyntax(this._binding);
          this._bindingOnSyntax = new binding_on_syntax_1.BindingOnSyntax(this._binding);
        }
        __name(BindingWhenOnSyntax2, "BindingWhenOnSyntax");
        BindingWhenOnSyntax2.prototype.when = function(constraint) {
          return this._bindingWhenSyntax.when(constraint);
        };
        BindingWhenOnSyntax2.prototype.whenTargetNamed = function(name) {
          return this._bindingWhenSyntax.whenTargetNamed(name);
        };
        BindingWhenOnSyntax2.prototype.whenTargetIsDefault = function() {
          return this._bindingWhenSyntax.whenTargetIsDefault();
        };
        BindingWhenOnSyntax2.prototype.whenTargetTagged = function(tag, value) {
          return this._bindingWhenSyntax.whenTargetTagged(tag, value);
        };
        BindingWhenOnSyntax2.prototype.whenInjectedInto = function(parent) {
          return this._bindingWhenSyntax.whenInjectedInto(parent);
        };
        BindingWhenOnSyntax2.prototype.whenParentNamed = function(name) {
          return this._bindingWhenSyntax.whenParentNamed(name);
        };
        BindingWhenOnSyntax2.prototype.whenParentTagged = function(tag, value) {
          return this._bindingWhenSyntax.whenParentTagged(tag, value);
        };
        BindingWhenOnSyntax2.prototype.whenAnyAncestorIs = function(ancestor) {
          return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
        };
        BindingWhenOnSyntax2.prototype.whenNoAncestorIs = function(ancestor) {
          return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
        };
        BindingWhenOnSyntax2.prototype.whenAnyAncestorNamed = function(name) {
          return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
        };
        BindingWhenOnSyntax2.prototype.whenAnyAncestorTagged = function(tag, value) {
          return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
        };
        BindingWhenOnSyntax2.prototype.whenNoAncestorNamed = function(name) {
          return this._bindingWhenSyntax.whenNoAncestorNamed(name);
        };
        BindingWhenOnSyntax2.prototype.whenNoAncestorTagged = function(tag, value) {
          return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
        };
        BindingWhenOnSyntax2.prototype.whenAnyAncestorMatches = function(constraint) {
          return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
        };
        BindingWhenOnSyntax2.prototype.whenNoAncestorMatches = function(constraint) {
          return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
        };
        BindingWhenOnSyntax2.prototype.onActivation = function(handler) {
          return this._bindingOnSyntax.onActivation(handler);
        };
        BindingWhenOnSyntax2.prototype.onDeactivation = function(handler) {
          return this._bindingOnSyntax.onDeactivation(handler);
        };
        return BindingWhenOnSyntax2;
      }();
      exports2.BindingWhenOnSyntax = BindingWhenOnSyntax;
    }
  });

  // ../../node_modules/inversify/lib/syntax/binding_in_syntax.js
  var require_binding_in_syntax = __commonJS({
    "../../node_modules/inversify/lib/syntax/binding_in_syntax.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.BindingInSyntax = void 0;
      var literal_types_1 = require_literal_types();
      var binding_when_on_syntax_1 = require_binding_when_on_syntax();
      var BindingInSyntax = function() {
        function BindingInSyntax2(binding) {
          this._binding = binding;
        }
        __name(BindingInSyntax2, "BindingInSyntax");
        BindingInSyntax2.prototype.inRequestScope = function() {
          this._binding.scope = literal_types_1.BindingScopeEnum.Request;
          return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
        };
        BindingInSyntax2.prototype.inSingletonScope = function() {
          this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
          return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
        };
        BindingInSyntax2.prototype.inTransientScope = function() {
          this._binding.scope = literal_types_1.BindingScopeEnum.Transient;
          return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
        };
        return BindingInSyntax2;
      }();
      exports2.BindingInSyntax = BindingInSyntax;
    }
  });

  // ../../node_modules/inversify/lib/syntax/binding_in_when_on_syntax.js
  var require_binding_in_when_on_syntax = __commonJS({
    "../../node_modules/inversify/lib/syntax/binding_in_when_on_syntax.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.BindingInWhenOnSyntax = void 0;
      var binding_in_syntax_1 = require_binding_in_syntax();
      var binding_on_syntax_1 = require_binding_on_syntax();
      var binding_when_syntax_1 = require_binding_when_syntax();
      var BindingInWhenOnSyntax = function() {
        function BindingInWhenOnSyntax2(binding) {
          this._binding = binding;
          this._bindingWhenSyntax = new binding_when_syntax_1.BindingWhenSyntax(this._binding);
          this._bindingOnSyntax = new binding_on_syntax_1.BindingOnSyntax(this._binding);
          this._bindingInSyntax = new binding_in_syntax_1.BindingInSyntax(binding);
        }
        __name(BindingInWhenOnSyntax2, "BindingInWhenOnSyntax");
        BindingInWhenOnSyntax2.prototype.inRequestScope = function() {
          return this._bindingInSyntax.inRequestScope();
        };
        BindingInWhenOnSyntax2.prototype.inSingletonScope = function() {
          return this._bindingInSyntax.inSingletonScope();
        };
        BindingInWhenOnSyntax2.prototype.inTransientScope = function() {
          return this._bindingInSyntax.inTransientScope();
        };
        BindingInWhenOnSyntax2.prototype.when = function(constraint) {
          return this._bindingWhenSyntax.when(constraint);
        };
        BindingInWhenOnSyntax2.prototype.whenTargetNamed = function(name) {
          return this._bindingWhenSyntax.whenTargetNamed(name);
        };
        BindingInWhenOnSyntax2.prototype.whenTargetIsDefault = function() {
          return this._bindingWhenSyntax.whenTargetIsDefault();
        };
        BindingInWhenOnSyntax2.prototype.whenTargetTagged = function(tag, value) {
          return this._bindingWhenSyntax.whenTargetTagged(tag, value);
        };
        BindingInWhenOnSyntax2.prototype.whenInjectedInto = function(parent) {
          return this._bindingWhenSyntax.whenInjectedInto(parent);
        };
        BindingInWhenOnSyntax2.prototype.whenParentNamed = function(name) {
          return this._bindingWhenSyntax.whenParentNamed(name);
        };
        BindingInWhenOnSyntax2.prototype.whenParentTagged = function(tag, value) {
          return this._bindingWhenSyntax.whenParentTagged(tag, value);
        };
        BindingInWhenOnSyntax2.prototype.whenAnyAncestorIs = function(ancestor) {
          return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
        };
        BindingInWhenOnSyntax2.prototype.whenNoAncestorIs = function(ancestor) {
          return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
        };
        BindingInWhenOnSyntax2.prototype.whenAnyAncestorNamed = function(name) {
          return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
        };
        BindingInWhenOnSyntax2.prototype.whenAnyAncestorTagged = function(tag, value) {
          return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
        };
        BindingInWhenOnSyntax2.prototype.whenNoAncestorNamed = function(name) {
          return this._bindingWhenSyntax.whenNoAncestorNamed(name);
        };
        BindingInWhenOnSyntax2.prototype.whenNoAncestorTagged = function(tag, value) {
          return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
        };
        BindingInWhenOnSyntax2.prototype.whenAnyAncestorMatches = function(constraint) {
          return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
        };
        BindingInWhenOnSyntax2.prototype.whenNoAncestorMatches = function(constraint) {
          return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
        };
        BindingInWhenOnSyntax2.prototype.onActivation = function(handler) {
          return this._bindingOnSyntax.onActivation(handler);
        };
        BindingInWhenOnSyntax2.prototype.onDeactivation = function(handler) {
          return this._bindingOnSyntax.onDeactivation(handler);
        };
        return BindingInWhenOnSyntax2;
      }();
      exports2.BindingInWhenOnSyntax = BindingInWhenOnSyntax;
    }
  });

  // ../../node_modules/inversify/lib/syntax/binding_to_syntax.js
  var require_binding_to_syntax = __commonJS({
    "../../node_modules/inversify/lib/syntax/binding_to_syntax.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.BindingToSyntax = void 0;
      var ERROR_MSGS = __importStar(require_error_msgs());
      var literal_types_1 = require_literal_types();
      var binding_in_when_on_syntax_1 = require_binding_in_when_on_syntax();
      var binding_when_on_syntax_1 = require_binding_when_on_syntax();
      var BindingToSyntax = function() {
        function BindingToSyntax2(binding) {
          this._binding = binding;
        }
        __name(BindingToSyntax2, "BindingToSyntax");
        BindingToSyntax2.prototype.to = function(constructor) {
          this._binding.type = literal_types_1.BindingTypeEnum.Instance;
          this._binding.implementationType = constructor;
          return new binding_in_when_on_syntax_1.BindingInWhenOnSyntax(this._binding);
        };
        BindingToSyntax2.prototype.toSelf = function() {
          if (typeof this._binding.serviceIdentifier !== "function") {
            throw new Error("" + ERROR_MSGS.INVALID_TO_SELF_VALUE);
          }
          var self2 = this._binding.serviceIdentifier;
          return this.to(self2);
        };
        BindingToSyntax2.prototype.toConstantValue = function(value) {
          this._binding.type = literal_types_1.BindingTypeEnum.ConstantValue;
          this._binding.cache = value;
          this._binding.dynamicValue = null;
          this._binding.implementationType = null;
          this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
          return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
        };
        BindingToSyntax2.prototype.toDynamicValue = function(func) {
          this._binding.type = literal_types_1.BindingTypeEnum.DynamicValue;
          this._binding.cache = null;
          this._binding.dynamicValue = func;
          this._binding.implementationType = null;
          return new binding_in_when_on_syntax_1.BindingInWhenOnSyntax(this._binding);
        };
        BindingToSyntax2.prototype.toConstructor = function(constructor) {
          this._binding.type = literal_types_1.BindingTypeEnum.Constructor;
          this._binding.implementationType = constructor;
          this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
          return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
        };
        BindingToSyntax2.prototype.toFactory = function(factory) {
          this._binding.type = literal_types_1.BindingTypeEnum.Factory;
          this._binding.factory = factory;
          this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
          return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
        };
        BindingToSyntax2.prototype.toFunction = function(func) {
          if (typeof func !== "function") {
            throw new Error(ERROR_MSGS.INVALID_FUNCTION_BINDING);
          }
          var bindingWhenOnSyntax = this.toConstantValue(func);
          this._binding.type = literal_types_1.BindingTypeEnum.Function;
          this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
          return bindingWhenOnSyntax;
        };
        BindingToSyntax2.prototype.toAutoFactory = function(serviceIdentifier) {
          this._binding.type = literal_types_1.BindingTypeEnum.Factory;
          this._binding.factory = function(context) {
            var autofactory = /* @__PURE__ */ __name(function() {
              return context.container.get(serviceIdentifier);
            }, "autofactory");
            return autofactory;
          };
          this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
          return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
        };
        BindingToSyntax2.prototype.toAutoNamedFactory = function(serviceIdentifier) {
          this._binding.type = literal_types_1.BindingTypeEnum.Factory;
          this._binding.factory = function(context) {
            return function(named) {
              return context.container.getNamed(serviceIdentifier, named);
            };
          };
          return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
        };
        BindingToSyntax2.prototype.toProvider = function(provider) {
          this._binding.type = literal_types_1.BindingTypeEnum.Provider;
          this._binding.provider = provider;
          this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
          return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
        };
        BindingToSyntax2.prototype.toService = function(service) {
          this.toDynamicValue(function(context) {
            return context.container.get(service);
          });
        };
        return BindingToSyntax2;
      }();
      exports2.BindingToSyntax = BindingToSyntax;
    }
  });

  // ../../node_modules/inversify/lib/container/container_snapshot.js
  var require_container_snapshot = __commonJS({
    "../../node_modules/inversify/lib/container/container_snapshot.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.ContainerSnapshot = void 0;
      var ContainerSnapshot = function() {
        function ContainerSnapshot2() {
        }
        __name(ContainerSnapshot2, "ContainerSnapshot");
        ContainerSnapshot2.of = function(bindings, middleware, activations, deactivations, moduleActivationStore) {
          var snapshot = new ContainerSnapshot2();
          snapshot.bindings = bindings;
          snapshot.middleware = middleware;
          snapshot.deactivations = deactivations;
          snapshot.activations = activations;
          snapshot.moduleActivationStore = moduleActivationStore;
          return snapshot;
        };
        return ContainerSnapshot2;
      }();
      exports2.ContainerSnapshot = ContainerSnapshot;
    }
  });

  // ../../node_modules/inversify/lib/utils/clonable.js
  var require_clonable = __commonJS({
    "../../node_modules/inversify/lib/utils/clonable.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.isClonable = void 0;
      function isClonable(obj) {
        return typeof obj === "object" && obj !== null && "clone" in obj && typeof obj.clone === "function";
      }
      __name(isClonable, "isClonable");
      exports2.isClonable = isClonable;
    }
  });

  // ../../node_modules/inversify/lib/container/lookup.js
  var require_lookup = __commonJS({
    "../../node_modules/inversify/lib/container/lookup.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Lookup = void 0;
      var ERROR_MSGS = __importStar(require_error_msgs());
      var clonable_1 = require_clonable();
      var Lookup = function() {
        function Lookup2() {
          this._map = /* @__PURE__ */ new Map();
        }
        __name(Lookup2, "Lookup");
        Lookup2.prototype.getMap = function() {
          return this._map;
        };
        Lookup2.prototype.add = function(serviceIdentifier, value) {
          if (serviceIdentifier === null || serviceIdentifier === void 0) {
            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
          }
          if (value === null || value === void 0) {
            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
          }
          var entry = this._map.get(serviceIdentifier);
          if (entry !== void 0) {
            entry.push(value);
          } else {
            this._map.set(serviceIdentifier, [value]);
          }
        };
        Lookup2.prototype.get = function(serviceIdentifier) {
          if (serviceIdentifier === null || serviceIdentifier === void 0) {
            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
          }
          var entry = this._map.get(serviceIdentifier);
          if (entry !== void 0) {
            return entry;
          } else {
            throw new Error(ERROR_MSGS.KEY_NOT_FOUND);
          }
        };
        Lookup2.prototype.remove = function(serviceIdentifier) {
          if (serviceIdentifier === null || serviceIdentifier === void 0) {
            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
          }
          if (!this._map.delete(serviceIdentifier)) {
            throw new Error(ERROR_MSGS.KEY_NOT_FOUND);
          }
        };
        Lookup2.prototype.removeIntersection = function(lookup) {
          var _this = this;
          this.traverse(function(serviceIdentifier, value) {
            var lookupActivations = lookup.hasKey(serviceIdentifier) ? lookup.get(serviceIdentifier) : void 0;
            if (lookupActivations !== void 0) {
              var filteredValues = value.filter(function(lookupValue) {
                return !lookupActivations.some(function(moduleActivation) {
                  return lookupValue === moduleActivation;
                });
              });
              _this._setValue(serviceIdentifier, filteredValues);
            }
          });
        };
        Lookup2.prototype.removeByCondition = function(condition) {
          var _this = this;
          var removals = [];
          this._map.forEach(function(entries, key) {
            var updatedEntries = [];
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
              var entry = entries_1[_i];
              var remove = condition(entry);
              if (remove) {
                removals.push(entry);
              } else {
                updatedEntries.push(entry);
              }
            }
            _this._setValue(key, updatedEntries);
          });
          return removals;
        };
        Lookup2.prototype.hasKey = function(serviceIdentifier) {
          if (serviceIdentifier === null || serviceIdentifier === void 0) {
            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
          }
          return this._map.has(serviceIdentifier);
        };
        Lookup2.prototype.clone = function() {
          var copy = new Lookup2();
          this._map.forEach(function(value, key) {
            value.forEach(function(b) {
              return copy.add(key, (0, clonable_1.isClonable)(b) ? b.clone() : b);
            });
          });
          return copy;
        };
        Lookup2.prototype.traverse = function(func) {
          this._map.forEach(function(value, key) {
            func(key, value);
          });
        };
        Lookup2.prototype._setValue = function(serviceIdentifier, value) {
          if (value.length > 0) {
            this._map.set(serviceIdentifier, value);
          } else {
            this._map.delete(serviceIdentifier);
          }
        };
        return Lookup2;
      }();
      exports2.Lookup = Lookup;
    }
  });

  // ../../node_modules/inversify/lib/container/module_activation_store.js
  var require_module_activation_store = __commonJS({
    "../../node_modules/inversify/lib/container/module_activation_store.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.ModuleActivationStore = void 0;
      var lookup_1 = require_lookup();
      var ModuleActivationStore = function() {
        function ModuleActivationStore2() {
          this._map = /* @__PURE__ */ new Map();
        }
        __name(ModuleActivationStore2, "ModuleActivationStore");
        ModuleActivationStore2.prototype.remove = function(moduleId) {
          if (this._map.has(moduleId)) {
            var handlers = this._map.get(moduleId);
            this._map.delete(moduleId);
            return handlers;
          }
          return this._getEmptyHandlersStore();
        };
        ModuleActivationStore2.prototype.addDeactivation = function(moduleId, serviceIdentifier, onDeactivation) {
          this._getModuleActivationHandlers(moduleId).onDeactivations.add(serviceIdentifier, onDeactivation);
        };
        ModuleActivationStore2.prototype.addActivation = function(moduleId, serviceIdentifier, onActivation) {
          this._getModuleActivationHandlers(moduleId).onActivations.add(serviceIdentifier, onActivation);
        };
        ModuleActivationStore2.prototype.clone = function() {
          var clone = new ModuleActivationStore2();
          this._map.forEach(function(handlersStore, moduleId) {
            clone._map.set(moduleId, {
              onActivations: handlersStore.onActivations.clone(),
              onDeactivations: handlersStore.onDeactivations.clone()
            });
          });
          return clone;
        };
        ModuleActivationStore2.prototype._getModuleActivationHandlers = function(moduleId) {
          var moduleActivationHandlers = this._map.get(moduleId);
          if (moduleActivationHandlers === void 0) {
            moduleActivationHandlers = this._getEmptyHandlersStore();
            this._map.set(moduleId, moduleActivationHandlers);
          }
          return moduleActivationHandlers;
        };
        ModuleActivationStore2.prototype._getEmptyHandlersStore = function() {
          var handlersStore = {
            onActivations: new lookup_1.Lookup(),
            onDeactivations: new lookup_1.Lookup()
          };
          return handlersStore;
        };
        return ModuleActivationStore2;
      }();
      exports2.ModuleActivationStore = ModuleActivationStore;
    }
  });

  // ../../node_modules/inversify/lib/container/container.js
  var require_container = __commonJS({
    "../../node_modules/inversify/lib/container/container.js"(exports2) {
      "use strict";
      var __assign = exports2 && exports2.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __awaiter = exports2 && exports2.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        __name(adopt, "adopt");
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          __name(fulfilled, "fulfilled");
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          __name(rejected, "rejected");
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          __name(step, "step");
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports2 && exports2.__generator || function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        __name(verb, "verb");
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
        __name(step, "step");
      };
      var __spreadArray = exports2 && exports2.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Container = void 0;
      var binding_1 = require_binding();
      var ERROR_MSGS = __importStar(require_error_msgs());
      var literal_types_1 = require_literal_types();
      var METADATA_KEY = __importStar(require_metadata_keys());
      var metadata_reader_1 = require_metadata_reader();
      var planner_1 = require_planner();
      var resolver_1 = require_resolver();
      var binding_to_syntax_1 = require_binding_to_syntax();
      var async_1 = require_async();
      var id_1 = require_id();
      var serialization_1 = require_serialization();
      var container_snapshot_1 = require_container_snapshot();
      var lookup_1 = require_lookup();
      var module_activation_store_1 = require_module_activation_store();
      var Container = function() {
        function Container2(containerOptions) {
          var options = containerOptions || {};
          if (typeof options !== "object") {
            throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT);
          }
          if (options.defaultScope === void 0) {
            options.defaultScope = literal_types_1.BindingScopeEnum.Transient;
          } else if (options.defaultScope !== literal_types_1.BindingScopeEnum.Singleton && options.defaultScope !== literal_types_1.BindingScopeEnum.Transient && options.defaultScope !== literal_types_1.BindingScopeEnum.Request) {
            throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE);
          }
          if (options.autoBindInjectable === void 0) {
            options.autoBindInjectable = false;
          } else if (typeof options.autoBindInjectable !== "boolean") {
            throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE);
          }
          if (options.skipBaseClassChecks === void 0) {
            options.skipBaseClassChecks = false;
          } else if (typeof options.skipBaseClassChecks !== "boolean") {
            throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK);
          }
          this.options = {
            autoBindInjectable: options.autoBindInjectable,
            defaultScope: options.defaultScope,
            skipBaseClassChecks: options.skipBaseClassChecks
          };
          this.id = (0, id_1.id)();
          this._bindingDictionary = new lookup_1.Lookup();
          this._snapshots = [];
          this._middleware = null;
          this._activations = new lookup_1.Lookup();
          this._deactivations = new lookup_1.Lookup();
          this.parent = null;
          this._metadataReader = new metadata_reader_1.MetadataReader();
          this._moduleActivationStore = new module_activation_store_1.ModuleActivationStore();
        }
        __name(Container2, "Container");
        Container2.merge = function(container1, container2) {
          var containers = [];
          for (var _i = 2; _i < arguments.length; _i++) {
            containers[_i - 2] = arguments[_i];
          }
          var container = new Container2();
          var targetContainers = __spreadArray([container1, container2], containers, true).map(function(targetContainer) {
            return (0, planner_1.getBindingDictionary)(targetContainer);
          });
          var bindingDictionary = (0, planner_1.getBindingDictionary)(container);
          function copyDictionary(origin, destination) {
            origin.traverse(function(_key, value) {
              value.forEach(function(binding) {
                destination.add(binding.serviceIdentifier, binding.clone());
              });
            });
          }
          __name(copyDictionary, "copyDictionary");
          targetContainers.forEach(function(targetBindingDictionary) {
            copyDictionary(targetBindingDictionary, bindingDictionary);
          });
          return container;
        };
        Container2.prototype.load = function() {
          var modules = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            modules[_i] = arguments[_i];
          }
          var getHelpers = this._getContainerModuleHelpersFactory();
          for (var _a = 0, modules_1 = modules; _a < modules_1.length; _a++) {
            var currentModule = modules_1[_a];
            var containerModuleHelpers = getHelpers(currentModule.id);
            currentModule.registry(containerModuleHelpers.bindFunction, containerModuleHelpers.unbindFunction, containerModuleHelpers.isboundFunction, containerModuleHelpers.rebindFunction, containerModuleHelpers.unbindAsyncFunction, containerModuleHelpers.onActivationFunction, containerModuleHelpers.onDeactivationFunction);
          }
        };
        Container2.prototype.loadAsync = function() {
          var modules = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            modules[_i] = arguments[_i];
          }
          return __awaiter(this, void 0, void 0, function() {
            var getHelpers, _a, modules_2, currentModule, containerModuleHelpers;
            return __generator(this, function(_b) {
              switch (_b.label) {
                case 0:
                  getHelpers = this._getContainerModuleHelpersFactory();
                  _a = 0, modules_2 = modules;
                  _b.label = 1;
                case 1:
                  if (!(_a < modules_2.length))
                    return [3, 4];
                  currentModule = modules_2[_a];
                  containerModuleHelpers = getHelpers(currentModule.id);
                  return [4, currentModule.registry(containerModuleHelpers.bindFunction, containerModuleHelpers.unbindFunction, containerModuleHelpers.isboundFunction, containerModuleHelpers.rebindFunction, containerModuleHelpers.unbindAsyncFunction, containerModuleHelpers.onActivationFunction, containerModuleHelpers.onDeactivationFunction)];
                case 2:
                  _b.sent();
                  _b.label = 3;
                case 3:
                  _a++;
                  return [3, 1];
                case 4:
                  return [2];
              }
            });
          });
        };
        Container2.prototype.unload = function() {
          var _this = this;
          var modules = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            modules[_i] = arguments[_i];
          }
          modules.forEach(function(module2) {
            var deactivations = _this._removeModuleBindings(module2.id);
            _this._deactivateSingletons(deactivations);
            _this._removeModuleHandlers(module2.id);
          });
        };
        Container2.prototype.unloadAsync = function() {
          var modules = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            modules[_i] = arguments[_i];
          }
          return __awaiter(this, void 0, void 0, function() {
            var _a, modules_3, module_1, deactivations;
            return __generator(this, function(_b) {
              switch (_b.label) {
                case 0:
                  _a = 0, modules_3 = modules;
                  _b.label = 1;
                case 1:
                  if (!(_a < modules_3.length))
                    return [3, 4];
                  module_1 = modules_3[_a];
                  deactivations = this._removeModuleBindings(module_1.id);
                  return [4, this._deactivateSingletonsAsync(deactivations)];
                case 2:
                  _b.sent();
                  this._removeModuleHandlers(module_1.id);
                  _b.label = 3;
                case 3:
                  _a++;
                  return [3, 1];
                case 4:
                  return [2];
              }
            });
          });
        };
        Container2.prototype.bind = function(serviceIdentifier) {
          var scope = this.options.defaultScope || literal_types_1.BindingScopeEnum.Transient;
          var binding = new binding_1.Binding(serviceIdentifier, scope);
          this._bindingDictionary.add(serviceIdentifier, binding);
          return new binding_to_syntax_1.BindingToSyntax(binding);
        };
        Container2.prototype.rebind = function(serviceIdentifier) {
          this.unbind(serviceIdentifier);
          return this.bind(serviceIdentifier);
        };
        Container2.prototype.rebindAsync = function(serviceIdentifier) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, this.unbindAsync(serviceIdentifier)];
                case 1:
                  _a.sent();
                  return [2, this.bind(serviceIdentifier)];
              }
            });
          });
        };
        Container2.prototype.unbind = function(serviceIdentifier) {
          if (this._bindingDictionary.hasKey(serviceIdentifier)) {
            var bindings = this._bindingDictionary.get(serviceIdentifier);
            this._deactivateSingletons(bindings);
          }
          this._removeServiceFromDictionary(serviceIdentifier);
        };
        Container2.prototype.unbindAsync = function(serviceIdentifier) {
          return __awaiter(this, void 0, void 0, function() {
            var bindings;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  if (!this._bindingDictionary.hasKey(serviceIdentifier))
                    return [3, 2];
                  bindings = this._bindingDictionary.get(serviceIdentifier);
                  return [4, this._deactivateSingletonsAsync(bindings)];
                case 1:
                  _a.sent();
                  _a.label = 2;
                case 2:
                  this._removeServiceFromDictionary(serviceIdentifier);
                  return [2];
              }
            });
          });
        };
        Container2.prototype.unbindAll = function() {
          var _this = this;
          this._bindingDictionary.traverse(function(_key, value) {
            _this._deactivateSingletons(value);
          });
          this._bindingDictionary = new lookup_1.Lookup();
        };
        Container2.prototype.unbindAllAsync = function() {
          return __awaiter(this, void 0, void 0, function() {
            var promises;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  promises = [];
                  this._bindingDictionary.traverse(function(_key, value) {
                    promises.push(_this._deactivateSingletonsAsync(value));
                  });
                  return [4, Promise.all(promises)];
                case 1:
                  _a.sent();
                  this._bindingDictionary = new lookup_1.Lookup();
                  return [2];
              }
            });
          });
        };
        Container2.prototype.onActivation = function(serviceIdentifier, onActivation) {
          this._activations.add(serviceIdentifier, onActivation);
        };
        Container2.prototype.onDeactivation = function(serviceIdentifier, onDeactivation) {
          this._deactivations.add(serviceIdentifier, onDeactivation);
        };
        Container2.prototype.isBound = function(serviceIdentifier) {
          var bound = this._bindingDictionary.hasKey(serviceIdentifier);
          if (!bound && this.parent) {
            bound = this.parent.isBound(serviceIdentifier);
          }
          return bound;
        };
        Container2.prototype.isCurrentBound = function(serviceIdentifier) {
          return this._bindingDictionary.hasKey(serviceIdentifier);
        };
        Container2.prototype.isBoundNamed = function(serviceIdentifier, named) {
          return this.isBoundTagged(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
        };
        Container2.prototype.isBoundTagged = function(serviceIdentifier, key, value) {
          var bound = false;
          if (this._bindingDictionary.hasKey(serviceIdentifier)) {
            var bindings = this._bindingDictionary.get(serviceIdentifier);
            var request_1 = (0, planner_1.createMockRequest)(this, serviceIdentifier, key, value);
            bound = bindings.some(function(b) {
              return b.constraint(request_1);
            });
          }
          if (!bound && this.parent) {
            bound = this.parent.isBoundTagged(serviceIdentifier, key, value);
          }
          return bound;
        };
        Container2.prototype.snapshot = function() {
          this._snapshots.push(container_snapshot_1.ContainerSnapshot.of(this._bindingDictionary.clone(), this._middleware, this._activations.clone(), this._deactivations.clone(), this._moduleActivationStore.clone()));
        };
        Container2.prototype.restore = function() {
          var snapshot = this._snapshots.pop();
          if (snapshot === void 0) {
            throw new Error(ERROR_MSGS.NO_MORE_SNAPSHOTS_AVAILABLE);
          }
          this._bindingDictionary = snapshot.bindings;
          this._activations = snapshot.activations;
          this._deactivations = snapshot.deactivations;
          this._middleware = snapshot.middleware;
          this._moduleActivationStore = snapshot.moduleActivationStore;
        };
        Container2.prototype.createChild = function(containerOptions) {
          var child = new Container2(containerOptions || this.options);
          child.parent = this;
          return child;
        };
        Container2.prototype.applyMiddleware = function() {
          var middlewares = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            middlewares[_i] = arguments[_i];
          }
          var initial = this._middleware ? this._middleware : this._planAndResolve();
          this._middleware = middlewares.reduce(function(prev, curr) {
            return curr(prev);
          }, initial);
        };
        Container2.prototype.applyCustomMetadataReader = function(metadataReader) {
          this._metadataReader = metadataReader;
        };
        Container2.prototype.get = function(serviceIdentifier) {
          var getArgs = this._getNotAllArgs(serviceIdentifier, false);
          return this._getButThrowIfAsync(getArgs);
        };
        Container2.prototype.getAsync = function(serviceIdentifier) {
          return __awaiter(this, void 0, void 0, function() {
            var getArgs;
            return __generator(this, function(_a) {
              getArgs = this._getNotAllArgs(serviceIdentifier, false);
              return [2, this._get(getArgs)];
            });
          });
        };
        Container2.prototype.getTagged = function(serviceIdentifier, key, value) {
          var getArgs = this._getNotAllArgs(serviceIdentifier, false, key, value);
          return this._getButThrowIfAsync(getArgs);
        };
        Container2.prototype.getTaggedAsync = function(serviceIdentifier, key, value) {
          return __awaiter(this, void 0, void 0, function() {
            var getArgs;
            return __generator(this, function(_a) {
              getArgs = this._getNotAllArgs(serviceIdentifier, false, key, value);
              return [2, this._get(getArgs)];
            });
          });
        };
        Container2.prototype.getNamed = function(serviceIdentifier, named) {
          return this.getTagged(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
        };
        Container2.prototype.getNamedAsync = function(serviceIdentifier, named) {
          return this.getTaggedAsync(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
        };
        Container2.prototype.getAll = function(serviceIdentifier) {
          var getArgs = this._getAllArgs(serviceIdentifier);
          return this._getButThrowIfAsync(getArgs);
        };
        Container2.prototype.getAllAsync = function(serviceIdentifier) {
          var getArgs = this._getAllArgs(serviceIdentifier);
          return this._getAll(getArgs);
        };
        Container2.prototype.getAllTagged = function(serviceIdentifier, key, value) {
          var getArgs = this._getNotAllArgs(serviceIdentifier, true, key, value);
          return this._getButThrowIfAsync(getArgs);
        };
        Container2.prototype.getAllTaggedAsync = function(serviceIdentifier, key, value) {
          var getArgs = this._getNotAllArgs(serviceIdentifier, true, key, value);
          return this._getAll(getArgs);
        };
        Container2.prototype.getAllNamed = function(serviceIdentifier, named) {
          return this.getAllTagged(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
        };
        Container2.prototype.getAllNamedAsync = function(serviceIdentifier, named) {
          return this.getAllTaggedAsync(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
        };
        Container2.prototype.resolve = function(constructorFunction) {
          var isBound = this.isBound(constructorFunction);
          if (!isBound) {
            this.bind(constructorFunction).toSelf();
          }
          var resolved = this.get(constructorFunction);
          if (!isBound) {
            this.unbind(constructorFunction);
          }
          return resolved;
        };
        Container2.prototype._preDestroy = function(constructor, instance) {
          if (Reflect.hasMetadata(METADATA_KEY.PRE_DESTROY, constructor)) {
            var data = Reflect.getMetadata(METADATA_KEY.PRE_DESTROY, constructor);
            return instance[data.value]();
          }
        };
        Container2.prototype._removeModuleHandlers = function(moduleId) {
          var moduleActivationsHandlers = this._moduleActivationStore.remove(moduleId);
          this._activations.removeIntersection(moduleActivationsHandlers.onActivations);
          this._deactivations.removeIntersection(moduleActivationsHandlers.onDeactivations);
        };
        Container2.prototype._removeModuleBindings = function(moduleId) {
          return this._bindingDictionary.removeByCondition(function(binding) {
            return binding.moduleId === moduleId;
          });
        };
        Container2.prototype._deactivate = function(binding, instance) {
          var _this = this;
          var constructor = Object.getPrototypeOf(instance).constructor;
          try {
            if (this._deactivations.hasKey(binding.serviceIdentifier)) {
              var result = this._deactivateContainer(instance, this._deactivations.get(binding.serviceIdentifier).values());
              if ((0, async_1.isPromise)(result)) {
                return this._handleDeactivationError(result.then(function() {
                  return _this._propagateContainerDeactivationThenBindingAndPreDestroyAsync(binding, instance, constructor);
                }), constructor);
              }
            }
            var propagateDeactivationResult = this._propagateContainerDeactivationThenBindingAndPreDestroy(binding, instance, constructor);
            if ((0, async_1.isPromise)(propagateDeactivationResult)) {
              return this._handleDeactivationError(propagateDeactivationResult, constructor);
            }
          } catch (ex) {
            throw new Error(ERROR_MSGS.ON_DEACTIVATION_ERROR(constructor.name, ex.message));
          }
        };
        Container2.prototype._handleDeactivationError = function(asyncResult, constructor) {
          return __awaiter(this, void 0, void 0, function() {
            var ex_1;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  _a.trys.push([0, 2, , 3]);
                  return [4, asyncResult];
                case 1:
                  _a.sent();
                  return [3, 3];
                case 2:
                  ex_1 = _a.sent();
                  throw new Error(ERROR_MSGS.ON_DEACTIVATION_ERROR(constructor.name, ex_1.message));
                case 3:
                  return [2];
              }
            });
          });
        };
        Container2.prototype._deactivateContainer = function(instance, deactivationsIterator) {
          var _this = this;
          var deactivation = deactivationsIterator.next();
          while (deactivation.value) {
            var result = deactivation.value(instance);
            if ((0, async_1.isPromise)(result)) {
              return result.then(function() {
                return _this._deactivateContainerAsync(instance, deactivationsIterator);
              });
            }
            deactivation = deactivationsIterator.next();
          }
        };
        Container2.prototype._deactivateContainerAsync = function(instance, deactivationsIterator) {
          return __awaiter(this, void 0, void 0, function() {
            var deactivation;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  deactivation = deactivationsIterator.next();
                  _a.label = 1;
                case 1:
                  if (!deactivation.value)
                    return [3, 3];
                  return [4, deactivation.value(instance)];
                case 2:
                  _a.sent();
                  deactivation = deactivationsIterator.next();
                  return [3, 1];
                case 3:
                  return [2];
              }
            });
          });
        };
        Container2.prototype._getContainerModuleHelpersFactory = function() {
          var _this = this;
          var setModuleId = /* @__PURE__ */ __name(function(bindingToSyntax, moduleId) {
            bindingToSyntax._binding.moduleId = moduleId;
          }, "setModuleId");
          var getBindFunction = /* @__PURE__ */ __name(function(moduleId) {
            return function(serviceIdentifier) {
              var bindingToSyntax = _this.bind(serviceIdentifier);
              setModuleId(bindingToSyntax, moduleId);
              return bindingToSyntax;
            };
          }, "getBindFunction");
          var getUnbindFunction = /* @__PURE__ */ __name(function() {
            return function(serviceIdentifier) {
              return _this.unbind(serviceIdentifier);
            };
          }, "getUnbindFunction");
          var getUnbindAsyncFunction = /* @__PURE__ */ __name(function() {
            return function(serviceIdentifier) {
              return _this.unbindAsync(serviceIdentifier);
            };
          }, "getUnbindAsyncFunction");
          var getIsboundFunction = /* @__PURE__ */ __name(function() {
            return function(serviceIdentifier) {
              return _this.isBound(serviceIdentifier);
            };
          }, "getIsboundFunction");
          var getRebindFunction = /* @__PURE__ */ __name(function(moduleId) {
            return function(serviceIdentifier) {
              var bindingToSyntax = _this.rebind(serviceIdentifier);
              setModuleId(bindingToSyntax, moduleId);
              return bindingToSyntax;
            };
          }, "getRebindFunction");
          var getOnActivationFunction = /* @__PURE__ */ __name(function(moduleId) {
            return function(serviceIdentifier, onActivation) {
              _this._moduleActivationStore.addActivation(moduleId, serviceIdentifier, onActivation);
              _this.onActivation(serviceIdentifier, onActivation);
            };
          }, "getOnActivationFunction");
          var getOnDeactivationFunction = /* @__PURE__ */ __name(function(moduleId) {
            return function(serviceIdentifier, onDeactivation) {
              _this._moduleActivationStore.addDeactivation(moduleId, serviceIdentifier, onDeactivation);
              _this.onDeactivation(serviceIdentifier, onDeactivation);
            };
          }, "getOnDeactivationFunction");
          return function(mId) {
            return {
              bindFunction: getBindFunction(mId),
              isboundFunction: getIsboundFunction(),
              onActivationFunction: getOnActivationFunction(mId),
              onDeactivationFunction: getOnDeactivationFunction(mId),
              rebindFunction: getRebindFunction(mId),
              unbindFunction: getUnbindFunction(),
              unbindAsyncFunction: getUnbindAsyncFunction()
            };
          };
        };
        Container2.prototype._getAll = function(getArgs) {
          return Promise.all(this._get(getArgs));
        };
        Container2.prototype._get = function(getArgs) {
          var planAndResolveArgs = __assign(__assign({}, getArgs), { contextInterceptor: function(context) {
            return context;
          }, targetType: literal_types_1.TargetTypeEnum.Variable });
          if (this._middleware) {
            var middlewareResult = this._middleware(planAndResolveArgs);
            if (middlewareResult === void 0 || middlewareResult === null) {
              throw new Error(ERROR_MSGS.INVALID_MIDDLEWARE_RETURN);
            }
            return middlewareResult;
          }
          return this._planAndResolve()(planAndResolveArgs);
        };
        Container2.prototype._getButThrowIfAsync = function(getArgs) {
          var result = this._get(getArgs);
          if ((0, async_1.isPromiseOrContainsPromise)(result)) {
            throw new Error(ERROR_MSGS.LAZY_IN_SYNC(getArgs.serviceIdentifier));
          }
          return result;
        };
        Container2.prototype._getAllArgs = function(serviceIdentifier) {
          var getAllArgs = {
            avoidConstraints: true,
            isMultiInject: true,
            serviceIdentifier
          };
          return getAllArgs;
        };
        Container2.prototype._getNotAllArgs = function(serviceIdentifier, isMultiInject, key, value) {
          var getNotAllArgs = {
            avoidConstraints: false,
            isMultiInject,
            serviceIdentifier,
            key,
            value
          };
          return getNotAllArgs;
        };
        Container2.prototype._planAndResolve = function() {
          var _this = this;
          return function(args) {
            var context = (0, planner_1.plan)(_this._metadataReader, _this, args.isMultiInject, args.targetType, args.serviceIdentifier, args.key, args.value, args.avoidConstraints);
            context = args.contextInterceptor(context);
            var result = (0, resolver_1.resolve)(context);
            return result;
          };
        };
        Container2.prototype._deactivateIfSingleton = function(binding) {
          var _this = this;
          if (!binding.activated) {
            return;
          }
          if ((0, async_1.isPromise)(binding.cache)) {
            return binding.cache.then(function(resolved) {
              return _this._deactivate(binding, resolved);
            });
          }
          return this._deactivate(binding, binding.cache);
        };
        Container2.prototype._deactivateSingletons = function(bindings) {
          for (var _i = 0, bindings_1 = bindings; _i < bindings_1.length; _i++) {
            var binding = bindings_1[_i];
            var result = this._deactivateIfSingleton(binding);
            if ((0, async_1.isPromise)(result)) {
              throw new Error(ERROR_MSGS.ASYNC_UNBIND_REQUIRED);
            }
          }
        };
        Container2.prototype._deactivateSingletonsAsync = function(bindings) {
          return __awaiter(this, void 0, void 0, function() {
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, Promise.all(bindings.map(function(b) {
                    return _this._deactivateIfSingleton(b);
                  }))];
                case 1:
                  _a.sent();
                  return [2];
              }
            });
          });
        };
        Container2.prototype._propagateContainerDeactivationThenBindingAndPreDestroy = function(binding, instance, constructor) {
          if (this.parent) {
            return this._deactivate.bind(this.parent)(binding, instance);
          } else {
            return this._bindingDeactivationAndPreDestroy(binding, instance, constructor);
          }
        };
        Container2.prototype._propagateContainerDeactivationThenBindingAndPreDestroyAsync = function(binding, instance, constructor) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  if (!this.parent)
                    return [3, 2];
                  return [4, this._deactivate.bind(this.parent)(binding, instance)];
                case 1:
                  _a.sent();
                  return [3, 4];
                case 2:
                  return [4, this._bindingDeactivationAndPreDestroyAsync(binding, instance, constructor)];
                case 3:
                  _a.sent();
                  _a.label = 4;
                case 4:
                  return [2];
              }
            });
          });
        };
        Container2.prototype._removeServiceFromDictionary = function(serviceIdentifier) {
          try {
            this._bindingDictionary.remove(serviceIdentifier);
          } catch (e) {
            throw new Error(ERROR_MSGS.CANNOT_UNBIND + " " + (0, serialization_1.getServiceIdentifierAsString)(serviceIdentifier));
          }
        };
        Container2.prototype._bindingDeactivationAndPreDestroy = function(binding, instance, constructor) {
          var _this = this;
          if (typeof binding.onDeactivation === "function") {
            var result = binding.onDeactivation(instance);
            if ((0, async_1.isPromise)(result)) {
              return result.then(function() {
                return _this._preDestroy(constructor, instance);
              });
            }
          }
          return this._preDestroy(constructor, instance);
        };
        Container2.prototype._bindingDeactivationAndPreDestroyAsync = function(binding, instance, constructor) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  if (!(typeof binding.onDeactivation === "function"))
                    return [3, 2];
                  return [4, binding.onDeactivation(instance)];
                case 1:
                  _a.sent();
                  _a.label = 2;
                case 2:
                  return [4, this._preDestroy(constructor, instance)];
                case 3:
                  _a.sent();
                  return [2];
              }
            });
          });
        };
        return Container2;
      }();
      exports2.Container = Container;
    }
  });

  // ../../node_modules/inversify/lib/container/container_module.js
  var require_container_module = __commonJS({
    "../../node_modules/inversify/lib/container/container_module.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.AsyncContainerModule = exports2.ContainerModule = void 0;
      var id_1 = require_id();
      var ContainerModule = function() {
        function ContainerModule2(registry) {
          this.id = (0, id_1.id)();
          this.registry = registry;
        }
        __name(ContainerModule2, "ContainerModule");
        return ContainerModule2;
      }();
      exports2.ContainerModule = ContainerModule;
      var AsyncContainerModule = function() {
        function AsyncContainerModule2(registry) {
          this.id = (0, id_1.id)();
          this.registry = registry;
        }
        __name(AsyncContainerModule2, "AsyncContainerModule");
        return AsyncContainerModule2;
      }();
      exports2.AsyncContainerModule = AsyncContainerModule;
    }
  });

  // ../../node_modules/inversify/lib/utils/js.js
  var require_js = __commonJS({
    "../../node_modules/inversify/lib/utils/js.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.getFirstArrayDuplicate = void 0;
      function getFirstArrayDuplicate(array) {
        var seenValues = /* @__PURE__ */ new Set();
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
          var entry = array_1[_i];
          if (seenValues.has(entry)) {
            return entry;
          } else {
            seenValues.add(entry);
          }
        }
        return void 0;
      }
      __name(getFirstArrayDuplicate, "getFirstArrayDuplicate");
      exports2.getFirstArrayDuplicate = getFirstArrayDuplicate;
    }
  });

  // ../../node_modules/inversify/lib/annotation/decorator_utils.js
  var require_decorator_utils = __commonJS({
    "../../node_modules/inversify/lib/annotation/decorator_utils.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.createTaggedDecorator = exports2.tagProperty = exports2.tagParameter = exports2.decorate = void 0;
      var ERROR_MSGS = __importStar(require_error_msgs());
      var METADATA_KEY = __importStar(require_metadata_keys());
      var js_1 = require_js();
      function targetIsConstructorFunction(target) {
        return target.prototype !== void 0;
      }
      __name(targetIsConstructorFunction, "targetIsConstructorFunction");
      function _throwIfMethodParameter(parameterName) {
        if (parameterName !== void 0) {
          throw new Error(ERROR_MSGS.INVALID_DECORATOR_OPERATION);
        }
      }
      __name(_throwIfMethodParameter, "_throwIfMethodParameter");
      function tagParameter(annotationTarget, parameterName, parameterIndex, metadata) {
        _throwIfMethodParameter(parameterName);
        _tagParameterOrProperty(METADATA_KEY.TAGGED, annotationTarget, parameterIndex.toString(), metadata);
      }
      __name(tagParameter, "tagParameter");
      exports2.tagParameter = tagParameter;
      function tagProperty(annotationTarget, propertyName, metadata) {
        if (targetIsConstructorFunction(annotationTarget)) {
          throw new Error(ERROR_MSGS.INVALID_DECORATOR_OPERATION);
        }
        _tagParameterOrProperty(METADATA_KEY.TAGGED_PROP, annotationTarget.constructor, propertyName, metadata);
      }
      __name(tagProperty, "tagProperty");
      exports2.tagProperty = tagProperty;
      function _ensureNoMetadataKeyDuplicates(metadata) {
        var metadatas = [];
        if (Array.isArray(metadata)) {
          metadatas = metadata;
          var duplicate = (0, js_1.getFirstArrayDuplicate)(metadatas.map(function(md) {
            return md.key;
          }));
          if (duplicate !== void 0) {
            throw new Error(ERROR_MSGS.DUPLICATED_METADATA + " " + duplicate.toString());
          }
        } else {
          metadatas = [metadata];
        }
        return metadatas;
      }
      __name(_ensureNoMetadataKeyDuplicates, "_ensureNoMetadataKeyDuplicates");
      function _tagParameterOrProperty(metadataKey, annotationTarget, key, metadata) {
        var metadatas = _ensureNoMetadataKeyDuplicates(metadata);
        var paramsOrPropertiesMetadata = {};
        if (Reflect.hasOwnMetadata(metadataKey, annotationTarget)) {
          paramsOrPropertiesMetadata = Reflect.getMetadata(metadataKey, annotationTarget);
        }
        var paramOrPropertyMetadata = paramsOrPropertiesMetadata[key];
        if (paramOrPropertyMetadata === void 0) {
          paramOrPropertyMetadata = [];
        } else {
          var _loop_1 = /* @__PURE__ */ __name(function(m2) {
            if (metadatas.some(function(md) {
              return md.key === m2.key;
            })) {
              throw new Error(ERROR_MSGS.DUPLICATED_METADATA + " " + m2.key.toString());
            }
          }, "_loop_1");
          for (var _i = 0, paramOrPropertyMetadata_1 = paramOrPropertyMetadata; _i < paramOrPropertyMetadata_1.length; _i++) {
            var m = paramOrPropertyMetadata_1[_i];
            _loop_1(m);
          }
        }
        paramOrPropertyMetadata.push.apply(paramOrPropertyMetadata, metadatas);
        paramsOrPropertiesMetadata[key] = paramOrPropertyMetadata;
        Reflect.defineMetadata(metadataKey, paramsOrPropertiesMetadata, annotationTarget);
      }
      __name(_tagParameterOrProperty, "_tagParameterOrProperty");
      function createTaggedDecorator(metadata) {
        return function(target, targetKey, indexOrPropertyDescriptor) {
          if (typeof indexOrPropertyDescriptor === "number") {
            tagParameter(target, targetKey, indexOrPropertyDescriptor, metadata);
          } else {
            tagProperty(target, targetKey, metadata);
          }
        };
      }
      __name(createTaggedDecorator, "createTaggedDecorator");
      exports2.createTaggedDecorator = createTaggedDecorator;
      function _decorate(decorators, target) {
        Reflect.decorate(decorators, target);
      }
      __name(_decorate, "_decorate");
      function _param(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      }
      __name(_param, "_param");
      function decorate(decorator, target, parameterIndexOrProperty) {
        if (typeof parameterIndexOrProperty === "number") {
          _decorate([_param(parameterIndexOrProperty, decorator)], target);
        } else if (typeof parameterIndexOrProperty === "string") {
          Reflect.decorate([decorator], target, parameterIndexOrProperty);
        } else {
          _decorate([decorator], target);
        }
      }
      __name(decorate, "decorate");
      exports2.decorate = decorate;
    }
  });

  // ../../node_modules/inversify/lib/annotation/injectable.js
  var require_injectable = __commonJS({
    "../../node_modules/inversify/lib/annotation/injectable.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.injectable = void 0;
      var ERRORS_MSGS = __importStar(require_error_msgs());
      var METADATA_KEY = __importStar(require_metadata_keys());
      function injectable() {
        return function(target) {
          if (Reflect.hasOwnMetadata(METADATA_KEY.PARAM_TYPES, target)) {
            throw new Error(ERRORS_MSGS.DUPLICATED_INJECTABLE_DECORATOR);
          }
          var types = Reflect.getMetadata(METADATA_KEY.DESIGN_PARAM_TYPES, target) || [];
          Reflect.defineMetadata(METADATA_KEY.PARAM_TYPES, types, target);
          return target;
        };
      }
      __name(injectable, "injectable");
      exports2.injectable = injectable;
    }
  });

  // ../../node_modules/inversify/lib/annotation/tagged.js
  var require_tagged = __commonJS({
    "../../node_modules/inversify/lib/annotation/tagged.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.tagged = void 0;
      var metadata_1 = require_metadata();
      var decorator_utils_1 = require_decorator_utils();
      function tagged(metadataKey, metadataValue) {
        return (0, decorator_utils_1.createTaggedDecorator)(new metadata_1.Metadata(metadataKey, metadataValue));
      }
      __name(tagged, "tagged");
      exports2.tagged = tagged;
    }
  });

  // ../../node_modules/inversify/lib/annotation/named.js
  var require_named = __commonJS({
    "../../node_modules/inversify/lib/annotation/named.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.named = void 0;
      var METADATA_KEY = __importStar(require_metadata_keys());
      var metadata_1 = require_metadata();
      var decorator_utils_1 = require_decorator_utils();
      function named(name) {
        return (0, decorator_utils_1.createTaggedDecorator)(new metadata_1.Metadata(METADATA_KEY.NAMED_TAG, name));
      }
      __name(named, "named");
      exports2.named = named;
    }
  });

  // ../../node_modules/inversify/lib/annotation/inject_base.js
  var require_inject_base = __commonJS({
    "../../node_modules/inversify/lib/annotation/inject_base.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.injectBase = void 0;
      var error_msgs_1 = require_error_msgs();
      var metadata_1 = require_metadata();
      var decorator_utils_1 = require_decorator_utils();
      function injectBase(metadataKey) {
        return function(serviceIdentifier) {
          return function(target, targetKey, indexOrPropertyDescriptor) {
            if (serviceIdentifier === void 0) {
              var className = typeof target === "function" ? target.name : target.constructor.name;
              throw new Error((0, error_msgs_1.UNDEFINED_INJECT_ANNOTATION)(className));
            }
            return (0, decorator_utils_1.createTaggedDecorator)(new metadata_1.Metadata(metadataKey, serviceIdentifier))(target, targetKey, indexOrPropertyDescriptor);
          };
        };
      }
      __name(injectBase, "injectBase");
      exports2.injectBase = injectBase;
    }
  });

  // ../../node_modules/inversify/lib/annotation/inject.js
  var require_inject = __commonJS({
    "../../node_modules/inversify/lib/annotation/inject.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.inject = void 0;
      var METADATA_KEY = __importStar(require_metadata_keys());
      var inject_base_1 = require_inject_base();
      var inject = (0, inject_base_1.injectBase)(METADATA_KEY.INJECT_TAG);
      exports2.inject = inject;
    }
  });

  // ../../node_modules/inversify/lib/annotation/optional.js
  var require_optional = __commonJS({
    "../../node_modules/inversify/lib/annotation/optional.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.optional = void 0;
      var METADATA_KEY = __importStar(require_metadata_keys());
      var metadata_1 = require_metadata();
      var decorator_utils_1 = require_decorator_utils();
      function optional() {
        return (0, decorator_utils_1.createTaggedDecorator)(new metadata_1.Metadata(METADATA_KEY.OPTIONAL_TAG, true));
      }
      __name(optional, "optional");
      exports2.optional = optional;
    }
  });

  // ../../node_modules/inversify/lib/annotation/unmanaged.js
  var require_unmanaged = __commonJS({
    "../../node_modules/inversify/lib/annotation/unmanaged.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.unmanaged = void 0;
      var METADATA_KEY = __importStar(require_metadata_keys());
      var metadata_1 = require_metadata();
      var decorator_utils_1 = require_decorator_utils();
      function unmanaged() {
        return function(target, targetKey, index) {
          var metadata = new metadata_1.Metadata(METADATA_KEY.UNMANAGED_TAG, true);
          (0, decorator_utils_1.tagParameter)(target, targetKey, index, metadata);
        };
      }
      __name(unmanaged, "unmanaged");
      exports2.unmanaged = unmanaged;
    }
  });

  // ../../node_modules/inversify/lib/annotation/multi_inject.js
  var require_multi_inject = __commonJS({
    "../../node_modules/inversify/lib/annotation/multi_inject.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.multiInject = void 0;
      var METADATA_KEY = __importStar(require_metadata_keys());
      var inject_base_1 = require_inject_base();
      var multiInject = (0, inject_base_1.injectBase)(METADATA_KEY.MULTI_INJECT_TAG);
      exports2.multiInject = multiInject;
    }
  });

  // ../../node_modules/inversify/lib/annotation/target_name.js
  var require_target_name = __commonJS({
    "../../node_modules/inversify/lib/annotation/target_name.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.targetName = void 0;
      var METADATA_KEY = __importStar(require_metadata_keys());
      var metadata_1 = require_metadata();
      var decorator_utils_1 = require_decorator_utils();
      function targetName(name) {
        return function(target, targetKey, index) {
          var metadata = new metadata_1.Metadata(METADATA_KEY.NAME_TAG, name);
          (0, decorator_utils_1.tagParameter)(target, targetKey, index, metadata);
        };
      }
      __name(targetName, "targetName");
      exports2.targetName = targetName;
    }
  });

  // ../../node_modules/inversify/lib/annotation/property_event_decorator.js
  var require_property_event_decorator = __commonJS({
    "../../node_modules/inversify/lib/annotation/property_event_decorator.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.propertyEventDecorator = void 0;
      var metadata_1 = require_metadata();
      function propertyEventDecorator(eventKey, errorMessage) {
        return function() {
          return function(target, propertyKey) {
            var metadata = new metadata_1.Metadata(eventKey, propertyKey);
            if (Reflect.hasOwnMetadata(eventKey, target.constructor)) {
              throw new Error(errorMessage);
            }
            Reflect.defineMetadata(eventKey, metadata, target.constructor);
          };
        };
      }
      __name(propertyEventDecorator, "propertyEventDecorator");
      exports2.propertyEventDecorator = propertyEventDecorator;
    }
  });

  // ../../node_modules/inversify/lib/annotation/post_construct.js
  var require_post_construct = __commonJS({
    "../../node_modules/inversify/lib/annotation/post_construct.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.postConstruct = void 0;
      var ERRORS_MSGS = __importStar(require_error_msgs());
      var METADATA_KEY = __importStar(require_metadata_keys());
      var property_event_decorator_1 = require_property_event_decorator();
      var postConstruct = (0, property_event_decorator_1.propertyEventDecorator)(METADATA_KEY.POST_CONSTRUCT, ERRORS_MSGS.MULTIPLE_POST_CONSTRUCT_METHODS);
      exports2.postConstruct = postConstruct;
    }
  });

  // ../../node_modules/inversify/lib/annotation/pre_destroy.js
  var require_pre_destroy = __commonJS({
    "../../node_modules/inversify/lib/annotation/pre_destroy.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.preDestroy = void 0;
      var ERRORS_MSGS = __importStar(require_error_msgs());
      var METADATA_KEY = __importStar(require_metadata_keys());
      var property_event_decorator_1 = require_property_event_decorator();
      var preDestroy = (0, property_event_decorator_1.propertyEventDecorator)(METADATA_KEY.PRE_DESTROY, ERRORS_MSGS.MULTIPLE_PRE_DESTROY_METHODS);
      exports2.preDestroy = preDestroy;
    }
  });

  // ../../node_modules/inversify/lib/interfaces/interfaces.js
  var require_interfaces = __commonJS({
    "../../node_modules/inversify/lib/interfaces/interfaces.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.interfaces = void 0;
      var interfaces;
      (function(interfaces2) {
        ;
      })(interfaces || (interfaces = {}));
      exports2.interfaces = interfaces;
    }
  });

  // ../../node_modules/inversify/lib/inversify.js
  var require_inversify = __commonJS({
    "../../node_modules/inversify/lib/inversify.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.multiBindToService = exports2.getServiceIdentifierAsString = exports2.typeConstraint = exports2.namedConstraint = exports2.taggedConstraint = exports2.traverseAncerstors = exports2.decorate = exports2.interfaces = exports2.id = exports2.MetadataReader = exports2.preDestroy = exports2.postConstruct = exports2.targetName = exports2.multiInject = exports2.unmanaged = exports2.optional = exports2.LazyServiceIdentifer = exports2.inject = exports2.named = exports2.tagged = exports2.injectable = exports2.createTaggedDecorator = exports2.ContainerModule = exports2.AsyncContainerModule = exports2.TargetTypeEnum = exports2.BindingTypeEnum = exports2.BindingScopeEnum = exports2.Container = exports2.METADATA_KEY = void 0;
      var keys = __importStar(require_metadata_keys());
      exports2.METADATA_KEY = keys;
      var container_1 = require_container();
      Object.defineProperty(exports2, "Container", { enumerable: true, get: function() {
        return container_1.Container;
      } });
      var literal_types_1 = require_literal_types();
      Object.defineProperty(exports2, "BindingScopeEnum", { enumerable: true, get: function() {
        return literal_types_1.BindingScopeEnum;
      } });
      Object.defineProperty(exports2, "BindingTypeEnum", { enumerable: true, get: function() {
        return literal_types_1.BindingTypeEnum;
      } });
      Object.defineProperty(exports2, "TargetTypeEnum", { enumerable: true, get: function() {
        return literal_types_1.TargetTypeEnum;
      } });
      var container_module_1 = require_container_module();
      Object.defineProperty(exports2, "AsyncContainerModule", { enumerable: true, get: function() {
        return container_module_1.AsyncContainerModule;
      } });
      Object.defineProperty(exports2, "ContainerModule", { enumerable: true, get: function() {
        return container_module_1.ContainerModule;
      } });
      var decorator_utils_1 = require_decorator_utils();
      Object.defineProperty(exports2, "createTaggedDecorator", { enumerable: true, get: function() {
        return decorator_utils_1.createTaggedDecorator;
      } });
      var injectable_1 = require_injectable();
      Object.defineProperty(exports2, "injectable", { enumerable: true, get: function() {
        return injectable_1.injectable;
      } });
      var tagged_1 = require_tagged();
      Object.defineProperty(exports2, "tagged", { enumerable: true, get: function() {
        return tagged_1.tagged;
      } });
      var named_1 = require_named();
      Object.defineProperty(exports2, "named", { enumerable: true, get: function() {
        return named_1.named;
      } });
      var inject_1 = require_inject();
      Object.defineProperty(exports2, "inject", { enumerable: true, get: function() {
        return inject_1.inject;
      } });
      var lazy_service_identifier_1 = require_lazy_service_identifier();
      Object.defineProperty(exports2, "LazyServiceIdentifer", { enumerable: true, get: function() {
        return lazy_service_identifier_1.LazyServiceIdentifer;
      } });
      var optional_1 = require_optional();
      Object.defineProperty(exports2, "optional", { enumerable: true, get: function() {
        return optional_1.optional;
      } });
      var unmanaged_1 = require_unmanaged();
      Object.defineProperty(exports2, "unmanaged", { enumerable: true, get: function() {
        return unmanaged_1.unmanaged;
      } });
      var multi_inject_1 = require_multi_inject();
      Object.defineProperty(exports2, "multiInject", { enumerable: true, get: function() {
        return multi_inject_1.multiInject;
      } });
      var target_name_1 = require_target_name();
      Object.defineProperty(exports2, "targetName", { enumerable: true, get: function() {
        return target_name_1.targetName;
      } });
      var post_construct_1 = require_post_construct();
      Object.defineProperty(exports2, "postConstruct", { enumerable: true, get: function() {
        return post_construct_1.postConstruct;
      } });
      var pre_destroy_1 = require_pre_destroy();
      Object.defineProperty(exports2, "preDestroy", { enumerable: true, get: function() {
        return pre_destroy_1.preDestroy;
      } });
      var metadata_reader_1 = require_metadata_reader();
      Object.defineProperty(exports2, "MetadataReader", { enumerable: true, get: function() {
        return metadata_reader_1.MetadataReader;
      } });
      var id_1 = require_id();
      Object.defineProperty(exports2, "id", { enumerable: true, get: function() {
        return id_1.id;
      } });
      var interfaces_1 = require_interfaces();
      Object.defineProperty(exports2, "interfaces", { enumerable: true, get: function() {
        return interfaces_1.interfaces;
      } });
      var decorator_utils_2 = require_decorator_utils();
      Object.defineProperty(exports2, "decorate", { enumerable: true, get: function() {
        return decorator_utils_2.decorate;
      } });
      var constraint_helpers_1 = require_constraint_helpers();
      Object.defineProperty(exports2, "traverseAncerstors", { enumerable: true, get: function() {
        return constraint_helpers_1.traverseAncerstors;
      } });
      Object.defineProperty(exports2, "taggedConstraint", { enumerable: true, get: function() {
        return constraint_helpers_1.taggedConstraint;
      } });
      Object.defineProperty(exports2, "namedConstraint", { enumerable: true, get: function() {
        return constraint_helpers_1.namedConstraint;
      } });
      Object.defineProperty(exports2, "typeConstraint", { enumerable: true, get: function() {
        return constraint_helpers_1.typeConstraint;
      } });
      var serialization_1 = require_serialization();
      Object.defineProperty(exports2, "getServiceIdentifierAsString", { enumerable: true, get: function() {
        return serialization_1.getServiceIdentifierAsString;
      } });
      var binding_utils_1 = require_binding_utils();
      Object.defineProperty(exports2, "multiBindToService", { enumerable: true, get: function() {
        return binding_utils_1.multiBindToService;
      } });
    }
  });

  // ../../node_modules/@vxframework/core/dist/ioc/decorators.js
  var require_decorators2 = __commonJS({
    "../../node_modules/@vxframework/core/dist/ioc/decorators.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Optional = exports2.InjectAll = exports2.Inject = void 0;
      var inversify_1 = require_inversify();
      exports2.Inject = inversify_1.inject;
      exports2.InjectAll = inversify_1.multiInject;
      exports2.Optional = inversify_1.optional;
    }
  });

  // ../../node_modules/@vxframework/core/dist/ioc/index.js
  var require_ioc = __commonJS({
    "../../node_modules/@vxframework/core/dist/ioc/index.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
            __createBinding(exports3, m, p);
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      __exportStar(require_decorators2(), exports2);
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/types/app-builder.interface.js
  var require_app_builder_interface = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/types/app-builder.interface.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/types/app.interface.js
  var require_app_interface = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/types/app.interface.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/types/service-collection.interface.js
  var require_service_collection_interface = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/types/service-collection.interface.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/types/service-provider.interface.js
  var require_service_provider_interface = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/types/service-provider.interface.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/types/metadata-scanner.interface.js
  var require_metadata_scanner_interface = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/types/metadata-scanner.interface.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.ScansFor = void 0;
      var ScansFor = /* @__PURE__ */ __name((key) => (target) => {
        Object.defineProperty(target, "SCANS_FOR", { value: key, writable: false, enumerable: false });
      }, "ScansFor");
      exports2.ScansFor = ScansFor;
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/types/invocation-context.interface.js
  var require_invocation_context_interface = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/types/invocation-context.interface.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/types/exception-handler.interface.js
  var require_exception_handler_interface = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/types/exception-handler.interface.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.getHandles = exports2.HandlesException = void 0;
      var types_1 = require_types();
      var HandlesException = /* @__PURE__ */ __name((key) => (target) => {
        Object.defineProperty(target, "HANDLES", { value: key, writable: false, enumerable: false });
      }, "HandlesException");
      exports2.HandlesException = HandlesException;
      var getHandles = /* @__PURE__ */ __name((provider) => {
        return Reflect.get((0, types_1.getConstructor)(provider), "HANDLES");
      }, "getHandles");
      exports2.getHandles = getHandles;
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/types/guard.interface.js
  var require_guard_interface = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/types/guard.interface.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.getMethodGuards = exports2.getClassGuards = exports2.UseGuards = void 0;
      var types_1 = require_types();
      var CLASS_GUARDS_STORAGE_KEY = "CLASS_GUARDS_STORAGE";
      var METHOD_GUARDS_STORAGE_KEY = "METHOD_GUARDS_STORAGE";
      var getMethodKey = /* @__PURE__ */ __name((methodName) => METHOD_GUARDS_STORAGE_KEY + ":" + methodName, "getMethodKey");
      var UseGuards = /* @__PURE__ */ __name((...guards) => (target, methodName) => {
        var _a;
        const ctor = (0, types_1.getConstructor)(target);
        const key = methodName ? getMethodKey(methodName) : CLASS_GUARDS_STORAGE_KEY;
        const storage = (_a = Reflect.getMetadata(key, ctor)) !== null && _a !== void 0 ? _a : [];
        storage.push(...guards);
        Reflect.defineMetadata(key, storage, ctor);
      }, "UseGuards");
      exports2.UseGuards = UseGuards;
      var getClassGuards = /* @__PURE__ */ __name((target) => {
        var _a;
        const ctor = (0, types_1.getConstructor)(target);
        return (_a = Reflect.getMetadata(CLASS_GUARDS_STORAGE_KEY, ctor)) !== null && _a !== void 0 ? _a : [];
      }, "getClassGuards");
      exports2.getClassGuards = getClassGuards;
      var getMethodGuards = /* @__PURE__ */ __name((target, methodName) => {
        var _a;
        const ctor = (0, types_1.getConstructor)(target);
        return (_a = Reflect.getMetadata(getMethodKey(methodName), ctor)) !== null && _a !== void 0 ? _a : [];
      }, "getMethodGuards");
      exports2.getMethodGuards = getMethodGuards;
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/types/event-metadata.types.js
  var require_event_metadata_types = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/types/event-metadata.types.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/types/logger.interface.js
  var require_logger_interface = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/types/logger.interface.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/types/resource-emitter.interface.js
  var require_resource_emitter_interface = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/types/resource-emitter.interface.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/types/event-arg-transformer.interface.js
  var require_event_arg_transformer_interface = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/types/event-arg-transformer.interface.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.TransformsEventArgs = exports2.getTransforms = exports2.EVENT_ARG_TRANFORMER_TAG = void 0;
      var types_1 = require_types();
      exports2.EVENT_ARG_TRANFORMER_TAG = Symbol("EVENT_ARG_TRANFORMER");
      var getTransforms = /* @__PURE__ */ __name((transformer) => {
        return Reflect.get((0, types_1.getConstructor)(transformer), "TRANFORMS");
      }, "getTransforms");
      exports2.getTransforms = getTransforms;
      var TransformsEventArgs = /* @__PURE__ */ __name((to) => (target) => {
        Object.defineProperty(target, "TRANFORMS", { value: to, writable: false, enumerable: false });
      }, "TransformsEventArgs");
      exports2.TransformsEventArgs = TransformsEventArgs;
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/types/index.js
  var require_types2 = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/types/index.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
            __createBinding(exports3, m, p);
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      __exportStar(require_app_builder_interface(), exports2);
      __exportStar(require_app_interface(), exports2);
      __exportStar(require_service_collection_interface(), exports2);
      __exportStar(require_service_provider_interface(), exports2);
      __exportStar(require_metadata_scanner_interface(), exports2);
      __exportStar(require_invocation_context_interface(), exports2);
      __exportStar(require_exception_handler_interface(), exports2);
      __exportStar(require_guard_interface(), exports2);
      __exportStar(require_event_metadata_types(), exports2);
      __exportStar(require_logger_interface(), exports2);
      __exportStar(require_resource_emitter_interface(), exports2);
      __exportStar(require_event_arg_transformer_interface(), exports2);
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/handlers/event-arg-transformer.boundary.js
  var require_event_arg_transformer_boundary = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/handlers/event-arg-transformer.boundary.js"(exports2) {
      "use strict";
      var __decorate2 = exports2 && exports2.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var __metadata2 = exports2 && exports2.__metadata || function(k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(k, v);
      };
      var __param = exports2 && exports2.__param || function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.EventArgTransformer = void 0;
      var ioc_1 = require_ioc();
      var types_1 = require_types();
      var types_2 = require_types2();
      var EventArgTransformer = /* @__PURE__ */ __name(class EventArgTransformer {
        constructor(transformers = []) {
          this.map = /* @__PURE__ */ new Map();
          this.map.set(Number, Number);
          this.map.set(String, String);
          this.map.set(Object, (v) => v);
          this.map.set(Boolean, (v) => v === "true" || v === "1" || v === 1);
          transformers.forEach((transformer) => {
            const transforms = (0, types_2.getTransforms)(transformer);
            if (!transforms) {
              throw new Error(`Missing @TransformsEventArgs(type) decorator on ${(0, types_1.getConstructor)(transformer).name}`);
            }
            this.map.set(transforms, transformer.transform.bind(transformer));
          });
        }
        createTransformer(target, methodName) {
          const paramTypes = this.getMethodParamTypes(target, methodName);
          const mappers = paramTypes.map((type) => this.map.get(type));
          return (args) => {
            return args.map((arg, index) => {
              const type = paramTypes[index];
              if (!type) {
                return null;
              }
              const mapper = mappers[index];
              if (!mapper) {
                return null;
              }
              return mapper(arg);
            });
          };
        }
        getMethodParamTypes(target, methodName) {
          return Reflect.getMetadata("design:paramtypes", (0, types_1.getConstructor)(target).prototype, methodName);
        }
      }, "EventArgTransformer");
      EventArgTransformer = __decorate2([
        __param(0, (0, ioc_1.InjectAll)(types_2.EVENT_ARG_TRANFORMER_TAG)),
        __param(0, (0, ioc_1.Optional)()),
        __metadata2("design:paramtypes", [Array])
      ], EventArgTransformer);
      exports2.EventArgTransformer = EventArgTransformer;
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/handlers/exception.boundary.js
  var require_exception_boundary = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/handlers/exception.boundary.js"(exports2) {
      "use strict";
      var __decorate2 = exports2 && exports2.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var __metadata2 = exports2 && exports2.__metadata || function(k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(k, v);
      };
      var __param = exports2 && exports2.__param || function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      var __awaiter = exports2 && exports2.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        __name(adopt, "adopt");
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          __name(fulfilled, "fulfilled");
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          __name(rejected, "rejected");
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          __name(step, "step");
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.ExceptionBoundary = void 0;
      var ioc_1 = require_ioc();
      var types_1 = require_types();
      var tags_1 = require_tags();
      var ExceptionBoundary = /* @__PURE__ */ __name(class ExceptionBoundary {
        constructor(handlers = []) {
          this.handlers = new Map(handlers.map((handler) => {
            return [Reflect.get((0, types_1.getConstructor)(handler), "HANDLES"), handler];
          }));
        }
        handle(context, exception) {
          return __awaiter(this, void 0, void 0, function* () {
            const ctor = (0, types_1.getConstructor)(exception);
            const handler = this.handlers.get(ctor);
            if (!handler) {
              return false;
            }
            yield handler.handle(context, exception);
            return true;
          });
        }
      }, "ExceptionBoundary");
      __decorate2([
        (0, ioc_1.Inject)(tags_1.LOGGER_TAG),
        __metadata2("design:type", Object)
      ], ExceptionBoundary.prototype, "logger", void 0);
      ExceptionBoundary = __decorate2([
        __param(0, (0, ioc_1.Optional)()),
        __param(0, (0, ioc_1.InjectAll)(tags_1.EXCEPTION_HANDLER_TAG)),
        __metadata2("design:paramtypes", [Array])
      ], ExceptionBoundary);
      exports2.ExceptionBoundary = ExceptionBoundary;
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/handlers/guard.boundary.js
  var require_guard_boundary = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/handlers/guard.boundary.js"(exports2) {
      "use strict";
      var __decorate2 = exports2 && exports2.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var __metadata2 = exports2 && exports2.__metadata || function(k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(k, v);
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.GuardBoundary = void 0;
      var ioc_1 = require_ioc();
      var types_1 = require_types();
      var types_2 = require_types2();
      var tags_1 = require_tags();
      var GuardBoundary = class {
        constructor() {
          this.definedGuards = [];
        }
        getGuards(target, methodName) {
          const classGuards = (0, types_2.getClassGuards)(target);
          const methodGuards = (0, types_2.getMethodGuards)(target, methodName);
          const combined = [.../* @__PURE__ */ new Set([...classGuards, ...methodGuards])];
          const result = combined.map((guard) => {
            if ((0, types_1.isProvider)(guard)) {
              return guard;
            }
            const definedGuard = this.definedGuards.find((definedGuard2) => (0, types_1.getConstructor)(definedGuard2) === guard);
            if (!definedGuard) {
              throw new Error(`Guard ${guard.name} is not registered within the scope.`);
            }
            return definedGuard;
          });
          return result;
        }
      };
      __name(GuardBoundary, "GuardBoundary");
      __decorate2([
        (0, ioc_1.Optional)(),
        (0, ioc_1.InjectAll)(tags_1.GUARD_TAG),
        __metadata2("design:type", Array)
      ], GuardBoundary.prototype, "definedGuards", void 0);
      exports2.GuardBoundary = GuardBoundary;
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/handlers/handler-builder.js
  var require_handler_builder = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/handlers/handler-builder.js"(exports2) {
      "use strict";
      var __decorate2 = exports2 && exports2.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var __metadata2 = exports2 && exports2.__metadata || function(k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(k, v);
      };
      var __awaiter = exports2 && exports2.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        __name(adopt, "adopt");
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          __name(fulfilled, "fulfilled");
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          __name(rejected, "rejected");
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          __name(step, "step");
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.HandlerBuilder = void 0;
      var ioc_1 = require_ioc();
      var event_arg_transformer_boundary_1 = require_event_arg_transformer_boundary();
      var exception_boundary_1 = require_exception_boundary();
      var guard_boundary_1 = require_guard_boundary();
      var HandlerBuilder = class {
        build(target, methodName) {
          const boundMethod = target[methodName].bind(target);
          const guards = this.guardBoundary.getGuards(target, methodName);
          const mapParams = this.transformersBoundary.createTransformer(target, methodName);
          return (context) => __awaiter(this, void 0, void 0, function* () {
            try {
              context.args = mapParams(context.args);
              for (const guard of guards) {
                const isAllowed = yield guard.invoke(context);
                if (!isAllowed) {
                  context.result = {
                    isAborted: true
                  };
                  return;
                }
              }
              const result = yield boundMethod(...context.args);
              context.result = {
                result
              };
            } catch (e) {
              const isHandled = yield this.excetionBoundary.handle(context, e);
              context.result = {
                exception: e,
                isHandled
              };
            }
          });
        }
      };
      __name(HandlerBuilder, "HandlerBuilder");
      __decorate2([
        (0, ioc_1.Inject)(exception_boundary_1.ExceptionBoundary),
        __metadata2("design:type", exception_boundary_1.ExceptionBoundary)
      ], HandlerBuilder.prototype, "excetionBoundary", void 0);
      __decorate2([
        (0, ioc_1.Inject)(guard_boundary_1.GuardBoundary),
        __metadata2("design:type", guard_boundary_1.GuardBoundary)
      ], HandlerBuilder.prototype, "guardBoundary", void 0);
      __decorate2([
        (0, ioc_1.Inject)(event_arg_transformer_boundary_1.EventArgTransformer),
        __metadata2("design:type", event_arg_transformer_boundary_1.EventArgTransformer)
      ], HandlerBuilder.prototype, "transformersBoundary", void 0);
      exports2.HandlerBuilder = HandlerBuilder;
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/handlers/index.js
  var require_handlers = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/handlers/index.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
            __createBinding(exports3, m, p);
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      __exportStar(require_tags(), exports2);
      __exportStar(require_decorators(), exports2);
      __exportStar(require_handler_builder(), exports2);
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/handlers/logger.js
  var require_logger = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/handlers/logger.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Logger = void 0;
      var Logger = class {
        constructor(context) {
          this.context = context;
        }
        debug(message) {
          Logger.write(this, Logger.colors.LightBlue, "DEBUG", message);
        }
        error(error, message) {
          if (message) {
            Logger.write(this, Logger.colors.Red, "ERROR", message);
          }
          Logger.write(this, Logger.colors.Red, "ERROR", error.message);
          Logger.write(this, Logger.colors.Red, "ERROR", error.stack);
        }
        info(message) {
          Logger.write(this, Logger.colors.Green, "INFO", message);
        }
        log(message) {
          Logger.write(this, Logger.colors.Blue, "LOG", message);
        }
        warn(message) {
          Logger.write(this, Logger.colors.Orange, "WARN", message);
        }
        static getTimestamp() {
          const ts = (/* @__PURE__ */ new Date()).toISOString().replace(/T/, " ").replace(/\..+/, "");
          return " [" + ts + "]";
        }
        static write(self2, color, prefix, message) {
          const ts = Logger.getTimestamp();
          message = message || "null";
          console.log(`${color}[${self2.context}] [${prefix}]${ts} - ${message}${Logger.colors.Reset}`);
        }
      };
      __name(Logger, "Logger");
      exports2.Logger = Logger;
      Logger.colors = global.IsDuplicityVersion() ? {
        Orange: "\x1B[33m",
        Green: "\x1B[32m",
        Yellow: "\x1B[93m",
        Blue: "\x1B[34m",
        LightBlue: "\x1B[94m",
        Purple: "\x1B[35m",
        Reset: "\x1B[0m",
        Red: "\x1B[31m"
      } : {
        Orange: "^1",
        Green: "^2",
        Yellow: "^3",
        Blue: "^4",
        LightBlue: "^5",
        Purple: "^6",
        Reset: "^7",
        Red: "^9"
      };
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/scanners/chat.scanner.js
  var require_chat_scanner = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/scanners/chat.scanner.js"(exports2) {
      "use strict";
      var __decorate2 = exports2 && exports2.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var __metadata2 = exports2 && exports2.__metadata || function(k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(k, v);
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.ChatScanner = void 0;
      var ioc_1 = require_ioc();
      var handlers_1 = require_handlers();
      var types_1 = require_types2();
      var ChatScanner = /* @__PURE__ */ __name(class ChatScanner {
        constructor() {
          this.isServer = global.IsDuplicityVersion();
        }
        scan(target, metadata) {
          metadata.forEach(({ commandName, isRestricted, methodName }) => {
            const method = this.handlerBuilder.build(target, methodName);
            const handler = /* @__PURE__ */ __name((src, args) => {
              const source = src.toString();
              if (this.isServer) {
                args.unshift(source);
              }
              const context = {
                eventType: "chat command",
                eventName: commandName,
                handlerName: methodName,
                handlerClass: target,
                args,
                source
              };
              return method(context);
            }, "handler");
            global.RegisterCommand(commandName, handler, isRestricted);
          });
        }
      }, "ChatScanner");
      __decorate2([
        (0, ioc_1.Inject)(handlers_1.HandlerBuilder),
        __metadata2("design:type", handlers_1.HandlerBuilder)
      ], ChatScanner.prototype, "handlerBuilder", void 0);
      ChatScanner = __decorate2([
        (0, types_1.ScansFor)(handlers_1.OnChat.METADATA_KEY)
      ], ChatScanner);
      exports2.ChatScanner = ChatScanner;
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/scanners/event.scanner.js
  var require_event_scanner = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/scanners/event.scanner.js"(exports2) {
      "use strict";
      var __decorate2 = exports2 && exports2.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var __metadata2 = exports2 && exports2.__metadata || function(k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(k, v);
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.EventScanner = void 0;
      var ioc_1 = require_ioc();
      var handlers_1 = require_handlers();
      var types_1 = require_types2();
      var EventScanner = /* @__PURE__ */ __name(class EventScanner {
        constructor() {
          this.internalEvents = ["playerConnecting", "playerDropped", "playerJoining"];
          this.isServer = global.IsDuplicityVersion();
        }
        scan(target, metadata) {
          metadata.forEach(({ eventName, methodName }) => {
            const method = this.handlerBuilder.build(target, methodName);
            const isServer = this.isServer && this.internalEvents.includes(eventName);
            global.on(eventName, (...args) => {
              var _a;
              const source = (_a = global.source) === null || _a === void 0 ? void 0 : _a.toString();
              if (isServer) {
                args.unshift(source);
              }
              const context = {
                eventType: "event",
                eventName,
                handlerName: methodName,
                handlerClass: target,
                args,
                source
              };
              return method(context);
            });
          });
        }
      }, "EventScanner");
      __decorate2([
        (0, ioc_1.Inject)(handlers_1.HandlerBuilder),
        __metadata2("design:type", handlers_1.HandlerBuilder)
      ], EventScanner.prototype, "handlerBuilder", void 0);
      EventScanner = __decorate2([
        (0, types_1.ScansFor)(handlers_1.OnEvent.METADATA_KEY)
      ], EventScanner);
      exports2.EventScanner = EventScanner;
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/scanners/net-event.scanner.js
  var require_net_event_scanner = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/scanners/net-event.scanner.js"(exports2) {
      "use strict";
      var __decorate2 = exports2 && exports2.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var __metadata2 = exports2 && exports2.__metadata || function(k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(k, v);
      };
      var __awaiter = exports2 && exports2.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        __name(adopt, "adopt");
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          __name(fulfilled, "fulfilled");
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          __name(rejected, "rejected");
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          __name(step, "step");
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.NetEventScanner = void 0;
      var ioc_1 = require_ioc();
      var handlers_1 = require_handlers();
      var types_1 = require_types2();
      var NetEventScanner = /* @__PURE__ */ __name(class NetEventScanner {
        constructor() {
          this.isServer = global.IsDuplicityVersion();
        }
        scan(target, metadata) {
          metadata.forEach(({ eventName, methodName }) => {
            const method = this.handlerBuilder.build(target, methodName);
            global.onNet(eventName, (...args) => __awaiter(this, void 0, void 0, function* () {
              var _a;
              console.log("triggered", eventName);
              const source = (_a = global.source) === null || _a === void 0 ? void 0 : _a.toString();
              if (this.isServer) {
                args.unshift(source);
              }
              const context = {
                eventType: "net event",
                eventName,
                handlerName: methodName,
                handlerClass: target,
                source,
                args
              };
              return method(context);
            }));
          });
        }
      }, "NetEventScanner");
      __decorate2([
        (0, ioc_1.Inject)(handlers_1.HandlerBuilder),
        __metadata2("design:type", handlers_1.HandlerBuilder)
      ], NetEventScanner.prototype, "handlerBuilder", void 0);
      NetEventScanner = __decorate2([
        (0, types_1.ScansFor)(handlers_1.OnNetEvent.METADATA_KEY)
      ], NetEventScanner);
      exports2.NetEventScanner = NetEventScanner;
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/scanners/export.scanner.js
  var require_export_scanner = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/scanners/export.scanner.js"(exports2) {
      "use strict";
      var __decorate2 = exports2 && exports2.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var __metadata2 = exports2 && exports2.__metadata || function(k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(k, v);
      };
      var __awaiter = exports2 && exports2.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        __name(adopt, "adopt");
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          __name(fulfilled, "fulfilled");
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          __name(rejected, "rejected");
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          __name(step, "step");
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.ExportScanner = void 0;
      var ioc_1 = require_ioc();
      var handlers_1 = require_handlers();
      var types_1 = require_types2();
      var ExportScanner = /* @__PURE__ */ __name(class ExportScanner {
        scan(target, metadata) {
          metadata.forEach(({ exportName, methodName }) => __awaiter(this, void 0, void 0, function* () {
            const method = this.handlerBuilder.build(target, methodName);
            global.exports(exportName, (...args) => __awaiter(this, void 0, void 0, function* () {
              const context = {
                eventType: "export",
                eventName: exportName,
                handlerName: methodName,
                handlerClass: target,
                source: global.GetInvokingResource(),
                args
              };
              yield method(context);
              if ("result" in context.result) {
                return context.result.result;
              }
              if ("exception" in context.result && !context.result.isHandled) {
                throw context.result.exception;
              }
            }));
          }));
        }
      }, "ExportScanner");
      __decorate2([
        (0, ioc_1.Inject)(handlers_1.HandlerBuilder),
        __metadata2("design:type", handlers_1.HandlerBuilder)
      ], ExportScanner.prototype, "handlerBuilder", void 0);
      ExportScanner = __decorate2([
        (0, types_1.ScansFor)(handlers_1.Exported.METADATA_KEY)
      ], ExportScanner);
      exports2.ExportScanner = ExportScanner;
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/scanners/resource-event.scanner.js
  var require_resource_event_scanner = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/scanners/resource-event.scanner.js"(exports2) {
      "use strict";
      var __decorate2 = exports2 && exports2.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var __metadata2 = exports2 && exports2.__metadata || function(k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(k, v);
      };
      var __importDefault = exports2 && exports2.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.ResourceEventScanner = void 0;
      var eventemitter2_1 = __importDefault(require_eventemitter2());
      var ioc_1 = require_ioc();
      var handlers_1 = require_handlers();
      var types_1 = require_types2();
      var ResourceEventScanner = /* @__PURE__ */ __name(class ResourceEventScanner {
        scan(target, metadata) {
          metadata.forEach(({ eventName, methodName }) => {
            const method = target[methodName].bind(target);
            this.eventEmitter.on(eventName, method);
          });
        }
      }, "ResourceEventScanner");
      __decorate2([
        (0, ioc_1.Inject)(handlers_1.HandlerBuilder),
        __metadata2("design:type", handlers_1.HandlerBuilder)
      ], ResourceEventScanner.prototype, "handlerBuilder", void 0);
      __decorate2([
        (0, ioc_1.Inject)(handlers_1.RESOUCE_EMITTER_TAG),
        __metadata2("design:type", eventemitter2_1.default)
      ], ResourceEventScanner.prototype, "eventEmitter", void 0);
      ResourceEventScanner = __decorate2([
        (0, types_1.ScansFor)(handlers_1.OnResourceEvent.METADATA_KEY)
      ], ResourceEventScanner);
      exports2.ResourceEventScanner = ResourceEventScanner;
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/scanners/index.js
  var require_scanners = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/scanners/index.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
            __createBinding(exports3, m, p);
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      __exportStar(require_chat_scanner(), exports2);
      __exportStar(require_event_scanner(), exports2);
      __exportStar(require_net_event_scanner(), exports2);
      __exportStar(require_export_scanner(), exports2);
      __exportStar(require_resource_event_scanner(), exports2);
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/impl/app.js
  var require_app = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/impl/app.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.App = void 0;
      var types_1 = require_types();
      var utils_1 = require_utils();
      var handlers_1 = require_handlers();
      var App = class {
        constructor(provider) {
          this.provider = provider;
        }
        start() {
          const controllers = this.provider.getAll(handlers_1.CONTROLLER_TAG);
          const scanners = this.provider.getAll(handlers_1.SCANNER_TAG);
          controllers.forEach((controller) => {
            scanners.forEach((scanner) => {
              const metadata = (0, utils_1.getProviderMetadata)(controller, Reflect.get((0, types_1.getConstructor)(scanner), "SCANS_FOR"));
              scanner.scan(controller, metadata);
            });
          });
        }
      };
      __name(App, "App");
      exports2.App = App;
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/impl/service-provider.js
  var require_service_provider = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/impl/service-provider.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.ServiceProvider = void 0;
      var ServiceProvider = class {
        constructor(container) {
          this.container = container;
        }
        get(key) {
          return this.container.isBound(key) ? this.container.get(key) : void 0;
        }
        getAll(key) {
          return this.container.isBound(key) ? this.container.getAll(key) : [];
        }
      };
      __name(ServiceProvider, "ServiceProvider");
      exports2.ServiceProvider = ServiceProvider;
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/impl/service-collection.js
  var require_service_collection = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/impl/service-collection.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.ServiceCollection = void 0;
      var inversify_1 = require_inversify();
      var types_1 = require_types();
      var service_provider_1 = require_service_provider();
      var ServiceCollection = class {
        constructor() {
          this.container = new inversify_1.Container({
            skipBaseClassChecks: true,
            defaultScope: "Singleton",
            autoBindInjectable: true
          });
          this.provider = new service_provider_1.ServiceProvider(this.container);
        }
        addService(key, service) {
          if ((0, types_1.isConstructor)(service)) {
            this.tryDecorate(service);
            this.container.bind(key).to(service).inSingletonScope();
          } else {
            this.container.bind(key).toConstantValue(service);
          }
          return this;
        }
        addFactory(key, factory) {
          this.container.bind(key).toDynamicValue((context) => {
            var _a, _b;
            const target = (_b = (_a = context.currentRequest.parentRequest) === null || _a === void 0 ? void 0 : _a.bindings[0]) === null || _b === void 0 ? void 0 : _b.implementationType;
            return factory(this.provider, target);
          }).inTransientScope();
          return this;
        }
        build() {
          return this.provider;
        }
        tryDecorate(target) {
          try {
            (0, inversify_1.decorate)((0, inversify_1.injectable)(), target);
          } catch (e) {
          }
        }
      };
      __name(ServiceCollection, "ServiceCollection");
      exports2.ServiceCollection = ServiceCollection;
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/impl/app-builder.js
  var require_app_builder = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/impl/app-builder.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.AppBuilder = void 0;
      var eventemitter2_1 = require_eventemitter2();
      var types_1 = require_types();
      var handlers_1 = require_handlers();
      var exception_boundary_1 = require_exception_boundary();
      var guard_boundary_1 = require_guard_boundary();
      var logger_1 = require_logger();
      var scanners_1 = require_scanners();
      var types_2 = require_types2();
      var app_1 = require_app();
      var service_collection_1 = require_service_collection();
      var event_arg_transformer_boundary_1 = require_event_arg_transformer_boundary();
      var AppBuilder = class {
        constructor() {
          this.scanners = /* @__PURE__ */ new Map();
          this.services = new service_collection_1.ServiceCollection();
          this.addScanner(scanners_1.ChatScanner);
          this.addScanner(scanners_1.ExportScanner);
          this.addScanner(scanners_1.EventScanner);
          this.addScanner(scanners_1.NetEventScanner);
          this.addScanner(scanners_1.ResourceEventScanner);
          this.services.addService(event_arg_transformer_boundary_1.EventArgTransformer, event_arg_transformer_boundary_1.EventArgTransformer);
          this.services.addFactory(handlers_1.LOGGER_TAG, (_, target) => {
            var _a;
            const context = (_a = target === null || target === void 0 ? void 0 : target.name) !== null && _a !== void 0 ? _a : "UNKNOWN";
            return new logger_1.Logger(context);
          });
          this.services.addService(handlers_1.RESOUCE_EMITTER_TAG, new eventemitter2_1.EventEmitter2({
            wildcard: true,
            maxListeners: 9999
          }));
        }
        addTransformer(transformer) {
          const transforms = (0, types_2.getTransforms)(transformer);
          if (!transforms) {
            throw new Error(`Missing @TransformsEventArgs(type) decorator on ${(0, types_1.getConstructor)(transformer).name}`);
          }
          this.services.addService(types_2.EVENT_ARG_TRANFORMER_TAG, transformer);
          return this;
        }
        addExceptionHandler(handler) {
          const handles = (0, types_2.getHandles)(handler);
          if (!handles) {
            throw new Error(`Missing @HandlesException(exceptionConstructor) decorator on ${(0, types_1.getConstructor)(handler).name}`);
          }
          this.services.addService(handlers_1.EXCEPTION_HANDLER_TAG, handler);
          return this;
        }
        addGuard(guard) {
          this.services.addService(handlers_1.GUARD_TAG, guard);
          return this;
        }
        addController(controller) {
          this.services.addService(handlers_1.CONTROLLER_TAG, controller);
          return this;
        }
        addScanner(scanner) {
          const ctor = (0, types_1.getConstructor)(scanner);
          const scans = Reflect.get(ctor, "SCANS_FOR");
          if (!scans) {
            throw new Error(`Missing @ScansFor(metadataKey) decorator on ${ctor.name}`);
          }
          this.scanners.set(scans, scanner);
          return this;
        }
        build() {
          this.scanners.forEach((scaner) => {
            this.services.addService(handlers_1.SCANNER_TAG, scaner);
          });
          this.scanners.clear();
          this.services.addService(exception_boundary_1.ExceptionBoundary, exception_boundary_1.ExceptionBoundary);
          this.services.addService(guard_boundary_1.GuardBoundary, guard_boundary_1.GuardBoundary);
          this.services.addService(handlers_1.HandlerBuilder, handlers_1.HandlerBuilder);
          return new app_1.App(this.services.build());
        }
      };
      __name(AppBuilder, "AppBuilder");
      exports2.AppBuilder = AppBuilder;
    }
  });

  // ../../node_modules/@vxframework/core/dist/app.factory.js
  var require_app_factory = __commonJS({
    "../../node_modules/@vxframework/core/dist/app.factory.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.AppFactory = void 0;
      var app_builder_1 = require_app_builder();
      var AppFactory = class {
        static createBuilder() {
          return new app_builder_1.AppBuilder();
        }
      };
      __name(AppFactory, "AppFactory");
      exports2.AppFactory = AppFactory;
    }
  });

  // ../../node_modules/@vxframework/core/dist/app/index.js
  var require_app2 = __commonJS({
    "../../node_modules/@vxframework/core/dist/app/index.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
            __createBinding(exports3, m, p);
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      __exportStar(require_types2(), exports2);
      __exportStar(require_handlers(), exports2);
    }
  });

  // ../../node_modules/@vxframework/core/dist/index.js
  var require_dist = __commonJS({
    "../../node_modules/@vxframework/core/dist/index.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
            __createBinding(exports3, m, p);
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      require_Reflect();
      __exportStar(require_app_factory(), exports2);
      __exportStar(require_utils(), exports2);
      __exportStar(require_types(), exports2);
      __exportStar(require_app2(), exports2);
      __exportStar(require_ioc(), exports2);
    }
  });

  // src/index.ts
  var __decorate = function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var core_1 = require_dist();
  var builder = core_1.AppFactory.createBuilder();
  var TestController = class {
    onNet() {
      return;
    }
  };
  __name(TestController, "TestController");
  __decorate([
    (0, core_1.OnNetEvent)("qwe"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
  ], TestController.prototype, "onNet", null);
  builder.addController(TestController);
  var app = builder.build();
  app.start();
})();
/*! Bundled license information:

reflect-metadata/Reflect.js:
  (*! *****************************************************************************
  Copyright (C) Microsoft. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** *)

eventemitter2/lib/eventemitter2.js:
  (*!
   * EventEmitter2
   * https://github.com/hij1nx/EventEmitter2
   *
   * Copyright (c) 2013 hij1nx
   * Licensed under the MIT license.
   *)
*/
