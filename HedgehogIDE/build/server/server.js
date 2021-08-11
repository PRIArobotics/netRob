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
/******/ 	var hotCurrentHash = "4dd8b74d3fc886d2ef02";
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
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\nhtml {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  padding: 0 32px;\n  padding: 0 2rem;\n  height: 100%;\n  font-family: sans-serif;\n  text-align: center;\n  color: #888;\n}\n\nbody {\n  margin: 0;\n}\n\nh1 {\n  font-weight: 400;\n  color: #555;\n}\n\npre {\n  white-space: pre-wrap;\n  text-align: left;\n}\n", "", {"version":3,"sources":["/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/routes/error/ErrorPage.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,qBAAqB;EACrB,cAAc;EACd,uBAAuB;MACnB,oBAAoB;EACxB,sBAAsB;MAClB,wBAAwB;EAC5B,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;EACb,wBAAwB;EACxB,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,UAAU;CACX;;AAED;EACE,iBAAiB;EACjB,YAAY;CACb;;AAED;EACE,sBAAsB;EACtB,iBAAiB;CAClB","file":"ErrorPage.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\nhtml {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  padding: 0 32px;\n  padding: 0 2rem;\n  height: 100%;\n  font-family: sans-serif;\n  text-align: center;\n  color: #888;\n}\n\nbody {\n  margin: 0;\n}\n\nh1 {\n  font-weight: 400;\n  color: #555;\n}\n\npre {\n  white-space: pre-wrap;\n  text-align: left;\n}\n"],"sourceRoot":""}]);

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/components/App.js";

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/components/locale/index.js";

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/components/users/AuthProvider.js";



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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/routes/error/ErrorPage.js";

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/routes/error/index.js";

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/server/Html.js";

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
    _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/server/index.js";

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/server/renderExecutor.js";



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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/server/renderHtml.js";

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

module.exports = {"app.auth.password":"Passwort","app.auth.username":"Benutzername","app.dialog.cancel":"Abbrechen","app.dialog.ok":"OK","app.exercises.clone_exercise_dialog.description":"Bitte gib den Namen für das neue Projekt ein, um an Aufgabe \"{name}\" zu arbeiten.","app.exercises.clone_exercise_dialog.new_name_label":"Projektname","app.exercises.clone_exercise_dialog.title":"Neues Projekt anlegen","app.exercises.clone_exercise_tooltip":"Neues Projekt anlegen um an Aufgabe \"{name}\" zu arbeiten","app.exercises.create_exercise_dialog.description":"Projekt \"{name}\" als Aufgabe hochladen?","app.exercises.create_exercise_dialog.title":"Neue Aufgabe anlegen","app.exercises.delete_exercise_dialog.description":"Soll die Aufgabe \"{name}\" gelöscht werden?","app.exercises.delete_exercise_dialog.title":"Löschen bestätigen","app.exercises.delete_exercise_tooltip":"Aufgabe \"{name}\" löschen","app.exercises.edit_exercise_tooltip":"Aufgabe \"{name}\" bearbeiten","app.exercises.list_title":"Aufgaben","app.exercises.open_associated_project_menu_item":"Projekt \"{name}\" öffnen","app.exercises.open_associated_project_menu_tooltip":"Bestehendes Projekt öffnen um an Aufgabe \"{exercise}\" zu arbeiten","app.exercises.open_associated_project_tooltip":"Projekt \"{name}\" öffnen um an Aufgabe \"{exercise}\" zu arbeiten","app.exercises.refresh_exercise_list_tooltip":"Aufgabenliste aktualisieren","app.exercises.secondary_text":"Schwierigkeitsgrad: {level}","app.exercises.upload_exercise_tooltip":"Projekt \"{name}\" als Aufgabe hochladen","app.footer.home":"Home","app.header.home_label":"Home","app.header.home_logo_alt":"Hedgehog Logo","app.header.my_account_tooltip":"Mein Konto","app.header.select_language_tooltip":"Sprache wählen","app.header.title":"Hedgehog IDE","app.home.create":"Erstelle dein erstes Projekt","app.home.description":"Lerne mit der Hedgehog IDE programmieren, ohne Anmeldung!","app.home.learn":"Oder erfahre mehr über die ersten Schritte","app.home.welcome":"Willkommen in der Hedgehog IDE","app.ide.create_file_dialog.description":"Bitte gib den Namen für {type, select, FILE {die neue Datei} DIRECTORY {den neuen Ordner}} ein.","app.ide.create_file_dialog.title":"{type, select, FILE {Neue Datei} DIRECTORY {Neuen Ordner}} anlegen","app.ide.delete_file_dialog.description":"Willst du {type, select, FILE {die Datei} DIRECTORY {den Ordner}} \"{name}\" wirklich löschen?","app.ide.delete_file_dialog.title":"Löschen bestätigen","app.ide.file_menu.create_assets_directory":"Assets-Ordner anlegen","app.ide.file_menu.create_blockly_file":"Neue Blockly-Datei","app.ide.file_menu.create_folder":"Neuer Ordner","app.ide.file_menu.create_js_file":"Neue Javascript-Datei","app.ide.file_menu.create_layout_configuration":"Layout-Konfiguration anlegen/aktualisieren","app.ide.file_menu.create_markdown_file":"Neue Markdown-Datei","app.ide.file_menu.create_plugins_directory":"Plugin-Ordner anlegen","app.ide.file_menu.create_simulator_configuration":"Simulator-Konfiguration anlegen","app.ide.file_menu.create_toolbox_configuration":"Toolbox-Konfiguration anlegen","app.ide.file_menu.delete":"Löschen","app.ide.file_menu.download":"Herunterladen","app.ide.file_menu.rename":"Umbenennen","app.ide.file_menu.upload":"Hochladen","app.ide.rename_file_dialog.description":"Bitte gib einen neuen Namen für {type, select, FILE {die Datei} DIRECTORY {den Ordner}} ein.","app.ide.rename_file_dialog.title":"{type, select, FILE {Datei} DIRECTORY {Ordner}} umbenennen","app.ide.toolbar.console_tooltip":"Konsole","app.ide.toolbar.project_settings.create_metadata":"Metadaten-Ordner anlegen","app.ide.toolbar.project_settings.show_hide_metadata":"Metadaten {action, select, SHOW {anzeigen} HIDE {verbergen}}","app.ide.toolbar.project_settings_tooltip":"Projekteinstellungen","app.ide.toolbar.restore_layout_tooltip":"Layout wiederherstellen","app.ide.toolbar.simulator_tooltip":"Simulator","app.login":"Einloggen","app.login.failed":"Einloggen Fehlgeschlagen","app.logout":"Ausloggen","app.projects.create_project_dialog.description":"Bitte gib den Namen für das neue Projekt ein.","app.projects.create_project_dialog.new_name_label":"Projektname","app.projects.create_project_dialog.title":"Neues Projekt anlegen","app.projects.create_project_tooltip":"Neues Projekt","app.projects.delete_project_dialog.description":"Willst du das Projekt \"{name}\" wirklich löschen?","app.projects.delete_project_dialog.title":"Löschen bestätigen","app.projects.delete_project_tooltip":"Projekt \"{name}\" löschen","app.projects.list_title":"Projektübersicht","app.projects.refresh_project_list_tooltip":"Projektübersicht aktualisieren","app.projects.rename_project_dialog.description":"Bitte gib einen neuen Namen für das Projekt ein.","app.projects.rename_project_dialog.new_name_label":"Projektname","app.projects.rename_project_dialog.title":"Projekt umbenennen","app.projects.rename_project_tooltip":"Projekt \"{name}\" umbenennen","app.sidebar.contest_tooltip":"Wettbewerb","app.sidebar.help_tooltip":"Hilfe"};

/***/ }),

/***/ "./src/translations/locales/en.json":
/***/ (function(module) {

module.exports = {"app.auth.password":"Password","app.auth.username":"Username","app.dialog.cancel":"Cancel","app.dialog.ok":"OK","app.exercises.clone_exercise_dialog.description":"Please enter the project name for working on exercise \"{name}\".","app.exercises.clone_exercise_dialog.new_name_label":"Project Name","app.exercises.clone_exercise_dialog.title":"Create new project","app.exercises.clone_exercise_tooltip":"Create new project to work on exercise \"{name}\"","app.exercises.create_exercise_dialog.description":"Do you want to upload project \"{name}\" as an exercise?","app.exercises.create_exercise_dialog.title":"Create new exercise","app.exercises.delete_exercise_dialog.description":"Are you sure you want to delete exercise \"{name}\"?","app.exercises.delete_exercise_dialog.title":"Confirm deletion","app.exercises.delete_exercise_tooltip":"Delete Exercise \"{name}\"","app.exercises.edit_exercise_tooltip":"Edit Exercise \"{name}\"","app.exercises.list_title":"Exercises","app.exercises.open_associated_project_menu_item":"Open project \"{name}\"","app.exercises.open_associated_project_menu_tooltip":"Open an existing project to work on exercise \"{exercise}\"","app.exercises.open_associated_project_tooltip":"Open project \"{name}\" to work on exercise \"{exercise}\"","app.exercises.refresh_exercise_list_tooltip":"Refresh Exercise List","app.exercises.secondary_text":"Difficulty: {level}","app.exercises.upload_exercise_tooltip":"Upload project \"{name}\" as an exercise","app.footer.home":"Home","app.header.home_label":"Home","app.header.home_logo_alt":"Hedgehog Logo","app.header.my_account_tooltip":"My Account","app.header.select_language_tooltip":"Select Language","app.header.title":"Hedgehog IDE","app.home.create":"Create your first project","app.home.description":"Learn coding using the Hedgehog IDE without signing up!","app.home.learn":"Or learn how to get started","app.home.welcome":"Welcome to Hedgehog IDE","app.ide.create_file_dialog.description":"Please enter the new {type, select, FILE {file's} DIRECTORY {folder's}} name.","app.ide.create_file_dialog.title":"Create new {type, select, FILE {file} DIRECTORY {folder}}","app.ide.delete_file_dialog.description":"Are you sure you want to delete {type, select, FILE {file} DIRECTORY {folder}} \"{name}\"?","app.ide.delete_file_dialog.title":"Confirm deletion","app.ide.file_menu.create_assets_directory":"Create Assets Folder","app.ide.file_menu.create_blockly_file":"New Blockly File","app.ide.file_menu.create_folder":"New Folder","app.ide.file_menu.create_js_file":"New Javascript File","app.ide.file_menu.create_layout_configuration":"Create/Update Workspace Layout Configuration","app.ide.file_menu.create_markdown_file":"New Markdown File","app.ide.file_menu.create_plugins_directory":"Create Plugin Folder","app.ide.file_menu.create_simulator_configuration":"Create Simulator Configuration","app.ide.file_menu.create_toolbox_configuration":"Create Toolbox Configuration","app.ide.file_menu.delete":"Delete","app.ide.file_menu.download":"Download","app.ide.file_menu.rename":"Rename","app.ide.file_menu.upload":"Upload","app.ide.rename_file_dialog.description":"Please enter the {type, select, FILE {file's} DIRECTORY {folder's}} new name.","app.ide.rename_file_dialog.title":"Rename {type, select, FILE {file} DIRECTORY {folder}}","app.ide.toolbar.console_tooltip":"Console","app.ide.toolbar.project_settings.create_metadata":"Create Metadata folder","app.ide.toolbar.project_settings.show_hide_metadata":"{action, select, SHOW {Show} HIDE {Hide}} Metadata","app.ide.toolbar.project_settings_tooltip":"Project settings","app.ide.toolbar.restore_layout_tooltip":"Restore layout","app.ide.toolbar.simulator_tooltip":"Simulator","app.login":"Log In","app.login.failed":"Log In Failed","app.logout":"Log Out","app.projects.create_project_dialog.description":"Please enter the new project's name.","app.projects.create_project_dialog.new_name_label":"Project Name","app.projects.create_project_dialog.title":"Create new project","app.projects.create_project_tooltip":"Create Project","app.projects.delete_project_dialog.description":"Are you sure you want to delete project \"{name}\"?","app.projects.delete_project_dialog.title":"Confirm deletion","app.projects.delete_project_tooltip":"Delete Project \"{name}\"","app.projects.list_title":"Your Projects","app.projects.refresh_project_list_tooltip":"Refresh Project List","app.projects.rename_project_dialog.description":"Please enter the project's new name.","app.projects.rename_project_dialog.new_name_label":"Project Name","app.projects.rename_project_dialog.title":"Rename project","app.projects.rename_project_tooltip":"Rename Project \"{name}\"","app.sidebar.contest_tooltip":"Contest","app.sidebar.help_tooltip":"Help"};

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

/***/ "@babylonjs/core/Loading/sceneLoader":
/***/ (function(module, exports) {

module.exports = require("@babylonjs/core/Loading/sceneLoader");

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

/***/ "eulerutil":
/***/ (function(module, exports) {

module.exports = require("eulerutil");

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

/***/ "webrob/module.mjs":
/***/ (function(module, exports) {

module.exports = require("webrob/module.mjs");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlcyI6WyIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvd2VicGFjay9ib290c3RyYXAiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCIuL2NodW5rLW1hbmlmZXN0Lmpzb25cIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvcm91dGVzL2Vycm9yL0Vycm9yUGFnZS5jc3MiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9pbnNlcnRDc3MuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9jb21wb25lbnRzL2xvY2FsZS9pbmRleC5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvY29tcG9uZW50cy9taXNjL2hvb2tzL2Fwb2xsby5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvY29tcG9uZW50cy9taXNjL2hvb2tzL2FzeW5jX3N0YXRlLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9jb21wb25lbnRzL21pc2MvaG9va3MvaW5kZXguanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL2NvbXBvbmVudHMvbWlzYy9ob29rcy9sb2NhbFN0b3JhZ2UuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL2NvbXBvbmVudHMvdGhlbWUuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL2NvbXBvbmVudHMvdXNlcnMvQXV0aFByb3ZpZGVyLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9jb3JlL2NyZWF0ZUFwb2xsb0NsaWVudC9jcmVhdGVBcG9sbG9DbGllbnQuc2VydmVyLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9jb3JlL2NyZWF0ZUFwb2xsb0NsaWVudC9jcmVhdGVDYWNoZS5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvY29yZS9jcmVhdGVJbml0aWFsU3RhdGUuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL2NvcmUvZ3JhcGhxbC9Pbk1lbW9yeVN0YXRlL25ldHdvcmtTdGF0dXMuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL2NvcmUvZ3JhcGhxbC9Pbk1lbW9yeVN0YXRlL3NjaGVtYS5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvY29yZS9ncmFwaHFsL2dyYXBocWxEZWYuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL2NvcmUvZ3JhcGhxbC9zY2hlbWEuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL2NvcmUvcm91dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvZXJyb3IvRXJyb3JQYWdlLmNzcz8xZjJkIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9yb3V0ZXMvZXJyb3IvRXJyb3JQYWdlLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9yb3V0ZXMvZXJyb3IvaW5kZXguanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL3JvdXRlcy9pbmRleC5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvc2VydmVyL0h0bWwuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL3NlcnZlci9jb25maWcuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL3NlcnZlci9ncmFwaHFsL0F1dGhEaXJlY3RpdmUuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL3NlcnZlci9ncmFwaHFsL3NjaGVtYS5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvc2VydmVyL2dyYXBocWwvc2NoZW1hL1Byb2plY3QuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL3NlcnZlci9ncmFwaHFsL3NjaGVtYS9Vc2VyLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9zZXJ2ZXIvZ3JhcGhxbC9zY2hlbWEvaW5kZXguanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL3NlcnZlci9pbmRleC5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvc2VydmVyL2xvYWRlcnMuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL3NlcnZlci9tb25nb2RiL2RiLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9zZXJ2ZXIvbW9uZ29kYi9pbmRleC5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvc2VydmVyL21vbmdvZGIvc2NoZW1hL1Byb2plY3QuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL3NlcnZlci9tb25nb2RiL3NjaGVtYS9Vc2VyLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9zZXJ2ZXIvbW9uZ29kYi9zY2hlbWEvdXRpbHMuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL3NlcnZlci9yZW5kZXJFeGVjdXRvci5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvc2VydmVyL3JlbmRlckh0bWwuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL3RyYW5zbGF0aW9ucy9pbmRleC5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3Qtc3NyXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJAYmFiZWwvcG9seWZpbGxcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBiYWJ5bG9uanMvY29yZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiQGJhYnlsb25qcy9jb3JlL0xvYWRpbmcvc2NlbmVMb2FkZXJcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWRnZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1BdmF0YXJcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvblwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb25cIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9jb21tb25cIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2xhYi9BbGVydFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2xhYi9BbGVydFRpdGxlXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJAdWl3L3JlYWN0LW1kLWVkaXRvclwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC9leHQtbGFuZ3VhZ2VfdG9vbHNcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcImFjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvbW9kZS1qYXZhc2NyaXB0XCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJhY2UtYnVpbGRzL3NyYy1ub2NvbmZsaWN0L3RoZW1lLWdpdGh1YlwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiYWNlLWJ1aWxkcy93ZWJwYWNrLXJlc29sdmVyXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcImFwb2xsby1jbGllbnRcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcImFwb2xsby1saW5rXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1lcnJvclwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiYXBvbGxvLWxpbmstc2NoZW1hXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcImJhc2U2NC1qc1wiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiYmNyeXB0anNcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcImJsb2NrbHlcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcImJsb2NrbHkvYmxvY2tzXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJibG9ja2x5L2NvcmVcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcImJsb2NrbHkvamF2YXNjcmlwdFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiYmxvY2tseS9tc2cvZGVcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcImJsb2NrbHkvbXNnL2VuXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJibG9ja2x5L3B5dGhvblwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcImNvb2tpZS1wYXJzZXJcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcImV1bGVydXRpbFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiZXhwcmVzcy1qd3RcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcImZpbGVyXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJmbGV4bGF5b3V0LXJlYWN0XCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJncmFwaHFsXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJncmFwaHFsLXN1YnNjcmlwdGlvbnNcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJncmFwaHFsLXRvb2xzXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJoaXN0b3J5XCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJodHRwXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJpc29tb3JwaGljLXN0eWxlLWxvYWRlci9TdHlsZUNvbnRleHRcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcImlzb21vcnBoaWMtc3R5bGUtbG9hZGVyL3VzZVN0eWxlc1wiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvd2l0aFN0eWxlc1wiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJqc3N0b3JlXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJqc3N0b3JlL2Rpc3QvanNzdG9yZS53b3JrZXJcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcImxvZGFzaFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibG9kYXNoLm1lcmdlXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtYXRlcmlhbC11aS1wb3B1cC1zdGF0ZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWF0ZXJpYWwtdWktcG9wdXAtc3RhdGUvaG9va3NcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1hdHRlci1qc1wiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL0FjY291bnRDaXJjbGVcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9BcnJvd0FsbFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL0F4aXNBcnJvd1wiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL0NoZXZyb25MZWZ0XCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvQ2hldnJvblJpZ2h0XCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvQ2xvdWRVcGxvYWRcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9Db2dzXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvQ29uc29sZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL0RhdGFiYXNlXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvRGVsZXRlXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvRG90c1ZlcnRpY2FsXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvRG93bmxvYWRcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9FeGNsYW1hdGlvblRoaWNrXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvRXhpdFRvQXBwXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvRmlsZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL0ZpbGVQZGZcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9Gb2xkZXJcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9Gb2xkZXJJbWFnZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL0ZvbGRlck9wZW5cIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9Gb3J1bVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL0hlbHBDaXJjbGVPdXRsaW5lXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvSW1hZ2VcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9MYW5ndWFnZUphdmFzY3JpcHRcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9MYW5ndWFnZU1hcmtkb3duXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvTGFuZ3VhZ2VQeXRob25cIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9NYWduaWZ5XCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvTWFnbmlmeU1pbnVzT3V0bGluZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL01hZ25pZnlQbHVzT3V0bGluZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL01hZ25pZnlTY2FuXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvUGVuY2lsXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvUGxheVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL1BsdXNcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9SZWZyZXNoXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvUmVzaXplXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvUm9ib3RJbmR1c3RyaWFsXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvUm90YXRlTGVmdFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL1JvdGF0ZU9yYml0XCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvU2hhcmVcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9TdG9wXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvVG9vbGJveE91dGxpbmVcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9Ub3lCcmlja1wiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL1RyYW5zbGF0ZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL1R1bmVWZXJ0aWNhbFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL1VwbG9hZFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL1ZpZXdDb21wYWN0T3V0bGluZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL1dpZGdldHNcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJwYXRoXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJwYXRoc2VnXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJwZWVyanNcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcInBvbHktZGVjb21wXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJwcmV0dHktZXJyb3JcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcInJjLXRyZWVcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcInJlYWN0XCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJyZWFjdC1hY2VcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcInJlYWN0LWludGxcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJ1bml2ZXJzYWwtcm91dGVyXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJ3ZWJyb2IvbW9kdWxlLm1qc1wiIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuL1wiICsgXCJ1cGRhdGVzL1wiICsgY2h1bmtJZCArIFwiLlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzXCIpO1xuIFx0XHRob3RBZGRVcGRhdGVDaHVuayhjaHVuay5pZCwgY2h1bmsubW9kdWxlcyk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdCgpIHtcbiBcdFx0dHJ5IHtcbiBcdFx0XHR2YXIgdXBkYXRlID0gcmVxdWlyZShcIi4vXCIgKyBcInVwZGF0ZXMvXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNvblwiKTtcbiBcdFx0fSBjYXRjaCAoZSkge1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVwZGF0ZSk7XG4gXHR9XG5cbiBcdC8vZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0fVxuXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50SGFzaCA9IFwiNGRkOGI3NGQzZmM4ODZkMmVmMDJcIjtcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdGlmICghbWUpIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gXHRcdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcbiBcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG4gXHRcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG4gXHRcdFx0XHRcdFx0cmVxdWVzdCArXG4gXHRcdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0KTtcbiBcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHJlcXVlc3QpO1xuIFx0XHR9O1xuIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX19bbmFtZV07XG4gXHRcdFx0XHR9LFxuIFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuIFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdID0gdmFsdWU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fTtcbiBcdFx0Zm9yICh2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9fd2VicGFja19yZXF1aXJlX18sIG5hbWUpICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcImVcIiAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJ0XCJcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJyZWFkeVwiKSBob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdGZpbmlzaENodW5rTG9hZGluZygpO1xuIFx0XHRcdFx0dGhyb3cgZXJyO1xuIFx0XHRcdH0pO1xuXG4gXHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xuIFx0XHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIpIHtcbiBcdFx0XHRcdFx0aWYgKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGZuLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRcdGlmIChtb2RlICYgMSkgdmFsdWUgPSBmbih2YWx1ZSk7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udCh2YWx1ZSwgbW9kZSAmIH4xKTtcbiBcdFx0fTtcbiBcdFx0cmV0dXJuIGZuO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgaG90ID0ge1xuIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcbiBcdFx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG4gXHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG4gXHRcdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG4gXHRcdFx0X21haW46IGhvdEN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXG5cbiBcdFx0XHQvLyBNb2R1bGUgQVBJXG4gXHRcdFx0YWN0aXZlOiB0cnVlLFxuIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuIFx0XHR2YXIgaXNOdW1iZXIgPSAraWQgKyBcIlwiID09PSBpZDtcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG4gXHRcdH1cbiBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcbiBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XG4gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcbiBcdFx0XHR9XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcblxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRmb3IodmFyIGNodW5rSWQgaW4gaW5zdGFsbGVkQ2h1bmtzKVxuIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdHtcbiBcdFx0XHRcdC8qZ2xvYmFscyBjaHVua0lkICovXG4gXHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aG90U3RhdHVzID09PSBcInByZXBhcmVcIiAmJlxuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJlxuIFx0XHRcdFx0aG90V2FpdGluZ0ZpbGVzID09PSAwXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBwcm9taXNlO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdIHx8ICFob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSlcbiBcdFx0XHRyZXR1cm47XG4gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XG4gXHRcdGZvciAodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZiAoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xuIFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcbiBcdFx0XHRob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHR2YXIgZGVmZXJyZWQgPSBob3REZWZlcnJlZDtcbiBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xuIFx0XHRpZiAoIWRlZmVycmVkKSByZXR1cm47XG4gXHRcdGlmIChob3RBcHBseU9uVXBkYXRlKSB7XG4gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cbiBcdFx0XHQvLyBhdm9pZCB0cmlnZ2VyaW5nIHVuY2F1Z2h0IGV4Y2VwdGlvbiB3YXJuaW5nIGluIENocm9tZS5cbiBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XG4gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKClcbiBcdFx0XHRcdC50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XG4gXHRcdFx0XHR9KVxuIFx0XHRcdFx0LnRoZW4oXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKHJlc3VsdCkge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0ZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdCk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaCh0b01vZHVsZUlkKGlkKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHRcdGRlZmVycmVkLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwicmVhZHlcIilcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG4gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gXHRcdHZhciBjYjtcbiBcdFx0dmFyIGk7XG4gXHRcdHZhciBqO1xuIFx0XHR2YXIgbW9kdWxlO1xuIFx0XHR2YXIgbW9kdWxlSWQ7XG5cbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZih1cGRhdGVNb2R1bGVJZCkge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCkubWFwKGZ1bmN0aW9uKGlkKSB7XG4gXHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRjaGFpbjogW2lkXSxcbiBcdFx0XHRcdFx0aWQ6IGlkXG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG4gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG4gXHRcdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmICghbW9kdWxlIHx8IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCkgY29udGludWU7XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gaW5zdGFsbGVkTW9kdWxlc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG5cbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuIFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG4gXHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcbiBcdFx0XHR9O1xuIFx0XHR9XG5cbiBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuIFx0XHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuIFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG4gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuIFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cbiBcdFx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSgpIHtcbiBcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuIFx0XHRcdCk7XG4gXHRcdH07XG5cbiBcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0bW9kdWxlSWQgPSB0b01vZHVsZUlkKGlkKTtcbiBcdFx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cbiBcdFx0XHRcdHZhciByZXN1bHQ7XG4gXHRcdFx0XHRpZiAoaG90VXBkYXRlW2lkXSkge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IGlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuIFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcbiBcdFx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcbiBcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcbiBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XG4gXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0FwcGx5KSB7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcyxcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdFx0XHRcdClcbiBcdFx0XHRcdFx0XHQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG4gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdClcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcbiBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdFx0fSk7XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcbiBcdFx0T2JqZWN0LmtleXMoaG90QXZhaWxhYmxlRmlsZXNNYXApLmZvckVhY2goZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSA9PT0gZmFsc2UpIHtcbiBcdFx0XHRcdGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdH0pO1xuXG4gXHRcdHZhciBpZHg7XG4gXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuIFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG4gXHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG4gXHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuIFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuIFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0Y2IgPSBkaXNwb3NlSGFuZGxlcnNbal07XG4gXHRcdFx0XHRjYihkYXRhKTtcbiBcdFx0XHR9XG4gXHRcdFx0aG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdID0gZGF0YTtcblxuIFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG4gXHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuIFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuIFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcbiBcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgY2hpbGQgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZS5jaGlsZHJlbltqXV07XG4gXHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIHtcbiBcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuIFx0XHR2YXIgZGVwZW5kZW5jeTtcbiBcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuIFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuIFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm90IGluIFwiYXBwbHlcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuIFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XG5cbiBcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG4gXHRcdGZvciAobW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG4gXHRcdHZhciBlcnJvciA9IG51bGw7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXTtcbiBcdFx0XHRcdFx0XHRjYiA9IG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuIFx0XHRcdFx0XHRcdGlmIChjYikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGNiKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goY2IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XG4gXHRcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRcdGNiKG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcbiBcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XG4gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcbiBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuIFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnIyO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG4gXHRcdGlmIChlcnJvcikge1xuIFx0XHRcdGhvdFNldFN0YXR1cyhcImZhaWxcIik7XG4gXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiBcdFx0fVxuXG4gXHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJzZXJ2ZXJcIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aG90OiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpLFxuIFx0XHRcdHBhcmVudHM6IChob3RDdXJyZW50UGFyZW50c1RlbXAgPSBob3RDdXJyZW50UGFyZW50cywgaG90Q3VycmVudFBhcmVudHMgPSBbXSwgaG90Q3VycmVudFBhcmVudHNUZW1wKSxcbiBcdFx0XHRjaGlsZHJlbjogW11cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkpO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi9jaHVua3MvXCIgKyAoe1wiYWJvdXR+YWRtaW5+Y29udGFjdH5jb250ZXN0fmhlbHB+aWRlfmluZGV4ZWREQn5sb2dpbn5ub3QtZm91bmR+cHJpdmFjeX5yZWdpc3Rlcn53ZWJydGNcIjpcImFib3V0fmFkbWlufmNvbnRhY3R+Y29udGVzdH5oZWxwfmlkZX5pbmRleGVkREJ+bG9naW5+bm90LWZvdW5kfnByaXZhY3l+cmVnaXN0ZXJ+d2VicnRjXCIsXCJoZWxwXCI6XCJoZWxwXCIsXCJhYm91dFwiOlwiYWJvdXRcIixcImFkbWluXCI6XCJhZG1pblwiLFwiY29udGFjdFwiOlwiY29udGFjdFwiLFwiY29udGVzdFwiOlwiY29udGVzdFwiLFwiaWRlXCI6XCJpZGVcIixcImluZGV4ZWREQlwiOlwiaW5kZXhlZERCXCIsXCJsb2dpblwiOlwibG9naW5cIixcIm5vdC1mb3VuZFwiOlwibm90LWZvdW5kXCIsXCJwcml2YWN5XCI6XCJwcml2YWN5XCIsXCJyZWdpc3RlclwiOlwicmVnaXN0ZXJcIixcIndlYnJ0Y1wiOlwid2VicnRjXCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCIpO1xuIFx0XHRcdHZhciBtb3JlTW9kdWxlcyA9IGNodW5rLm1vZHVsZXMsIGNodW5rSWRzID0gY2h1bmsuaWRzO1xuIFx0XHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9hc3NldHMvXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBob3RDcmVhdGVSZXF1aXJlKDApKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9jaHVuay1tYW5pZmVzdC5qc29uXCIpOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMCAzMnB4O1xcbiAgcGFkZGluZzogMCAycmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzg4ODtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogIzU1NTtcXG59XFxuXFxucHJlIHtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL3JvdXRlcy9lcnJvci9FcnJvclBhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7O0dBT0c7O0FBRUg7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLHVCQUF1QjtNQUNuQixvQkFBb0I7RUFDeEIsc0JBQXNCO01BQ2xCLHdCQUF3QjtFQUM1QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLFVBQVU7Q0FDWDs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0NBQ2xCXCIsXCJmaWxlXCI6XCJFcnJvclBhZ2UuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuaHRtbCB7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDMycHg7XFxuICBwYWRkaW5nOiAwIDJyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjODg4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiAjNTU1O1xcbn1cXG5cXG5wcmUge1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIi8qISBJc29tb3JwaGljIFN0eWxlIExvYWRlciB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL2tyaWFzb2Z0L2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGluc2VydGVkID0ge307XG5cbmZ1bmN0aW9uIGI2NEVuY29kZVVuaWNvZGUoc3RyKSB7XG4gIHJldHVybiBidG9hKGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoLyUoWzAtOUEtRl17Mn0pL2csIGZ1bmN0aW9uIChtYXRjaCwgcDEpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShcIjB4XCIgKyBwMSk7XG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ3NzKGlkcykge1xuICBpZHMuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICBpZiAoLS1pbnNlcnRlZFtpZF0gPD0gMCkge1xuICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cbiAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRDc3Moc3R5bGVzLCBfdGVtcCkge1xuICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgX3JlZiRyZXBsYWNlID0gX3JlZi5yZXBsYWNlLFxuICAgICAgcmVwbGFjZSA9IF9yZWYkcmVwbGFjZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJHJlcGxhY2UsXG4gICAgICBfcmVmJHByZXBlbmQgPSBfcmVmLnByZXBlbmQsXG4gICAgICBwcmVwZW5kID0gX3JlZiRwcmVwZW5kID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkcHJlcGVuZCxcbiAgICAgIF9yZWYkcHJlZml4ID0gX3JlZi5wcmVmaXgsXG4gICAgICBwcmVmaXggPSBfcmVmJHByZWZpeCA9PT0gdm9pZCAwID8gJ3MnIDogX3JlZiRwcmVmaXg7XG5cbiAgdmFyIGlkcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIF9zdHlsZXMkaSA9IHN0eWxlc1tpXSxcbiAgICAgICAgbW9kdWxlSWQgPSBfc3R5bGVzJGlbMF0sXG4gICAgICAgIGNzcyA9IF9zdHlsZXMkaVsxXSxcbiAgICAgICAgbWVkaWEgPSBfc3R5bGVzJGlbMl0sXG4gICAgICAgIHNvdXJjZU1hcCA9IF9zdHlsZXMkaVszXTtcbiAgICB2YXIgaWQgPSBcIlwiICsgcHJlZml4ICsgbW9kdWxlSWQgKyBcIi1cIiArIGk7XG4gICAgaWRzLnB1c2goaWQpO1xuXG4gICAgaWYgKGluc2VydGVkW2lkXSkge1xuICAgICAgaWYgKCFyZXBsYWNlKSB7XG4gICAgICAgIGluc2VydGVkW2lkXSsrO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbnNlcnRlZFtpZF0gPSAxO1xuICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIHZhciBjcmVhdGUgPSBmYWxzZTtcblxuICAgIGlmICghZWxlbSkge1xuICAgICAgY3JlYXRlID0gdHJ1ZTtcbiAgICAgIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICAgIGVsZW0uaWQgPSBpZDtcblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY3NzVGV4dCA9IGNzcztcblxuICAgIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNzc1RleHQgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYjY0RW5jb2RlVW5pY29kZShKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSArIFwiKi9cIjtcbiAgICAgIGNzc1RleHQgKz0gXCJcXG4vKiMgc291cmNlVVJMPVwiICsgc291cmNlTWFwLmZpbGUgKyBcIj9cIiArIGlkICsgXCIqL1wiO1xuICAgIH1cblxuICAgIGlmICgndGV4dENvbnRlbnQnIGluIGVsZW0pIHtcbiAgICAgIGVsZW0udGV4dENvbnRlbnQgPSBjc3NUZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1RleHQ7XG4gICAgfVxuXG4gICAgaWYgKGNyZWF0ZSkge1xuICAgICAgaWYgKHByZXBlbmQpIHtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUoZWxlbSwgZG9jdW1lbnQuaGVhZC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbW92ZUNzcy5iaW5kKG51bGwsIGlkcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0Q3NzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5zZXJ0Q3NzLmpzLm1hcFxuIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgU3R5bGVDb250ZXh0IGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL1N0eWxlQ29udGV4dCc7XG5cbmltcG9ydCB0aGVtZSBmcm9tICcuL3RoZW1lJztcblxuaW1wb3J0IHsgTG9jYWxlUHJvdmlkZXIgfSBmcm9tICcuL2xvY2FsZSc7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICcuL3VzZXJzL0F1dGhQcm92aWRlcic7XG5cbi8vIFNpbmNlIHRoZSBjdXJyZW50IFJlYWN0IFN0YXJ0ZXIgS2l0IHVzZXMgb2xkZXIgUmVhY3QgQ29udGV4dCBBUEkgdGhhdCBjYW5ub3QgYmUgdHlwZWQsXG4vLyBoZXJlIHdlIGRlY2xhcmUgZHVwbGljYXRlIHR5cGUgaW5mb3JtYXRpb24uXG5cbnR5cGUgQ29udGV4dFR5cGUgPSB7fFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogT2JqZWN0LFxuICBjbGllbnQ6IE9iamVjdCxcbiAgbG9jYWxlczogc3RyaW5nW10sXG58fTtcblxudHlwZSBQcm9wcyA9IHt8XG4gIGNvbnRleHQ6IENvbnRleHRUeXBlLFxuICBpbnNlcnRDc3M6IEZ1bmN0aW9uLFxuICBjaGlsZHJlbjogUmVhY3QuTm9kZSxcbnx9O1xuXG5jb25zdCBDb250ZXh0UnVudGltZVR5cGUgPSB7XG4gIC8vIFVuaXZlcnNhbCBIVFRQIGNsaWVudFxuICBwYXRobmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBxdWVyeTogUHJvcFR5cGVzLm9iamVjdCxcbiAgLy8gQXBvbGxvIENsaWVudFxuICBjbGllbnQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLy8gTG9jYWxlXG4gIGxvY2FsZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLmlzUmVxdWlyZWQsXG59O1xuXG5jb25zdCBQcm9wVHlwZXNSdW50aW1lVHlwZSA9IHtcbiAgLy8gRW5hYmxlcyBjcml0aWNhbCBwYXRoIENTUyByZW5kZXJpbmdcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2tyaWFzb2Z0L2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyXG4gIGluc2VydENzczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY29udGV4dDogUHJvcFR5cGVzLnNoYXBlKENvbnRleHRSdW50aW1lVHlwZSkuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsXG59O1xuXG4vKipcbiAqIFRoZSB0b3AtbGV2ZWwgUmVhY3QgY29tcG9uZW50IHNldHRpbmcgY29udGV4dCAoZ2xvYmFsKSB2YXJpYWJsZXNcbiAqIHRoYXQgY2FuIGJlIGFjY2Vzc2VkIGZyb20gYWxsIHRoZSBjaGlsZCBjb21wb25lbnRzLlxuICpcbiAqIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvY29udGV4dC5odG1sXG4gKlxuICogVXNhZ2UgZXhhbXBsZTpcbiAqXG4gKiAgIGNvbnN0IGNvbnRleHQgPSB7XG4gKiAgICAgaGlzdG9yeTogY3JlYXRlQnJvd3Nlckhpc3RvcnkoKSxcbiAqICAgICBzdG9yZTogY3JlYXRlU3RvcmUoKSxcbiAqICAgfTtcbiAqXG4gKiAgIFJlYWN0RE9NLnJlbmRlcihcbiAqICAgICA8QXBwIGNvbnRleHQ9e2NvbnRleHR9PlxuICogICAgICAgPExheW91dD5cbiAqICAgICAgICAgPExhbmRpbmdQYWdlIC8+XG4gKiAgICAgICA8L0xheW91dD5cbiAqICAgICA8L0FwcD4sXG4gKiAgICAgY29udGFpbmVyLFxuICogICApO1xuICovXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBQcm9wVHlwZXNSdW50aW1lVHlwZTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY29udGV4dDogeyBjbGllbnQsIGxvY2FsZXMgfSxcbiAgICAgIGluc2VydENzcyxcbiAgICAgIGNoaWxkcmVuLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgLy8gTk9URTogSWYgeW91IG5lZWQgdG8gYWRkIG9yIG1vZGlmeSBoZWFkZXIsIGZvb3RlciBldGMuIG9mIHRoZSBhcHAsXG4gICAgLy8gcGxlYXNlIGRvIHRoYXQgaW5zaWRlIHRoZSBMYXlvdXQgY29tcG9uZW50LlxuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGluc2VydENzcyB9fT5cbiAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgPExvY2FsZVByb3ZpZGVyIHVzZXJBZ2VudExvY2FsZXM9e2xvY2FsZXN9PlxuICAgICAgICAgICAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgPC9BdXRoUHJvdmlkZXI+XG4gICAgICAgICAgICA8L0xvY2FsZVByb3ZpZGVyPlxuICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICAgIDwvU3R5bGVDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBJbnRsUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1pbnRsJztcblxuaW1wb3J0IHsgdHlwZSBMb2NhbGVNYXAsIE1FU1NBR0VTLCBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL3RyYW5zbGF0aW9ucyc7XG5cbnR5cGUgTG9jYWxlID0ge3xcbiAgLy8gdGhlIHByZWZlcnJlZCBsb2NhbGUgc3RvcmVkIGluIHRoZSBIZWRnZWhvZyBJREVcbiAgcHJlZmVycmVkTG9jYWxlOiBzdHJpbmcgfCBudWxsLFxuICBzZXRQcmVmZXJyZWRMb2NhbGU6IChzdHJpbmcgfCBudWxsKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPixcbiAgLy8gYWxsIHByZWZlcnJlZCBsb2NhbGVzOiB0aGUgb25lIGV4cGxpY2l0bHkgc2V0IGJ5IHRoZSB1c2VyIGlmIG5vdCBudWxsLFxuICAvLyBmb2xsb3dlZCBieSB0aGUgb25lcyBmcm9tIHRoZSBlbnZpcm9ubWVudCwgZS5nLiB1c2VyIGFnZW50IGluZm9ybWF0aW9uXG4gIHByZWZlcnJlZExvY2FsZXM6IHN0cmluZ1tdLFxufH07XG5cbmV4cG9ydCBjb25zdCBMb2NhbGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxMb2NhbGU+KHtcbiAgcHJlZmVycmVkTG9jYWxlOiBudWxsLFxuICBwcmVmZXJyZWRMb2NhbGVzOiBbXSxcbiAgc2V0UHJlZmVycmVkTG9jYWxlOiAoKSA9PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRQcmVmZXJyZWRMb2NhbGUgbm90IHNwZWNpZmllZCcpO1xuICB9LFxufSk7XG5cbnR5cGUgTG9jYWxlUHJvdmlkZXJQcm9wVHlwZXMgPSB7fFxuICB1c2VyQWdlbnRMb2NhbGVzOiBzdHJpbmdbXSxcbiAgY2hpbGRyZW46IFJlYWN0Lk5vZGUsXG58fTtcblxuLyoqXG4gKiBgTG9jYWxlUHJvdmlkZXJgIHRha2VzIGFuIGFycmF5IG9mIGxvY2FsZXMgdGhhdCB0aGUgdXNlciBhZ2VudCBpbmRpY2F0ZXMgYXJlXG4gKiBwcmVmZXJyZWQgYnkgdGhlIHVzZXIsIGFuZCBhZGRzIHRoZSBvcHRpb24gZm9yIHRoZSB1c2VyIHRvIHNwZWNpZnkgdGhlaXIgb3duXG4gKiBwcmVmZXJlbmNlLlxuICpcbiAqIENvZGUgbWFuaXB1bGF0aW5nIHRoZSBleHBsaWNpdGx5IGdpdmVuIHByZWZlcmVuY2Ugc2hvdWxkIHVzZVxuICogYHByZWZlcnJlZExvY2FsZWAgYW5kIGBzZXRQcmVmZXJyZWRMb2NhbGVgOyBjb2RlIHRyeWluZyB0byBmaW5kIHRoZSBiZXN0XG4gKiBzdXBwb3J0ZWQgbG9jYWxlIHNob3VsZCB1c2UgYHByZWZlcnJlZExvY2FsZXNgLCB3aGljaCBwcmVwZW5kcyB0aGUgc3RvcmVkXG4gKiBwcmVmZXJlbmNlIChpZiBhbnkpIHRvIHRoZSB1c2VyIGFnZW50IGxvY2FsZXMsIGFuZCBjaG9vc2UgdGhlIGZpcnN0XG4gKiBzdXBwb3J0ZWQgbG9jYWxlIGZyb20gdGhhdCBsaXN0LlxuICpcbiAqIE90aGVyIHRoYW4gcHJvdmlkaW5nIHRoZSBwcmVmZXJlbmNlcywgYExvY2FsZVByb3ZpZGVyYCBhbHNvIGluc3RhbnRpYXRlcyBhXG4gKiBgSW50bFByb3ZpZGVyYCB3aXRoIGFuIGFwcHJvcHJpYXRlIGxvY2FsZSwgc28gdGhlIGBjaGlsZHJlbmAgY2FuIHVzZSBhbGwgb2ZcbiAqIHRoZSBgcmVhY3QtaW50bGAgZmFjaWxpdGllcy4gVGhlIGxvY2FsZSwgdXNlZCBlLmcuIGZvciBkYXRlIGFuZCBudW1iZXJcbiAqIGZvcm1hdHRpbmcsIGlzIGNob3NlbiBhcyBgcHJlZmVycmVkTG9jYWxlc1swXSA/PyBlbmA7IHRoZSB0cmFuc2xhdGlvblxuICogbWVzc2FnZXMgYXJlIGNob3NlbiB1c2luZyBgZ2V0VHJhbnNsYXRpb25zYCwgd2l0aCBgZW5gIGFzIHRoZSBmYWxsYmFja1xuICogbWVzc2FnZSBrZXkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBMb2NhbGVQcm92aWRlcih7IHVzZXJBZ2VudExvY2FsZXMsIGNoaWxkcmVuIH06IExvY2FsZVByb3ZpZGVyUHJvcFR5cGVzKSB7XG4gIGNvbnN0IFtwcmVmZXJyZWRMb2NhbGUsIHNldFByZWZlcnJlZExvY2FsZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBudWxsPigoKSA9PiB7XG4gICAgaWYgKCFwcm9jZXNzLmVudi5CUk9XU0VSKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ByZWZlcnJlZC1sb2NhbGUnKSA/PyBudWxsO1xuICB9KTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcHJvY2Vzcy5lbnYuQlJPV1NFUikgcmV0dXJuO1xuXG4gICAgaWYgKHByZWZlcnJlZExvY2FsZSAhPT0gbnVsbCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ByZWZlcnJlZC1sb2NhbGUnLCBwcmVmZXJyZWRMb2NhbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJlZmVycmVkLWxvY2FsZScpO1xuICAgIH1cbiAgfSwgW3ByZWZlcnJlZExvY2FsZV0pO1xuXG4gIGNvbnN0IHByZWZlcnJlZExvY2FsZXMgPSBbXG4gICAgLi4uKHByZWZlcnJlZExvY2FsZSA9PT0gbnVsbCA/IFtdIDogW3ByZWZlcnJlZExvY2FsZV0pLFxuICAgIC4uLnVzZXJBZ2VudExvY2FsZXMsXG4gIF07XG5cbiAgY29uc3QgbG9jYWxlID0gcHJlZmVycmVkTG9jYWxlc1swXSA/PyAnZW4nO1xuICBjb25zdCBtZXNzYWdlcyA9IGdldFRyYW5zbGF0aW9uKHByZWZlcnJlZExvY2FsZXMsIE1FU1NBR0VTKSA/PyBNRVNTQUdFUy5lbjtcblxuICByZXR1cm4gKFxuICAgIDxMb2NhbGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHByZWZlcnJlZExvY2FsZSwgcHJlZmVycmVkTG9jYWxlcywgc2V0UHJlZmVycmVkTG9jYWxlIH19PlxuICAgICAgPEludGxQcm92aWRlciBsb2NhbGU9e2xvY2FsZX0gbWVzc2FnZXM9e21lc3NhZ2VzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9JbnRsUHJvdmlkZXI+XG4gICAgPC9Mb2NhbGVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG4vKipcbiAqIFJlYWN0IGhvb2sgZm9yIGFjY2Vzc2luZyB0aGUgbG9jYWxlIGNvbnRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2NhbGUoKTogTG9jYWxlIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoTG9jYWxlQ29udGV4dCk7XG59XG5cbnR5cGUgTG9jYWxlQ29uc3VtZXJQcm9wVHlwZXMgPSB7fFxuICBjaGlsZHJlbjogKExvY2FsZSkgPT4gUmVhY3QuTm9kZSxcbnx9O1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgYWNjZXNzaW5nIHRoZSBsb2NhbGUgY29udGV4dCBmcm9tIGNsYXNzIGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBMb2NhbGVDb25zdW1lcih7IGNoaWxkcmVuIH06IExvY2FsZUNvbnN1bWVyUHJvcFR5cGVzKSB7XG4gIGNvbnN0IGxvY2FsZSA9IHVzZUxvY2FsZSgpO1xuXG4gIHJldHVybiBjaGlsZHJlbihsb2NhbGUpO1xufVxuXG50eXBlIExvY2FsZVNlbGVjdG9yUHJvcFR5cGVzPFQ+ID0ge3xcbiAgY29tcG9uZW50czogTG9jYWxlTWFwPFJlYWN0LkNvbXBvbmVudFR5cGU8VD4+LFxuICAuLi5ULFxufH07XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciB1c2luZyBhIGRpZmZlcmVudCBjb21wb25lbnQgYmFzZWQgb24gdGhlIGxvY2FsZS4gVGhlXG4gKiBgY29tcG9uZW50c2AgcHJvcCBpcyBhIG1hcCBmcm9tIGxvY2FsZSBzdHJpbmdzIHRvIGNvbXBvbmVudCB0eXBlcy5cbiAqIE9uZSBjb21wb25lbnQgaXMgY2hvc2VuIHVzaW5nIGBnZXRUcmFuc2xhdGlvbmAsIHdpdGggYGVuYCBhcyB0aGUgZmFsbGJhY2tcbiAqIGtleS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIExvY2FsZVNlbGVjdG9yPFQ+KHsgY29tcG9uZW50cywgLi4ucHJvcHMgfTogTG9jYWxlU2VsZWN0b3JQcm9wVHlwZXM8VD4pIHtcbiAgY29uc3QgeyBwcmVmZXJyZWRMb2NhbGVzIH0gPSB1c2VMb2NhbGUoKTtcbiAgY29uc3QgQ29tcG9uZW50ID0gZ2V0VHJhbnNsYXRpb24ocHJlZmVycmVkTG9jYWxlcywgY29tcG9uZW50cykgPz8gY29tcG9uZW50cy5lbjtcblxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+O1xufVxuIiwiLy8gQGZsb3dcblxuLyoqXG4gKiBUaGUgYG1ha2VGb29gIGhvb2sgZmFjdG9yaWVzIGluIHRoaXMgbW9kdWxlIHdyYXAgQXBvbGxvJ3MgYHVzZUZvb2AgaG9va3MgZm9yIG1vcmUgY29udmVuaWVudCB0eXBpbmcuXG4gKlxuICogVXNpbmcgdGhlIEFwb2xsbyBob29rcyBkaXJlY3RseSBsZWFkcyB0byBjb2RlIGxpa2UgdGhpczpcbiAqXG4gKiAgICBpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xuICogICAgaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG4gKlxuICogICAgaW1wb3J0IHtcbiAqICAgICAgdHlwZSBNdXRhdGUsXG4gKiAgICAgIHR5cGUgTXV0YXRlVmFyaWFibGVzLFxuICogICAgfSBmcm9tICcuL19fZ2VuZXJhdGVkX18vTXV0YXRlJztcbiAqXG4gKiAgICBjb25zdCBTb21lTXV0YXRpb24gPSBncWxgXG4gKiAgICAgIG11dGF0aW9uIE11dGF0ZSgpIHtcbiAqICAgICAgICBtdXRhdGUoKVxuICogICAgICB9XG4gKiAgICBgO1xuICpcbiAqICAgIGZ1bmN0aW9uIENvbXBvbmVudCh7IGtleSB9KSB7XG4gKiAgICAgIGNvbnN0IFttdXRhdGUsIHJlc3BvbnNlXSA9IHVzZU11dGF0aW9uPE11dGF0ZSwgTXV0YXRlVmFyaWFibGVzPihTb21lTXV0YXRpb24sIG9wdGlvbnMpO1xuICogICAgfVxuICpcbiAqIGV2ZW4gdGhvdWdoIHRoZSB0eXBlIGluZm9ybWF0aW9uIGlzIGFjdHVhbGx5IGNvbm5lY3RlZCB0byB0aGUgYFNvbWVDb25uZWN0aW9uYCBjb25zdGFudCxcbiAqIG5vdCB0aGUgaG9vayBjYWxsLlxuICpcbiAqIFRoZSBmYWN0b3JpZXMgaGVyZSBzaGlmdCB0aGF0IHR5cGluZyAoYW5kIHBhc3Npbmcgb2YgdGhlIHF1ZXJ5IGNvbnN0YW50KVxuICogZnJvbSB0aGUgY2FsbCBzaXRlIHRvIHRoZSBxdWVyeSBkZWNsYXJhdGlvbiBzaXRlOlxuICpcbiAqICAgIGltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuICpcbiAqICAgIGltcG9ydCB7XG4gKiAgICAgIHR5cGUgTXV0YXRlLFxuICogICAgICB0eXBlIE11dGF0ZVZhcmlhYmxlcyxcbiAqICAgIH0gZnJvbSAnLi9fX2dlbmVyYXRlZF9fL011dGF0ZSc7XG4gKlxuICogICAgY29uc3QgdXNlU29tZU11dGF0aW9uID0gbWFrZU11dGF0aW9uPE11dGF0ZSwgTXV0YXRlVmFyaWFibGVzPihncWxgXG4gKiAgICAgIG11dGF0aW9uIE11dGF0ZSgpIHtcbiAqICAgICAgICBtdXRhdGUoKVxuICogICAgICB9XG4gKiAgICBgKTtcbiAqXG4gKiAgICBmdW5jdGlvbiBDb21wb25lbnQoeyBrZXkgfSkge1xuICogICAgICBjb25zdCBbbXV0YXRlLCByZXNwb25zZV0gPSB1c2VTb21lTXV0YXRpb24ob3B0aW9ucyk7XG4gKiAgICB9XG4gKi9cblxuaW1wb3J0IHtcbiAgdXNlUXVlcnksXG4gIHVzZUxhenlRdWVyeSxcbiAgdXNlU3Vic2NyaXB0aW9uLFxuICB1c2VNdXRhdGlvbixcbiAgdHlwZSBRdWVyeUhvb2tPcHRpb25zLFxuICB0eXBlIFF1ZXJ5VHVwbGUsXG4gIHR5cGUgUXVlcnlSZXN1bHQsXG4gIHR5cGUgTGF6eVF1ZXJ5SG9va09wdGlvbnMsXG4gIHR5cGUgU3Vic2NyaXB0aW9uSG9va09wdGlvbnMsXG4gIHR5cGUgTXV0YXRpb25Ib29rT3B0aW9ucyxcbiAgdHlwZSBNdXRhdGlvblR1cGxlLFxufSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcblxuLy8gZ3JhcGhxbCB0eXBlc1xudHlwZSBEb2N1bWVudE5vZGUgPSBhbnk7XG5cbnR5cGUgUXVlcnlIb29rPFREYXRhLCBUVmFyaWFibGVzPiA9IChcbiAgb3B0aW9ucz86IFF1ZXJ5SG9va09wdGlvbnM8VERhdGEsIFRWYXJpYWJsZXM+LFxuKSA9PiBRdWVyeVJlc3VsdDxURGF0YSwgVFZhcmlhYmxlcz47XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUXVlcnk8VERhdGEsIFRWYXJpYWJsZXM+KHF1ZXJ5OiBEb2N1bWVudE5vZGUpOiBRdWVyeUhvb2s8VERhdGEsIFRWYXJpYWJsZXM+IHtcbiAgcmV0dXJuIChvcHRpb25zKSA9PiB1c2VRdWVyeTxURGF0YSwgVFZhcmlhYmxlcz4ocXVlcnksIG9wdGlvbnMpO1xufVxuXG50eXBlIExhenlRdWVyeUhvb2s8VERhdGEsIFRWYXJpYWJsZXM+ID0gKFxuICBvcHRpb25zPzogTGF6eVF1ZXJ5SG9va09wdGlvbnM8VERhdGEsIFRWYXJpYWJsZXM+LFxuKSA9PiBRdWVyeVR1cGxlPFREYXRhLCBUVmFyaWFibGVzPjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VMYXp5UXVlcnk8VERhdGEsIFRWYXJpYWJsZXM+KFxuICBxdWVyeTogRG9jdW1lbnROb2RlLFxuKTogTGF6eVF1ZXJ5SG9vazxURGF0YSwgVFZhcmlhYmxlcz4ge1xuICByZXR1cm4gKG9wdGlvbnMpID0+IHVzZUxhenlRdWVyeTxURGF0YSwgVFZhcmlhYmxlcz4ocXVlcnksIG9wdGlvbnMpO1xufVxuXG50eXBlIFN1YnNjcmlwdGlvbkhvb2s8VERhdGEsIFRWYXJpYWJsZXM+ID0gKFxuICBvcHRpb25zPzogU3Vic2NyaXB0aW9uSG9va09wdGlvbnM8VERhdGEsIFRWYXJpYWJsZXM+LFxuKSA9PiBRdWVyeVJlc3VsdDxURGF0YSwgVFZhcmlhYmxlcz47XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3Vic2NyaXB0aW9uPFREYXRhLCBUVmFyaWFibGVzPihcbiAgcXVlcnk6IERvY3VtZW50Tm9kZSxcbik6IFN1YnNjcmlwdGlvbkhvb2s8VERhdGEsIFRWYXJpYWJsZXM+IHtcbiAgcmV0dXJuIChvcHRpb25zKSA9PiB1c2VTdWJzY3JpcHRpb248VERhdGEsIFRWYXJpYWJsZXM+KHF1ZXJ5LCBvcHRpb25zKTtcbn1cblxudHlwZSBNdXRhdGlvbkhvb2s8VERhdGEsIFRWYXJpYWJsZXM+ID0gKFxuICBvcHRpb25zPzogTXV0YXRpb25Ib29rT3B0aW9uczxURGF0YSwgVFZhcmlhYmxlcz4sXG4pID0+IE11dGF0aW9uVHVwbGU8VERhdGEsIFRWYXJpYWJsZXM+O1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZU11dGF0aW9uPFREYXRhLCBUVmFyaWFibGVzPihcbiAgcXVlcnk6IERvY3VtZW50Tm9kZSxcbik6IE11dGF0aW9uSG9vazxURGF0YSwgVFZhcmlhYmxlcz4ge1xuICByZXR1cm4gKG9wdGlvbnMpID0+IHVzZU11dGF0aW9uPFREYXRhLCBUVmFyaWFibGVzPihxdWVyeSwgb3B0aW9ucyk7XG59XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnR5cGUgQXN5bmNTdGF0ZTxUPiA9IHt8XG4gIHZhbHVlOiBULFxuICBpc0xvYWRpbmc6IGJvb2xlYW4sXG4gIGlzRXJyb3I6IGJvb2xlYW4sXG58fTtcblxudHlwZSBBc3luY1N0YXRlQWN0aW9uPFQ+ID1cbiAgfCB7fCB0eXBlOiAnU1RBUlQnIHx9XG4gIHwge3wgdHlwZTogJ1JFU09MVkUnLCB2YWx1ZTogVCB8fVxuICB8IHt8IHR5cGU6ICdSRUpFQ1QnIHx9O1xuXG5mdW5jdGlvbiBhc3luY1N0YXRlUmVkdWNlcjxUPihzdGF0ZTogQXN5bmNTdGF0ZTxUPiwgYWN0aW9uOiBBc3luY1N0YXRlQWN0aW9uPFQ+KTogQXN5bmNTdGF0ZTxUPiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdTVEFSVCc6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICAgIGlzRXJyb3I6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSAnUkVTT0xWRSc6IHtcbiAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IGFjdGlvbjtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICBpc0Vycm9yOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgJ1JFSkVDVCc6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICBpc0Vycm9yOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gICAgICB0aHJvdyAndW5yZWFjaGFibGUnO1xuICB9XG59XG5cbi8qKlxuICogSW1wbGVtZW50cyBzdGF0ZSB0aGF0IGNhbiBiZSBzZXQgdmlhIGEgcHJvbWlzZS5cbiAqIFRoaXMgaG9vayBtYWtlcyBzdXJlIHRoYXQgbXVsdGlwbGUgc2V0U3RhdGUgY2FsbHMgY2FuIG5vdCByYWNlLFxuICogaS5lLiBvbmx5IHRoZSBsYXN0IHByb21pc2Ugd2lsbCBnbyB0aHJvdWdoIHRvIHRoZSBhY3R1YWwgc3RhdGUuXG4gKiBXaGlsZSBhIHNldFN0YXRlIHByb21pc2UgaXMgcGVuZGluZywgdGhlIHByZXZpb3VzIHN0YXRlIHdpbGwgcmVtYWluLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQXN5bmNTdGF0ZTxUPihpbml0aWFsU3RhdGU6IFQpOiBbVCwgKFQgfCBQcm9taXNlPFQ+KSA9PiB2b2lkXSB7XG4gIGNvbnN0IFtwcm9taXNlLCBzZXRQcm9taXNlXSA9IFJlYWN0LnVzZVN0YXRlPFByb21pc2U8VD4gfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKGFzeW5jU3RhdGVSZWR1Y2VyLCB7XG4gICAgdmFsdWU6IGluaXRpYWxTdGF0ZSxcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgIGlzRXJyb3I6IGZhbHNlLFxuICB9KTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9taXNlID09PSBudWxsKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnU1RBUlQnIH0pO1xuICAgIHByb21pc2UudGhlbihcbiAgICAgICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFU09MVkUnLCB2YWx1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChfZXJyb3IpID0+IHtcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRUpFQ1QnIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICB9O1xuICB9LCBbcHJvbWlzZV0pO1xuXG4gIGZ1bmN0aW9uIHNldFN0YXRlKG5ld1Byb21pc2U6IFQgfCBQcm9taXNlPFQ+KSB7XG4gICAgaWYgKG5ld1Byb21pc2UgJiYgdHlwZW9mIG5ld1Byb21pc2UudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gdGVjaG5pY2FsbHkgd2UgaGF2ZSBub3QgY2hlY2tlZCB0aGlzIGlzIGEgcHJvbWlzZSBidXQgYSB0aGVuYWJsZS5cbiAgICAgIC8vIEluIHByYWN0aWNlIHRoaXMgKnNob3VsZCogbm90IG1hdHRlciBidXQgd2hvIGtub3dzLlxuICAgICAgLy8gJEZsb3dFeHBlY3RFcnJvclxuICAgICAgY29uc3QgcmVhbFByb21pc2U6IFByb21pc2U8VD4gPSBuZXdQcm9taXNlO1xuICAgICAgc2V0UHJvbWlzZShyZWFsUHJvbWlzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vICRGbG93RXhwZWN0RXJyb3JcbiAgICAgIGNvbnN0IHZhbHVlOiBUID0gbmV3UHJvbWlzZTtcblxuICAgICAgc2V0UHJvbWlzZShudWxsKTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFU09MVkUnLCB2YWx1ZSB9KTtcbiAgICB9XG4gIH1cblxuICAvLyB1c2VDYWxsYmFjazogUmVhY3QudXNlU3RhdGUgZ3VhcmFudGVlcyBzdGFiaWxpdHkgb2Ygc2V0U3RhdGUsXG4gIC8vIG1pcnJvciB0aGF0IGhlcmVcbiAgcmV0dXJuIFtzdGF0ZS52YWx1ZSwgUmVhY3QudXNlQ2FsbGJhY2soc2V0U3RhdGUsIFtdKV07XG59XG5cbnR5cGUgU3RvcmVTdGF0ZTxUPiA9IHt8IHZhbHVlOiBUIHx9O1xuXG4vKipcbiAqIEFjY2Vzc2VzIGRhdGEgaW4gYSBzdG9yZSBhbmQgcHV0cyBpdCBpbnRvIGEgc3RhdGUgdmFyaWFibGUuXG4gKiBBIHN0b3JlIGhlcmUgaXMgYW55dGhpbmcgdGhhdCBjYW4gYmUgcmVhZC93cml0dGVuIHVzaW5nIChvcHRpb25hbGx5IGFzeW5jKVxuICogbG9hZC9zdG9yZSBmdW5jdGlvbnMuXG4gKiBXaGVuZXZlciB0aGUgbG9hZCAmIHN0b3JlIGZ1bmN0aW9ucyBjaGFuZ2UgdGhlIHN0b3JlIHZhbHVlIGlzIHJlbG9hZGVkLFxuICogYW5kIHdoZW5ldmVyIHRoZSB2YWx1ZSBpcyBjaGFuZ2VkIHVzaW5nIHRoZSByZXR1cm5lZCBzZXR0ZXIsIGl0IGlzIHN0b3JlZC5cbiAqIFVudGlsIGEgbG9hZCBpcyBmaW5pc2hlZCAoaS5lLiBpbml0aWFsbHkgYW5kIGFmdGVyIGNoYW5naW5nIHRoZSBzdG9yZSksXG4gKiB0aGUgc3RhdGUgaXMgcmVzZXQgdG8gbnVsbCBhbmQgYW55IGF0dGVtcHRzIHRvIHNldCBpdCBpcyBpZ25vcmVkOlxuICogb25seSBhIGxvYWRlZCB2YWx1ZSBjYW4gYmUgb3ZlcndyaXR0ZW4uXG4gKiBQb3NzaWJseSBwZW5kaW5nIGxvYWRzIGZyb20gYSBwcmV2aW91cyBzdG9yZSBhcmUgYWxzbyBpZ25vcmVkLlxuICpcbiAqIEFzIGFueSBjaGFuZ2UgdG8gbG9hZC9zdG9yZSByZXN1bHRzIGluIGEgcmVsb2FkIGFuZCB0aHVzIGEgcmUtcmVuZGVyLFxuICogaXQgd291bGQgbm90IGJlIHBvc3NpYmxlIHRvIHBhc3MgaW5saW5lIGZ1bmN0aW9ucyB0byBgdXNlU3RvcmVgIHdpdGhvdXRcbiAqIHdyYXBwaW5nIHRoZW0gaW4gYHVzZUNhbGxiYWNrYC5cbiAqIEZvciBjb252ZW5pZW5jZSwgYSBgZGVwc2AgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiB0aGF0IG11c3QgYmUgc2V0IHRvIHRoZVxuICogZGVwZW5kZW5jaWVzIG9mIHRoZSBwYXNzZWQgbG9hZC9zdG9yZSBmdW5jdGlvbnMuXG4gKiBJZiBvbWl0dGVkLCB0aGlzIGhvb2sgdXNlcyBsb2FkICYgc3RvcmUgdGhlbXNlbHZlcyBhcyB0aGUgZGVwcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0b3JlPFQ+KFxuICBsb2FkOiAoKSA9PiBUIHwgUHJvbWlzZTxUPixcbiAgc3RvcmU6IChUKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPixcbiAgZGVwcz86IGFueVtdLFxuKTogW1QgfCBudWxsLCAoVCkgPT4gdm9pZF0ge1xuICBjb25zdCByZWFsRGVwcyA9IGRlcHMgPz8gW2xvYWQsIHN0b3JlXTtcblxuICBjb25zdCBbc3RhdGVJbXBsLCBzZXRTdGF0ZUltcGxdID0gdXNlQXN5bmNTdGF0ZTxTdG9yZVN0YXRlPFQ+IHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3Qgc3RhdGUgPSBzdGF0ZUltcGw/LnZhbHVlID8/IG51bGw7XG5cbiAgLy8gcmVsb2FkIHRoZSBzdGF0ZSB3aGVuIHRoZSBzdG9yZSBjaGFuZ2VzXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3RhdGVJbXBsKFByb21pc2UucmVzb2x2ZShsb2FkKCkpLnRoZW4oKHZhbHVlKSA9PiAoeyB2YWx1ZSB9KSkpO1xuXG4gICAgLy8gYWZ0ZXIgY2hhbmdpbmcgdGhlIHN0b3JlLCBjbGVhciB0aGUgc3RhdGUgdG8gcHJldmVudCBmdXJ0aGVyIHVzZVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzZXRTdGF0ZUltcGwobnVsbCk7XG4gICAgfTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIHJlYWxEZXBzKTtcblxuICAvLyBzYXZlIHRoZSBzdGF0ZSB3aGVuIGl0IGNoYW5nZWRcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBpZiB0aGUgc3RhdGUgd2FzIG5vdCBsb2FkZWQgeWV0IGZvciB3aGF0ZXZlciByZWFzb24sIHN0b3JlIG5vdGhpbmdcbiAgICBpZiAoc3RhdGVJbXBsID09PSBudWxsKSByZXR1cm47XG5cbiAgICBzdG9yZShzdGF0ZUltcGwudmFsdWUpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgWy4uLnJlYWxEZXBzLCBzdGF0ZUltcGxdKTtcblxuICBmdW5jdGlvbiBzZXRTdGF0ZSh2YWx1ZTogVCkge1xuICAgIHNldFN0YXRlSW1wbCh7IHZhbHVlIH0pO1xuICB9XG5cbiAgLy8gdXNlQ2FsbGJhY2s6IFJlYWN0LnVzZVN0YXRlIGd1YXJhbnRlZXMgc3RhYmlsaXR5IG9mIHNldFN0YXRlLFxuICAvLyBtaXJyb3IgdGhhdCBoZXJlXG4gIHJldHVybiBbc3RhdGUsIFJlYWN0LnVzZUNhbGxiYWNrKHNldFN0YXRlLCBbc2V0U3RhdGVJbXBsXSldO1xufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgKiBmcm9tICcuL2FzeW5jX3N0YXRlJztcbmV4cG9ydCAqIGZyb20gJy4vYXBvbGxvJztcbmV4cG9ydCAqIGZyb20gJy4vbG9jYWxTdG9yYWdlJztcblxuLyoqXG4gKiBBbiBhbG1vc3QtYWxpYXMgdG8gUmVhY3QudXNlUmVmIGZvciB0aGUgdHlwaWNhbCBlbGVtZW50IHJlZiB1c2UgY2FzZS5cbiAqIHVzZVJlZiBjYW4gYWxzbyBlbXVsYXRlIGluc3RhbmNlIHZhcmlhYmxlcywgdGhpcyBjYW4ndC5cbiAqIGB1c2VFbGVtZW50UmVmPFQ+KClgIGlzIHRoZSBzYW1lIGFzIGB1c2VSZWY8UmVhY3QuRWxlbWVudFJlZjxUPiB8IG51bGw+KG51bGwpYC5cbiAqIFRoZSBkZWZhdWx0IHZhbHVlIG9mIGBudWxsYCBpcyBmaXhlZC5cbiAqIGV4YW1wbGUgdXNhZ2U6XG4gKlxuICogICAgY29uc3QgYVJlZiA9IHVzZUVsZW1lbnRSZWY8J2Rpdic+KCk7XG4gKiAgICBjb25zdCBiUmVmID0gdXNlRWxlbWVudFJlZjx0eXBlb2YgQ29tcG9uZW50PigpO1xuICpcbiAqICAgIHJldHVybiAoXG4gKiAgICAgIDw+XG4gKiAgICAgICAgPGRpdiByZWY9e2FSZWZ9IC8+XG4gKiAgICAgICAgPENvbXBvbmVudCByZWY9e2JSZWZ9IC8+XG4gKiAgICAgIDwvPlxuICogICAgKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUVsZW1lbnRSZWY8VDogUmVhY3QuRWxlbWVudFR5cGU+KCk6IHt8XG4gIGN1cnJlbnQ6IFJlYWN0LkVsZW1lbnRSZWY8VD4gfCBudWxsLFxufH0ge1xuICByZXR1cm4gUmVhY3QudXNlUmVmPFJlYWN0LkVsZW1lbnRSZWY8VD4gfCBudWxsPihudWxsKTtcbn1cblxuLyoqXG4gKiBTaW1pbGFyIHRvIHVzZU1lbW8sIGJ1dCB3aXRob3V0IGRlcGVuZGVuY2llcywgYW5kIGd1YXJhbnRlZXMgdGhhdCB0aGUgc2FtZVxuICogaW5zdGFuY2UgaXMgcHJlc2VydmVkLiBUaGUgaW5pdGlhbGl6YXRpb24gaXMgZWFnZXIsIGkuZS4gaGFwcGVucyBvbiB0aGVcbiAqIGZpcnN0IGhvb2sgY2FsbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVZhbHVlPFQ+KGluaXQ6ICgpID0+IFQpOiBUIHtcbiAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmPFQgfCBudWxsPihudWxsKTtcbiAgaWYgKHJlZi5jdXJyZW50ID09PSBudWxsKSByZWYuY3VycmVudCA9IGluaXQoKTtcbiAgcmV0dXJuIHJlZi5jdXJyZW50O1xufVxuXG4vKipcbiAqIExldHMgb25lIHNjaGVkdWxlIGEgY2FsbGJhY2sgdmlhIHJlcXVlc3RBbmltYXRpb25GcmFtZSByZXBlYXRlZGx5IHVudGlsXG4gKiB0aGUgY2FsbGJhY2sgcmV0dXJucyBgdHJ1ZWAgb3IgaXQgaXMgY2FuY2VsbGVkLlxuICpcbiAqICAgIC8vIHRoZSBjYWxsYmFjayBpcyByZXBlYXRlZCB1bnRpbCBzdG9wIGlzIGludm9rZWRcbiAqICAgIGNvbnN0IGNiID0gKCkgPT4gY29uc29sZS5sb2coJ2ZyYW1lJyk7XG4gKiAgICBjb25zdCBbc3RhcnQsIHN0b3BdID0gdXNlQW5pbWF0aW9uRnJhbWUoY2IpO1xuICpcbiAqICAgIC8vIHRoZSBjYWxsYmFjayBpcyBjYWxsZWQgb25seSBvbmNlXG4gKiAgICBjb25zdCBjYiA9ICgpID0+IHsgY29uc29sZS5sb2coJ2ZyYW1lJyk7IHJldHVybiB0cnVlOyB9O1xuICogICAgY29uc3QgW3N0YXJ0XSA9IHVzZUFuaW1hdGlvbkZyYW1lKGNiKTtcbiAqXG4gKiBPZiBjb3Vyc2UsIGBzdG9wYCBjYW4gYmUgdXNlZCB3aXRoIHNlbGYtc3RvcHBpbmcgY2FsbGJhY2tzIGFzIHdlbGwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbmltYXRpb25GcmFtZShjYjogKCkgPT4gYm9vbGVhbiB8IHZvaWQpOiBbKCkgPT4gdm9pZCwgKCkgPT4gdm9pZF0ge1xuICBjb25zdCBpZCA9IFJlYWN0LnVzZVJlZjxBbmltYXRpb25GcmFtZUlEIHwgbnVsbD4obnVsbCk7XG5cbiAgZnVuY3Rpb24gcnVuKCkge1xuICAgIGlkLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgY29uc3QgZG9uZSA9IGNiKCk7XG4gICAgICBpZiAoZG9uZSAhPT0gdHJ1ZSkgcnVuKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdG9wKCkge1xuICAgIGlmIChpZC5jdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShpZC5jdXJyZW50KTtcbiAgICAgIGlkLmN1cnJlbnQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIHN0b3AoKTtcbiAgICBydW4oKTtcbiAgfVxuXG4gIHJldHVybiBbc3RhcnQsIHN0b3BdO1xufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG50eXBlIFNldHRlcjxUPiA9ICgoKFQpID0+IFQpIHwgVCkgPT4gdm9pZDtcbnR5cGUgTG9jYWxTdG9yYWdlT3B0SG9vazxUPiA9IChrZXk6IHN0cmluZyB8IG51bGwpID0+IFtUIHwgdm9pZCwgU2V0dGVyPFQ+XTtcbnR5cGUgTG9jYWxTdG9yYWdlSG9vazxUPiA9IChrZXk6IHN0cmluZykgPT4gW1QsIFNldHRlcjxUPl07XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxudHlwZSBMb2NhbFN0b3JhZ2VWYWx1ZTxUPiA9XG4gIHwge3wga2V5OiBudWxsIHx9XG4gIHwge3wga2V5OiBzdHJpbmcsIHZhbHVlOiBUIHx9O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBob29rIGZvciB1c2luZyBhIHZhbHVlIGZyb20gbG9jYWwgc3RvcmFnZS4gRXhhbXBsZSB1c2FnZTpcbiAqXG4gKiAgICBjb25zdCB1c2VMb2NhbFN0b3JhZ2UgPSBtYWtlTG9jYWxTdG9yYWdlT3B0KFxuICogICAgICAvLyBkZXNlcmlhbGl6YXRpb24gZnVuY3Rpb25cbiAqICAgICAganNvbiA9PiAoeyAuLi4oanNvbiAhPT0gbnVsbCA/IEpTT04ucGFyc2UoanNvbikgOiBudWxsKSB9KSxcbiAqICAgICAgLy8gc2VyaWFsaXphdGlvbiBmdW5jdGlvblxuICogICAgICBzdGF0ZSA9PiAoc3RhdGUgIT09IG51bGwgPyBKU09OLnN0cmluZ2lmeShzdGF0ZSkgOiBudWxsKSxcbiAqICAgICk7XG4gKlxuICogICAgZnVuY3Rpb24gQ29tcG9uZW50KHsga2V5IH0pIHtcbiAqICAgICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VMb2NhbFN0b3JhZ2Uoa2V5KTtcbiAqICAgICAgLy8gLi4uXG4gKiAgICB9XG4gKlxuICogVGhlIGtleSBtYXkgY2hhbmdlIGF0IHJ1bnRpbWUgYW5kIG1heSBub3QgYmUga25vd24gYXQgYWxsIHRpbWVzO1xuICogcGFyc2luZyBhbmQgc2VyaWFsaXphdGlvbiBhcmUgZml4ZWQgdGhvdWdoLCBhbmQgYXJlIHRoZXJlZm9yZSBwYXNzZWQgdG8gdGhlIGZhY3RvcnkuXG4gKiBUaGVyZSBpcyBubyBkZWZhdWx0IHNlcmlhbGl6YXRpb24vZGVzZXJpYWxpemF0aW9uIGxvZ2ljLCBiZWNhdXNlIHRoYXQgbG9naWMgaXMgcmVxdWlyZWRcbiAqIHRvIGhhbmRsZSBub24tZXhpc3RlbnQgbG9jYWxTdG9yYWdlIGtleXM6XG4gKlxuICogLSBEZXNlcmlhbGl6YXRpb24gd2lsbCBiZSBwYXNzZWQgYSBzdHJpbmcsIG9yIG51bGwgdmFsdWUgaWYgdGhlIGtleSBkb2VzIG5vdCBleGlzdC5cbiAqICAgSXQgd2lsbCBub3QgYmUgY2FsbGVkIGF0IGFsbCBpZiB0aGVyZSBpcyBubyBrZXkuXG4gKiAtIFNlcmlhbGl6YXRpb24gcmV0dXJucyBhIHN0cmluZywgb3IgbnVsbCB0byBkZWxldGUgdGhlIGl0ZW0uXG4gKiAgIEl0IHdpbGwgbm90IGJlIGNhbGxlZCBhdCBhbGwgaWYgdGhlcmUgaXMgbm8ga2V5LlxuICpcbiAqIElmIHRoZXJlJ3Mgbm8ga2V5LCB0aGUgaG9vaydzIHZhbHVlIHdpbGwgYmUgdW5kZWZpbmVkLlxuICogSXQgdGhlIGtleSBkb2VzIG5vdCBleGlzdCBpbiBsb2NhbFN0b3JhZ2UsXG4gKiB0aGUgaG9vaydzIHZhbHVlIHdpbGwgYmUgIHRoZSByZXN1bHQgb2YgZGVzZXJpYWxpemluZyBudWxsO1xuICogaW4gdGhlIGV4YW1wbGUgdGhhdCB2YWx1ZSB3b3VsZCBiZSBudWxsLlxuICpcbiAqIFNldHRpbmcgdGhlIHZhbHVlIGlzIGlnbm9yZWQgaWYgdGhlcmUgaXMgbm8ga2V5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZUxvY2FsU3RvcmFnZU9wdDxUPihcbiAgZGVzZXJpYWxpemU6IChzdHJpbmcgfCBudWxsKSA9PiBULFxuICBzZXJpYWxpemU6IChUKSA9PiBzdHJpbmcgfCBudWxsLFxuKTogTG9jYWxTdG9yYWdlT3B0SG9vazxUPiB7XG4gIGZ1bmN0aW9uIGxvYWQoa2V5OiBzdHJpbmcgfCBudWxsKTogTG9jYWxTdG9yYWdlVmFsdWU8VD4ge1xuICAgIGlmIChrZXkgPT09IG51bGwpIHJldHVybiB7IGtleSB9O1xuXG4gICAgY29uc3QgdmFsdWUgPSBkZXNlcmlhbGl6ZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpID8/IG51bGwpO1xuICAgIHJldHVybiB7IGtleSwgdmFsdWUgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3JlKHN0b3JhZ2VWYWx1ZTogTG9jYWxTdG9yYWdlVmFsdWU8VD4pIHtcbiAgICBpZiAoc3RvcmFnZVZhbHVlLmtleSA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBrZXksIHZhbHVlIH0gPSBzdG9yYWdlVmFsdWU7XG5cbiAgICBjb25zdCBzZXJpYWxpemVkID0gc2VyaWFsaXplKHZhbHVlKTtcbiAgICBpZiAoc2VyaWFsaXplZCAhPT0gbnVsbCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBzZXJpYWxpemVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1c2VMb2NhbFN0b3JhZ2Uoa2V5OiBzdHJpbmcgfCBudWxsKSB7XG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZUltcGxdID0gUmVhY3QudXNlU3RhdGU8TG9jYWxTdG9yYWdlVmFsdWU8VD4+KCgpID0+IGxvYWQoa2V5KSk7XG5cbiAgICAvLyByZWxvYWQgc3RhdGUgd2hlbiB0aGUga2V5IGNoYW5nZXNcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKHN0YXRlLmtleSAhPT0ga2V5KSBzZXRTdGF0ZUltcGwobG9hZChrZXkpKTtcbiAgICB9LCBba2V5LCBzdGF0ZS5rZXldKTtcblxuICAgIC8vIHdlIHVzZSBhIGZ1bmN0aW9uYWwgdXBkYXRlIGFzIGVhY2ggdXBkYXRlIG5lZWRzIHRvIGFjY2VzcyB0aGUga2V5LFxuICAgIC8vIHdoaWNoIGlzIHBhcnQgb2YgdGhlIHN0YXRlXG4gICAgZnVuY3Rpb24gc2V0U3RhdGUodmFsdWU6ICgoVCkgPT4gVCkgfCBUKSB7XG4gICAgICAvLyAkRmxvd0V4cGVjdEVycm9yXG4gICAgICBjb25zdCBzZXR0ZXI6IChUKSA9PiBUID0gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUgOiAoKSA9PiB2YWx1ZTtcblxuICAgICAgc2V0U3RhdGVJbXBsKChvbGRWYWx1ZSkgPT4ge1xuICAgICAgICBpZiAob2xkVmFsdWUua2V5ID09PSBudWxsKSByZXR1cm4gb2xkVmFsdWU7XG5cbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB7XG4gICAgICAgICAga2V5OiBvbGRWYWx1ZS5rZXksXG4gICAgICAgICAgdmFsdWU6IHNldHRlcihvbGRWYWx1ZS52YWx1ZSksXG4gICAgICAgIH07XG5cbiAgICAgICAgc3RvcmUobmV3VmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IHN0YXRlLmtleSAhPT0gbnVsbCA/IHN0YXRlLnZhbHVlIDogdW5kZWZpbmVkO1xuXG4gICAgLy8gdXNlQ2FsbGJhY2s6IFJlYWN0LnVzZVN0YXRlIGd1YXJhbnRlZXMgc3RhYmlsaXR5IG9mIHNldFN0YXRlLFxuICAgIC8vIG1pcnJvciB0aGF0IGhlcmUgLSBhdCBsZWFzdCB3aGVuIHRoZSBrZXkgaXMgc3RhYmxlXG4gICAgcmV0dXJuIFt2YWx1ZSwgUmVhY3QudXNlQ2FsbGJhY2soc2V0U3RhdGUsIFtzZXRTdGF0ZUltcGxdKV07XG4gIH1cblxuICByZXR1cm4gdXNlTG9jYWxTdG9yYWdlO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBob29rIGZvciB1c2luZyBhIHZhbHVlIGZyb20gbG9jYWwgc3RvcmFnZS4gRXhhbXBsZSB1c2FnZTpcbiAqXG4gKiAgICBjb25zdCB1c2VMb2NhbFN0b3JhZ2UgPSBtYWtlTG9jYWxTdG9yYWdlT3B0KFxuICogICAgICAvLyBkZXNlcmlhbGl6YXRpb24gZnVuY3Rpb25cbiAqICAgICAganNvbiA9PiAoeyAuLi4oanNvbiAhPT0gbnVsbCA/IEpTT04ucGFyc2UoanNvbikgOiBudWxsKSB9KSxcbiAqICAgICAgLy8gc2VyaWFsaXphdGlvbiBmdW5jdGlvblxuICogICAgICBzdGF0ZSA9PiAoc3RhdGUgIT09IG51bGwgPyBKU09OLnN0cmluZ2lmeShzdGF0ZSkgOiBudWxsKSxcbiAqICAgICk7XG4gKlxuICogICAgZnVuY3Rpb24gQ29tcG9uZW50KHsga2V5IH0pIHtcbiAqICAgICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VMb2NhbFN0b3JhZ2Uoa2V5KTtcbiAqICAgICAgLy8gLi4uXG4gKiAgICB9XG4gKlxuICogVGhpcyBmdW5jdGlvbiBpcyBlcXVpdmFsZW50IHRvIG1ha2VMb2NhbFN0b3JhZ2VPcHQgZXhjZXB0IGZvciBpdHMgdHlwZTpcbiAqIHRoZSBrZXkgbWF5IGNoYW5nZSBhdCBydW50aW1lIGJ1dCBtdXN0IGJlIG5vbi1udWxsIGF0IGFsbCB0aW1lcztcbiAqIHRoaXMgbWVhbnMgdGhlIGhvb2sncyB2YWx1ZSB3aWxsIG5vdCBiZSB1bmRlZmluZWQsXG4gKiB1bmxlc3MgdGhhdCBpcyBhIHZhbHVlIHRoZSBkZXNlcmlhbGl6YXRpb24gZnVuY3Rpb24gY291bGQgcmV0dXJuLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZUxvY2FsU3RvcmFnZTxUPihcbiAgZGVzZXJpYWxpemU6IChzdHJpbmcgfCBudWxsKSA9PiBULFxuICBzZXJpYWxpemU6IChUKSA9PiBzdHJpbmcgfCBudWxsLFxuKTogTG9jYWxTdG9yYWdlSG9vazxUPiB7XG4gIC8vICRGbG93RXhwZWN0RXJyb3JcbiAgcmV0dXJuIG1ha2VMb2NhbFN0b3JhZ2VPcHQ8VD4oZGVzZXJpYWxpemUsIHNlcmlhbGl6ZSk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmltcG9ydCBjb21tb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2NvbW1vbic7XG5cbmNvbnN0IGhlZGdlaG9nR3JlZW5MaWdodCA9ICcjMzhiNDQ5JztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiBoZWRnZWhvZ0dyZWVuTGlnaHQsXG4gICAgICBjb250cmFzdFRleHQ6IGNvbW1vbi53aGl0ZSxcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuaW1wb3J0IHsgbWFrZU11dGF0aW9uIH0gZnJvbSAnLi4vbWlzYy9ob29rcyc7XG5cbmltcG9ydCB7XG4gIHR5cGUgTG9naW4sXG4gIHR5cGUgTG9naW5WYXJpYWJsZXMsXG4gIHR5cGUgTG9naW5fbG9naW4gYXMgQXV0aERhdGEsXG59IGZyb20gJy4vX19nZW5lcmF0ZWRfXy9Mb2dpbic7XG5cbmNvbnN0IHVzZUxvZ2luTXV0YXRpb24gPSBtYWtlTXV0YXRpb248TG9naW4sIExvZ2luVmFyaWFibGVzPihncWxgXG4gIG11dGF0aW9uIExvZ2luKCR1c2VybmFtZTogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKSB7XG4gICAgbG9naW4odXNlcm5hbWU6ICR1c2VybmFtZSwgcGFzc3dvcmQ6ICRwYXNzd29yZCkge1xuICAgICAgaWRcbiAgICAgIHVzZXJuYW1lXG4gICAgICB0b2tlblxuICAgIH1cbiAgfVxuYCk7XG5cbnR5cGUgQXV0aCA9IHt8XG4gIGF1dGhEYXRhOiBBdXRoRGF0YSB8IG51bGwsXG4gIGxvZ2luKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPEF1dGhEYXRhPixcbiAgbG9nb3V0KCk6IHZvaWQsXG58fTtcblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxBdXRoPih7XG4gIGF1dGhEYXRhOiBudWxsLFxuICBsb2dpbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2xvZ2luIG5vdCBzcGVjaWZpZWQnKTtcbiAgfSxcbiAgbG9nb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignbG9nb3V0IG5vdCBzcGVjaWZpZWQnKTtcbiAgfSxcbn0pO1xuXG50eXBlIEF1dGhQcm92aWRlclByb3BUeXBlcyA9IHt8XG4gIGNoaWxkcmVuOiBSZWFjdC5Ob2RlLFxufH07XG5cbi8qKlxuICogYEF1dGhQcm92aWRlcmAgcHJvdmlkZXMgYSBjb250ZXh0IHdpdGggdGhlIGN1cnJlbnRseSBsb2dnZWQgaW4gdXNlclxuICogYXMgd2VsbCBhcyBsb2dpbiBhbmQgbG9nb3V0IGZ1bmN0aW9ucy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH06IEF1dGhQcm92aWRlclByb3BUeXBlcykge1xuICBjb25zdCBbcGVyZm9ybUxvZ2luLCBfbG9naW5SZXNwb25zZV0gPSB1c2VMb2dpbk11dGF0aW9uKCk7XG4gIGNvbnN0IFthdXRoRGF0YSwgc2V0QXV0aERhdGFdID0gUmVhY3QudXNlU3RhdGU8QXV0aERhdGEgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBsb2dpbiA9IGFzeW5jICh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcGVyZm9ybUxvZ2luKHsgdmFyaWFibGVzOiB7IHVzZXJuYW1lLCBwYXNzd29yZCB9IH0pO1xuXG4gICAgLy8gd2UncmUgbm90IHBhc3NpbmcgYGlnbm9yZVJlc3VsdHNgLCBzbyB0aGVyZSB3aWxsIGJlIGEgcmVzdWx0XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICBpZiAoIXJlc3VsdC5kYXRhKSB0aHJvdyAndW5yZWFjaGFibGUnO1xuXG4gICAgY29uc3QgZGF0YSA9IHJlc3VsdC5kYXRhLmxvZ2luO1xuICAgIHNldEF1dGhEYXRhKGRhdGEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICBzZXRBdXRoRGF0YShudWxsKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYXV0aCcpO1xuICB9O1xuXG4gIGNvbnN0IHJlY292ZXJTZXNzaW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGF1dGggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpO1xuICAgIHNldEF1dGhEYXRhKGF1dGggPyBKU09OLnBhcnNlKGF1dGgpIDogbnVsbCk7XG4gIH07XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHJlY292ZXJTZXNzaW9uKCksIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBhdXRoRGF0YSwgbG9naW4sIGxvZ291dCB9fT57Y2hpbGRyZW59PC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuLyoqXG4gKiBSZWFjdCBob29rIGZvciBhY2Nlc3NpbmcgdGhlIGF1dGggY29udGV4dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUF1dGgoKTogQXV0aCB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbn1cbiIsImltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gJ2Fwb2xsby1jbGllbnQnO1xuaW1wb3J0IHsgZnJvbSB9IGZyb20gJ2Fwb2xsby1saW5rJztcbmltcG9ydCB7IG9uRXJyb3IgfSBmcm9tICdhcG9sbG8tbGluay1lcnJvcic7XG5pbXBvcnQgeyBTY2hlbWFMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstc2NoZW1hJztcbmltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICcuL2NyZWF0ZUNhY2hlJztcbmltcG9ydCBjbGllbnRTY2hlbWEgZnJvbSAnLi4vZ3JhcGhxbC9zY2hlbWEnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBcG9sbG9DbGllbnQoc2NoZW1hLCBpbml0aWFsU3RhdGUpIHtcbiAgY29uc3QgY2FjaGUgPSBjcmVhdGVDYWNoZSgpO1xuICBjYWNoZS53cml0ZURhdGEoeyBkYXRhOiBpbml0aWFsU3RhdGUgfSk7XG5cbiAgY29uc3QgZXJyb3JMaW5rID0gb25FcnJvcigoeyBncmFwaFFMRXJyb3JzLCBuZXR3b3JrRXJyb3IgfSkgPT4ge1xuICAgIGlmIChncmFwaFFMRXJyb3JzKVxuICAgICAgZ3JhcGhRTEVycm9ycy5tYXAoKHsgbWVzc2FnZSwgbG9jYXRpb25zLCBwYXRoIH0pID0+XG4gICAgICAgIGNvbnNvbGUud2FybihgW0dyYXBoUUwgZXJyb3JdOiBNZXNzYWdlOiAke21lc3NhZ2V9LCBMb2NhdGlvbjogJHtsb2NhdGlvbnN9LCBQYXRoOiAke3BhdGh9YCksXG4gICAgICApO1xuICAgIGlmIChuZXR3b3JrRXJyb3IpIGNvbnNvbGUud2FybihgW05ldHdvcmsgZXJyb3JdOiAke25ldHdvcmtFcnJvcn1gKTtcbiAgfSk7XG5cbiAgY29uc3Qgc2NoZW1hTGluayA9IG5ldyBTY2hlbWFMaW5rKHsgLi4uc2NoZW1hIH0pO1xuXG4gIGNvbnN0IGxpbmsgPSBmcm9tKFtlcnJvckxpbmssIHNjaGVtYUxpbmtdKTtcblxuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgbGluayxcbiAgICBjYWNoZSxcbiAgICByZXNvbHZlcnM6IGNsaWVudFNjaGVtYS5yZXNvbHZlcnMsXG4gICAgcXVlcnlEZWR1cGxpY2F0aW9uOiB0cnVlLFxuICAgIHNzck1vZGU6IHRydWUsXG4gIH0pO1xufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSwgZGVmYXVsdERhdGFJZEZyb21PYmplY3QgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknO1xuXG5mdW5jdGlvbiBkYXRhSWRGcm9tT2JqZWN0KG9iaikge1xuICBzd2l0Y2ggKG9iai5fX3R5cGVuYW1lKSB7XG4gICAgY2FzZSAnTmV3c0l0ZW0nOlxuICAgICAgcmV0dXJuIG9iai5saW5rID8gYE5ld3NJdGVtOiR7b2JqLmxpbmt9YCA6IGRlZmF1bHREYXRhSWRGcm9tT2JqZWN0KG9iaik7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkZWZhdWx0RGF0YUlkRnJvbU9iamVjdChvYmopO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNhY2hlKCkge1xuICAvLyBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2Jhc2ljcy9jYWNoaW5nLmh0bWwjY29uZmlndXJhdGlvblxuICByZXR1cm4gbmV3IEluTWVtb3J5Q2FjaGUoe1xuICAgIGRhdGFJZEZyb21PYmplY3QsXG4gIH0pO1xufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0IGNsaWVudFNjaGVtYSBmcm9tICcuL2dyYXBocWwvc2NoZW1hJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSW5pdGlhbFN0YXRlKGRhdGE6IE9iamVjdCkge1xuICByZXR1cm4ge1xuICAgIC4uLmNsaWVudFNjaGVtYS5kZWZhdWx0cyxcbiAgICAuLi5kYXRhLFxuICB9O1xufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0IHsgdHlwZSBHcmFwaHFsRGVmU2hhcGUgfSBmcm9tICcuLi9ncmFwaHFsRGVmJztcblxuY29uc3QgZGVmOiBHcmFwaHFsRGVmU2hhcGUgPSB7XG4gIHNjaGVtYTogW1xuICAgIGBcbiAgICB0eXBlIE5ldHdvcmtTdGF0dXMge1xuICAgICAgaXNDb25uZWN0ZWQ6IEJvb2xlYW4hXG4gICAgfVxuICAgIGAsXG4gIF0sXG4gIHF1ZXJpZXM6IFtcbiAgICBgXG4gICAgbmV0d29ya1N0YXR1czogTmV0d29ya1N0YXR1cyFcbiAgICBgLFxuICBdLFxuICBtdXRhdGlvbnM6IFtcbiAgICBgXG4gICAgdXBkYXRlTmV0d29ya1N0YXR1cyhpc0Nvbm5lY3RlZDogQm9vbGVhbik6IE5ldHdvcmtTdGF0dXMhXG4gICAgYCxcbiAgXSxcbiAgcmVzb2x2ZXJzOiAoKSA9PiAoe1xuICAgIE11dGF0aW9uOiB7XG4gICAgICB1cGRhdGVOZXR3b3JrU3RhdHVzOiAoXywgeyBpc0Nvbm5lY3RlZCB9LCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgbmV0d29ya1N0YXR1czoge1xuICAgICAgICAgICAgX190eXBlbmFtZTogJ05ldHdvcmtTdGF0dXMnLFxuICAgICAgICAgICAgaXNDb25uZWN0ZWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgY29udGV4dC5jYWNoZS53cml0ZURhdGEoeyBkYXRhIH0pO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4gIGRlZmF1bHRzOiB7XG4gICAgbmV0d29ya1N0YXR1czoge1xuICAgICAgX190eXBlbmFtZTogJ05ldHdvcmtTdGF0dXMnLFxuICAgICAgaXNDb25uZWN0ZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZjtcbiIsIi8vIEBmbG93XG5cbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnLi4vZ3JhcGhxbERlZic7XG5cbmltcG9ydCBuZXR3b3JrU3RhdHVzIGZyb20gJy4vbmV0d29ya1N0YXR1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlKG5ldHdvcmtTdGF0dXMpO1xuIiwiLy8gQGZsb3dcblxuaW1wb3J0IGxvZGFzaE1lcmdlIGZyb20gJ2xvZGFzaC5tZXJnZSc7XG5pbXBvcnQgeyBQdWJTdWIgfSBmcm9tICdncmFwaHFsLXN1YnNjcmlwdGlvbnMnO1xuXG5leHBvcnQgdHlwZSBHcmFwaHFsRGVmID0ge3xcbiAgc2NoZW1hOiBzdHJpbmdbXSxcbiAgcXVlcmllczogc3RyaW5nW10sXG4gIG11dGF0aW9uczogc3RyaW5nW10sXG4gIHN1YnNjcmlwdGlvbnM6IHN0cmluZ1tdLFxuICByZXNvbHZlcnM6IChwdWJzdWI6IFB1YlN1YikgPT4gT2JqZWN0LFxuICBkZWZhdWx0czogT2JqZWN0LFxufH07XG5cbmV4cG9ydCB0eXBlIEdyYXBocWxEZWZTaGFwZSA9IHt8XG4gICtzY2hlbWE/OiBzdHJpbmdbXSxcbiAgK3F1ZXJpZXM/OiBzdHJpbmdbXSxcbiAgK211dGF0aW9ucz86IHN0cmluZ1tdLFxuICArc3Vic2NyaXB0aW9ucz86IHN0cmluZ1tdLFxuICArcmVzb2x2ZXJzPzogKHB1YnN1YjogUHViU3ViKSA9PiBPYmplY3QsXG4gICtkZWZhdWx0cz86IE9iamVjdCxcbnx9O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmNvbnN0IGR1bW15UmVzb2x2ZXIgPSAocHVic3ViOiBQdWJTdWIpID0+ICh7fSk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoLi4uZGVmczogR3JhcGhxbERlZlNoYXBlW10pOiBHcmFwaHFsRGVmIHtcbiAgcmV0dXJuIHtcbiAgICBzY2hlbWE6IFtdLmNvbmNhdCguLi5kZWZzLm1hcCgoZGVmKSA9PiBkZWYuc2NoZW1hID8/IFtdKSksXG4gICAgcXVlcmllczogW10uY29uY2F0KC4uLmRlZnMubWFwKChkZWYpID0+IGRlZi5xdWVyaWVzID8/IFtdKSksXG4gICAgbXV0YXRpb25zOiBbXS5jb25jYXQoLi4uZGVmcy5tYXAoKGRlZikgPT4gZGVmLm11dGF0aW9ucyA/PyBbXSkpLFxuICAgIHN1YnNjcmlwdGlvbnM6IFtdLmNvbmNhdCguLi5kZWZzLm1hcCgoZGVmKSA9PiBkZWYuc3Vic2NyaXB0aW9ucyA/PyBbXSkpLFxuICAgIHJlc29sdmVyczogKHB1YnN1YjogUHViU3ViKSA9PlxuICAgICAgbG9kYXNoTWVyZ2Uoe30sIC4uLmRlZnMubWFwKChkZWYpID0+IChkZWYucmVzb2x2ZXJzID8/IGR1bW15UmVzb2x2ZXIpKHB1YnN1YikpKSxcbiAgICBkZWZhdWx0czogbG9kYXNoTWVyZ2UoLi4uZGVmcy5tYXAoKGRlZikgPT4gZGVmLmRlZmF1bHRzID8/IHt9KSksXG4gIH07XG59XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJy4vZ3JhcGhxbERlZic7XG5cbmltcG9ydCBPbk1lbW9yeVN0YXRlIGZyb20gJy4vT25NZW1vcnlTdGF0ZS9zY2hlbWEnO1xuXG5leHBvcnQgZGVmYXVsdCBtZXJnZShPbk1lbW9yeVN0YXRlKTtcbiIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFVuaXZlcnNhbFJvdXRlciBmcm9tICd1bml2ZXJzYWwtcm91dGVyJztcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vcm91dGVzJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFVuaXZlcnNhbFJvdXRlcihyb3V0ZXMsIHtcbiAgcmVzb2x2ZVJvdXRlKGNvbnRleHQsIHBhcmFtcykge1xuICAgIGlmICh0eXBlb2YgY29udGV4dC5yb3V0ZS5sb2FkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY29udGV4dC5yb3V0ZS5sb2FkKCkudGhlbigoYWN0aW9uKSA9PiBhY3Rpb24uZGVmYXVsdChjb250ZXh0LCBwYXJhbXMpKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjb250ZXh0LnJvdXRlLmFjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGNvbnRleHQucm91dGUuYWN0aW9uKGNvbnRleHQsIHBhcmFtcyk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0sXG59KTtcbiIsIlxuICAgIHZhciByZWZzID0gMDtcbiAgICB2YXIgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy1ydWxlcy0zIS4vRXJyb3JQYWdlLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvaW5zZXJ0Q3NzLmpzXCIpO1xuICAgIHZhciBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuXG4gICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3NzLmxvY2FscyB8fCB7fTtcbiAgICBleHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIGV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gJycgKyBjc3M7IH07XG4gICAgZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG5cbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMyEuL0Vycm9yUGFnZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMyEuL0Vycm9yUGFnZS5jc3NcIik7XG4gICAgICAgIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9FcnJvclBhZ2UuY3NzJztcblxudHlwZSBQcm9wVHlwZXMgPSB7fFxuICBlcnJvcjoge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgc3RhY2s6IHN0cmluZyxcbiAgfSxcbnx9O1xuXG5jbGFzcyBFcnJvclBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcFR5cGVzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZXJyb3I6IG51bGwsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmIChfX0RFVl9fICYmIHRoaXMucHJvcHMuZXJyb3IpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPnt0aGlzLnByb3BzLmVycm9yLm5hbWV9PC9oMT5cbiAgICAgICAgICA8cHJlPnt0aGlzLnByb3BzLmVycm9yLnN0YWNrfTwvcHJlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5FcnJvcjwvaDE+XG4gICAgICAgIDxwPlNvcnJ5LCBhIGNyaXRpY2FsIGVycm9yIG9jY3VycmVkIG9uIHRoaXMgcGFnZS48L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7IEVycm9yUGFnZSBhcyBFcnJvclBhZ2VXaXRob3V0U3R5bGUgfTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoRXJyb3JQYWdlKTtcbiIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gJy4vRXJyb3JQYWdlJztcblxuZnVuY3Rpb24gYWN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnRGVtbyBFcnJvcicsXG4gICAgY29tcG9uZW50OiA8RXJyb3JQYWdlIC8+LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb247XG4iLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlIGdsb2JhbC1yZXF1aXJlICovXG5cbi8vIFRoZSB0b3AtbGV2ZWwgKHBhcmVudCkgcm91dGVcbmNvbnN0IHJvdXRlcyA9IHtcbiAgcGF0aDogJycsXG5cbiAgLy8gS2VlcCBpbiBtaW5kLCByb3V0ZXMgYXJlIGV2YWx1YXRlZCBpbiBvcmRlclxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHBhdGg6ICcnLFxuICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdpZGUnICovICcuL3Byb2plY3RzJyksXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL3Byb2plY3RzLzppZCcsXG4gICAgICBsb2FkOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ2lkZScgKi8gJy4vaWRlJyksXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL2NvbnRhY3QnLFxuICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdjb250YWN0JyAqLyAnLi9jb250YWN0JyksXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL2xvZ2luJyxcbiAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnbG9naW4nICovICcuL2xvZ2luJyksXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL3JlZ2lzdGVyJyxcbiAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAncmVnaXN0ZXInICovICcuL3JlZ2lzdGVyJyksXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL2hlbHAnLFxuICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdoZWxwJyAqLyAnLi9oZWxwJyksXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL2NvbnRlc3QnLFxuICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdjb250ZXN0JyAqLyAnLi9jb250ZXN0JyksXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL2Fib3V0JyxcbiAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnYWJvdXQnICovICcuL2Fib3V0JyksXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL3ByaXZhY3knLFxuICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdwcml2YWN5JyAqLyAnLi9wcml2YWN5JyksXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL2FkbWluJyxcbiAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnYWRtaW4nICovICcuL2FkbWluJyksXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL2luZGV4ZWREQicsXG4gICAgICBsb2FkOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ2luZGV4ZWREQicgKi8gJy4vaW5kZXhlZERCJyksXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL3dlYnJ0YycsXG4gICAgICBsb2FkOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ3dlYnJ0YycgKi8gJy4vd2VicnRjJyksXG4gICAgfSxcblxuICAgIC8vIFdpbGRjYXJkIHJvdXRlcywgZS5nLiB7IHBhdGg6ICcoLiopJywgLi4uIH0gKG11c3QgZ28gbGFzdClcbiAgICB7XG4gICAgICBwYXRoOiAnKC4qKScsXG4gICAgICBsb2FkOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ25vdC1mb3VuZCcgKi8gJy4vbm90LWZvdW5kJyksXG4gICAgfSxcbiAgXSxcblxuICBhc3luYyBhY3Rpb24oeyBuZXh0IH0pIHtcbiAgICAvLyBFeGVjdXRlIGVhY2ggY2hpbGQgcm91dGUgdW50aWwgb25lIG9mIHRoZW0gcmV0dXJuIHRoZSByZXN1bHRcbiAgICBjb25zdCByb3V0ZSA9IGF3YWl0IG5leHQoKTtcblxuICAgIC8vIFByb3ZpZGUgZGVmYXVsdCB2YWx1ZXMgZm9yIHRpdGxlLCBkZXNjcmlwdGlvbiBldGMuXG4gICAgcm91dGUudGl0bGUgPSBgJHtyb3V0ZS50aXRsZSA/PyAnVW50aXRsZWQgUGFnZSd9IC0gSGVkZ2Vob2cgSURFYDtcbiAgICByb3V0ZS5kZXNjcmlwdGlvbiA9IHJvdXRlLmRlc2NyaXB0aW9uID8/ICcnO1xuXG4gICAgcmV0dXJuIHJvdXRlO1xuICB9LFxufTtcblxuLy8gVGhlIGVycm9yIHBhZ2UgaXMgYXZhaWxhYmxlIGJ5IHBlcm1hbmVudCB1cmwgZm9yIGRldmVsb3BtZW50IG1vZGVcbmlmIChfX0RFVl9fKSB7XG4gIHJvdXRlcy5jaGlsZHJlbi51bnNoaWZ0KHtcbiAgICBwYXRoOiAnL2Vycm9yJyxcbiAgICBhY3Rpb246IHJlcXVpcmUoJy4vZXJyb3InKS5kZWZhdWx0LFxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xuIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnc2VyaWFsaXplLWphdmFzY3JpcHQnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWRhbmdlciAqL1xuXG50eXBlIFByb3BUeXBlcyA9IHt8XG4gIHRpdGxlOiBzdHJpbmcsXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gIHN0eWxlczogQXJyYXk8e1xuICAgIGlkOiBzdHJpbmcsXG4gICAgY3NzVGV4dDogc3RyaW5nLFxuICB9PixcbiAgc2NyaXB0czogc3RyaW5nW10sXG4gIGFwcDogT2JqZWN0LFxuICBjaGlsZHJlbjogc3RyaW5nLFxufH07XG5cbmNsYXNzIEh0bWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcFR5cGVzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc3R5bGVzOiBbXSxcbiAgICBzY3JpcHRzOiBbXSxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIHN0eWxlcywgc2NyaXB0cywgYXBwLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGh0bWwgY2xhc3NOYW1lPVwibm8tanNcIiBsYW5nPVwiZW5cIj5cbiAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJ4LXVhLWNvbXBhdGlibGVcIiBjb250ZW50PVwiaWU9ZWRnZVwiIC8+XG4gICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAge3NjcmlwdHMubWFwKChzY3JpcHQpID0+IChcbiAgICAgICAgICAgIDxsaW5rIGtleT17c2NyaXB0fSByZWw9XCJwcmVsb2FkXCIgaHJlZj17c2NyaXB0fSBhcz1cInNjcmlwdFwiIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9XCIvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIzMngzMlwiIGhyZWY9XCIvZmF2aWNvbi0zMngzMi5wbmdcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxOTR4MTk0XCIgaHJlZj1cIi9mYXZpY29uLTE5NHgxOTQucG5nXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMTkyeDE5MlwiIGhyZWY9XCIvYW5kcm9pZC1jaHJvbWUtMTkyeDE5Mi5wbmdcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIvZmF2aWNvbi0xNngxNi5wbmdcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9zaXRlLndlYm1hbmlmZXN0XCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJtYXNrLWljb25cIiBocmVmPVwiL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiIGNvbG9yPVwiIzdjZDAwMVwiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZVwiIGNvbnRlbnQ9XCJIZWRnZWhvZ1wiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxpY2F0aW9uLW5hbWVcIiBjb250ZW50PVwiSGVkZ2Vob2dcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjN2NkMDAxXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlSW1hZ2VcIiBjb250ZW50PVwiL21zdGlsZS0xNDR4MTQ0LnBuZ1wiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tY29uZmlnXCIgY29udGVudD1cIi9icm93c2VyY29uZmlnLnhtbFwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiNmZmZmZmZcIiAvPlxuICAgICAgICAgIHtzdHlsZXMubWFwKChzdHlsZSkgPT4gKFxuICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgIGtleT17c3R5bGUuaWR9XG4gICAgICAgICAgICAgIGlkPXtzdHlsZS5pZH1cbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdHlsZS5jc3NUZXh0IH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2hlYWQ+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIDxkaXYgaWQ9XCJhcHBcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNoaWxkcmVuIH19IC8+XG4gICAgICAgICAgPHNjcmlwdCBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGB3aW5kb3cuQXBwPSR7c2VyaWFsaXplKGFwcCl9YCB9fSAvPlxuICAgICAgICAgIHtzY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiAoXG4gICAgICAgICAgICA8c2NyaXB0IGtleT17c2NyaXB0fSBzcmM9e3NjcmlwdH0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7Y29uZmlnLmFuYWx5dGljcy5nb29nbGVUcmFja2luZ0lkICYmIChcbiAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6XG4gICAgICAgICAgICAgICAgICAnd2luZG93LmdhPWZ1bmN0aW9uKCl7Z2EucS5wdXNoKGFyZ3VtZW50cyl9O2dhLnE9W107Z2EubD0rbmV3IERhdGU7JyArXG4gICAgICAgICAgICAgICAgICBgZ2EoJ2NyZWF0ZScsJyR7Y29uZmlnLmFuYWx5dGljcy5nb29nbGVUcmFja2luZ0lkfScsJ2F1dG8nKTtnYSgnc2VuZCcsJ3BhZ2V2aWV3JylgLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtjb25maWcuYW5hbHl0aWNzLmdvb2dsZVRyYWNraW5nSWQgJiYgKFxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanNcIiBhc3luYyBkZWZlciAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvaHRtbD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEh0bWw7XG4iLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gIHRocm93IG5ldyBFcnJvcignRG8gbm90IGltcG9ydCBgY29uZmlnLmpzYCBmcm9tIGluc2lkZSB0aGUgY2xpZW50LXNpZGUgY29kZS4nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIE5vZGUuanMgYXBwXG4gIHBvcnQ6IHByb2Nlc3MuZW52LlBPUlQgPz8gMzAwMCxcbiAgc2VjdXJlUG9ydDogcHJvY2Vzcy5lbnYuU0VDVVJFX1BPUlQgPz8gMzAwMSxcbiAgY2VydEZpbGU6IHByb2Nlc3MuZW52LkNFUlRfRklMRSA/PyBudWxsLFxuICBrZXlGaWxlOiBwcm9jZXNzLmVudi5LRVlfRklMRSA/PyBudWxsLFxuXG4gIC8vIGh0dHBzOi8vZXhwcmVzc2pzLmNvbS9lbi9ndWlkZS9iZWhpbmQtcHJveGllcy5odG1sXG4gIHRydXN0UHJveHk6IHByb2Nlc3MuZW52LlRSVVNUX1BST1hZID8/ICdsb29wYmFjaycsXG5cbiAgLy8gQVBJIEdhdGV3YXlcbiAgYXBpOiB7XG4gICAgLy8gQVBJIFVSTCB0byBiZSB1c2VkIGluIHRoZSBjbGllbnQtc2lkZSBjb2RlXG4gICAgY2xpZW50VXJsOiBwcm9jZXNzLmVudi5BUElfQ0xJRU5UX1VSTCA/PyAnJyxcbiAgICAvLyBBUEkgVVJMIHRvIGJlIHVzZWQgaW4gdGhlIHNlcnZlci1zaWRlIGNvZGVcbiAgICBzZXJ2ZXJVcmw6IHByb2Nlc3MuZW52LkFQSV9TRVJWRVJfVVJMID8/IGBodHRwOi8vbG9jYWxob3N0OiR7cHJvY2Vzcy5lbnYuUE9SVCA/PyAzMDAwfWAsXG4gIH0sXG5cbiAgLy8gc2NoZW1hXG4gIGRhdGFiYXNlVXJsOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwgPz8gJ3NxbGl0ZTpkYXRhYmFzZS5zcWxpdGUnLFxuICBtb25nb2RiVXJsOiBwcm9jZXNzLmVudi5NT05HT0RCX1VSTCA/PyAnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9oZWRnZWhvZ0lkZScsXG5cbiAgLy8gV2ViIGFuYWx5dGljc1xuICBhbmFseXRpY3M6IHtcbiAgICAvLyBodHRwczovL2FuYWx5dGljcy5nb29nbGUuY29tL1xuICAgIGdvb2dsZVRyYWNraW5nSWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9UUkFDS0lOR19JRCwgLy8gVUEtWFhYWFgtWFxuICB9LFxuXG4gIC8vIEF1dGhlbnRpY2F0aW9uXG4gIGF1dGg6IHtcbiAgICB0b2tlbkV4cGlyZXNJbjogcHJvY2Vzcy5lbnYuVE9LRU5fRVhQSVJFU19JTiA/PyAnN2QnLCAvLyBEZWZhdWx0IHNlc3Npb24gZHVyYXRpb246IDcgZGF5c1xuICAgIGp3dDogeyBzZWNyZXQ6IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgPz8gJ1JlYWN0IFN0YXJ0ZXIgS2l0JyB9LFxuXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9cbiAgICBmYWNlYm9vazoge1xuICAgICAgaWQ6IHByb2Nlc3MuZW52LkZBQ0VCT09LX0FQUF9JRCA/PyAnMTg2MjQ0NTUxNzQ1NjMxJyxcbiAgICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuRkFDRUJPT0tfQVBQX1NFQ1JFVCA/PyAnYTk3MGFlMzI0MGFiNGI5YjhhYWUwZjlmMDY2MWM2ZmMnLFxuICAgIH0sXG5cbiAgICAvLyBodHRwczovL2Nsb3VkLmdvb2dsZS5jb20vY29uc29sZS9wcm9qZWN0XG4gICAgZ29vZ2xlOiB7XG4gICAgICBpZDpcbiAgICAgICAgcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCA/P1xuICAgICAgICAnMjUxNDEwNzMwNTUwLWFoY2cwb3U1bWdmaGw4aGx1aTF1cnJ1N2puNXMxMmttLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJyxcbiAgICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQgPz8gJ1k4eVI5eVpBaG05alE4RktBTDhRSUVjZCcsXG4gICAgfSxcblxuICAgIC8vIGh0dHBzOi8vYXBwcy50d2l0dGVyLmNvbS9cbiAgICB0d2l0dGVyOiB7XG4gICAgICBrZXk6IHByb2Nlc3MuZW52LlRXSVRURVJfQ09OU1VNRVJfS0VZID8/ICdJZTIwQVp2TEpJMmxRRDVEc2d4Z2phdW5zJyxcbiAgICAgIHNlY3JldDpcbiAgICAgICAgcHJvY2Vzcy5lbnYuVFdJVFRFUl9DT05TVU1FUl9TRUNSRVQgPz8gJ0tUWjZjeG9LbkVha1FDZVNwWmxhVUNKV0dBbFRFQkpqMHkyRU1rVUJ1akE3eldTdmFRJyxcbiAgICB9LFxuICB9LFxufTtcbiIsIi8vIEBmbG93XG5cbmltcG9ydCB7IFNjaGVtYURpcmVjdGl2ZVZpc2l0b3IgfSBmcm9tICdncmFwaHFsLXRvb2xzJztcbmltcG9ydCB7IGRlZmF1bHRGaWVsZFJlc29sdmVyLCBHcmFwaFFMRmllbGQgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uRXJyb3IgfSBmcm9tICdhcG9sbG8tc2VydmVyJztcblxuLy8gRnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2p3aGVuc2hhdy9ncmFwaHFsLWRpcmVjdGl2ZXMtYXV0aC9ibG9iL21hc3Rlci9GaWVsZEF1dGhEaXJlY3RpdmUuanNcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhEaXJlY3RpdmUgZXh0ZW5kcyBTY2hlbWFEaXJlY3RpdmVWaXNpdG9yIHtcbiAgdmlzaXRGaWVsZERlZmluaXRpb24oZmllbGQ6IEdyYXBoUUxGaWVsZCwgX2RldGFpbHM6IGFueSkge1xuICAgIHRoaXMuZW5zdXJlRmllbGRXcmFwcGVkKGZpZWxkKTtcbiAgfVxuXG4gIGVuc3VyZUZpZWxkV3JhcHBlZChmaWVsZDogR3JhcGhRTEZpZWxkKSB7XG4gICAgY29uc3QgeyByZXNvbHZlOiBvcmlnaW5hbFJlc29sdmUgPSBkZWZhdWx0RmllbGRSZXNvbHZlciB9ID0gZmllbGQ7XG5cbiAgICBhc3luYyBmdW5jdGlvbiByZXNvbHZlKC4uLmFyZ3MpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBhcmdzWzJdO1xuICAgICAgaWYgKCFjb250ZXh0LnVzZXI/LnVzZXJJZCkge1xuICAgICAgICB0aHJvdyBuZXcgQXV0aGVudGljYXRpb25FcnJvcignbm90IGF1dGhvcml6ZWQnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9yaWdpbmFsUmVzb2x2ZS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG5cbiAgICBmaWVsZC5yZXNvbHZlID0gcmVzb2x2ZS5iaW5kKHRoaXMpO1xuICB9XG59XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgeyBQdWJTdWIgfSBmcm9tICdncmFwaHFsLXN1YnNjcmlwdGlvbnMnO1xuXG5pbXBvcnQgeyB0eXBlIEdyYXBocWxEZWYsIG1lcmdlIH0gZnJvbSAnLi4vLi4vY29yZS9ncmFwaHFsL2dyYXBocWxEZWYnO1xuXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hL2luZGV4JztcbmltcG9ydCBDb3JlIGZyb20gJy4uLy4uL2NvcmUvZ3JhcGhxbC9zY2hlbWEnO1xuaW1wb3J0IEF1dGhEaXJlY3RpdmUgZnJvbSAnLi9BdXRoRGlyZWN0aXZlJztcblxuY29uc3QgZGVmOiBHcmFwaHFsRGVmID0gbWVyZ2UoU2NoZW1hLCBDb3JlKTtcblxuY29uc3QgUm9vdFF1ZXJ5ID0gW1xuICBgXG4gICMgIyBSZWFjdC1TdGFydGVyLUtpdCBRdWVyeWluZyBBUElcbiAgIyAjIyMgVGhpcyBHcmFwaFFMIHNjaGVtYSB3YXMgYnVpbHQgd2l0aCBbQXBvbGxvIEdyYXBoUUwtVG9vbHNdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcG9sbG9ncmFwaHFsL2dyYXBocWwtdG9vbHMpXG4gICMgX0J1aWxkLCBtb2NrLCBhbmQgc3RpdGNoIGEgR3JhcGhRTCBzY2hlbWEgdXNpbmcgdGhlIHNjaGVtYSBsYW5ndWFnZV9cbiAgI1xuICAjICoqW1NjaGVtYSBMYW5ndWFnZSBDaGVldCBTaGVldF0oaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NvZ2tvL2dyYXBocWwtc2hvcnRoYW5kLW5vdGF0aW9uLWNoZWF0LXNoZWV0L21hc3Rlci9ncmFwaHFsLXNob3J0aGFuZC1ub3RhdGlvbi1jaGVhdC1zaGVldC5wbmcpKipcbiAgI1xuICAjIDEuIFVzZSB0aGUgR3JhcGhRTCBzY2hlbWEgbGFuZ3VhZ2UgdG8gW2dlbmVyYXRlIGEgc2NoZW1hXShodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL2dyYXBocWwtdG9vbHMvZ2VuZXJhdGUtc2NoZW1hLmh0bWwpIHdpdGggZnVsbCBzdXBwb3J0IGZvciByZXNvbHZlcnMsIGludGVyZmFjZXMsIHVuaW9ucywgYW5kIGN1c3RvbSBzY2FsYXJzLiBUaGUgc2NoZW1hIHByb2R1Y2VkIGlzIGNvbXBsZXRlbHkgY29tcGF0aWJsZSB3aXRoIFtHcmFwaFFMLmpzXShodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhxbC9ncmFwaHFsLWpzKS5cbiAgIyAyLiBbTW9jayB5b3VyIEdyYXBoUUwgQVBJXShodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL2dyYXBocWwtdG9vbHMvbW9ja2luZy5odG1sKSB3aXRoIGZpbmUtZ3JhaW5lZCBwZXItdHlwZSBtb2NraW5nXG4gICMgMy4gQXV0b21hdGljYWxseSBbc3RpdGNoIG11bHRpcGxlIHNjaGVtYXMgdG9nZXRoZXJdKGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvZ3JhcGhxbC10b29scy9zY2hlbWEtc3RpdGNoaW5nLmh0bWwpIGludG8gb25lIGxhcmdlciBBUElcbiAgdHlwZSBSb290UXVlcnkge1xuICAgICR7ZGVmLnF1ZXJpZXMudG9TdHJpbmcoKX1cbiAgfVxuICBgLFxuXTtcblxuY29uc3QgTXV0YXRpb24gPSBbXG4gIGBcbiAgIyAjIFJlYWN0LVN0YXJ0ZXItS2l0IE11dGF0aW5nIEFQSVxuICAjICMjIyBUaGlzIEdyYXBoUUwgc2NoZW1hIHdhcyBidWlsdCB3aXRoIFtBcG9sbG8gR3JhcGhRTC1Ub29sc10oaHR0cHM6Ly9naXRodWIuY29tL2Fwb2xsb2dyYXBocWwvZ3JhcGhxbC10b29scylcbiAgIyBfQnVpbGQsIG1vY2ssIGFuZCBzdGl0Y2ggYSBHcmFwaFFMIHNjaGVtYSB1c2luZyB0aGUgc2NoZW1hIGxhbmd1YWdlX1xuICAjXG4gICMgKipbU2NoZW1hIExhbmd1YWdlIENoZWV0IFNoZWV0XShodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc29na28vZ3JhcGhxbC1zaG9ydGhhbmQtbm90YXRpb24tY2hlYXQtc2hlZXQvbWFzdGVyL2dyYXBocWwtc2hvcnRoYW5kLW5vdGF0aW9uLWNoZWF0LXNoZWV0LnBuZykqKlxuICAjXG4gICMgMS4gVXNlIHRoZSBHcmFwaFFMIHNjaGVtYSBsYW5ndWFnZSB0byBbZ2VuZXJhdGUgYSBzY2hlbWFdKGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvZ3JhcGhxbC10b29scy9nZW5lcmF0ZS1zY2hlbWEuaHRtbCkgd2l0aCBmdWxsIHN1cHBvcnQgZm9yIHJlc29sdmVycywgaW50ZXJmYWNlcywgdW5pb25zLCBhbmQgY3VzdG9tIHNjYWxhcnMuIFRoZSBzY2hlbWEgcHJvZHVjZWQgaXMgY29tcGxldGVseSBjb21wYXRpYmxlIHdpdGggW0dyYXBoUUwuanNdKGh0dHBzOi8vZ2l0aHViLmNvbS9ncmFwaHFsL2dyYXBocWwtanMpLlxuICAjIDIuIFtNb2NrIHlvdXIgR3JhcGhRTCBBUEldKGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvZ3JhcGhxbC10b29scy9tb2NraW5nLmh0bWwpIHdpdGggZmluZS1ncmFpbmVkIHBlci10eXBlIG1vY2tpbmdcbiAgIyAzLiBBdXRvbWF0aWNhbGx5IFtzdGl0Y2ggbXVsdGlwbGUgc2NoZW1hcyB0b2dldGhlcl0oaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9ncmFwaHFsLXRvb2xzL3NjaGVtYS1zdGl0Y2hpbmcuaHRtbCkgaW50byBvbmUgbGFyZ2VyIEFQSVxuICB0eXBlIE11dGF0aW9uIHtcbiAgICAke2RlZi5tdXRhdGlvbnMudG9TdHJpbmcoKX1cbiAgfVxuICBgLFxuXTtcblxuLy8gVGhpcyBhZGRzIGEgZHVtbXkgc3Vic2NyaXB0aW9uIGluIGNhc2Ugbm8gc3Vic2NyaXB0aW9uIGlzIGRlZmluZWQuXG4vLyBBcyB0aGUgc2VydmVyIGNhbm5vdCBzdGFydCB3aXRob3V0IHRoZSBTdWJzY3JpcHRpb24gdHlwZSBkZWZpbmVkIGFuZFxuLy8gZW1wdHkgdHlwZXMgYXJlIGFwcGFyZW50bHkgbm90IGFsbG93ZWQgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhxbC9ncmFwaHFsLWpzL2lzc3Vlcy85MzcpLlxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBTdWJzY3JpcHRpb24gPSBkZWYuc3Vic2NyaXB0aW9ucy5sZW5ndGggPiAwID8gW1xuICBgXG4gIHR5cGUgU3Vic2NyaXB0aW9uIHtcbiAgICAke2RlZi5zdWJzY3JpcHRpb25zLnRvU3RyaW5nKCl9XG4gIH1cbiAgYCxcbl0gOiBbXG4gIGBcbiAgdHlwZSBTdWJzY3JpcHRpb24ge1xuICAgIF8gOiBCb29sZWFuXG4gIH1cbiAgYCxcbl07XG5cbmNvbnN0IFNjaGVtYURlZmluaXRpb24gPSBbXG4gIGBcbiAgc2NoZW1hIHtcbiAgICBxdWVyeTogUm9vdFF1ZXJ5XG4gICAgbXV0YXRpb246IE11dGF0aW9uXG4gICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgfVxuICBgLFxuXTtcblxuY29uc3Qgc2NoZW1hID0gW1xuICBgXG4gIGRpcmVjdGl2ZSBAYXV0aCBvbiBGSUVMRF9ERUZJTklUSU9OXG4gIGAsXG4gIC4uLlNjaGVtYURlZmluaXRpb24sXG4gIC4uLlJvb3RRdWVyeSxcbiAgLi4uTXV0YXRpb24sXG4gIC4uLlN1YnNjcmlwdGlvbixcblxuICAuLi5kZWYuc2NoZW1hLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0eXBlRGVmczogc2NoZW1hLFxuICByZXNvbHZlcnM6IGRlZi5yZXNvbHZlcnMobmV3IFB1YlN1YigpKSxcbiAgc2NoZW1hRGlyZWN0aXZlczoge1xuICAgIGF1dGg6IEF1dGhEaXJlY3RpdmUsXG4gIH0sXG4gIC4uLihfX0RFVl9fID8geyBsb2c6IChlOiBFcnJvcikgPT4gY29uc29sZS5lcnJvcihlLnN0YWNrKSB9IDoge30pLFxufTtcbiIsIi8vIEBmbG93XG5cbmltcG9ydCBiYXNlNjQgZnJvbSAnYmFzZTY0LWpzJztcblxuaW1wb3J0IHsgQXBvbGxvRXJyb3IgfSBmcm9tICdhcG9sbG8tc2VydmVyJztcbmltcG9ydCB0eXBlIHsgR3JhcGhxbERlZlNoYXBlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9ncmFwaHFsL2dyYXBocWxEZWYnO1xuXG5pbXBvcnQgZGIsIHsgRmlsZSwgRmlsZVRyZWUsIFByb2plY3QgfSBmcm9tICcuLi8uLi9tb25nb2RiJztcblxuY29uc3QgZGVmOiBHcmFwaHFsRGVmU2hhcGUgPSB7XG4gIHNjaGVtYTogW1xuICAgIGBcbiAgICB0eXBlIFByb2plY3Qge1xuICAgICAgaWQ6IElEIVxuICAgICAgbmFtZTogU3RyaW5nIVxuICAgICAgaXNQdWJsaWM6IEJvb2xlYW4hXG4gICAgICBmaWxlVHJlZVJvb3RJZDogSUQhXG4gICAgICBmaWxlVHJlZXM6IFtGaWxlVHJlZSFdIVxuICAgICAgZmlsZXM6IFtGaWxlIV0hXG4gICAgfVxuXG4gICAgdHlwZSBGaWxlVHJlZSB7XG4gICAgICBpZDogSUQhXG4gICAgICBjb250ZW50czogW0ZpbGVUcmVlUmVjb3JkIV0hXG4gICAgfVxuXG4gICAgdHlwZSBGaWxlIHtcbiAgICAgIGlkOiBJRCFcbiAgICAgIGRhdGE6IFN0cmluZyFcbiAgICB9XG5cbiAgICB0eXBlIEZpbGVUcmVlUmVjb3JkIHtcbiAgICAgIG5hbWU6IFN0cmluZyFcbiAgICAgIHR5cGU6IEZpbGVUcmVlUmVjb3JkVHlwZSFcbiAgICAgIGl0ZW1JZDogSUQhXG4gICAgfVxuXG4gICAgZW51bSBGaWxlVHJlZVJlY29yZFR5cGUge1xuICAgICAgRklMRVxuICAgICAgVFJFRVxuICAgIH1cblxuICAgIGlucHV0IFByb2plY3RJbnB1dCB7XG4gICAgICBpZDogSURcbiAgICAgIG5hbWU6IFN0cmluZyFcbiAgICAgIGlzUHVibGljOiBCb29sZWFuIVxuICAgICAgZmlsZVRyZWU6IEZpbGVUcmVlSW5wdXQhXG4gICAgfVxuXG4gICAgaW5wdXQgRmlsZVRyZWVJbnB1dCB7XG4gICAgICBpZDogSURcbiAgICAgIGZpbGVzOiBbRmlsZVRyZWVGaWxlUmVjb3JkSW5wdXQhXSFcbiAgICAgIHRyZWVzOiBbRmlsZVRyZWVUcmVlUmVjb3JkSW5wdXQhXSFcbiAgICB9XG5cbiAgICBpbnB1dCBGaWxlVHJlZUZpbGVSZWNvcmRJbnB1dCB7XG4gICAgICBpZDogSURcbiAgICAgIG5hbWU6IFN0cmluZyFcbiAgICAgIGRhdGE6IFN0cmluZyFcbiAgICB9XG5cbiAgICBpbnB1dCBGaWxlVHJlZVRyZWVSZWNvcmRJbnB1dCB7XG4gICAgICBuYW1lOiBTdHJpbmchXG4gICAgICB0cmVlOiBGaWxlVHJlZUlucHV0IVxuICAgIH1cblxuICAgIGlucHV0IFByb2plY3RVcGRhdGVJbnB1dCB7XG4gICAgICBuYW1lOiBTdHJpbmdcbiAgICAgIGlzUHVibGljOiBCb29sZWFuXG4gICAgfVxuICAgIGAsXG4gIF0sXG4gIHF1ZXJpZXM6IFtcbiAgICBgXG4gICAgcHJvamVjdHM6IFtQcm9qZWN0IV0hXG4gICAgcHJvamVjdEJ5SWQoaWQ6IElEISk6IFByb2plY3QhXG4gICAgYCxcbiAgXSxcbiAgbXV0YXRpb25zOiBbXG4gICAgYFxuICAgIGNyZWF0ZVByb2plY3QocHJvamVjdDogUHJvamVjdElucHV0ISkgOiBJRCEgQGF1dGhcbiAgICBkZWxldGVQcm9qZWN0QnlJZChwcm9qZWN0SWQ6IElEISk6IElEIEBhdXRoXG4gICAgdXBkYXRlUHJvamVjdChwcm9qZWN0SWQ6IElEISwgcHJvamVjdDogUHJvamVjdFVwZGF0ZUlucHV0ISk6IElEIEBhdXRoXG4gICAgYCxcbiAgXSxcbiAgcmVzb2x2ZXJzOiAoKSA9PiAoe1xuICAgIFJvb3RRdWVyeToge1xuICAgICAgYXN5bmMgcHJvamVjdHMoXywgX2FyZ3MsIF9jb250ZXh0KSB7XG4gICAgICAgIHJldHVybiAvKiBhd2FpdCAqLyBQcm9qZWN0LmZpbmQoe30pO1xuICAgICAgfSxcbiAgICAgIGFzeW5jIHByb2plY3RCeUlkKF8sIHsgaWQgfSwgX2NvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIC8qIGF3YWl0ICovIFByb2plY3QuZmluZEJ5SWQoaWQpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIFByb2plY3Q6IHtcbiAgICAgIGZpbGVUcmVlUm9vdElkKHBhcmVudCwgX2FyZ3MsIF9jb250ZXh0KSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQuZmlsZVRyZWVSb290O1xuICAgICAgfSxcbiAgICAgIGFzeW5jIGZpbGVUcmVlcyhwYXJlbnQsIF9hcmdzLCBfY29udGV4dCkge1xuICAgICAgICByZXR1cm4gRmlsZVRyZWUuZmluZCh7IHByb2plY3Q6IHBhcmVudC5pZCB9KTtcbiAgICAgIH0sXG4gICAgICBhc3luYyBmaWxlcyhwYXJlbnQsIF9hcmdzLCBfY29udGV4dCkge1xuICAgICAgICByZXR1cm4gRmlsZS5maW5kKHsgcHJvamVjdDogcGFyZW50LmlkIH0pO1xuICAgICAgfSxcbiAgICB9LFxuICAgIEZpbGU6IHtcbiAgICAgIGRhdGEocGFyZW50LCBfYXJncywgX2NvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KHBhcmVudC5kYXRhKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBGaWxlVHJlZVJlY29yZDoge1xuICAgICAgaXRlbUlkKHBhcmVudCwgX2FyZ3MsIF9jb250ZXh0KSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQucmVmO1xuICAgICAgfSxcbiAgICB9LFxuICAgIE11dGF0aW9uOiB7XG4gICAgICBhc3luYyBjcmVhdGVQcm9qZWN0KF8sIHsgcHJvamVjdDogcHJvamVjdElucHV0IH0sIF9jb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBkYi5zdGFydFNlc3Npb24oKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBbcHJvamVjdF0gPSBhd2FpdCBQcm9qZWN0LmNyZWF0ZShcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IHByb2plY3RJbnB1dC5uYW1lLFxuICAgICAgICAgICAgICAgIGlzUHVibGljOiBwcm9qZWN0SW5wdXQuaXNQdWJsaWMsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgeyBzZXNzaW9uIH0sXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGFzeW5jIGZ1bmN0aW9uIHNhdmVGaWxlVHJlZSh0cmVlKSB7XG4gICAgICAgICAgICBjb25zdCBzYXZlZEZpbGVQcm9taXNlcyA9IHRyZWUuZmlsZXMubWFwKChmaWxlKSA9PlxuICAgICAgICAgICAgICBGaWxlLmNyZWF0ZShcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHByb2plY3QuaWQsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IEJ1ZmZlci5mcm9tKGJhc2U2NC50b0J5dGVBcnJheShmaWxlLmRhdGEpKSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB7IHNlc3Npb24gfSxcbiAgICAgICAgICAgICAgKS50aGVuKChbc2F2ZWRGaWxlXSkgPT4gKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgICAgICAgdHlwZTogJ0ZJTEUnLFxuICAgICAgICAgICAgICAgIHJlZjogc2F2ZWRGaWxlLmlkLFxuICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBzYXZlZFRyZWVQcm9taXNlcyA9IHRyZWUudHJlZXMubWFwKChjaGlsZFRyZWUpID0+XG4gICAgICAgICAgICAgIHNhdmVGaWxlVHJlZShjaGlsZFRyZWUudHJlZSkudGhlbigoc2F2ZWRUcmVlKSA9PiAoe1xuICAgICAgICAgICAgICAgIG5hbWU6IGNoaWxkVHJlZS5uYW1lLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdUUkVFJyxcbiAgICAgICAgICAgICAgICByZWY6IHNhdmVkVHJlZS5pZCxcbiAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgY29udGVudHMgPSBhd2FpdCBQcm9taXNlLmFsbChbLi4uc2F2ZWRGaWxlUHJvbWlzZXMsIC4uLnNhdmVkVHJlZVByb21pc2VzXSk7XG5cbiAgICAgICAgICAgIGNvbnN0IFtmaWxlVHJlZV0gPSBhd2FpdCBGaWxlVHJlZS5jcmVhdGUoXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwcm9qZWN0OiBwcm9qZWN0LmlkLFxuICAgICAgICAgICAgICAgICAgY29udGVudHMsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgeyBzZXNzaW9uIH0sXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICByZXR1cm4gZmlsZVRyZWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3Qgcm9vdCA9IGF3YWl0IHNhdmVGaWxlVHJlZShwcm9qZWN0SW5wdXQuZmlsZVRyZWUpO1xuICAgICAgICAgIHByb2plY3QuZmlsZVRyZWVSb290ID0gcm9vdC5pZDtcbiAgICAgICAgICBhd2FpdCBwcm9qZWN0LnNhdmUoKTtcbiAgICAgICAgICByZXR1cm4gcHJvamVjdC5pZDtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBhd2FpdCBzZXNzaW9uLmVuZFNlc3Npb24oKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jIGRlbGV0ZVByb2plY3RCeUlkKF9wYXJlbnQsIHsgcHJvamVjdElkIH0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBkZWxldGVkID0gYXdhaXQgUHJvamVjdC5maW5kQnlJZEFuZERlbGV0ZSh7IF9pZDogcHJvamVjdElkIH0pO1xuICAgICAgICAgIGlmIChkZWxldGVkPy5pZCkge1xuICAgICAgICAgICAgYXdhaXQgRmlsZVRyZWUuZGVsZXRlTWFueSh7IHByb2plY3Q6IHByb2plY3RJZCB9KTtcbiAgICAgICAgICAgIGF3YWl0IEZpbGUuZGVsZXRlTWFueSh7IHByb2plY3Q6IHByb2plY3RJZCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGRlbGV0ZWQ/LmlkO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgdGhyb3cgbmV3IEFwb2xsb0Vycm9yKCdGYWlsZWQgdG8gZGVsZXRlIHByb2plY3QuJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhc3luYyB1cGRhdGVQcm9qZWN0KF9wYXJlbnQsIHsgcHJvamVjdElkLCBwcm9qZWN0IH0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBQcm9qZWN0LnVwZGF0ZSh7IF9pZDogcHJvamVjdElkIH0sIHsgLi4ucHJvamVjdCB9KTtcbiAgICAgICAgICBpZiAocmVzLm4gPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcHJvamVjdElkO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgdGhyb3cgbmV3IEFwb2xsb0Vycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHByb2plY3QuJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWY7XG4iLCIvLyBAZmxvd1xuaW1wb3J0IHsgQXBvbGxvRXJyb3IsIEF1dGhlbnRpY2F0aW9uRXJyb3IgfSBmcm9tICdhcG9sbG8tc2VydmVyJztcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnO1xuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuXG5pbXBvcnQgdHlwZSB7IEdyYXBocWxEZWZTaGFwZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZ3JhcGhxbC9ncmFwaHFsRGVmJztcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vbmdvZGInO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5jb25zdCBkZWY6IEdyYXBocWxEZWZTaGFwZSA9IHtcbiAgc2NoZW1hOiBbXG4gICAgYFxuICAgIHR5cGUgVXNlckxvZ2luIHtcbiAgICAgIGlkOiBJRCFcbiAgICAgIHVzZXJuYW1lOiBTdHJpbmchXG4gICAgICB0b2tlbjogU3RyaW5nIVxuICAgIH1cblxuICAgIHR5cGUgVXNlciB7XG4gICAgICBpZDogSUQhXG4gICAgICB1c2VybmFtZTogU3RyaW5nIVxuICAgIH1cbiAgICBgLFxuICBdLFxuICBxdWVyaWVzOiBbXG4gICAgYFxuICAgIHVzZXI6IFVzZXIhIEBhdXRoXG4gICAgYCxcbiAgXSxcbiAgbXV0YXRpb25zOiBbXG4gICAgYFxuICAgIGxvZ2luKHVzZXJuYW1lOiBTdHJpbmchLCBwYXNzd29yZDogU3RyaW5nISk6IFVzZXJMb2dpbiFcbiAgICBgLFxuICBdLFxuICByZXNvbHZlcnM6ICgpID0+ICh7XG4gICAgUm9vdFF1ZXJ5OiB7XG4gICAgICBhc3luYyB1c2VyKF8sIF9hcmdzLCBjb250ZXh0KSB7XG4gICAgICAgIGxldCB1c2VyO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRCeUlkKGNvbnRleHQudXNlci51c2VySWQpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICB0aHJvdyBuZXcgQXBvbGxvRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCB1c2VyLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdXRhdGlvbjoge1xuICAgICAgYXN5bmMgbG9naW4oXywgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSwgX2NvbnRleHQpIHtcbiAgICAgICAgbGV0IHVzZXI7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IHVzZXJuYW1lIH0pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICB0aHJvdyBuZXcgQXBvbGxvRXJyb3IoJ0ZhaWxlZCB0byBwcm9jZXNzIGxvZ2luLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgIHRocm93IG5ldyBBdXRoZW50aWNhdGlvbkVycm9yKCdJbnZhbGlkIGxvZ2luIGNyZWRlbnRpYWxzLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFzc3dvcmRNYXRjaCA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICAgIGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkLCAoZXJyLCBtYXRjaCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICByZWooZXJyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlcyhtYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocGFzc3dvcmRNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oeyB1c2VySWQ6IHVzZXIuaWQgfSwgY29uZmlnLmF1dGguand0LnNlY3JldCwge1xuICAgICAgICAgICAgZXhwaXJlc0luOiBjb25maWcuYXV0aC50b2tlbkV4cGlyZXNJbixcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIFRPRE86IGFkZCBleHBpcnkgZGF0ZVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgdG9rZW4sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgQXV0aGVudGljYXRpb25FcnJvcignSW52YWxpZCBsb2dpbiBjcmVkZW50aWFscy4nKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWY7XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZ3JhcGhxbC9ncmFwaHFsRGVmJztcblxuaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlKFVzZXIsIFByb2plY3QpO1xuIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGNvb2tpZVBhcnNlciBmcm9tICdjb29raWUtcGFyc2VyJztcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCBleHByZXNzSnd0LCB7IFVuYXV0aG9yaXplZEVycm9yIGFzIEp3dDQwMUVycm9yIH0gZnJvbSAnZXhwcmVzcy1qd3QnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByZXR0eUVycm9yIGZyb20gJ3ByZXR0eS1lcnJvcic7XG5pbXBvcnQgeyBBcG9sbG9TZXJ2ZXIsIG1ha2VFeGVjdXRhYmxlU2NoZW1hIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJztcbmltcG9ydCB7IGdldERhdGFGcm9tVHJlZSB9IGZyb20gJ0BhcG9sbG8vcmVhY3Qtc3NyJztcbmltcG9ydCBodHRwIGZyb20gJ2h0dHAnO1xuXG5pbXBvcnQgY3JlYXRlQXBvbGxvQ2xpZW50IGZyb20gJy4uL2NvcmUvY3JlYXRlQXBvbGxvQ2xpZW50JztcbmltcG9ydCBBcHAgZnJvbSAnLi4vY29tcG9uZW50cy9BcHAnO1xuaW1wb3J0IHsgRXJyb3JQYWdlV2l0aG91dFN0eWxlIH0gZnJvbSAnLi4vcm91dGVzL2Vycm9yL0Vycm9yUGFnZSc7XG5pbXBvcnQgZXJyb3JQYWdlU3R5bGUgZnJvbSAnLi4vcm91dGVzL2Vycm9yL0Vycm9yUGFnZS5jc3MnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuLi9jb3JlL3JvdXRlcic7XG5pbXBvcnQgc2NoZW1hIGZyb20gJy4vZ3JhcGhxbC9zY2hlbWEnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgY3JlYXRlSW5pdGlhbFN0YXRlIGZyb20gJy4uL2NvcmUvY3JlYXRlSW5pdGlhbFN0YXRlJztcbmltcG9ydCByZW5kZXJIdG1sIGZyb20gJy4vcmVuZGVySHRtbCc7XG5pbXBvcnQgcmVuZGVyRXhlY3V0b3IgZnJvbSAnLi9yZW5kZXJFeGVjdXRvcic7XG5pbXBvcnQgeyBJc29tb3JwaGljU3R5bGVMb2FkZXIsIE1hdGVyaWFsU3R5bGVMb2FkZXIsIGxvYWRTY3JpcHRzIH0gZnJvbSAnLi9sb2FkZXJzJztcblxucHJvY2Vzcy5vbigndW5oYW5kbGVkUmVqZWN0aW9uJywgKHJlYXNvbiwgcCkgPT4ge1xuICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgUmVqZWN0aW9uIGF0OicsIHAsICdyZWFzb246JywgcmVhc29uKTtcbiAgLy8gc2VuZCBlbnRpcmUgYXBwIGRvd24uIFByb2Nlc3MgbWFuYWdlciB3aWxsIHJlc3RhcnQgaXRcbiAgcHJvY2Vzcy5leGl0KDEpO1xufSk7XG5cbi8vXG4vLyBUZWxsIGFueSBDU1MgdG9vbGluZyAoc3VjaCBhcyBNYXRlcmlhbCBVSSkgdG8gdXNlIGFsbCB2ZW5kb3IgcHJlZml4ZXMgaWYgdGhlXG4vLyB1c2VyIGFnZW50IGlzIG5vdCBrbm93bi5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5nbG9iYWwubmF2aWdhdG9yID0gZ2xvYmFsLm5hdmlnYXRvciA/PyB7fTtcbmdsb2JhbC5uYXZpZ2F0b3IudXNlckFnZW50ID0gZ2xvYmFsLm5hdmlnYXRvci51c2VyQWdlbnQgPz8gJ2FsbCc7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxubGV0IHdzID0gbnVsbDtcbmlmICghbW9kdWxlLmhvdCkge1xuICB3cyA9IGh0dHAuY3JlYXRlU2VydmVyKGFwcCk7XG59XG5cbi8vXG4vLyBJZiB5b3UgYXJlIHVzaW5nIHByb3h5IGZyb20gZXh0ZXJuYWwgbWFjaGluZSwgeW91IGNhbiBzZXQgVFJVU1RfUFJPWFkgZW52XG4vLyBEZWZhdWx0IGlzIHRvIHRydXN0IHByb3h5IGhlYWRlcnMgb25seSBmcm9tIGxvb3BiYWNrIGludGVyZmFjZS5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5hcHAuc2V0KCd0cnVzdCBwcm94eScsIGNvbmZpZy50cnVzdFByb3h5KTtcblxuLy8ga2VlcCBhIGxpc3Qgb2YgYXV0aC1yZWxldmFudCBtaWRkbGV3YXJlcyB0byBkZWNvZGUgY29va2llcyBpbiB0aGUgV1MgaGFuZGxlclxuY29uc3QgYXV0aE1pZGRsZXdhcmVzID0gW107XG5cbmZ1bmN0aW9uIGFwcFVzZUF1dGgobXcpIHtcbiAgYXV0aE1pZGRsZXdhcmVzLnB1c2gobXcpO1xuICBhcHAudXNlKG13KTtcbn1cblxuLy9cbi8vIFJlZ2lzdGVyIE5vZGUuanMgbWlkZGxld2FyZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3B1YmxpYycpKSk7XG5hcHBVc2VBdXRoKGNvb2tpZVBhcnNlcigpKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5cbi8vXG4vLyBBdXRoZW50aWNhdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmFwcFVzZUF1dGgoXG4gIGV4cHJlc3NKd3Qoe1xuICAgIHNlY3JldDogY29uZmlnLmF1dGguand0LnNlY3JldCxcbiAgICBjcmVkZW50aWFsc1JlcXVpcmVkOiBmYWxzZSxcbiAgICBnZXRUb2tlbjogKHJlcSkgPT4gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbixcbiAgfSksXG4pO1xuLy8gRXJyb3IgaGFuZGxlciBmb3IgZXhwcmVzcy1qd3RcbmFwcC51c2UoKGVyciwgcmVxLCByZXMsIG5leHQpID0+IHtcbiAgaWYgKGVyciBpbnN0YW5jZW9mIEp3dDQwMUVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignW2V4cHJlc3Mtand0LWVycm9yXScsIHJlcS5jb29raWVzLmlkX3Rva2VuKTtcbiAgICAvLyBgY2xlYXJDb29raWVgLCBvdGhlcndpc2UgdXNlciBjYW4ndCB1c2Ugd2ViLWFwcCB1bnRpbCBjb29raWUgZXhwaXJlc1xuICAgIHJlcy5jbGVhckNvb2tpZSgnaWRfdG9rZW4nKTtcbiAgfVxuICBuZXh0KGVycik7XG59KTtcblxuLy9cbi8vIFJlZ2lzdGVyIEFQSSBtaWRkbGV3YXJlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dyYXBocWwvZXhwcmVzcy1ncmFwaHFsI29wdGlvbnNcblxuY29uc3QgYXBvbGxvU2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gIC4uLnNjaGVtYSxcbiAgc3Vic2NyaXB0aW9uczoge1xuICAgIHBhdGg6ICcvc3Vic2NyaXB0aW9ucycsXG4gICAgb25Db25uZWN0OiBhc3luYyAoY29ubmVjdGlvblBhcmFtcywgd2ViU29ja2V0KSA9PiB7XG4gICAgICBjb25zdCBhcHBseU1pZGRsZXdhcmUgPSAobWlkZGxld2FyZSwgcmVxKSA9PlxuICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gbWlkZGxld2FyZShyZXEsIG51bGwsIHJlc29sdmUpKTtcblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICBmb3IgKGNvbnN0IG1pZGRsZXdhcmUgb2YgYXV0aE1pZGRsZXdhcmVzKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXG4gICAgICAgIGF3YWl0IGFwcGx5TWlkZGxld2FyZShtaWRkbGV3YXJlLCB3ZWJTb2NrZXQudXBncmFkZVJlcSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVzZXI6IHdlYlNvY2tldC51cGdyYWRlUmVxLnVzZXIsXG4gICAgICAgIC4uLmNvbm5lY3Rpb25QYXJhbXMsXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4gIHVwbG9hZHM6IGZhbHNlLFxuICBpbnRyb3NwZWN0aW9uOiBfX0RFVl9fLFxuICBwbGF5Z3JvdW5kOiBfX0RFVl9fICYmIHtcbiAgICBzdWJzY3JpcHRpb25FbmRwb2ludDogJy9zdWJzY3JpcHRpb25zJyxcbiAgfSxcbiAgZGVidWc6IF9fREVWX18sXG4gIGNvbnRleHQ6ICh7IHJlcSB9KSA9PiAoe1xuICAgIHVzZXI6IHJlcS51c2VyLFxuICB9KSxcbn0pO1xuYXBvbGxvU2VydmVyLmFwcGx5TWlkZGxld2FyZSh7IGFwcCB9KTtcblxuaWYgKHdzICE9PSBudWxsKSB7XG4gIC8vIFRPRE8gbm8gc3Vic2NyaXB0aW9ucyB3aGVuIHVzaW5nIGB5YXJuIHN0YXJ0YFxuICBhcG9sbG9TZXJ2ZXIuaW5zdGFsbFN1YnNjcmlwdGlvbkhhbmRsZXJzKHdzKTtcbn1cblxuLy9cbi8vIFJlZ2lzdGVyIHNlcnZlci1zaWRlIHJlbmRlcmluZyBtaWRkbGV3YXJlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuYXBwLmdldCgnL2V4ZWN1dG9yJywgYXN5bmMgKF9yZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGh0bWwgPSByZW5kZXJFeGVjdXRvcigpO1xuICAgIHJlcy5zdGF0dXMoMjAwKTtcbiAgICByZXMuc2VuZChodG1sKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbmV4dChlcnIpO1xuICB9XG59KTtcblxuYXBwLmdldCgnL2FwcC1zaGVsbC5odG1sJywgYXN5bmMgKF9yZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGh0bWwgPSByZW5kZXJIdG1sKG51bGwsIHtcbiAgICAgIHN0eWxlczogW10sXG4gICAgICBzY3JpcHRzOiBsb2FkU2NyaXB0cygnY2xpZW50JyksXG4gICAgfSk7XG4gICAgcmVzLnN0YXR1cygyMDApO1xuICAgIHJlcy5zZW5kKGh0bWwpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBuZXh0KGVycik7XG4gIH1cbn0pO1xuXG5hcHAuZ2V0KCcqJywgYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgaXNvbW9ycGhpY1N0eWxlTG9hZGVyID0gbmV3IElzb21vcnBoaWNTdHlsZUxvYWRlcigpO1xuICAgIGNvbnN0IG1hdGVyaWFsU3R5bGVMb2FkZXIgPSBuZXcgTWF0ZXJpYWxTdHlsZUxvYWRlcigpO1xuXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gY3JlYXRlSW5pdGlhbFN0YXRlKHtcbiAgICAgIHVzZXI6IHJlcS51c2VyID8/IG51bGwsXG4gICAgfSk7XG5cbiAgICBjb25zdCBhcG9sbG9DbGllbnQgPSBjcmVhdGVBcG9sbG9DbGllbnQoXG4gICAgICB7XG4gICAgICAgIHNjaGVtYTogbWFrZUV4ZWN1dGFibGVTY2hlbWEoc2NoZW1hKSxcbiAgICAgICAgLy8gVGhpcyBpcyBhIGNvbnRleHQgY29uc3VtZWQgaW4gR3JhcGhRTCBSZXNvbHZlcnNcbiAgICAgICAgY29udGV4dDogeyByZXEgfSxcbiAgICAgIH0sXG4gICAgICBpbml0aWFsU3RhdGUsXG4gICAgKTtcblxuICAgIC8vIEdsb2JhbCAoY29udGV4dCkgdmFyaWFibGVzIHRoYXQgY2FuIGJlIGVhc2lseSBhY2Nlc3NlZCBmcm9tIGFueSBSZWFjdCBjb21wb25lbnRcbiAgICAvLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL2NvbnRleHQuaHRtbFxuICAgIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgICAvLyBUaGUgdHdpbnMgYmVsb3cgYXJlIHdpbGQsIGJlIGNhcmVmdWwhXG4gICAgICBwYXRobmFtZTogcmVxLnBhdGgsXG4gICAgICBxdWVyeTogcmVxLnF1ZXJ5LFxuICAgICAgLy8gQXBvbGxvIENsaWVudCBmb3IgdXNlIHdpdGggcmVhY3QtYXBvbGxvXG4gICAgICBjbGllbnQ6IGFwb2xsb0NsaWVudCxcbiAgICAgIC8vIFRPRE8gbG9jYWxlc1xuICAgICAgbG9jYWxlczogWydlbiddLFxuICAgIH07XG5cbiAgICBjb25zdCBpbnNlcnRDc3MgPSBpc29tb3JwaGljU3R5bGVMb2FkZXIuaW5zZXJ0Q3NzLmJpbmQoaXNvbW9ycGhpY1N0eWxlTG9hZGVyKTtcblxuICAgIGNvbnN0IHJvdXRlID0gYXdhaXQgcm91dGVyLnJlc29sdmUoY29udGV4dCk7XG5cbiAgICBpZiAocm91dGUucmVkaXJlY3QpIHtcbiAgICAgIHJlcy5yZWRpcmVjdChyb3V0ZS5zdGF0dXMgPz8gMzAyLCByb3V0ZS5yZWRpcmVjdCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgcm9vdENvbXBvbmVudCA9IG1hdGVyaWFsU3R5bGVMb2FkZXIud3JhcChcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtbm8tYmluZFxuICAgICAgPEFwcCBjb250ZXh0PXtjb250ZXh0fSBpbnNlcnRDc3M9e2luc2VydENzc30+XG4gICAgICAgIHtyb3V0ZS5jb21wb25lbnR9XG4gICAgICA8L0FwcD4sXG4gICAgKTtcbiAgICBhd2FpdCBnZXREYXRhRnJvbVRyZWUocm9vdENvbXBvbmVudCk7XG5cbiAgICBjb25zdCBzdHlsZXMgPSBbXG4gICAgICB7IGlkOiAnY3NzJywgY3NzVGV4dDogaXNvbW9ycGhpY1N0eWxlTG9hZGVyLmNvbGxlY3QoKSB9LFxuICAgICAgLy8gVE9ETyBuZWVkIHRvIHJlbW92ZSB0aGlzIG9uIHRoZSBjbGllbnQ/IGh0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL2d1aWRlcy9zZXJ2ZXItcmVuZGVyaW5nLyN0aGUtY2xpZW50LXNpZGVcbiAgICAgIHsgaWQ6ICdtYXRlcmlhbC1jc3MnLCBjc3NUZXh0OiBtYXRlcmlhbFN0eWxlTG9hZGVyLmNvbGxlY3QoKSB9LFxuICAgIF07XG4gICAgY29uc3Qgc2NyaXB0cyA9IGxvYWRTY3JpcHRzKFxuICAgICAgJ2NsaWVudCcsXG4gICAgICAuLi4ocm91dGUuY2h1bmsgPyBbcm91dGUuY2h1bmtdIDogW10pLFxuICAgICAgLi4uKHJvdXRlLmNodW5rcyA/IHJvdXRlLmNodW5rcyA6IFtdKSxcbiAgICApO1xuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIC4uLnJvdXRlLFxuICAgICAgc3R5bGVzLFxuICAgICAgc2NyaXB0cyxcbiAgICAgIGFwcDoge1xuICAgICAgICBhcGlVcmw6IGNvbmZpZy5hcGkuY2xpZW50VXJsLFxuICAgICAgICAvLyBDYWNoZSBmb3IgY2xpZW50LXNpZGUgYXBvbGxvQ2xpZW50XG4gICAgICAgIGNhY2hlOiBjb250ZXh0LmNsaWVudC5leHRyYWN0KCksXG4gICAgICAgIC8vIEluaXRpYWwgc3RhdGUgZm9yIGNsaWVudC1zaWRlIHN0YXRlTGlua1xuICAgICAgICBpbml0aWFsU3RhdGUsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBjb25zdCBodG1sID0gcmVuZGVySHRtbChyb290Q29tcG9uZW50LCBkYXRhKTtcbiAgICByZXMuc3RhdHVzKHJvdXRlLnN0YXR1cyA/PyAyMDApO1xuICAgIHJlcy5zZW5kKGh0bWwpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBuZXh0KGVycik7XG4gIH1cbn0pO1xuXG4vL1xuLy8gRXJyb3IgaGFuZGxpbmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jb25zdCBwZSA9IG5ldyBQcmV0dHlFcnJvcigpO1xucGUuc2tpcE5vZGVGaWxlcygpO1xucGUuc2tpcFBhY2thZ2UoJ2V4cHJlc3MnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5hcHAudXNlKChlcnIsIHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGNvbnNvbGUuZXJyb3IocGUucmVuZGVyKGVycikpO1xuXG4gIGNvbnN0IHJvb3RDb21wb25lbnQgPSA8RXJyb3JQYWdlV2l0aG91dFN0eWxlIGVycm9yPXtlcnJ9IC8+O1xuXG4gIGNvbnN0IHN0eWxlcyA9IFtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICB7IGlkOiAnY3NzJywgY3NzVGV4dDogZXJyb3JQYWdlU3R5bGUuX2dldENzcygpIH0sXG4gIF07XG5cbiAgY29uc3QgZGF0YSA9IHtcbiAgICB0aXRsZTogJ0ludGVybmFsIFNlcnZlciBFcnJvcicsXG4gICAgZGVzY3JpcHRpb246IGVyci5tZXNzYWdlLFxuICAgIHN0eWxlcyxcbiAgfTtcblxuICBjb25zdCBodG1sID0gcmVuZGVySHRtbChyb290Q29tcG9uZW50LCBkYXRhKTtcbiAgcmVzLnN0YXR1cyhlcnIuc3RhdHVzID8/IDUwMCk7XG4gIHJlcy5zZW5kKGh0bWwpO1xufSk7XG5cbi8vXG4vLyBMYXVuY2ggdGhlIHNlcnZlclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaWYgKHdzICE9PSBudWxsKSB7XG4gIHdzLmxpc3Rlbihjb25maWcucG9ydCwgKCkgPT4ge1xuICAgIGNvbnNvbGUuaW5mbyhgVGhlIHNlcnZlciBpcyBydW5uaW5nIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6JHtjb25maWcucG9ydH0vYCk7XG4gIH0pO1xufVxuXG4vL1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmlmIChtb2R1bGUuaG90KSB7XG4gIGFwcC5ob3QgPSBtb2R1bGUuaG90O1xuICBtb2R1bGUuaG90LmFjY2VwdCgnLi4vY29yZS9yb3V0ZXInKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIiwiaW1wb3J0IHsgU2VydmVyU3R5bGVTaGVldHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcblxuLy8gaW1wb3J0IGFzc2V0cyBmcm9tICcuL2Fzc2V0LW1hbmlmZXN0Lmpzb24nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGltcG9ydC9uby11bnJlc29sdmVkXG5pbXBvcnQgY2h1bmtzIGZyb20gJy4vY2h1bmstbWFuaWZlc3QuanNvbic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW1wb3J0L25vLXVucmVzb2x2ZWRcblxuZXhwb3J0IGNsYXNzIElzb21vcnBoaWNTdHlsZUxvYWRlciB7XG4gIGNzcyA9IG5ldyBTZXQoKTtcblxuICAvLyBFbmFibGVzIGNyaXRpY2FsIHBhdGggQ1NTIHJlbmRlcmluZ1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20va3JpYXNvZnQvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXJcbiAgaW5zZXJ0Q3NzKC4uLnN0eWxlcykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgIHN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4gdGhpcy5jc3MuYWRkKHN0eWxlLl9nZXRDc3MoKSkpO1xuICB9XG5cbiAgY29sbGVjdCgpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuY3NzXS5qb2luKCcnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFNjcmlwdHMoLi4uY2hua3MpIHtcbiAgY29uc3Qgc2NyaXB0cyA9IG5ldyBTZXQoKTtcblxuICBjaG5rcy5mb3JFYWNoKChjaHVuaykgPT4ge1xuICAgIGlmIChjaHVua3NbY2h1bmtdKSB7XG4gICAgICAvLyBhZGQgYWxsIGFzc2V0cyBiZWxvbmdpbmcgdG8gdGhhdCBjaHVua1xuICAgICAgY2h1bmtzW2NodW5rXS5mb3JFYWNoKChhc3NldCkgPT4gc2NyaXB0cy5hZGQoYXNzZXQpKTtcbiAgICB9IGVsc2UgaWYgKF9fREVWX18pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2h1bmsgd2l0aCBuYW1lICcke2NodW5rfScgY2Fubm90IGJlIGZvdW5kYCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gWy4uLnNjcmlwdHNdO1xufVxuXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxTdHlsZUxvYWRlciB7XG4gIHNzcyA9IG5ldyBTZXJ2ZXJTdHlsZVNoZWV0cygpO1xuXG4gIHdyYXAoY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuc3NzLmNvbGxlY3QoY29tcG9uZW50KTtcbiAgfVxuXG4gIGNvbGxlY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3NzLnRvU3RyaW5nKCk7XG4gIH1cbn1cbiIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5cbm1vbmdvb3NlXG4gIC5jb25uZWN0KGNvbmZpZy5tb25nb2RiVXJsLCB7XG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxuICAgIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxuICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgfSlcbiAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoJ01vbmdvREIgaW5pdGlhbCBjb25uZWN0aW9uIGZhaWxlZCcsIGVycm9yKTtcbiAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLmNvbm5lY3Rpb247XG4iLCJpbXBvcnQgZGIgZnJvbSAnLi9kYic7XG5cbmltcG9ydCAqIGFzIFVzZXJTY2hlbWEgZnJvbSAnLi9zY2hlbWEvVXNlcic7XG5pbXBvcnQgKiBhcyBQcm9qZWN0U2NoZW1hIGZyb20gJy4vc2NoZW1hL1Byb2plY3QnO1xuXG5leHBvcnQgY29uc3QgVXNlciA9IFVzZXJTY2hlbWEuY3JlYXRlTW9kZWwoZGIpO1xuZXhwb3J0IGNvbnN0IFByb2plY3QgPSBQcm9qZWN0U2NoZW1hLmNyZWF0ZVByb2plY3RNb2RlbChkYik7XG5leHBvcnQgY29uc3QgRmlsZVRyZWUgPSBQcm9qZWN0U2NoZW1hLmNyZWF0ZUZpbGVUcmVlTW9kZWwoZGIpO1xuZXhwb3J0IGNvbnN0IEZpbGUgPSBQcm9qZWN0U2NoZW1hLmNyZWF0ZUZpbGVNb2RlbChkYik7XG5cbmV4cG9ydCBkZWZhdWx0IGRiO1xuIiwiLy8gQGZsb3dcblxuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IGNyZWF0ZU1vZGVsSGVscGVyIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0U2NoZW1hOiBtb25nb29zZS5TY2hlbWE8YW55PiA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICBuYW1lOiBTdHJpbmcsXG4gIGlzUHVibGljOiBCb29sZWFuLFxuICBjcmVhdGVkQXQ6IERhdGUsXG4gIGZpbGVUcmVlUm9vdDogeyB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsIHJlZjogJ0ZpbGVUcmVlJyB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmaWxlVHJlZVNjaGVtYTogbW9uZ29vc2UuU2NoZW1hPGFueT4gPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgcHJvamVjdDogeyB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsIHJlZjogJ1Byb2plY3QnIH0sXG4gIGNvbnRlbnRzOiBbXG4gICAge1xuICAgICAgbmFtZTogU3RyaW5nLFxuICAgICAgdHlwZTogeyB0eXBlOiBTdHJpbmcsIGVudW06IFsnRklMRScsICdUUkVFJ10gfSxcbiAgICAgIHJlZjogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgIH0sXG4gIF0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZpbGVTY2hlbWE6IG1vbmdvb3NlLlNjaGVtYTxhbnk+ID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIHByb2plY3Q6IHsgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6ICdQcm9qZWN0JyB9LFxuICBkYXRhOiBCdWZmZXIsXG59KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVByb2plY3RNb2RlbCA9IGNyZWF0ZU1vZGVsSGVscGVyKCdQcm9qZWN0JywgcHJvamVjdFNjaGVtYSk7XG4vLyBwcmV0dGllci1pZ25vcmVcbmV4cG9ydCBjb25zdCBjcmVhdGVGaWxlVHJlZU1vZGVsID0gY3JlYXRlTW9kZWxIZWxwZXIoJ0ZpbGVUcmVlJywgZmlsZVRyZWVTY2hlbWEpO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUZpbGVNb2RlbCA9IGNyZWF0ZU1vZGVsSGVscGVyKCdGaWxlJywgZmlsZVNjaGVtYSk7XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgY3JlYXRlTW9kZWxIZWxwZXIgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IHNjaGVtYTogbW9uZ29vc2UuU2NoZW1hPGFueT4gPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgdXNlcm5hbWU6IHsgdHlwZTogU3RyaW5nLCB1bmlxdWU6IHRydWUgfSxcbiAgcGFzc3dvcmQ6IFN0cmluZyxcbiAgY3JlYXRlZEF0OiBEYXRlLFxufSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVNb2RlbCA9IGNyZWF0ZU1vZGVsSGVscGVyKCdVc2VyJywgc2NoZW1hKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1vZGVsSGVscGVyID0gKG5hbWUsIHNjaGVtYSkgPT4gKGNvbm5lY3Rpb24pID0+IHtcbiAgaWYgKF9fREVWX18gJiYgY29ubmVjdGlvbi5tb2RlbHNbbmFtZV0pIHtcbiAgICAvLyB3ZSdyZSBwcm9iYWJseSBob3QtcmVsb2FkaW5nLCBzbyBjYW4ndCByZS1jb21waWxlIHRoZSBtb2RlbCFcbiAgICBjb25zb2xlLndhcm4oYFRyeWluZyB0byByZS1jb21waWxlIHNjaGVtYSBmb3IgJyR7bmFtZX0nOyBrZWVwaW5nIHRoZSBvcmlnaW5hbCBtb2RlbC5gKTtcbiAgICByZXR1cm4gY29ubmVjdGlvbi5tb2RlbHNbbmFtZV07XG4gIH1cbiAgcmV0dXJuIGNvbm5lY3Rpb24ubW9kZWwobmFtZSwgc2NoZW1hKTtcbn07XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5cbmltcG9ydCB7IGxvYWRTY3JpcHRzIH0gZnJvbSAnLi9sb2FkZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyRXhlY3V0b3IoKSB7XG4gIGNvbnN0IHNjcmlwdHMgPSBsb2FkU2NyaXB0cygnZXhlY3V0b3InKTtcblxuICBjb25zdCBodG1sID0gUmVhY3RET00ucmVuZGVyVG9TdGF0aWNNYXJrdXAoXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzeC1hMTF5L2h0bWwtaGFzLWxhbmdcbiAgICA8aHRtbD5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICB7c2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gKFxuICAgICAgICAgIDxsaW5rIGtleT17c2NyaXB0fSByZWw9XCJwcmVsb2FkXCIgaHJlZj17c2NyaXB0fSBhcz1cInNjcmlwdFwiIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIHtzY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiAoXG4gICAgICAgICAgPHNjcmlwdCBrZXk9e3NjcmlwdH0gc3JjPXtzY3JpcHR9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD4sXG4gICk7XG4gIHJldHVybiBgPCFkb2N0eXBlIGh0bWw+JHtodG1sfWA7XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5cbmltcG9ydCBIdG1sIGZyb20gJy4vSHRtbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckh0bWwocm9vdENvbXBvbmVudCwgZGF0YSkge1xuICBjb25zdCBjb250ZW50ID0gUmVhY3RET00ucmVuZGVyVG9TdHJpbmcocm9vdENvbXBvbmVudCk7XG4gIGNvbnN0IGh0bWwgPSBSZWFjdERPTS5yZW5kZXJUb1N0YXRpY01hcmt1cCg8SHRtbCB7Li4uZGF0YX0+e2NvbnRlbnR9PC9IdG1sPik7XG4gIHJldHVybiBgPCFkb2N0eXBlIGh0bWw+JHtodG1sfWA7XG59XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgeyBNZXNzYWdlRm9ybWF0RWxlbWVudCB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG5pbXBvcnQgbWVzc2FnZXNfZGUgZnJvbSAnLi9sb2NhbGVzL2RlLmpzb24nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuaW1wb3J0IG1lc3NhZ2VzX2VuIGZyb20gJy4vbG9jYWxlcy9lbi5qc29uJztcblxuZXhwb3J0IHR5cGUgTG9jYWxlTWFwPFQ+ID0geyBbbG9jYWxlOiBzdHJpbmddOiBUIH07XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxudHlwZSBNZXNzYWdlcyA9XG4gIHwgeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICB8IHsgW2tleTogc3RyaW5nXTogTWVzc2FnZUZvcm1hdEVsZW1lbnRbXSB9O1xuXG5leHBvcnQgY29uc3QgTUVTU0FHRVM6IExvY2FsZU1hcDxNZXNzYWdlcz4gPSB7XG4gIGRlOiBtZXNzYWdlc19kZSxcbiAgZW46IG1lc3NhZ2VzX2VuLFxufTtcblxuLy8gcmV0dXJucyB0aGUgZmlyc3QgbG9jYWxlIGluIGBsb2NhbGVzYCBtYXRjaGluZyB0aGUgcHJlZGljYXRlLiBNb3N0IG9mIHRoZVxuLy8gdGltZSwgdGhlIHByZWRpY2F0ZSB3aWxsIGJlIGEgc2ltcGxlIG1lbWJlcnNoaXAgdGVzdC5cbi8vIFRoZSB0ZXN0IGlzIHBlcmZvcm1lZCBhcyBmb2xsb3dzOlxuLy8gLSBmaXJzdCwgYWxsIGxvY2FsZXMgYXJlIG5vcm1hbGl6ZWQgc28gdGhhdCBlLmcuIFwiZGUtQVRcIiBiZWNvbWVzIFwiZGVfYXRcIlxuLy8gLSBzZWNvbmQsIGlmIGFueSBvZiB0aGUgbG9jYWxlcyBtYXRjaGVzIHRoZSBwcmVkaWNhdGUsIHRoYXQgaXMgcmV0dXJuZWRcbi8vIC0gdGhpcmQsIHRoZSBsYW5ndWFnZS1vbmx5IHZhcmlhbnRzIGFyZSB0YWtlbiwgaS5lLiBcImRlX2F0XCIgYmVjb21lcyBcImRlXCJcbi8vIC0gaWYgdGhlcmUgaXMgYSBtYXRjaCwgdGhhdCBpcyByZXR1cm5lZFxuLy8gLSBsYXN0bHksIG51bGwgaXMgcmV0dXJuZWQuXG4vLyBGb3IgbWVhbmluZ2Z1bCByZXN1bHRzLCB0aGUgYGxvY2FsZXNgIGFycmF5IHNob3VsZCBhbHJlYWR5IGNvbnRhaW5cbi8vIGxhbmd1YWdlLW9ubHkgbG9jYWxlcyBhcyBhbHRlcm5hdGl2ZXMuIE90aGVyd2lzZSwgYW4gYXJyYXkgc3VjaCBhc1xuLy9cbi8vICAgICBbJ2VuLVVTJywgJ2RlJ11cbi8vXG4vLyBXaWxsIHJldHVybiAnZGUnIGluIGZhdm9yIG9mICdlbicgaWYgdGhvc2UgYXJlIHN1cHBvcnRlZCBidXQgJ2VuLVVTJyBpc24ndC5cbi8vIEluc3RlYWQgb2YgdmFsdWluZyBhIGxhbmd1YWdlIG1hdGNoIG92ZXIgYW4gZXhhY3QgbWF0Y2gsIGEgc3VmZmljaWVudGx5XG4vLyBkZXRhaWxlZCBsaXN0IG9mIHByZWZlcmVuY2VzIGlzIHJlcXVpcmVkLlxuZXhwb3J0IGZ1bmN0aW9uIGdldEVmZmVjdGl2ZUxvY2FsZShcbiAgbG9jYWxlczogc3RyaW5nW10sXG4gIHN1cHBvcnRlZDogKHN0cmluZykgPT4gYm9vbGVhbixcbik6IHN0cmluZyB8IG51bGwge1xuICAvLyBub3JtYWxpemUgdGhpbmdzIGxpa2UgJ2RlLUFUJyB0byAnZGVfYXQnXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBsb2NhbGVzLm1hcCgobG9jYWxlKSA9PiBsb2NhbGUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCctJywgJ18nKSk7XG5cbiAgLy8gdHJ5IHRvIGZpbmQgYSBtYXRjaCBmb3IgYW55IG9mIHRoZSBleGFjdCBsb2NhbGVzXG4gIGNvbnN0IGV4YWN0ID0gbm9ybWFsaXplZC5maW5kKHN1cHBvcnRlZCk7XG4gIGlmIChleGFjdCkgcmV0dXJuIGV4YWN0O1xuXG4gIC8vIHRyeSB0byBmaW5kIGEgbWF0Y2ggZm9yIGFueSBvZiB0aGUgZXhhY3QgbGFuZ3VhZ2Utb25seSBsb2NhbGVzXG4gIGNvbnN0IGxhbmd1YWdlID0gbm9ybWFsaXplZC5tYXAoKGxvY2FsZSkgPT4gbG9jYWxlLnNwbGl0KCdfJylbMF0pLmZpbmQoc3VwcG9ydGVkKTtcbiAgaWYgKGxhbmd1YWdlKSByZXR1cm4gbGFuZ3VhZ2U7XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIGNob29zZXMgdGhlIGJlc3QgZWxlbWVudCBpbiBgbWFwYCBiYXNlZCBvbiB0aGUgZ2l2ZW4gYGxvY2FsZXNgLFxuLy8gdXNpbmcgdGhlIGFsZ29yaXRobSBvZiBgZ2V0RWZmZWN0aXZlTG9jYWxlKClgLlxuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zbGF0aW9uPFQ+KGxvY2FsZXM6IHN0cmluZ1tdLCBtYXA6IExvY2FsZU1hcDxUPik6IFQgfCBudWxsIHtcbiAgY29uc3QgbG9jYWxlID0gZ2V0RWZmZWN0aXZlTG9jYWxlKGxvY2FsZXMsIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5iaW5kKG1hcCkpO1xuXG4gIHJldHVybiBsb2NhbGUgPyBtYXBbbG9jYWxlXSA6IG51bGw7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vcmVhY3Qtc3NyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9wb2x5ZmlsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFieWxvbmpzL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYnlsb25qcy9jb3JlL0xvYWRpbmcvc2NlbmVMb2FkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWRnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUF2YXRhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9jb21tb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9sYWIvQWxlcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2xhYi9BbGVydFRpdGxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHVpdy9yZWFjdC1tZC1lZGl0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC9leHQtbGFuZ3VhZ2VfdG9vbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC9tb2RlLWphdmFzY3JpcHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC90aGVtZS1naXRodWJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWNlLWJ1aWxkcy93ZWJwYWNrLXJlc29sdmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1jYWNoZS1pbm1lbW9yeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1saW5rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1saW5rLWVycm9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1saW5rLXNjaGVtYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYXNlNjQtanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmxvY2tseVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJibG9ja2x5L2Jsb2Nrc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJibG9ja2x5L2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmxvY2tseS9qYXZhc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJsb2NrbHkvbXNnL2RlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJsb2NrbHkvbXNnL2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJsb2NrbHkvcHl0aG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXVsZXJ1dGlsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1qd3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlsZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmxleGxheW91dC1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtc3Vic2NyaXB0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRvb2xzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhpc3RvcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXN0eWxlLWxvYWRlci9TdHlsZUNvbnRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvdXNlU3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtc3R5bGUtbG9hZGVyL3dpdGhTdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzc3RvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNzdG9yZS9kaXN0L2pzc3RvcmUud29ya2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gubWVyZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWF0ZXJpYWwtdWktcG9wdXAtc3RhdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWF0ZXJpYWwtdWktcG9wdXAtc3RhdGUvaG9va3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWF0dGVyLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9BY2NvdW50Q2lyY2xlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9BcnJvd0FsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvQXhpc0Fycm93XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9DaGV2cm9uTGVmdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvQ2hldnJvblJpZ2h0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9DbG91ZFVwbG9hZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvQ29nc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvQ29uc29sZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvRGF0YWJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL0RlbGV0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvRG90c1ZlcnRpY2FsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9Eb3dubG9hZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvRXhjbGFtYXRpb25UaGlja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvRXhpdFRvQXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9GaWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9GaWxlUGRmXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9Gb2xkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL0ZvbGRlckltYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9Gb2xkZXJPcGVuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9Gb3J1bVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvSGVscENpcmNsZU91dGxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL0ltYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9MYW5ndWFnZUphdmFzY3JpcHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL0xhbmd1YWdlTWFya2Rvd25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL0xhbmd1YWdlUHl0aG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9NYWduaWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9NYWduaWZ5TWludXNPdXRsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9NYWduaWZ5UGx1c091dGxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL01hZ25pZnlTY2FuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9QZW5jaWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL1BsYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL1BsdXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL1JlZnJlc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL1Jlc2l6ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvUm9ib3RJbmR1c3RyaWFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9Sb3RhdGVMZWZ0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9Sb3RhdGVPcmJpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvU2hhcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL1N0b3BcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL1Rvb2xib3hPdXRsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9Ub3lCcmlja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvVHJhbnNsYXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9UdW5lVmVydGljYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL1VwbG9hZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvVmlld0NvbXBhY3RPdXRsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9XaWRnZXRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aHNlZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwZWVyanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicG9seS1kZWNvbXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJldHR5LWVycm9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmMtdHJlZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hY2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbnRsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVuaXZlcnNhbC1yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2Vicm9iL21vZHVsZS5tanNcIik7Il0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzd3QkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQTNCQTtBQUNBO0FBREE7QUFDQTtBQTRCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxR0E7QUFFQTtBQUVBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7QUNuSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFvQkE7QUFDQTtBQUNBO0FBTUE7QUFHQTtBQUNBO0FBTUE7QUFHQTtBQUNBO0FBTUE7QUFHQTtBQUNBOzs7Ozs7OztBQ3BHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQTNCQTtBQTZCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7QUNsS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBREE7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFFQTtBQUVBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN2RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BOzs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQUlBOzs7Ozs7OztBQ0xBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFWQTtBQURBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBaENBO0FBd0NBOzs7Ozs7OztBQzFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQVBBO0FBU0E7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFWQTs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBU0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBdEJBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQXNCQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFDQTtBQUNBOzs7Ozs7OztBQ3RCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0EsdVFBQUE7QUFGQTtBQUtBO0FBQ0Esa1FBQUE7QUFGQTtBQUtBO0FBQ0EsOFFBQUE7QUFGQTtBQUtBO0FBQ0Esd1FBQUE7QUFGQTtBQUtBO0FBQ0EsaVJBQUE7QUFGQTtBQUtBO0FBQ0EsK1JBQUE7QUFGQTtBQUtBO0FBQ0EsOFFBQUE7QUFGQTtBQUtBO0FBQ0Esd1FBQUE7QUFGQTtBQUtBO0FBQ0EsOFFBQUE7QUFGQTtBQUtBO0FBQ0Esd1FBQUE7QUFGQTtBQUtBO0FBQ0Esb1JBQUE7QUFGQTtBQUtBO0FBQ0EsMlFBQUE7QUFGQTtBQU1BO0FBQ0E7QUFDQSxvUkFBQTtBQUZBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXZFQTtBQUNBO0FBeUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFhQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBL0RBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBK0RBOzs7Ozs7Ozs7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLGFBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUdBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBbkJBO0FBN0JBOzs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBOzs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBTkE7Ozs7Ozs7O0FDcEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBVkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUVBO0FBR0E7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZGQTtBQTlCQTtBQTVFQTtBQXFNQTs7Ozs7Ozs7QUM3TUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFmQTtBQWdCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBcENBO0FBakJBO0FBekJBO0FBa0ZBOzs7Ozs7OztBQzFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQSxhQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQWhCQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBMUJBO0FBOEJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBSkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFlQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBOzs7Ozs7OztBQ25DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFFQTs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQUhBO0FBV0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFNQTs7Ozs7Ozs7QUNYQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==