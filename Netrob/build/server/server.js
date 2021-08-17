require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var chunk = require("./" + "updates/" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest() {
/******/ 		try {
/******/ 			var update = require("./" + "updates/" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch (e) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/ 		return Promise.resolve(update);
/******/ 	}
/******/
/******/ 	//eslint-disable-next-line no-unused-vars
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "d1e39944fd0a154b4d0c";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"server": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./chunks/" + ({"about~admin~contact~contest~help~ide~indexedDB~login~not-found~privacy~register~webrtc":"about~admin~contact~contest~help~ide~indexedDB~login~not-found~privacy~register~webrtc","help":"help","about":"about","admin":"admin","contact":"contact","contest":"contest","ide":"ide","indexedDB":"indexedDB","login":"login","not-found":"not-found","privacy":"privacy","register":"register","webrtc":"webrtc"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./chunk-manifest.json":
/***/ (function(module, exports) {

module.exports = require("./chunk-manifest.json");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/error/ErrorPage.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\nhtml {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  padding: 0 32px;\n  padding: 0 2rem;\n  height: 100%;\n  font-family: sans-serif;\n  text-align: center;\n  color: #888;\n}\n\nbody {\n  margin: 0;\n}\n\nh1 {\n  font-weight: 400;\n  color: #555;\n}\n\npre {\n  white-space: pre-wrap;\n  text-align: left;\n}\n", "", {"version":3,"sources":["/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/routes/error/ErrorPage.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,qBAAqB;EACrB,cAAc;EACd,uBAAuB;MACnB,oBAAoB;EACxB,sBAAsB;MAClB,wBAAwB;EAC5B,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;EACb,wBAAwB;EACxB,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,UAAU;CACX;;AAED;EACE,iBAAiB;EACjB,YAAY;CACb;;AAED;EACE,sBAAsB;EACtB,iBAAiB;CAClB","file":"ErrorPage.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\nhtml {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  padding: 0 32px;\n  padding: 0 2rem;\n  height: 100%;\n  font-family: sans-serif;\n  text-align: center;\n  color: #888;\n}\n\nbody {\n  margin: 0;\n}\n\nh1 {\n  font-weight: 400;\n  color: #555;\n}\n\npre {\n  white-space: pre-wrap;\n  text-align: left;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */



var inserted = {};

function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode("0x" + p1);
  }));
}

function removeCss(ids) {
  ids.forEach(function (id) {
    if (--inserted[id] <= 0) {
      var elem = document.getElementById(id);

      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }
  });
}

function insertCss(styles, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$replace = _ref.replace,
      replace = _ref$replace === void 0 ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === void 0 ? false : _ref$prepend,
      _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;

  var ids = [];

  for (var i = 0; i < styles.length; i++) {
    var _styles$i = styles[i],
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];
    var id = "" + prefix + moduleId + "-" + i;
    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;
    var elem = document.getElementById(id);
    var create = false;

    if (!elem) {
      create = true;
      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;

    if (sourceMap && typeof btoa === 'function') {
      cssText += "\n/*# sourceMappingURL=data:application/json;base64," + b64EncodeUnicode(JSON.stringify(sourceMap)) + "*/";
      cssText += "\n/*# sourceURL=" + sourceMap.file + "?" + id + "*/";
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;
//# sourceMappingURL=insertCss.js.map


/***/ }),

/***/ "./src/components/App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("isomorphic-style-loader/StyleContext");
/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/theme.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/locale/index.js");
/* harmony import */ var _users_AuthProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/users/AuthProvider.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/App.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */








 // Since the current React Starter Kit uses older React Context API that cannot be typed,
// here we declare duplicate type information.

const ContextRuntimeType = {
  // Universal HTTP client
  pathname: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  // Apollo Client
  client: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  // Locale
  locales: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string).isRequired
};
const PropTypesRuntimeType = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  context: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape(ContextRuntimeType).isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired
};
/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   };
 *
 *   ReactDOM.render(
 *     <App context={context}>
 *       <Layout>
 *         <LandingPage />
 *       </Layout>
 *     </App>,
 *     container,
 *   );
 */

class App extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      context: {
        client,
        locales
      },
      insertCss,
      children
    } = this.props; // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_5___default.a.Provider, {
      value: {
        insertCss
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["ApolloProvider"], {
      client: client,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
      theme: _theme__WEBPACK_IMPORTED_MODULE_6__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_locale__WEBPACK_IMPORTED_MODULE_7__["LocaleProvider"], {
      userAgentLocales: locales,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_users_AuthProvider__WEBPACK_IMPORTED_MODULE_8__["AuthProvider"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }
    }), children)))));
  }

}

_defineProperty(App, "propTypes", PropTypesRuntimeType);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/locale/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleContext", function() { return LocaleContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleProvider", function() { return LocaleProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLocale", function() { return useLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleConsumer", function() { return LocaleConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleSelector", function() { return LocaleSelector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/translations/index.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/locale/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const LocaleContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({
  preferredLocale: null,
  preferredLocales: [],
  setPreferredLocale: () => {
    throw new Error('setPreferredLocale not specified');
  }
});

/**
 * `LocaleProvider` takes an array of locales that the user agent indicates are
 * preferred by the user, and adds the option for the user to specify their own
 * preference.
 *
 * Code manipulating the explicitly given preference should use
 * `preferredLocale` and `setPreferredLocale`; code trying to find the best
 * supported locale should use `preferredLocales`, which prepends the stored
 * preference (if any) to the user agent locales, and choose the first
 * supported locale from that list.
 *
 * Other than providing the preferences, `LocaleProvider` also instantiates a
 * `IntlProvider` with an appropriate locale, so the `children` can use all of
 * the `react-intl` facilities. The locale, used e.g. for date and number
 * formatting, is chosen as `preferredLocales[0] ?? en`; the translation
 * messages are chosen using `getTranslations`, with `en` as the fallback
 * message key.
 */
function LocaleProvider({
  userAgentLocales,
  children
}) {
  var _preferredLocales$, _getTranslation;

  const [preferredLocale, setPreferredLocale] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](() => {
    var _localStorage$getItem;

    if (true) return null;
    return (_localStorage$getItem = localStorage.getItem('preferred-locale')) !== null && _localStorage$getItem !== void 0 ? _localStorage$getItem : null;
  });
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    if (true) return;

    if (preferredLocale !== null) {
      localStorage.setItem('preferred-locale', preferredLocale);
    } else {
      localStorage.removeItem('preferred-locale');
    }
  }, [preferredLocale]);
  const preferredLocales = [...(preferredLocale === null ? [] : [preferredLocale]), ...userAgentLocales];
  const locale = (_preferredLocales$ = preferredLocales[0]) !== null && _preferredLocales$ !== void 0 ? _preferredLocales$ : 'en';
  const messages = (_getTranslation = Object(_translations__WEBPACK_IMPORTED_MODULE_2__["getTranslation"])(preferredLocales, _translations__WEBPACK_IMPORTED_MODULE_2__["MESSAGES"])) !== null && _getTranslation !== void 0 ? _getTranslation : _translations__WEBPACK_IMPORTED_MODULE_2__["MESSAGES"].en;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LocaleContext.Provider, {
    value: {
      preferredLocale,
      preferredLocales,
      setPreferredLocale
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["IntlProvider"], {
    locale: locale,
    messages: messages,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, children));
}
/**
 * React hook for accessing the locale context.
 */

function useLocale() {
  return react__WEBPACK_IMPORTED_MODULE_0__["useContext"](LocaleContext);
}

/**
 * Component for accessing the locale context from class components.
 */
function LocaleConsumer({
  children
}) {
  const locale = useLocale();
  return children(locale);
}

/**
 * Component for using a different component based on the locale. The
 * `components` prop is a map from locale strings to component types.
 * One component is chosen using `getTranslation`, with `en` as the fallback
 * key.
 */
function LocaleSelector({
  components,
  ...props
}) {
  var _getTranslation2;

  const {
    preferredLocales
  } = useLocale();
  const Component = (_getTranslation2 = Object(_translations__WEBPACK_IMPORTED_MODULE_2__["getTranslation"])(preferredLocales, components)) !== null && _getTranslation2 !== void 0 ? _getTranslation2 : components.en;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, _extends({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 10
    }
  }));
}

/***/ }),

/***/ "./src/components/misc/hooks/apollo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeQuery", function() { return makeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeLazyQuery", function() { return makeLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSubscription", function() { return makeSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMutation", function() { return makeMutation; });
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0__);
/**
 * The `makeFoo` hook factories in this module wrap Apollo's `useFoo` hooks for more convenient typing.
 *
 * Using the Apollo hooks directly leads to code like this:
 *
 *    import { useMutation } from '@apollo/react-hooks';
 *    import gql from 'graphql-tag';
 *
 *    import {
 *      type Mutate,
 *      type MutateVariables,
 *    } from './__generated__/Mutate';
 *
 *    const SomeMutation = gql`
 *      mutation Mutate() {
 *        mutate()
 *      }
 *    `;
 *
 *    function Component({ key }) {
 *      const [mutate, response] = useMutation<Mutate, MutateVariables>(SomeMutation, options);
 *    }
 *
 * even though the type information is actually connected to the `SomeConnection` constant,
 * not the hook call.
 *
 * The factories here shift that typing (and passing of the query constant)
 * from the call site to the query declaration site:
 *
 *    import gql from 'graphql-tag';
 *
 *    import {
 *      type Mutate,
 *      type MutateVariables,
 *    } from './__generated__/Mutate';
 *
 *    const useSomeMutation = makeMutation<Mutate, MutateVariables>(gql`
 *      mutation Mutate() {
 *        mutate()
 *      }
 *    `);
 *
 *    function Component({ key }) {
 *      const [mutate, response] = useSomeMutation(options);
 *    }
 */
 // graphql types

function makeQuery(query) {
  return options => Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0__["useQuery"])(query, options);
}
function makeLazyQuery(query) {
  return options => Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"])(query, options);
}
function makeSubscription(query) {
  return options => Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0__["useSubscription"])(query, options);
}
function makeMutation(query) {
  return options => Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0__["useMutation"])(query, options);
}

/***/ }),

/***/ "./src/components/misc/hooks/async_state.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAsyncState", function() { return useAsyncState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function asyncStateReducer(state, action) {
  switch (action.type) {
    case 'START':
      {
        return { ...state,
          isLoading: true,
          isError: false
        };
      }

    case 'RESOLVE':
      {
        const {
          value
        } = action;
        return { ...state,
          value,
          isLoading: false,
          isError: false
        };
      }

    case 'REJECT':
      {
        return { ...state,
          isLoading: false,
          isError: true
        };
      }

    default:
      // eslint-disable-next-line no-throw-literal
      throw 'unreachable';
  }
}
/**
 * Implements state that can be set via a promise.
 * This hook makes sure that multiple setState calls can not race,
 * i.e. only the last promise will go through to the actual state.
 * While a setState promise is pending, the previous state will remain.
 */


function useAsyncState(initialState) {
  const [promise, setPromise] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0__["useReducer"](asyncStateReducer, {
    value: initialState,
    isLoading: false,
    isError: false
  });
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    if (promise === null) return undefined;
    let cancelled = false;
    dispatch({
      type: 'START'
    });
    promise.then(value => {
      if (!cancelled) {
        dispatch({
          type: 'RESOLVE',
          value
        });
      }
    }, _error => {
      if (!cancelled) {
        dispatch({
          type: 'REJECT'
        });
      }
    });
    return () => {
      cancelled = true;
    };
  }, [promise]);

  function setState(newPromise) {
    if (newPromise && typeof newPromise.then === 'function') {
      // technically we have not checked this is a promise but a thenable.
      // In practice this *should* not matter but who knows.
      // $FlowExpectError
      const realPromise = newPromise;
      setPromise(realPromise);
    } else {
      // $FlowExpectError
      const value = newPromise;
      setPromise(null);
      dispatch({
        type: 'RESOLVE',
        value
      });
    }
  } // useCallback: React.useState guarantees stability of setState,
  // mirror that here


  return [state.value, react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](setState, [])];
}

/**
 * Accesses data in a store and puts it into a state variable.
 * A store here is anything that can be read/written using (optionally async)
 * load/store functions.
 * Whenever the load & store functions change the store value is reloaded,
 * and whenever the value is changed using the returned setter, it is stored.
 * Until a load is finished (i.e. initially and after changing the store),
 * the state is reset to null and any attempts to set it is ignored:
 * only a loaded value can be overwritten.
 * Possibly pending loads from a previous store are also ignored.
 *
 * As any change to load/store results in a reload and thus a re-render,
 * it would not be possible to pass inline functions to `useStore` without
 * wrapping them in `useCallback`.
 * For convenience, a `deps` array can be passed in that must be set to the
 * dependencies of the passed load/store functions.
 * If omitted, this hook uses load & store themselves as the deps.
 */
function useStore(load, store, deps) {
  var _stateImpl$value;

  const realDeps = deps !== null && deps !== void 0 ? deps : [load, store];
  const [stateImpl, setStateImpl] = useAsyncState(null);
  const state = (_stateImpl$value = stateImpl === null || stateImpl === void 0 ? void 0 : stateImpl.value) !== null && _stateImpl$value !== void 0 ? _stateImpl$value : null; // reload the state when the store changes

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    setStateImpl(Promise.resolve(load()).then(value => ({
      value
    }))); // after changing the store, clear the state to prevent further use

    return () => {
      setStateImpl(null);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, realDeps); // save the state when it changed

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    // if the state was not loaded yet for whatever reason, store nothing
    if (stateImpl === null) return;
    store(stateImpl.value); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...realDeps, stateImpl]);

  function setState(value) {
    setStateImpl({
      value
    });
  } // useCallback: React.useState guarantees stability of setState,
  // mirror that here


  return [state, react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](setState, [setStateImpl])];
}

/***/ }),

/***/ "./src/components/misc/hooks/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useElementRef", function() { return useElementRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useValue", function() { return useValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAnimationFrame", function() { return useAnimationFrame; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _async_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/misc/hooks/async_state.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAsyncState", function() { return _async_state__WEBPACK_IMPORTED_MODULE_1__["useAsyncState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return _async_state__WEBPACK_IMPORTED_MODULE_1__["useStore"]; });

/* harmony import */ var _apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/misc/hooks/apollo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeQuery", function() { return _apollo__WEBPACK_IMPORTED_MODULE_2__["makeQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeLazyQuery", function() { return _apollo__WEBPACK_IMPORTED_MODULE_2__["makeLazyQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeSubscription", function() { return _apollo__WEBPACK_IMPORTED_MODULE_2__["makeSubscription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeMutation", function() { return _apollo__WEBPACK_IMPORTED_MODULE_2__["makeMutation"]; });

/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/misc/hooks/localStorage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeLocalStorageOpt", function() { return _localStorage__WEBPACK_IMPORTED_MODULE_3__["makeLocalStorageOpt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeLocalStorage", function() { return _localStorage__WEBPACK_IMPORTED_MODULE_3__["makeLocalStorage"]; });





/**
 * An almost-alias to React.useRef for the typical element ref use case.
 * useRef can also emulate instance variables, this can't.
 * `useElementRef<T>()` is the same as `useRef<React.ElementRef<T> | null>(null)`.
 * The default value of `null` is fixed.
 * example usage:
 *
 *    const aRef = useElementRef<'div'>();
 *    const bRef = useElementRef<typeof Component>();
 *
 *    return (
 *      <>
 *        <div ref={aRef} />
 *        <Component ref={bRef} />
 *      </>
 *    );
 */

function useElementRef() {
  return react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
}
/**
 * Similar to useMemo, but without dependencies, and guarantees that the same
 * instance is preserved. The initialization is eager, i.e. happens on the
 * first hook call.
 */

function useValue(init) {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
  if (ref.current === null) ref.current = init();
  return ref.current;
}
/**
 * Lets one schedule a callback via requestAnimationFrame repeatedly until
 * the callback returns `true` or it is cancelled.
 *
 *    // the callback is repeated until stop is invoked
 *    const cb = () => console.log('frame');
 *    const [start, stop] = useAnimationFrame(cb);
 *
 *    // the callback is called only once
 *    const cb = () => { console.log('frame'); return true; };
 *    const [start] = useAnimationFrame(cb);
 *
 * Of course, `stop` can be used with self-stopping callbacks as well.
 */

function useAnimationFrame(cb) {
  const id = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);

  function run() {
    id.current = requestAnimationFrame(() => {
      const done = cb();
      if (done !== true) run();
    });
  }

  function stop() {
    if (id.current !== null) {
      cancelAnimationFrame(id.current);
      id.current = null;
    }
  }

  function start() {
    stop();
    run();
  }

  return [start, stop];
}

/***/ }),

/***/ "./src/components/misc/hooks/localStorage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeLocalStorageOpt", function() { return makeLocalStorageOpt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeLocalStorage", function() { return makeLocalStorage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Creates a hook for using a value from local storage. Example usage:
 *
 *    const useLocalStorage = makeLocalStorageOpt(
 *      // deserialization function
 *      json => ({ ...(json !== null ? JSON.parse(json) : null) }),
 *      // serialization function
 *      state => (state !== null ? JSON.stringify(state) : null),
 *    );
 *
 *    function Component({ key }) {
 *      const [value, setValue] = useLocalStorage(key);
 *      // ...
 *    }
 *
 * The key may change at runtime and may not be known at all times;
 * parsing and serialization are fixed though, and are therefore passed to the factory.
 * There is no default serialization/deserialization logic, because that logic is required
 * to handle non-existent localStorage keys:
 *
 * - Deserialization will be passed a string, or null value if the key does not exist.
 *   It will not be called at all if there is no key.
 * - Serialization returns a string, or null to delete the item.
 *   It will not be called at all if there is no key.
 *
 * If there's no key, the hook's value will be undefined.
 * It the key does not exist in localStorage,
 * the hook's value will be  the result of deserializing null;
 * in the example that value would be null.
 *
 * Setting the value is ignored if there is no key.
 */
function makeLocalStorageOpt(deserialize, serialize) {
  function load(key) {
    var _localStorage$getItem;

    if (key === null) return {
      key
    };
    const value = deserialize((_localStorage$getItem = localStorage.getItem(key)) !== null && _localStorage$getItem !== void 0 ? _localStorage$getItem : null);
    return {
      key,
      value
    };
  }

  function store(storageValue) {
    if (storageValue.key === null) return;
    const {
      key,
      value
    } = storageValue;
    const serialized = serialize(value);

    if (serialized !== null) {
      localStorage.setItem(key, serialized);
    } else {
      localStorage.removeItem(key);
    }
  }

  function useLocalStorage(key) {
    const [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](() => load(key)); // reload state when the key changes

    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
      if (state.key !== key) setStateImpl(load(key));
    }, [key, state.key]); // we use a functional update as each update needs to access the key,
    // which is part of the state

    function setState(value) {
      // $FlowExpectError
      const setter = typeof value === 'function' ? value : () => value;
      setStateImpl(oldValue => {
        if (oldValue.key === null) return oldValue;
        const newValue = {
          key: oldValue.key,
          value: setter(oldValue.value)
        };
        store(newValue);
        return newValue;
      });
    }

    const value = state.key !== null ? state.value : undefined; // useCallback: React.useState guarantees stability of setState,
    // mirror that here - at least when the key is stable

    return [value, react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](setState, [setStateImpl])];
  }

  return useLocalStorage;
}
/**
 * Creates a hook for using a value from local storage. Example usage:
 *
 *    const useLocalStorage = makeLocalStorageOpt(
 *      // deserialization function
 *      json => ({ ...(json !== null ? JSON.parse(json) : null) }),
 *      // serialization function
 *      state => (state !== null ? JSON.stringify(state) : null),
 *    );
 *
 *    function Component({ key }) {
 *      const [value, setValue] = useLocalStorage(key);
 *      // ...
 *    }
 *
 * This function is equivalent to makeLocalStorageOpt except for its type:
 * the key may change at runtime but must be non-null at all times;
 * this means the hook's value will not be undefined,
 * unless that is a value the deserialization function could return.
 */

function makeLocalStorage(deserialize, serialize) {
  // $FlowExpectError
  return makeLocalStorageOpt(deserialize, serialize);
}

/***/ }),

/***/ "./src/components/theme.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@material-ui/core/colors/common");
/* harmony import */ var _material_ui_core_colors_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_common__WEBPACK_IMPORTED_MODULE_1__);


const hedgehogGreenLight = '#38b449';
const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: {
    primary: {
      main: hedgehogGreenLight,
      contrastText: _material_ui_core_colors_common__WEBPACK_IMPORTED_MODULE_1___default.a.white
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./src/components/users/AuthProvider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _misc_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/misc/hooks/index.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/users/AuthProvider.js";



const useLoginMutation = Object(_misc_hooks__WEBPACK_IMPORTED_MODULE_2__["makeMutation"])(graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      username
      token
    }
  }
`);
const AuthContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({
  authData: null,

  login() {
    throw new Error('login not specified');
  },

  logout() {
    throw new Error('logout not specified');
  }

});

/**
 * `AuthProvider` provides a context with the currently logged in user
 * as well as login and logout functions.
 */
function AuthProvider({
  children
}) {
  const [performLogin, _loginResponse] = useLoginMutation();
  const [authData, setAuthData] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);

  const login = async (username, password) => {
    const result = await performLogin({
      variables: {
        username,
        password
      }
    }); // we're not passing `ignoreResults`, so there will be a result
    // eslint-disable-next-line no-throw-literal

    if (!result.data) throw 'unreachable';
    const data = result.data.login;
    setAuthData(data);
    localStorage.setItem('auth', JSON.stringify(data));
    return data;
  };

  const logout = () => {
    setAuthData(null);
    localStorage.removeItem('auth');
  };

  const recoverSession = () => {
    const auth = localStorage.getItem('auth');
    setAuthData(auth ? JSON.parse(auth) : null);
  };

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => recoverSession(), []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](AuthContext.Provider, {
    value: {
      authData,
      login,
      logout
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, children);
}
/**
 * React hook for accessing the auth context.
 */

function useAuth() {
  return react__WEBPACK_IMPORTED_MODULE_0__["useContext"](AuthContext);
}

/***/ }),

/***/ "./src/core/createApolloClient/createApolloClient.server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createApolloClient; });
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("apollo-link");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("apollo-link-error");
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_link_error__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_link_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("apollo-link-schema");
/* harmony import */ var apollo_link_schema__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_link_schema__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _createCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/core/createApolloClient/createCache.js");
/* harmony import */ var _graphql_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/core/graphql/schema.js");






function createApolloClient(schema, initialState) {
  const cache = Object(_createCache__WEBPACK_IMPORTED_MODULE_4__["default"])();
  cache.writeData({
    data: initialState
  });
  const errorLink = Object(apollo_link_error__WEBPACK_IMPORTED_MODULE_2__["onError"])(({
    graphQLErrors,
    networkError
  }) => {
    if (graphQLErrors) graphQLErrors.map(({
      message,
      locations,
      path
    }) => console.warn(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
    if (networkError) console.warn(`[Network error]: ${networkError}`);
  });
  const schemaLink = new apollo_link_schema__WEBPACK_IMPORTED_MODULE_3__["SchemaLink"]({ ...schema
  });
  const link = Object(apollo_link__WEBPACK_IMPORTED_MODULE_1__["from"])([errorLink, schemaLink]);
  return new apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
    link,
    cache,
    resolvers: _graphql_schema__WEBPACK_IMPORTED_MODULE_5__["default"].resolvers,
    queryDeduplication: true,
    ssrMode: true
  });
}

/***/ }),

/***/ "./src/core/createApolloClient/createCache.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createCache; });
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_0__);


function dataIdFromObject(obj) {
  switch (obj.__typename) {
    case 'NewsItem':
      return obj.link ? `NewsItem:${obj.link}` : Object(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_0__["defaultDataIdFromObject"])(obj);

    default:
      return Object(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_0__["defaultDataIdFromObject"])(obj);
  }
}

function createCache() {
  // https://www.apollographql.com/docs/react/basics/caching.html#configuration
  return new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]({
    dataIdFromObject
  });
}

/***/ }),

/***/ "./src/core/createInitialState.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createInitialState; });
/* harmony import */ var _graphql_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/core/graphql/schema.js");

function createInitialState(data) {
  return { ..._graphql_schema__WEBPACK_IMPORTED_MODULE_0__["default"].defaults,
    ...data
  };
}

/***/ }),

/***/ "./src/core/graphql/OnMemoryState/networkStatus.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const def = {
  schema: [`
    type NetworkStatus {
      isConnected: Boolean!
    }
    `],
  queries: [`
    networkStatus: NetworkStatus!
    `],
  mutations: [`
    updateNetworkStatus(isConnected: Boolean): NetworkStatus!
    `],
  resolvers: () => ({
    Mutation: {
      updateNetworkStatus: (_, {
        isConnected
      }, context) => {
        const data = {
          networkStatus: {
            __typename: 'NetworkStatus',
            isConnected
          }
        };
        context.cache.writeData({
          data
        });
        return null;
      }
    }
  }),
  defaults: {
    networkStatus: {
      __typename: 'NetworkStatus',
      isConnected: true
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (def);

/***/ }),

/***/ "./src/core/graphql/OnMemoryState/schema.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _graphqlDef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/core/graphql/graphqlDef.js");
/* harmony import */ var _networkStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/core/graphql/OnMemoryState/networkStatus.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_graphqlDef__WEBPACK_IMPORTED_MODULE_0__["merge"])(_networkStatus__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/core/graphql/graphqlDef.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("lodash.merge");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_subscriptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("graphql-subscriptions");
/* harmony import */ var graphql_subscriptions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_subscriptions__WEBPACK_IMPORTED_MODULE_1__);



// eslint-disable-next-line no-unused-vars
const dummyResolver = pubsub => ({}); // eslint-disable-next-line import/prefer-default-export


function merge(...defs) {
  return {
    schema: [].concat(...defs.map(def => {
      var _def$schema;

      return (_def$schema = def.schema) !== null && _def$schema !== void 0 ? _def$schema : [];
    })),
    queries: [].concat(...defs.map(def => {
      var _def$queries;

      return (_def$queries = def.queries) !== null && _def$queries !== void 0 ? _def$queries : [];
    })),
    mutations: [].concat(...defs.map(def => {
      var _def$mutations;

      return (_def$mutations = def.mutations) !== null && _def$mutations !== void 0 ? _def$mutations : [];
    })),
    subscriptions: [].concat(...defs.map(def => {
      var _def$subscriptions;

      return (_def$subscriptions = def.subscriptions) !== null && _def$subscriptions !== void 0 ? _def$subscriptions : [];
    })),
    resolvers: pubsub => lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, ...defs.map(def => {
      var _def$resolvers;

      return ((_def$resolvers = def.resolvers) !== null && _def$resolvers !== void 0 ? _def$resolvers : dummyResolver)(pubsub);
    })),
    defaults: lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()(...defs.map(def => {
      var _def$defaults;

      return (_def$defaults = def.defaults) !== null && _def$defaults !== void 0 ? _def$defaults : {};
    }))
  };
}

/***/ }),

/***/ "./src/core/graphql/schema.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _graphqlDef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/core/graphql/graphqlDef.js");
/* harmony import */ var _OnMemoryState_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/core/graphql/OnMemoryState/schema.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_graphqlDef__WEBPACK_IMPORTED_MODULE_0__["merge"])(_OnMemoryState_schema__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/core/router.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var universal_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("universal-router");
/* harmony import */ var universal_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(universal_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/routes/index.js");
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


/* harmony default export */ __webpack_exports__["default"] = (new universal_router__WEBPACK_IMPORTED_MODULE_0___default.a(_routes__WEBPACK_IMPORTED_MODULE_1__["default"], {
  resolveRoute(context, params) {
    if (typeof context.route.load === 'function') {
      return context.route.load().then(action => action.default(context, params));
    }

    if (typeof context.route.action === 'function') {
      return context.route.action(context, params);
    }

    return undefined;
  }

}));

/***/ }),

/***/ "./src/routes/error/ErrorPage.css":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/error/ErrorPage.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if ( true && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/error/ErrorPage.css", function() {
        css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/error/ErrorPage.css");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/routes/error/ErrorPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageWithoutStyle", function() { return ErrorPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("isomorphic-style-loader/withStyles");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ErrorPage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/error/ErrorPage.css");
/* harmony import */ var _ErrorPage_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ErrorPage_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/routes/error/ErrorPage.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




class ErrorPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    if ( true && this.props.error) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }
      }, this.props.error.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("pre", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }
      }, this.props.error.stack));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }
    }, "Error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }
    }, "Sorry, a critical error occurred on this page."));
  }

}

_defineProperty(ErrorPage, "defaultProps", {
  error: null
});


/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default()(_ErrorPage_css__WEBPACK_IMPORTED_MODULE_2___default.a)(ErrorPage));

/***/ }),

/***/ "./src/routes/error/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ErrorPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/routes/error/ErrorPage.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/routes/error/index.js";

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



function action() {
  return {
    title: 'Demo Error',
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ErrorPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 16
      }
    })
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ }),

/***/ "./src/routes/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */
// The top-level (parent) route
const routes = {
  path: '',
  // Keep in mind, routes are evaluated in order
  children: [{
    path: '',
    load: () => Promise.all(/* import() | ide */[__webpack_require__.e("about~admin~contact~contest~help~ide~indexedDB~login~not-found~privacy~register~webrtc"), __webpack_require__.e("ide")]).then(__webpack_require__.bind(null, "./src/routes/projects/index.js"))
  }, {
    path: '/projects/:id',
    load: () => Promise.all(/* import() | ide */[__webpack_require__.e("about~admin~contact~contest~help~ide~indexedDB~login~not-found~privacy~register~webrtc"), __webpack_require__.e("ide")]).then(__webpack_require__.bind(null, "./src/routes/ide/index.js"))
  }, {
    path: '/contact',
    load: () => Promise.all(/* import() | contact */[__webpack_require__.e("about~admin~contact~contest~help~ide~indexedDB~login~not-found~privacy~register~webrtc"), __webpack_require__.e("contact")]).then(__webpack_require__.bind(null, "./src/routes/contact/index.js"))
  }, {
    path: '/login',
    load: () => Promise.all(/* import() | login */[__webpack_require__.e("about~admin~contact~contest~help~ide~indexedDB~login~not-found~privacy~register~webrtc"), __webpack_require__.e("login")]).then(__webpack_require__.bind(null, "./src/routes/login/index.js"))
  }, {
    path: '/register',
    load: () => Promise.all(/* import() | register */[__webpack_require__.e("about~admin~contact~contest~help~ide~indexedDB~login~not-found~privacy~register~webrtc"), __webpack_require__.e("register")]).then(__webpack_require__.bind(null, "./src/routes/register/index.js"))
  }, {
    path: '/help',
    load: () => Promise.all(/* import() | help */[__webpack_require__.e("about~admin~contact~contest~help~ide~indexedDB~login~not-found~privacy~register~webrtc"), __webpack_require__.e(0), __webpack_require__.e("help")]).then(__webpack_require__.bind(null, "./src/routes/help/index.js"))
  }, {
    path: '/contest',
    load: () => Promise.all(/* import() | contest */[__webpack_require__.e("about~admin~contact~contest~help~ide~indexedDB~login~not-found~privacy~register~webrtc"), __webpack_require__.e("contest")]).then(__webpack_require__.bind(null, "./src/routes/contest/index.js"))
  }, {
    path: '/about',
    load: () => Promise.all(/* import() | about */[__webpack_require__.e("about~admin~contact~contest~help~ide~indexedDB~login~not-found~privacy~register~webrtc"), __webpack_require__.e("about")]).then(__webpack_require__.bind(null, "./src/routes/about/index.js"))
  }, {
    path: '/privacy',
    load: () => Promise.all(/* import() | privacy */[__webpack_require__.e("about~admin~contact~contest~help~ide~indexedDB~login~not-found~privacy~register~webrtc"), __webpack_require__.e("privacy")]).then(__webpack_require__.bind(null, "./src/routes/privacy/index.js"))
  }, {
    path: '/admin',
    load: () => Promise.all(/* import() | admin */[__webpack_require__.e("about~admin~contact~contest~help~ide~indexedDB~login~not-found~privacy~register~webrtc"), __webpack_require__.e("admin")]).then(__webpack_require__.bind(null, "./src/routes/admin/index.js"))
  }, {
    path: '/indexedDB',
    load: () => Promise.all(/* import() | indexedDB */[__webpack_require__.e("about~admin~contact~contest~help~ide~indexedDB~login~not-found~privacy~register~webrtc"), __webpack_require__.e("indexedDB")]).then(__webpack_require__.bind(null, "./src/routes/indexedDB/index.js"))
  }, {
    path: '/webrtc',
    load: () => Promise.all(/* import() | webrtc */[__webpack_require__.e("about~admin~contact~contest~help~ide~indexedDB~login~not-found~privacy~register~webrtc"), __webpack_require__.e("webrtc")]).then(__webpack_require__.bind(null, "./src/routes/webrtc/index.js"))
  }, // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
  {
    path: '(.*)',
    load: () => Promise.all(/* import() | not-found */[__webpack_require__.e("about~admin~contact~contest~help~ide~indexedDB~login~not-found~privacy~register~webrtc"), __webpack_require__.e("not-found")]).then(__webpack_require__.bind(null, "./src/routes/not-found/index.js"))
  }],

  async action({
    next
  }) {
    var _route$title, _route$description;

    // Execute each child route until one of them return the result
    const route = await next(); // Provide default values for title, description etc.

    route.title = `${(_route$title = route.title) !== null && _route$title !== void 0 ? _route$title : 'Untitled Page'} - Hedgehog IDE`;
    route.description = (_route$description = route.description) !== null && _route$description !== void 0 ? _route$description : '';
    return route;
  }

}; // The error page is available by permanent url for development mode

if (true) {
  routes.children.unshift({
    path: '/error',
    action: __webpack_require__("./src/routes/error/index.js").default
  });
}

/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./src/server/Html.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/server/config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/server/Html.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



/* eslint-disable react/no-danger */

class Html extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      title,
      description,
      styles,
      scripts,
      app,
      children
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("html", {
      className: "no-js",
      lang: "en",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("head", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
      charSet: "utf-8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
      httpEquiv: "x-ua-compatible",
      content: "ie=edge",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
      name: "description",
      content: description,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }
    }), scripts.map(script => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("link", {
      key: script,
      rel: "preload",
      href: script,
      as: "script",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("link", {
      rel: "icon",
      type: "image/png",
      sizes: "194x194",
      href: "/favicon-194x194.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("link", {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      href: "/android-chrome-192x192.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("link", {
      rel: "manifest",
      href: "/site.webmanifest",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("link", {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#7cd001",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("link", {
      rel: "shortcut icon",
      href: "/favicon.ico",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
      name: "apple-mobile-web-app-title",
      content: "Hedgehog",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
      name: "application-name",
      content: "Hedgehog",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
      name: "msapplication-TileColor",
      content: "#7cd001",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
      name: "msapplication-TileImage",
      content: "/mstile-144x144.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
      name: "msapplication-config",
      content: "/browserconfig.xml",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
      name: "theme-color",
      content: "#ffffff",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }
    }), styles.map(style => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("style", {
      key: style.id,
      id: style.id,
      dangerouslySetInnerHTML: {
        __html: style.cssText
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("body", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      id: "app",
      dangerouslySetInnerHTML: {
        __html: children
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("script", {
      dangerouslySetInnerHTML: {
        __html: `window.App=${serialize_javascript__WEBPACK_IMPORTED_MODULE_1___default()(app)}`
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }
    }), scripts.map(script => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("script", {
      key: script,
      src: script,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }
    })), _config__WEBPACK_IMPORTED_MODULE_2___default.a.analytics.googleTrackingId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("script", {
      dangerouslySetInnerHTML: {
        __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + `ga('create','${_config__WEBPACK_IMPORTED_MODULE_2___default.a.analytics.googleTrackingId}','auto');ga('send','pageview')`
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }
    }), _config__WEBPACK_IMPORTED_MODULE_2___default.a.analytics.googleTrackingId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("script", {
      src: "https://www.google-analytics.com/analytics.js",
      async: true,
      defer: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }
    })));
  }

}

_defineProperty(Html, "defaultProps", {
  styles: [],
  scripts: []
});

/* harmony default export */ __webpack_exports__["default"] = (Html);

/***/ }),

/***/ "./src/server/config.js":
/***/ (function(module, exports, __webpack_require__) {

var _process$env$PORT, _process$env$SECURE_P, _process$env$CERT_FIL, _process$env$KEY_FILE, _process$env$TRUST_PR, _process$env$API_CLIE, _process$env$API_SERV, _process$env$PORT2, _process$env$DATABASE, _process$env$MONGODB_, _process$env$TOKEN_EX, _process$env$JWT_SECR, _process$env$FACEBOOK, _process$env$FACEBOOK2, _process$env$GOOGLE_C, _process$env$GOOGLE_C2, _process$env$TWITTER_, _process$env$TWITTER_2;

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
if (false) {}

module.exports = {
  // Node.js app
  port: (_process$env$PORT = process.env.PORT) !== null && _process$env$PORT !== void 0 ? _process$env$PORT : 3000,
  securePort: (_process$env$SECURE_P = process.env.SECURE_PORT) !== null && _process$env$SECURE_P !== void 0 ? _process$env$SECURE_P : 3001,
  certFile: (_process$env$CERT_FIL = process.env.CERT_FILE) !== null && _process$env$CERT_FIL !== void 0 ? _process$env$CERT_FIL : null,
  keyFile: (_process$env$KEY_FILE = process.env.KEY_FILE) !== null && _process$env$KEY_FILE !== void 0 ? _process$env$KEY_FILE : null,
  // https://expressjs.com/en/guide/behind-proxies.html
  trustProxy: (_process$env$TRUST_PR = process.env.TRUST_PROXY) !== null && _process$env$TRUST_PR !== void 0 ? _process$env$TRUST_PR : 'loopback',
  // API Gateway
  api: {
    // API URL to be used in the client-side code
    clientUrl: (_process$env$API_CLIE = process.env.API_CLIENT_URL) !== null && _process$env$API_CLIE !== void 0 ? _process$env$API_CLIE : '',
    // API URL to be used in the server-side code
    serverUrl: (_process$env$API_SERV = process.env.API_SERVER_URL) !== null && _process$env$API_SERV !== void 0 ? _process$env$API_SERV : `http://localhost:${(_process$env$PORT2 = process.env.PORT) !== null && _process$env$PORT2 !== void 0 ? _process$env$PORT2 : 3000}`
  },
  // schema
  databaseUrl: (_process$env$DATABASE = process.env.DATABASE_URL) !== null && _process$env$DATABASE !== void 0 ? _process$env$DATABASE : 'sqlite:database.sqlite',
  mongodbUrl: (_process$env$MONGODB_ = process.env.MONGODB_URL) !== null && _process$env$MONGODB_ !== void 0 ? _process$env$MONGODB_ : 'mongodb://localhost:27017/hedgehogIde',
  // Web analytics
  analytics: {
    // https://analytics.google.com/
    googleTrackingId: process.env.GOOGLE_TRACKING_ID // UA-XXXXX-X

  },
  // Authentication
  auth: {
    tokenExpiresIn: (_process$env$TOKEN_EX = process.env.TOKEN_EXPIRES_IN) !== null && _process$env$TOKEN_EX !== void 0 ? _process$env$TOKEN_EX : '7d',
    // Default session duration: 7 days
    jwt: {
      secret: (_process$env$JWT_SECR = process.env.JWT_SECRET) !== null && _process$env$JWT_SECR !== void 0 ? _process$env$JWT_SECR : 'React Starter Kit'
    },
    // https://developers.facebook.com/
    facebook: {
      id: (_process$env$FACEBOOK = process.env.FACEBOOK_APP_ID) !== null && _process$env$FACEBOOK !== void 0 ? _process$env$FACEBOOK : '186244551745631',
      secret: (_process$env$FACEBOOK2 = process.env.FACEBOOK_APP_SECRET) !== null && _process$env$FACEBOOK2 !== void 0 ? _process$env$FACEBOOK2 : 'a970ae3240ab4b9b8aae0f9f0661c6fc'
    },
    // https://cloud.google.com/console/project
    google: {
      id: (_process$env$GOOGLE_C = process.env.GOOGLE_CLIENT_ID) !== null && _process$env$GOOGLE_C !== void 0 ? _process$env$GOOGLE_C : '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
      secret: (_process$env$GOOGLE_C2 = process.env.GOOGLE_CLIENT_SECRET) !== null && _process$env$GOOGLE_C2 !== void 0 ? _process$env$GOOGLE_C2 : 'Y8yR9yZAhm9jQ8FKAL8QIEcd'
    },
    // https://apps.twitter.com/
    twitter: {
      key: (_process$env$TWITTER_ = process.env.TWITTER_CONSUMER_KEY) !== null && _process$env$TWITTER_ !== void 0 ? _process$env$TWITTER_ : 'Ie20AZvLJI2lQD5Dsgxgjauns',
      secret: (_process$env$TWITTER_2 = process.env.TWITTER_CONSUMER_SECRET) !== null && _process$env$TWITTER_2 !== void 0 ? _process$env$TWITTER_2 : 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ'
    }
  }
};

/***/ }),

/***/ "./src/server/graphql/AuthDirective.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthDirective; });
/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("graphql-tools");
/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tools__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("apollo-server");
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_2__);


 // From: https://github.com/jwhenshaw/graphql-directives-auth/blob/master/FieldAuthDirective.js

class AuthDirective extends graphql_tools__WEBPACK_IMPORTED_MODULE_0__["SchemaDirectiveVisitor"] {
  visitFieldDefinition(field, _details) {
    this.ensureFieldWrapped(field);
  }

  ensureFieldWrapped(field) {
    const {
      resolve: originalResolve = graphql__WEBPACK_IMPORTED_MODULE_1__["defaultFieldResolver"]
    } = field;

    async function resolve(...args) {
      var _context$user;

      const context = args[2];

      if (!((_context$user = context.user) === null || _context$user === void 0 ? void 0 : _context$user.userId)) {
        throw new apollo_server__WEBPACK_IMPORTED_MODULE_2__["AuthenticationError"]('not authorized');
      }

      return originalResolve.apply(this, args);
    }

    field.resolve = resolve.bind(this);
  }

}

/***/ }),

/***/ "./src/server/graphql/schema.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_subscriptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("graphql-subscriptions");
/* harmony import */ var graphql_subscriptions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_subscriptions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_graphql_graphqlDef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/core/graphql/graphqlDef.js");
/* harmony import */ var _schema_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/server/graphql/schema/index.js");
/* harmony import */ var _core_graphql_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/core/graphql/schema.js");
/* harmony import */ var _AuthDirective__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/server/graphql/AuthDirective.js");





const def = Object(_core_graphql_graphqlDef__WEBPACK_IMPORTED_MODULE_1__["merge"])(_schema_index__WEBPACK_IMPORTED_MODULE_2__["default"], _core_graphql_schema__WEBPACK_IMPORTED_MODULE_3__["default"]);
const RootQuery = [`
  # # React-Starter-Kit Querying API
  # ### This GraphQL schema was built with [Apollo GraphQL-Tools](https://github.com/apollographql/graphql-tools)
  # _Build, mock, and stitch a GraphQL schema using the schema language_
  #
  # **[Schema Language Cheet Sheet](https://raw.githubusercontent.com/sogko/graphql-shorthand-notation-cheat-sheet/master/graphql-shorthand-notation-cheat-sheet.png)**
  #
  # 1. Use the GraphQL schema language to [generate a schema](https://www.apollographql.com/docs/graphql-tools/generate-schema.html) with full support for resolvers, interfaces, unions, and custom scalars. The schema produced is completely compatible with [GraphQL.js](https://github.com/graphql/graphql-js).
  # 2. [Mock your GraphQL API](https://www.apollographql.com/docs/graphql-tools/mocking.html) with fine-grained per-type mocking
  # 3. Automatically [stitch multiple schemas together](https://www.apollographql.com/docs/graphql-tools/schema-stitching.html) into one larger API
  type RootQuery {
    ${def.queries.toString()}
  }
  `];
const Mutation = [`
  # # React-Starter-Kit Mutating API
  # ### This GraphQL schema was built with [Apollo GraphQL-Tools](https://github.com/apollographql/graphql-tools)
  # _Build, mock, and stitch a GraphQL schema using the schema language_
  #
  # **[Schema Language Cheet Sheet](https://raw.githubusercontent.com/sogko/graphql-shorthand-notation-cheat-sheet/master/graphql-shorthand-notation-cheat-sheet.png)**
  #
  # 1. Use the GraphQL schema language to [generate a schema](https://www.apollographql.com/docs/graphql-tools/generate-schema.html) with full support for resolvers, interfaces, unions, and custom scalars. The schema produced is completely compatible with [GraphQL.js](https://github.com/graphql/graphql-js).
  # 2. [Mock your GraphQL API](https://www.apollographql.com/docs/graphql-tools/mocking.html) with fine-grained per-type mocking
  # 3. Automatically [stitch multiple schemas together](https://www.apollographql.com/docs/graphql-tools/schema-stitching.html) into one larger API
  type Mutation {
    ${def.mutations.toString()}
  }
  `]; // This adds a dummy subscription in case no subscription is defined.
// As the server cannot start without the Subscription type defined and
// empty types are apparently not allowed (see https://github.com/graphql/graphql-js/issues/937).
// prettier-ignore

const Subscription = def.subscriptions.length > 0 ? [`
  type Subscription {
    ${def.subscriptions.toString()}
  }
  `] : [`
  type Subscription {
    _ : Boolean
  }
  `];
const SchemaDefinition = [`
  schema {
    query: RootQuery
    mutation: Mutation
    subscription: Subscription
  }
  `];
const schema = [`
  directive @auth on FIELD_DEFINITION
  `, ...SchemaDefinition, ...RootQuery, ...Mutation, ...Subscription, ...def.schema];
/* harmony default export */ __webpack_exports__["default"] = ({
  typeDefs: schema,
  resolvers: def.resolvers(new graphql_subscriptions__WEBPACK_IMPORTED_MODULE_0__["PubSub"]()),
  schemaDirectives: {
    auth: _AuthDirective__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  ...( true ? {
    log: e => console.error(e.stack)
  } : undefined)
});

/***/ }),

/***/ "./src/server/graphql/schema/Project.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var base64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("base64-js");
/* harmony import */ var base64_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(base64_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("apollo-server");
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/server/mongodb/index.js");



const def = {
  schema: [`
    type Project {
      id: ID!
      name: String!
      isPublic: Boolean!
      fileTreeRootId: ID!
      fileTrees: [FileTree!]!
      files: [File!]!
    }

    type FileTree {
      id: ID!
      contents: [FileTreeRecord!]!
    }

    type File {
      id: ID!
      data: String!
    }

    type FileTreeRecord {
      name: String!
      type: FileTreeRecordType!
      itemId: ID!
    }

    enum FileTreeRecordType {
      FILE
      TREE
    }

    input ProjectInput {
      id: ID
      name: String!
      isPublic: Boolean!
      fileTree: FileTreeInput!
    }

    input FileTreeInput {
      id: ID
      files: [FileTreeFileRecordInput!]!
      trees: [FileTreeTreeRecordInput!]!
    }

    input FileTreeFileRecordInput {
      id: ID
      name: String!
      data: String!
    }

    input FileTreeTreeRecordInput {
      name: String!
      tree: FileTreeInput!
    }

    input ProjectUpdateInput {
      name: String
      isPublic: Boolean
    }
    `],
  queries: [`
    projects: [Project!]!
    projectById(id: ID!): Project!
    `],
  mutations: [`
    createProject(project: ProjectInput!) : ID! @auth
    deleteProjectById(projectId: ID!): ID @auth
    updateProject(projectId: ID!, project: ProjectUpdateInput!): ID @auth
    `],
  resolvers: () => ({
    RootQuery: {
      async projects(_, _args, _context) {
        return (
          /* await */
          _mongodb__WEBPACK_IMPORTED_MODULE_2__["Project"].find({})
        );
      },

      async projectById(_, {
        id
      }, _context) {
        return (
          /* await */
          _mongodb__WEBPACK_IMPORTED_MODULE_2__["Project"].findById(id)
        );
      }

    },
    Project: {
      fileTreeRootId(parent, _args, _context) {
        return parent.fileTreeRoot;
      },

      async fileTrees(parent, _args, _context) {
        return _mongodb__WEBPACK_IMPORTED_MODULE_2__["FileTree"].find({
          project: parent.id
        });
      },

      async files(parent, _args, _context) {
        return _mongodb__WEBPACK_IMPORTED_MODULE_2__["File"].find({
          project: parent.id
        });
      }

    },
    File: {
      data(parent, _args, _context) {
        return base64_js__WEBPACK_IMPORTED_MODULE_0___default.a.fromByteArray(parent.data);
      }

    },
    FileTreeRecord: {
      itemId(parent, _args, _context) {
        return parent.ref;
      }

    },
    Mutation: {
      async createProject(_, {
        project: projectInput
      }, _context) {
        const session = await _mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].startSession();

        try {
          const [project] = await _mongodb__WEBPACK_IMPORTED_MODULE_2__["Project"].create([{
            name: projectInput.name,
            isPublic: projectInput.isPublic
          }], {
            session
          });

          async function saveFileTree(tree) {
            const savedFilePromises = tree.files.map(file => _mongodb__WEBPACK_IMPORTED_MODULE_2__["File"].create([{
              project: project.id,
              data: Buffer.from(base64_js__WEBPACK_IMPORTED_MODULE_0___default.a.toByteArray(file.data))
            }], {
              session
            }).then(([savedFile]) => ({
              name: file.name,
              type: 'FILE',
              ref: savedFile.id
            })));
            const savedTreePromises = tree.trees.map(childTree => saveFileTree(childTree.tree).then(savedTree => ({
              name: childTree.name,
              type: 'TREE',
              ref: savedTree.id
            })));
            const contents = await Promise.all([...savedFilePromises, ...savedTreePromises]);
            const [fileTree] = await _mongodb__WEBPACK_IMPORTED_MODULE_2__["FileTree"].create([{
              project: project.id,
              contents
            }], {
              session
            });
            return fileTree;
          }

          const root = await saveFileTree(projectInput.fileTree);
          project.fileTreeRoot = root.id;
          await project.save();
          return project.id;
        } finally {
          await session.endSession();
        }
      },

      async deleteProjectById(_parent, {
        projectId
      }) {
        try {
          const deleted = await _mongodb__WEBPACK_IMPORTED_MODULE_2__["Project"].findByIdAndDelete({
            _id: projectId
          });

          if (deleted === null || deleted === void 0 ? void 0 : deleted.id) {
            await _mongodb__WEBPACK_IMPORTED_MODULE_2__["FileTree"].deleteMany({
              project: projectId
            });
            await _mongodb__WEBPACK_IMPORTED_MODULE_2__["File"].deleteMany({
              project: projectId
            });
          }

          return deleted === null || deleted === void 0 ? void 0 : deleted.id;
        } catch (err) {
          console.error(err);
          throw new apollo_server__WEBPACK_IMPORTED_MODULE_1__["ApolloError"]('Failed to delete project.');
        }
      },

      async updateProject(_parent, {
        projectId,
        project
      }) {
        try {
          const res = await _mongodb__WEBPACK_IMPORTED_MODULE_2__["Project"].update({
            _id: projectId
          }, { ...project
          });

          if (res.n === 0) {
            return null;
          }

          return projectId;
        } catch (err) {
          console.error(err);
          throw new apollo_server__WEBPACK_IMPORTED_MODULE_1__["ApolloError"]('Failed to update project.');
        }
      }

    }
  })
};
/* harmony default export */ __webpack_exports__["default"] = (def);

/***/ }),

/***/ "./src/server/graphql/schema/User.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("apollo-server");
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/server/mongodb/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/server/config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_4__);





const def = {
  schema: [`
    type UserLogin {
      id: ID!
      username: String!
      token: String!
    }

    type User {
      id: ID!
      username: String!
    }
    `],
  queries: [`
    user: User! @auth
    `],
  mutations: [`
    login(username: String!, password: String!): UserLogin!
    `],
  resolvers: () => ({
    RootQuery: {
      async user(_, _args, context) {
        let user;

        try {
          user = await _mongodb__WEBPACK_IMPORTED_MODULE_3__["User"].findById(context.user.userId);
        } catch (e) {
          console.error(e);
          throw new apollo_server__WEBPACK_IMPORTED_MODULE_0__["ApolloError"]('Failed to fetch user.');
        }

        return {
          id: user.id,
          username: user.username
        };
      }

    },
    Mutation: {
      async login(_, {
        username,
        password
      }, _context) {
        let user;

        try {
          user = await _mongodb__WEBPACK_IMPORTED_MODULE_3__["User"].findOne({
            username
          });
        } catch (e) {
          console.error(e);
          throw new apollo_server__WEBPACK_IMPORTED_MODULE_0__["ApolloError"]('Failed to process login.');
        }

        if (!user) {
          throw new apollo_server__WEBPACK_IMPORTED_MODULE_0__["AuthenticationError"]('Invalid login credentials.');
        }

        const passwordMatch = await new Promise((res, rej) => {
          bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.compare(password, user.password, (err, match) => {
            if (err) {
              rej(err);
            } else {
              res(match);
            }
          });
        });

        if (passwordMatch) {
          const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign({
            userId: user.id
          }, _config__WEBPACK_IMPORTED_MODULE_4___default.a.auth.jwt.secret, {
            expiresIn: _config__WEBPACK_IMPORTED_MODULE_4___default.a.auth.tokenExpiresIn
          }); // TODO: add expiry date

          return {
            id: user.id,
            username,
            token
          };
        }

        throw new apollo_server__WEBPACK_IMPORTED_MODULE_0__["AuthenticationError"]('Invalid login credentials.');
      }

    }
  })
};
/* harmony default export */ __webpack_exports__["default"] = (def);

/***/ }),

/***/ "./src/server/graphql/schema/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_graphql_graphqlDef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/core/graphql/graphqlDef.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/server/graphql/schema/User.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/server/graphql/schema/Project.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(_core_graphql_graphqlDef__WEBPACK_IMPORTED_MODULE_0__["merge"])(_User__WEBPACK_IMPORTED_MODULE_1__["default"], _Project__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/server/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("express-jwt");
/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var pretty_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("pretty-error");
/* harmony import */ var pretty_error__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pretty_error__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _apollo_react_ssr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("@apollo/react-ssr");
/* harmony import */ var _apollo_react_ssr__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_ssr__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _core_createApolloClient__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/core/createApolloClient/createApolloClient.server.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/App.js");
/* harmony import */ var _routes_error_ErrorPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/routes/error/ErrorPage.js");
/* harmony import */ var _routes_error_ErrorPage_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/routes/error/ErrorPage.css");
/* harmony import */ var _routes_error_ErrorPage_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_routes_error_ErrorPage_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _core_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/core/router.js");
/* harmony import */ var _graphql_schema__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/server/graphql/schema.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/server/config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _core_createInitialState__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/core/createInitialState.js");
/* harmony import */ var _renderHtml__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/server/renderHtml.js");
/* harmony import */ var _renderExecutor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/server/renderExecutor.js");
/* harmony import */ var _loaders__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/server/loaders.js");
var _global$navigator,
    _global$navigator$use,
    _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/server/index.js";

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





















process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason); // send entire app down. Process manager will restart it

  process.exit(1);
}); //
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------

global.navigator = (_global$navigator = global.navigator) !== null && _global$navigator !== void 0 ? _global$navigator : {};
global.navigator.userAgent = (_global$navigator$use = global.navigator.userAgent) !== null && _global$navigator$use !== void 0 ? _global$navigator$use : 'all';
const app = express__WEBPACK_IMPORTED_MODULE_1___default()();
let ws = null;

if (false) {} //
// If you are using proxy from external machine, you can set TRUST_PROXY env
// Default is to trust proxy headers only from loopback interface.
// -----------------------------------------------------------------------------


app.set('trust proxy', _config__WEBPACK_IMPORTED_MODULE_16___default.a.trustProxy); // keep a list of auth-relevant middlewares to decode cookies in the WS handler

const authMiddlewares = [];

function appUseAuth(mw) {
  authMiddlewares.push(mw);
  app.use(mw);
} //
// Register Node.js middleware
// -----------------------------------------------------------------------------


app.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.static(path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(__dirname, 'public')));
appUseAuth(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.urlencoded({
  extended: true
}));
app.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json()); //
// Authentication
// -----------------------------------------------------------------------------

appUseAuth(express_jwt__WEBPACK_IMPORTED_MODULE_4___default()({
  secret: _config__WEBPACK_IMPORTED_MODULE_16___default.a.auth.jwt.secret,
  credentialsRequired: false,
  getToken: req => req.headers.authorization
})); // Error handler for express-jwt

app.use((err, req, res, next) => {
  if (err instanceof express_jwt__WEBPACK_IMPORTED_MODULE_4__["UnauthorizedError"]) {
    console.error('[express-jwt-error]', req.cookies.id_token); // `clearCookie`, otherwise user can't use web-app until cookie expires

    res.clearCookie('id_token');
  }

  next(err);
}); //
// Register API middleware
// -----------------------------------------------------------------------------
// https://github.com/graphql/express-graphql#options

const apolloServer = new apollo_server_express__WEBPACK_IMPORTED_MODULE_7__["ApolloServer"]({ ..._graphql_schema__WEBPACK_IMPORTED_MODULE_15__["default"],
  subscriptions: {
    path: '/subscriptions',
    onConnect: async (connectionParams, webSocket) => {
      const applyMiddleware = (middleware, req) => new Promise(resolve => middleware(req, null, resolve)); // eslint-disable-next-line no-restricted-syntax


      for (const middleware of authMiddlewares) {
        // eslint-disable-next-line no-await-in-loop
        await applyMiddleware(middleware, webSocket.upgradeReq);
      }

      return {
        user: webSocket.upgradeReq.user,
        ...connectionParams
      };
    }
  },
  uploads: false,
  introspection: true,
  playground:  true && {
    subscriptionEndpoint: '/subscriptions'
  },
  debug: true,
  context: ({
    req
  }) => ({
    user: req.user
  })
});
apolloServer.applyMiddleware({
  app
});

if (ws !== null) {
  // TODO no subscriptions when using `yarn start`
  apolloServer.installSubscriptionHandlers(ws);
} //
// Register server-side rendering middleware
// -----------------------------------------------------------------------------


app.get('/executor', async (_req, res, next) => {
  try {
    const html = Object(_renderExecutor__WEBPACK_IMPORTED_MODULE_19__["default"])();
    res.status(200);
    res.send(html);
  } catch (err) {
    next(err);
  }
});
app.get('/app-shell.html', async (_req, res, next) => {
  try {
    const html = Object(_renderHtml__WEBPACK_IMPORTED_MODULE_18__["default"])(null, {
      styles: [],
      scripts: Object(_loaders__WEBPACK_IMPORTED_MODULE_20__["loadScripts"])('client')
    });
    res.status(200);
    res.send(html);
  } catch (err) {
    next(err);
  }
});
app.get('*', async (req, res, next) => {
  try {
    var _req$user, _route$status2;

    const isomorphicStyleLoader = new _loaders__WEBPACK_IMPORTED_MODULE_20__["IsomorphicStyleLoader"]();
    const materialStyleLoader = new _loaders__WEBPACK_IMPORTED_MODULE_20__["MaterialStyleLoader"]();
    const initialState = Object(_core_createInitialState__WEBPACK_IMPORTED_MODULE_17__["default"])({
      user: (_req$user = req.user) !== null && _req$user !== void 0 ? _req$user : null
    });
    const apolloClient = Object(_core_createApolloClient__WEBPACK_IMPORTED_MODULE_10__["default"])({
      schema: Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_7__["makeExecutableSchema"])(_graphql_schema__WEBPACK_IMPORTED_MODULE_15__["default"]),
      // This is a context consumed in GraphQL Resolvers
      context: {
        req
      }
    }, initialState); // Global (context) variables that can be easily accessed from any React component
    // https://facebook.github.io/react/docs/context.html

    const context = {
      // The twins below are wild, be careful!
      pathname: req.path,
      query: req.query,
      // Apollo Client for use with react-apollo
      client: apolloClient,
      // TODO locales
      locales: ['en']
    };
    const insertCss = isomorphicStyleLoader.insertCss.bind(isomorphicStyleLoader);
    const route = await _core_router__WEBPACK_IMPORTED_MODULE_14__["default"].resolve(context);

    if (route.redirect) {
      var _route$status;

      res.redirect((_route$status = route.status) !== null && _route$status !== void 0 ? _route$status : 302, route.redirect);
      return;
    }

    const rootComponent = materialStyleLoader.wrap(
    /*#__PURE__*/
    // eslint-disable-next-line react/jsx-no-bind
    react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_App__WEBPACK_IMPORTED_MODULE_11__["default"], {
      context: context,
      insertCss: insertCss,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 7
      }
    }, route.component));
    await Object(_apollo_react_ssr__WEBPACK_IMPORTED_MODULE_8__["getDataFromTree"])(rootComponent);
    const styles = [{
      id: 'css',
      cssText: isomorphicStyleLoader.collect()
    }, // TODO need to remove this on the client? https://material-ui.com/guides/server-rendering/#the-client-side
    {
      id: 'material-css',
      cssText: materialStyleLoader.collect()
    }];
    const scripts = Object(_loaders__WEBPACK_IMPORTED_MODULE_20__["loadScripts"])('client', ...(route.chunk ? [route.chunk] : []), ...(route.chunks ? route.chunks : []));
    const data = { ...route,
      styles,
      scripts,
      app: {
        apiUrl: _config__WEBPACK_IMPORTED_MODULE_16___default.a.api.clientUrl,
        // Cache for client-side apolloClient
        cache: context.client.extract(),
        // Initial state for client-side stateLink
        initialState
      }
    };
    const html = Object(_renderHtml__WEBPACK_IMPORTED_MODULE_18__["default"])(rootComponent, data);
    res.status((_route$status2 = route.status) !== null && _route$status2 !== void 0 ? _route$status2 : 200);
    res.send(html);
  } catch (err) {
    next(err);
  }
}); //
// Error handling
// -----------------------------------------------------------------------------

const pe = new pretty_error__WEBPACK_IMPORTED_MODULE_6___default.a();
pe.skipNodeFiles();
pe.skipPackage('express'); // eslint-disable-next-line no-unused-vars

app.use((err, req, res, next) => {
  var _err$status;

  console.error(pe.render(err));
  const rootComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_routes_error_ErrorPage__WEBPACK_IMPORTED_MODULE_12__["ErrorPageWithoutStyle"], {
    error: err,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 25
    }
  });
  const styles = [// eslint-disable-next-line no-underscore-dangle
  {
    id: 'css',
    cssText: _routes_error_ErrorPage_css__WEBPACK_IMPORTED_MODULE_13___default.a._getCss()
  }];
  const data = {
    title: 'Internal Server Error',
    description: err.message,
    styles
  };
  const html = Object(_renderHtml__WEBPACK_IMPORTED_MODULE_18__["default"])(rootComponent, data);
  res.status((_err$status = err.status) !== null && _err$status !== void 0 ? _err$status : 500);
  res.send(html);
}); //
// Launch the server
// -----------------------------------------------------------------------------

if (ws !== null) {
  ws.listen(_config__WEBPACK_IMPORTED_MODULE_16___default.a.port, () => {
    console.info(`The server is running at http://localhost:${_config__WEBPACK_IMPORTED_MODULE_16___default.a.port}/`);
  });
} //
// Hot Module Replacement
// -----------------------------------------------------------------------------


if (true) {
  app.hot = module.hot;
  module.hot.accept("./src/core/router.js", function() { /* harmony import */ _core_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/core/router.js");
 });
}

/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./src/server/loaders.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsomorphicStyleLoader", function() { return IsomorphicStyleLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadScripts", function() { return loadScripts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialStyleLoader", function() { return MaterialStyleLoader; });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chunk_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./chunk-manifest.json");
/* harmony import */ var _chunk_manifest_json__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chunk_manifest_json__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import assets from './asset-manifest.json'; // eslint-disable-line import/no-unresolved

 // eslint-disable-line import/no-unresolved

class IsomorphicStyleLoader {
  constructor() {
    _defineProperty(this, "css", new Set());
  }

  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss(...styles) {
    // eslint-disable-next-line no-underscore-dangle
    styles.forEach(style => this.css.add(style._getCss()));
  }

  collect() {
    return [...this.css].join('');
  }

}
function loadScripts(...chnks) {
  const scripts = new Set();
  chnks.forEach(chunk => {
    if (_chunk_manifest_json__WEBPACK_IMPORTED_MODULE_1___default.a[chunk]) {
      // add all assets belonging to that chunk
      _chunk_manifest_json__WEBPACK_IMPORTED_MODULE_1___default.a[chunk].forEach(asset => scripts.add(asset));
    } else if (true) {
      throw new Error(`Chunk with name '${chunk}' cannot be found`);
    }
  });
  return [...scripts];
}
class MaterialStyleLoader {
  constructor() {
    _defineProperty(this, "sss", new _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__["ServerStyleSheets"]());
  }

  wrap(component) {
    return this.sss.collect(component);
  }

  collect() {
    return this.sss.toString();
  }

}

/***/ }),

/***/ "./src/server/mongodb/db.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/server/config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_1__);


mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(_config__WEBPACK_IMPORTED_MODULE_1___default.a.mongodbUrl, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
}).catch(error => {
  console.error('MongoDB initial connection failed', error);
});
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection);

/***/ }),

/***/ "./src/server/mongodb/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTree", function() { return FileTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return File; });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/server/mongodb/db.js");
/* harmony import */ var _schema_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/server/mongodb/schema/User.js");
/* harmony import */ var _schema_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/server/mongodb/schema/Project.js");



const User = _schema_User__WEBPACK_IMPORTED_MODULE_1__["createModel"](_db__WEBPACK_IMPORTED_MODULE_0__["default"]);
const Project = _schema_Project__WEBPACK_IMPORTED_MODULE_2__["createProjectModel"](_db__WEBPACK_IMPORTED_MODULE_0__["default"]);
const FileTree = _schema_Project__WEBPACK_IMPORTED_MODULE_2__["createFileTreeModel"](_db__WEBPACK_IMPORTED_MODULE_0__["default"]);
const File = _schema_Project__WEBPACK_IMPORTED_MODULE_2__["createFileModel"](_db__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (_db__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/server/mongodb/schema/Project.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectSchema", function() { return projectSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileTreeSchema", function() { return fileTreeSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileSchema", function() { return fileSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProjectModel", function() { return createProjectModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFileTreeModel", function() { return createFileTreeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFileModel", function() { return createFileModel; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/server/mongodb/schema/utils.js");


const projectSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  name: String,
  isPublic: Boolean,
  createdAt: Date,
  fileTreeRoot: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,
    ref: 'FileTree'
  }
});
const fileTreeSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  project: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,
    ref: 'Project'
  },
  contents: [{
    name: String,
    type: {
      type: String,
      enum: ['FILE', 'TREE']
    },
    ref: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId
  }]
});
const fileSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  project: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,
    ref: 'Project'
  },
  data: Buffer
});
const createProjectModel = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createModelHelper"])('Project', projectSchema); // prettier-ignore

const createFileTreeModel = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createModelHelper"])('FileTree', fileTreeSchema);
const createFileModel = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createModelHelper"])('File', fileSchema);

/***/ }),

/***/ "./src/server/mongodb/schema/User.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schema", function() { return schema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createModel", function() { return createModel; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/server/mongodb/schema/utils.js");


const schema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  createdAt: Date
});
const createModel = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createModelHelper"])('User', schema);

/***/ }),

/***/ "./src/server/mongodb/schema/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createModelHelper", function() { return createModelHelper; });
/* eslint-disable import/prefer-default-export */
const createModelHelper = (name, schema) => connection => {
  if ( true && connection.models[name]) {
    // we're probably hot-reloading, so can't re-compile the model!
    console.warn(`Trying to re-compile schema for '${name}'; keeping the original model.`);
    return connection.models[name];
  }

  return connection.model(name, schema);
};

/***/ }),

/***/ "./src/server/renderExecutor.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderExecutor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loaders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/server/loaders.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/server/renderExecutor.js";



function renderExecutor() {
  const scripts = Object(_loaders__WEBPACK_IMPORTED_MODULE_2__["loadScripts"])('executor');
  const html = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToStaticMarkup(
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/html-has-lang
  react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("html", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("head", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
    charSet: "utf-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), scripts.map(script => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("link", {
    key: script,
    rel: "preload",
    href: script,
    as: "script",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("body", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, scripts.map(script => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("script", {
    key: script,
    src: script,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  })))));
  return `<!doctype html>${html}`;
}

/***/ }),

/***/ "./src/server/renderHtml.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderHtml; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/server/Html.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/server/renderHtml.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function renderHtml(rootComponent, data) {
  const content = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToString(rootComponent);
  const html = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToStaticMarkup( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Html__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, data, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 46
    }
  }), content));
  return `<!doctype html>${html}`;
}

/***/ }),

/***/ "./src/translations/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGES", function() { return MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEffectiveLocale", function() { return getEffectiveLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslation", function() { return getTranslation; });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_de_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/translations/locales/de.json");
var _locales_de_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t("./src/translations/locales/de.json", 1);
/* harmony import */ var _locales_en_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/translations/locales/en.json");
var _locales_en_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t("./src/translations/locales/en.json", 1);
 // eslint-disable-next-line camelcase

 // eslint-disable-next-line camelcase


const MESSAGES = {
  de: _locales_de_json__WEBPACK_IMPORTED_MODULE_1__,
  en: _locales_en_json__WEBPACK_IMPORTED_MODULE_2__
}; // returns the first locale in `locales` matching the predicate. Most of the
// time, the predicate will be a simple membership test.
// The test is performed as follows:
// - first, all locales are normalized so that e.g. "de-AT" becomes "de_at"
// - second, if any of the locales matches the predicate, that is returned
// - third, the language-only variants are taken, i.e. "de_at" becomes "de"
// - if there is a match, that is returned
// - lastly, null is returned.
// For meaningful results, the `locales` array should already contain
// language-only locales as alternatives. Otherwise, an array such as
//
//     ['en-US', 'de']
//
// Will return 'de' in favor of 'en' if those are supported but 'en-US' isn't.
// Instead of valuing a language match over an exact match, a sufficiently
// detailed list of preferences is required.

function getEffectiveLocale(locales, supported) {
  // normalize things like 'de-AT' to 'de_at'
  const normalized = locales.map(locale => locale.toLowerCase().replace('-', '_')); // try to find a match for any of the exact locales

  const exact = normalized.find(supported);
  if (exact) return exact; // try to find a match for any of the exact language-only locales

  const language = normalized.map(locale => locale.split('_')[0]).find(supported);
  if (language) return language;
  return null;
} // chooses the best element in `map` based on the given `locales`,
// using the algorithm of `getEffectiveLocale()`.

function getTranslation(locales, map) {
  const locale = getEffectiveLocale(locales, Object.hasOwnProperty.bind(map));
  return locale ? map[locale] : null;
}

/***/ }),

/***/ "./src/translations/locales/de.json":
/***/ (function(module) {

module.exports = {"app.auth.password":"Passwort","app.auth.username":"Benutzername","app.dialog.cancel":"Abbrechen","app.dialog.ok":"OK","app.exercises.clone_exercise_dialog.description":"Bitte gib den Namen für das neue Projekt ein, um an Aufgabe \"{name}\" zu arbeiten.","app.exercises.clone_exercise_dialog.new_name_label":"Projektname","app.exercises.clone_exercise_dialog.title":"Neues Projekt anlegen","app.exercises.clone_exercise_tooltip":"Neues Projekt anlegen um an Aufgabe \"{name}\" zu arbeiten","app.exercises.create_exercise_dialog.description":"Projekt \"{name}\" als Aufgabe hochladen?","app.exercises.create_exercise_dialog.title":"Neue Aufgabe anlegen","app.exercises.delete_exercise_dialog.description":"Soll die Aufgabe \"{name}\" gelöscht werden?","app.exercises.delete_exercise_dialog.title":"Löschen bestätigen","app.exercises.delete_exercise_tooltip":"Aufgabe \"{name}\" löschen","app.exercises.edit_exercise_tooltip":"Aufgabe \"{name}\" bearbeiten","app.exercises.list_title":"Aufgaben","app.exercises.open_associated_project_menu_item":"Projekt \"{name}\" öffnen","app.exercises.open_associated_project_menu_tooltip":"Bestehendes Projekt öffnen um an Aufgabe \"{exercise}\" zu arbeiten","app.exercises.open_associated_project_tooltip":"Projekt \"{name}\" öffnen um an Aufgabe \"{exercise}\" zu arbeiten","app.exercises.refresh_exercise_list_tooltip":"Aufgabenliste aktualisieren","app.exercises.secondary_text":"Schwierigkeitsgrad: {level}","app.exercises.upload_exercise_tooltip":"Projekt \"{name}\" als Aufgabe hochladen","app.footer.home":"Home","app.header.home_label":"Home","app.header.home_logo_alt":"Hedgehog Logo","app.header.my_account_tooltip":"Mein Konto","app.header.select_language_tooltip":"Sprache wählen","app.header.title":"Netrob IDE","app.home.create":"Erstelle dein erstes Projekt","app.home.description":"Lerne mit der Hedgehog IDE programmieren, ohne Anmeldung!","app.home.learn":"Oder erfahre mehr über die ersten Schritte","app.home.welcome":"Willkommen in der Hedgehog IDE","app.ide.create_file_dialog.description":"Bitte gib den Namen für {type, select, FILE {die neue Datei} DIRECTORY {den neuen Ordner}} ein.","app.ide.create_file_dialog.title":"{type, select, FILE {Neue Datei} DIRECTORY {Neuen Ordner}} anlegen","app.ide.delete_file_dialog.description":"Willst du {type, select, FILE {die Datei} DIRECTORY {den Ordner}} \"{name}\" wirklich löschen?","app.ide.delete_file_dialog.title":"Löschen bestätigen","app.ide.file_menu.create_assets_directory":"Assets-Ordner anlegen","app.ide.file_menu.create_3DSimulation_config":"Config File für die 3D Simulation erstellen","app.ide.file_menu.create_blockly_file":"Neue Blockly-Datei","app.ide.file_menu.create_folder":"Neuer Ordner","app.ide.file_menu.create_js_file":"Neue Javascript-Datei","app.ide.file_menu.create_layout_configuration":"Layout-Konfiguration anlegen/aktualisieren","app.ide.file_menu.create_markdown_file":"Neue Markdown-Datei","app.ide.file_menu.create_plugins_directory":"Plugin-Ordner anlegen","app.ide.file_menu.create_simulator_configuration":"Simulator-Konfiguration anlegen","app.ide.file_menu.create_toolbox_configuration":"Toolbox-Konfiguration anlegen","app.ide.file_menu.delete":"Löschen","app.ide.file_menu.download":"Herunterladen","app.ide.file_menu.rename":"Umbenennen","app.ide.file_menu.upload":"Hochladen","app.ide.rename_file_dialog.description":"Bitte gib einen neuen Namen für {type, select, FILE {die Datei} DIRECTORY {den Ordner}} ein.","app.ide.rename_file_dialog.title":"{type, select, FILE {Datei} DIRECTORY {Ordner}} umbenennen","app.ide.toolbar.console_tooltip":"Konsole","app.ide.toolbar.project_settings.create_metadata":"Metadaten-Ordner anlegen","app.ide.toolbar.project_settings.show_hide_metadata":"Metadaten {action, select, SHOW {anzeigen} HIDE {verbergen}}","app.ide.toolbar.project_settings_tooltip":"Projekteinstellungen","app.ide.toolbar.restore_layout_tooltip":"Layout wiederherstellen","app.ide.toolbar.simulator_tooltip":"Simulator","app.login":"Einloggen","app.login.failed":"Einloggen Fehlgeschlagen","app.logout":"Ausloggen","app.projects.create_project_dialog.description":"Bitte gib den Namen für das neue Projekt ein.","app.projects.create_project_dialog.new_name_label":"Projektname","app.projects.create_project_dialog.title":"Neues Projekt anlegen","app.projects.create_project_tooltip":"Neues Projekt","app.projects.delete_project_dialog.description":"Willst du das Projekt \"{name}\" wirklich löschen?","app.projects.delete_project_dialog.title":"Löschen bestätigen","app.projects.delete_project_tooltip":"Projekt \"{name}\" löschen","app.projects.list_title":"Projektübersicht","app.projects.refresh_project_list_tooltip":"Projektübersicht aktualisieren","app.projects.rename_project_dialog.description":"Bitte gib einen neuen Namen für das Projekt ein.","app.projects.rename_project_dialog.new_name_label":"Projektname","app.projects.rename_project_dialog.title":"Projekt umbenennen","app.projects.rename_project_tooltip":"Projekt \"{name}\" umbenennen","app.sidebar.contest_tooltip":"Wettbewerb","app.sidebar.help_tooltip":"Hilfe"};

/***/ }),

/***/ "./src/translations/locales/en.json":
/***/ (function(module) {

module.exports = {"app.auth.password":"Password","app.auth.username":"Username","app.dialog.cancel":"Cancel","app.dialog.ok":"OK","app.exercises.clone_exercise_dialog.description":"Please enter the project name for working on exercise \"{name}\".","app.exercises.clone_exercise_dialog.new_name_label":"Project Name","app.exercises.clone_exercise_dialog.title":"Create new project","app.exercises.clone_exercise_tooltip":"Create new project to work on exercise \"{name}\"","app.exercises.create_exercise_dialog.description":"Do you want to upload project \"{name}\" as an exercise?","app.exercises.create_exercise_dialog.title":"Create new exercise","app.exercises.delete_exercise_dialog.description":"Are you sure you want to delete exercise \"{name}\"?","app.exercises.delete_exercise_dialog.title":"Confirm deletion","app.exercises.delete_exercise_tooltip":"Delete Exercise \"{name}\"","app.exercises.edit_exercise_tooltip":"Edit Exercise \"{name}\"","app.exercises.list_title":"Exercises","app.exercises.open_associated_project_menu_item":"Open project \"{name}\"","app.exercises.open_associated_project_menu_tooltip":"Open an existing project to work on exercise \"{exercise}\"","app.exercises.open_associated_project_tooltip":"Open project \"{name}\" to work on exercise \"{exercise}\"","app.exercises.refresh_exercise_list_tooltip":"Refresh Exercise List","app.exercises.secondary_text":"Difficulty: {level}","app.exercises.upload_exercise_tooltip":"Upload project \"{name}\" as an exercise","app.footer.home":"Home","app.header.home_label":"Home","app.header.home_logo_alt":"Hedgehog Logo","app.header.my_account_tooltip":"My Account","app.header.select_language_tooltip":"Select Language","app.header.title":"Netrob IDE","app.home.create":"Create your first project","app.home.description":"Learn coding using the Hedgehog IDE without signing up!","app.home.learn":"Or learn how to get started","app.home.welcome":"Welcome to Hedgehog IDE","app.ide.create_file_dialog.description":"Please enter the new {type, select, FILE {file's} DIRECTORY {folder's}} name.","app.ide.create_file_dialog.title":"Create new {type, select, FILE {file} DIRECTORY {folder}}","app.ide.delete_file_dialog.description":"Are you sure you want to delete {type, select, FILE {file} DIRECTORY {folder}} \"{name}\"?","app.ide.delete_file_dialog.title":"Confirm deletion","app.ide.file_menu.create_assets_directory":"Create Assets Folder","app.ide.file_menu.create_3DSimulation_config":"Create a config for a 3D Simulatin","app.ide.file_menu.create_blockly_file":"New Blockly File","app.ide.file_menu.create_folder":"New Folder","app.ide.file_menu.create_js_file":"New Javascript File","app.ide.file_menu.create_layout_configuration":"Create/Update Workspace Layout Configuration","app.ide.file_menu.create_markdown_file":"New Markdown File","app.ide.file_menu.create_plugins_directory":"Create Plugin Folder","app.ide.file_menu.create_simulator_configuration":"Create Simulator Configuration","app.ide.file_menu.create_toolbox_configuration":"Create Toolbox Configuration","app.ide.file_menu.delete":"Delete","app.ide.file_menu.download":"Download","app.ide.file_menu.rename":"Rename","app.ide.file_menu.upload":"Upload","app.ide.rename_file_dialog.description":"Please enter the {type, select, FILE {file's} DIRECTORY {folder's}} new name.","app.ide.rename_file_dialog.title":"Rename {type, select, FILE {file} DIRECTORY {folder}}","app.ide.toolbar.console_tooltip":"Console","app.ide.toolbar.project_settings.create_metadata":"Create Metadata folder","app.ide.toolbar.project_settings.show_hide_metadata":"{action, select, SHOW {Show} HIDE {Hide}} Metadata","app.ide.toolbar.project_settings_tooltip":"Project settings","app.ide.toolbar.restore_layout_tooltip":"Restore layout","app.ide.toolbar.simulator_tooltip":"Simulator","app.login":"Log In","app.login.failed":"Log In Failed","app.logout":"Log Out","app.projects.create_project_dialog.description":"Please enter the new project's name.","app.projects.create_project_dialog.new_name_label":"Project Name","app.projects.create_project_dialog.title":"Create new project","app.projects.create_project_tooltip":"Create Project","app.projects.delete_project_dialog.description":"Are you sure you want to delete project \"{name}\"?","app.projects.delete_project_dialog.title":"Confirm deletion","app.projects.delete_project_tooltip":"Delete Project \"{name}\"","app.projects.list_title":"Your Projects","app.projects.refresh_project_list_tooltip":"Refresh Project List","app.projects.rename_project_dialog.description":"Please enter the project's new name.","app.projects.rename_project_dialog.new_name_label":"Project Name","app.projects.rename_project_dialog.title":"Rename project","app.projects.rename_project_tooltip":"Rename Project \"{name}\"","app.sidebar.contest_tooltip":"Contest","app.sidebar.help_tooltip":"Help"};

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("@babel/polyfill");
module.exports = __webpack_require__("./src/server/index.js");


/***/ }),

/***/ "@apollo/react-hooks":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "@apollo/react-ssr":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-ssr");

/***/ }),

/***/ "@babel/polyfill":
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),

/***/ "@babylonjs/core":
/***/ (function(module, exports) {

module.exports = require("@babylonjs/core");

/***/ }),

/***/ "@babylonjs/core/Debug/debugLayer":
/***/ (function(module, exports) {

module.exports = require("@babylonjs/core/Debug/debugLayer");

/***/ }),

/***/ "@babylonjs/core/Loading/sceneLoader":
/***/ (function(module, exports) {

module.exports = require("@babylonjs/core/Loading/sceneLoader");

/***/ }),

/***/ "@babylonjs/inspector":
/***/ (function(module, exports) {

module.exports = require("@babylonjs/inspector");

/***/ }),

/***/ "@material-ui/core/AppBar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Avatar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "@material-ui/core/Badge":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "@material-ui/core/Button":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Container":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Dialog":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/DialogContentText":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "@material-ui/core/Divider":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/Grid":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Icon":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ "@material-ui/core/IconButton":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/List":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemAvatar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemAvatar");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemSecondaryAction":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemSecondaryAction");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Menu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Paper":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/TextField":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Tooltip":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "@material-ui/core/Typography":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/colors/common":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/common");

/***/ }),

/***/ "@material-ui/core/styles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/lab/Alert":
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Alert");

/***/ }),

/***/ "@material-ui/lab/AlertTitle":
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/AlertTitle");

/***/ }),

/***/ "@material-ui/styles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "@uiw/react-md-editor":
/***/ (function(module, exports) {

module.exports = require("@uiw/react-md-editor");

/***/ }),

/***/ "ace-builds/src-noconflict/ext-language_tools":
/***/ (function(module, exports) {

module.exports = require("ace-builds/src-noconflict/ext-language_tools");

/***/ }),

/***/ "ace-builds/src-noconflict/mode-javascript":
/***/ (function(module, exports) {

module.exports = require("ace-builds/src-noconflict/mode-javascript");

/***/ }),

/***/ "ace-builds/src-noconflict/theme-github":
/***/ (function(module, exports) {

module.exports = require("ace-builds/src-noconflict/theme-github");

/***/ }),

/***/ "ace-builds/webpack-resolver":
/***/ (function(module, exports) {

module.exports = require("ace-builds/webpack-resolver");

/***/ }),

/***/ "apollo-cache-inmemory":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link":
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),

/***/ "apollo-link-error":
/***/ (function(module, exports) {

module.exports = require("apollo-link-error");

/***/ }),

/***/ "apollo-link-schema":
/***/ (function(module, exports) {

module.exports = require("apollo-link-schema");

/***/ }),

/***/ "apollo-server":
/***/ (function(module, exports) {

module.exports = require("apollo-server");

/***/ }),

/***/ "apollo-server-express":
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "base64-js":
/***/ (function(module, exports) {

module.exports = require("base64-js");

/***/ }),

/***/ "bcryptjs":
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "blockly":
/***/ (function(module, exports) {

module.exports = require("blockly");

/***/ }),

/***/ "blockly/blocks":
/***/ (function(module, exports) {

module.exports = require("blockly/blocks");

/***/ }),

/***/ "blockly/core":
/***/ (function(module, exports) {

module.exports = require("blockly/core");

/***/ }),

/***/ "blockly/javascript":
/***/ (function(module, exports) {

module.exports = require("blockly/javascript");

/***/ }),

/***/ "blockly/msg/de":
/***/ (function(module, exports) {

module.exports = require("blockly/msg/de");

/***/ }),

/***/ "blockly/msg/en":
/***/ (function(module, exports) {

module.exports = require("blockly/msg/en");

/***/ }),

/***/ "blockly/python":
/***/ (function(module, exports) {

module.exports = require("blockly/python");

/***/ }),

/***/ "body-parser":
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cookie-parser":
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "crcljs-node/src/TCPRobotConnection.mjs":
/***/ (function(module, exports) {

module.exports = require("crcljs-node/src/TCPRobotConnection.mjs");

/***/ }),

/***/ "crcljs/src/CRCLCommand":
/***/ (function(module, exports) {

module.exports = require("crcljs/src/CRCLCommand");

/***/ }),

/***/ "crcljs/src/CommandFactory":
/***/ (function(module, exports) {

module.exports = require("crcljs/src/CommandFactory");

/***/ }),

/***/ "crcljs/src/MultiRobotInterface":
/***/ (function(module, exports) {

module.exports = require("crcljs/src/MultiRobotInterface");

/***/ }),

/***/ "crcljs/src/RobotInterface":
/***/ (function(module, exports) {

module.exports = require("crcljs/src/RobotInterface");

/***/ }),

/***/ "eulerutil":
/***/ (function(module, exports) {

module.exports = require("eulerutil");

/***/ }),

/***/ "eulerutil/src/EulerUtil.js":
/***/ (function(module, exports) {

module.exports = require("eulerutil/src/EulerUtil.js");

/***/ }),

/***/ "express":
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-jwt":
/***/ (function(module, exports) {

module.exports = require("express-jwt");

/***/ }),

/***/ "filer":
/***/ (function(module, exports) {

module.exports = require("filer");

/***/ }),

/***/ "flexlayout-react":
/***/ (function(module, exports) {

module.exports = require("flexlayout-react");

/***/ }),

/***/ "graphql":
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),

/***/ "graphql-subscriptions":
/***/ (function(module, exports) {

module.exports = require("graphql-subscriptions");

/***/ }),

/***/ "graphql-tag":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "graphql-tools":
/***/ (function(module, exports) {

module.exports = require("graphql-tools");

/***/ }),

/***/ "history":
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),

/***/ "http":
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "isomorphic-style-loader/StyleContext":
/***/ (function(module, exports) {

module.exports = require("isomorphic-style-loader/StyleContext");

/***/ }),

/***/ "isomorphic-style-loader/useStyles":
/***/ (function(module, exports) {

module.exports = require("isomorphic-style-loader/useStyles");

/***/ }),

/***/ "isomorphic-style-loader/withStyles":
/***/ (function(module, exports) {

module.exports = require("isomorphic-style-loader/withStyles");

/***/ }),

/***/ "jsonwebtoken":
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "jsstore":
/***/ (function(module, exports) {

module.exports = require("jsstore");

/***/ }),

/***/ "jsstore/dist/jsstore.worker":
/***/ (function(module, exports) {

module.exports = require("jsstore/dist/jsstore.worker");

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "lodash.merge":
/***/ (function(module, exports) {

module.exports = require("lodash.merge");

/***/ }),

/***/ "material-ui-popup-state":
/***/ (function(module, exports) {

module.exports = require("material-ui-popup-state");

/***/ }),

/***/ "material-ui-popup-state/hooks":
/***/ (function(module, exports) {

module.exports = require("material-ui-popup-state/hooks");

/***/ }),

/***/ "matter-js":
/***/ (function(module, exports) {

module.exports = require("matter-js");

/***/ }),

/***/ "mdi-material-ui/AccountCircle":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/AccountCircle");

/***/ }),

/***/ "mdi-material-ui/ArrowAll":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/ArrowAll");

/***/ }),

/***/ "mdi-material-ui/AxisArrow":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/AxisArrow");

/***/ }),

/***/ "mdi-material-ui/ChevronLeft":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/ChevronLeft");

/***/ }),

/***/ "mdi-material-ui/ChevronRight":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/ChevronRight");

/***/ }),

/***/ "mdi-material-ui/CloudUpload":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/CloudUpload");

/***/ }),

/***/ "mdi-material-ui/CodeJson":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/CodeJson");

/***/ }),

/***/ "mdi-material-ui/Cogs":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/Cogs");

/***/ }),

/***/ "mdi-material-ui/Console":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/Console");

/***/ }),

/***/ "mdi-material-ui/Database":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/Database");

/***/ }),

/***/ "mdi-material-ui/Delete":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/Delete");

/***/ }),

/***/ "mdi-material-ui/DotsVertical":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/DotsVertical");

/***/ }),

/***/ "mdi-material-ui/Download":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/Download");

/***/ }),

/***/ "mdi-material-ui/ExclamationThick":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/ExclamationThick");

/***/ }),

/***/ "mdi-material-ui/ExitToApp":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/ExitToApp");

/***/ }),

/***/ "mdi-material-ui/File":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/File");

/***/ }),

/***/ "mdi-material-ui/FilePdf":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/FilePdf");

/***/ }),

/***/ "mdi-material-ui/Folder":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/Folder");

/***/ }),

/***/ "mdi-material-ui/FolderImage":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/FolderImage");

/***/ }),

/***/ "mdi-material-ui/FolderOpen":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/FolderOpen");

/***/ }),

/***/ "mdi-material-ui/Forum":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/Forum");

/***/ }),

/***/ "mdi-material-ui/HelpCircleOutline":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/HelpCircleOutline");

/***/ }),

/***/ "mdi-material-ui/Image":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/Image");

/***/ }),

/***/ "mdi-material-ui/LanguageJavascript":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/LanguageJavascript");

/***/ }),

/***/ "mdi-material-ui/LanguageMarkdown":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/LanguageMarkdown");

/***/ }),

/***/ "mdi-material-ui/LanguagePython":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/LanguagePython");

/***/ }),

/***/ "mdi-material-ui/Magnify":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/Magnify");

/***/ }),

/***/ "mdi-material-ui/MagnifyMinusOutline":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/MagnifyMinusOutline");

/***/ }),

/***/ "mdi-material-ui/MagnifyPlusOutline":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/MagnifyPlusOutline");

/***/ }),

/***/ "mdi-material-ui/MagnifyScan":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/MagnifyScan");

/***/ }),

/***/ "mdi-material-ui/Pencil":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/Pencil");

/***/ }),

/***/ "mdi-material-ui/Play":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/Play");

/***/ }),

/***/ "mdi-material-ui/Plus":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/Plus");

/***/ }),

/***/ "mdi-material-ui/Refresh":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/Refresh");

/***/ }),

/***/ "mdi-material-ui/Resize":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/Resize");

/***/ }),

/***/ "mdi-material-ui/RobotIndustrial":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/RobotIndustrial");

/***/ }),

/***/ "mdi-material-ui/RotateLeft":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/RotateLeft");

/***/ }),

/***/ "mdi-material-ui/RotateOrbit":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/RotateOrbit");

/***/ }),

/***/ "mdi-material-ui/Share":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/Share");

/***/ }),

/***/ "mdi-material-ui/Stop":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/Stop");

/***/ }),

/***/ "mdi-material-ui/ToolboxOutline":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/ToolboxOutline");

/***/ }),

/***/ "mdi-material-ui/ToyBrick":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/ToyBrick");

/***/ }),

/***/ "mdi-material-ui/Translate":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/Translate");

/***/ }),

/***/ "mdi-material-ui/TuneVertical":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/TuneVertical");

/***/ }),

/***/ "mdi-material-ui/Upload":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/Upload");

/***/ }),

/***/ "mdi-material-ui/ViewCompactOutline":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/ViewCompactOutline");

/***/ }),

/***/ "mdi-material-ui/Widgets":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/Widgets");

/***/ }),

/***/ "mongoose":
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "path":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "pathseg":
/***/ (function(module, exports) {

module.exports = require("pathseg");

/***/ }),

/***/ "peerjs":
/***/ (function(module, exports) {

module.exports = require("peerjs");

/***/ }),

/***/ "poly-decomp":
/***/ (function(module, exports) {

module.exports = require("poly-decomp");

/***/ }),

/***/ "pretty-error":
/***/ (function(module, exports) {

module.exports = require("pretty-error");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "rc-tree":
/***/ (function(module, exports) {

module.exports = require("rc-tree");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-ace":
/***/ (function(module, exports) {

module.exports = require("react-ace");

/***/ }),

/***/ "react-dom/server":
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-intl":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "serialize-javascript":
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),

/***/ "universal-router":
/***/ (function(module, exports) {

module.exports = require("universal-router");

/***/ }),

/***/ "webrob/src//InputController":
/***/ (function(module, exports) {

module.exports = require("webrob/src//InputController");

/***/ }),

/***/ "webrob/src/AxesHelper":
/***/ (function(module, exports) {

module.exports = require("webrob/src/AxesHelper");

/***/ }),

/***/ "webrob/src/AxesHelper.js":
/***/ (function(module, exports) {

module.exports = require("webrob/src/AxesHelper.js");

/***/ }),

/***/ "webrob/src/InputController.js":
/***/ (function(module, exports) {

module.exports = require("webrob/src/InputController.js");

/***/ }),

/***/ "webrob/src/robot/Joint":
/***/ (function(module, exports) {

module.exports = require("webrob/src/robot/Joint");

/***/ }),

/***/ "webrob/src/robot/MultiRobotHandler":
/***/ (function(module, exports) {

module.exports = require("webrob/src/robot/MultiRobotHandler");

/***/ }),

/***/ "webrob/src/robot/Robot":
/***/ (function(module, exports) {

module.exports = require("webrob/src/robot/Robot");

/***/ }),

/***/ "webrob/src/robot/Robot.js":
/***/ (function(module, exports) {

module.exports = require("webrob/src/robot/Robot.js");

/***/ }),

/***/ "webrob/src/test/data":
/***/ (function(module, exports) {

module.exports = require("webrob/src/test/data");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlcyI6WyIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3dlYnBhY2svYm9vdHN0cmFwIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIi4vY2h1bmstbWFuaWZlc3QuanNvblwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvcm91dGVzL2Vycm9yL0Vycm9yUGFnZS5jc3MiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2luc2VydENzcy5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvY29tcG9uZW50cy9sb2NhbGUvaW5kZXguanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9jb21wb25lbnRzL21pc2MvaG9va3MvYXBvbGxvLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvY29tcG9uZW50cy9taXNjL2hvb2tzL2FzeW5jX3N0YXRlLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvY29tcG9uZW50cy9taXNjL2hvb2tzL2luZGV4LmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvY29tcG9uZW50cy9taXNjL2hvb2tzL2xvY2FsU3RvcmFnZS5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL2NvbXBvbmVudHMvdGhlbWUuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9jb21wb25lbnRzL3VzZXJzL0F1dGhQcm92aWRlci5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL2NvcmUvY3JlYXRlQXBvbGxvQ2xpZW50L2NyZWF0ZUFwb2xsb0NsaWVudC5zZXJ2ZXIuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9jb3JlL2NyZWF0ZUFwb2xsb0NsaWVudC9jcmVhdGVDYWNoZS5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL2NvcmUvY3JlYXRlSW5pdGlhbFN0YXRlLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvY29yZS9ncmFwaHFsL09uTWVtb3J5U3RhdGUvbmV0d29ya1N0YXR1cy5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL2NvcmUvZ3JhcGhxbC9Pbk1lbW9yeVN0YXRlL3NjaGVtYS5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL2NvcmUvZ3JhcGhxbC9ncmFwaHFsRGVmLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvY29yZS9ncmFwaHFsL3NjaGVtYS5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL2NvcmUvcm91dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvZXJyb3IvRXJyb3JQYWdlLmNzcz8xZjJkIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvcm91dGVzL2Vycm9yL0Vycm9yUGFnZS5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL3JvdXRlcy9lcnJvci9pbmRleC5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL3JvdXRlcy9pbmRleC5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL3NlcnZlci9IdG1sLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvc2VydmVyL2NvbmZpZy5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL3NlcnZlci9ncmFwaHFsL0F1dGhEaXJlY3RpdmUuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9zZXJ2ZXIvZ3JhcGhxbC9zY2hlbWEuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9zZXJ2ZXIvZ3JhcGhxbC9zY2hlbWEvUHJvamVjdC5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL3NlcnZlci9ncmFwaHFsL3NjaGVtYS9Vc2VyLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvc2VydmVyL2dyYXBocWwvc2NoZW1hL2luZGV4LmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvc2VydmVyL2luZGV4LmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvc2VydmVyL2xvYWRlcnMuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9zZXJ2ZXIvbW9uZ29kYi9kYi5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL3NlcnZlci9tb25nb2RiL2luZGV4LmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvc2VydmVyL21vbmdvZGIvc2NoZW1hL1Byb2plY3QuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9zZXJ2ZXIvbW9uZ29kYi9zY2hlbWEvVXNlci5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL3NlcnZlci9tb25nb2RiL3NjaGVtYS91dGlscy5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL3NlcnZlci9yZW5kZXJFeGVjdXRvci5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL3NlcnZlci9yZW5kZXJIdG1sLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvdHJhbnNsYXRpb25zL2luZGV4LmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LXNzclwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIkBiYWJlbC9wb2x5ZmlsbFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIkBiYWJ5bG9uanMvY29yZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIkBiYWJ5bG9uanMvY29yZS9EZWJ1Zy9kZWJ1Z0xheWVyXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwiQGJhYnlsb25qcy9jb3JlL0xvYWRpbmcvc2NlbmVMb2FkZXJcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJAYmFieWxvbmpzL2luc3BlY3RvclwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0JhZGdlXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25cIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1BdmF0YXJcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb25cIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvblwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2NvbW1vblwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9sYWIvQWxlcnRcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0VGl0bGVcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwiQHVpdy9yZWFjdC1tZC1lZGl0b3JcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJhY2UtYnVpbGRzL3NyYy1ub2NvbmZsaWN0L2V4dC1sYW5ndWFnZV90b29sc1wiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcImFjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvbW9kZS1qYXZhc2NyaXB0XCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwiYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC90aGVtZS1naXRodWJcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJhY2UtYnVpbGRzL3dlYnBhY2stcmVzb2x2ZXJcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJhcG9sbG8tY2xpZW50XCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwiYXBvbGxvLWxpbmtcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1lcnJvclwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcImFwb2xsby1saW5rLXNjaGVtYVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcImFwb2xsby1zZXJ2ZXJcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJiYXNlNjQtanNcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJiY3J5cHRqc1wiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcImJsb2NrbHlcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJibG9ja2x5L2Jsb2Nrc1wiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcImJsb2NrbHkvY29yZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcImJsb2NrbHkvamF2YXNjcmlwdFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcImJsb2NrbHkvbXNnL2RlXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwiYmxvY2tseS9tc2cvZW5cIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJibG9ja2x5L3B5dGhvblwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwiY29va2llLXBhcnNlclwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcImNyY2xqcy1ub2RlL3NyYy9UQ1BSb2JvdENvbm5lY3Rpb24ubWpzXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwiY3JjbGpzL3NyYy9DUkNMQ29tbWFuZFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcImNyY2xqcy9zcmMvQ29tbWFuZEZhY3RvcnlcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJjcmNsanMvc3JjL011bHRpUm9ib3RJbnRlcmZhY2VcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJjcmNsanMvc3JjL1JvYm90SW50ZXJmYWNlXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwiZXVsZXJ1dGlsXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwiZXVsZXJ1dGlsL3NyYy9FdWxlclV0aWwuanNcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJleHByZXNzXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwiZXhwcmVzcy1qd3RcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJmaWxlclwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcImZsZXhsYXlvdXQtcmVhY3RcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJncmFwaHFsXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwiZ3JhcGhxbC1zdWJzY3JpcHRpb25zXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJncmFwaHFsLXRvb2xzXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwiaGlzdG9yeVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcImh0dHBcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJpc29tb3JwaGljLXN0eWxlLWxvYWRlci9TdHlsZUNvbnRleHRcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJpc29tb3JwaGljLXN0eWxlLWxvYWRlci91c2VTdHlsZXNcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJpc29tb3JwaGljLXN0eWxlLWxvYWRlci93aXRoU3R5bGVzXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwianNzdG9yZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcImpzc3RvcmUvZGlzdC9qc3N0b3JlLndvcmtlclwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcImxvZGFzaFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcImxvZGFzaC5tZXJnZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIm1hdGVyaWFsLXVpLXBvcHVwLXN0YXRlXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwibWF0ZXJpYWwtdWktcG9wdXAtc3RhdGUvaG9va3NcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJtYXR0ZXItanNcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvQWNjb3VudENpcmNsZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9BcnJvd0FsbFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9BeGlzQXJyb3dcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvQ2hldnJvbkxlZnRcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvQ2hldnJvblJpZ2h0XCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL0Nsb3VkVXBsb2FkXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL0NvZGVKc29uXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL0NvZ3NcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvQ29uc29sZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9EYXRhYmFzZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9EZWxldGVcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvRG90c1ZlcnRpY2FsXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL0Rvd25sb2FkXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL0V4Y2xhbWF0aW9uVGhpY2tcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvRXhpdFRvQXBwXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL0ZpbGVcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvRmlsZVBkZlwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9Gb2xkZXJcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvRm9sZGVySW1hZ2VcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvRm9sZGVyT3BlblwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9Gb3J1bVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9IZWxwQ2lyY2xlT3V0bGluZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9JbWFnZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9MYW5ndWFnZUphdmFzY3JpcHRcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvTGFuZ3VhZ2VNYXJrZG93blwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9MYW5ndWFnZVB5dGhvblwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9NYWduaWZ5XCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL01hZ25pZnlNaW51c091dGxpbmVcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvTWFnbmlmeVBsdXNPdXRsaW5lXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL01hZ25pZnlTY2FuXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL1BlbmNpbFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9QbGF5XCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL1BsdXNcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvUmVmcmVzaFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9SZXNpemVcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvUm9ib3RJbmR1c3RyaWFsXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL1JvdGF0ZUxlZnRcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvUm90YXRlT3JiaXRcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvU2hhcmVcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvU3RvcFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9Ub29sYm94T3V0bGluZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9Ub3lCcmlja1wiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9UcmFuc2xhdGVcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvVHVuZVZlcnRpY2FsXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL1VwbG9hZFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9WaWV3Q29tcGFjdE91dGxpbmVcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvV2lkZ2V0c1wiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwicGF0aFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcInBhdGhzZWdcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJwZWVyanNcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJwb2x5LWRlY29tcFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcInByZXR0eS1lcnJvclwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJyYy10cmVlXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwicmVhY3RcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJyZWFjdC1hY2VcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwicmVhY3QtaW50bFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwidW5pdmVyc2FsLXJvdXRlclwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIndlYnJvYi9zcmMvSW5wdXRDb250cm9sbGVyXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwid2Vicm9iL3NyYy9BeGVzSGVscGVyXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwid2Vicm9iL3NyYy9BeGVzSGVscGVyLmpzXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwid2Vicm9iL3NyYy9JbnB1dENvbnRyb2xsZXIuanNcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJ3ZWJyb2Ivc3JjL3JvYm90L0pvaW50XCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwid2Vicm9iL3NyYy9yb2JvdC9NdWx0aVJvYm90SGFuZGxlclwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9leHRlcm5hbCBcIndlYnJvYi9zcmMvcm9ib3QvUm9ib3RcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2IvZXh0ZXJuYWwgXCJ3ZWJyb2Ivc3JjL3JvYm90L1JvYm90LmpzXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL2V4dGVybmFsIFwid2Vicm9iL3NyYy90ZXN0L2RhdGFcIiJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi9cIiArIFwidXBkYXRlcy9cIiArIGNodW5rSWQgKyBcIi5cIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc1wiKTtcbiBcdFx0aG90QWRkVXBkYXRlQ2h1bmsoY2h1bmsuaWQsIGNodW5rLm1vZHVsZXMpO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkTWFuaWZlc3QoKSB7XG4gXHRcdHRyeSB7XG4gXHRcdFx0dmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIuL1wiICsgXCJ1cGRhdGVzL1wiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIik7XG4gXHRcdH0gY2F0Y2ggKGUpIHtcbiBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh1cGRhdGUpO1xuIFx0fVxuXG4gXHQvL2VzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdH1cblxuIFx0dmFyIGhvdEFwcGx5T25VcGRhdGUgPSB0cnVlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcImQxZTM5OTQ0ZmQwYTE1NGI0ZDBjXCI7XG4gXHR2YXIgaG90UmVxdWVzdFRpbWVvdXQgPSAxMDAwMDtcbiBcdHZhciBob3RDdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xuIFx0dmFyIGhvdEN1cnJlbnRDaGlsZE1vZHVsZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50c1RlbXAgPSBbXTtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRpZiAoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcbiBcdFx0dmFyIGZuID0gZnVuY3Rpb24ocmVxdWVzdCkge1xuIFx0XHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG4gXHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuIFx0XHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuIFx0XHRcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuIFx0XHRcdFx0XHRcdHJlcXVlc3QgK1xuIFx0XHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdCk7XG4gXHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhyZXF1ZXN0KTtcbiBcdFx0fTtcbiBcdFx0dmFyIE9iamVjdEZhY3RvcnkgPSBmdW5jdGlvbiBPYmplY3RGYWN0b3J5KG5hbWUpIHtcbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xuIFx0XHRcdFx0fSxcbiBcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXSA9IHZhbHVlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH07XG4gXHRcdGZvciAodmFyIG5hbWUgaW4gX193ZWJwYWNrX3JlcXVpcmVfXykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJlXCIgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwidFwiXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIE9iamVjdEZhY3RvcnkobmFtZSkpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRmbi5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicmVhZHlcIikgaG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkKS50aGVuKGZpbmlzaENodW5rTG9hZGluZywgZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcbiBcdFx0XHRcdHRocm93IGVycjtcbiBcdFx0XHR9KTtcblxuIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcbiBcdFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XG4gXHRcdFx0XHRcdGlmICghaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRmbi50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0XHRpZiAobW9kZSAmIDEpIHZhbHVlID0gZm4odmFsdWUpO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQodmFsdWUsIG1vZGUgJiB+MSk7XG4gXHRcdH07XG4gXHRcdHJldHVybiBmbjtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIGhvdCA9IHtcbiBcdFx0XHQvLyBwcml2YXRlIHN0dWZmXG4gXHRcdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuIFx0XHRcdF9tYWluOiBob3RDdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkLFxuXG4gXHRcdFx0Ly8gTW9kdWxlIEFQSVxuIFx0XHRcdGFjdGl2ZTogdHJ1ZSxcbiBcdFx0XHRhY2NlcHQ6IGZ1bmN0aW9uKGRlcCwgY2FsbGJhY2spIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0XHRlbHNlIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0fSxcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRpc3Bvc2U6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vIE1hbmFnZW1lbnQgQVBJXG4gXHRcdFx0Y2hlY2s6IGhvdENoZWNrLFxuIFx0XHRcdGFwcGx5OiBob3RBcHBseSxcbiBcdFx0XHRzdGF0dXM6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGlmICghbCkgcmV0dXJuIGhvdFN0YXR1cztcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcbiBcdFx0XHRkYXRhOiBob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cbiBcdFx0fTtcbiBcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuIFx0XHRyZXR1cm4gaG90O1xuIFx0fVxuXG4gXHR2YXIgaG90U3RhdHVzSGFuZGxlcnMgPSBbXTtcbiBcdHZhciBob3RTdGF0dXMgPSBcImlkbGVcIjtcblxuIFx0ZnVuY3Rpb24gaG90U2V0U3RhdHVzKG5ld1N0YXR1cykge1xuIFx0XHRob3RTdGF0dXMgPSBuZXdTdGF0dXM7XG4gXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaG90U3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG4gXHRcdFx0aG90U3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuIFx0fVxuXG4gXHQvLyB3aGlsZSBkb3dubG9hZGluZ1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlcyA9IDA7XG4gXHR2YXIgaG90Q2h1bmtzTG9hZGluZyA9IDA7XG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RBdmFpbGFibGVGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdERlZmVycmVkO1xuXG4gXHQvLyBUaGUgdXBkYXRlIGluZm9cbiBcdHZhciBob3RVcGRhdGUsIGhvdFVwZGF0ZU5ld0hhc2g7XG5cbiBcdGZ1bmN0aW9uIHRvTW9kdWxlSWQoaWQpIHtcbiBcdFx0dmFyIGlzTnVtYmVyID0gK2lkICsgXCJcIiA9PT0gaWQ7XG4gXHRcdHJldHVybiBpc051bWJlciA/ICtpZCA6IGlkO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RDaGVjayhhcHBseSkge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcImlkbGVcIikge1xuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuIFx0XHR9XG4gXHRcdGhvdEFwcGx5T25VcGRhdGUgPSBhcHBseTtcbiBcdFx0aG90U2V0U3RhdHVzKFwiY2hlY2tcIik7XG4gXHRcdHJldHVybiBob3REb3dubG9hZE1hbmlmZXN0KGhvdFJlcXVlc3RUaW1lb3V0KS50aGVuKGZ1bmN0aW9uKHVwZGF0ZSkge1xuIFx0XHRcdGlmICghdXBkYXRlKSB7XG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRcdFx0cmV0dXJuIG51bGw7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90QXZhaWxhYmxlRmlsZXNNYXAgPSB1cGRhdGUuYztcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdXBkYXRlLmg7XG5cbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRob3REZWZlcnJlZCA9IHtcbiBcdFx0XHRcdFx0cmVzb2x2ZTogcmVzb2x2ZSxcbiBcdFx0XHRcdFx0cmVqZWN0OiByZWplY3RcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0aG90VXBkYXRlID0ge307XG4gXHRcdFx0Zm9yKHZhciBjaHVua0lkIGluIGluc3RhbGxlZENodW5rcylcbiBcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3NcbiBcdFx0XHR7XG4gXHRcdFx0XHQvKmdsb2JhbHMgY2h1bmtJZCAqL1xuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiZcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiZcbiBcdFx0XHRcdGhvdFdhaXRpbmdGaWxlcyA9PT0gMFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXG4gXHRcdFx0cmV0dXJuO1xuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xuIFx0XHRmb3IgKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYgKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xuIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcbiBcdFx0aWYgKCFkZWZlcnJlZCkgcmV0dXJuO1xuIFx0XHRpZiAoaG90QXBwbHlPblVwZGF0ZSkge1xuIFx0XHRcdC8vIFdyYXAgZGVmZXJyZWQgb2JqZWN0IGluIFByb21pc2UgdG8gbWFyayBpdCBhcyBhIHdlbGwtaGFuZGxlZCBQcm9taXNlIHRvXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXG4gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxuIFx0XHRcdFByb21pc2UucmVzb2x2ZSgpXG4gXHRcdFx0XHQudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xuIFx0XHRcdFx0fSlcbiBcdFx0XHRcdC50aGVuKFxuIFx0XHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHQpO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpXG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuIFx0XHR2YXIgY2I7XG4gXHRcdHZhciBpO1xuIFx0XHR2YXIgajtcbiBcdFx0dmFyIG1vZHVsZTtcbiBcdFx0dmFyIG1vZHVsZUlkO1xuXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoIW1vZHVsZSB8fCBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRcdFx0aWYgKGhvdFVwZGF0ZVtpZF0pIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHRcdFx0XHQpXG4gXHRcdFx0XHRcdFx0KSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJlxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHQpXG4gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG4gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHRcdH0pO1xuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdCBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxuIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbiBcdFx0XHRcdFx0XHRpZiAoY2IpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihjYikgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xuIFx0XHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4gXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwic2VydmVyXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gcmVxdWlyZSgpIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSAwKSB7XG4gXHRcdFx0dmFyIGNodW5rID0gcmVxdWlyZShcIi4vY2h1bmtzL1wiICsgKHtcImFib3V0fmFkbWlufmNvbnRhY3R+Y29udGVzdH5oZWxwfmlkZX5pbmRleGVkREJ+bG9naW5+bm90LWZvdW5kfnByaXZhY3l+cmVnaXN0ZXJ+d2VicnRjXCI6XCJhYm91dH5hZG1pbn5jb250YWN0fmNvbnRlc3R+aGVscH5pZGV+aW5kZXhlZERCfmxvZ2lufm5vdC1mb3VuZH5wcml2YWN5fnJlZ2lzdGVyfndlYnJ0Y1wiLFwiaGVscFwiOlwiaGVscFwiLFwiYWJvdXRcIjpcImFib3V0XCIsXCJhZG1pblwiOlwiYWRtaW5cIixcImNvbnRhY3RcIjpcImNvbnRhY3RcIixcImNvbnRlc3RcIjpcImNvbnRlc3RcIixcImlkZVwiOlwiaWRlXCIsXCJpbmRleGVkREJcIjpcImluZGV4ZWREQlwiLFwibG9naW5cIjpcImxvZ2luXCIsXCJub3QtZm91bmRcIjpcIm5vdC1mb3VuZFwiLFwicHJpdmFjeVwiOlwicHJpdmFjeVwiLFwicmVnaXN0ZXJcIjpcInJlZ2lzdGVyXCIsXCJ3ZWJydGNcIjpcIndlYnJ0Y1wifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYXNzZXRzL1wiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cbiBcdC8vIF9fd2VicGFja19oYXNoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gaG90Q3VycmVudEhhc2g7IH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gaG90Q3JlYXRlUmVxdWlyZSgwKShfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vY2h1bmstbWFuaWZlc3QuanNvblwiKTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMzJweDtcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICM4ODg7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6ICM1NTU7XFxufVxcblxcbnByZSB7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvcm91dGVzL2Vycm9yL0Vycm9yUGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7R0FPRzs7QUFFSDtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsdUJBQXVCO01BQ25CLG9CQUFvQjtFQUN4QixzQkFBc0I7TUFDbEIsd0JBQXdCO0VBQzVCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsVUFBVTtDQUNYOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7Q0FDbEJcIixcImZpbGVcIjpcIkVycm9yUGFnZS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMzJweDtcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICM4ODg7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6ICM1NTU7XFxufVxcblxcbnByZSB7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwiLyohIElzb21vcnBoaWMgU3R5bGUgTG9hZGVyIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20va3JpYXNvZnQvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW5zZXJ0ZWQgPSB7fTtcblxuZnVuY3Rpb24gYjY0RW5jb2RlVW5pY29kZShzdHIpIHtcbiAgcmV0dXJuIGJ0b2EoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvJShbMC05QS1GXXsyfSkvZywgZnVuY3Rpb24gKG1hdGNoLCBwMSkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKFwiMHhcIiArIHAxKTtcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDc3MoaWRzKSB7XG4gIGlkcy5mb3JFYWNoKGZ1bmN0aW9uIChpZCkge1xuICAgIGlmICgtLWluc2VydGVkW2lkXSA8PSAwKSB7XG4gICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuICAgICAgaWYgKGVsZW0pIHtcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGluc2VydENzcyhzdHlsZXMsIF90ZW1wKSB7XG4gIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICBfcmVmJHJlcGxhY2UgPSBfcmVmLnJlcGxhY2UsXG4gICAgICByZXBsYWNlID0gX3JlZiRyZXBsYWNlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkcmVwbGFjZSxcbiAgICAgIF9yZWYkcHJlcGVuZCA9IF9yZWYucHJlcGVuZCxcbiAgICAgIHByZXBlbmQgPSBfcmVmJHByZXBlbmQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRwcmVwZW5kLFxuICAgICAgX3JlZiRwcmVmaXggPSBfcmVmLnByZWZpeCxcbiAgICAgIHByZWZpeCA9IF9yZWYkcHJlZml4ID09PSB2b2lkIDAgPyAncycgOiBfcmVmJHByZWZpeDtcblxuICB2YXIgaWRzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgX3N0eWxlcyRpID0gc3R5bGVzW2ldLFxuICAgICAgICBtb2R1bGVJZCA9IF9zdHlsZXMkaVswXSxcbiAgICAgICAgY3NzID0gX3N0eWxlcyRpWzFdLFxuICAgICAgICBtZWRpYSA9IF9zdHlsZXMkaVsyXSxcbiAgICAgICAgc291cmNlTWFwID0gX3N0eWxlcyRpWzNdO1xuICAgIHZhciBpZCA9IFwiXCIgKyBwcmVmaXggKyBtb2R1bGVJZCArIFwiLVwiICsgaTtcbiAgICBpZHMucHVzaChpZCk7XG5cbiAgICBpZiAoaW5zZXJ0ZWRbaWRdKSB7XG4gICAgICBpZiAoIXJlcGxhY2UpIHtcbiAgICAgICAgaW5zZXJ0ZWRbaWRdKys7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGluc2VydGVkW2lkXSA9IDE7XG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgdmFyIGNyZWF0ZSA9IGZhbHNlO1xuXG4gICAgaWYgKCFlbGVtKSB7XG4gICAgICBjcmVhdGUgPSB0cnVlO1xuICAgICAgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICAgICAgZWxlbS5pZCA9IGlkO1xuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjc3NUZXh0ID0gY3NzO1xuXG4gICAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY3NzVGV4dCArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBiNjRFbmNvZGVVbmljb2RlKEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpICsgXCIqL1wiO1xuICAgICAgY3NzVGV4dCArPSBcIlxcbi8qIyBzb3VyY2VVUkw9XCIgKyBzb3VyY2VNYXAuZmlsZSArIFwiP1wiICsgaWQgKyBcIiovXCI7XG4gICAgfVxuXG4gICAgaWYgKCd0ZXh0Q29udGVudCcgaW4gZWxlbSkge1xuICAgICAgZWxlbS50ZXh0Q29udGVudCA9IGNzc1RleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0uc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzVGV4dDtcbiAgICB9XG5cbiAgICBpZiAoY3JlYXRlKSB7XG4gICAgICBpZiAocHJlcGVuZCkge1xuICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZShlbGVtLCBkb2N1bWVudC5oZWFkLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVtb3ZlQ3NzLmJpbmQobnVsbCwgaWRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRDc3M7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbnNlcnRDc3MuanMubWFwXG4iLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCBTdHlsZUNvbnRleHQgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvU3R5bGVDb250ZXh0JztcblxuaW1wb3J0IHRoZW1lIGZyb20gJy4vdGhlbWUnO1xuXG5pbXBvcnQgeyBMb2NhbGVQcm92aWRlciB9IGZyb20gJy4vbG9jYWxlJztcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJy4vdXNlcnMvQXV0aFByb3ZpZGVyJztcblxuLy8gU2luY2UgdGhlIGN1cnJlbnQgUmVhY3QgU3RhcnRlciBLaXQgdXNlcyBvbGRlciBSZWFjdCBDb250ZXh0IEFQSSB0aGF0IGNhbm5vdCBiZSB0eXBlZCxcbi8vIGhlcmUgd2UgZGVjbGFyZSBkdXBsaWNhdGUgdHlwZSBpbmZvcm1hdGlvbi5cblxudHlwZSBDb250ZXh0VHlwZSA9IHt8XG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBPYmplY3QsXG4gIGNsaWVudDogT2JqZWN0LFxuICBsb2NhbGVzOiBzdHJpbmdbXSxcbnx9O1xuXG50eXBlIFByb3BzID0ge3xcbiAgY29udGV4dDogQ29udGV4dFR5cGUsXG4gIGluc2VydENzczogRnVuY3Rpb24sXG4gIGNoaWxkcmVuOiBSZWFjdC5Ob2RlLFxufH07XG5cbmNvbnN0IENvbnRleHRSdW50aW1lVHlwZSA9IHtcbiAgLy8gVW5pdmVyc2FsIEhUVFAgY2xpZW50XG4gIHBhdGhuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHF1ZXJ5OiBQcm9wVHlwZXMub2JqZWN0LFxuICAvLyBBcG9sbG8gQ2xpZW50XG4gIGNsaWVudDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAvLyBMb2NhbGVcbiAgbG9jYWxlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZykuaXNSZXF1aXJlZCxcbn07XG5cbmNvbnN0IFByb3BUeXBlc1J1bnRpbWVUeXBlID0ge1xuICAvLyBFbmFibGVzIGNyaXRpY2FsIHBhdGggQ1NTIHJlbmRlcmluZ1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20va3JpYXNvZnQvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXJcbiAgaW5zZXJ0Q3NzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjb250ZXh0OiBQcm9wVHlwZXMuc2hhcGUoQ29udGV4dFJ1bnRpbWVUeXBlKS5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcbn07XG5cbi8qKlxuICogVGhlIHRvcC1sZXZlbCBSZWFjdCBjb21wb25lbnQgc2V0dGluZyBjb250ZXh0IChnbG9iYWwpIHZhcmlhYmxlc1xuICogdGhhdCBjYW4gYmUgYWNjZXNzZWQgZnJvbSBhbGwgdGhlIGNoaWxkIGNvbXBvbmVudHMuXG4gKlxuICogaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy9jb250ZXh0Lmh0bWxcbiAqXG4gKiBVc2FnZSBleGFtcGxlOlxuICpcbiAqICAgY29uc3QgY29udGV4dCA9IHtcbiAqICAgICBoaXN0b3J5OiBjcmVhdGVCcm93c2VySGlzdG9yeSgpLFxuICogICAgIHN0b3JlOiBjcmVhdGVTdG9yZSgpLFxuICogICB9O1xuICpcbiAqICAgUmVhY3RET00ucmVuZGVyKFxuICogICAgIDxBcHAgY29udGV4dD17Y29udGV4dH0+XG4gKiAgICAgICA8TGF5b3V0PlxuICogICAgICAgICA8TGFuZGluZ1BhZ2UgLz5cbiAqICAgICAgIDwvTGF5b3V0PlxuICogICAgIDwvQXBwPixcbiAqICAgICBjb250YWluZXIsXG4gKiAgICk7XG4gKi9cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFByb3BUeXBlc1J1bnRpbWVUeXBlO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjb250ZXh0OiB7IGNsaWVudCwgbG9jYWxlcyB9LFxuICAgICAgaW5zZXJ0Q3NzLFxuICAgICAgY2hpbGRyZW4sXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBOT1RFOiBJZiB5b3UgbmVlZCB0byBhZGQgb3IgbW9kaWZ5IGhlYWRlciwgZm9vdGVyIGV0Yy4gb2YgdGhlIGFwcCxcbiAgICAvLyBwbGVhc2UgZG8gdGhhdCBpbnNpZGUgdGhlIExheW91dCBjb21wb25lbnQuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgaW5zZXJ0Q3NzIH19PlxuICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICA8TG9jYWxlUHJvdmlkZXIgdXNlckFnZW50TG9jYWxlcz17bG9jYWxlc30+XG4gICAgICAgICAgICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICA8L0F1dGhQcm92aWRlcj5cbiAgICAgICAgICAgIDwvTG9jYWxlUHJvdmlkZXI+XG4gICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgICAgPC9TdHlsZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEludGxQcm92aWRlciB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5pbXBvcnQgeyB0eXBlIExvY2FsZU1hcCwgTUVTU0FHRVMsIGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vdHJhbnNsYXRpb25zJztcblxudHlwZSBMb2NhbGUgPSB7fFxuICAvLyB0aGUgcHJlZmVycmVkIGxvY2FsZSBzdG9yZWQgaW4gdGhlIEhlZGdlaG9nIElERVxuICBwcmVmZXJyZWRMb2NhbGU6IHN0cmluZyB8IG51bGwsXG4gIHNldFByZWZlcnJlZExvY2FsZTogKHN0cmluZyB8IG51bGwpID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+LFxuICAvLyBhbGwgcHJlZmVycmVkIGxvY2FsZXM6IHRoZSBvbmUgZXhwbGljaXRseSBzZXQgYnkgdGhlIHVzZXIgaWYgbm90IG51bGwsXG4gIC8vIGZvbGxvd2VkIGJ5IHRoZSBvbmVzIGZyb20gdGhlIGVudmlyb25tZW50LCBlLmcuIHVzZXIgYWdlbnQgaW5mb3JtYXRpb25cbiAgcHJlZmVycmVkTG9jYWxlczogc3RyaW5nW10sXG58fTtcblxuZXhwb3J0IGNvbnN0IExvY2FsZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PExvY2FsZT4oe1xuICBwcmVmZXJyZWRMb2NhbGU6IG51bGwsXG4gIHByZWZlcnJlZExvY2FsZXM6IFtdLFxuICBzZXRQcmVmZXJyZWRMb2NhbGU6ICgpID0+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFByZWZlcnJlZExvY2FsZSBub3Qgc3BlY2lmaWVkJyk7XG4gIH0sXG59KTtcblxudHlwZSBMb2NhbGVQcm92aWRlclByb3BUeXBlcyA9IHt8XG4gIHVzZXJBZ2VudExvY2FsZXM6IHN0cmluZ1tdLFxuICBjaGlsZHJlbjogUmVhY3QuTm9kZSxcbnx9O1xuXG4vKipcbiAqIGBMb2NhbGVQcm92aWRlcmAgdGFrZXMgYW4gYXJyYXkgb2YgbG9jYWxlcyB0aGF0IHRoZSB1c2VyIGFnZW50IGluZGljYXRlcyBhcmVcbiAqIHByZWZlcnJlZCBieSB0aGUgdXNlciwgYW5kIGFkZHMgdGhlIG9wdGlvbiBmb3IgdGhlIHVzZXIgdG8gc3BlY2lmeSB0aGVpciBvd25cbiAqIHByZWZlcmVuY2UuXG4gKlxuICogQ29kZSBtYW5pcHVsYXRpbmcgdGhlIGV4cGxpY2l0bHkgZ2l2ZW4gcHJlZmVyZW5jZSBzaG91bGQgdXNlXG4gKiBgcHJlZmVycmVkTG9jYWxlYCBhbmQgYHNldFByZWZlcnJlZExvY2FsZWA7IGNvZGUgdHJ5aW5nIHRvIGZpbmQgdGhlIGJlc3RcbiAqIHN1cHBvcnRlZCBsb2NhbGUgc2hvdWxkIHVzZSBgcHJlZmVycmVkTG9jYWxlc2AsIHdoaWNoIHByZXBlbmRzIHRoZSBzdG9yZWRcbiAqIHByZWZlcmVuY2UgKGlmIGFueSkgdG8gdGhlIHVzZXIgYWdlbnQgbG9jYWxlcywgYW5kIGNob29zZSB0aGUgZmlyc3RcbiAqIHN1cHBvcnRlZCBsb2NhbGUgZnJvbSB0aGF0IGxpc3QuXG4gKlxuICogT3RoZXIgdGhhbiBwcm92aWRpbmcgdGhlIHByZWZlcmVuY2VzLCBgTG9jYWxlUHJvdmlkZXJgIGFsc28gaW5zdGFudGlhdGVzIGFcbiAqIGBJbnRsUHJvdmlkZXJgIHdpdGggYW4gYXBwcm9wcmlhdGUgbG9jYWxlLCBzbyB0aGUgYGNoaWxkcmVuYCBjYW4gdXNlIGFsbCBvZlxuICogdGhlIGByZWFjdC1pbnRsYCBmYWNpbGl0aWVzLiBUaGUgbG9jYWxlLCB1c2VkIGUuZy4gZm9yIGRhdGUgYW5kIG51bWJlclxuICogZm9ybWF0dGluZywgaXMgY2hvc2VuIGFzIGBwcmVmZXJyZWRMb2NhbGVzWzBdID8/IGVuYDsgdGhlIHRyYW5zbGF0aW9uXG4gKiBtZXNzYWdlcyBhcmUgY2hvc2VuIHVzaW5nIGBnZXRUcmFuc2xhdGlvbnNgLCB3aXRoIGBlbmAgYXMgdGhlIGZhbGxiYWNrXG4gKiBtZXNzYWdlIGtleS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIExvY2FsZVByb3ZpZGVyKHsgdXNlckFnZW50TG9jYWxlcywgY2hpbGRyZW4gfTogTG9jYWxlUHJvdmlkZXJQcm9wVHlwZXMpIHtcbiAgY29uc3QgW3ByZWZlcnJlZExvY2FsZSwgc2V0UHJlZmVycmVkTG9jYWxlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IG51bGw+KCgpID0+IHtcbiAgICBpZiAoIXByb2Nlc3MuZW52LkJST1dTRVIpIHJldHVybiBudWxsO1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJlZmVycmVkLWxvY2FsZScpID8/IG51bGw7XG4gIH0pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwcm9jZXNzLmVudi5CUk9XU0VSKSByZXR1cm47XG5cbiAgICBpZiAocHJlZmVycmVkTG9jYWxlICE9PSBudWxsKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJlZmVycmVkLWxvY2FsZScsIHByZWZlcnJlZExvY2FsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcmVmZXJyZWQtbG9jYWxlJyk7XG4gICAgfVxuICB9LCBbcHJlZmVycmVkTG9jYWxlXSk7XG5cbiAgY29uc3QgcHJlZmVycmVkTG9jYWxlcyA9IFtcbiAgICAuLi4ocHJlZmVycmVkTG9jYWxlID09PSBudWxsID8gW10gOiBbcHJlZmVycmVkTG9jYWxlXSksXG4gICAgLi4udXNlckFnZW50TG9jYWxlcyxcbiAgXTtcblxuICBjb25zdCBsb2NhbGUgPSBwcmVmZXJyZWRMb2NhbGVzWzBdID8/ICdlbic7XG4gIGNvbnN0IG1lc3NhZ2VzID0gZ2V0VHJhbnNsYXRpb24ocHJlZmVycmVkTG9jYWxlcywgTUVTU0FHRVMpID8/IE1FU1NBR0VTLmVuO1xuXG4gIHJldHVybiAoXG4gICAgPExvY2FsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgcHJlZmVycmVkTG9jYWxlLCBwcmVmZXJyZWRMb2NhbGVzLCBzZXRQcmVmZXJyZWRMb2NhbGUgfX0+XG4gICAgICA8SW50bFByb3ZpZGVyIGxvY2FsZT17bG9jYWxlfSBtZXNzYWdlcz17bWVzc2FnZXN9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0ludGxQcm92aWRlcj5cbiAgICA8L0xvY2FsZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbi8qKlxuICogUmVhY3QgaG9vayBmb3IgYWNjZXNzaW5nIHRoZSBsb2NhbGUgY29udGV4dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvY2FsZSgpOiBMb2NhbGUge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChMb2NhbGVDb250ZXh0KTtcbn1cblxudHlwZSBMb2NhbGVDb25zdW1lclByb3BUeXBlcyA9IHt8XG4gIGNoaWxkcmVuOiAoTG9jYWxlKSA9PiBSZWFjdC5Ob2RlLFxufH07XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBhY2Nlc3NpbmcgdGhlIGxvY2FsZSBjb250ZXh0IGZyb20gY2xhc3MgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIExvY2FsZUNvbnN1bWVyKHsgY2hpbGRyZW4gfTogTG9jYWxlQ29uc3VtZXJQcm9wVHlwZXMpIHtcbiAgY29uc3QgbG9jYWxlID0gdXNlTG9jYWxlKCk7XG5cbiAgcmV0dXJuIGNoaWxkcmVuKGxvY2FsZSk7XG59XG5cbnR5cGUgTG9jYWxlU2VsZWN0b3JQcm9wVHlwZXM8VD4gPSB7fFxuICBjb21wb25lbnRzOiBMb2NhbGVNYXA8UmVhY3QuQ29tcG9uZW50VHlwZTxUPj4sXG4gIC4uLlQsXG58fTtcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIHVzaW5nIGEgZGlmZmVyZW50IGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgbG9jYWxlLiBUaGVcbiAqIGBjb21wb25lbnRzYCBwcm9wIGlzIGEgbWFwIGZyb20gbG9jYWxlIHN0cmluZ3MgdG8gY29tcG9uZW50IHR5cGVzLlxuICogT25lIGNvbXBvbmVudCBpcyBjaG9zZW4gdXNpbmcgYGdldFRyYW5zbGF0aW9uYCwgd2l0aCBgZW5gIGFzIHRoZSBmYWxsYmFja1xuICoga2V5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gTG9jYWxlU2VsZWN0b3I8VD4oeyBjb21wb25lbnRzLCAuLi5wcm9wcyB9OiBMb2NhbGVTZWxlY3RvclByb3BUeXBlczxUPikge1xuICBjb25zdCB7IHByZWZlcnJlZExvY2FsZXMgfSA9IHVzZUxvY2FsZSgpO1xuICBjb25zdCBDb21wb25lbnQgPSBnZXRUcmFuc2xhdGlvbihwcmVmZXJyZWRMb2NhbGVzLCBjb21wb25lbnRzKSA/PyBjb21wb25lbnRzLmVuO1xuXG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz47XG59XG4iLCIvLyBAZmxvd1xuXG4vKipcbiAqIFRoZSBgbWFrZUZvb2AgaG9vayBmYWN0b3JpZXMgaW4gdGhpcyBtb2R1bGUgd3JhcCBBcG9sbG8ncyBgdXNlRm9vYCBob29rcyBmb3IgbW9yZSBjb252ZW5pZW50IHR5cGluZy5cbiAqXG4gKiBVc2luZyB0aGUgQXBvbGxvIGhvb2tzIGRpcmVjdGx5IGxlYWRzIHRvIGNvZGUgbGlrZSB0aGlzOlxuICpcbiAqICAgIGltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XG4gKiAgICBpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbiAqXG4gKiAgICBpbXBvcnQge1xuICogICAgICB0eXBlIE11dGF0ZSxcbiAqICAgICAgdHlwZSBNdXRhdGVWYXJpYWJsZXMsXG4gKiAgICB9IGZyb20gJy4vX19nZW5lcmF0ZWRfXy9NdXRhdGUnO1xuICpcbiAqICAgIGNvbnN0IFNvbWVNdXRhdGlvbiA9IGdxbGBcbiAqICAgICAgbXV0YXRpb24gTXV0YXRlKCkge1xuICogICAgICAgIG11dGF0ZSgpXG4gKiAgICAgIH1cbiAqICAgIGA7XG4gKlxuICogICAgZnVuY3Rpb24gQ29tcG9uZW50KHsga2V5IH0pIHtcbiAqICAgICAgY29uc3QgW211dGF0ZSwgcmVzcG9uc2VdID0gdXNlTXV0YXRpb248TXV0YXRlLCBNdXRhdGVWYXJpYWJsZXM+KFNvbWVNdXRhdGlvbiwgb3B0aW9ucyk7XG4gKiAgICB9XG4gKlxuICogZXZlbiB0aG91Z2ggdGhlIHR5cGUgaW5mb3JtYXRpb24gaXMgYWN0dWFsbHkgY29ubmVjdGVkIHRvIHRoZSBgU29tZUNvbm5lY3Rpb25gIGNvbnN0YW50LFxuICogbm90IHRoZSBob29rIGNhbGwuXG4gKlxuICogVGhlIGZhY3RvcmllcyBoZXJlIHNoaWZ0IHRoYXQgdHlwaW5nIChhbmQgcGFzc2luZyBvZiB0aGUgcXVlcnkgY29uc3RhbnQpXG4gKiBmcm9tIHRoZSBjYWxsIHNpdGUgdG8gdGhlIHF1ZXJ5IGRlY2xhcmF0aW9uIHNpdGU6XG4gKlxuICogICAgaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG4gKlxuICogICAgaW1wb3J0IHtcbiAqICAgICAgdHlwZSBNdXRhdGUsXG4gKiAgICAgIHR5cGUgTXV0YXRlVmFyaWFibGVzLFxuICogICAgfSBmcm9tICcuL19fZ2VuZXJhdGVkX18vTXV0YXRlJztcbiAqXG4gKiAgICBjb25zdCB1c2VTb21lTXV0YXRpb24gPSBtYWtlTXV0YXRpb248TXV0YXRlLCBNdXRhdGVWYXJpYWJsZXM+KGdxbGBcbiAqICAgICAgbXV0YXRpb24gTXV0YXRlKCkge1xuICogICAgICAgIG11dGF0ZSgpXG4gKiAgICAgIH1cbiAqICAgIGApO1xuICpcbiAqICAgIGZ1bmN0aW9uIENvbXBvbmVudCh7IGtleSB9KSB7XG4gKiAgICAgIGNvbnN0IFttdXRhdGUsIHJlc3BvbnNlXSA9IHVzZVNvbWVNdXRhdGlvbihvcHRpb25zKTtcbiAqICAgIH1cbiAqL1xuXG5pbXBvcnQge1xuICB1c2VRdWVyeSxcbiAgdXNlTGF6eVF1ZXJ5LFxuICB1c2VTdWJzY3JpcHRpb24sXG4gIHVzZU11dGF0aW9uLFxuICB0eXBlIFF1ZXJ5SG9va09wdGlvbnMsXG4gIHR5cGUgUXVlcnlUdXBsZSxcbiAgdHlwZSBRdWVyeVJlc3VsdCxcbiAgdHlwZSBMYXp5UXVlcnlIb29rT3B0aW9ucyxcbiAgdHlwZSBTdWJzY3JpcHRpb25Ib29rT3B0aW9ucyxcbiAgdHlwZSBNdXRhdGlvbkhvb2tPcHRpb25zLFxuICB0eXBlIE11dGF0aW9uVHVwbGUsXG59IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xuXG4vLyBncmFwaHFsIHR5cGVzXG50eXBlIERvY3VtZW50Tm9kZSA9IGFueTtcblxudHlwZSBRdWVyeUhvb2s8VERhdGEsIFRWYXJpYWJsZXM+ID0gKFxuICBvcHRpb25zPzogUXVlcnlIb29rT3B0aW9uczxURGF0YSwgVFZhcmlhYmxlcz4sXG4pID0+IFF1ZXJ5UmVzdWx0PFREYXRhLCBUVmFyaWFibGVzPjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VRdWVyeTxURGF0YSwgVFZhcmlhYmxlcz4ocXVlcnk6IERvY3VtZW50Tm9kZSk6IFF1ZXJ5SG9vazxURGF0YSwgVFZhcmlhYmxlcz4ge1xuICByZXR1cm4gKG9wdGlvbnMpID0+IHVzZVF1ZXJ5PFREYXRhLCBUVmFyaWFibGVzPihxdWVyeSwgb3B0aW9ucyk7XG59XG5cbnR5cGUgTGF6eVF1ZXJ5SG9vazxURGF0YSwgVFZhcmlhYmxlcz4gPSAoXG4gIG9wdGlvbnM/OiBMYXp5UXVlcnlIb29rT3B0aW9uczxURGF0YSwgVFZhcmlhYmxlcz4sXG4pID0+IFF1ZXJ5VHVwbGU8VERhdGEsIFRWYXJpYWJsZXM+O1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUxhenlRdWVyeTxURGF0YSwgVFZhcmlhYmxlcz4oXG4gIHF1ZXJ5OiBEb2N1bWVudE5vZGUsXG4pOiBMYXp5UXVlcnlIb29rPFREYXRhLCBUVmFyaWFibGVzPiB7XG4gIHJldHVybiAob3B0aW9ucykgPT4gdXNlTGF6eVF1ZXJ5PFREYXRhLCBUVmFyaWFibGVzPihxdWVyeSwgb3B0aW9ucyk7XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uSG9vazxURGF0YSwgVFZhcmlhYmxlcz4gPSAoXG4gIG9wdGlvbnM/OiBTdWJzY3JpcHRpb25Ib29rT3B0aW9uczxURGF0YSwgVFZhcmlhYmxlcz4sXG4pID0+IFF1ZXJ5UmVzdWx0PFREYXRhLCBUVmFyaWFibGVzPjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTdWJzY3JpcHRpb248VERhdGEsIFRWYXJpYWJsZXM+KFxuICBxdWVyeTogRG9jdW1lbnROb2RlLFxuKTogU3Vic2NyaXB0aW9uSG9vazxURGF0YSwgVFZhcmlhYmxlcz4ge1xuICByZXR1cm4gKG9wdGlvbnMpID0+IHVzZVN1YnNjcmlwdGlvbjxURGF0YSwgVFZhcmlhYmxlcz4ocXVlcnksIG9wdGlvbnMpO1xufVxuXG50eXBlIE11dGF0aW9uSG9vazxURGF0YSwgVFZhcmlhYmxlcz4gPSAoXG4gIG9wdGlvbnM/OiBNdXRhdGlvbkhvb2tPcHRpb25zPFREYXRhLCBUVmFyaWFibGVzPixcbikgPT4gTXV0YXRpb25UdXBsZTxURGF0YSwgVFZhcmlhYmxlcz47XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlTXV0YXRpb248VERhdGEsIFRWYXJpYWJsZXM+KFxuICBxdWVyeTogRG9jdW1lbnROb2RlLFxuKTogTXV0YXRpb25Ib29rPFREYXRhLCBUVmFyaWFibGVzPiB7XG4gIHJldHVybiAob3B0aW9ucykgPT4gdXNlTXV0YXRpb248VERhdGEsIFRWYXJpYWJsZXM+KHF1ZXJ5LCBvcHRpb25zKTtcbn1cbiIsIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxudHlwZSBBc3luY1N0YXRlPFQ+ID0ge3xcbiAgdmFsdWU6IFQsXG4gIGlzTG9hZGluZzogYm9vbGVhbixcbiAgaXNFcnJvcjogYm9vbGVhbixcbnx9O1xuXG50eXBlIEFzeW5jU3RhdGVBY3Rpb248VD4gPVxuICB8IHt8IHR5cGU6ICdTVEFSVCcgfH1cbiAgfCB7fCB0eXBlOiAnUkVTT0xWRScsIHZhbHVlOiBUIHx9XG4gIHwge3wgdHlwZTogJ1JFSkVDVCcgfH07XG5cbmZ1bmN0aW9uIGFzeW5jU3RhdGVSZWR1Y2VyPFQ+KHN0YXRlOiBBc3luY1N0YXRlPFQ+LCBhY3Rpb246IEFzeW5jU3RhdGVBY3Rpb248VD4pOiBBc3luY1N0YXRlPFQ+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1NUQVJUJzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgaXNFcnJvcjogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlICdSRVNPTFZFJzoge1xuICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gYWN0aW9uO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgIGlzRXJyb3I6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSAnUkVKRUNUJzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgIGlzRXJyb3I6IHRydWUsXG4gICAgICB9O1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICAgIHRocm93ICd1bnJlYWNoYWJsZSc7XG4gIH1cbn1cblxuLyoqXG4gKiBJbXBsZW1lbnRzIHN0YXRlIHRoYXQgY2FuIGJlIHNldCB2aWEgYSBwcm9taXNlLlxuICogVGhpcyBob29rIG1ha2VzIHN1cmUgdGhhdCBtdWx0aXBsZSBzZXRTdGF0ZSBjYWxscyBjYW4gbm90IHJhY2UsXG4gKiBpLmUuIG9ubHkgdGhlIGxhc3QgcHJvbWlzZSB3aWxsIGdvIHRocm91Z2ggdG8gdGhlIGFjdHVhbCBzdGF0ZS5cbiAqIFdoaWxlIGEgc2V0U3RhdGUgcHJvbWlzZSBpcyBwZW5kaW5nLCB0aGUgcHJldmlvdXMgc3RhdGUgd2lsbCByZW1haW4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VBc3luY1N0YXRlPFQ+KGluaXRpYWxTdGF0ZTogVCk6IFtULCAoVCB8IFByb21pc2U8VD4pID0+IHZvaWRdIHtcbiAgY29uc3QgW3Byb21pc2UsIHNldFByb21pc2VdID0gUmVhY3QudXNlU3RhdGU8UHJvbWlzZTxUPiB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoYXN5bmNTdGF0ZVJlZHVjZXIsIHtcbiAgICB2YWx1ZTogaW5pdGlhbFN0YXRlLFxuICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgaXNFcnJvcjogZmFsc2UsXG4gIH0pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb21pc2UgPT09IG51bGwpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG5cbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdTVEFSVCcgfSk7XG4gICAgcHJvbWlzZS50aGVuKFxuICAgICAgKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnUkVTT0xWRScsIHZhbHVlIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKF9lcnJvcikgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFSkVDVCcgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgIH07XG4gIH0sIFtwcm9taXNlXSk7XG5cbiAgZnVuY3Rpb24gc2V0U3RhdGUobmV3UHJvbWlzZTogVCB8IFByb21pc2U8VD4pIHtcbiAgICBpZiAobmV3UHJvbWlzZSAmJiB0eXBlb2YgbmV3UHJvbWlzZS50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyB0ZWNobmljYWxseSB3ZSBoYXZlIG5vdCBjaGVja2VkIHRoaXMgaXMgYSBwcm9taXNlIGJ1dCBhIHRoZW5hYmxlLlxuICAgICAgLy8gSW4gcHJhY3RpY2UgdGhpcyAqc2hvdWxkKiBub3QgbWF0dGVyIGJ1dCB3aG8ga25vd3MuXG4gICAgICAvLyAkRmxvd0V4cGVjdEVycm9yXG4gICAgICBjb25zdCByZWFsUHJvbWlzZTogUHJvbWlzZTxUPiA9IG5ld1Byb21pc2U7XG4gICAgICBzZXRQcm9taXNlKHJlYWxQcm9taXNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gJEZsb3dFeHBlY3RFcnJvclxuICAgICAgY29uc3QgdmFsdWU6IFQgPSBuZXdQcm9taXNlO1xuXG4gICAgICBzZXRQcm9taXNlKG51bGwpO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnUkVTT0xWRScsIHZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIHVzZUNhbGxiYWNrOiBSZWFjdC51c2VTdGF0ZSBndWFyYW50ZWVzIHN0YWJpbGl0eSBvZiBzZXRTdGF0ZSxcbiAgLy8gbWlycm9yIHRoYXQgaGVyZVxuICByZXR1cm4gW3N0YXRlLnZhbHVlLCBSZWFjdC51c2VDYWxsYmFjayhzZXRTdGF0ZSwgW10pXTtcbn1cblxudHlwZSBTdG9yZVN0YXRlPFQ+ID0ge3wgdmFsdWU6IFQgfH07XG5cbi8qKlxuICogQWNjZXNzZXMgZGF0YSBpbiBhIHN0b3JlIGFuZCBwdXRzIGl0IGludG8gYSBzdGF0ZSB2YXJpYWJsZS5cbiAqIEEgc3RvcmUgaGVyZSBpcyBhbnl0aGluZyB0aGF0IGNhbiBiZSByZWFkL3dyaXR0ZW4gdXNpbmcgKG9wdGlvbmFsbHkgYXN5bmMpXG4gKiBsb2FkL3N0b3JlIGZ1bmN0aW9ucy5cbiAqIFdoZW5ldmVyIHRoZSBsb2FkICYgc3RvcmUgZnVuY3Rpb25zIGNoYW5nZSB0aGUgc3RvcmUgdmFsdWUgaXMgcmVsb2FkZWQsXG4gKiBhbmQgd2hlbmV2ZXIgdGhlIHZhbHVlIGlzIGNoYW5nZWQgdXNpbmcgdGhlIHJldHVybmVkIHNldHRlciwgaXQgaXMgc3RvcmVkLlxuICogVW50aWwgYSBsb2FkIGlzIGZpbmlzaGVkIChpLmUuIGluaXRpYWxseSBhbmQgYWZ0ZXIgY2hhbmdpbmcgdGhlIHN0b3JlKSxcbiAqIHRoZSBzdGF0ZSBpcyByZXNldCB0byBudWxsIGFuZCBhbnkgYXR0ZW1wdHMgdG8gc2V0IGl0IGlzIGlnbm9yZWQ6XG4gKiBvbmx5IGEgbG9hZGVkIHZhbHVlIGNhbiBiZSBvdmVyd3JpdHRlbi5cbiAqIFBvc3NpYmx5IHBlbmRpbmcgbG9hZHMgZnJvbSBhIHByZXZpb3VzIHN0b3JlIGFyZSBhbHNvIGlnbm9yZWQuXG4gKlxuICogQXMgYW55IGNoYW5nZSB0byBsb2FkL3N0b3JlIHJlc3VsdHMgaW4gYSByZWxvYWQgYW5kIHRodXMgYSByZS1yZW5kZXIsXG4gKiBpdCB3b3VsZCBub3QgYmUgcG9zc2libGUgdG8gcGFzcyBpbmxpbmUgZnVuY3Rpb25zIHRvIGB1c2VTdG9yZWAgd2l0aG91dFxuICogd3JhcHBpbmcgdGhlbSBpbiBgdXNlQ2FsbGJhY2tgLlxuICogRm9yIGNvbnZlbmllbmNlLCBhIGBkZXBzYCBhcnJheSBjYW4gYmUgcGFzc2VkIGluIHRoYXQgbXVzdCBiZSBzZXQgdG8gdGhlXG4gKiBkZXBlbmRlbmNpZXMgb2YgdGhlIHBhc3NlZCBsb2FkL3N0b3JlIGZ1bmN0aW9ucy5cbiAqIElmIG9taXR0ZWQsIHRoaXMgaG9vayB1c2VzIGxvYWQgJiBzdG9yZSB0aGVtc2VsdmVzIGFzIHRoZSBkZXBzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmU8VD4oXG4gIGxvYWQ6ICgpID0+IFQgfCBQcm9taXNlPFQ+LFxuICBzdG9yZTogKFQpID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+LFxuICBkZXBzPzogYW55W10sXG4pOiBbVCB8IG51bGwsIChUKSA9PiB2b2lkXSB7XG4gIGNvbnN0IHJlYWxEZXBzID0gZGVwcyA/PyBbbG9hZCwgc3RvcmVdO1xuXG4gIGNvbnN0IFtzdGF0ZUltcGwsIHNldFN0YXRlSW1wbF0gPSB1c2VBc3luY1N0YXRlPFN0b3JlU3RhdGU8VD4gfCBudWxsPihudWxsKTtcblxuICBjb25zdCBzdGF0ZSA9IHN0YXRlSW1wbD8udmFsdWUgPz8gbnVsbDtcblxuICAvLyByZWxvYWQgdGhlIHN0YXRlIHdoZW4gdGhlIHN0b3JlIGNoYW5nZXNcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTdGF0ZUltcGwoUHJvbWlzZS5yZXNvbHZlKGxvYWQoKSkudGhlbigodmFsdWUpID0+ICh7IHZhbHVlIH0pKSk7XG5cbiAgICAvLyBhZnRlciBjaGFuZ2luZyB0aGUgc3RvcmUsIGNsZWFyIHRoZSBzdGF0ZSB0byBwcmV2ZW50IGZ1cnRoZXIgdXNlXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHNldFN0YXRlSW1wbChudWxsKTtcbiAgICB9O1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgcmVhbERlcHMpO1xuXG4gIC8vIHNhdmUgdGhlIHN0YXRlIHdoZW4gaXQgY2hhbmdlZFxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGlmIHRoZSBzdGF0ZSB3YXMgbm90IGxvYWRlZCB5ZXQgZm9yIHdoYXRldmVyIHJlYXNvbiwgc3RvcmUgbm90aGluZ1xuICAgIGlmIChzdGF0ZUltcGwgPT09IG51bGwpIHJldHVybjtcblxuICAgIHN0b3JlKHN0YXRlSW1wbC52YWx1ZSk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbLi4ucmVhbERlcHMsIHN0YXRlSW1wbF0pO1xuXG4gIGZ1bmN0aW9uIHNldFN0YXRlKHZhbHVlOiBUKSB7XG4gICAgc2V0U3RhdGVJbXBsKHsgdmFsdWUgfSk7XG4gIH1cblxuICAvLyB1c2VDYWxsYmFjazogUmVhY3QudXNlU3RhdGUgZ3VhcmFudGVlcyBzdGFiaWxpdHkgb2Ygc2V0U3RhdGUsXG4gIC8vIG1pcnJvciB0aGF0IGhlcmVcbiAgcmV0dXJuIFtzdGF0ZSwgUmVhY3QudXNlQ2FsbGJhY2soc2V0U3RhdGUsIFtzZXRTdGF0ZUltcGxdKV07XG59XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vYXN5bmNfc3RhdGUnO1xuZXhwb3J0ICogZnJvbSAnLi9hcG9sbG8nO1xuZXhwb3J0ICogZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuXG4vKipcbiAqIEFuIGFsbW9zdC1hbGlhcyB0byBSZWFjdC51c2VSZWYgZm9yIHRoZSB0eXBpY2FsIGVsZW1lbnQgcmVmIHVzZSBjYXNlLlxuICogdXNlUmVmIGNhbiBhbHNvIGVtdWxhdGUgaW5zdGFuY2UgdmFyaWFibGVzLCB0aGlzIGNhbid0LlxuICogYHVzZUVsZW1lbnRSZWY8VD4oKWAgaXMgdGhlIHNhbWUgYXMgYHVzZVJlZjxSZWFjdC5FbGVtZW50UmVmPFQ+IHwgbnVsbD4obnVsbClgLlxuICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgYG51bGxgIGlzIGZpeGVkLlxuICogZXhhbXBsZSB1c2FnZTpcbiAqXG4gKiAgICBjb25zdCBhUmVmID0gdXNlRWxlbWVudFJlZjwnZGl2Jz4oKTtcbiAqICAgIGNvbnN0IGJSZWYgPSB1c2VFbGVtZW50UmVmPHR5cGVvZiBDb21wb25lbnQ+KCk7XG4gKlxuICogICAgcmV0dXJuIChcbiAqICAgICAgPD5cbiAqICAgICAgICA8ZGl2IHJlZj17YVJlZn0gLz5cbiAqICAgICAgICA8Q29tcG9uZW50IHJlZj17YlJlZn0gLz5cbiAqICAgICAgPC8+XG4gKiAgICApO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRWxlbWVudFJlZjxUOiBSZWFjdC5FbGVtZW50VHlwZT4oKToge3xcbiAgY3VycmVudDogUmVhY3QuRWxlbWVudFJlZjxUPiB8IG51bGwsXG58fSB7XG4gIHJldHVybiBSZWFjdC51c2VSZWY8UmVhY3QuRWxlbWVudFJlZjxUPiB8IG51bGw+KG51bGwpO1xufVxuXG4vKipcbiAqIFNpbWlsYXIgdG8gdXNlTWVtbywgYnV0IHdpdGhvdXQgZGVwZW5kZW5jaWVzLCBhbmQgZ3VhcmFudGVlcyB0aGF0IHRoZSBzYW1lXG4gKiBpbnN0YW5jZSBpcyBwcmVzZXJ2ZWQuIFRoZSBpbml0aWFsaXphdGlvbiBpcyBlYWdlciwgaS5lLiBoYXBwZW5zIG9uIHRoZVxuICogZmlyc3QgaG9vayBjYWxsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlVmFsdWU8VD4oaW5pdDogKCkgPT4gVCk6IFQge1xuICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8VCB8IG51bGw+KG51bGwpO1xuICBpZiAocmVmLmN1cnJlbnQgPT09IG51bGwpIHJlZi5jdXJyZW50ID0gaW5pdCgpO1xuICByZXR1cm4gcmVmLmN1cnJlbnQ7XG59XG5cbi8qKlxuICogTGV0cyBvbmUgc2NoZWR1bGUgYSBjYWxsYmFjayB2aWEgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHJlcGVhdGVkbHkgdW50aWxcbiAqIHRoZSBjYWxsYmFjayByZXR1cm5zIGB0cnVlYCBvciBpdCBpcyBjYW5jZWxsZWQuXG4gKlxuICogICAgLy8gdGhlIGNhbGxiYWNrIGlzIHJlcGVhdGVkIHVudGlsIHN0b3AgaXMgaW52b2tlZFxuICogICAgY29uc3QgY2IgPSAoKSA9PiBjb25zb2xlLmxvZygnZnJhbWUnKTtcbiAqICAgIGNvbnN0IFtzdGFydCwgc3RvcF0gPSB1c2VBbmltYXRpb25GcmFtZShjYik7XG4gKlxuICogICAgLy8gdGhlIGNhbGxiYWNrIGlzIGNhbGxlZCBvbmx5IG9uY2VcbiAqICAgIGNvbnN0IGNiID0gKCkgPT4geyBjb25zb2xlLmxvZygnZnJhbWUnKTsgcmV0dXJuIHRydWU7IH07XG4gKiAgICBjb25zdCBbc3RhcnRdID0gdXNlQW5pbWF0aW9uRnJhbWUoY2IpO1xuICpcbiAqIE9mIGNvdXJzZSwgYHN0b3BgIGNhbiBiZSB1c2VkIHdpdGggc2VsZi1zdG9wcGluZyBjYWxsYmFja3MgYXMgd2VsbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFuaW1hdGlvbkZyYW1lKGNiOiAoKSA9PiBib29sZWFuIHwgdm9pZCk6IFsoKSA9PiB2b2lkLCAoKSA9PiB2b2lkXSB7XG4gIGNvbnN0IGlkID0gUmVhY3QudXNlUmVmPEFuaW1hdGlvbkZyYW1lSUQgfCBudWxsPihudWxsKTtcblxuICBmdW5jdGlvbiBydW4oKSB7XG4gICAgaWQuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBjb25zdCBkb25lID0gY2IoKTtcbiAgICAgIGlmIChkb25lICE9PSB0cnVlKSBydW4oKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgaWYgKGlkLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGlkLmN1cnJlbnQpO1xuICAgICAgaWQuY3VycmVudCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgc3RvcCgpO1xuICAgIHJ1bigpO1xuICB9XG5cbiAgcmV0dXJuIFtzdGFydCwgc3RvcF07XG59XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnR5cGUgU2V0dGVyPFQ+ID0gKCgoVCkgPT4gVCkgfCBUKSA9PiB2b2lkO1xudHlwZSBMb2NhbFN0b3JhZ2VPcHRIb29rPFQ+ID0gKGtleTogc3RyaW5nIHwgbnVsbCkgPT4gW1QgfCB2b2lkLCBTZXR0ZXI8VD5dO1xudHlwZSBMb2NhbFN0b3JhZ2VIb29rPFQ+ID0gKGtleTogc3RyaW5nKSA9PiBbVCwgU2V0dGVyPFQ+XTtcblxuLy8gcHJldHRpZXItaWdub3JlXG50eXBlIExvY2FsU3RvcmFnZVZhbHVlPFQ+ID1cbiAgfCB7fCBrZXk6IG51bGwgfH1cbiAgfCB7fCBrZXk6IHN0cmluZywgdmFsdWU6IFQgfH07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhvb2sgZm9yIHVzaW5nIGEgdmFsdWUgZnJvbSBsb2NhbCBzdG9yYWdlLiBFeGFtcGxlIHVzYWdlOlxuICpcbiAqICAgIGNvbnN0IHVzZUxvY2FsU3RvcmFnZSA9IG1ha2VMb2NhbFN0b3JhZ2VPcHQoXG4gKiAgICAgIC8vIGRlc2VyaWFsaXphdGlvbiBmdW5jdGlvblxuICogICAgICBqc29uID0+ICh7IC4uLihqc29uICE9PSBudWxsID8gSlNPTi5wYXJzZShqc29uKSA6IG51bGwpIH0pLFxuICogICAgICAvLyBzZXJpYWxpemF0aW9uIGZ1bmN0aW9uXG4gKiAgICAgIHN0YXRlID0+IChzdGF0ZSAhPT0gbnVsbCA/IEpTT04uc3RyaW5naWZ5KHN0YXRlKSA6IG51bGwpLFxuICogICAgKTtcbiAqXG4gKiAgICBmdW5jdGlvbiBDb21wb25lbnQoeyBrZXkgfSkge1xuICogICAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZUxvY2FsU3RvcmFnZShrZXkpO1xuICogICAgICAvLyAuLi5cbiAqICAgIH1cbiAqXG4gKiBUaGUga2V5IG1heSBjaGFuZ2UgYXQgcnVudGltZSBhbmQgbWF5IG5vdCBiZSBrbm93biBhdCBhbGwgdGltZXM7XG4gKiBwYXJzaW5nIGFuZCBzZXJpYWxpemF0aW9uIGFyZSBmaXhlZCB0aG91Z2gsIGFuZCBhcmUgdGhlcmVmb3JlIHBhc3NlZCB0byB0aGUgZmFjdG9yeS5cbiAqIFRoZXJlIGlzIG5vIGRlZmF1bHQgc2VyaWFsaXphdGlvbi9kZXNlcmlhbGl6YXRpb24gbG9naWMsIGJlY2F1c2UgdGhhdCBsb2dpYyBpcyByZXF1aXJlZFxuICogdG8gaGFuZGxlIG5vbi1leGlzdGVudCBsb2NhbFN0b3JhZ2Uga2V5czpcbiAqXG4gKiAtIERlc2VyaWFsaXphdGlvbiB3aWxsIGJlIHBhc3NlZCBhIHN0cmluZywgb3IgbnVsbCB2YWx1ZSBpZiB0aGUga2V5IGRvZXMgbm90IGV4aXN0LlxuICogICBJdCB3aWxsIG5vdCBiZSBjYWxsZWQgYXQgYWxsIGlmIHRoZXJlIGlzIG5vIGtleS5cbiAqIC0gU2VyaWFsaXphdGlvbiByZXR1cm5zIGEgc3RyaW5nLCBvciBudWxsIHRvIGRlbGV0ZSB0aGUgaXRlbS5cbiAqICAgSXQgd2lsbCBub3QgYmUgY2FsbGVkIGF0IGFsbCBpZiB0aGVyZSBpcyBubyBrZXkuXG4gKlxuICogSWYgdGhlcmUncyBubyBrZXksIHRoZSBob29rJ3MgdmFsdWUgd2lsbCBiZSB1bmRlZmluZWQuXG4gKiBJdCB0aGUga2V5IGRvZXMgbm90IGV4aXN0IGluIGxvY2FsU3RvcmFnZSxcbiAqIHRoZSBob29rJ3MgdmFsdWUgd2lsbCBiZSAgdGhlIHJlc3VsdCBvZiBkZXNlcmlhbGl6aW5nIG51bGw7XG4gKiBpbiB0aGUgZXhhbXBsZSB0aGF0IHZhbHVlIHdvdWxkIGJlIG51bGwuXG4gKlxuICogU2V0dGluZyB0aGUgdmFsdWUgaXMgaWdub3JlZCBpZiB0aGVyZSBpcyBubyBrZXkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlTG9jYWxTdG9yYWdlT3B0PFQ+KFxuICBkZXNlcmlhbGl6ZTogKHN0cmluZyB8IG51bGwpID0+IFQsXG4gIHNlcmlhbGl6ZTogKFQpID0+IHN0cmluZyB8IG51bGwsXG4pOiBMb2NhbFN0b3JhZ2VPcHRIb29rPFQ+IHtcbiAgZnVuY3Rpb24gbG9hZChrZXk6IHN0cmluZyB8IG51bGwpOiBMb2NhbFN0b3JhZ2VWYWx1ZTxUPiB7XG4gICAgaWYgKGtleSA9PT0gbnVsbCkgcmV0dXJuIHsga2V5IH07XG5cbiAgICBjb25zdCB2YWx1ZSA9IGRlc2VyaWFsaXplKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgPz8gbnVsbCk7XG4gICAgcmV0dXJuIHsga2V5LCB2YWx1ZSB9O1xuICB9XG5cbiAgZnVuY3Rpb24gc3RvcmUoc3RvcmFnZVZhbHVlOiBMb2NhbFN0b3JhZ2VWYWx1ZTxUPikge1xuICAgIGlmIChzdG9yYWdlVmFsdWUua2V5ID09PSBudWxsKSByZXR1cm47XG5cbiAgICBjb25zdCB7IGtleSwgdmFsdWUgfSA9IHN0b3JhZ2VWYWx1ZTtcblxuICAgIGNvbnN0IHNlcmlhbGl6ZWQgPSBzZXJpYWxpemUodmFsdWUpO1xuICAgIGlmIChzZXJpYWxpemVkICE9PSBudWxsKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHNlcmlhbGl6ZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZUxvY2FsU3RvcmFnZShrZXk6IHN0cmluZyB8IG51bGwpIHtcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlSW1wbF0gPSBSZWFjdC51c2VTdGF0ZTxMb2NhbFN0b3JhZ2VWYWx1ZTxUPj4oKCkgPT4gbG9hZChrZXkpKTtcblxuICAgIC8vIHJlbG9hZCBzdGF0ZSB3aGVuIHRoZSBrZXkgY2hhbmdlc1xuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoc3RhdGUua2V5ICE9PSBrZXkpIHNldFN0YXRlSW1wbChsb2FkKGtleSkpO1xuICAgIH0sIFtrZXksIHN0YXRlLmtleV0pO1xuXG4gICAgLy8gd2UgdXNlIGEgZnVuY3Rpb25hbCB1cGRhdGUgYXMgZWFjaCB1cGRhdGUgbmVlZHMgdG8gYWNjZXNzIHRoZSBrZXksXG4gICAgLy8gd2hpY2ggaXMgcGFydCBvZiB0aGUgc3RhdGVcbiAgICBmdW5jdGlvbiBzZXRTdGF0ZSh2YWx1ZTogKChUKSA9PiBUKSB8IFQpIHtcbiAgICAgIC8vICRGbG93RXhwZWN0RXJyb3JcbiAgICAgIGNvbnN0IHNldHRlcjogKFQpID0+IFQgPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZSA6ICgpID0+IHZhbHVlO1xuXG4gICAgICBzZXRTdGF0ZUltcGwoKG9sZFZhbHVlKSA9PiB7XG4gICAgICAgIGlmIChvbGRWYWx1ZS5rZXkgPT09IG51bGwpIHJldHVybiBvbGRWYWx1ZTtcblxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHtcbiAgICAgICAgICBrZXk6IG9sZFZhbHVlLmtleSxcbiAgICAgICAgICB2YWx1ZTogc2V0dGVyKG9sZFZhbHVlLnZhbHVlKSxcbiAgICAgICAgfTtcblxuICAgICAgICBzdG9yZShuZXdWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0gc3RhdGUua2V5ICE9PSBudWxsID8gc3RhdGUudmFsdWUgOiB1bmRlZmluZWQ7XG5cbiAgICAvLyB1c2VDYWxsYmFjazogUmVhY3QudXNlU3RhdGUgZ3VhcmFudGVlcyBzdGFiaWxpdHkgb2Ygc2V0U3RhdGUsXG4gICAgLy8gbWlycm9yIHRoYXQgaGVyZSAtIGF0IGxlYXN0IHdoZW4gdGhlIGtleSBpcyBzdGFibGVcbiAgICByZXR1cm4gW3ZhbHVlLCBSZWFjdC51c2VDYWxsYmFjayhzZXRTdGF0ZSwgW3NldFN0YXRlSW1wbF0pXTtcbiAgfVxuXG4gIHJldHVybiB1c2VMb2NhbFN0b3JhZ2U7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhvb2sgZm9yIHVzaW5nIGEgdmFsdWUgZnJvbSBsb2NhbCBzdG9yYWdlLiBFeGFtcGxlIHVzYWdlOlxuICpcbiAqICAgIGNvbnN0IHVzZUxvY2FsU3RvcmFnZSA9IG1ha2VMb2NhbFN0b3JhZ2VPcHQoXG4gKiAgICAgIC8vIGRlc2VyaWFsaXphdGlvbiBmdW5jdGlvblxuICogICAgICBqc29uID0+ICh7IC4uLihqc29uICE9PSBudWxsID8gSlNPTi5wYXJzZShqc29uKSA6IG51bGwpIH0pLFxuICogICAgICAvLyBzZXJpYWxpemF0aW9uIGZ1bmN0aW9uXG4gKiAgICAgIHN0YXRlID0+IChzdGF0ZSAhPT0gbnVsbCA/IEpTT04uc3RyaW5naWZ5KHN0YXRlKSA6IG51bGwpLFxuICogICAgKTtcbiAqXG4gKiAgICBmdW5jdGlvbiBDb21wb25lbnQoeyBrZXkgfSkge1xuICogICAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZUxvY2FsU3RvcmFnZShrZXkpO1xuICogICAgICAvLyAuLi5cbiAqICAgIH1cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGVxdWl2YWxlbnQgdG8gbWFrZUxvY2FsU3RvcmFnZU9wdCBleGNlcHQgZm9yIGl0cyB0eXBlOlxuICogdGhlIGtleSBtYXkgY2hhbmdlIGF0IHJ1bnRpbWUgYnV0IG11c3QgYmUgbm9uLW51bGwgYXQgYWxsIHRpbWVzO1xuICogdGhpcyBtZWFucyB0aGUgaG9vaydzIHZhbHVlIHdpbGwgbm90IGJlIHVuZGVmaW5lZCxcbiAqIHVubGVzcyB0aGF0IGlzIGEgdmFsdWUgdGhlIGRlc2VyaWFsaXphdGlvbiBmdW5jdGlvbiBjb3VsZCByZXR1cm4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlTG9jYWxTdG9yYWdlPFQ+KFxuICBkZXNlcmlhbGl6ZTogKHN0cmluZyB8IG51bGwpID0+IFQsXG4gIHNlcmlhbGl6ZTogKFQpID0+IHN0cmluZyB8IG51bGwsXG4pOiBMb2NhbFN0b3JhZ2VIb29rPFQ+IHtcbiAgLy8gJEZsb3dFeHBlY3RFcnJvclxuICByZXR1cm4gbWFrZUxvY2FsU3RvcmFnZU9wdDxUPihkZXNlcmlhbGl6ZSwgc2VyaWFsaXplKTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuaW1wb3J0IGNvbW1vbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvY29tbW9uJztcblxuY29uc3QgaGVkZ2Vob2dHcmVlbkxpZ2h0ID0gJyMzOGI0NDknO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46IGhlZGdlaG9nR3JlZW5MaWdodCxcbiAgICAgIGNvbnRyYXN0VGV4dDogY29tbW9uLndoaXRlLFxuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5pbXBvcnQgeyBtYWtlTXV0YXRpb24gfSBmcm9tICcuLi9taXNjL2hvb2tzJztcblxuaW1wb3J0IHtcbiAgdHlwZSBMb2dpbixcbiAgdHlwZSBMb2dpblZhcmlhYmxlcyxcbiAgdHlwZSBMb2dpbl9sb2dpbiBhcyBBdXRoRGF0YSxcbn0gZnJvbSAnLi9fX2dlbmVyYXRlZF9fL0xvZ2luJztcblxuY29uc3QgdXNlTG9naW5NdXRhdGlvbiA9IG1ha2VNdXRhdGlvbjxMb2dpbiwgTG9naW5WYXJpYWJsZXM+KGdxbGBcbiAgbXV0YXRpb24gTG9naW4oJHVzZXJuYW1lOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgICBsb2dpbih1c2VybmFtZTogJHVzZXJuYW1lLCBwYXNzd29yZDogJHBhc3N3b3JkKSB7XG4gICAgICBpZFxuICAgICAgdXNlcm5hbWVcbiAgICAgIHRva2VuXG4gICAgfVxuICB9XG5gKTtcblxudHlwZSBBdXRoID0ge3xcbiAgYXV0aERhdGE6IEF1dGhEYXRhIHwgbnVsbCxcbiAgbG9naW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8QXV0aERhdGE+LFxuICBsb2dvdXQoKTogdm9pZCxcbnx9O1xuXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PEF1dGg+KHtcbiAgYXV0aERhdGE6IG51bGwsXG4gIGxvZ2luKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignbG9naW4gbm90IHNwZWNpZmllZCcpO1xuICB9LFxuICBsb2dvdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdsb2dvdXQgbm90IHNwZWNpZmllZCcpO1xuICB9LFxufSk7XG5cbnR5cGUgQXV0aFByb3ZpZGVyUHJvcFR5cGVzID0ge3xcbiAgY2hpbGRyZW46IFJlYWN0Lk5vZGUsXG58fTtcblxuLyoqXG4gKiBgQXV0aFByb3ZpZGVyYCBwcm92aWRlcyBhIGNvbnRleHQgd2l0aCB0aGUgY3VycmVudGx5IGxvZ2dlZCBpbiB1c2VyXG4gKiBhcyB3ZWxsIGFzIGxvZ2luIGFuZCBsb2dvdXQgZnVuY3Rpb25zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogQXV0aFByb3ZpZGVyUHJvcFR5cGVzKSB7XG4gIGNvbnN0IFtwZXJmb3JtTG9naW4sIF9sb2dpblJlc3BvbnNlXSA9IHVzZUxvZ2luTXV0YXRpb24oKTtcbiAgY29uc3QgW2F1dGhEYXRhLCBzZXRBdXRoRGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxBdXRoRGF0YSB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwZXJmb3JtTG9naW4oeyB2YXJpYWJsZXM6IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gfSk7XG5cbiAgICAvLyB3ZSdyZSBub3QgcGFzc2luZyBgaWdub3JlUmVzdWx0c2AsIHNvIHRoZXJlIHdpbGwgYmUgYSByZXN1bHRcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICAgIGlmICghcmVzdWx0LmRhdGEpIHRocm93ICd1bnJlYWNoYWJsZSc7XG5cbiAgICBjb25zdCBkYXRhID0gcmVzdWx0LmRhdGEubG9naW47XG4gICAgc2V0QXV0aERhdGEoZGF0YSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGgnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIHNldEF1dGhEYXRhKG51bGwpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhdXRoJyk7XG4gIH07XG5cbiAgY29uc3QgcmVjb3ZlclNlc3Npb24gPSAoKSA9PiB7XG4gICAgY29uc3QgYXV0aCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJyk7XG4gICAgc2V0QXV0aERhdGEoYXV0aCA/IEpTT04ucGFyc2UoYXV0aCkgOiBudWxsKTtcbiAgfTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gcmVjb3ZlclNlc3Npb24oKSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGF1dGhEYXRhLCBsb2dpbiwgbG9nb3V0IH19PntjaGlsZHJlbn08L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG4vKipcbiAqIFJlYWN0IGhvb2sgZm9yIGFjY2Vzc2luZyB0aGUgYXV0aCBjb250ZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQXV0aCgpOiBBdXRoIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xufVxuIiwiaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSAnYXBvbGxvLWNsaWVudCc7XG5pbXBvcnQgeyBmcm9tIH0gZnJvbSAnYXBvbGxvLWxpbmsnO1xuaW1wb3J0IHsgb25FcnJvciB9IGZyb20gJ2Fwb2xsby1saW5rLWVycm9yJztcbmltcG9ydCB7IFNjaGVtYUxpbmsgfSBmcm9tICdhcG9sbG8tbGluay1zY2hlbWEnO1xuaW1wb3J0IGNyZWF0ZUNhY2hlIGZyb20gJy4vY3JlYXRlQ2FjaGUnO1xuaW1wb3J0IGNsaWVudFNjaGVtYSBmcm9tICcuLi9ncmFwaHFsL3NjaGVtYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFwb2xsb0NsaWVudChzY2hlbWEsIGluaXRpYWxTdGF0ZSkge1xuICBjb25zdCBjYWNoZSA9IGNyZWF0ZUNhY2hlKCk7XG4gIGNhY2hlLndyaXRlRGF0YSh7IGRhdGE6IGluaXRpYWxTdGF0ZSB9KTtcblxuICBjb25zdCBlcnJvckxpbmsgPSBvbkVycm9yKCh7IGdyYXBoUUxFcnJvcnMsIG5ldHdvcmtFcnJvciB9KSA9PiB7XG4gICAgaWYgKGdyYXBoUUxFcnJvcnMpXG4gICAgICBncmFwaFFMRXJyb3JzLm1hcCgoeyBtZXNzYWdlLCBsb2NhdGlvbnMsIHBhdGggfSkgPT5cbiAgICAgICAgY29uc29sZS53YXJuKGBbR3JhcGhRTCBlcnJvcl06IE1lc3NhZ2U6ICR7bWVzc2FnZX0sIExvY2F0aW9uOiAke2xvY2F0aW9uc30sIFBhdGg6ICR7cGF0aH1gKSxcbiAgICAgICk7XG4gICAgaWYgKG5ldHdvcmtFcnJvcikgY29uc29sZS53YXJuKGBbTmV0d29yayBlcnJvcl06ICR7bmV0d29ya0Vycm9yfWApO1xuICB9KTtcblxuICBjb25zdCBzY2hlbWFMaW5rID0gbmV3IFNjaGVtYUxpbmsoeyAuLi5zY2hlbWEgfSk7XG5cbiAgY29uc3QgbGluayA9IGZyb20oW2Vycm9yTGluaywgc2NoZW1hTGlua10pO1xuXG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICBsaW5rLFxuICAgIGNhY2hlLFxuICAgIHJlc29sdmVyczogY2xpZW50U2NoZW1hLnJlc29sdmVycyxcbiAgICBxdWVyeURlZHVwbGljYXRpb246IHRydWUsXG4gICAgc3NyTW9kZTogdHJ1ZSxcbiAgfSk7XG59XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlLCBkZWZhdWx0RGF0YUlkRnJvbU9iamVjdCB9IGZyb20gJ2Fwb2xsby1jYWNoZS1pbm1lbW9yeSc7XG5cbmZ1bmN0aW9uIGRhdGFJZEZyb21PYmplY3Qob2JqKSB7XG4gIHN3aXRjaCAob2JqLl9fdHlwZW5hbWUpIHtcbiAgICBjYXNlICdOZXdzSXRlbSc6XG4gICAgICByZXR1cm4gb2JqLmxpbmsgPyBgTmV3c0l0ZW06JHtvYmoubGlua31gIDogZGVmYXVsdERhdGFJZEZyb21PYmplY3Qob2JqKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGRlZmF1bHREYXRhSWRGcm9tT2JqZWN0KG9iaik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ2FjaGUoKSB7XG4gIC8vIGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYmFzaWNzL2NhY2hpbmcuaHRtbCNjb25maWd1cmF0aW9uXG4gIHJldHVybiBuZXcgSW5NZW1vcnlDYWNoZSh7XG4gICAgZGF0YUlkRnJvbU9iamVjdCxcbiAgfSk7XG59XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgY2xpZW50U2NoZW1hIGZyb20gJy4vZ3JhcGhxbC9zY2hlbWEnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVJbml0aWFsU3RhdGUoZGF0YTogT2JqZWN0KSB7XG4gIHJldHVybiB7XG4gICAgLi4uY2xpZW50U2NoZW1hLmRlZmF1bHRzLFxuICAgIC4uLmRhdGEsXG4gIH07XG59XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgeyB0eXBlIEdyYXBocWxEZWZTaGFwZSB9IGZyb20gJy4uL2dyYXBocWxEZWYnO1xuXG5jb25zdCBkZWY6IEdyYXBocWxEZWZTaGFwZSA9IHtcbiAgc2NoZW1hOiBbXG4gICAgYFxuICAgIHR5cGUgTmV0d29ya1N0YXR1cyB7XG4gICAgICBpc0Nvbm5lY3RlZDogQm9vbGVhbiFcbiAgICB9XG4gICAgYCxcbiAgXSxcbiAgcXVlcmllczogW1xuICAgIGBcbiAgICBuZXR3b3JrU3RhdHVzOiBOZXR3b3JrU3RhdHVzIVxuICAgIGAsXG4gIF0sXG4gIG11dGF0aW9uczogW1xuICAgIGBcbiAgICB1cGRhdGVOZXR3b3JrU3RhdHVzKGlzQ29ubmVjdGVkOiBCb29sZWFuKTogTmV0d29ya1N0YXR1cyFcbiAgICBgLFxuICBdLFxuICByZXNvbHZlcnM6ICgpID0+ICh7XG4gICAgTXV0YXRpb246IHtcbiAgICAgIHVwZGF0ZU5ldHdvcmtTdGF0dXM6IChfLCB7IGlzQ29ubmVjdGVkIH0sIGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICBuZXR3b3JrU3RhdHVzOiB7XG4gICAgICAgICAgICBfX3R5cGVuYW1lOiAnTmV0d29ya1N0YXR1cycsXG4gICAgICAgICAgICBpc0Nvbm5lY3RlZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBjb250ZXh0LmNhY2hlLndyaXRlRGF0YSh7IGRhdGEgfSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgZGVmYXVsdHM6IHtcbiAgICBuZXR3b3JrU3RhdHVzOiB7XG4gICAgICBfX3R5cGVuYW1lOiAnTmV0d29ya1N0YXR1cycsXG4gICAgICBpc0Nvbm5lY3RlZDogdHJ1ZSxcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmO1xuIiwiLy8gQGZsb3dcblxuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICcuLi9ncmFwaHFsRGVmJztcblxuaW1wb3J0IG5ldHdvcmtTdGF0dXMgZnJvbSAnLi9uZXR3b3JrU3RhdHVzJztcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2UobmV0d29ya1N0YXR1cyk7XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgbG9kYXNoTWVyZ2UgZnJvbSAnbG9kYXNoLm1lcmdlJztcbmltcG9ydCB7IFB1YlN1YiB9IGZyb20gJ2dyYXBocWwtc3Vic2NyaXB0aW9ucyc7XG5cbmV4cG9ydCB0eXBlIEdyYXBocWxEZWYgPSB7fFxuICBzY2hlbWE6IHN0cmluZ1tdLFxuICBxdWVyaWVzOiBzdHJpbmdbXSxcbiAgbXV0YXRpb25zOiBzdHJpbmdbXSxcbiAgc3Vic2NyaXB0aW9uczogc3RyaW5nW10sXG4gIHJlc29sdmVyczogKHB1YnN1YjogUHViU3ViKSA9PiBPYmplY3QsXG4gIGRlZmF1bHRzOiBPYmplY3QsXG58fTtcblxuZXhwb3J0IHR5cGUgR3JhcGhxbERlZlNoYXBlID0ge3xcbiAgK3NjaGVtYT86IHN0cmluZ1tdLFxuICArcXVlcmllcz86IHN0cmluZ1tdLFxuICArbXV0YXRpb25zPzogc3RyaW5nW10sXG4gICtzdWJzY3JpcHRpb25zPzogc3RyaW5nW10sXG4gICtyZXNvbHZlcnM/OiAocHVic3ViOiBQdWJTdWIpID0+IE9iamVjdCxcbiAgK2RlZmF1bHRzPzogT2JqZWN0LFxufH07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuY29uc3QgZHVtbXlSZXNvbHZlciA9IChwdWJzdWI6IFB1YlN1YikgPT4gKHt9KTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZSguLi5kZWZzOiBHcmFwaHFsRGVmU2hhcGVbXSk6IEdyYXBocWxEZWYge1xuICByZXR1cm4ge1xuICAgIHNjaGVtYTogW10uY29uY2F0KC4uLmRlZnMubWFwKChkZWYpID0+IGRlZi5zY2hlbWEgPz8gW10pKSxcbiAgICBxdWVyaWVzOiBbXS5jb25jYXQoLi4uZGVmcy5tYXAoKGRlZikgPT4gZGVmLnF1ZXJpZXMgPz8gW10pKSxcbiAgICBtdXRhdGlvbnM6IFtdLmNvbmNhdCguLi5kZWZzLm1hcCgoZGVmKSA9PiBkZWYubXV0YXRpb25zID8/IFtdKSksXG4gICAgc3Vic2NyaXB0aW9uczogW10uY29uY2F0KC4uLmRlZnMubWFwKChkZWYpID0+IGRlZi5zdWJzY3JpcHRpb25zID8/IFtdKSksXG4gICAgcmVzb2x2ZXJzOiAocHVic3ViOiBQdWJTdWIpID0+XG4gICAgICBsb2Rhc2hNZXJnZSh7fSwgLi4uZGVmcy5tYXAoKGRlZikgPT4gKGRlZi5yZXNvbHZlcnMgPz8gZHVtbXlSZXNvbHZlcikocHVic3ViKSkpLFxuICAgIGRlZmF1bHRzOiBsb2Rhc2hNZXJnZSguLi5kZWZzLm1hcCgoZGVmKSA9PiBkZWYuZGVmYXVsdHMgPz8ge30pKSxcbiAgfTtcbn1cbiIsIi8vIEBmbG93XG5cbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnLi9ncmFwaHFsRGVmJztcblxuaW1wb3J0IE9uTWVtb3J5U3RhdGUgZnJvbSAnLi9Pbk1lbW9yeVN0YXRlL3NjaGVtYSc7XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlKE9uTWVtb3J5U3RhdGUpO1xuIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgVW5pdmVyc2FsUm91dGVyIGZyb20gJ3VuaXZlcnNhbC1yb3V0ZXInO1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuLi9yb3V0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgVW5pdmVyc2FsUm91dGVyKHJvdXRlcywge1xuICByZXNvbHZlUm91dGUoY29udGV4dCwgcGFyYW1zKSB7XG4gICAgaWYgKHR5cGVvZiBjb250ZXh0LnJvdXRlLmxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBjb250ZXh0LnJvdXRlLmxvYWQoKS50aGVuKChhY3Rpb24pID0+IGFjdGlvbi5kZWZhdWx0KGNvbnRleHQsIHBhcmFtcykpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNvbnRleHQucm91dGUuYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY29udGV4dC5yb3V0ZS5hY3Rpb24oY29udGV4dCwgcGFyYW1zKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSxcbn0pO1xuIiwiXG4gICAgdmFyIHJlZnMgPSAwO1xuICAgIHZhciBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTMhLi9FcnJvclBhZ2UuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9pbnNlcnRDc3MuanNcIik7XG4gICAgdmFyIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG5cbiAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjc3MubG9jYWxzIHx8IHt9O1xuICAgIGV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiAnJyArIGNzczsgfTtcbiAgICBleHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcblxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy1ydWxlcy0zIS4vRXJyb3JQYWdlLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy1ydWxlcy0zIS4vRXJyb3JQYWdlLmNzc1wiKTtcbiAgICAgICAgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL0Vycm9yUGFnZS5jc3MnO1xuXG50eXBlIFByb3BUeXBlcyA9IHt8XG4gIGVycm9yOiB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICBzdGFjazogc3RyaW5nLFxuICB9LFxufH07XG5cbmNsYXNzIEVycm9yUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wVHlwZXM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBlcnJvcjogbnVsbCxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgaWYgKF9fREVWX18gJiYgdGhpcy5wcm9wcy5lcnJvcikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+e3RoaXMucHJvcHMuZXJyb3IubmFtZX08L2gxPlxuICAgICAgICAgIDxwcmU+e3RoaXMucHJvcHMuZXJyb3Iuc3RhY2t9PC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkVycm9yPC9oMT5cbiAgICAgICAgPHA+U29ycnksIGEgY3JpdGljYWwgZXJyb3Igb2NjdXJyZWQgb24gdGhpcyBwYWdlLjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IHsgRXJyb3JQYWdlIGFzIEVycm9yUGFnZVdpdGhvdXRTdHlsZSB9O1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShFcnJvclBhZ2UpO1xuIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBFcnJvclBhZ2UgZnJvbSAnLi9FcnJvclBhZ2UnO1xuXG5mdW5jdGlvbiBhY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdEZW1vIEVycm9yJyxcbiAgICBjb21wb25lbnQ6IDxFcnJvclBhZ2UgLz4sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvbjtcbiIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgZ2xvYmFsLXJlcXVpcmUgKi9cblxuLy8gVGhlIHRvcC1sZXZlbCAocGFyZW50KSByb3V0ZVxuY29uc3Qgcm91dGVzID0ge1xuICBwYXRoOiAnJyxcblxuICAvLyBLZWVwIGluIG1pbmQsIHJvdXRlcyBhcmUgZXZhbHVhdGVkIGluIG9yZGVyXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgcGF0aDogJycsXG4gICAgICBsb2FkOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ2lkZScgKi8gJy4vcHJvamVjdHMnKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvcHJvamVjdHMvOmlkJyxcbiAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnaWRlJyAqLyAnLi9pZGUnKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvY29udGFjdCcsXG4gICAgICBsb2FkOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ2NvbnRhY3QnICovICcuL2NvbnRhY3QnKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvbG9naW4nLFxuICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdsb2dpbicgKi8gJy4vbG9naW4nKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvcmVnaXN0ZXInLFxuICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdyZWdpc3RlcicgKi8gJy4vcmVnaXN0ZXInKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvaGVscCcsXG4gICAgICBsb2FkOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ2hlbHAnICovICcuL2hlbHAnKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvY29udGVzdCcsXG4gICAgICBsb2FkOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ2NvbnRlc3QnICovICcuL2NvbnRlc3QnKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvYWJvdXQnLFxuICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdhYm91dCcgKi8gJy4vYWJvdXQnKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvcHJpdmFjeScsXG4gICAgICBsb2FkOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ3ByaXZhY3knICovICcuL3ByaXZhY3knKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvYWRtaW4nLFxuICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdhZG1pbicgKi8gJy4vYWRtaW4nKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvaW5kZXhlZERCJyxcbiAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnaW5kZXhlZERCJyAqLyAnLi9pbmRleGVkREInKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvd2VicnRjJyxcbiAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnd2VicnRjJyAqLyAnLi93ZWJydGMnKSxcbiAgICB9LFxuXG4gICAgLy8gV2lsZGNhcmQgcm91dGVzLCBlLmcuIHsgcGF0aDogJyguKiknLCAuLi4gfSAobXVzdCBnbyBsYXN0KVxuICAgIHtcbiAgICAgIHBhdGg6ICcoLiopJyxcbiAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnbm90LWZvdW5kJyAqLyAnLi9ub3QtZm91bmQnKSxcbiAgICB9LFxuICBdLFxuXG4gIGFzeW5jIGFjdGlvbih7IG5leHQgfSkge1xuICAgIC8vIEV4ZWN1dGUgZWFjaCBjaGlsZCByb3V0ZSB1bnRpbCBvbmUgb2YgdGhlbSByZXR1cm4gdGhlIHJlc3VsdFxuICAgIGNvbnN0IHJvdXRlID0gYXdhaXQgbmV4dCgpO1xuXG4gICAgLy8gUHJvdmlkZSBkZWZhdWx0IHZhbHVlcyBmb3IgdGl0bGUsIGRlc2NyaXB0aW9uIGV0Yy5cbiAgICByb3V0ZS50aXRsZSA9IGAke3JvdXRlLnRpdGxlID8/ICdVbnRpdGxlZCBQYWdlJ30gLSBIZWRnZWhvZyBJREVgO1xuICAgIHJvdXRlLmRlc2NyaXB0aW9uID0gcm91dGUuZGVzY3JpcHRpb24gPz8gJyc7XG5cbiAgICByZXR1cm4gcm91dGU7XG4gIH0sXG59O1xuXG4vLyBUaGUgZXJyb3IgcGFnZSBpcyBhdmFpbGFibGUgYnkgcGVybWFuZW50IHVybCBmb3IgZGV2ZWxvcG1lbnQgbW9kZVxuaWYgKF9fREVWX18pIHtcbiAgcm91dGVzLmNoaWxkcmVuLnVuc2hpZnQoe1xuICAgIHBhdGg6ICcvZXJyb3InLFxuICAgIGFjdGlvbjogcmVxdWlyZSgnLi9lcnJvcicpLmRlZmF1bHQsXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHNlcmlhbGl6ZSBmcm9tICdzZXJpYWxpemUtamF2YXNjcmlwdCc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcblxuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tZGFuZ2VyICovXG5cbnR5cGUgUHJvcFR5cGVzID0ge3xcbiAgdGl0bGU6IHN0cmluZyxcbiAgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgc3R5bGVzOiBBcnJheTx7XG4gICAgaWQ6IHN0cmluZyxcbiAgICBjc3NUZXh0OiBzdHJpbmcsXG4gIH0+LFxuICBzY3JpcHRzOiBzdHJpbmdbXSxcbiAgYXBwOiBPYmplY3QsXG4gIGNoaWxkcmVuOiBzdHJpbmcsXG58fTtcblxuY2xhc3MgSHRtbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wVHlwZXM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzdHlsZXM6IFtdLFxuICAgIHNjcmlwdHM6IFtdLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgc3R5bGVzLCBzY3JpcHRzLCBhcHAsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8aHRtbCBjbGFzc05hbWU9XCJuby1qc1wiIGxhbmc9XCJlblwiPlxuICAgICAgICA8aGVhZD5cbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIngtdWEtY29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJpZT1lZGdlXCIgLz5cbiAgICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgICB7c2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gKFxuICAgICAgICAgICAgPGxpbmsga2V5PXtzY3JpcHR9IHJlbD1cInByZWxvYWRcIiBocmVmPXtzY3JpcHR9IGFzPVwic2NyaXB0XCIgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgaHJlZj1cIi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj1cIi9mYXZpY29uLTMyeDMyLnBuZ1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjE5NHgxOTRcIiBocmVmPVwiL2Zhdmljb24tMTk0eDE5NC5wbmdcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxOTJ4MTkyXCIgaHJlZj1cIi9hbmRyb2lkLWNocm9tZS0xOTJ4MTkyLnBuZ1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjE2eDE2XCIgaHJlZj1cIi9mYXZpY29uLTE2eDE2LnBuZ1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL3NpdGUud2VibWFuaWZlc3RcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cIm1hc2staWNvblwiIGhyZWY9XCIvc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCIgY29sb3I9XCIjN2NkMDAxXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlXCIgY29udGVudD1cIkhlZGdlaG9nXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGljYXRpb24tbmFtZVwiIGNvbnRlbnQ9XCJIZWRnZWhvZ1wiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiM3Y2QwMDFcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVJbWFnZVwiIGNvbnRlbnQ9XCIvbXN0aWxlLTE0NHgxNDQucG5nXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1jb25maWdcIiBjb250ZW50PVwiL2Jyb3dzZXJjb25maWcueG1sXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiI2ZmZmZmZlwiIC8+XG4gICAgICAgICAge3N0eWxlcy5tYXAoKHN0eWxlKSA9PiAoXG4gICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAga2V5PXtzdHlsZS5pZH1cbiAgICAgICAgICAgICAgaWQ9e3N0eWxlLmlkfVxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0eWxlLmNzc1RleHQgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvaGVhZD5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPGRpdiBpZD1cImFwcFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY2hpbGRyZW4gfX0gLz5cbiAgICAgICAgICA8c2NyaXB0IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYHdpbmRvdy5BcHA9JHtzZXJpYWxpemUoYXBwKX1gIH19IC8+XG4gICAgICAgICAge3NjcmlwdHMubWFwKChzY3JpcHQpID0+IChcbiAgICAgICAgICAgIDxzY3JpcHQga2V5PXtzY3JpcHR9IHNyYz17c2NyaXB0fSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIHtjb25maWcuYW5hbHl0aWNzLmdvb2dsZVRyYWNraW5nSWQgJiYgKFxuICAgICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDpcbiAgICAgICAgICAgICAgICAgICd3aW5kb3cuZ2E9ZnVuY3Rpb24oKXtnYS5xLnB1c2goYXJndW1lbnRzKX07Z2EucT1bXTtnYS5sPStuZXcgRGF0ZTsnICtcbiAgICAgICAgICAgICAgICAgIGBnYSgnY3JlYXRlJywnJHtjb25maWcuYW5hbHl0aWNzLmdvb2dsZVRyYWNraW5nSWR9JywnYXV0bycpO2dhKCdzZW5kJywncGFnZXZpZXcnKWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2NvbmZpZy5hbmFseXRpY3MuZ29vZ2xlVHJhY2tpbmdJZCAmJiAoXG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS1hbmFseXRpY3MuY29tL2FuYWx5dGljcy5qc1wiIGFzeW5jIGRlZmVyIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9odG1sPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSHRtbDtcbiIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdEbyBub3QgaW1wb3J0IGBjb25maWcuanNgIGZyb20gaW5zaWRlIHRoZSBjbGllbnQtc2lkZSBjb2RlLicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gTm9kZS5qcyBhcHBcbiAgcG9ydDogcHJvY2Vzcy5lbnYuUE9SVCA/PyAzMDAwLFxuICBzZWN1cmVQb3J0OiBwcm9jZXNzLmVudi5TRUNVUkVfUE9SVCA/PyAzMDAxLFxuICBjZXJ0RmlsZTogcHJvY2Vzcy5lbnYuQ0VSVF9GSUxFID8/IG51bGwsXG4gIGtleUZpbGU6IHByb2Nlc3MuZW52LktFWV9GSUxFID8/IG51bGwsXG5cbiAgLy8gaHR0cHM6Ly9leHByZXNzanMuY29tL2VuL2d1aWRlL2JlaGluZC1wcm94aWVzLmh0bWxcbiAgdHJ1c3RQcm94eTogcHJvY2Vzcy5lbnYuVFJVU1RfUFJPWFkgPz8gJ2xvb3BiYWNrJyxcblxuICAvLyBBUEkgR2F0ZXdheVxuICBhcGk6IHtcbiAgICAvLyBBUEkgVVJMIHRvIGJlIHVzZWQgaW4gdGhlIGNsaWVudC1zaWRlIGNvZGVcbiAgICBjbGllbnRVcmw6IHByb2Nlc3MuZW52LkFQSV9DTElFTlRfVVJMID8/ICcnLFxuICAgIC8vIEFQSSBVUkwgdG8gYmUgdXNlZCBpbiB0aGUgc2VydmVyLXNpZGUgY29kZVxuICAgIHNlcnZlclVybDogcHJvY2Vzcy5lbnYuQVBJX1NFUlZFUl9VUkwgPz8gYGh0dHA6Ly9sb2NhbGhvc3Q6JHtwcm9jZXNzLmVudi5QT1JUID8/IDMwMDB9YCxcbiAgfSxcblxuICAvLyBzY2hlbWFcbiAgZGF0YWJhc2VVcmw6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCA/PyAnc3FsaXRlOmRhdGFiYXNlLnNxbGl0ZScsXG4gIG1vbmdvZGJVcmw6IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMID8/ICdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2hlZGdlaG9nSWRlJyxcblxuICAvLyBXZWIgYW5hbHl0aWNzXG4gIGFuYWx5dGljczoge1xuICAgIC8vIGh0dHBzOi8vYW5hbHl0aWNzLmdvb2dsZS5jb20vXG4gICAgZ29vZ2xlVHJhY2tpbmdJZDogcHJvY2Vzcy5lbnYuR09PR0xFX1RSQUNLSU5HX0lELCAvLyBVQS1YWFhYWC1YXG4gIH0sXG5cbiAgLy8gQXV0aGVudGljYXRpb25cbiAgYXV0aDoge1xuICAgIHRva2VuRXhwaXJlc0luOiBwcm9jZXNzLmVudi5UT0tFTl9FWFBJUkVTX0lOID8/ICc3ZCcsIC8vIERlZmF1bHQgc2Vzc2lvbiBkdXJhdGlvbjogNyBkYXlzXG4gICAgand0OiB7IHNlY3JldDogcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCA/PyAnUmVhY3QgU3RhcnRlciBLaXQnIH0sXG5cbiAgICAvLyBodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL1xuICAgIGZhY2Vib29rOiB7XG4gICAgICBpZDogcHJvY2Vzcy5lbnYuRkFDRUJPT0tfQVBQX0lEID8/ICcxODYyNDQ1NTE3NDU2MzEnLFxuICAgICAgc2VjcmV0OiBwcm9jZXNzLmVudi5GQUNFQk9PS19BUFBfU0VDUkVUID8/ICdhOTcwYWUzMjQwYWI0YjliOGFhZTBmOWYwNjYxYzZmYycsXG4gICAgfSxcblxuICAgIC8vIGh0dHBzOi8vY2xvdWQuZ29vZ2xlLmNvbS9jb25zb2xlL3Byb2plY3RcbiAgICBnb29nbGU6IHtcbiAgICAgIGlkOlxuICAgICAgICBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEID8/XG4gICAgICAgICcyNTE0MTA3MzA1NTAtYWhjZzBvdTVtZ2ZobDhobHVpMXVycnU3am41czEya20uYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nLFxuICAgICAgc2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCA/PyAnWTh5Ujl5WkFobTlqUThGS0FMOFFJRWNkJyxcbiAgICB9LFxuXG4gICAgLy8gaHR0cHM6Ly9hcHBzLnR3aXR0ZXIuY29tL1xuICAgIHR3aXR0ZXI6IHtcbiAgICAgIGtleTogcHJvY2Vzcy5lbnYuVFdJVFRFUl9DT05TVU1FUl9LRVkgPz8gJ0llMjBBWnZMSkkybFFENURzZ3hnamF1bnMnLFxuICAgICAgc2VjcmV0OlxuICAgICAgICBwcm9jZXNzLmVudi5UV0lUVEVSX0NPTlNVTUVSX1NFQ1JFVCA/PyAnS1RaNmN4b0tuRWFrUUNlU3BabGFVQ0pXR0FsVEVCSmoweTJFTWtVQnVqQTd6V1N2YVEnLFxuICAgIH0sXG4gIH0sXG59O1xuIiwiLy8gQGZsb3dcblxuaW1wb3J0IHsgU2NoZW1hRGlyZWN0aXZlVmlzaXRvciB9IGZyb20gJ2dyYXBocWwtdG9vbHMnO1xuaW1wb3J0IHsgZGVmYXVsdEZpZWxkUmVzb2x2ZXIsIEdyYXBoUUxGaWVsZCB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25FcnJvciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXInO1xuXG4vLyBGcm9tOiBodHRwczovL2dpdGh1Yi5jb20vandoZW5zaGF3L2dyYXBocWwtZGlyZWN0aXZlcy1hdXRoL2Jsb2IvbWFzdGVyL0ZpZWxkQXV0aERpcmVjdGl2ZS5qc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aERpcmVjdGl2ZSBleHRlbmRzIFNjaGVtYURpcmVjdGl2ZVZpc2l0b3Ige1xuICB2aXNpdEZpZWxkRGVmaW5pdGlvbihmaWVsZDogR3JhcGhRTEZpZWxkLCBfZGV0YWlsczogYW55KSB7XG4gICAgdGhpcy5lbnN1cmVGaWVsZFdyYXBwZWQoZmllbGQpO1xuICB9XG5cbiAgZW5zdXJlRmllbGRXcmFwcGVkKGZpZWxkOiBHcmFwaFFMRmllbGQpIHtcbiAgICBjb25zdCB7IHJlc29sdmU6IG9yaWdpbmFsUmVzb2x2ZSA9IGRlZmF1bHRGaWVsZFJlc29sdmVyIH0gPSBmaWVsZDtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIHJlc29sdmUoLi4uYXJncykge1xuICAgICAgY29uc3QgY29udGV4dCA9IGFyZ3NbMl07XG4gICAgICBpZiAoIWNvbnRleHQudXNlcj8udXNlcklkKSB7XG4gICAgICAgIHRocm93IG5ldyBBdXRoZW50aWNhdGlvbkVycm9yKCdub3QgYXV0aG9yaXplZCcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb3JpZ2luYWxSZXNvbHZlLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cblxuICAgIGZpZWxkLnJlc29sdmUgPSByZXNvbHZlLmJpbmQodGhpcyk7XG4gIH1cbn1cbiIsIi8vIEBmbG93XG5cbmltcG9ydCB7IFB1YlN1YiB9IGZyb20gJ2dyYXBocWwtc3Vic2NyaXB0aW9ucyc7XG5cbmltcG9ydCB7IHR5cGUgR3JhcGhxbERlZiwgbWVyZ2UgfSBmcm9tICcuLi8uLi9jb3JlL2dyYXBocWwvZ3JhcGhxbERlZic7XG5cbmltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEvaW5kZXgnO1xuaW1wb3J0IENvcmUgZnJvbSAnLi4vLi4vY29yZS9ncmFwaHFsL3NjaGVtYSc7XG5pbXBvcnQgQXV0aERpcmVjdGl2ZSBmcm9tICcuL0F1dGhEaXJlY3RpdmUnO1xuXG5jb25zdCBkZWY6IEdyYXBocWxEZWYgPSBtZXJnZShTY2hlbWEsIENvcmUpO1xuXG5jb25zdCBSb290UXVlcnkgPSBbXG4gIGBcbiAgIyAjIFJlYWN0LVN0YXJ0ZXItS2l0IFF1ZXJ5aW5nIEFQSVxuICAjICMjIyBUaGlzIEdyYXBoUUwgc2NoZW1hIHdhcyBidWlsdCB3aXRoIFtBcG9sbG8gR3JhcGhRTC1Ub29sc10oaHR0cHM6Ly9naXRodWIuY29tL2Fwb2xsb2dyYXBocWwvZ3JhcGhxbC10b29scylcbiAgIyBfQnVpbGQsIG1vY2ssIGFuZCBzdGl0Y2ggYSBHcmFwaFFMIHNjaGVtYSB1c2luZyB0aGUgc2NoZW1hIGxhbmd1YWdlX1xuICAjXG4gICMgKipbU2NoZW1hIExhbmd1YWdlIENoZWV0IFNoZWV0XShodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc29na28vZ3JhcGhxbC1zaG9ydGhhbmQtbm90YXRpb24tY2hlYXQtc2hlZXQvbWFzdGVyL2dyYXBocWwtc2hvcnRoYW5kLW5vdGF0aW9uLWNoZWF0LXNoZWV0LnBuZykqKlxuICAjXG4gICMgMS4gVXNlIHRoZSBHcmFwaFFMIHNjaGVtYSBsYW5ndWFnZSB0byBbZ2VuZXJhdGUgYSBzY2hlbWFdKGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvZ3JhcGhxbC10b29scy9nZW5lcmF0ZS1zY2hlbWEuaHRtbCkgd2l0aCBmdWxsIHN1cHBvcnQgZm9yIHJlc29sdmVycywgaW50ZXJmYWNlcywgdW5pb25zLCBhbmQgY3VzdG9tIHNjYWxhcnMuIFRoZSBzY2hlbWEgcHJvZHVjZWQgaXMgY29tcGxldGVseSBjb21wYXRpYmxlIHdpdGggW0dyYXBoUUwuanNdKGh0dHBzOi8vZ2l0aHViLmNvbS9ncmFwaHFsL2dyYXBocWwtanMpLlxuICAjIDIuIFtNb2NrIHlvdXIgR3JhcGhRTCBBUEldKGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvZ3JhcGhxbC10b29scy9tb2NraW5nLmh0bWwpIHdpdGggZmluZS1ncmFpbmVkIHBlci10eXBlIG1vY2tpbmdcbiAgIyAzLiBBdXRvbWF0aWNhbGx5IFtzdGl0Y2ggbXVsdGlwbGUgc2NoZW1hcyB0b2dldGhlcl0oaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9ncmFwaHFsLXRvb2xzL3NjaGVtYS1zdGl0Y2hpbmcuaHRtbCkgaW50byBvbmUgbGFyZ2VyIEFQSVxuICB0eXBlIFJvb3RRdWVyeSB7XG4gICAgJHtkZWYucXVlcmllcy50b1N0cmluZygpfVxuICB9XG4gIGAsXG5dO1xuXG5jb25zdCBNdXRhdGlvbiA9IFtcbiAgYFxuICAjICMgUmVhY3QtU3RhcnRlci1LaXQgTXV0YXRpbmcgQVBJXG4gICMgIyMjIFRoaXMgR3JhcGhRTCBzY2hlbWEgd2FzIGJ1aWx0IHdpdGggW0Fwb2xsbyBHcmFwaFFMLVRvb2xzXShodHRwczovL2dpdGh1Yi5jb20vYXBvbGxvZ3JhcGhxbC9ncmFwaHFsLXRvb2xzKVxuICAjIF9CdWlsZCwgbW9jaywgYW5kIHN0aXRjaCBhIEdyYXBoUUwgc2NoZW1hIHVzaW5nIHRoZSBzY2hlbWEgbGFuZ3VhZ2VfXG4gICNcbiAgIyAqKltTY2hlbWEgTGFuZ3VhZ2UgQ2hlZXQgU2hlZXRdKGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zb2drby9ncmFwaHFsLXNob3J0aGFuZC1ub3RhdGlvbi1jaGVhdC1zaGVldC9tYXN0ZXIvZ3JhcGhxbC1zaG9ydGhhbmQtbm90YXRpb24tY2hlYXQtc2hlZXQucG5nKSoqXG4gICNcbiAgIyAxLiBVc2UgdGhlIEdyYXBoUUwgc2NoZW1hIGxhbmd1YWdlIHRvIFtnZW5lcmF0ZSBhIHNjaGVtYV0oaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9ncmFwaHFsLXRvb2xzL2dlbmVyYXRlLXNjaGVtYS5odG1sKSB3aXRoIGZ1bGwgc3VwcG9ydCBmb3IgcmVzb2x2ZXJzLCBpbnRlcmZhY2VzLCB1bmlvbnMsIGFuZCBjdXN0b20gc2NhbGFycy4gVGhlIHNjaGVtYSBwcm9kdWNlZCBpcyBjb21wbGV0ZWx5IGNvbXBhdGlibGUgd2l0aCBbR3JhcGhRTC5qc10oaHR0cHM6Ly9naXRodWIuY29tL2dyYXBocWwvZ3JhcGhxbC1qcykuXG4gICMgMi4gW01vY2sgeW91ciBHcmFwaFFMIEFQSV0oaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9ncmFwaHFsLXRvb2xzL21vY2tpbmcuaHRtbCkgd2l0aCBmaW5lLWdyYWluZWQgcGVyLXR5cGUgbW9ja2luZ1xuICAjIDMuIEF1dG9tYXRpY2FsbHkgW3N0aXRjaCBtdWx0aXBsZSBzY2hlbWFzIHRvZ2V0aGVyXShodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL2dyYXBocWwtdG9vbHMvc2NoZW1hLXN0aXRjaGluZy5odG1sKSBpbnRvIG9uZSBsYXJnZXIgQVBJXG4gIHR5cGUgTXV0YXRpb24ge1xuICAgICR7ZGVmLm11dGF0aW9ucy50b1N0cmluZygpfVxuICB9XG4gIGAsXG5dO1xuXG4vLyBUaGlzIGFkZHMgYSBkdW1teSBzdWJzY3JpcHRpb24gaW4gY2FzZSBubyBzdWJzY3JpcHRpb24gaXMgZGVmaW5lZC5cbi8vIEFzIHRoZSBzZXJ2ZXIgY2Fubm90IHN0YXJ0IHdpdGhvdXQgdGhlIFN1YnNjcmlwdGlvbiB0eXBlIGRlZmluZWQgYW5kXG4vLyBlbXB0eSB0eXBlcyBhcmUgYXBwYXJlbnRseSBub3QgYWxsb3dlZCAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmFwaHFsL2dyYXBocWwtanMvaXNzdWVzLzkzNykuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IFN1YnNjcmlwdGlvbiA9IGRlZi5zdWJzY3JpcHRpb25zLmxlbmd0aCA+IDAgPyBbXG4gIGBcbiAgdHlwZSBTdWJzY3JpcHRpb24ge1xuICAgICR7ZGVmLnN1YnNjcmlwdGlvbnMudG9TdHJpbmcoKX1cbiAgfVxuICBgLFxuXSA6IFtcbiAgYFxuICB0eXBlIFN1YnNjcmlwdGlvbiB7XG4gICAgXyA6IEJvb2xlYW5cbiAgfVxuICBgLFxuXTtcblxuY29uc3QgU2NoZW1hRGVmaW5pdGlvbiA9IFtcbiAgYFxuICBzY2hlbWEge1xuICAgIHF1ZXJ5OiBSb290UXVlcnlcbiAgICBtdXRhdGlvbjogTXV0YXRpb25cbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICB9XG4gIGAsXG5dO1xuXG5jb25zdCBzY2hlbWEgPSBbXG4gIGBcbiAgZGlyZWN0aXZlIEBhdXRoIG9uIEZJRUxEX0RFRklOSVRJT05cbiAgYCxcbiAgLi4uU2NoZW1hRGVmaW5pdGlvbixcbiAgLi4uUm9vdFF1ZXJ5LFxuICAuLi5NdXRhdGlvbixcbiAgLi4uU3Vic2NyaXB0aW9uLFxuXG4gIC4uLmRlZi5zY2hlbWEsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHR5cGVEZWZzOiBzY2hlbWEsXG4gIHJlc29sdmVyczogZGVmLnJlc29sdmVycyhuZXcgUHViU3ViKCkpLFxuICBzY2hlbWFEaXJlY3RpdmVzOiB7XG4gICAgYXV0aDogQXV0aERpcmVjdGl2ZSxcbiAgfSxcbiAgLi4uKF9fREVWX18gPyB7IGxvZzogKGU6IEVycm9yKSA9PiBjb25zb2xlLmVycm9yKGUuc3RhY2spIH0gOiB7fSksXG59O1xuIiwiLy8gQGZsb3dcblxuaW1wb3J0IGJhc2U2NCBmcm9tICdiYXNlNjQtanMnO1xuXG5pbXBvcnQgeyBBcG9sbG9FcnJvciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXInO1xuaW1wb3J0IHR5cGUgeyBHcmFwaHFsRGVmU2hhcGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2dyYXBocWwvZ3JhcGhxbERlZic7XG5cbmltcG9ydCBkYiwgeyBGaWxlLCBGaWxlVHJlZSwgUHJvamVjdCB9IGZyb20gJy4uLy4uL21vbmdvZGInO1xuXG5jb25zdCBkZWY6IEdyYXBocWxEZWZTaGFwZSA9IHtcbiAgc2NoZW1hOiBbXG4gICAgYFxuICAgIHR5cGUgUHJvamVjdCB7XG4gICAgICBpZDogSUQhXG4gICAgICBuYW1lOiBTdHJpbmchXG4gICAgICBpc1B1YmxpYzogQm9vbGVhbiFcbiAgICAgIGZpbGVUcmVlUm9vdElkOiBJRCFcbiAgICAgIGZpbGVUcmVlczogW0ZpbGVUcmVlIV0hXG4gICAgICBmaWxlczogW0ZpbGUhXSFcbiAgICB9XG5cbiAgICB0eXBlIEZpbGVUcmVlIHtcbiAgICAgIGlkOiBJRCFcbiAgICAgIGNvbnRlbnRzOiBbRmlsZVRyZWVSZWNvcmQhXSFcbiAgICB9XG5cbiAgICB0eXBlIEZpbGUge1xuICAgICAgaWQ6IElEIVxuICAgICAgZGF0YTogU3RyaW5nIVxuICAgIH1cblxuICAgIHR5cGUgRmlsZVRyZWVSZWNvcmQge1xuICAgICAgbmFtZTogU3RyaW5nIVxuICAgICAgdHlwZTogRmlsZVRyZWVSZWNvcmRUeXBlIVxuICAgICAgaXRlbUlkOiBJRCFcbiAgICB9XG5cbiAgICBlbnVtIEZpbGVUcmVlUmVjb3JkVHlwZSB7XG4gICAgICBGSUxFXG4gICAgICBUUkVFXG4gICAgfVxuXG4gICAgaW5wdXQgUHJvamVjdElucHV0IHtcbiAgICAgIGlkOiBJRFxuICAgICAgbmFtZTogU3RyaW5nIVxuICAgICAgaXNQdWJsaWM6IEJvb2xlYW4hXG4gICAgICBmaWxlVHJlZTogRmlsZVRyZWVJbnB1dCFcbiAgICB9XG5cbiAgICBpbnB1dCBGaWxlVHJlZUlucHV0IHtcbiAgICAgIGlkOiBJRFxuICAgICAgZmlsZXM6IFtGaWxlVHJlZUZpbGVSZWNvcmRJbnB1dCFdIVxuICAgICAgdHJlZXM6IFtGaWxlVHJlZVRyZWVSZWNvcmRJbnB1dCFdIVxuICAgIH1cblxuICAgIGlucHV0IEZpbGVUcmVlRmlsZVJlY29yZElucHV0IHtcbiAgICAgIGlkOiBJRFxuICAgICAgbmFtZTogU3RyaW5nIVxuICAgICAgZGF0YTogU3RyaW5nIVxuICAgIH1cblxuICAgIGlucHV0IEZpbGVUcmVlVHJlZVJlY29yZElucHV0IHtcbiAgICAgIG5hbWU6IFN0cmluZyFcbiAgICAgIHRyZWU6IEZpbGVUcmVlSW5wdXQhXG4gICAgfVxuXG4gICAgaW5wdXQgUHJvamVjdFVwZGF0ZUlucHV0IHtcbiAgICAgIG5hbWU6IFN0cmluZ1xuICAgICAgaXNQdWJsaWM6IEJvb2xlYW5cbiAgICB9XG4gICAgYCxcbiAgXSxcbiAgcXVlcmllczogW1xuICAgIGBcbiAgICBwcm9qZWN0czogW1Byb2plY3QhXSFcbiAgICBwcm9qZWN0QnlJZChpZDogSUQhKTogUHJvamVjdCFcbiAgICBgLFxuICBdLFxuICBtdXRhdGlvbnM6IFtcbiAgICBgXG4gICAgY3JlYXRlUHJvamVjdChwcm9qZWN0OiBQcm9qZWN0SW5wdXQhKSA6IElEISBAYXV0aFxuICAgIGRlbGV0ZVByb2plY3RCeUlkKHByb2plY3RJZDogSUQhKTogSUQgQGF1dGhcbiAgICB1cGRhdGVQcm9qZWN0KHByb2plY3RJZDogSUQhLCBwcm9qZWN0OiBQcm9qZWN0VXBkYXRlSW5wdXQhKTogSUQgQGF1dGhcbiAgICBgLFxuICBdLFxuICByZXNvbHZlcnM6ICgpID0+ICh7XG4gICAgUm9vdFF1ZXJ5OiB7XG4gICAgICBhc3luYyBwcm9qZWN0cyhfLCBfYXJncywgX2NvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIC8qIGF3YWl0ICovIFByb2plY3QuZmluZCh7fSk7XG4gICAgICB9LFxuICAgICAgYXN5bmMgcHJvamVjdEJ5SWQoXywgeyBpZCB9LCBfY29udGV4dCkge1xuICAgICAgICByZXR1cm4gLyogYXdhaXQgKi8gUHJvamVjdC5maW5kQnlJZChpZCk7XG4gICAgICB9LFxuICAgIH0sXG4gICAgUHJvamVjdDoge1xuICAgICAgZmlsZVRyZWVSb290SWQocGFyZW50LCBfYXJncywgX2NvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5maWxlVHJlZVJvb3Q7XG4gICAgICB9LFxuICAgICAgYXN5bmMgZmlsZVRyZWVzKHBhcmVudCwgX2FyZ3MsIF9jb250ZXh0KSB7XG4gICAgICAgIHJldHVybiBGaWxlVHJlZS5maW5kKHsgcHJvamVjdDogcGFyZW50LmlkIH0pO1xuICAgICAgfSxcbiAgICAgIGFzeW5jIGZpbGVzKHBhcmVudCwgX2FyZ3MsIF9jb250ZXh0KSB7XG4gICAgICAgIHJldHVybiBGaWxlLmZpbmQoeyBwcm9qZWN0OiBwYXJlbnQuaWQgfSk7XG4gICAgICB9LFxuICAgIH0sXG4gICAgRmlsZToge1xuICAgICAgZGF0YShwYXJlbnQsIF9hcmdzLCBfY29udGV4dCkge1xuICAgICAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkocGFyZW50LmRhdGEpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIEZpbGVUcmVlUmVjb3JkOiB7XG4gICAgICBpdGVtSWQocGFyZW50LCBfYXJncywgX2NvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5yZWY7XG4gICAgICB9LFxuICAgIH0sXG4gICAgTXV0YXRpb246IHtcbiAgICAgIGFzeW5jIGNyZWF0ZVByb2plY3QoXywgeyBwcm9qZWN0OiBwcm9qZWN0SW5wdXQgfSwgX2NvbnRleHQpIHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGRiLnN0YXJ0U2Vzc2lvbigpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IFtwcm9qZWN0XSA9IGF3YWl0IFByb2plY3QuY3JlYXRlKFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogcHJvamVjdElucHV0Lm5hbWUsXG4gICAgICAgICAgICAgICAgaXNQdWJsaWM6IHByb2plY3RJbnB1dC5pc1B1YmxpYyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB7IHNlc3Npb24gfSxcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgYXN5bmMgZnVuY3Rpb24gc2F2ZUZpbGVUcmVlKHRyZWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHNhdmVkRmlsZVByb21pc2VzID0gdHJlZS5maWxlcy5tYXAoKGZpbGUpID0+XG4gICAgICAgICAgICAgIEZpbGUuY3JlYXRlKFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdDogcHJvamVjdC5pZCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogQnVmZmVyLmZyb20oYmFzZTY0LnRvQnl0ZUFycmF5KGZpbGUuZGF0YSkpLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHsgc2Vzc2lvbiB9LFxuICAgICAgICAgICAgICApLnRoZW4oKFtzYXZlZEZpbGVdKSA9PiAoe1xuICAgICAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnRklMRScsXG4gICAgICAgICAgICAgICAgcmVmOiBzYXZlZEZpbGUuaWQsXG4gICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNhdmVkVHJlZVByb21pc2VzID0gdHJlZS50cmVlcy5tYXAoKGNoaWxkVHJlZSkgPT5cbiAgICAgICAgICAgICAgc2F2ZUZpbGVUcmVlKGNoaWxkVHJlZS50cmVlKS50aGVuKChzYXZlZFRyZWUpID0+ICh7XG4gICAgICAgICAgICAgICAgbmFtZTogY2hpbGRUcmVlLm5hbWUsXG4gICAgICAgICAgICAgICAgdHlwZTogJ1RSRUUnLFxuICAgICAgICAgICAgICAgIHJlZjogc2F2ZWRUcmVlLmlkLFxuICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBjb250ZW50cyA9IGF3YWl0IFByb21pc2UuYWxsKFsuLi5zYXZlZEZpbGVQcm9taXNlcywgLi4uc2F2ZWRUcmVlUHJvbWlzZXNdKTtcblxuICAgICAgICAgICAgY29uc3QgW2ZpbGVUcmVlXSA9IGF3YWl0IEZpbGVUcmVlLmNyZWF0ZShcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHByb2plY3QuaWQsXG4gICAgICAgICAgICAgICAgICBjb250ZW50cyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB7IHNlc3Npb24gfSxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHJldHVybiBmaWxlVHJlZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCByb290ID0gYXdhaXQgc2F2ZUZpbGVUcmVlKHByb2plY3RJbnB1dC5maWxlVHJlZSk7XG4gICAgICAgICAgcHJvamVjdC5maWxlVHJlZVJvb3QgPSByb290LmlkO1xuICAgICAgICAgIGF3YWl0IHByb2plY3Quc2F2ZSgpO1xuICAgICAgICAgIHJldHVybiBwcm9qZWN0LmlkO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGF3YWl0IHNlc3Npb24uZW5kU2Vzc2lvbigpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXN5bmMgZGVsZXRlUHJvamVjdEJ5SWQoX3BhcmVudCwgeyBwcm9qZWN0SWQgfSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGRlbGV0ZWQgPSBhd2FpdCBQcm9qZWN0LmZpbmRCeUlkQW5kRGVsZXRlKHsgX2lkOiBwcm9qZWN0SWQgfSk7XG4gICAgICAgICAgaWYgKGRlbGV0ZWQ/LmlkKSB7XG4gICAgICAgICAgICBhd2FpdCBGaWxlVHJlZS5kZWxldGVNYW55KHsgcHJvamVjdDogcHJvamVjdElkIH0pO1xuICAgICAgICAgICAgYXdhaXQgRmlsZS5kZWxldGVNYW55KHsgcHJvamVjdDogcHJvamVjdElkIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZGVsZXRlZD8uaWQ7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICB0aHJvdyBuZXcgQXBvbGxvRXJyb3IoJ0ZhaWxlZCB0byBkZWxldGUgcHJvamVjdC4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jIHVwZGF0ZVByb2plY3QoX3BhcmVudCwgeyBwcm9qZWN0SWQsIHByb2plY3QgfSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IFByb2plY3QudXBkYXRlKHsgX2lkOiBwcm9qZWN0SWQgfSwgeyAuLi5wcm9qZWN0IH0pO1xuICAgICAgICAgIGlmIChyZXMubiA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBwcm9qZWN0SWQ7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICB0aHJvdyBuZXcgQXBvbGxvRXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgcHJvamVjdC4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZjtcbiIsIi8vIEBmbG93XG5pbXBvcnQgeyBBcG9sbG9FcnJvciwgQXV0aGVudGljYXRpb25FcnJvciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXInO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcyc7XG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5cbmltcG9ydCB0eXBlIHsgR3JhcGhxbERlZlNoYXBlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9ncmFwaHFsL2dyYXBocWxEZWYnO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vbW9uZ29kYic7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmNvbnN0IGRlZjogR3JhcGhxbERlZlNoYXBlID0ge1xuICBzY2hlbWE6IFtcbiAgICBgXG4gICAgdHlwZSBVc2VyTG9naW4ge1xuICAgICAgaWQ6IElEIVxuICAgICAgdXNlcm5hbWU6IFN0cmluZyFcbiAgICAgIHRva2VuOiBTdHJpbmchXG4gICAgfVxuXG4gICAgdHlwZSBVc2VyIHtcbiAgICAgIGlkOiBJRCFcbiAgICAgIHVzZXJuYW1lOiBTdHJpbmchXG4gICAgfVxuICAgIGAsXG4gIF0sXG4gIHF1ZXJpZXM6IFtcbiAgICBgXG4gICAgdXNlcjogVXNlciEgQGF1dGhcbiAgICBgLFxuICBdLFxuICBtdXRhdGlvbnM6IFtcbiAgICBgXG4gICAgbG9naW4odXNlcm5hbWU6IFN0cmluZyEsIHBhc3N3b3JkOiBTdHJpbmchKTogVXNlckxvZ2luIVxuICAgIGAsXG4gIF0sXG4gIHJlc29sdmVyczogKCkgPT4gKHtcbiAgICBSb290UXVlcnk6IHtcbiAgICAgIGFzeW5jIHVzZXIoXywgX2FyZ3MsIGNvbnRleHQpIHtcbiAgICAgICAgbGV0IHVzZXI7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdXNlciA9IGF3YWl0IFVzZXIuZmluZEJ5SWQoY29udGV4dC51c2VyLnVzZXJJZCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgIHRocm93IG5ldyBBcG9sbG9FcnJvcignRmFpbGVkIHRvIGZldGNoIHVzZXIuJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICB9LFxuICAgIE11dGF0aW9uOiB7XG4gICAgICBhc3luYyBsb2dpbihfLCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9LCBfY29udGV4dCkge1xuICAgICAgICBsZXQgdXNlcjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgdXNlcm5hbWUgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgIHRocm93IG5ldyBBcG9sbG9FcnJvcignRmFpbGVkIHRvIHByb2Nlc3MgbG9naW4uJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEF1dGhlbnRpY2F0aW9uRXJyb3IoJ0ludmFsaWQgbG9naW4gY3JlZGVudGlhbHMuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXNzd29yZE1hdGNoID0gYXdhaXQgbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICAgICAgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQsIChlcnIsIG1hdGNoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgIHJlaihlcnIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzKG1hdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChwYXNzd29yZE1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbih7IHVzZXJJZDogdXNlci5pZCB9LCBjb25maWcuYXV0aC5qd3Quc2VjcmV0LCB7XG4gICAgICAgICAgICBleHBpcmVzSW46IGNvbmZpZy5hdXRoLnRva2VuRXhwaXJlc0luLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gVE9ETzogYWRkIGV4cGlyeSBkYXRlXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICB0b2tlbixcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBBdXRoZW50aWNhdGlvbkVycm9yKCdJbnZhbGlkIGxvZ2luIGNyZWRlbnRpYWxzLicpO1xuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZjtcbiIsIi8vIEBmbG93XG5cbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9ncmFwaHFsL2dyYXBocWxEZWYnO1xuXG5pbXBvcnQgVXNlciBmcm9tICcuL1VzZXInO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2UoVXNlciwgUHJvamVjdCk7XG4iLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29va2llUGFyc2VyIGZyb20gJ2Nvb2tpZS1wYXJzZXInO1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuaW1wb3J0IGV4cHJlc3NKd3QsIHsgVW5hdXRob3JpemVkRXJyb3IgYXMgSnd0NDAxRXJyb3IgfSBmcm9tICdleHByZXNzLWp3dCc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJldHR5RXJyb3IgZnJvbSAncHJldHR5LWVycm9yJztcbmltcG9ydCB7IEFwb2xsb1NlcnZlciwgbWFrZUV4ZWN1dGFibGVTY2hlbWEgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnO1xuaW1wb3J0IHsgZ2V0RGF0YUZyb21UcmVlIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1zc3InO1xuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XG5cbmltcG9ydCBjcmVhdGVBcG9sbG9DbGllbnQgZnJvbSAnLi4vY29yZS9jcmVhdGVBcG9sbG9DbGllbnQnO1xuaW1wb3J0IEFwcCBmcm9tICcuLi9jb21wb25lbnRzL0FwcCc7XG5pbXBvcnQgeyBFcnJvclBhZ2VXaXRob3V0U3R5bGUgfSBmcm9tICcuLi9yb3V0ZXMvZXJyb3IvRXJyb3JQYWdlJztcbmltcG9ydCBlcnJvclBhZ2VTdHlsZSBmcm9tICcuLi9yb3V0ZXMvZXJyb3IvRXJyb3JQYWdlLmNzcyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4uL2NvcmUvcm91dGVyJztcbmltcG9ydCBzY2hlbWEgZnJvbSAnLi9ncmFwaHFsL3NjaGVtYSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcbmltcG9ydCBjcmVhdGVJbml0aWFsU3RhdGUgZnJvbSAnLi4vY29yZS9jcmVhdGVJbml0aWFsU3RhdGUnO1xuaW1wb3J0IHJlbmRlckh0bWwgZnJvbSAnLi9yZW5kZXJIdG1sJztcbmltcG9ydCByZW5kZXJFeGVjdXRvciBmcm9tICcuL3JlbmRlckV4ZWN1dG9yJztcbmltcG9ydCB7IElzb21vcnBoaWNTdHlsZUxvYWRlciwgTWF0ZXJpYWxTdHlsZUxvYWRlciwgbG9hZFNjcmlwdHMgfSBmcm9tICcuL2xvYWRlcnMnO1xuXG5wcm9jZXNzLm9uKCd1bmhhbmRsZWRSZWplY3Rpb24nLCAocmVhc29uLCBwKSA9PiB7XG4gIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBSZWplY3Rpb24gYXQ6JywgcCwgJ3JlYXNvbjonLCByZWFzb24pO1xuICAvLyBzZW5kIGVudGlyZSBhcHAgZG93bi4gUHJvY2VzcyBtYW5hZ2VyIHdpbGwgcmVzdGFydCBpdFxuICBwcm9jZXNzLmV4aXQoMSk7XG59KTtcblxuLy9cbi8vIFRlbGwgYW55IENTUyB0b29saW5nIChzdWNoIGFzIE1hdGVyaWFsIFVJKSB0byB1c2UgYWxsIHZlbmRvciBwcmVmaXhlcyBpZiB0aGVcbi8vIHVzZXIgYWdlbnQgaXMgbm90IGtub3duLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmdsb2JhbC5uYXZpZ2F0b3IgPSBnbG9iYWwubmF2aWdhdG9yID8/IHt9O1xuZ2xvYmFsLm5hdmlnYXRvci51c2VyQWdlbnQgPSBnbG9iYWwubmF2aWdhdG9yLnVzZXJBZ2VudCA/PyAnYWxsJztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5sZXQgd3MgPSBudWxsO1xuaWYgKCFtb2R1bGUuaG90KSB7XG4gIHdzID0gaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwKTtcbn1cblxuLy9cbi8vIElmIHlvdSBhcmUgdXNpbmcgcHJveHkgZnJvbSBleHRlcm5hbCBtYWNoaW5lLCB5b3UgY2FuIHNldCBUUlVTVF9QUk9YWSBlbnZcbi8vIERlZmF1bHQgaXMgdG8gdHJ1c3QgcHJveHkgaGVhZGVycyBvbmx5IGZyb20gbG9vcGJhY2sgaW50ZXJmYWNlLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmFwcC5zZXQoJ3RydXN0IHByb3h5JywgY29uZmlnLnRydXN0UHJveHkpO1xuXG4vLyBrZWVwIGEgbGlzdCBvZiBhdXRoLXJlbGV2YW50IG1pZGRsZXdhcmVzIHRvIGRlY29kZSBjb29raWVzIGluIHRoZSBXUyBoYW5kbGVyXG5jb25zdCBhdXRoTWlkZGxld2FyZXMgPSBbXTtcblxuZnVuY3Rpb24gYXBwVXNlQXV0aChtdykge1xuICBhdXRoTWlkZGxld2FyZXMucHVzaChtdyk7XG4gIGFwcC51c2UobXcpO1xufVxuXG4vL1xuLy8gUmVnaXN0ZXIgTm9kZS5qcyBtaWRkbGV3YXJlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAncHVibGljJykpKTtcbmFwcFVzZUF1dGgoY29va2llUGFyc2VyKCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcblxuLy9cbi8vIEF1dGhlbnRpY2F0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuYXBwVXNlQXV0aChcbiAgZXhwcmVzc0p3dCh7XG4gICAgc2VjcmV0OiBjb25maWcuYXV0aC5qd3Quc2VjcmV0LFxuICAgIGNyZWRlbnRpYWxzUmVxdWlyZWQ6IGZhbHNlLFxuICAgIGdldFRva2VuOiAocmVxKSA9PiByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLFxuICB9KSxcbik7XG4vLyBFcnJvciBoYW5kbGVyIGZvciBleHByZXNzLWp3dFxuYXBwLnVzZSgoZXJyLCByZXEsIHJlcywgbmV4dCkgPT4ge1xuICBpZiAoZXJyIGluc3RhbmNlb2YgSnd0NDAxRXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdbZXhwcmVzcy1qd3QtZXJyb3JdJywgcmVxLmNvb2tpZXMuaWRfdG9rZW4pO1xuICAgIC8vIGBjbGVhckNvb2tpZWAsIG90aGVyd2lzZSB1c2VyIGNhbid0IHVzZSB3ZWItYXBwIHVudGlsIGNvb2tpZSBleHBpcmVzXG4gICAgcmVzLmNsZWFyQ29va2llKCdpZF90b2tlbicpO1xuICB9XG4gIG5leHQoZXJyKTtcbn0pO1xuXG4vL1xuLy8gUmVnaXN0ZXIgQVBJIG1pZGRsZXdhcmVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhxbC9leHByZXNzLWdyYXBocWwjb3B0aW9uc1xuXG5jb25zdCBhcG9sbG9TZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcbiAgLi4uc2NoZW1hLFxuICBzdWJzY3JpcHRpb25zOiB7XG4gICAgcGF0aDogJy9zdWJzY3JpcHRpb25zJyxcbiAgICBvbkNvbm5lY3Q6IGFzeW5jIChjb25uZWN0aW9uUGFyYW1zLCB3ZWJTb2NrZXQpID0+IHtcbiAgICAgIGNvbnN0IGFwcGx5TWlkZGxld2FyZSA9IChtaWRkbGV3YXJlLCByZXEpID0+XG4gICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBtaWRkbGV3YXJlKHJlcSwgbnVsbCwgcmVzb2x2ZSkpO1xuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIGZvciAoY29uc3QgbWlkZGxld2FyZSBvZiBhdXRoTWlkZGxld2FyZXMpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcbiAgICAgICAgYXdhaXQgYXBwbHlNaWRkbGV3YXJlKG1pZGRsZXdhcmUsIHdlYlNvY2tldC51cGdyYWRlUmVxKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdXNlcjogd2ViU29ja2V0LnVwZ3JhZGVSZXEudXNlcixcbiAgICAgICAgLi4uY29ubmVjdGlvblBhcmFtcyxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAgdXBsb2FkczogZmFsc2UsXG4gIGludHJvc3BlY3Rpb246IF9fREVWX18sXG4gIHBsYXlncm91bmQ6IF9fREVWX18gJiYge1xuICAgIHN1YnNjcmlwdGlvbkVuZHBvaW50OiAnL3N1YnNjcmlwdGlvbnMnLFxuICB9LFxuICBkZWJ1ZzogX19ERVZfXyxcbiAgY29udGV4dDogKHsgcmVxIH0pID0+ICh7XG4gICAgdXNlcjogcmVxLnVzZXIsXG4gIH0pLFxufSk7XG5hcG9sbG9TZXJ2ZXIuYXBwbHlNaWRkbGV3YXJlKHsgYXBwIH0pO1xuXG5pZiAod3MgIT09IG51bGwpIHtcbiAgLy8gVE9ETyBubyBzdWJzY3JpcHRpb25zIHdoZW4gdXNpbmcgYHlhcm4gc3RhcnRgXG4gIGFwb2xsb1NlcnZlci5pbnN0YWxsU3Vic2NyaXB0aW9uSGFuZGxlcnMod3MpO1xufVxuXG4vL1xuLy8gUmVnaXN0ZXIgc2VydmVyLXNpZGUgcmVuZGVyaW5nIG1pZGRsZXdhcmVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5hcHAuZ2V0KCcvZXhlY3V0b3InLCBhc3luYyAoX3JlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgaHRtbCA9IHJlbmRlckV4ZWN1dG9yKCk7XG4gICAgcmVzLnN0YXR1cygyMDApO1xuICAgIHJlcy5zZW5kKGh0bWwpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBuZXh0KGVycik7XG4gIH1cbn0pO1xuXG5hcHAuZ2V0KCcvYXBwLXNoZWxsLmh0bWwnLCBhc3luYyAoX3JlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgaHRtbCA9IHJlbmRlckh0bWwobnVsbCwge1xuICAgICAgc3R5bGVzOiBbXSxcbiAgICAgIHNjcmlwdHM6IGxvYWRTY3JpcHRzKCdjbGllbnQnKSxcbiAgICB9KTtcbiAgICByZXMuc3RhdHVzKDIwMCk7XG4gICAgcmVzLnNlbmQoaHRtbCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIG5leHQoZXJyKTtcbiAgfVxufSk7XG5cbmFwcC5nZXQoJyonLCBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpc29tb3JwaGljU3R5bGVMb2FkZXIgPSBuZXcgSXNvbW9ycGhpY1N0eWxlTG9hZGVyKCk7XG4gICAgY29uc3QgbWF0ZXJpYWxTdHlsZUxvYWRlciA9IG5ldyBNYXRlcmlhbFN0eWxlTG9hZGVyKCk7XG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSBjcmVhdGVJbml0aWFsU3RhdGUoe1xuICAgICAgdXNlcjogcmVxLnVzZXIgPz8gbnVsbCxcbiAgICB9KTtcblxuICAgIGNvbnN0IGFwb2xsb0NsaWVudCA9IGNyZWF0ZUFwb2xsb0NsaWVudChcbiAgICAgIHtcbiAgICAgICAgc2NoZW1hOiBtYWtlRXhlY3V0YWJsZVNjaGVtYShzY2hlbWEpLFxuICAgICAgICAvLyBUaGlzIGlzIGEgY29udGV4dCBjb25zdW1lZCBpbiBHcmFwaFFMIFJlc29sdmVyc1xuICAgICAgICBjb250ZXh0OiB7IHJlcSB9LFxuICAgICAgfSxcbiAgICAgIGluaXRpYWxTdGF0ZSxcbiAgICApO1xuXG4gICAgLy8gR2xvYmFsIChjb250ZXh0KSB2YXJpYWJsZXMgdGhhdCBjYW4gYmUgZWFzaWx5IGFjY2Vzc2VkIGZyb20gYW55IFJlYWN0IGNvbXBvbmVudFxuICAgIC8vIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvY29udGV4dC5odG1sXG4gICAgY29uc3QgY29udGV4dCA9IHtcbiAgICAgIC8vIFRoZSB0d2lucyBiZWxvdyBhcmUgd2lsZCwgYmUgY2FyZWZ1bCFcbiAgICAgIHBhdGhuYW1lOiByZXEucGF0aCxcbiAgICAgIHF1ZXJ5OiByZXEucXVlcnksXG4gICAgICAvLyBBcG9sbG8gQ2xpZW50IGZvciB1c2Ugd2l0aCByZWFjdC1hcG9sbG9cbiAgICAgIGNsaWVudDogYXBvbGxvQ2xpZW50LFxuICAgICAgLy8gVE9ETyBsb2NhbGVzXG4gICAgICBsb2NhbGVzOiBbJ2VuJ10sXG4gICAgfTtcblxuICAgIGNvbnN0IGluc2VydENzcyA9IGlzb21vcnBoaWNTdHlsZUxvYWRlci5pbnNlcnRDc3MuYmluZChpc29tb3JwaGljU3R5bGVMb2FkZXIpO1xuXG4gICAgY29uc3Qgcm91dGUgPSBhd2FpdCByb3V0ZXIucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIGlmIChyb3V0ZS5yZWRpcmVjdCkge1xuICAgICAgcmVzLnJlZGlyZWN0KHJvdXRlLnN0YXR1cyA/PyAzMDIsIHJvdXRlLnJlZGlyZWN0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByb290Q29tcG9uZW50ID0gbWF0ZXJpYWxTdHlsZUxvYWRlci53cmFwKFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1uby1iaW5kXG4gICAgICA8QXBwIGNvbnRleHQ9e2NvbnRleHR9IGluc2VydENzcz17aW5zZXJ0Q3NzfT5cbiAgICAgICAge3JvdXRlLmNvbXBvbmVudH1cbiAgICAgIDwvQXBwPixcbiAgICApO1xuICAgIGF3YWl0IGdldERhdGFGcm9tVHJlZShyb290Q29tcG9uZW50KTtcblxuICAgIGNvbnN0IHN0eWxlcyA9IFtcbiAgICAgIHsgaWQ6ICdjc3MnLCBjc3NUZXh0OiBpc29tb3JwaGljU3R5bGVMb2FkZXIuY29sbGVjdCgpIH0sXG4gICAgICAvLyBUT0RPIG5lZWQgdG8gcmVtb3ZlIHRoaXMgb24gdGhlIGNsaWVudD8gaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vZ3VpZGVzL3NlcnZlci1yZW5kZXJpbmcvI3RoZS1jbGllbnQtc2lkZVxuICAgICAgeyBpZDogJ21hdGVyaWFsLWNzcycsIGNzc1RleHQ6IG1hdGVyaWFsU3R5bGVMb2FkZXIuY29sbGVjdCgpIH0sXG4gICAgXTtcbiAgICBjb25zdCBzY3JpcHRzID0gbG9hZFNjcmlwdHMoXG4gICAgICAnY2xpZW50JyxcbiAgICAgIC4uLihyb3V0ZS5jaHVuayA/IFtyb3V0ZS5jaHVua10gOiBbXSksXG4gICAgICAuLi4ocm91dGUuY2h1bmtzID8gcm91dGUuY2h1bmtzIDogW10pLFxuICAgICk7XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgLi4ucm91dGUsXG4gICAgICBzdHlsZXMsXG4gICAgICBzY3JpcHRzLFxuICAgICAgYXBwOiB7XG4gICAgICAgIGFwaVVybDogY29uZmlnLmFwaS5jbGllbnRVcmwsXG4gICAgICAgIC8vIENhY2hlIGZvciBjbGllbnQtc2lkZSBhcG9sbG9DbGllbnRcbiAgICAgICAgY2FjaGU6IGNvbnRleHQuY2xpZW50LmV4dHJhY3QoKSxcbiAgICAgICAgLy8gSW5pdGlhbCBzdGF0ZSBmb3IgY2xpZW50LXNpZGUgc3RhdGVMaW5rXG4gICAgICAgIGluaXRpYWxTdGF0ZSxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGNvbnN0IGh0bWwgPSByZW5kZXJIdG1sKHJvb3RDb21wb25lbnQsIGRhdGEpO1xuICAgIHJlcy5zdGF0dXMocm91dGUuc3RhdHVzID8/IDIwMCk7XG4gICAgcmVzLnNlbmQoaHRtbCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIG5leHQoZXJyKTtcbiAgfVxufSk7XG5cbi8vXG4vLyBFcnJvciBoYW5kbGluZ1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNvbnN0IHBlID0gbmV3IFByZXR0eUVycm9yKCk7XG5wZS5za2lwTm9kZUZpbGVzKCk7XG5wZS5za2lwUGFja2FnZSgnZXhwcmVzcycpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmFwcC51c2UoKGVyciwgcmVxLCByZXMsIG5leHQpID0+IHtcbiAgY29uc29sZS5lcnJvcihwZS5yZW5kZXIoZXJyKSk7XG5cbiAgY29uc3Qgcm9vdENvbXBvbmVudCA9IDxFcnJvclBhZ2VXaXRob3V0U3R5bGUgZXJyb3I9e2Vycn0gLz47XG5cbiAgY29uc3Qgc3R5bGVzID0gW1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgIHsgaWQ6ICdjc3MnLCBjc3NUZXh0OiBlcnJvclBhZ2VTdHlsZS5fZ2V0Q3NzKCkgfSxcbiAgXTtcblxuICBjb25zdCBkYXRhID0ge1xuICAgIHRpdGxlOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyxcbiAgICBkZXNjcmlwdGlvbjogZXJyLm1lc3NhZ2UsXG4gICAgc3R5bGVzLFxuICB9O1xuXG4gIGNvbnN0IGh0bWwgPSByZW5kZXJIdG1sKHJvb3RDb21wb25lbnQsIGRhdGEpO1xuICByZXMuc3RhdHVzKGVyci5zdGF0dXMgPz8gNTAwKTtcbiAgcmVzLnNlbmQoaHRtbCk7XG59KTtcblxuLy9cbi8vIExhdW5jaCB0aGUgc2VydmVyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pZiAod3MgIT09IG51bGwpIHtcbiAgd3MubGlzdGVuKGNvbmZpZy5wb3J0LCAoKSA9PiB7XG4gICAgY29uc29sZS5pbmZvKGBUaGUgc2VydmVyIGlzIHJ1bm5pbmcgYXQgaHR0cDovL2xvY2FsaG9zdDoke2NvbmZpZy5wb3J0fS9gKTtcbiAgfSk7XG59XG5cbi8vXG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgYXBwLmhvdCA9IG1vZHVsZS5ob3Q7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KCcuLi9jb3JlL3JvdXRlcicpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG4iLCJpbXBvcnQgeyBTZXJ2ZXJTdHlsZVNoZWV0cyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuXG4vLyBpbXBvcnQgYXNzZXRzIGZyb20gJy4vYXNzZXQtbWFuaWZlc3QuanNvbic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW1wb3J0L25vLXVucmVzb2x2ZWRcbmltcG9ydCBjaHVua3MgZnJvbSAnLi9jaHVuay1tYW5pZmVzdC5qc29uJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbXBvcnQvbm8tdW5yZXNvbHZlZFxuXG5leHBvcnQgY2xhc3MgSXNvbW9ycGhpY1N0eWxlTG9hZGVyIHtcbiAgY3NzID0gbmV3IFNldCgpO1xuXG4gIC8vIEVuYWJsZXMgY3JpdGljYWwgcGF0aCBDU1MgcmVuZGVyaW5nXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9rcmlhc29mdC9pc29tb3JwaGljLXN0eWxlLWxvYWRlclxuICBpbnNlcnRDc3MoLi4uc3R5bGVzKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gICAgc3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB0aGlzLmNzcy5hZGQoc3R5bGUuX2dldENzcygpKSk7XG4gIH1cblxuICBjb2xsZWN0KCkge1xuICAgIHJldHVybiBbLi4udGhpcy5jc3NdLmpvaW4oJycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkU2NyaXB0cyguLi5jaG5rcykge1xuICBjb25zdCBzY3JpcHRzID0gbmV3IFNldCgpO1xuXG4gIGNobmtzLmZvckVhY2goKGNodW5rKSA9PiB7XG4gICAgaWYgKGNodW5rc1tjaHVua10pIHtcbiAgICAgIC8vIGFkZCBhbGwgYXNzZXRzIGJlbG9uZ2luZyB0byB0aGF0IGNodW5rXG4gICAgICBjaHVua3NbY2h1bmtdLmZvckVhY2goKGFzc2V0KSA9PiBzY3JpcHRzLmFkZChhc3NldCkpO1xuICAgIH0gZWxzZSBpZiAoX19ERVZfXykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDaHVuayB3aXRoIG5hbWUgJyR7Y2h1bmt9JyBjYW5ub3QgYmUgZm91bmRgKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBbLi4uc2NyaXB0c107XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRlcmlhbFN0eWxlTG9hZGVyIHtcbiAgc3NzID0gbmV3IFNlcnZlclN0eWxlU2hlZXRzKCk7XG5cbiAgd3JhcChjb21wb25lbnQpIHtcbiAgICByZXR1cm4gdGhpcy5zc3MuY29sbGVjdChjb21wb25lbnQpO1xuICB9XG5cbiAgY29sbGVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5zc3MudG9TdHJpbmcoKTtcbiAgfVxufVxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcblxubW9uZ29vc2VcbiAgLmNvbm5lY3QoY29uZmlnLm1vbmdvZGJVcmwsIHtcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXG4gICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICB9KVxuICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcignTW9uZ29EQiBpbml0aWFsIGNvbm5lY3Rpb24gZmFpbGVkJywgZXJyb3IpO1xuICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UuY29ubmVjdGlvbjtcbiIsImltcG9ydCBkYiBmcm9tICcuL2RiJztcblxuaW1wb3J0ICogYXMgVXNlclNjaGVtYSBmcm9tICcuL3NjaGVtYS9Vc2VyJztcbmltcG9ydCAqIGFzIFByb2plY3RTY2hlbWEgZnJvbSAnLi9zY2hlbWEvUHJvamVjdCc7XG5cbmV4cG9ydCBjb25zdCBVc2VyID0gVXNlclNjaGVtYS5jcmVhdGVNb2RlbChkYik7XG5leHBvcnQgY29uc3QgUHJvamVjdCA9IFByb2plY3RTY2hlbWEuY3JlYXRlUHJvamVjdE1vZGVsKGRiKTtcbmV4cG9ydCBjb25zdCBGaWxlVHJlZSA9IFByb2plY3RTY2hlbWEuY3JlYXRlRmlsZVRyZWVNb2RlbChkYik7XG5leHBvcnQgY29uc3QgRmlsZSA9IFByb2plY3RTY2hlbWEuY3JlYXRlRmlsZU1vZGVsKGRiKTtcblxuZXhwb3J0IGRlZmF1bHQgZGI7XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgY3JlYXRlTW9kZWxIZWxwZXIgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IHByb2plY3RTY2hlbWE6IG1vbmdvb3NlLlNjaGVtYTxhbnk+ID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIG5hbWU6IFN0cmluZyxcbiAgaXNQdWJsaWM6IEJvb2xlYW4sXG4gIGNyZWF0ZWRBdDogRGF0ZSxcbiAgZmlsZVRyZWVSb290OiB7IHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiAnRmlsZVRyZWUnIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZpbGVUcmVlU2NoZW1hOiBtb25nb29zZS5TY2hlbWE8YW55PiA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICBwcm9qZWN0OiB7IHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiAnUHJvamVjdCcgfSxcbiAgY29udGVudHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiBTdHJpbmcsXG4gICAgICB0eXBlOiB7IHR5cGU6IFN0cmluZywgZW51bTogWydGSUxFJywgJ1RSRUUnXSB9LFxuICAgICAgcmVmOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgfSxcbiAgXSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmlsZVNjaGVtYTogbW9uZ29vc2UuU2NoZW1hPGFueT4gPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgcHJvamVjdDogeyB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsIHJlZjogJ1Byb2plY3QnIH0sXG4gIGRhdGE6IEJ1ZmZlcixcbn0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUHJvamVjdE1vZGVsID0gY3JlYXRlTW9kZWxIZWxwZXIoJ1Byb2plY3QnLCBwcm9qZWN0U2NoZW1hKTtcbi8vIHByZXR0aWVyLWlnbm9yZVxuZXhwb3J0IGNvbnN0IGNyZWF0ZUZpbGVUcmVlTW9kZWwgPSBjcmVhdGVNb2RlbEhlbHBlcignRmlsZVRyZWUnLCBmaWxlVHJlZVNjaGVtYSk7XG5leHBvcnQgY29uc3QgY3JlYXRlRmlsZU1vZGVsID0gY3JlYXRlTW9kZWxIZWxwZXIoJ0ZpbGUnLCBmaWxlU2NoZW1hKTtcbiIsIi8vIEBmbG93XG5cbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgeyBjcmVhdGVNb2RlbEhlbHBlciB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3Qgc2NoZW1hOiBtb25nb29zZS5TY2hlbWE8YW55PiA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICB1c2VybmFtZTogeyB0eXBlOiBTdHJpbmcsIHVuaXF1ZTogdHJ1ZSB9LFxuICBwYXNzd29yZDogU3RyaW5nLFxuICBjcmVhdGVkQXQ6IERhdGUsXG59KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1vZGVsID0gY3JlYXRlTW9kZWxIZWxwZXIoJ1VzZXInLCBzY2hlbWEpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTW9kZWxIZWxwZXIgPSAobmFtZSwgc2NoZW1hKSA9PiAoY29ubmVjdGlvbikgPT4ge1xuICBpZiAoX19ERVZfXyAmJiBjb25uZWN0aW9uLm1vZGVsc1tuYW1lXSkge1xuICAgIC8vIHdlJ3JlIHByb2JhYmx5IGhvdC1yZWxvYWRpbmcsIHNvIGNhbid0IHJlLWNvbXBpbGUgdGhlIG1vZGVsIVxuICAgIGNvbnNvbGUud2FybihgVHJ5aW5nIHRvIHJlLWNvbXBpbGUgc2NoZW1hIGZvciAnJHtuYW1lfSc7IGtlZXBpbmcgdGhlIG9yaWdpbmFsIG1vZGVsLmApO1xuICAgIHJldHVybiBjb25uZWN0aW9uLm1vZGVsc1tuYW1lXTtcbiAgfVxuICByZXR1cm4gY29ubmVjdGlvbi5tb2RlbChuYW1lLCBzY2hlbWEpO1xufTtcbiIsIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcblxuaW1wb3J0IHsgbG9hZFNjcmlwdHMgfSBmcm9tICcuL2xvYWRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJFeGVjdXRvcigpIHtcbiAgY29uc3Qgc2NyaXB0cyA9IGxvYWRTY3JpcHRzKCdleGVjdXRvcicpO1xuXG4gIGNvbnN0IGh0bWwgPSBSZWFjdERPTS5yZW5kZXJUb1N0YXRpY01hcmt1cChcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganN4LWExMXkvaHRtbC1oYXMtbGFuZ1xuICAgIDxodG1sPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIHtzY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiAoXG4gICAgICAgICAgPGxpbmsga2V5PXtzY3JpcHR9IHJlbD1cInByZWxvYWRcIiBocmVmPXtzY3JpcHR9IGFzPVwic2NyaXB0XCIgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAge3NjcmlwdHMubWFwKChzY3JpcHQpID0+IChcbiAgICAgICAgICA8c2NyaXB0IGtleT17c2NyaXB0fSBzcmM9e3NjcmlwdH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPixcbiAgKTtcbiAgcmV0dXJuIGA8IWRvY3R5cGUgaHRtbD4ke2h0bWx9YDtcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcblxuaW1wb3J0IEh0bWwgZnJvbSAnLi9IdG1sJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVySHRtbChyb290Q29tcG9uZW50LCBkYXRhKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBSZWFjdERPTS5yZW5kZXJUb1N0cmluZyhyb290Q29tcG9uZW50KTtcbiAgY29uc3QgaHRtbCA9IFJlYWN0RE9NLnJlbmRlclRvU3RhdGljTWFya3VwKDxIdG1sIHsuLi5kYXRhfT57Y29udGVudH08L0h0bWw+KTtcbiAgcmV0dXJuIGA8IWRvY3R5cGUgaHRtbD4ke2h0bWx9YDtcbn1cbiIsIi8vIEBmbG93XG5cbmltcG9ydCB7IE1lc3NhZ2VGb3JtYXRFbGVtZW50IH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbmltcG9ydCBtZXNzYWdlc19kZSBmcm9tICcuL2xvY2FsZXMvZGUuanNvbic7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG5pbXBvcnQgbWVzc2FnZXNfZW4gZnJvbSAnLi9sb2NhbGVzL2VuLmpzb24nO1xuXG5leHBvcnQgdHlwZSBMb2NhbGVNYXA8VD4gPSB7IFtsb2NhbGU6IHN0cmluZ106IFQgfTtcblxuLy8gcHJldHRpZXItaWdub3JlXG50eXBlIE1lc3NhZ2VzID1cbiAgfCB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4gIHwgeyBba2V5OiBzdHJpbmddOiBNZXNzYWdlRm9ybWF0RWxlbWVudFtdIH07XG5cbmV4cG9ydCBjb25zdCBNRVNTQUdFUzogTG9jYWxlTWFwPE1lc3NhZ2VzPiA9IHtcbiAgZGU6IG1lc3NhZ2VzX2RlLFxuICBlbjogbWVzc2FnZXNfZW4sXG59O1xuXG4vLyByZXR1cm5zIHRoZSBmaXJzdCBsb2NhbGUgaW4gYGxvY2FsZXNgIG1hdGNoaW5nIHRoZSBwcmVkaWNhdGUuIE1vc3Qgb2YgdGhlXG4vLyB0aW1lLCB0aGUgcHJlZGljYXRlIHdpbGwgYmUgYSBzaW1wbGUgbWVtYmVyc2hpcCB0ZXN0LlxuLy8gVGhlIHRlc3QgaXMgcGVyZm9ybWVkIGFzIGZvbGxvd3M6XG4vLyAtIGZpcnN0LCBhbGwgbG9jYWxlcyBhcmUgbm9ybWFsaXplZCBzbyB0aGF0IGUuZy4gXCJkZS1BVFwiIGJlY29tZXMgXCJkZV9hdFwiXG4vLyAtIHNlY29uZCwgaWYgYW55IG9mIHRoZSBsb2NhbGVzIG1hdGNoZXMgdGhlIHByZWRpY2F0ZSwgdGhhdCBpcyByZXR1cm5lZFxuLy8gLSB0aGlyZCwgdGhlIGxhbmd1YWdlLW9ubHkgdmFyaWFudHMgYXJlIHRha2VuLCBpLmUuIFwiZGVfYXRcIiBiZWNvbWVzIFwiZGVcIlxuLy8gLSBpZiB0aGVyZSBpcyBhIG1hdGNoLCB0aGF0IGlzIHJldHVybmVkXG4vLyAtIGxhc3RseSwgbnVsbCBpcyByZXR1cm5lZC5cbi8vIEZvciBtZWFuaW5nZnVsIHJlc3VsdHMsIHRoZSBgbG9jYWxlc2AgYXJyYXkgc2hvdWxkIGFscmVhZHkgY29udGFpblxuLy8gbGFuZ3VhZ2Utb25seSBsb2NhbGVzIGFzIGFsdGVybmF0aXZlcy4gT3RoZXJ3aXNlLCBhbiBhcnJheSBzdWNoIGFzXG4vL1xuLy8gICAgIFsnZW4tVVMnLCAnZGUnXVxuLy9cbi8vIFdpbGwgcmV0dXJuICdkZScgaW4gZmF2b3Igb2YgJ2VuJyBpZiB0aG9zZSBhcmUgc3VwcG9ydGVkIGJ1dCAnZW4tVVMnIGlzbid0LlxuLy8gSW5zdGVhZCBvZiB2YWx1aW5nIGEgbGFuZ3VhZ2UgbWF0Y2ggb3ZlciBhbiBleGFjdCBtYXRjaCwgYSBzdWZmaWNpZW50bHlcbi8vIGRldGFpbGVkIGxpc3Qgb2YgcHJlZmVyZW5jZXMgaXMgcmVxdWlyZWQuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWZmZWN0aXZlTG9jYWxlKFxuICBsb2NhbGVzOiBzdHJpbmdbXSxcbiAgc3VwcG9ydGVkOiAoc3RyaW5nKSA9PiBib29sZWFuLFxuKTogc3RyaW5nIHwgbnVsbCB7XG4gIC8vIG5vcm1hbGl6ZSB0aGluZ3MgbGlrZSAnZGUtQVQnIHRvICdkZV9hdCdcbiAgY29uc3Qgbm9ybWFsaXplZCA9IGxvY2FsZXMubWFwKChsb2NhbGUpID0+IGxvY2FsZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoJy0nLCAnXycpKTtcblxuICAvLyB0cnkgdG8gZmluZCBhIG1hdGNoIGZvciBhbnkgb2YgdGhlIGV4YWN0IGxvY2FsZXNcbiAgY29uc3QgZXhhY3QgPSBub3JtYWxpemVkLmZpbmQoc3VwcG9ydGVkKTtcbiAgaWYgKGV4YWN0KSByZXR1cm4gZXhhY3Q7XG5cbiAgLy8gdHJ5IHRvIGZpbmQgYSBtYXRjaCBmb3IgYW55IG9mIHRoZSBleGFjdCBsYW5ndWFnZS1vbmx5IGxvY2FsZXNcbiAgY29uc3QgbGFuZ3VhZ2UgPSBub3JtYWxpemVkLm1hcCgobG9jYWxlKSA9PiBsb2NhbGUuc3BsaXQoJ18nKVswXSkuZmluZChzdXBwb3J0ZWQpO1xuICBpZiAobGFuZ3VhZ2UpIHJldHVybiBsYW5ndWFnZTtcblxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gY2hvb3NlcyB0aGUgYmVzdCBlbGVtZW50IGluIGBtYXBgIGJhc2VkIG9uIHRoZSBnaXZlbiBgbG9jYWxlc2AsXG4vLyB1c2luZyB0aGUgYWxnb3JpdGhtIG9mIGBnZXRFZmZlY3RpdmVMb2NhbGUoKWAuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNsYXRpb248VD4obG9jYWxlczogc3RyaW5nW10sIG1hcDogTG9jYWxlTWFwPFQ+KTogVCB8IG51bGwge1xuICBjb25zdCBsb2NhbGUgPSBnZXRFZmZlY3RpdmVMb2NhbGUobG9jYWxlcywgT2JqZWN0Lmhhc093blByb3BlcnR5LmJpbmQobWFwKSk7XG5cbiAgcmV0dXJuIGxvY2FsZSA/IG1hcFtsb2NhbGVdIDogbnVsbDtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vcmVhY3QtaG9va3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1zc3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3BvbHlmaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJ5bG9uanMvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFieWxvbmpzL2NvcmUvRGVidWcvZGVidWdMYXllclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFieWxvbmpzL2NvcmUvTG9hZGluZy9zY2VuZUxvYWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFieWxvbmpzL2luc3BlY3RvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0JhZGdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2NvbW1vblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2xhYi9BbGVydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0VGl0bGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdWl3L3JlYWN0LW1kLWVkaXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhY2UtYnVpbGRzL3NyYy1ub2NvbmZsaWN0L2V4dC1sYW5ndWFnZV90b29sc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhY2UtYnVpbGRzL3NyYy1ub2NvbmZsaWN0L21vZGUtamF2YXNjcmlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhY2UtYnVpbGRzL3NyYy1ub2NvbmZsaWN0L3RoZW1lLWdpdGh1YlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhY2UtYnVpbGRzL3dlYnBhY2stcmVzb2x2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWNhY2hlLWlubWVtb3J5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstZXJyb3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstc2NoZW1hXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhc2U2NC1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJibG9ja2x5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJsb2NrbHkvYmxvY2tzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJsb2NrbHkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJibG9ja2x5L2phdmFzY3JpcHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmxvY2tseS9tc2cvZGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmxvY2tseS9tc2cvZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmxvY2tseS9weXRob25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcmNsanMtbm9kZS9zcmMvVENQUm9ib3RDb25uZWN0aW9uLm1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcmNsanMvc3JjL0NSQ0xDb21tYW5kXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyY2xqcy9zcmMvQ29tbWFuZEZhY3RvcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3JjbGpzL3NyYy9NdWx0aVJvYm90SW50ZXJmYWNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyY2xqcy9zcmMvUm9ib3RJbnRlcmZhY2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXVsZXJ1dGlsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV1bGVydXRpbC9zcmMvRXVsZXJVdGlsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1qd3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlsZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmxleGxheW91dC1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtc3Vic2NyaXB0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRvb2xzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhpc3RvcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXN0eWxlLWxvYWRlci9TdHlsZUNvbnRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvdXNlU3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtc3R5bGUtbG9hZGVyL3dpdGhTdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzc3RvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNzdG9yZS9kaXN0L2pzc3RvcmUud29ya2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gubWVyZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWF0ZXJpYWwtdWktcG9wdXAtc3RhdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWF0ZXJpYWwtdWktcG9wdXAtc3RhdGUvaG9va3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWF0dGVyLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9BY2NvdW50Q2lyY2xlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9BcnJvd0FsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvQXhpc0Fycm93XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9DaGV2cm9uTGVmdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvQ2hldnJvblJpZ2h0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9DbG91ZFVwbG9hZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvQ29kZUpzb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL0NvZ3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL0NvbnNvbGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL0RhdGFiYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9EZWxldGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL0RvdHNWZXJ0aWNhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvRG93bmxvYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL0V4Y2xhbWF0aW9uVGhpY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL0V4aXRUb0FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvRmlsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvRmlsZVBkZlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvRm9sZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9Gb2xkZXJJbWFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvRm9sZGVyT3BlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvRm9ydW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL0hlbHBDaXJjbGVPdXRsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9JbWFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvTGFuZ3VhZ2VKYXZhc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9MYW5ndWFnZU1hcmtkb3duXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9MYW5ndWFnZVB5dGhvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvTWFnbmlmeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvTWFnbmlmeU1pbnVzT3V0bGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvTWFnbmlmeVBsdXNPdXRsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9NYWduaWZ5U2NhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvUGVuY2lsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9QbGF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9QbHVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9SZWZyZXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9SZXNpemVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL1JvYm90SW5kdXN0cmlhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvUm90YXRlTGVmdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvUm90YXRlT3JiaXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL1NoYXJlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9TdG9wXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9Ub29sYm94T3V0bGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvVG95QnJpY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL1RyYW5zbGF0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvVHVuZVZlcnRpY2FsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9VcGxvYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL1ZpZXdDb21wYWN0T3V0bGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvV2lkZ2V0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhzZWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGVlcmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBvbHktZGVjb21wXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByZXR0eS1lcnJvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJjLXRyZWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYWNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW50bFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1bml2ZXJzYWwtcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYnJvYi9zcmMvL0lucHV0Q29udHJvbGxlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWJyb2Ivc3JjL0F4ZXNIZWxwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2Vicm9iL3NyYy9BeGVzSGVscGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYnJvYi9zcmMvSW5wdXRDb250cm9sbGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYnJvYi9zcmMvcm9ib3QvSm9pbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2Vicm9iL3NyYy9yb2JvdC9NdWx0aVJvYm90SGFuZGxlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWJyb2Ivc3JjL3JvYm90L1JvYm90XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYnJvYi9zcmMvcm9ib3QvUm9ib3QuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2Vicm9iL3NyYy90ZXN0L2RhdGFcIik7Il0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzd3QkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQTNCQTtBQUNBO0FBREE7QUFDQTtBQTRCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxR0E7QUFFQTtBQUVBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7QUNuSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFvQkE7QUFDQTtBQUNBO0FBTUE7QUFHQTtBQUNBO0FBTUE7QUFHQTtBQUNBO0FBTUE7QUFHQTtBQUNBOzs7Ozs7OztBQ3BHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQTNCQTtBQTZCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7QUNsS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBREE7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFFQTtBQUVBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN2RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BOzs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQUlBOzs7Ozs7OztBQ0xBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFWQTtBQURBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBaENBO0FBd0NBOzs7Ozs7OztBQzFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQVBBO0FBU0E7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFWQTs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBU0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBdEJBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQXNCQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFDQTtBQUNBOzs7Ozs7OztBQ3RCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0EsdVFBQUE7QUFGQTtBQUtBO0FBQ0Esa1FBQUE7QUFGQTtBQUtBO0FBQ0EsOFFBQUE7QUFGQTtBQUtBO0FBQ0Esd1FBQUE7QUFGQTtBQUtBO0FBQ0EsaVJBQUE7QUFGQTtBQUtBO0FBQ0EsK1JBQUE7QUFGQTtBQUtBO0FBQ0EsOFFBQUE7QUFGQTtBQUtBO0FBQ0Esd1FBQUE7QUFGQTtBQUtBO0FBQ0EsOFFBQUE7QUFGQTtBQUtBO0FBQ0Esd1FBQUE7QUFGQTtBQUtBO0FBQ0Esb1JBQUE7QUFGQTtBQUtBO0FBQ0EsMlFBQUE7QUFGQTtBQU1BO0FBQ0E7QUFDQSxvUkFBQTtBQUZBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXZFQTtBQUNBO0FBeUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFhQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBL0RBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBK0RBOzs7Ozs7Ozs7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLGFBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUdBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBbkJBO0FBN0JBOzs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBOzs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBTkE7Ozs7Ozs7O0FDcEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBVkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUVBO0FBR0E7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZGQTtBQTlCQTtBQTVFQTtBQXFNQTs7Ozs7Ozs7QUM3TUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFmQTtBQWdCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBcENBO0FBakJBO0FBekJBO0FBa0ZBOzs7Ozs7OztBQzFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQSxhQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQWhCQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBMUJBO0FBOEJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBSkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFlQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBOzs7Ozs7OztBQ25DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFFQTs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQUhBO0FBV0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFNQTs7Ozs7Ozs7QUNYQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=