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
/******/ 	var hotCurrentHash = "36d8c486c5791deeafad";
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlcyI6WyIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvd2VicGFjay9ib290c3RyYXAiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCIuL2NodW5rLW1hbmlmZXN0Lmpzb25cIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvcm91dGVzL2Vycm9yL0Vycm9yUGFnZS5jc3MiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9pbnNlcnRDc3MuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9jb21wb25lbnRzL2xvY2FsZS9pbmRleC5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvY29tcG9uZW50cy9taXNjL2hvb2tzL2Fwb2xsby5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvY29tcG9uZW50cy9taXNjL2hvb2tzL2FzeW5jX3N0YXRlLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9jb21wb25lbnRzL21pc2MvaG9va3MvaW5kZXguanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL2NvbXBvbmVudHMvbWlzYy9ob29rcy9sb2NhbFN0b3JhZ2UuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL2NvbXBvbmVudHMvdGhlbWUuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL2NvbXBvbmVudHMvdXNlcnMvQXV0aFByb3ZpZGVyLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9jb3JlL2NyZWF0ZUFwb2xsb0NsaWVudC9jcmVhdGVBcG9sbG9DbGllbnQuc2VydmVyLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9jb3JlL2NyZWF0ZUFwb2xsb0NsaWVudC9jcmVhdGVDYWNoZS5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvY29yZS9jcmVhdGVJbml0aWFsU3RhdGUuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL2NvcmUvZ3JhcGhxbC9Pbk1lbW9yeVN0YXRlL25ldHdvcmtTdGF0dXMuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL2NvcmUvZ3JhcGhxbC9Pbk1lbW9yeVN0YXRlL3NjaGVtYS5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvY29yZS9ncmFwaHFsL2dyYXBocWxEZWYuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL2NvcmUvZ3JhcGhxbC9zY2hlbWEuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL2NvcmUvcm91dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvZXJyb3IvRXJyb3JQYWdlLmNzcz8xZjJkIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9yb3V0ZXMvZXJyb3IvRXJyb3JQYWdlLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9yb3V0ZXMvZXJyb3IvaW5kZXguanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL3JvdXRlcy9pbmRleC5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvc2VydmVyL0h0bWwuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL3NlcnZlci9jb25maWcuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL3NlcnZlci9ncmFwaHFsL0F1dGhEaXJlY3RpdmUuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL3NlcnZlci9ncmFwaHFsL3NjaGVtYS5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvc2VydmVyL2dyYXBocWwvc2NoZW1hL1Byb2plY3QuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL3NlcnZlci9ncmFwaHFsL3NjaGVtYS9Vc2VyLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9zZXJ2ZXIvZ3JhcGhxbC9zY2hlbWEvaW5kZXguanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL3NlcnZlci9pbmRleC5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvc2VydmVyL2xvYWRlcnMuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL3NlcnZlci9tb25nb2RiL2RiLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9zZXJ2ZXIvbW9uZ29kYi9pbmRleC5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvc2VydmVyL21vbmdvZGIvc2NoZW1hL1Byb2plY3QuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL3NlcnZlci9tb25nb2RiL3NjaGVtYS9Vc2VyLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9zZXJ2ZXIvbW9uZ29kYi9zY2hlbWEvdXRpbHMuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL3NlcnZlci9yZW5kZXJFeGVjdXRvci5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvc2VydmVyL3JlbmRlckh0bWwuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL3RyYW5zbGF0aW9ucy9pbmRleC5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3Qtc3NyXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJAYmFiZWwvcG9seWZpbGxcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBiYWJ5bG9uanMvY29yZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiQGJhYnlsb25qcy9jb3JlL0xvYWRpbmcvc2NlbmVMb2FkZXJcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWRnZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1BdmF0YXJcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvblwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb25cIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9jb21tb25cIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2xhYi9BbGVydFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2xhYi9BbGVydFRpdGxlXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJAdWl3L3JlYWN0LW1kLWVkaXRvclwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC9leHQtbGFuZ3VhZ2VfdG9vbHNcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcImFjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvbW9kZS1qYXZhc2NyaXB0XCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJhY2UtYnVpbGRzL3NyYy1ub2NvbmZsaWN0L3RoZW1lLWdpdGh1YlwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiYWNlLWJ1aWxkcy93ZWJwYWNrLXJlc29sdmVyXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcImFwb2xsby1jbGllbnRcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcImFwb2xsby1saW5rXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1lcnJvclwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiYXBvbGxvLWxpbmstc2NoZW1hXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcImJhc2U2NC1qc1wiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiYmNyeXB0anNcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcImJsb2NrbHlcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcImJsb2NrbHkvYmxvY2tzXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJibG9ja2x5L2NvcmVcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcImJsb2NrbHkvamF2YXNjcmlwdFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiYmxvY2tseS9tc2cvZGVcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcImJsb2NrbHkvbXNnL2VuXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJibG9ja2x5L3B5dGhvblwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcImNvb2tpZS1wYXJzZXJcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcImV4cHJlc3NcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcImV4cHJlc3Mtand0XCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJmaWxlclwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiZmxleGxheW91dC1yZWFjdFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiZ3JhcGhxbFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiZ3JhcGhxbC1zdWJzY3JpcHRpb25zXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiZ3JhcGhxbC10b29sc1wiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiaGlzdG9yeVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiaHR0cFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwiaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvU3R5bGVDb250ZXh0XCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJpc29tb3JwaGljLXN0eWxlLWxvYWRlci91c2VTdHlsZXNcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcImlzb21vcnBoaWMtc3R5bGUtbG9hZGVyL3dpdGhTdHlsZXNcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwianNzdG9yZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwianNzdG9yZS9kaXN0L2pzc3RvcmUud29ya2VyXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJsb2Rhc2gubWVyZ2VcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1hdGVyaWFsLXVpLXBvcHVwLXN0YXRlXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtYXRlcmlhbC11aS1wb3B1cC1zdGF0ZS9ob29rc1wiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWF0dGVyLWpzXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvQWNjb3VudENpcmNsZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL0Fycm93QWxsXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvQXhpc0Fycm93XCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvQ2hldnJvbkxlZnRcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9DaGV2cm9uUmlnaHRcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9DbG91ZFVwbG9hZFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL0NvZ3NcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9Db25zb2xlXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvRGF0YWJhc2VcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9EZWxldGVcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9Eb3RzVmVydGljYWxcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9Eb3dubG9hZFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL0V4Y2xhbWF0aW9uVGhpY2tcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9FeGl0VG9BcHBcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9GaWxlXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvRmlsZVBkZlwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL0ZvbGRlclwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL0ZvbGRlckltYWdlXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvRm9sZGVyT3BlblwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL0ZvcnVtXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvSGVscENpcmNsZU91dGxpbmVcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9JbWFnZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL0xhbmd1YWdlSmF2YXNjcmlwdFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL0xhbmd1YWdlTWFya2Rvd25cIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9MYW5ndWFnZVB5dGhvblwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL01hZ25pZnlcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9NYWduaWZ5TWludXNPdXRsaW5lXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvTWFnbmlmeVBsdXNPdXRsaW5lXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvTWFnbmlmeVNjYW5cIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9QZW5jaWxcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9QbGF5XCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvUGx1c1wiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL1JlZnJlc2hcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9SZXNpemVcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9Sb2JvdEluZHVzdHJpYWxcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9Sb3RhdGVMZWZ0XCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvUm90YXRlT3JiaXRcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9TaGFyZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL1N0b3BcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcIm1kaS1tYXRlcmlhbC11aS9Ub29sYm94T3V0bGluZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibWRpLW1hdGVyaWFsLXVpL1RveUJyaWNrXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvVHJhbnNsYXRlXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvVHVuZVZlcnRpY2FsXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvVXBsb2FkXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvVmlld0NvbXBhY3RPdXRsaW5lXCIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvZXh0ZXJuYWwgXCJtZGktbWF0ZXJpYWwtdWkvV2lkZ2V0c1wiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwibW9uZ29vc2VcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcInBhdGhcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcInBhdGhzZWdcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcInBlZXJqc1wiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwicG9seS1kZWNvbXBcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcInByZXR0eS1lcnJvclwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwicmMtdHJlZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwicmVhY3RcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcInJlYWN0LWFjZVwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwicmVhY3QtaW50bFwiIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL2V4dGVybmFsIFwic2VyaWFsaXplLWphdmFzY3JpcHRcIiIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9leHRlcm5hbCBcInVuaXZlcnNhbC1yb3V0ZXJcIiJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi9cIiArIFwidXBkYXRlcy9cIiArIGNodW5rSWQgKyBcIi5cIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc1wiKTtcbiBcdFx0aG90QWRkVXBkYXRlQ2h1bmsoY2h1bmsuaWQsIGNodW5rLm1vZHVsZXMpO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkTWFuaWZlc3QoKSB7XG4gXHRcdHRyeSB7XG4gXHRcdFx0dmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIuL1wiICsgXCJ1cGRhdGVzL1wiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIik7XG4gXHRcdH0gY2F0Y2ggKGUpIHtcbiBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh1cGRhdGUpO1xuIFx0fVxuXG4gXHQvL2VzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdH1cblxuIFx0dmFyIGhvdEFwcGx5T25VcGRhdGUgPSB0cnVlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcIjM2ZDhjNDg2YzU3OTFkZWVhZmFkXCI7XG4gXHR2YXIgaG90UmVxdWVzdFRpbWVvdXQgPSAxMDAwMDtcbiBcdHZhciBob3RDdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xuIFx0dmFyIGhvdEN1cnJlbnRDaGlsZE1vZHVsZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50c1RlbXAgPSBbXTtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRpZiAoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcbiBcdFx0dmFyIGZuID0gZnVuY3Rpb24ocmVxdWVzdCkge1xuIFx0XHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG4gXHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuIFx0XHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuIFx0XHRcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuIFx0XHRcdFx0XHRcdHJlcXVlc3QgK1xuIFx0XHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdCk7XG4gXHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhyZXF1ZXN0KTtcbiBcdFx0fTtcbiBcdFx0dmFyIE9iamVjdEZhY3RvcnkgPSBmdW5jdGlvbiBPYmplY3RGYWN0b3J5KG5hbWUpIHtcbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xuIFx0XHRcdFx0fSxcbiBcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXSA9IHZhbHVlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH07XG4gXHRcdGZvciAodmFyIG5hbWUgaW4gX193ZWJwYWNrX3JlcXVpcmVfXykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJlXCIgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwidFwiXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIE9iamVjdEZhY3RvcnkobmFtZSkpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRmbi5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicmVhZHlcIikgaG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkKS50aGVuKGZpbmlzaENodW5rTG9hZGluZywgZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcbiBcdFx0XHRcdHRocm93IGVycjtcbiBcdFx0XHR9KTtcblxuIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcbiBcdFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XG4gXHRcdFx0XHRcdGlmICghaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRmbi50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0XHRpZiAobW9kZSAmIDEpIHZhbHVlID0gZm4odmFsdWUpO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQodmFsdWUsIG1vZGUgJiB+MSk7XG4gXHRcdH07XG4gXHRcdHJldHVybiBmbjtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIGhvdCA9IHtcbiBcdFx0XHQvLyBwcml2YXRlIHN0dWZmXG4gXHRcdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuIFx0XHRcdF9tYWluOiBob3RDdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkLFxuXG4gXHRcdFx0Ly8gTW9kdWxlIEFQSVxuIFx0XHRcdGFjdGl2ZTogdHJ1ZSxcbiBcdFx0XHRhY2NlcHQ6IGZ1bmN0aW9uKGRlcCwgY2FsbGJhY2spIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0XHRlbHNlIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0fSxcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRpc3Bvc2U6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vIE1hbmFnZW1lbnQgQVBJXG4gXHRcdFx0Y2hlY2s6IGhvdENoZWNrLFxuIFx0XHRcdGFwcGx5OiBob3RBcHBseSxcbiBcdFx0XHRzdGF0dXM6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGlmICghbCkgcmV0dXJuIGhvdFN0YXR1cztcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcbiBcdFx0XHRkYXRhOiBob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cbiBcdFx0fTtcbiBcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuIFx0XHRyZXR1cm4gaG90O1xuIFx0fVxuXG4gXHR2YXIgaG90U3RhdHVzSGFuZGxlcnMgPSBbXTtcbiBcdHZhciBob3RTdGF0dXMgPSBcImlkbGVcIjtcblxuIFx0ZnVuY3Rpb24gaG90U2V0U3RhdHVzKG5ld1N0YXR1cykge1xuIFx0XHRob3RTdGF0dXMgPSBuZXdTdGF0dXM7XG4gXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaG90U3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG4gXHRcdFx0aG90U3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuIFx0fVxuXG4gXHQvLyB3aGlsZSBkb3dubG9hZGluZ1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlcyA9IDA7XG4gXHR2YXIgaG90Q2h1bmtzTG9hZGluZyA9IDA7XG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RBdmFpbGFibGVGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdERlZmVycmVkO1xuXG4gXHQvLyBUaGUgdXBkYXRlIGluZm9cbiBcdHZhciBob3RVcGRhdGUsIGhvdFVwZGF0ZU5ld0hhc2g7XG5cbiBcdGZ1bmN0aW9uIHRvTW9kdWxlSWQoaWQpIHtcbiBcdFx0dmFyIGlzTnVtYmVyID0gK2lkICsgXCJcIiA9PT0gaWQ7XG4gXHRcdHJldHVybiBpc051bWJlciA/ICtpZCA6IGlkO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RDaGVjayhhcHBseSkge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcImlkbGVcIikge1xuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuIFx0XHR9XG4gXHRcdGhvdEFwcGx5T25VcGRhdGUgPSBhcHBseTtcbiBcdFx0aG90U2V0U3RhdHVzKFwiY2hlY2tcIik7XG4gXHRcdHJldHVybiBob3REb3dubG9hZE1hbmlmZXN0KGhvdFJlcXVlc3RUaW1lb3V0KS50aGVuKGZ1bmN0aW9uKHVwZGF0ZSkge1xuIFx0XHRcdGlmICghdXBkYXRlKSB7XG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRcdFx0cmV0dXJuIG51bGw7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90QXZhaWxhYmxlRmlsZXNNYXAgPSB1cGRhdGUuYztcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdXBkYXRlLmg7XG5cbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRob3REZWZlcnJlZCA9IHtcbiBcdFx0XHRcdFx0cmVzb2x2ZTogcmVzb2x2ZSxcbiBcdFx0XHRcdFx0cmVqZWN0OiByZWplY3RcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0aG90VXBkYXRlID0ge307XG4gXHRcdFx0Zm9yKHZhciBjaHVua0lkIGluIGluc3RhbGxlZENodW5rcylcbiBcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3NcbiBcdFx0XHR7XG4gXHRcdFx0XHQvKmdsb2JhbHMgY2h1bmtJZCAqL1xuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiZcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiZcbiBcdFx0XHRcdGhvdFdhaXRpbmdGaWxlcyA9PT0gMFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXG4gXHRcdFx0cmV0dXJuO1xuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xuIFx0XHRmb3IgKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYgKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xuIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcbiBcdFx0aWYgKCFkZWZlcnJlZCkgcmV0dXJuO1xuIFx0XHRpZiAoaG90QXBwbHlPblVwZGF0ZSkge1xuIFx0XHRcdC8vIFdyYXAgZGVmZXJyZWQgb2JqZWN0IGluIFByb21pc2UgdG8gbWFyayBpdCBhcyBhIHdlbGwtaGFuZGxlZCBQcm9taXNlIHRvXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXG4gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxuIFx0XHRcdFByb21pc2UucmVzb2x2ZSgpXG4gXHRcdFx0XHQudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xuIFx0XHRcdFx0fSlcbiBcdFx0XHRcdC50aGVuKFxuIFx0XHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHQpO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpXG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuIFx0XHR2YXIgY2I7XG4gXHRcdHZhciBpO1xuIFx0XHR2YXIgajtcbiBcdFx0dmFyIG1vZHVsZTtcbiBcdFx0dmFyIG1vZHVsZUlkO1xuXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoIW1vZHVsZSB8fCBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRcdFx0aWYgKGhvdFVwZGF0ZVtpZF0pIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHRcdFx0XHQpXG4gXHRcdFx0XHRcdFx0KSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJlxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHQpXG4gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG4gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHRcdH0pO1xuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdCBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxuIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbiBcdFx0XHRcdFx0XHRpZiAoY2IpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihjYikgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xuIFx0XHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4gXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwic2VydmVyXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gcmVxdWlyZSgpIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSAwKSB7XG4gXHRcdFx0dmFyIGNodW5rID0gcmVxdWlyZShcIi4vY2h1bmtzL1wiICsgKHtcImFib3V0fmFkbWlufmNvbnRhY3R+Y29udGVzdH5oZWxwfmlkZX5pbmRleGVkREJ+bG9naW5+bm90LWZvdW5kfnByaXZhY3l+cmVnaXN0ZXJ+d2VicnRjXCI6XCJhYm91dH5hZG1pbn5jb250YWN0fmNvbnRlc3R+aGVscH5pZGV+aW5kZXhlZERCfmxvZ2lufm5vdC1mb3VuZH5wcml2YWN5fnJlZ2lzdGVyfndlYnJ0Y1wiLFwiaGVscFwiOlwiaGVscFwiLFwiYWJvdXRcIjpcImFib3V0XCIsXCJhZG1pblwiOlwiYWRtaW5cIixcImNvbnRhY3RcIjpcImNvbnRhY3RcIixcImNvbnRlc3RcIjpcImNvbnRlc3RcIixcImlkZVwiOlwiaWRlXCIsXCJpbmRleGVkREJcIjpcImluZGV4ZWREQlwiLFwibG9naW5cIjpcImxvZ2luXCIsXCJub3QtZm91bmRcIjpcIm5vdC1mb3VuZFwiLFwicHJpdmFjeVwiOlwicHJpdmFjeVwiLFwicmVnaXN0ZXJcIjpcInJlZ2lzdGVyXCIsXCJ3ZWJydGNcIjpcIndlYnJ0Y1wifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYXNzZXRzL1wiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cbiBcdC8vIF9fd2VicGFja19oYXNoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gaG90Q3VycmVudEhhc2g7IH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gaG90Q3JlYXRlUmVxdWlyZSgwKShfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vY2h1bmstbWFuaWZlc3QuanNvblwiKTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMzJweDtcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICM4ODg7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6ICM1NTU7XFxufVxcblxcbnByZSB7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9yb3V0ZXMvZXJyb3IvRXJyb3JQYWdlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7OztHQU9HOztBQUVIO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCx1QkFBdUI7TUFDbkIsb0JBQW9CO0VBQ3hCLHNCQUFzQjtNQUNsQix3QkFBd0I7RUFDNUIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxVQUFVO0NBQ1g7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtDQUNiOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtDQUNsQlwiLFwiZmlsZVwiOlwiRXJyb3JQYWdlLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMCAzMnB4O1xcbiAgcGFkZGluZzogMCAycmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzg4ODtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogIzU1NTtcXG59XFxuXFxucHJlIHtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCIvKiEgSXNvbW9ycGhpYyBTdHlsZSBMb2FkZXIgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9rcmlhc29mdC9pc29tb3JwaGljLXN0eWxlLWxvYWRlciAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpbnNlcnRlZCA9IHt9O1xuXG5mdW5jdGlvbiBiNjRFbmNvZGVVbmljb2RlKHN0cikge1xuICByZXR1cm4gYnRvYShlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC8lKFswLTlBLUZdezJ9KS9nLCBmdW5jdGlvbiAobWF0Y2gsIHAxKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoXCIweFwiICsgcDEpO1xuICB9KSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNzcyhpZHMpIHtcbiAgaWRzLmZvckVhY2goZnVuY3Rpb24gKGlkKSB7XG4gICAgaWYgKC0taW5zZXJ0ZWRbaWRdIDw9IDApIHtcbiAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG4gICAgICBpZiAoZWxlbSkge1xuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0Q3NzKHN0eWxlcywgX3RlbXApIHtcbiAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgIF9yZWYkcmVwbGFjZSA9IF9yZWYucmVwbGFjZSxcbiAgICAgIHJlcGxhY2UgPSBfcmVmJHJlcGxhY2UgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRyZXBsYWNlLFxuICAgICAgX3JlZiRwcmVwZW5kID0gX3JlZi5wcmVwZW5kLFxuICAgICAgcHJlcGVuZCA9IF9yZWYkcHJlcGVuZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJHByZXBlbmQsXG4gICAgICBfcmVmJHByZWZpeCA9IF9yZWYucHJlZml4LFxuICAgICAgcHJlZml4ID0gX3JlZiRwcmVmaXggPT09IHZvaWQgMCA/ICdzJyA6IF9yZWYkcHJlZml4O1xuXG4gIHZhciBpZHMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBfc3R5bGVzJGkgPSBzdHlsZXNbaV0sXG4gICAgICAgIG1vZHVsZUlkID0gX3N0eWxlcyRpWzBdLFxuICAgICAgICBjc3MgPSBfc3R5bGVzJGlbMV0sXG4gICAgICAgIG1lZGlhID0gX3N0eWxlcyRpWzJdLFxuICAgICAgICBzb3VyY2VNYXAgPSBfc3R5bGVzJGlbM107XG4gICAgdmFyIGlkID0gXCJcIiArIHByZWZpeCArIG1vZHVsZUlkICsgXCItXCIgKyBpO1xuICAgIGlkcy5wdXNoKGlkKTtcblxuICAgIGlmIChpbnNlcnRlZFtpZF0pIHtcbiAgICAgIGlmICghcmVwbGFjZSkge1xuICAgICAgICBpbnNlcnRlZFtpZF0rKztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5zZXJ0ZWRbaWRdID0gMTtcbiAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICB2YXIgY3JlYXRlID0gZmFsc2U7XG5cbiAgICBpZiAoIWVsZW0pIHtcbiAgICAgIGNyZWF0ZSA9IHRydWU7XG4gICAgICBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gICAgICBlbGVtLmlkID0gaWQ7XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNzc1RleHQgPSBjc3M7XG5cbiAgICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjc3NUZXh0ICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGI2NEVuY29kZVVuaWNvZGUoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkgKyBcIiovXCI7XG4gICAgICBjc3NUZXh0ICs9IFwiXFxuLyojIHNvdXJjZVVSTD1cIiArIHNvdXJjZU1hcC5maWxlICsgXCI/XCIgKyBpZCArIFwiKi9cIjtcbiAgICB9XG5cbiAgICBpZiAoJ3RleHRDb250ZW50JyBpbiBlbGVtKSB7XG4gICAgICBlbGVtLnRleHRDb250ZW50ID0gY3NzVGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NUZXh0O1xuICAgIH1cblxuICAgIGlmIChjcmVhdGUpIHtcbiAgICAgIGlmIChwcmVwZW5kKSB7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKGVsZW0sIGRvY3VtZW50LmhlYWQuY2hpbGROb2Rlc1swXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGVsZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZW1vdmVDc3MuYmluZChudWxsLCBpZHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydENzcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluc2VydENzcy5qcy5tYXBcbiIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IFN0eWxlQ29udGV4dCBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9TdHlsZUNvbnRleHQnO1xuXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi90aGVtZSc7XG5cbmltcG9ydCB7IExvY2FsZVByb3ZpZGVyIH0gZnJvbSAnLi9sb2NhbGUnO1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi91c2Vycy9BdXRoUHJvdmlkZXInO1xuXG4vLyBTaW5jZSB0aGUgY3VycmVudCBSZWFjdCBTdGFydGVyIEtpdCB1c2VzIG9sZGVyIFJlYWN0IENvbnRleHQgQVBJIHRoYXQgY2Fubm90IGJlIHR5cGVkLFxuLy8gaGVyZSB3ZSBkZWNsYXJlIGR1cGxpY2F0ZSB0eXBlIGluZm9ybWF0aW9uLlxuXG50eXBlIENvbnRleHRUeXBlID0ge3xcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IE9iamVjdCxcbiAgY2xpZW50OiBPYmplY3QsXG4gIGxvY2FsZXM6IHN0cmluZ1tdLFxufH07XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBjb250ZXh0OiBDb250ZXh0VHlwZSxcbiAgaW5zZXJ0Q3NzOiBGdW5jdGlvbixcbiAgY2hpbGRyZW46IFJlYWN0Lk5vZGUsXG58fTtcblxuY29uc3QgQ29udGV4dFJ1bnRpbWVUeXBlID0ge1xuICAvLyBVbml2ZXJzYWwgSFRUUCBjbGllbnRcbiAgcGF0aG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcXVlcnk6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8vIEFwb2xsbyBDbGllbnRcbiAgY2xpZW50OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8vIExvY2FsZVxuICBsb2NhbGVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKS5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgUHJvcFR5cGVzUnVudGltZVR5cGUgPSB7XG4gIC8vIEVuYWJsZXMgY3JpdGljYWwgcGF0aCBDU1MgcmVuZGVyaW5nXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9rcmlhc29mdC9pc29tb3JwaGljLXN0eWxlLWxvYWRlclxuICBpbnNlcnRDc3M6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNvbnRleHQ6IFByb3BUeXBlcy5zaGFwZShDb250ZXh0UnVudGltZVR5cGUpLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkLFxufTtcblxuLyoqXG4gKiBUaGUgdG9wLWxldmVsIFJlYWN0IGNvbXBvbmVudCBzZXR0aW5nIGNvbnRleHQgKGdsb2JhbCkgdmFyaWFibGVzXG4gKiB0aGF0IGNhbiBiZSBhY2Nlc3NlZCBmcm9tIGFsbCB0aGUgY2hpbGQgY29tcG9uZW50cy5cbiAqXG4gKiBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL2NvbnRleHQuaHRtbFxuICpcbiAqIFVzYWdlIGV4YW1wbGU6XG4gKlxuICogICBjb25zdCBjb250ZXh0ID0ge1xuICogICAgIGhpc3Rvcnk6IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCksXG4gKiAgICAgc3RvcmU6IGNyZWF0ZVN0b3JlKCksXG4gKiAgIH07XG4gKlxuICogICBSZWFjdERPTS5yZW5kZXIoXG4gKiAgICAgPEFwcCBjb250ZXh0PXtjb250ZXh0fT5cbiAqICAgICAgIDxMYXlvdXQ+XG4gKiAgICAgICAgIDxMYW5kaW5nUGFnZSAvPlxuICogICAgICAgPC9MYXlvdXQ+XG4gKiAgICAgPC9BcHA+LFxuICogICAgIGNvbnRhaW5lcixcbiAqICAgKTtcbiAqL1xuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgcHJvcFR5cGVzID0gUHJvcFR5cGVzUnVudGltZVR5cGU7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbnRleHQ6IHsgY2xpZW50LCBsb2NhbGVzIH0sXG4gICAgICBpbnNlcnRDc3MsXG4gICAgICBjaGlsZHJlbixcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8vIE5PVEU6IElmIHlvdSBuZWVkIHRvIGFkZCBvciBtb2RpZnkgaGVhZGVyLCBmb290ZXIgZXRjLiBvZiB0aGUgYXBwLFxuICAgIC8vIHBsZWFzZSBkbyB0aGF0IGluc2lkZSB0aGUgTGF5b3V0IGNvbXBvbmVudC5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBpbnNlcnRDc3MgfX0+XG4gICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgIDxMb2NhbGVQcm92aWRlciB1c2VyQWdlbnRMb2NhbGVzPXtsb2NhbGVzfT5cbiAgICAgICAgICAgICAgPEF1dGhQcm92aWRlcj5cbiAgICAgICAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgIDwvQXV0aFByb3ZpZGVyPlxuICAgICAgICAgICAgPC9Mb2NhbGVQcm92aWRlcj5cbiAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgICA8L1N0eWxlQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgSW50bFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmltcG9ydCB7IHR5cGUgTG9jYWxlTWFwLCBNRVNTQUdFUywgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi90cmFuc2xhdGlvbnMnO1xuXG50eXBlIExvY2FsZSA9IHt8XG4gIC8vIHRoZSBwcmVmZXJyZWQgbG9jYWxlIHN0b3JlZCBpbiB0aGUgSGVkZ2Vob2cgSURFXG4gIHByZWZlcnJlZExvY2FsZTogc3RyaW5nIHwgbnVsbCxcbiAgc2V0UHJlZmVycmVkTG9jYWxlOiAoc3RyaW5nIHwgbnVsbCkgPT4gdm9pZCB8IFByb21pc2U8dm9pZD4sXG4gIC8vIGFsbCBwcmVmZXJyZWQgbG9jYWxlczogdGhlIG9uZSBleHBsaWNpdGx5IHNldCBieSB0aGUgdXNlciBpZiBub3QgbnVsbCxcbiAgLy8gZm9sbG93ZWQgYnkgdGhlIG9uZXMgZnJvbSB0aGUgZW52aXJvbm1lbnQsIGUuZy4gdXNlciBhZ2VudCBpbmZvcm1hdGlvblxuICBwcmVmZXJyZWRMb2NhbGVzOiBzdHJpbmdbXSxcbnx9O1xuXG5leHBvcnQgY29uc3QgTG9jYWxlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8TG9jYWxlPih7XG4gIHByZWZlcnJlZExvY2FsZTogbnVsbCxcbiAgcHJlZmVycmVkTG9jYWxlczogW10sXG4gIHNldFByZWZlcnJlZExvY2FsZTogKCkgPT4ge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0UHJlZmVycmVkTG9jYWxlIG5vdCBzcGVjaWZpZWQnKTtcbiAgfSxcbn0pO1xuXG50eXBlIExvY2FsZVByb3ZpZGVyUHJvcFR5cGVzID0ge3xcbiAgdXNlckFnZW50TG9jYWxlczogc3RyaW5nW10sXG4gIGNoaWxkcmVuOiBSZWFjdC5Ob2RlLFxufH07XG5cbi8qKlxuICogYExvY2FsZVByb3ZpZGVyYCB0YWtlcyBhbiBhcnJheSBvZiBsb2NhbGVzIHRoYXQgdGhlIHVzZXIgYWdlbnQgaW5kaWNhdGVzIGFyZVxuICogcHJlZmVycmVkIGJ5IHRoZSB1c2VyLCBhbmQgYWRkcyB0aGUgb3B0aW9uIGZvciB0aGUgdXNlciB0byBzcGVjaWZ5IHRoZWlyIG93blxuICogcHJlZmVyZW5jZS5cbiAqXG4gKiBDb2RlIG1hbmlwdWxhdGluZyB0aGUgZXhwbGljaXRseSBnaXZlbiBwcmVmZXJlbmNlIHNob3VsZCB1c2VcbiAqIGBwcmVmZXJyZWRMb2NhbGVgIGFuZCBgc2V0UHJlZmVycmVkTG9jYWxlYDsgY29kZSB0cnlpbmcgdG8gZmluZCB0aGUgYmVzdFxuICogc3VwcG9ydGVkIGxvY2FsZSBzaG91bGQgdXNlIGBwcmVmZXJyZWRMb2NhbGVzYCwgd2hpY2ggcHJlcGVuZHMgdGhlIHN0b3JlZFxuICogcHJlZmVyZW5jZSAoaWYgYW55KSB0byB0aGUgdXNlciBhZ2VudCBsb2NhbGVzLCBhbmQgY2hvb3NlIHRoZSBmaXJzdFxuICogc3VwcG9ydGVkIGxvY2FsZSBmcm9tIHRoYXQgbGlzdC5cbiAqXG4gKiBPdGhlciB0aGFuIHByb3ZpZGluZyB0aGUgcHJlZmVyZW5jZXMsIGBMb2NhbGVQcm92aWRlcmAgYWxzbyBpbnN0YW50aWF0ZXMgYVxuICogYEludGxQcm92aWRlcmAgd2l0aCBhbiBhcHByb3ByaWF0ZSBsb2NhbGUsIHNvIHRoZSBgY2hpbGRyZW5gIGNhbiB1c2UgYWxsIG9mXG4gKiB0aGUgYHJlYWN0LWludGxgIGZhY2lsaXRpZXMuIFRoZSBsb2NhbGUsIHVzZWQgZS5nLiBmb3IgZGF0ZSBhbmQgbnVtYmVyXG4gKiBmb3JtYXR0aW5nLCBpcyBjaG9zZW4gYXMgYHByZWZlcnJlZExvY2FsZXNbMF0gPz8gZW5gOyB0aGUgdHJhbnNsYXRpb25cbiAqIG1lc3NhZ2VzIGFyZSBjaG9zZW4gdXNpbmcgYGdldFRyYW5zbGF0aW9uc2AsIHdpdGggYGVuYCBhcyB0aGUgZmFsbGJhY2tcbiAqIG1lc3NhZ2Uga2V5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gTG9jYWxlUHJvdmlkZXIoeyB1c2VyQWdlbnRMb2NhbGVzLCBjaGlsZHJlbiB9OiBMb2NhbGVQcm92aWRlclByb3BUeXBlcykge1xuICBjb25zdCBbcHJlZmVycmVkTG9jYWxlLCBzZXRQcmVmZXJyZWRMb2NhbGVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4oKCkgPT4ge1xuICAgIGlmICghcHJvY2Vzcy5lbnYuQlJPV1NFUikgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcmVmZXJyZWQtbG9jYWxlJykgPz8gbnVsbDtcbiAgfSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXByb2Nlc3MuZW52LkJST1dTRVIpIHJldHVybjtcblxuICAgIGlmIChwcmVmZXJyZWRMb2NhbGUgIT09IG51bGwpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmVmZXJyZWQtbG9jYWxlJywgcHJlZmVycmVkTG9jYWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3ByZWZlcnJlZC1sb2NhbGUnKTtcbiAgICB9XG4gIH0sIFtwcmVmZXJyZWRMb2NhbGVdKTtcblxuICBjb25zdCBwcmVmZXJyZWRMb2NhbGVzID0gW1xuICAgIC4uLihwcmVmZXJyZWRMb2NhbGUgPT09IG51bGwgPyBbXSA6IFtwcmVmZXJyZWRMb2NhbGVdKSxcbiAgICAuLi51c2VyQWdlbnRMb2NhbGVzLFxuICBdO1xuXG4gIGNvbnN0IGxvY2FsZSA9IHByZWZlcnJlZExvY2FsZXNbMF0gPz8gJ2VuJztcbiAgY29uc3QgbWVzc2FnZXMgPSBnZXRUcmFuc2xhdGlvbihwcmVmZXJyZWRMb2NhbGVzLCBNRVNTQUdFUykgPz8gTUVTU0FHRVMuZW47XG5cbiAgcmV0dXJuIChcbiAgICA8TG9jYWxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBwcmVmZXJyZWRMb2NhbGUsIHByZWZlcnJlZExvY2FsZXMsIHNldFByZWZlcnJlZExvY2FsZSB9fT5cbiAgICAgIDxJbnRsUHJvdmlkZXIgbG9jYWxlPXtsb2NhbGV9IG1lc3NhZ2VzPXttZXNzYWdlc30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvSW50bFByb3ZpZGVyPlxuICAgIDwvTG9jYWxlQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuLyoqXG4gKiBSZWFjdCBob29rIGZvciBhY2Nlc3NpbmcgdGhlIGxvY2FsZSBjb250ZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9jYWxlKCk6IExvY2FsZSB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KExvY2FsZUNvbnRleHQpO1xufVxuXG50eXBlIExvY2FsZUNvbnN1bWVyUHJvcFR5cGVzID0ge3xcbiAgY2hpbGRyZW46IChMb2NhbGUpID0+IFJlYWN0Lk5vZGUsXG58fTtcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGFjY2Vzc2luZyB0aGUgbG9jYWxlIGNvbnRleHQgZnJvbSBjbGFzcyBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gTG9jYWxlQ29uc3VtZXIoeyBjaGlsZHJlbiB9OiBMb2NhbGVDb25zdW1lclByb3BUeXBlcykge1xuICBjb25zdCBsb2NhbGUgPSB1c2VMb2NhbGUoKTtcblxuICByZXR1cm4gY2hpbGRyZW4obG9jYWxlKTtcbn1cblxudHlwZSBMb2NhbGVTZWxlY3RvclByb3BUeXBlczxUPiA9IHt8XG4gIGNvbXBvbmVudHM6IExvY2FsZU1hcDxSZWFjdC5Db21wb25lbnRUeXBlPFQ+PixcbiAgLi4uVCxcbnx9O1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgdXNpbmcgYSBkaWZmZXJlbnQgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBsb2NhbGUuIFRoZVxuICogYGNvbXBvbmVudHNgIHByb3AgaXMgYSBtYXAgZnJvbSBsb2NhbGUgc3RyaW5ncyB0byBjb21wb25lbnQgdHlwZXMuXG4gKiBPbmUgY29tcG9uZW50IGlzIGNob3NlbiB1c2luZyBgZ2V0VHJhbnNsYXRpb25gLCB3aXRoIGBlbmAgYXMgdGhlIGZhbGxiYWNrXG4gKiBrZXkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBMb2NhbGVTZWxlY3RvcjxUPih7IGNvbXBvbmVudHMsIC4uLnByb3BzIH06IExvY2FsZVNlbGVjdG9yUHJvcFR5cGVzPFQ+KSB7XG4gIGNvbnN0IHsgcHJlZmVycmVkTG9jYWxlcyB9ID0gdXNlTG9jYWxlKCk7XG4gIGNvbnN0IENvbXBvbmVudCA9IGdldFRyYW5zbGF0aW9uKHByZWZlcnJlZExvY2FsZXMsIGNvbXBvbmVudHMpID8/IGNvbXBvbmVudHMuZW47XG5cbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSAvPjtcbn1cbiIsIi8vIEBmbG93XG5cbi8qKlxuICogVGhlIGBtYWtlRm9vYCBob29rIGZhY3RvcmllcyBpbiB0aGlzIG1vZHVsZSB3cmFwIEFwb2xsbydzIGB1c2VGb29gIGhvb2tzIGZvciBtb3JlIGNvbnZlbmllbnQgdHlwaW5nLlxuICpcbiAqIFVzaW5nIHRoZSBBcG9sbG8gaG9va3MgZGlyZWN0bHkgbGVhZHMgdG8gY29kZSBsaWtlIHRoaXM6XG4gKlxuICogICAgaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcbiAqICAgIGltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuICpcbiAqICAgIGltcG9ydCB7XG4gKiAgICAgIHR5cGUgTXV0YXRlLFxuICogICAgICB0eXBlIE11dGF0ZVZhcmlhYmxlcyxcbiAqICAgIH0gZnJvbSAnLi9fX2dlbmVyYXRlZF9fL011dGF0ZSc7XG4gKlxuICogICAgY29uc3QgU29tZU11dGF0aW9uID0gZ3FsYFxuICogICAgICBtdXRhdGlvbiBNdXRhdGUoKSB7XG4gKiAgICAgICAgbXV0YXRlKClcbiAqICAgICAgfVxuICogICAgYDtcbiAqXG4gKiAgICBmdW5jdGlvbiBDb21wb25lbnQoeyBrZXkgfSkge1xuICogICAgICBjb25zdCBbbXV0YXRlLCByZXNwb25zZV0gPSB1c2VNdXRhdGlvbjxNdXRhdGUsIE11dGF0ZVZhcmlhYmxlcz4oU29tZU11dGF0aW9uLCBvcHRpb25zKTtcbiAqICAgIH1cbiAqXG4gKiBldmVuIHRob3VnaCB0aGUgdHlwZSBpbmZvcm1hdGlvbiBpcyBhY3R1YWxseSBjb25uZWN0ZWQgdG8gdGhlIGBTb21lQ29ubmVjdGlvbmAgY29uc3RhbnQsXG4gKiBub3QgdGhlIGhvb2sgY2FsbC5cbiAqXG4gKiBUaGUgZmFjdG9yaWVzIGhlcmUgc2hpZnQgdGhhdCB0eXBpbmcgKGFuZCBwYXNzaW5nIG9mIHRoZSBxdWVyeSBjb25zdGFudClcbiAqIGZyb20gdGhlIGNhbGwgc2l0ZSB0byB0aGUgcXVlcnkgZGVjbGFyYXRpb24gc2l0ZTpcbiAqXG4gKiAgICBpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbiAqXG4gKiAgICBpbXBvcnQge1xuICogICAgICB0eXBlIE11dGF0ZSxcbiAqICAgICAgdHlwZSBNdXRhdGVWYXJpYWJsZXMsXG4gKiAgICB9IGZyb20gJy4vX19nZW5lcmF0ZWRfXy9NdXRhdGUnO1xuICpcbiAqICAgIGNvbnN0IHVzZVNvbWVNdXRhdGlvbiA9IG1ha2VNdXRhdGlvbjxNdXRhdGUsIE11dGF0ZVZhcmlhYmxlcz4oZ3FsYFxuICogICAgICBtdXRhdGlvbiBNdXRhdGUoKSB7XG4gKiAgICAgICAgbXV0YXRlKClcbiAqICAgICAgfVxuICogICAgYCk7XG4gKlxuICogICAgZnVuY3Rpb24gQ29tcG9uZW50KHsga2V5IH0pIHtcbiAqICAgICAgY29uc3QgW211dGF0ZSwgcmVzcG9uc2VdID0gdXNlU29tZU11dGF0aW9uKG9wdGlvbnMpO1xuICogICAgfVxuICovXG5cbmltcG9ydCB7XG4gIHVzZVF1ZXJ5LFxuICB1c2VMYXp5UXVlcnksXG4gIHVzZVN1YnNjcmlwdGlvbixcbiAgdXNlTXV0YXRpb24sXG4gIHR5cGUgUXVlcnlIb29rT3B0aW9ucyxcbiAgdHlwZSBRdWVyeVR1cGxlLFxuICB0eXBlIFF1ZXJ5UmVzdWx0LFxuICB0eXBlIExhenlRdWVyeUhvb2tPcHRpb25zLFxuICB0eXBlIFN1YnNjcmlwdGlvbkhvb2tPcHRpb25zLFxuICB0eXBlIE11dGF0aW9uSG9va09wdGlvbnMsXG4gIHR5cGUgTXV0YXRpb25UdXBsZSxcbn0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XG5cbi8vIGdyYXBocWwgdHlwZXNcbnR5cGUgRG9jdW1lbnROb2RlID0gYW55O1xuXG50eXBlIFF1ZXJ5SG9vazxURGF0YSwgVFZhcmlhYmxlcz4gPSAoXG4gIG9wdGlvbnM/OiBRdWVyeUhvb2tPcHRpb25zPFREYXRhLCBUVmFyaWFibGVzPixcbikgPT4gUXVlcnlSZXN1bHQ8VERhdGEsIFRWYXJpYWJsZXM+O1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVF1ZXJ5PFREYXRhLCBUVmFyaWFibGVzPihxdWVyeTogRG9jdW1lbnROb2RlKTogUXVlcnlIb29rPFREYXRhLCBUVmFyaWFibGVzPiB7XG4gIHJldHVybiAob3B0aW9ucykgPT4gdXNlUXVlcnk8VERhdGEsIFRWYXJpYWJsZXM+KHF1ZXJ5LCBvcHRpb25zKTtcbn1cblxudHlwZSBMYXp5UXVlcnlIb29rPFREYXRhLCBUVmFyaWFibGVzPiA9IChcbiAgb3B0aW9ucz86IExhenlRdWVyeUhvb2tPcHRpb25zPFREYXRhLCBUVmFyaWFibGVzPixcbikgPT4gUXVlcnlUdXBsZTxURGF0YSwgVFZhcmlhYmxlcz47XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlTGF6eVF1ZXJ5PFREYXRhLCBUVmFyaWFibGVzPihcbiAgcXVlcnk6IERvY3VtZW50Tm9kZSxcbik6IExhenlRdWVyeUhvb2s8VERhdGEsIFRWYXJpYWJsZXM+IHtcbiAgcmV0dXJuIChvcHRpb25zKSA9PiB1c2VMYXp5UXVlcnk8VERhdGEsIFRWYXJpYWJsZXM+KHF1ZXJ5LCBvcHRpb25zKTtcbn1cblxudHlwZSBTdWJzY3JpcHRpb25Ib29rPFREYXRhLCBUVmFyaWFibGVzPiA9IChcbiAgb3B0aW9ucz86IFN1YnNjcmlwdGlvbkhvb2tPcHRpb25zPFREYXRhLCBUVmFyaWFibGVzPixcbikgPT4gUXVlcnlSZXN1bHQ8VERhdGEsIFRWYXJpYWJsZXM+O1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVN1YnNjcmlwdGlvbjxURGF0YSwgVFZhcmlhYmxlcz4oXG4gIHF1ZXJ5OiBEb2N1bWVudE5vZGUsXG4pOiBTdWJzY3JpcHRpb25Ib29rPFREYXRhLCBUVmFyaWFibGVzPiB7XG4gIHJldHVybiAob3B0aW9ucykgPT4gdXNlU3Vic2NyaXB0aW9uPFREYXRhLCBUVmFyaWFibGVzPihxdWVyeSwgb3B0aW9ucyk7XG59XG5cbnR5cGUgTXV0YXRpb25Ib29rPFREYXRhLCBUVmFyaWFibGVzPiA9IChcbiAgb3B0aW9ucz86IE11dGF0aW9uSG9va09wdGlvbnM8VERhdGEsIFRWYXJpYWJsZXM+LFxuKSA9PiBNdXRhdGlvblR1cGxlPFREYXRhLCBUVmFyaWFibGVzPjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VNdXRhdGlvbjxURGF0YSwgVFZhcmlhYmxlcz4oXG4gIHF1ZXJ5OiBEb2N1bWVudE5vZGUsXG4pOiBNdXRhdGlvbkhvb2s8VERhdGEsIFRWYXJpYWJsZXM+IHtcbiAgcmV0dXJuIChvcHRpb25zKSA9PiB1c2VNdXRhdGlvbjxURGF0YSwgVFZhcmlhYmxlcz4ocXVlcnksIG9wdGlvbnMpO1xufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG50eXBlIEFzeW5jU3RhdGU8VD4gPSB7fFxuICB2YWx1ZTogVCxcbiAgaXNMb2FkaW5nOiBib29sZWFuLFxuICBpc0Vycm9yOiBib29sZWFuLFxufH07XG5cbnR5cGUgQXN5bmNTdGF0ZUFjdGlvbjxUPiA9XG4gIHwge3wgdHlwZTogJ1NUQVJUJyB8fVxuICB8IHt8IHR5cGU6ICdSRVNPTFZFJywgdmFsdWU6IFQgfH1cbiAgfCB7fCB0eXBlOiAnUkVKRUNUJyB8fTtcblxuZnVuY3Rpb24gYXN5bmNTdGF0ZVJlZHVjZXI8VD4oc3RhdGU6IEFzeW5jU3RhdGU8VD4sIGFjdGlvbjogQXN5bmNTdGF0ZUFjdGlvbjxUPik6IEFzeW5jU3RhdGU8VD4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnU1RBUlQnOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgICBpc0Vycm9yOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgJ1JFU09MVkUnOiB7XG4gICAgICBjb25zdCB7IHZhbHVlIH0gPSBhY3Rpb247XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgaXNFcnJvcjogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlICdSRUpFQ1QnOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgaXNFcnJvcjogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICAgICAgdGhyb3cgJ3VucmVhY2hhYmxlJztcbiAgfVxufVxuXG4vKipcbiAqIEltcGxlbWVudHMgc3RhdGUgdGhhdCBjYW4gYmUgc2V0IHZpYSBhIHByb21pc2UuXG4gKiBUaGlzIGhvb2sgbWFrZXMgc3VyZSB0aGF0IG11bHRpcGxlIHNldFN0YXRlIGNhbGxzIGNhbiBub3QgcmFjZSxcbiAqIGkuZS4gb25seSB0aGUgbGFzdCBwcm9taXNlIHdpbGwgZ28gdGhyb3VnaCB0byB0aGUgYWN0dWFsIHN0YXRlLlxuICogV2hpbGUgYSBzZXRTdGF0ZSBwcm9taXNlIGlzIHBlbmRpbmcsIHRoZSBwcmV2aW91cyBzdGF0ZSB3aWxsIHJlbWFpbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFzeW5jU3RhdGU8VD4oaW5pdGlhbFN0YXRlOiBUKTogW1QsIChUIHwgUHJvbWlzZTxUPikgPT4gdm9pZF0ge1xuICBjb25zdCBbcHJvbWlzZSwgc2V0UHJvbWlzZV0gPSBSZWFjdC51c2VTdGF0ZTxQcm9taXNlPFQ+IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihhc3luY1N0YXRlUmVkdWNlciwge1xuICAgIHZhbHVlOiBpbml0aWFsU3RhdGUsXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICBpc0Vycm9yOiBmYWxzZSxcbiAgfSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gbnVsbCkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcblxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NUQVJUJyB9KTtcbiAgICBwcm9taXNlLnRoZW4oXG4gICAgICAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRVNPTFZFJywgdmFsdWUgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoX2Vycm9yKSA9PiB7XG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnUkVKRUNUJyB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgfTtcbiAgfSwgW3Byb21pc2VdKTtcblxuICBmdW5jdGlvbiBzZXRTdGF0ZShuZXdQcm9taXNlOiBUIHwgUHJvbWlzZTxUPikge1xuICAgIGlmIChuZXdQcm9taXNlICYmIHR5cGVvZiBuZXdQcm9taXNlLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIHRlY2huaWNhbGx5IHdlIGhhdmUgbm90IGNoZWNrZWQgdGhpcyBpcyBhIHByb21pc2UgYnV0IGEgdGhlbmFibGUuXG4gICAgICAvLyBJbiBwcmFjdGljZSB0aGlzICpzaG91bGQqIG5vdCBtYXR0ZXIgYnV0IHdobyBrbm93cy5cbiAgICAgIC8vICRGbG93RXhwZWN0RXJyb3JcbiAgICAgIGNvbnN0IHJlYWxQcm9taXNlOiBQcm9taXNlPFQ+ID0gbmV3UHJvbWlzZTtcbiAgICAgIHNldFByb21pc2UocmVhbFByb21pc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAkRmxvd0V4cGVjdEVycm9yXG4gICAgICBjb25zdCB2YWx1ZTogVCA9IG5ld1Byb21pc2U7XG5cbiAgICAgIHNldFByb21pc2UobnVsbCk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRVNPTFZFJywgdmFsdWUgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gdXNlQ2FsbGJhY2s6IFJlYWN0LnVzZVN0YXRlIGd1YXJhbnRlZXMgc3RhYmlsaXR5IG9mIHNldFN0YXRlLFxuICAvLyBtaXJyb3IgdGhhdCBoZXJlXG4gIHJldHVybiBbc3RhdGUudmFsdWUsIFJlYWN0LnVzZUNhbGxiYWNrKHNldFN0YXRlLCBbXSldO1xufVxuXG50eXBlIFN0b3JlU3RhdGU8VD4gPSB7fCB2YWx1ZTogVCB8fTtcblxuLyoqXG4gKiBBY2Nlc3NlcyBkYXRhIGluIGEgc3RvcmUgYW5kIHB1dHMgaXQgaW50byBhIHN0YXRlIHZhcmlhYmxlLlxuICogQSBzdG9yZSBoZXJlIGlzIGFueXRoaW5nIHRoYXQgY2FuIGJlIHJlYWQvd3JpdHRlbiB1c2luZyAob3B0aW9uYWxseSBhc3luYylcbiAqIGxvYWQvc3RvcmUgZnVuY3Rpb25zLlxuICogV2hlbmV2ZXIgdGhlIGxvYWQgJiBzdG9yZSBmdW5jdGlvbnMgY2hhbmdlIHRoZSBzdG9yZSB2YWx1ZSBpcyByZWxvYWRlZCxcbiAqIGFuZCB3aGVuZXZlciB0aGUgdmFsdWUgaXMgY2hhbmdlZCB1c2luZyB0aGUgcmV0dXJuZWQgc2V0dGVyLCBpdCBpcyBzdG9yZWQuXG4gKiBVbnRpbCBhIGxvYWQgaXMgZmluaXNoZWQgKGkuZS4gaW5pdGlhbGx5IGFuZCBhZnRlciBjaGFuZ2luZyB0aGUgc3RvcmUpLFxuICogdGhlIHN0YXRlIGlzIHJlc2V0IHRvIG51bGwgYW5kIGFueSBhdHRlbXB0cyB0byBzZXQgaXQgaXMgaWdub3JlZDpcbiAqIG9ubHkgYSBsb2FkZWQgdmFsdWUgY2FuIGJlIG92ZXJ3cml0dGVuLlxuICogUG9zc2libHkgcGVuZGluZyBsb2FkcyBmcm9tIGEgcHJldmlvdXMgc3RvcmUgYXJlIGFsc28gaWdub3JlZC5cbiAqXG4gKiBBcyBhbnkgY2hhbmdlIHRvIGxvYWQvc3RvcmUgcmVzdWx0cyBpbiBhIHJlbG9hZCBhbmQgdGh1cyBhIHJlLXJlbmRlcixcbiAqIGl0IHdvdWxkIG5vdCBiZSBwb3NzaWJsZSB0byBwYXNzIGlubGluZSBmdW5jdGlvbnMgdG8gYHVzZVN0b3JlYCB3aXRob3V0XG4gKiB3cmFwcGluZyB0aGVtIGluIGB1c2VDYWxsYmFja2AuXG4gKiBGb3IgY29udmVuaWVuY2UsIGEgYGRlcHNgIGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gdGhhdCBtdXN0IGJlIHNldCB0byB0aGVcbiAqIGRlcGVuZGVuY2llcyBvZiB0aGUgcGFzc2VkIGxvYWQvc3RvcmUgZnVuY3Rpb25zLlxuICogSWYgb21pdHRlZCwgdGhpcyBob29rIHVzZXMgbG9hZCAmIHN0b3JlIHRoZW1zZWx2ZXMgYXMgdGhlIGRlcHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdG9yZTxUPihcbiAgbG9hZDogKCkgPT4gVCB8IFByb21pc2U8VD4sXG4gIHN0b3JlOiAoVCkgPT4gdm9pZCB8IFByb21pc2U8dm9pZD4sXG4gIGRlcHM/OiBhbnlbXSxcbik6IFtUIHwgbnVsbCwgKFQpID0+IHZvaWRdIHtcbiAgY29uc3QgcmVhbERlcHMgPSBkZXBzID8/IFtsb2FkLCBzdG9yZV07XG5cbiAgY29uc3QgW3N0YXRlSW1wbCwgc2V0U3RhdGVJbXBsXSA9IHVzZUFzeW5jU3RhdGU8U3RvcmVTdGF0ZTxUPiB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IHN0YXRlID0gc3RhdGVJbXBsPy52YWx1ZSA/PyBudWxsO1xuXG4gIC8vIHJlbG9hZCB0aGUgc3RhdGUgd2hlbiB0aGUgc3RvcmUgY2hhbmdlc1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFN0YXRlSW1wbChQcm9taXNlLnJlc29sdmUobG9hZCgpKS50aGVuKCh2YWx1ZSkgPT4gKHsgdmFsdWUgfSkpKTtcblxuICAgIC8vIGFmdGVyIGNoYW5naW5nIHRoZSBzdG9yZSwgY2xlYXIgdGhlIHN0YXRlIHRvIHByZXZlbnQgZnVydGhlciB1c2VcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc2V0U3RhdGVJbXBsKG51bGwpO1xuICAgIH07XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCByZWFsRGVwcyk7XG5cbiAgLy8gc2F2ZSB0aGUgc3RhdGUgd2hlbiBpdCBjaGFuZ2VkXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gaWYgdGhlIHN0YXRlIHdhcyBub3QgbG9hZGVkIHlldCBmb3Igd2hhdGV2ZXIgcmVhc29uLCBzdG9yZSBub3RoaW5nXG4gICAgaWYgKHN0YXRlSW1wbCA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgc3RvcmUoc3RhdGVJbXBsLnZhbHVlKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFsuLi5yZWFsRGVwcywgc3RhdGVJbXBsXSk7XG5cbiAgZnVuY3Rpb24gc2V0U3RhdGUodmFsdWU6IFQpIHtcbiAgICBzZXRTdGF0ZUltcGwoeyB2YWx1ZSB9KTtcbiAgfVxuXG4gIC8vIHVzZUNhbGxiYWNrOiBSZWFjdC51c2VTdGF0ZSBndWFyYW50ZWVzIHN0YWJpbGl0eSBvZiBzZXRTdGF0ZSxcbiAgLy8gbWlycm9yIHRoYXQgaGVyZVxuICByZXR1cm4gW3N0YXRlLCBSZWFjdC51c2VDYWxsYmFjayhzZXRTdGF0ZSwgW3NldFN0YXRlSW1wbF0pXTtcbn1cbiIsIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0ICogZnJvbSAnLi9hc3luY19zdGF0ZSc7XG5leHBvcnQgKiBmcm9tICcuL2Fwb2xsbyc7XG5leHBvcnQgKiBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XG5cbi8qKlxuICogQW4gYWxtb3N0LWFsaWFzIHRvIFJlYWN0LnVzZVJlZiBmb3IgdGhlIHR5cGljYWwgZWxlbWVudCByZWYgdXNlIGNhc2UuXG4gKiB1c2VSZWYgY2FuIGFsc28gZW11bGF0ZSBpbnN0YW5jZSB2YXJpYWJsZXMsIHRoaXMgY2FuJ3QuXG4gKiBgdXNlRWxlbWVudFJlZjxUPigpYCBpcyB0aGUgc2FtZSBhcyBgdXNlUmVmPFJlYWN0LkVsZW1lbnRSZWY8VD4gfCBudWxsPihudWxsKWAuXG4gKiBUaGUgZGVmYXVsdCB2YWx1ZSBvZiBgbnVsbGAgaXMgZml4ZWQuXG4gKiBleGFtcGxlIHVzYWdlOlxuICpcbiAqICAgIGNvbnN0IGFSZWYgPSB1c2VFbGVtZW50UmVmPCdkaXYnPigpO1xuICogICAgY29uc3QgYlJlZiA9IHVzZUVsZW1lbnRSZWY8dHlwZW9mIENvbXBvbmVudD4oKTtcbiAqXG4gKiAgICByZXR1cm4gKFxuICogICAgICA8PlxuICogICAgICAgIDxkaXYgcmVmPXthUmVmfSAvPlxuICogICAgICAgIDxDb21wb25lbnQgcmVmPXtiUmVmfSAvPlxuICogICAgICA8Lz5cbiAqICAgICk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VFbGVtZW50UmVmPFQ6IFJlYWN0LkVsZW1lbnRUeXBlPigpOiB7fFxuICBjdXJyZW50OiBSZWFjdC5FbGVtZW50UmVmPFQ+IHwgbnVsbCxcbnx9IHtcbiAgcmV0dXJuIFJlYWN0LnVzZVJlZjxSZWFjdC5FbGVtZW50UmVmPFQ+IHwgbnVsbD4obnVsbCk7XG59XG5cbi8qKlxuICogU2ltaWxhciB0byB1c2VNZW1vLCBidXQgd2l0aG91dCBkZXBlbmRlbmNpZXMsIGFuZCBndWFyYW50ZWVzIHRoYXQgdGhlIHNhbWVcbiAqIGluc3RhbmNlIGlzIHByZXNlcnZlZC4gVGhlIGluaXRpYWxpemF0aW9uIGlzIGVhZ2VyLCBpLmUuIGhhcHBlbnMgb24gdGhlXG4gKiBmaXJzdCBob29rIGNhbGwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VWYWx1ZTxUPihpbml0OiAoKSA9PiBUKTogVCB7XG4gIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxUIHwgbnVsbD4obnVsbCk7XG4gIGlmIChyZWYuY3VycmVudCA9PT0gbnVsbCkgcmVmLmN1cnJlbnQgPSBpbml0KCk7XG4gIHJldHVybiByZWYuY3VycmVudDtcbn1cblxuLyoqXG4gKiBMZXRzIG9uZSBzY2hlZHVsZSBhIGNhbGxiYWNrIHZpYSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcmVwZWF0ZWRseSB1bnRpbFxuICogdGhlIGNhbGxiYWNrIHJldHVybnMgYHRydWVgIG9yIGl0IGlzIGNhbmNlbGxlZC5cbiAqXG4gKiAgICAvLyB0aGUgY2FsbGJhY2sgaXMgcmVwZWF0ZWQgdW50aWwgc3RvcCBpcyBpbnZva2VkXG4gKiAgICBjb25zdCBjYiA9ICgpID0+IGNvbnNvbGUubG9nKCdmcmFtZScpO1xuICogICAgY29uc3QgW3N0YXJ0LCBzdG9wXSA9IHVzZUFuaW1hdGlvbkZyYW1lKGNiKTtcbiAqXG4gKiAgICAvLyB0aGUgY2FsbGJhY2sgaXMgY2FsbGVkIG9ubHkgb25jZVxuICogICAgY29uc3QgY2IgPSAoKSA9PiB7IGNvbnNvbGUubG9nKCdmcmFtZScpOyByZXR1cm4gdHJ1ZTsgfTtcbiAqICAgIGNvbnN0IFtzdGFydF0gPSB1c2VBbmltYXRpb25GcmFtZShjYik7XG4gKlxuICogT2YgY291cnNlLCBgc3RvcGAgY2FuIGJlIHVzZWQgd2l0aCBzZWxmLXN0b3BwaW5nIGNhbGxiYWNrcyBhcyB3ZWxsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQW5pbWF0aW9uRnJhbWUoY2I6ICgpID0+IGJvb2xlYW4gfCB2b2lkKTogWygpID0+IHZvaWQsICgpID0+IHZvaWRdIHtcbiAgY29uc3QgaWQgPSBSZWFjdC51c2VSZWY8QW5pbWF0aW9uRnJhbWVJRCB8IG51bGw+KG51bGwpO1xuXG4gIGZ1bmN0aW9uIHJ1bigpIHtcbiAgICBpZC5jdXJyZW50ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGNvbnN0IGRvbmUgPSBjYigpO1xuICAgICAgaWYgKGRvbmUgIT09IHRydWUpIHJ1bigpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICBpZiAoaWQuY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQuY3VycmVudCk7XG4gICAgICBpZC5jdXJyZW50ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICBzdG9wKCk7XG4gICAgcnVuKCk7XG4gIH1cblxuICByZXR1cm4gW3N0YXJ0LCBzdG9wXTtcbn1cbiIsIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxudHlwZSBTZXR0ZXI8VD4gPSAoKChUKSA9PiBUKSB8IFQpID0+IHZvaWQ7XG50eXBlIExvY2FsU3RvcmFnZU9wdEhvb2s8VD4gPSAoa2V5OiBzdHJpbmcgfCBudWxsKSA9PiBbVCB8IHZvaWQsIFNldHRlcjxUPl07XG50eXBlIExvY2FsU3RvcmFnZUhvb2s8VD4gPSAoa2V5OiBzdHJpbmcpID0+IFtULCBTZXR0ZXI8VD5dO1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbnR5cGUgTG9jYWxTdG9yYWdlVmFsdWU8VD4gPVxuICB8IHt8IGtleTogbnVsbCB8fVxuICB8IHt8IGtleTogc3RyaW5nLCB2YWx1ZTogVCB8fTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaG9vayBmb3IgdXNpbmcgYSB2YWx1ZSBmcm9tIGxvY2FsIHN0b3JhZ2UuIEV4YW1wbGUgdXNhZ2U6XG4gKlxuICogICAgY29uc3QgdXNlTG9jYWxTdG9yYWdlID0gbWFrZUxvY2FsU3RvcmFnZU9wdChcbiAqICAgICAgLy8gZGVzZXJpYWxpemF0aW9uIGZ1bmN0aW9uXG4gKiAgICAgIGpzb24gPT4gKHsgLi4uKGpzb24gIT09IG51bGwgPyBKU09OLnBhcnNlKGpzb24pIDogbnVsbCkgfSksXG4gKiAgICAgIC8vIHNlcmlhbGl6YXRpb24gZnVuY3Rpb25cbiAqICAgICAgc3RhdGUgPT4gKHN0YXRlICE9PSBudWxsID8gSlNPTi5zdHJpbmdpZnkoc3RhdGUpIDogbnVsbCksXG4gKiAgICApO1xuICpcbiAqICAgIGZ1bmN0aW9uIENvbXBvbmVudCh7IGtleSB9KSB7XG4gKiAgICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlTG9jYWxTdG9yYWdlKGtleSk7XG4gKiAgICAgIC8vIC4uLlxuICogICAgfVxuICpcbiAqIFRoZSBrZXkgbWF5IGNoYW5nZSBhdCBydW50aW1lIGFuZCBtYXkgbm90IGJlIGtub3duIGF0IGFsbCB0aW1lcztcbiAqIHBhcnNpbmcgYW5kIHNlcmlhbGl6YXRpb24gYXJlIGZpeGVkIHRob3VnaCwgYW5kIGFyZSB0aGVyZWZvcmUgcGFzc2VkIHRvIHRoZSBmYWN0b3J5LlxuICogVGhlcmUgaXMgbm8gZGVmYXVsdCBzZXJpYWxpemF0aW9uL2Rlc2VyaWFsaXphdGlvbiBsb2dpYywgYmVjYXVzZSB0aGF0IGxvZ2ljIGlzIHJlcXVpcmVkXG4gKiB0byBoYW5kbGUgbm9uLWV4aXN0ZW50IGxvY2FsU3RvcmFnZSBrZXlzOlxuICpcbiAqIC0gRGVzZXJpYWxpemF0aW9uIHdpbGwgYmUgcGFzc2VkIGEgc3RyaW5nLCBvciBudWxsIHZhbHVlIGlmIHRoZSBrZXkgZG9lcyBub3QgZXhpc3QuXG4gKiAgIEl0IHdpbGwgbm90IGJlIGNhbGxlZCBhdCBhbGwgaWYgdGhlcmUgaXMgbm8ga2V5LlxuICogLSBTZXJpYWxpemF0aW9uIHJldHVybnMgYSBzdHJpbmcsIG9yIG51bGwgdG8gZGVsZXRlIHRoZSBpdGVtLlxuICogICBJdCB3aWxsIG5vdCBiZSBjYWxsZWQgYXQgYWxsIGlmIHRoZXJlIGlzIG5vIGtleS5cbiAqXG4gKiBJZiB0aGVyZSdzIG5vIGtleSwgdGhlIGhvb2sncyB2YWx1ZSB3aWxsIGJlIHVuZGVmaW5lZC5cbiAqIEl0IHRoZSBrZXkgZG9lcyBub3QgZXhpc3QgaW4gbG9jYWxTdG9yYWdlLFxuICogdGhlIGhvb2sncyB2YWx1ZSB3aWxsIGJlICB0aGUgcmVzdWx0IG9mIGRlc2VyaWFsaXppbmcgbnVsbDtcbiAqIGluIHRoZSBleGFtcGxlIHRoYXQgdmFsdWUgd291bGQgYmUgbnVsbC5cbiAqXG4gKiBTZXR0aW5nIHRoZSB2YWx1ZSBpcyBpZ25vcmVkIGlmIHRoZXJlIGlzIG5vIGtleS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VMb2NhbFN0b3JhZ2VPcHQ8VD4oXG4gIGRlc2VyaWFsaXplOiAoc3RyaW5nIHwgbnVsbCkgPT4gVCxcbiAgc2VyaWFsaXplOiAoVCkgPT4gc3RyaW5nIHwgbnVsbCxcbik6IExvY2FsU3RvcmFnZU9wdEhvb2s8VD4ge1xuICBmdW5jdGlvbiBsb2FkKGtleTogc3RyaW5nIHwgbnVsbCk6IExvY2FsU3RvcmFnZVZhbHVlPFQ+IHtcbiAgICBpZiAoa2V5ID09PSBudWxsKSByZXR1cm4geyBrZXkgfTtcblxuICAgIGNvbnN0IHZhbHVlID0gZGVzZXJpYWxpemUobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSA/PyBudWxsKTtcbiAgICByZXR1cm4geyBrZXksIHZhbHVlIH07XG4gIH1cblxuICBmdW5jdGlvbiBzdG9yZShzdG9yYWdlVmFsdWU6IExvY2FsU3RvcmFnZVZhbHVlPFQ+KSB7XG4gICAgaWYgKHN0b3JhZ2VWYWx1ZS5rZXkgPT09IG51bGwpIHJldHVybjtcblxuICAgIGNvbnN0IHsga2V5LCB2YWx1ZSB9ID0gc3RvcmFnZVZhbHVlO1xuXG4gICAgY29uc3Qgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZSh2YWx1ZSk7XG4gICAgaWYgKHNlcmlhbGl6ZWQgIT09IG51bGwpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgc2VyaWFsaXplZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXNlTG9jYWxTdG9yYWdlKGtleTogc3RyaW5nIHwgbnVsbCkge1xuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVJbXBsXSA9IFJlYWN0LnVzZVN0YXRlPExvY2FsU3RvcmFnZVZhbHVlPFQ+PigoKSA9PiBsb2FkKGtleSkpO1xuXG4gICAgLy8gcmVsb2FkIHN0YXRlIHdoZW4gdGhlIGtleSBjaGFuZ2VzXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChzdGF0ZS5rZXkgIT09IGtleSkgc2V0U3RhdGVJbXBsKGxvYWQoa2V5KSk7XG4gICAgfSwgW2tleSwgc3RhdGUua2V5XSk7XG5cbiAgICAvLyB3ZSB1c2UgYSBmdW5jdGlvbmFsIHVwZGF0ZSBhcyBlYWNoIHVwZGF0ZSBuZWVkcyB0byBhY2Nlc3MgdGhlIGtleSxcbiAgICAvLyB3aGljaCBpcyBwYXJ0IG9mIHRoZSBzdGF0ZVxuICAgIGZ1bmN0aW9uIHNldFN0YXRlKHZhbHVlOiAoKFQpID0+IFQpIHwgVCkge1xuICAgICAgLy8gJEZsb3dFeHBlY3RFcnJvclxuICAgICAgY29uc3Qgc2V0dGVyOiAoVCkgPT4gVCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlIDogKCkgPT4gdmFsdWU7XG5cbiAgICAgIHNldFN0YXRlSW1wbCgob2xkVmFsdWUpID0+IHtcbiAgICAgICAgaWYgKG9sZFZhbHVlLmtleSA9PT0gbnVsbCkgcmV0dXJuIG9sZFZhbHVlO1xuXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0ge1xuICAgICAgICAgIGtleTogb2xkVmFsdWUua2V5LFxuICAgICAgICAgIHZhbHVlOiBzZXR0ZXIob2xkVmFsdWUudmFsdWUpLFxuICAgICAgICB9O1xuXG4gICAgICAgIHN0b3JlKG5ld1ZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSBzdGF0ZS5rZXkgIT09IG51bGwgPyBzdGF0ZS52YWx1ZSA6IHVuZGVmaW5lZDtcblxuICAgIC8vIHVzZUNhbGxiYWNrOiBSZWFjdC51c2VTdGF0ZSBndWFyYW50ZWVzIHN0YWJpbGl0eSBvZiBzZXRTdGF0ZSxcbiAgICAvLyBtaXJyb3IgdGhhdCBoZXJlIC0gYXQgbGVhc3Qgd2hlbiB0aGUga2V5IGlzIHN0YWJsZVxuICAgIHJldHVybiBbdmFsdWUsIFJlYWN0LnVzZUNhbGxiYWNrKHNldFN0YXRlLCBbc2V0U3RhdGVJbXBsXSldO1xuICB9XG5cbiAgcmV0dXJuIHVzZUxvY2FsU3RvcmFnZTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgaG9vayBmb3IgdXNpbmcgYSB2YWx1ZSBmcm9tIGxvY2FsIHN0b3JhZ2UuIEV4YW1wbGUgdXNhZ2U6XG4gKlxuICogICAgY29uc3QgdXNlTG9jYWxTdG9yYWdlID0gbWFrZUxvY2FsU3RvcmFnZU9wdChcbiAqICAgICAgLy8gZGVzZXJpYWxpemF0aW9uIGZ1bmN0aW9uXG4gKiAgICAgIGpzb24gPT4gKHsgLi4uKGpzb24gIT09IG51bGwgPyBKU09OLnBhcnNlKGpzb24pIDogbnVsbCkgfSksXG4gKiAgICAgIC8vIHNlcmlhbGl6YXRpb24gZnVuY3Rpb25cbiAqICAgICAgc3RhdGUgPT4gKHN0YXRlICE9PSBudWxsID8gSlNPTi5zdHJpbmdpZnkoc3RhdGUpIDogbnVsbCksXG4gKiAgICApO1xuICpcbiAqICAgIGZ1bmN0aW9uIENvbXBvbmVudCh7IGtleSB9KSB7XG4gKiAgICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlTG9jYWxTdG9yYWdlKGtleSk7XG4gKiAgICAgIC8vIC4uLlxuICogICAgfVxuICpcbiAqIFRoaXMgZnVuY3Rpb24gaXMgZXF1aXZhbGVudCB0byBtYWtlTG9jYWxTdG9yYWdlT3B0IGV4Y2VwdCBmb3IgaXRzIHR5cGU6XG4gKiB0aGUga2V5IG1heSBjaGFuZ2UgYXQgcnVudGltZSBidXQgbXVzdCBiZSBub24tbnVsbCBhdCBhbGwgdGltZXM7XG4gKiB0aGlzIG1lYW5zIHRoZSBob29rJ3MgdmFsdWUgd2lsbCBub3QgYmUgdW5kZWZpbmVkLFxuICogdW5sZXNzIHRoYXQgaXMgYSB2YWx1ZSB0aGUgZGVzZXJpYWxpemF0aW9uIGZ1bmN0aW9uIGNvdWxkIHJldHVybi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VMb2NhbFN0b3JhZ2U8VD4oXG4gIGRlc2VyaWFsaXplOiAoc3RyaW5nIHwgbnVsbCkgPT4gVCxcbiAgc2VyaWFsaXplOiAoVCkgPT4gc3RyaW5nIHwgbnVsbCxcbik6IExvY2FsU3RvcmFnZUhvb2s8VD4ge1xuICAvLyAkRmxvd0V4cGVjdEVycm9yXG4gIHJldHVybiBtYWtlTG9jYWxTdG9yYWdlT3B0PFQ+KGRlc2VyaWFsaXplLCBzZXJpYWxpemUpO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5pbXBvcnQgY29tbW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9jb21tb24nO1xuXG5jb25zdCBoZWRnZWhvZ0dyZWVuTGlnaHQgPSAnIzM4YjQ0OSc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogaGVkZ2Vob2dHcmVlbkxpZ2h0LFxuICAgICAgY29udHJhc3RUZXh0OiBjb21tb24ud2hpdGUsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiIsIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCB7IG1ha2VNdXRhdGlvbiB9IGZyb20gJy4uL21pc2MvaG9va3MnO1xuXG5pbXBvcnQge1xuICB0eXBlIExvZ2luLFxuICB0eXBlIExvZ2luVmFyaWFibGVzLFxuICB0eXBlIExvZ2luX2xvZ2luIGFzIEF1dGhEYXRhLFxufSBmcm9tICcuL19fZ2VuZXJhdGVkX18vTG9naW4nO1xuXG5jb25zdCB1c2VMb2dpbk11dGF0aW9uID0gbWFrZU11dGF0aW9uPExvZ2luLCBMb2dpblZhcmlhYmxlcz4oZ3FsYFxuICBtdXRhdGlvbiBMb2dpbigkdXNlcm5hbWU6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISkge1xuICAgIGxvZ2luKHVzZXJuYW1lOiAkdXNlcm5hbWUsIHBhc3N3b3JkOiAkcGFzc3dvcmQpIHtcbiAgICAgIGlkXG4gICAgICB1c2VybmFtZVxuICAgICAgdG9rZW5cbiAgICB9XG4gIH1cbmApO1xuXG50eXBlIEF1dGggPSB7fFxuICBhdXRoRGF0YTogQXV0aERhdGEgfCBudWxsLFxuICBsb2dpbih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxBdXRoRGF0YT4sXG4gIGxvZ291dCgpOiB2b2lkLFxufH07XG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8QXV0aD4oe1xuICBhdXRoRGF0YTogbnVsbCxcbiAgbG9naW4oKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdsb2dpbiBub3Qgc3BlY2lmaWVkJyk7XG4gIH0sXG4gIGxvZ291dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2xvZ291dCBub3Qgc3BlY2lmaWVkJyk7XG4gIH0sXG59KTtcblxudHlwZSBBdXRoUHJvdmlkZXJQcm9wVHlwZXMgPSB7fFxuICBjaGlsZHJlbjogUmVhY3QuTm9kZSxcbnx9O1xuXG4vKipcbiAqIGBBdXRoUHJvdmlkZXJgIHByb3ZpZGVzIGEgY29udGV4dCB3aXRoIHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXJcbiAqIGFzIHdlbGwgYXMgbG9naW4gYW5kIGxvZ291dCBmdW5jdGlvbnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBBdXRoUHJvdmlkZXJQcm9wVHlwZXMpIHtcbiAgY29uc3QgW3BlcmZvcm1Mb2dpbiwgX2xvZ2luUmVzcG9uc2VdID0gdXNlTG9naW5NdXRhdGlvbigpO1xuICBjb25zdCBbYXV0aERhdGEsIHNldEF1dGhEYXRhXSA9IFJlYWN0LnVzZVN0YXRlPEF1dGhEYXRhIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgbG9naW4gPSBhc3luYyAodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBlcmZvcm1Mb2dpbih7IHZhcmlhYmxlczogeyB1c2VybmFtZSwgcGFzc3dvcmQgfSB9KTtcblxuICAgIC8vIHdlJ3JlIG5vdCBwYXNzaW5nIGBpZ25vcmVSZXN1bHRzYCwgc28gdGhlcmUgd2lsbCBiZSBhIHJlc3VsdFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gICAgaWYgKCFyZXN1bHQuZGF0YSkgdGhyb3cgJ3VucmVhY2hhYmxlJztcblxuICAgIGNvbnN0IGRhdGEgPSByZXN1bHQuZGF0YS5sb2dpbjtcbiAgICBzZXRBdXRoRGF0YShkYXRhKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXV0aCcsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgc2V0QXV0aERhdGEobnVsbCk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2F1dGgnKTtcbiAgfTtcblxuICBjb25zdCByZWNvdmVyU2Vzc2lvbiA9ICgpID0+IHtcbiAgICBjb25zdCBhdXRoID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKTtcbiAgICBzZXRBdXRoRGF0YShhdXRoID8gSlNPTi5wYXJzZShhdXRoKSA6IG51bGwpO1xuICB9O1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiByZWNvdmVyU2Vzc2lvbigpLCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgYXV0aERhdGEsIGxvZ2luLCBsb2dvdXQgfX0+e2NoaWxkcmVufTwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbi8qKlxuICogUmVhY3QgaG9vayBmb3IgYWNjZXNzaW5nIHRoZSBhdXRoIGNvbnRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VBdXRoKCk6IEF1dGgge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG59XG4iLCJpbXBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tICdhcG9sbG8tY2xpZW50JztcbmltcG9ydCB7IGZyb20gfSBmcm9tICdhcG9sbG8tbGluayc7XG5pbXBvcnQgeyBvbkVycm9yIH0gZnJvbSAnYXBvbGxvLWxpbmstZXJyb3InO1xuaW1wb3J0IHsgU2NoZW1hTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLXNjaGVtYSc7XG5pbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnLi9jcmVhdGVDYWNoZSc7XG5pbXBvcnQgY2xpZW50U2NoZW1hIGZyb20gJy4uL2dyYXBocWwvc2NoZW1hJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQXBvbGxvQ2xpZW50KHNjaGVtYSwgaW5pdGlhbFN0YXRlKSB7XG4gIGNvbnN0IGNhY2hlID0gY3JlYXRlQ2FjaGUoKTtcbiAgY2FjaGUud3JpdGVEYXRhKHsgZGF0YTogaW5pdGlhbFN0YXRlIH0pO1xuXG4gIGNvbnN0IGVycm9yTGluayA9IG9uRXJyb3IoKHsgZ3JhcGhRTEVycm9ycywgbmV0d29ya0Vycm9yIH0pID0+IHtcbiAgICBpZiAoZ3JhcGhRTEVycm9ycylcbiAgICAgIGdyYXBoUUxFcnJvcnMubWFwKCh7IG1lc3NhZ2UsIGxvY2F0aW9ucywgcGF0aCB9KSA9PlxuICAgICAgICBjb25zb2xlLndhcm4oYFtHcmFwaFFMIGVycm9yXTogTWVzc2FnZTogJHttZXNzYWdlfSwgTG9jYXRpb246ICR7bG9jYXRpb25zfSwgUGF0aDogJHtwYXRofWApLFxuICAgICAgKTtcbiAgICBpZiAobmV0d29ya0Vycm9yKSBjb25zb2xlLndhcm4oYFtOZXR3b3JrIGVycm9yXTogJHtuZXR3b3JrRXJyb3J9YCk7XG4gIH0pO1xuXG4gIGNvbnN0IHNjaGVtYUxpbmsgPSBuZXcgU2NoZW1hTGluayh7IC4uLnNjaGVtYSB9KTtcblxuICBjb25zdCBsaW5rID0gZnJvbShbZXJyb3JMaW5rLCBzY2hlbWFMaW5rXSk7XG5cbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIGxpbmssXG4gICAgY2FjaGUsXG4gICAgcmVzb2x2ZXJzOiBjbGllbnRTY2hlbWEucmVzb2x2ZXJzLFxuICAgIHF1ZXJ5RGVkdXBsaWNhdGlvbjogdHJ1ZSxcbiAgICBzc3JNb2RlOiB0cnVlLFxuICB9KTtcbn1cbiIsIi8vIEBmbG93XG5cbmltcG9ydCB7IEluTWVtb3J5Q2FjaGUsIGRlZmF1bHREYXRhSWRGcm9tT2JqZWN0IH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5JztcblxuZnVuY3Rpb24gZGF0YUlkRnJvbU9iamVjdChvYmopIHtcbiAgc3dpdGNoIChvYmouX190eXBlbmFtZSkge1xuICAgIGNhc2UgJ05ld3NJdGVtJzpcbiAgICAgIHJldHVybiBvYmoubGluayA/IGBOZXdzSXRlbToke29iai5saW5rfWAgOiBkZWZhdWx0RGF0YUlkRnJvbU9iamVjdChvYmopO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZGVmYXVsdERhdGFJZEZyb21PYmplY3Qob2JqKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDYWNoZSgpIHtcbiAgLy8gaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9iYXNpY3MvY2FjaGluZy5odG1sI2NvbmZpZ3VyYXRpb25cbiAgcmV0dXJuIG5ldyBJbk1lbW9yeUNhY2hlKHtcbiAgICBkYXRhSWRGcm9tT2JqZWN0LFxuICB9KTtcbn1cbiIsIi8vIEBmbG93XG5cbmltcG9ydCBjbGllbnRTY2hlbWEgZnJvbSAnLi9ncmFwaHFsL3NjaGVtYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUluaXRpYWxTdGF0ZShkYXRhOiBPYmplY3QpIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5jbGllbnRTY2hlbWEuZGVmYXVsdHMsXG4gICAgLi4uZGF0YSxcbiAgfTtcbn1cbiIsIi8vIEBmbG93XG5cbmltcG9ydCB7IHR5cGUgR3JhcGhxbERlZlNoYXBlIH0gZnJvbSAnLi4vZ3JhcGhxbERlZic7XG5cbmNvbnN0IGRlZjogR3JhcGhxbERlZlNoYXBlID0ge1xuICBzY2hlbWE6IFtcbiAgICBgXG4gICAgdHlwZSBOZXR3b3JrU3RhdHVzIHtcbiAgICAgIGlzQ29ubmVjdGVkOiBCb29sZWFuIVxuICAgIH1cbiAgICBgLFxuICBdLFxuICBxdWVyaWVzOiBbXG4gICAgYFxuICAgIG5ldHdvcmtTdGF0dXM6IE5ldHdvcmtTdGF0dXMhXG4gICAgYCxcbiAgXSxcbiAgbXV0YXRpb25zOiBbXG4gICAgYFxuICAgIHVwZGF0ZU5ldHdvcmtTdGF0dXMoaXNDb25uZWN0ZWQ6IEJvb2xlYW4pOiBOZXR3b3JrU3RhdHVzIVxuICAgIGAsXG4gIF0sXG4gIHJlc29sdmVyczogKCkgPT4gKHtcbiAgICBNdXRhdGlvbjoge1xuICAgICAgdXBkYXRlTmV0d29ya1N0YXR1czogKF8sIHsgaXNDb25uZWN0ZWQgfSwgY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIG5ldHdvcmtTdGF0dXM6IHtcbiAgICAgICAgICAgIF9fdHlwZW5hbWU6ICdOZXR3b3JrU3RhdHVzJyxcbiAgICAgICAgICAgIGlzQ29ubmVjdGVkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGNvbnRleHQuY2FjaGUud3JpdGVEYXRhKHsgZGF0YSB9KTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuICBkZWZhdWx0czoge1xuICAgIG5ldHdvcmtTdGF0dXM6IHtcbiAgICAgIF9fdHlwZW5hbWU6ICdOZXR3b3JrU3RhdHVzJyxcbiAgICAgIGlzQ29ubmVjdGVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWY7XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJy4uL2dyYXBocWxEZWYnO1xuXG5pbXBvcnQgbmV0d29ya1N0YXR1cyBmcm9tICcuL25ldHdvcmtTdGF0dXMnO1xuXG5leHBvcnQgZGVmYXVsdCBtZXJnZShuZXR3b3JrU3RhdHVzKTtcbiIsIi8vIEBmbG93XG5cbmltcG9ydCBsb2Rhc2hNZXJnZSBmcm9tICdsb2Rhc2gubWVyZ2UnO1xuaW1wb3J0IHsgUHViU3ViIH0gZnJvbSAnZ3JhcGhxbC1zdWJzY3JpcHRpb25zJztcblxuZXhwb3J0IHR5cGUgR3JhcGhxbERlZiA9IHt8XG4gIHNjaGVtYTogc3RyaW5nW10sXG4gIHF1ZXJpZXM6IHN0cmluZ1tdLFxuICBtdXRhdGlvbnM6IHN0cmluZ1tdLFxuICBzdWJzY3JpcHRpb25zOiBzdHJpbmdbXSxcbiAgcmVzb2x2ZXJzOiAocHVic3ViOiBQdWJTdWIpID0+IE9iamVjdCxcbiAgZGVmYXVsdHM6IE9iamVjdCxcbnx9O1xuXG5leHBvcnQgdHlwZSBHcmFwaHFsRGVmU2hhcGUgPSB7fFxuICArc2NoZW1hPzogc3RyaW5nW10sXG4gICtxdWVyaWVzPzogc3RyaW5nW10sXG4gICttdXRhdGlvbnM/OiBzdHJpbmdbXSxcbiAgK3N1YnNjcmlwdGlvbnM/OiBzdHJpbmdbXSxcbiAgK3Jlc29sdmVycz86IChwdWJzdWI6IFB1YlN1YikgPT4gT2JqZWN0LFxuICArZGVmYXVsdHM/OiBPYmplY3QsXG58fTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5jb25zdCBkdW1teVJlc29sdmVyID0gKHB1YnN1YjogUHViU3ViKSA9PiAoe30pO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKC4uLmRlZnM6IEdyYXBocWxEZWZTaGFwZVtdKTogR3JhcGhxbERlZiB7XG4gIHJldHVybiB7XG4gICAgc2NoZW1hOiBbXS5jb25jYXQoLi4uZGVmcy5tYXAoKGRlZikgPT4gZGVmLnNjaGVtYSA/PyBbXSkpLFxuICAgIHF1ZXJpZXM6IFtdLmNvbmNhdCguLi5kZWZzLm1hcCgoZGVmKSA9PiBkZWYucXVlcmllcyA/PyBbXSkpLFxuICAgIG11dGF0aW9uczogW10uY29uY2F0KC4uLmRlZnMubWFwKChkZWYpID0+IGRlZi5tdXRhdGlvbnMgPz8gW10pKSxcbiAgICBzdWJzY3JpcHRpb25zOiBbXS5jb25jYXQoLi4uZGVmcy5tYXAoKGRlZikgPT4gZGVmLnN1YnNjcmlwdGlvbnMgPz8gW10pKSxcbiAgICByZXNvbHZlcnM6IChwdWJzdWI6IFB1YlN1YikgPT5cbiAgICAgIGxvZGFzaE1lcmdlKHt9LCAuLi5kZWZzLm1hcCgoZGVmKSA9PiAoZGVmLnJlc29sdmVycyA/PyBkdW1teVJlc29sdmVyKShwdWJzdWIpKSksXG4gICAgZGVmYXVsdHM6IGxvZGFzaE1lcmdlKC4uLmRlZnMubWFwKChkZWYpID0+IGRlZi5kZWZhdWx0cyA/PyB7fSkpLFxuICB9O1xufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICcuL2dyYXBocWxEZWYnO1xuXG5pbXBvcnQgT25NZW1vcnlTdGF0ZSBmcm9tICcuL09uTWVtb3J5U3RhdGUvc2NoZW1hJztcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2UoT25NZW1vcnlTdGF0ZSk7XG4iLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBVbml2ZXJzYWxSb3V0ZXIgZnJvbSAndW5pdmVyc2FsLXJvdXRlcic7XG5pbXBvcnQgcm91dGVzIGZyb20gJy4uL3JvdXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBVbml2ZXJzYWxSb3V0ZXIocm91dGVzLCB7XG4gIHJlc29sdmVSb3V0ZShjb250ZXh0LCBwYXJhbXMpIHtcbiAgICBpZiAodHlwZW9mIGNvbnRleHQucm91dGUubG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGNvbnRleHQucm91dGUubG9hZCgpLnRoZW4oKGFjdGlvbikgPT4gYWN0aW9uLmRlZmF1bHQoY29udGV4dCwgcGFyYW1zKSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY29udGV4dC5yb3V0ZS5hY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBjb250ZXh0LnJvdXRlLmFjdGlvbihjb250ZXh0LCBwYXJhbXMpO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9LFxufSk7XG4iLCJcbiAgICB2YXIgcmVmcyA9IDA7XG4gICAgdmFyIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMyEuL0Vycm9yUGFnZS5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2luc2VydENzcy5qc1wiKTtcbiAgICB2YXIgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcblxuICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNzcy5sb2NhbHMgfHwge307XG4gICAgZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBleHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuICcnICsgY3NzOyB9O1xuICAgIGV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTMhLi9FcnJvclBhZ2UuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTMhLi9FcnJvclBhZ2UuY3NzXCIpO1xuICAgICAgICBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vRXJyb3JQYWdlLmNzcyc7XG5cbnR5cGUgUHJvcFR5cGVzID0ge3xcbiAgZXJyb3I6IHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIHN0YWNrOiBzdHJpbmcsXG4gIH0sXG58fTtcblxuY2xhc3MgRXJyb3JQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BUeXBlcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGVycm9yOiBudWxsLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoX19ERVZfXyAmJiB0aGlzLnByb3BzLmVycm9yKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5lcnJvci5uYW1lfTwvaDE+XG4gICAgICAgICAgPHByZT57dGhpcy5wcm9wcy5lcnJvci5zdGFja308L3ByZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+RXJyb3I8L2gxPlxuICAgICAgICA8cD5Tb3JyeSwgYSBjcml0aWNhbCBlcnJvciBvY2N1cnJlZCBvbiB0aGlzIHBhZ2UuPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgeyBFcnJvclBhZ2UgYXMgRXJyb3JQYWdlV2l0aG91dFN0eWxlIH07XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKEVycm9yUGFnZSk7XG4iLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEVycm9yUGFnZSBmcm9tICcuL0Vycm9yUGFnZSc7XG5cbmZ1bmN0aW9uIGFjdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ0RlbW8gRXJyb3InLFxuICAgIGNvbXBvbmVudDogPEVycm9yUGFnZSAvPixcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uO1xuIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBnbG9iYWwtcmVxdWlyZSAqL1xuXG4vLyBUaGUgdG9wLWxldmVsIChwYXJlbnQpIHJvdXRlXG5jb25zdCByb3V0ZXMgPSB7XG4gIHBhdGg6ICcnLFxuXG4gIC8vIEtlZXAgaW4gbWluZCwgcm91dGVzIGFyZSBldmFsdWF0ZWQgaW4gb3JkZXJcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBwYXRoOiAnJyxcbiAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnaWRlJyAqLyAnLi9wcm9qZWN0cycpLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy9wcm9qZWN0cy86aWQnLFxuICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdpZGUnICovICcuL2lkZScpLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy9jb250YWN0JyxcbiAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnY29udGFjdCcgKi8gJy4vY29udGFjdCcpLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy9sb2dpbicsXG4gICAgICBsb2FkOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ2xvZ2luJyAqLyAnLi9sb2dpbicpLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy9yZWdpc3RlcicsXG4gICAgICBsb2FkOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ3JlZ2lzdGVyJyAqLyAnLi9yZWdpc3RlcicpLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy9oZWxwJyxcbiAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnaGVscCcgKi8gJy4vaGVscCcpLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy9jb250ZXN0JyxcbiAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnY29udGVzdCcgKi8gJy4vY29udGVzdCcpLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy9hYm91dCcsXG4gICAgICBsb2FkOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ2Fib3V0JyAqLyAnLi9hYm91dCcpLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy9wcml2YWN5JyxcbiAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAncHJpdmFjeScgKi8gJy4vcHJpdmFjeScpLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy9hZG1pbicsXG4gICAgICBsb2FkOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ2FkbWluJyAqLyAnLi9hZG1pbicpLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy9pbmRleGVkREInLFxuICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdpbmRleGVkREInICovICcuL2luZGV4ZWREQicpLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy93ZWJydGMnLFxuICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICd3ZWJydGMnICovICcuL3dlYnJ0YycpLFxuICAgIH0sXG5cbiAgICAvLyBXaWxkY2FyZCByb3V0ZXMsIGUuZy4geyBwYXRoOiAnKC4qKScsIC4uLiB9IChtdXN0IGdvIGxhc3QpXG4gICAge1xuICAgICAgcGF0aDogJyguKiknLFxuICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdub3QtZm91bmQnICovICcuL25vdC1mb3VuZCcpLFxuICAgIH0sXG4gIF0sXG5cbiAgYXN5bmMgYWN0aW9uKHsgbmV4dCB9KSB7XG4gICAgLy8gRXhlY3V0ZSBlYWNoIGNoaWxkIHJvdXRlIHVudGlsIG9uZSBvZiB0aGVtIHJldHVybiB0aGUgcmVzdWx0XG4gICAgY29uc3Qgcm91dGUgPSBhd2FpdCBuZXh0KCk7XG5cbiAgICAvLyBQcm92aWRlIGRlZmF1bHQgdmFsdWVzIGZvciB0aXRsZSwgZGVzY3JpcHRpb24gZXRjLlxuICAgIHJvdXRlLnRpdGxlID0gYCR7cm91dGUudGl0bGUgPz8gJ1VudGl0bGVkIFBhZ2UnfSAtIEhlZGdlaG9nIElERWA7XG4gICAgcm91dGUuZGVzY3JpcHRpb24gPSByb3V0ZS5kZXNjcmlwdGlvbiA/PyAnJztcblxuICAgIHJldHVybiByb3V0ZTtcbiAgfSxcbn07XG5cbi8vIFRoZSBlcnJvciBwYWdlIGlzIGF2YWlsYWJsZSBieSBwZXJtYW5lbnQgdXJsIGZvciBkZXZlbG9wbWVudCBtb2RlXG5pZiAoX19ERVZfXykge1xuICByb3V0ZXMuY2hpbGRyZW4udW5zaGlmdCh7XG4gICAgcGF0aDogJy9lcnJvcicsXG4gICAgYWN0aW9uOiByZXF1aXJlKCcuL2Vycm9yJykuZGVmYXVsdCxcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcbiIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgc2VyaWFsaXplIGZyb20gJ3NlcmlhbGl6ZS1qYXZhc2NyaXB0JztcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1kYW5nZXIgKi9cblxudHlwZSBQcm9wVHlwZXMgPSB7fFxuICB0aXRsZTogc3RyaW5nLFxuICBkZXNjcmlwdGlvbjogc3RyaW5nLFxuICBzdHlsZXM6IEFycmF5PHtcbiAgICBpZDogc3RyaW5nLFxuICAgIGNzc1RleHQ6IHN0cmluZyxcbiAgfT4sXG4gIHNjcmlwdHM6IHN0cmluZ1tdLFxuICBhcHA6IE9iamVjdCxcbiAgY2hpbGRyZW46IHN0cmluZyxcbnx9O1xuXG5jbGFzcyBIdG1sIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BUeXBlcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHN0eWxlczogW10sXG4gICAgc2NyaXB0czogW10sXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBzdHlsZXMsIHNjcmlwdHMsIGFwcCwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxodG1sIGNsYXNzTmFtZT1cIm5vLWpzXCIgbGFuZz1cImVuXCI+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwieC11YS1jb21wYXRpYmxlXCIgY29udGVudD1cImllPWVkZ2VcIiAvPlxuICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICAgIHtzY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiAoXG4gICAgICAgICAgICA8bGluayBrZXk9e3NjcmlwdH0gcmVsPVwicHJlbG9hZFwiIGhyZWY9e3NjcmlwdH0gYXM9XCJzY3JpcHRcIiAvPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPVwiL2FwcGxlLXRvdWNoLWljb24ucG5nXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMzJ4MzJcIiBocmVmPVwiL2Zhdmljb24tMzJ4MzIucG5nXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMTk0eDE5NFwiIGhyZWY9XCIvZmF2aWNvbi0xOTR4MTk0LnBuZ1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjE5MngxOTJcIiBocmVmPVwiL2FuZHJvaWQtY2hyb21lLTE5MngxOTIucG5nXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMTZ4MTZcIiBocmVmPVwiL2Zhdmljb24tMTZ4MTYucG5nXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvc2l0ZS53ZWJtYW5pZmVzdFwiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwibWFzay1pY29uXCIgaHJlZj1cIi9zYWZhcmktcGlubmVkLXRhYi5zdmdcIiBjb2xvcj1cIiM3Y2QwMDFcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGVcIiBjb250ZW50PVwiSGVkZ2Vob2dcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsaWNhdGlvbi1uYW1lXCIgY29udGVudD1cIkhlZGdlaG9nXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiIzdjZDAwMVwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUltYWdlXCIgY29udGVudD1cIi9tc3RpbGUtMTQ0eDE0NC5wbmdcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLWNvbmZpZ1wiIGNvbnRlbnQ9XCIvYnJvd3NlcmNvbmZpZy54bWxcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCIgLz5cbiAgICAgICAgICB7c3R5bGVzLm1hcCgoc3R5bGUpID0+IChcbiAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICBrZXk9e3N0eWxlLmlkfVxuICAgICAgICAgICAgICBpZD17c3R5bGUuaWR9XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3R5bGUuY3NzVGV4dCB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9oZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8ZGl2IGlkPVwiYXBwXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjaGlsZHJlbiB9fSAvPlxuICAgICAgICAgIDxzY3JpcHQgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBgd2luZG93LkFwcD0ke3NlcmlhbGl6ZShhcHApfWAgfX0gLz5cbiAgICAgICAgICB7c2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gKFxuICAgICAgICAgICAgPHNjcmlwdCBrZXk9e3NjcmlwdH0gc3JjPXtzY3JpcHR9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAge2NvbmZpZy5hbmFseXRpY3MuZ29vZ2xlVHJhY2tpbmdJZCAmJiAoXG4gICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOlxuICAgICAgICAgICAgICAgICAgJ3dpbmRvdy5nYT1mdW5jdGlvbigpe2dhLnEucHVzaChhcmd1bWVudHMpfTtnYS5xPVtdO2dhLmw9K25ldyBEYXRlOycgK1xuICAgICAgICAgICAgICAgICAgYGdhKCdjcmVhdGUnLCcke2NvbmZpZy5hbmFseXRpY3MuZ29vZ2xlVHJhY2tpbmdJZH0nLCdhdXRvJyk7Z2EoJ3NlbmQnLCdwYWdldmlldycpYCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7Y29uZmlnLmFuYWx5dGljcy5nb29nbGVUcmFja2luZ0lkICYmIChcbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vYW5hbHl0aWNzLmpzXCIgYXN5bmMgZGVmZXIgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIdG1sO1xuIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0RvIG5vdCBpbXBvcnQgYGNvbmZpZy5qc2AgZnJvbSBpbnNpZGUgdGhlIGNsaWVudC1zaWRlIGNvZGUuJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBOb2RlLmpzIGFwcFxuICBwb3J0OiBwcm9jZXNzLmVudi5QT1JUID8/IDMwMDAsXG4gIHNlY3VyZVBvcnQ6IHByb2Nlc3MuZW52LlNFQ1VSRV9QT1JUID8/IDMwMDEsXG4gIGNlcnRGaWxlOiBwcm9jZXNzLmVudi5DRVJUX0ZJTEUgPz8gbnVsbCxcbiAga2V5RmlsZTogcHJvY2Vzcy5lbnYuS0VZX0ZJTEUgPz8gbnVsbCxcblxuICAvLyBodHRwczovL2V4cHJlc3Nqcy5jb20vZW4vZ3VpZGUvYmVoaW5kLXByb3hpZXMuaHRtbFxuICB0cnVzdFByb3h5OiBwcm9jZXNzLmVudi5UUlVTVF9QUk9YWSA/PyAnbG9vcGJhY2snLFxuXG4gIC8vIEFQSSBHYXRld2F5XG4gIGFwaToge1xuICAgIC8vIEFQSSBVUkwgdG8gYmUgdXNlZCBpbiB0aGUgY2xpZW50LXNpZGUgY29kZVxuICAgIGNsaWVudFVybDogcHJvY2Vzcy5lbnYuQVBJX0NMSUVOVF9VUkwgPz8gJycsXG4gICAgLy8gQVBJIFVSTCB0byBiZSB1c2VkIGluIHRoZSBzZXJ2ZXItc2lkZSBjb2RlXG4gICAgc2VydmVyVXJsOiBwcm9jZXNzLmVudi5BUElfU0VSVkVSX1VSTCA/PyBgaHR0cDovL2xvY2FsaG9zdDoke3Byb2Nlc3MuZW52LlBPUlQgPz8gMzAwMH1gLFxuICB9LFxuXG4gIC8vIHNjaGVtYVxuICBkYXRhYmFzZVVybDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMID8/ICdzcWxpdGU6ZGF0YWJhc2Uuc3FsaXRlJyxcbiAgbW9uZ29kYlVybDogcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwgPz8gJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvaGVkZ2Vob2dJZGUnLFxuXG4gIC8vIFdlYiBhbmFseXRpY3NcbiAgYW5hbHl0aWNzOiB7XG4gICAgLy8gaHR0cHM6Ly9hbmFseXRpY3MuZ29vZ2xlLmNvbS9cbiAgICBnb29nbGVUcmFja2luZ0lkOiBwcm9jZXNzLmVudi5HT09HTEVfVFJBQ0tJTkdfSUQsIC8vIFVBLVhYWFhYLVhcbiAgfSxcblxuICAvLyBBdXRoZW50aWNhdGlvblxuICBhdXRoOiB7XG4gICAgdG9rZW5FeHBpcmVzSW46IHByb2Nlc3MuZW52LlRPS0VOX0VYUElSRVNfSU4gPz8gJzdkJywgLy8gRGVmYXVsdCBzZXNzaW9uIGR1cmF0aW9uOiA3IGRheXNcbiAgICBqd3Q6IHsgc2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfU0VDUkVUID8/ICdSZWFjdCBTdGFydGVyIEtpdCcgfSxcblxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vXG4gICAgZmFjZWJvb2s6IHtcbiAgICAgIGlkOiBwcm9jZXNzLmVudi5GQUNFQk9PS19BUFBfSUQgPz8gJzE4NjI0NDU1MTc0NTYzMScsXG4gICAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LkZBQ0VCT09LX0FQUF9TRUNSRVQgPz8gJ2E5NzBhZTMyNDBhYjRiOWI4YWFlMGY5ZjA2NjFjNmZjJyxcbiAgICB9LFxuXG4gICAgLy8gaHR0cHM6Ly9jbG91ZC5nb29nbGUuY29tL2NvbnNvbGUvcHJvamVjdFxuICAgIGdvb2dsZToge1xuICAgICAgaWQ6XG4gICAgICAgIHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQgPz9cbiAgICAgICAgJzI1MTQxMDczMDU1MC1haGNnMG91NW1nZmhsOGhsdWkxdXJydTdqbjVzMTJrbS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbScsXG4gICAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUID8/ICdZOHlSOXlaQWhtOWpROEZLQUw4UUlFY2QnLFxuICAgIH0sXG5cbiAgICAvLyBodHRwczovL2FwcHMudHdpdHRlci5jb20vXG4gICAgdHdpdHRlcjoge1xuICAgICAga2V5OiBwcm9jZXNzLmVudi5UV0lUVEVSX0NPTlNVTUVSX0tFWSA/PyAnSWUyMEFadkxKSTJsUUQ1RHNneGdqYXVucycsXG4gICAgICBzZWNyZXQ6XG4gICAgICAgIHByb2Nlc3MuZW52LlRXSVRURVJfQ09OU1VNRVJfU0VDUkVUID8/ICdLVFo2Y3hvS25FYWtRQ2VTcFpsYVVDSldHQWxURUJKajB5MkVNa1VCdWpBN3pXU3ZhUScsXG4gICAgfSxcbiAgfSxcbn07XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgeyBTY2hlbWFEaXJlY3RpdmVWaXNpdG9yIH0gZnJvbSAnZ3JhcGhxbC10b29scyc7XG5pbXBvcnQgeyBkZWZhdWx0RmllbGRSZXNvbHZlciwgR3JhcGhRTEZpZWxkIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkVycm9yIH0gZnJvbSAnYXBvbGxvLXNlcnZlcic7XG5cbi8vIEZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9qd2hlbnNoYXcvZ3JhcGhxbC1kaXJlY3RpdmVzLWF1dGgvYmxvYi9tYXN0ZXIvRmllbGRBdXRoRGlyZWN0aXZlLmpzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoRGlyZWN0aXZlIGV4dGVuZHMgU2NoZW1hRGlyZWN0aXZlVmlzaXRvciB7XG4gIHZpc2l0RmllbGREZWZpbml0aW9uKGZpZWxkOiBHcmFwaFFMRmllbGQsIF9kZXRhaWxzOiBhbnkpIHtcbiAgICB0aGlzLmVuc3VyZUZpZWxkV3JhcHBlZChmaWVsZCk7XG4gIH1cblxuICBlbnN1cmVGaWVsZFdyYXBwZWQoZmllbGQ6IEdyYXBoUUxGaWVsZCkge1xuICAgIGNvbnN0IHsgcmVzb2x2ZTogb3JpZ2luYWxSZXNvbHZlID0gZGVmYXVsdEZpZWxkUmVzb2x2ZXIgfSA9IGZpZWxkO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZSguLi5hcmdzKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gYXJnc1syXTtcbiAgICAgIGlmICghY29udGV4dC51c2VyPy51c2VySWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEF1dGhlbnRpY2F0aW9uRXJyb3IoJ25vdCBhdXRob3JpemVkJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvcmlnaW5hbFJlc29sdmUuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuXG4gICAgZmllbGQucmVzb2x2ZSA9IHJlc29sdmUuYmluZCh0aGlzKTtcbiAgfVxufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0IHsgUHViU3ViIH0gZnJvbSAnZ3JhcGhxbC1zdWJzY3JpcHRpb25zJztcblxuaW1wb3J0IHsgdHlwZSBHcmFwaHFsRGVmLCBtZXJnZSB9IGZyb20gJy4uLy4uL2NvcmUvZ3JhcGhxbC9ncmFwaHFsRGVmJztcblxuaW1wb3J0IFNjaGVtYSBmcm9tICcuL3NjaGVtYS9pbmRleCc7XG5pbXBvcnQgQ29yZSBmcm9tICcuLi8uLi9jb3JlL2dyYXBocWwvc2NoZW1hJztcbmltcG9ydCBBdXRoRGlyZWN0aXZlIGZyb20gJy4vQXV0aERpcmVjdGl2ZSc7XG5cbmNvbnN0IGRlZjogR3JhcGhxbERlZiA9IG1lcmdlKFNjaGVtYSwgQ29yZSk7XG5cbmNvbnN0IFJvb3RRdWVyeSA9IFtcbiAgYFxuICAjICMgUmVhY3QtU3RhcnRlci1LaXQgUXVlcnlpbmcgQVBJXG4gICMgIyMjIFRoaXMgR3JhcGhRTCBzY2hlbWEgd2FzIGJ1aWx0IHdpdGggW0Fwb2xsbyBHcmFwaFFMLVRvb2xzXShodHRwczovL2dpdGh1Yi5jb20vYXBvbGxvZ3JhcGhxbC9ncmFwaHFsLXRvb2xzKVxuICAjIF9CdWlsZCwgbW9jaywgYW5kIHN0aXRjaCBhIEdyYXBoUUwgc2NoZW1hIHVzaW5nIHRoZSBzY2hlbWEgbGFuZ3VhZ2VfXG4gICNcbiAgIyAqKltTY2hlbWEgTGFuZ3VhZ2UgQ2hlZXQgU2hlZXRdKGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zb2drby9ncmFwaHFsLXNob3J0aGFuZC1ub3RhdGlvbi1jaGVhdC1zaGVldC9tYXN0ZXIvZ3JhcGhxbC1zaG9ydGhhbmQtbm90YXRpb24tY2hlYXQtc2hlZXQucG5nKSoqXG4gICNcbiAgIyAxLiBVc2UgdGhlIEdyYXBoUUwgc2NoZW1hIGxhbmd1YWdlIHRvIFtnZW5lcmF0ZSBhIHNjaGVtYV0oaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9ncmFwaHFsLXRvb2xzL2dlbmVyYXRlLXNjaGVtYS5odG1sKSB3aXRoIGZ1bGwgc3VwcG9ydCBmb3IgcmVzb2x2ZXJzLCBpbnRlcmZhY2VzLCB1bmlvbnMsIGFuZCBjdXN0b20gc2NhbGFycy4gVGhlIHNjaGVtYSBwcm9kdWNlZCBpcyBjb21wbGV0ZWx5IGNvbXBhdGlibGUgd2l0aCBbR3JhcGhRTC5qc10oaHR0cHM6Ly9naXRodWIuY29tL2dyYXBocWwvZ3JhcGhxbC1qcykuXG4gICMgMi4gW01vY2sgeW91ciBHcmFwaFFMIEFQSV0oaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9ncmFwaHFsLXRvb2xzL21vY2tpbmcuaHRtbCkgd2l0aCBmaW5lLWdyYWluZWQgcGVyLXR5cGUgbW9ja2luZ1xuICAjIDMuIEF1dG9tYXRpY2FsbHkgW3N0aXRjaCBtdWx0aXBsZSBzY2hlbWFzIHRvZ2V0aGVyXShodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL2dyYXBocWwtdG9vbHMvc2NoZW1hLXN0aXRjaGluZy5odG1sKSBpbnRvIG9uZSBsYXJnZXIgQVBJXG4gIHR5cGUgUm9vdFF1ZXJ5IHtcbiAgICAke2RlZi5xdWVyaWVzLnRvU3RyaW5nKCl9XG4gIH1cbiAgYCxcbl07XG5cbmNvbnN0IE11dGF0aW9uID0gW1xuICBgXG4gICMgIyBSZWFjdC1TdGFydGVyLUtpdCBNdXRhdGluZyBBUElcbiAgIyAjIyMgVGhpcyBHcmFwaFFMIHNjaGVtYSB3YXMgYnVpbHQgd2l0aCBbQXBvbGxvIEdyYXBoUUwtVG9vbHNdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcG9sbG9ncmFwaHFsL2dyYXBocWwtdG9vbHMpXG4gICMgX0J1aWxkLCBtb2NrLCBhbmQgc3RpdGNoIGEgR3JhcGhRTCBzY2hlbWEgdXNpbmcgdGhlIHNjaGVtYSBsYW5ndWFnZV9cbiAgI1xuICAjICoqW1NjaGVtYSBMYW5ndWFnZSBDaGVldCBTaGVldF0oaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NvZ2tvL2dyYXBocWwtc2hvcnRoYW5kLW5vdGF0aW9uLWNoZWF0LXNoZWV0L21hc3Rlci9ncmFwaHFsLXNob3J0aGFuZC1ub3RhdGlvbi1jaGVhdC1zaGVldC5wbmcpKipcbiAgI1xuICAjIDEuIFVzZSB0aGUgR3JhcGhRTCBzY2hlbWEgbGFuZ3VhZ2UgdG8gW2dlbmVyYXRlIGEgc2NoZW1hXShodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL2dyYXBocWwtdG9vbHMvZ2VuZXJhdGUtc2NoZW1hLmh0bWwpIHdpdGggZnVsbCBzdXBwb3J0IGZvciByZXNvbHZlcnMsIGludGVyZmFjZXMsIHVuaW9ucywgYW5kIGN1c3RvbSBzY2FsYXJzLiBUaGUgc2NoZW1hIHByb2R1Y2VkIGlzIGNvbXBsZXRlbHkgY29tcGF0aWJsZSB3aXRoIFtHcmFwaFFMLmpzXShodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhxbC9ncmFwaHFsLWpzKS5cbiAgIyAyLiBbTW9jayB5b3VyIEdyYXBoUUwgQVBJXShodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL2dyYXBocWwtdG9vbHMvbW9ja2luZy5odG1sKSB3aXRoIGZpbmUtZ3JhaW5lZCBwZXItdHlwZSBtb2NraW5nXG4gICMgMy4gQXV0b21hdGljYWxseSBbc3RpdGNoIG11bHRpcGxlIHNjaGVtYXMgdG9nZXRoZXJdKGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvZ3JhcGhxbC10b29scy9zY2hlbWEtc3RpdGNoaW5nLmh0bWwpIGludG8gb25lIGxhcmdlciBBUElcbiAgdHlwZSBNdXRhdGlvbiB7XG4gICAgJHtkZWYubXV0YXRpb25zLnRvU3RyaW5nKCl9XG4gIH1cbiAgYCxcbl07XG5cbi8vIFRoaXMgYWRkcyBhIGR1bW15IHN1YnNjcmlwdGlvbiBpbiBjYXNlIG5vIHN1YnNjcmlwdGlvbiBpcyBkZWZpbmVkLlxuLy8gQXMgdGhlIHNlcnZlciBjYW5ub3Qgc3RhcnQgd2l0aG91dCB0aGUgU3Vic2NyaXB0aW9uIHR5cGUgZGVmaW5lZCBhbmRcbi8vIGVtcHR5IHR5cGVzIGFyZSBhcHBhcmVudGx5IG5vdCBhbGxvd2VkIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL2dyYXBocWwvZ3JhcGhxbC1qcy9pc3N1ZXMvOTM3KS5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgU3Vic2NyaXB0aW9uID0gZGVmLnN1YnNjcmlwdGlvbnMubGVuZ3RoID4gMCA/IFtcbiAgYFxuICB0eXBlIFN1YnNjcmlwdGlvbiB7XG4gICAgJHtkZWYuc3Vic2NyaXB0aW9ucy50b1N0cmluZygpfVxuICB9XG4gIGAsXG5dIDogW1xuICBgXG4gIHR5cGUgU3Vic2NyaXB0aW9uIHtcbiAgICBfIDogQm9vbGVhblxuICB9XG4gIGAsXG5dO1xuXG5jb25zdCBTY2hlbWFEZWZpbml0aW9uID0gW1xuICBgXG4gIHNjaGVtYSB7XG4gICAgcXVlcnk6IFJvb3RRdWVyeVxuICAgIG11dGF0aW9uOiBNdXRhdGlvblxuICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gIH1cbiAgYCxcbl07XG5cbmNvbnN0IHNjaGVtYSA9IFtcbiAgYFxuICBkaXJlY3RpdmUgQGF1dGggb24gRklFTERfREVGSU5JVElPTlxuICBgLFxuICAuLi5TY2hlbWFEZWZpbml0aW9uLFxuICAuLi5Sb290UXVlcnksXG4gIC4uLk11dGF0aW9uLFxuICAuLi5TdWJzY3JpcHRpb24sXG5cbiAgLi4uZGVmLnNjaGVtYSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZURlZnM6IHNjaGVtYSxcbiAgcmVzb2x2ZXJzOiBkZWYucmVzb2x2ZXJzKG5ldyBQdWJTdWIoKSksXG4gIHNjaGVtYURpcmVjdGl2ZXM6IHtcbiAgICBhdXRoOiBBdXRoRGlyZWN0aXZlLFxuICB9LFxuICAuLi4oX19ERVZfXyA/IHsgbG9nOiAoZTogRXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZS5zdGFjaykgfSA6IHt9KSxcbn07XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgYmFzZTY0IGZyb20gJ2Jhc2U2NC1qcyc7XG5cbmltcG9ydCB7IEFwb2xsb0Vycm9yIH0gZnJvbSAnYXBvbGxvLXNlcnZlcic7XG5pbXBvcnQgdHlwZSB7IEdyYXBocWxEZWZTaGFwZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZ3JhcGhxbC9ncmFwaHFsRGVmJztcblxuaW1wb3J0IGRiLCB7IEZpbGUsIEZpbGVUcmVlLCBQcm9qZWN0IH0gZnJvbSAnLi4vLi4vbW9uZ29kYic7XG5cbmNvbnN0IGRlZjogR3JhcGhxbERlZlNoYXBlID0ge1xuICBzY2hlbWE6IFtcbiAgICBgXG4gICAgdHlwZSBQcm9qZWN0IHtcbiAgICAgIGlkOiBJRCFcbiAgICAgIG5hbWU6IFN0cmluZyFcbiAgICAgIGlzUHVibGljOiBCb29sZWFuIVxuICAgICAgZmlsZVRyZWVSb290SWQ6IElEIVxuICAgICAgZmlsZVRyZWVzOiBbRmlsZVRyZWUhXSFcbiAgICAgIGZpbGVzOiBbRmlsZSFdIVxuICAgIH1cblxuICAgIHR5cGUgRmlsZVRyZWUge1xuICAgICAgaWQ6IElEIVxuICAgICAgY29udGVudHM6IFtGaWxlVHJlZVJlY29yZCFdIVxuICAgIH1cblxuICAgIHR5cGUgRmlsZSB7XG4gICAgICBpZDogSUQhXG4gICAgICBkYXRhOiBTdHJpbmchXG4gICAgfVxuXG4gICAgdHlwZSBGaWxlVHJlZVJlY29yZCB7XG4gICAgICBuYW1lOiBTdHJpbmchXG4gICAgICB0eXBlOiBGaWxlVHJlZVJlY29yZFR5cGUhXG4gICAgICBpdGVtSWQ6IElEIVxuICAgIH1cblxuICAgIGVudW0gRmlsZVRyZWVSZWNvcmRUeXBlIHtcbiAgICAgIEZJTEVcbiAgICAgIFRSRUVcbiAgICB9XG5cbiAgICBpbnB1dCBQcm9qZWN0SW5wdXQge1xuICAgICAgaWQ6IElEXG4gICAgICBuYW1lOiBTdHJpbmchXG4gICAgICBpc1B1YmxpYzogQm9vbGVhbiFcbiAgICAgIGZpbGVUcmVlOiBGaWxlVHJlZUlucHV0IVxuICAgIH1cblxuICAgIGlucHV0IEZpbGVUcmVlSW5wdXQge1xuICAgICAgaWQ6IElEXG4gICAgICBmaWxlczogW0ZpbGVUcmVlRmlsZVJlY29yZElucHV0IV0hXG4gICAgICB0cmVlczogW0ZpbGVUcmVlVHJlZVJlY29yZElucHV0IV0hXG4gICAgfVxuXG4gICAgaW5wdXQgRmlsZVRyZWVGaWxlUmVjb3JkSW5wdXQge1xuICAgICAgaWQ6IElEXG4gICAgICBuYW1lOiBTdHJpbmchXG4gICAgICBkYXRhOiBTdHJpbmchXG4gICAgfVxuXG4gICAgaW5wdXQgRmlsZVRyZWVUcmVlUmVjb3JkSW5wdXQge1xuICAgICAgbmFtZTogU3RyaW5nIVxuICAgICAgdHJlZTogRmlsZVRyZWVJbnB1dCFcbiAgICB9XG5cbiAgICBpbnB1dCBQcm9qZWN0VXBkYXRlSW5wdXQge1xuICAgICAgbmFtZTogU3RyaW5nXG4gICAgICBpc1B1YmxpYzogQm9vbGVhblxuICAgIH1cbiAgICBgLFxuICBdLFxuICBxdWVyaWVzOiBbXG4gICAgYFxuICAgIHByb2plY3RzOiBbUHJvamVjdCFdIVxuICAgIHByb2plY3RCeUlkKGlkOiBJRCEpOiBQcm9qZWN0IVxuICAgIGAsXG4gIF0sXG4gIG11dGF0aW9uczogW1xuICAgIGBcbiAgICBjcmVhdGVQcm9qZWN0KHByb2plY3Q6IFByb2plY3RJbnB1dCEpIDogSUQhIEBhdXRoXG4gICAgZGVsZXRlUHJvamVjdEJ5SWQocHJvamVjdElkOiBJRCEpOiBJRCBAYXV0aFxuICAgIHVwZGF0ZVByb2plY3QocHJvamVjdElkOiBJRCEsIHByb2plY3Q6IFByb2plY3RVcGRhdGVJbnB1dCEpOiBJRCBAYXV0aFxuICAgIGAsXG4gIF0sXG4gIHJlc29sdmVyczogKCkgPT4gKHtcbiAgICBSb290UXVlcnk6IHtcbiAgICAgIGFzeW5jIHByb2plY3RzKF8sIF9hcmdzLCBfY29udGV4dCkge1xuICAgICAgICByZXR1cm4gLyogYXdhaXQgKi8gUHJvamVjdC5maW5kKHt9KTtcbiAgICAgIH0sXG4gICAgICBhc3luYyBwcm9qZWN0QnlJZChfLCB7IGlkIH0sIF9jb250ZXh0KSB7XG4gICAgICAgIHJldHVybiAvKiBhd2FpdCAqLyBQcm9qZWN0LmZpbmRCeUlkKGlkKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBQcm9qZWN0OiB7XG4gICAgICBmaWxlVHJlZVJvb3RJZChwYXJlbnQsIF9hcmdzLCBfY29udGV4dCkge1xuICAgICAgICByZXR1cm4gcGFyZW50LmZpbGVUcmVlUm9vdDtcbiAgICAgIH0sXG4gICAgICBhc3luYyBmaWxlVHJlZXMocGFyZW50LCBfYXJncywgX2NvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIEZpbGVUcmVlLmZpbmQoeyBwcm9qZWN0OiBwYXJlbnQuaWQgfSk7XG4gICAgICB9LFxuICAgICAgYXN5bmMgZmlsZXMocGFyZW50LCBfYXJncywgX2NvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIEZpbGUuZmluZCh7IHByb2plY3Q6IHBhcmVudC5pZCB9KTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBGaWxlOiB7XG4gICAgICBkYXRhKHBhcmVudCwgX2FyZ3MsIF9jb250ZXh0KSB7XG4gICAgICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShwYXJlbnQuZGF0YSk7XG4gICAgICB9LFxuICAgIH0sXG4gICAgRmlsZVRyZWVSZWNvcmQ6IHtcbiAgICAgIGl0ZW1JZChwYXJlbnQsIF9hcmdzLCBfY29udGV4dCkge1xuICAgICAgICByZXR1cm4gcGFyZW50LnJlZjtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdXRhdGlvbjoge1xuICAgICAgYXN5bmMgY3JlYXRlUHJvamVjdChfLCB7IHByb2plY3Q6IHByb2plY3RJbnB1dCB9LCBfY29udGV4dCkge1xuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZGIuc3RhcnRTZXNzaW9uKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgW3Byb2plY3RdID0gYXdhaXQgUHJvamVjdC5jcmVhdGUoXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBwcm9qZWN0SW5wdXQubmFtZSxcbiAgICAgICAgICAgICAgICBpc1B1YmxpYzogcHJvamVjdElucHV0LmlzUHVibGljLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHsgc2Vzc2lvbiB9LFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBhc3luYyBmdW5jdGlvbiBzYXZlRmlsZVRyZWUodHJlZSkge1xuICAgICAgICAgICAgY29uc3Qgc2F2ZWRGaWxlUHJvbWlzZXMgPSB0cmVlLmZpbGVzLm1hcCgoZmlsZSkgPT5cbiAgICAgICAgICAgICAgRmlsZS5jcmVhdGUoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiBwcm9qZWN0LmlkLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBCdWZmZXIuZnJvbShiYXNlNjQudG9CeXRlQXJyYXkoZmlsZS5kYXRhKSksXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgeyBzZXNzaW9uIH0sXG4gICAgICAgICAgICAgICkudGhlbigoW3NhdmVkRmlsZV0pID0+ICh7XG4gICAgICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdGSUxFJyxcbiAgICAgICAgICAgICAgICByZWY6IHNhdmVkRmlsZS5pZCxcbiAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3Qgc2F2ZWRUcmVlUHJvbWlzZXMgPSB0cmVlLnRyZWVzLm1hcCgoY2hpbGRUcmVlKSA9PlxuICAgICAgICAgICAgICBzYXZlRmlsZVRyZWUoY2hpbGRUcmVlLnRyZWUpLnRoZW4oKHNhdmVkVHJlZSkgPT4gKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBjaGlsZFRyZWUubmFtZSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnVFJFRScsXG4gICAgICAgICAgICAgICAgcmVmOiBzYXZlZFRyZWUuaWQsXG4gICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRzID0gYXdhaXQgUHJvbWlzZS5hbGwoWy4uLnNhdmVkRmlsZVByb21pc2VzLCAuLi5zYXZlZFRyZWVQcm9taXNlc10pO1xuXG4gICAgICAgICAgICBjb25zdCBbZmlsZVRyZWVdID0gYXdhaXQgRmlsZVRyZWUuY3JlYXRlKFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcHJvamVjdDogcHJvamVjdC5pZCxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnRzLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHsgc2Vzc2lvbiB9LFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZpbGVUcmVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHJvb3QgPSBhd2FpdCBzYXZlRmlsZVRyZWUocHJvamVjdElucHV0LmZpbGVUcmVlKTtcbiAgICAgICAgICBwcm9qZWN0LmZpbGVUcmVlUm9vdCA9IHJvb3QuaWQ7XG4gICAgICAgICAgYXdhaXQgcHJvamVjdC5zYXZlKCk7XG4gICAgICAgICAgcmV0dXJuIHByb2plY3QuaWQ7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgYXdhaXQgc2Vzc2lvbi5lbmRTZXNzaW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhc3luYyBkZWxldGVQcm9qZWN0QnlJZChfcGFyZW50LCB7IHByb2plY3RJZCB9KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgZGVsZXRlZCA9IGF3YWl0IFByb2plY3QuZmluZEJ5SWRBbmREZWxldGUoeyBfaWQ6IHByb2plY3RJZCB9KTtcbiAgICAgICAgICBpZiAoZGVsZXRlZD8uaWQpIHtcbiAgICAgICAgICAgIGF3YWl0IEZpbGVUcmVlLmRlbGV0ZU1hbnkoeyBwcm9qZWN0OiBwcm9qZWN0SWQgfSk7XG4gICAgICAgICAgICBhd2FpdCBGaWxlLmRlbGV0ZU1hbnkoeyBwcm9qZWN0OiBwcm9qZWN0SWQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkZWxldGVkPy5pZDtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgIHRocm93IG5ldyBBcG9sbG9FcnJvcignRmFpbGVkIHRvIGRlbGV0ZSBwcm9qZWN0LicpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXN5bmMgdXBkYXRlUHJvamVjdChfcGFyZW50LCB7IHByb2plY3RJZCwgcHJvamVjdCB9KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgUHJvamVjdC51cGRhdGUoeyBfaWQ6IHByb2plY3RJZCB9LCB7IC4uLnByb2plY3QgfSk7XG4gICAgICAgICAgaWYgKHJlcy5uID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHByb2plY3RJZDtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgIHRocm93IG5ldyBBcG9sbG9FcnJvcignRmFpbGVkIHRvIHVwZGF0ZSBwcm9qZWN0LicpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmO1xuIiwiLy8gQGZsb3dcbmltcG9ydCB7IEFwb2xsb0Vycm9yLCBBdXRoZW50aWNhdGlvbkVycm9yIH0gZnJvbSAnYXBvbGxvLXNlcnZlcic7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcblxuaW1wb3J0IHR5cGUgeyBHcmFwaHFsRGVmU2hhcGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2dyYXBocWwvZ3JhcGhxbERlZic7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9tb25nb2RiJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29uZmlnJztcblxuY29uc3QgZGVmOiBHcmFwaHFsRGVmU2hhcGUgPSB7XG4gIHNjaGVtYTogW1xuICAgIGBcbiAgICB0eXBlIFVzZXJMb2dpbiB7XG4gICAgICBpZDogSUQhXG4gICAgICB1c2VybmFtZTogU3RyaW5nIVxuICAgICAgdG9rZW46IFN0cmluZyFcbiAgICB9XG5cbiAgICB0eXBlIFVzZXIge1xuICAgICAgaWQ6IElEIVxuICAgICAgdXNlcm5hbWU6IFN0cmluZyFcbiAgICB9XG4gICAgYCxcbiAgXSxcbiAgcXVlcmllczogW1xuICAgIGBcbiAgICB1c2VyOiBVc2VyISBAYXV0aFxuICAgIGAsXG4gIF0sXG4gIG11dGF0aW9uczogW1xuICAgIGBcbiAgICBsb2dpbih1c2VybmFtZTogU3RyaW5nISwgcGFzc3dvcmQ6IFN0cmluZyEpOiBVc2VyTG9naW4hXG4gICAgYCxcbiAgXSxcbiAgcmVzb2x2ZXJzOiAoKSA9PiAoe1xuICAgIFJvb3RRdWVyeToge1xuICAgICAgYXN5bmMgdXNlcihfLCBfYXJncywgY29udGV4dCkge1xuICAgICAgICBsZXQgdXNlcjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZChjb250ZXh0LnVzZXIudXNlcklkKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgdGhyb3cgbmV3IEFwb2xsb0Vycm9yKCdGYWlsZWQgdG8gZmV0Y2ggdXNlci4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgIH0sXG4gICAgTXV0YXRpb246IHtcbiAgICAgIGFzeW5jIGxvZ2luKF8sIHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0sIF9jb250ZXh0KSB7XG4gICAgICAgIGxldCB1c2VyO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyB1c2VybmFtZSB9KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgdGhyb3cgbmV3IEFwb2xsb0Vycm9yKCdGYWlsZWQgdG8gcHJvY2VzcyBsb2dpbi4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgQXV0aGVudGljYXRpb25FcnJvcignSW52YWxpZCBsb2dpbiBjcmVkZW50aWFscy4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkTWF0Y2ggPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgICAgICBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZCwgKGVyciwgbWF0Y2gpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgcmVqKGVycik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXMobWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHBhc3N3b3JkTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHsgdXNlcklkOiB1c2VyLmlkIH0sIGNvbmZpZy5hdXRoLmp3dC5zZWNyZXQsIHtcbiAgICAgICAgICAgIGV4cGlyZXNJbjogY29uZmlnLmF1dGgudG9rZW5FeHBpcmVzSW4sXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBUT0RPOiBhZGQgZXhwaXJ5IGRhdGVcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICAgIHRva2VuLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEF1dGhlbnRpY2F0aW9uRXJyb3IoJ0ludmFsaWQgbG9naW4gY3JlZGVudGlhbHMuJyk7XG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmO1xuIiwiLy8gQGZsb3dcblxuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2dyYXBocWwvZ3JhcGhxbERlZic7XG5cbmltcG9ydCBVc2VyIGZyb20gJy4vVXNlcic7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBtZXJnZShVc2VyLCBQcm9qZWN0KTtcbiIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBjb29raWVQYXJzZXIgZnJvbSAnY29va2llLXBhcnNlcic7XG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQgZXhwcmVzc0p3dCwgeyBVbmF1dGhvcml6ZWRFcnJvciBhcyBKd3Q0MDFFcnJvciB9IGZyb20gJ2V4cHJlc3Mtand0JztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcmV0dHlFcnJvciBmcm9tICdwcmV0dHktZXJyb3InO1xuaW1wb3J0IHsgQXBvbGxvU2VydmVyLCBtYWtlRXhlY3V0YWJsZVNjaGVtYSB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcyc7XG5pbXBvcnQgeyBnZXREYXRhRnJvbVRyZWUgfSBmcm9tICdAYXBvbGxvL3JlYWN0LXNzcic7XG5pbXBvcnQgaHR0cCBmcm9tICdodHRwJztcblxuaW1wb3J0IGNyZWF0ZUFwb2xsb0NsaWVudCBmcm9tICcuLi9jb3JlL2NyZWF0ZUFwb2xsb0NsaWVudCc7XG5pbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwJztcbmltcG9ydCB7IEVycm9yUGFnZVdpdGhvdXRTdHlsZSB9IGZyb20gJy4uL3JvdXRlcy9lcnJvci9FcnJvclBhZ2UnO1xuaW1wb3J0IGVycm9yUGFnZVN0eWxlIGZyb20gJy4uL3JvdXRlcy9lcnJvci9FcnJvclBhZ2UuY3NzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi4vY29yZS9yb3V0ZXInO1xuaW1wb3J0IHNjaGVtYSBmcm9tICcuL2dyYXBocWwvc2NoZW1hJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IGNyZWF0ZUluaXRpYWxTdGF0ZSBmcm9tICcuLi9jb3JlL2NyZWF0ZUluaXRpYWxTdGF0ZSc7XG5pbXBvcnQgcmVuZGVySHRtbCBmcm9tICcuL3JlbmRlckh0bWwnO1xuaW1wb3J0IHJlbmRlckV4ZWN1dG9yIGZyb20gJy4vcmVuZGVyRXhlY3V0b3InO1xuaW1wb3J0IHsgSXNvbW9ycGhpY1N0eWxlTG9hZGVyLCBNYXRlcmlhbFN0eWxlTG9hZGVyLCBsb2FkU2NyaXB0cyB9IGZyb20gJy4vbG9hZGVycyc7XG5cbnByb2Nlc3Mub24oJ3VuaGFuZGxlZFJlamVjdGlvbicsIChyZWFzb24sIHApID0+IHtcbiAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIFJlamVjdGlvbiBhdDonLCBwLCAncmVhc29uOicsIHJlYXNvbik7XG4gIC8vIHNlbmQgZW50aXJlIGFwcCBkb3duLiBQcm9jZXNzIG1hbmFnZXIgd2lsbCByZXN0YXJ0IGl0XG4gIHByb2Nlc3MuZXhpdCgxKTtcbn0pO1xuXG4vL1xuLy8gVGVsbCBhbnkgQ1NTIHRvb2xpbmcgKHN1Y2ggYXMgTWF0ZXJpYWwgVUkpIHRvIHVzZSBhbGwgdmVuZG9yIHByZWZpeGVzIGlmIHRoZVxuLy8gdXNlciBhZ2VudCBpcyBub3Qga25vd24uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZ2xvYmFsLm5hdmlnYXRvciA9IGdsb2JhbC5uYXZpZ2F0b3IgPz8ge307XG5nbG9iYWwubmF2aWdhdG9yLnVzZXJBZ2VudCA9IGdsb2JhbC5uYXZpZ2F0b3IudXNlckFnZW50ID8/ICdhbGwnO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmxldCB3cyA9IG51bGw7XG5pZiAoIW1vZHVsZS5ob3QpIHtcbiAgd3MgPSBodHRwLmNyZWF0ZVNlcnZlcihhcHApO1xufVxuXG4vL1xuLy8gSWYgeW91IGFyZSB1c2luZyBwcm94eSBmcm9tIGV4dGVybmFsIG1hY2hpbmUsIHlvdSBjYW4gc2V0IFRSVVNUX1BST1hZIGVudlxuLy8gRGVmYXVsdCBpcyB0byB0cnVzdCBwcm94eSBoZWFkZXJzIG9ubHkgZnJvbSBsb29wYmFjayBpbnRlcmZhY2UuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuYXBwLnNldCgndHJ1c3QgcHJveHknLCBjb25maWcudHJ1c3RQcm94eSk7XG5cbi8vIGtlZXAgYSBsaXN0IG9mIGF1dGgtcmVsZXZhbnQgbWlkZGxld2FyZXMgdG8gZGVjb2RlIGNvb2tpZXMgaW4gdGhlIFdTIGhhbmRsZXJcbmNvbnN0IGF1dGhNaWRkbGV3YXJlcyA9IFtdO1xuXG5mdW5jdGlvbiBhcHBVc2VBdXRoKG13KSB7XG4gIGF1dGhNaWRkbGV3YXJlcy5wdXNoKG13KTtcbiAgYXBwLnVzZShtdyk7XG59XG5cbi8vXG4vLyBSZWdpc3RlciBOb2RlLmpzIG1pZGRsZXdhcmVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdwdWJsaWMnKSkpO1xuYXBwVXNlQXV0aChjb29raWVQYXJzZXIoKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuXG4vL1xuLy8gQXV0aGVudGljYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5hcHBVc2VBdXRoKFxuICBleHByZXNzSnd0KHtcbiAgICBzZWNyZXQ6IGNvbmZpZy5hdXRoLmp3dC5zZWNyZXQsXG4gICAgY3JlZGVudGlhbHNSZXF1aXJlZDogZmFsc2UsXG4gICAgZ2V0VG9rZW46IChyZXEpID0+IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24sXG4gIH0pLFxuKTtcbi8vIEVycm9yIGhhbmRsZXIgZm9yIGV4cHJlc3Mtand0XG5hcHAudXNlKChlcnIsIHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGlmIChlcnIgaW5zdGFuY2VvZiBKd3Q0MDFFcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tleHByZXNzLWp3dC1lcnJvcl0nLCByZXEuY29va2llcy5pZF90b2tlbik7XG4gICAgLy8gYGNsZWFyQ29va2llYCwgb3RoZXJ3aXNlIHVzZXIgY2FuJ3QgdXNlIHdlYi1hcHAgdW50aWwgY29va2llIGV4cGlyZXNcbiAgICByZXMuY2xlYXJDb29raWUoJ2lkX3Rva2VuJyk7XG4gIH1cbiAgbmV4dChlcnIpO1xufSk7XG5cbi8vXG4vLyBSZWdpc3RlciBBUEkgbWlkZGxld2FyZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmFwaHFsL2V4cHJlc3MtZ3JhcGhxbCNvcHRpb25zXG5cbmNvbnN0IGFwb2xsb1NlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoe1xuICAuLi5zY2hlbWEsXG4gIHN1YnNjcmlwdGlvbnM6IHtcbiAgICBwYXRoOiAnL3N1YnNjcmlwdGlvbnMnLFxuICAgIG9uQ29ubmVjdDogYXN5bmMgKGNvbm5lY3Rpb25QYXJhbXMsIHdlYlNvY2tldCkgPT4ge1xuICAgICAgY29uc3QgYXBwbHlNaWRkbGV3YXJlID0gKG1pZGRsZXdhcmUsIHJlcSkgPT5cbiAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IG1pZGRsZXdhcmUocmVxLCBudWxsLCByZXNvbHZlKSk7XG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgZm9yIChjb25zdCBtaWRkbGV3YXJlIG9mIGF1dGhNaWRkbGV3YXJlcykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuICAgICAgICBhd2FpdCBhcHBseU1pZGRsZXdhcmUobWlkZGxld2FyZSwgd2ViU29ja2V0LnVwZ3JhZGVSZXEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB1c2VyOiB3ZWJTb2NrZXQudXBncmFkZVJlcS51c2VyLFxuICAgICAgICAuLi5jb25uZWN0aW9uUGFyYW1zLFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuICB1cGxvYWRzOiBmYWxzZSxcbiAgaW50cm9zcGVjdGlvbjogX19ERVZfXyxcbiAgcGxheWdyb3VuZDogX19ERVZfXyAmJiB7XG4gICAgc3Vic2NyaXB0aW9uRW5kcG9pbnQ6ICcvc3Vic2NyaXB0aW9ucycsXG4gIH0sXG4gIGRlYnVnOiBfX0RFVl9fLFxuICBjb250ZXh0OiAoeyByZXEgfSkgPT4gKHtcbiAgICB1c2VyOiByZXEudXNlcixcbiAgfSksXG59KTtcbmFwb2xsb1NlcnZlci5hcHBseU1pZGRsZXdhcmUoeyBhcHAgfSk7XG5cbmlmICh3cyAhPT0gbnVsbCkge1xuICAvLyBUT0RPIG5vIHN1YnNjcmlwdGlvbnMgd2hlbiB1c2luZyBgeWFybiBzdGFydGBcbiAgYXBvbGxvU2VydmVyLmluc3RhbGxTdWJzY3JpcHRpb25IYW5kbGVycyh3cyk7XG59XG5cbi8vXG4vLyBSZWdpc3RlciBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgbWlkZGxld2FyZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmFwcC5nZXQoJy9leGVjdXRvcicsIGFzeW5jIChfcmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBodG1sID0gcmVuZGVyRXhlY3V0b3IoKTtcbiAgICByZXMuc3RhdHVzKDIwMCk7XG4gICAgcmVzLnNlbmQoaHRtbCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIG5leHQoZXJyKTtcbiAgfVxufSk7XG5cbmFwcC5nZXQoJy9hcHAtc2hlbGwuaHRtbCcsIGFzeW5jIChfcmVxLCByZXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBodG1sID0gcmVuZGVySHRtbChudWxsLCB7XG4gICAgICBzdHlsZXM6IFtdLFxuICAgICAgc2NyaXB0czogbG9hZFNjcmlwdHMoJ2NsaWVudCcpLFxuICAgIH0pO1xuICAgIHJlcy5zdGF0dXMoMjAwKTtcbiAgICByZXMuc2VuZChodG1sKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbmV4dChlcnIpO1xuICB9XG59KTtcblxuYXBwLmdldCgnKicsIGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGlzb21vcnBoaWNTdHlsZUxvYWRlciA9IG5ldyBJc29tb3JwaGljU3R5bGVMb2FkZXIoKTtcbiAgICBjb25zdCBtYXRlcmlhbFN0eWxlTG9hZGVyID0gbmV3IE1hdGVyaWFsU3R5bGVMb2FkZXIoKTtcblxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IGNyZWF0ZUluaXRpYWxTdGF0ZSh7XG4gICAgICB1c2VyOiByZXEudXNlciA/PyBudWxsLFxuICAgIH0pO1xuXG4gICAgY29uc3QgYXBvbGxvQ2xpZW50ID0gY3JlYXRlQXBvbGxvQ2xpZW50KFxuICAgICAge1xuICAgICAgICBzY2hlbWE6IG1ha2VFeGVjdXRhYmxlU2NoZW1hKHNjaGVtYSksXG4gICAgICAgIC8vIFRoaXMgaXMgYSBjb250ZXh0IGNvbnN1bWVkIGluIEdyYXBoUUwgUmVzb2x2ZXJzXG4gICAgICAgIGNvbnRleHQ6IHsgcmVxIH0sXG4gICAgICB9LFxuICAgICAgaW5pdGlhbFN0YXRlLFxuICAgICk7XG5cbiAgICAvLyBHbG9iYWwgKGNvbnRleHQpIHZhcmlhYmxlcyB0aGF0IGNhbiBiZSBlYXNpbHkgYWNjZXNzZWQgZnJvbSBhbnkgUmVhY3QgY29tcG9uZW50XG4gICAgLy8gaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy9jb250ZXh0Lmh0bWxcbiAgICBjb25zdCBjb250ZXh0ID0ge1xuICAgICAgLy8gVGhlIHR3aW5zIGJlbG93IGFyZSB3aWxkLCBiZSBjYXJlZnVsIVxuICAgICAgcGF0aG5hbWU6IHJlcS5wYXRoLFxuICAgICAgcXVlcnk6IHJlcS5xdWVyeSxcbiAgICAgIC8vIEFwb2xsbyBDbGllbnQgZm9yIHVzZSB3aXRoIHJlYWN0LWFwb2xsb1xuICAgICAgY2xpZW50OiBhcG9sbG9DbGllbnQsXG4gICAgICAvLyBUT0RPIGxvY2FsZXNcbiAgICAgIGxvY2FsZXM6IFsnZW4nXSxcbiAgICB9O1xuXG4gICAgY29uc3QgaW5zZXJ0Q3NzID0gaXNvbW9ycGhpY1N0eWxlTG9hZGVyLmluc2VydENzcy5iaW5kKGlzb21vcnBoaWNTdHlsZUxvYWRlcik7XG5cbiAgICBjb25zdCByb3V0ZSA9IGF3YWl0IHJvdXRlci5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgaWYgKHJvdXRlLnJlZGlyZWN0KSB7XG4gICAgICByZXMucmVkaXJlY3Qocm91dGUuc3RhdHVzID8/IDMwMiwgcm91dGUucmVkaXJlY3QpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJvb3RDb21wb25lbnQgPSBtYXRlcmlhbFN0eWxlTG9hZGVyLndyYXAoXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LW5vLWJpbmRcbiAgICAgIDxBcHAgY29udGV4dD17Y29udGV4dH0gaW5zZXJ0Q3NzPXtpbnNlcnRDc3N9PlxuICAgICAgICB7cm91dGUuY29tcG9uZW50fVxuICAgICAgPC9BcHA+LFxuICAgICk7XG4gICAgYXdhaXQgZ2V0RGF0YUZyb21UcmVlKHJvb3RDb21wb25lbnQpO1xuXG4gICAgY29uc3Qgc3R5bGVzID0gW1xuICAgICAgeyBpZDogJ2NzcycsIGNzc1RleHQ6IGlzb21vcnBoaWNTdHlsZUxvYWRlci5jb2xsZWN0KCkgfSxcbiAgICAgIC8vIFRPRE8gbmVlZCB0byByZW1vdmUgdGhpcyBvbiB0aGUgY2xpZW50PyBodHRwczovL21hdGVyaWFsLXVpLmNvbS9ndWlkZXMvc2VydmVyLXJlbmRlcmluZy8jdGhlLWNsaWVudC1zaWRlXG4gICAgICB7IGlkOiAnbWF0ZXJpYWwtY3NzJywgY3NzVGV4dDogbWF0ZXJpYWxTdHlsZUxvYWRlci5jb2xsZWN0KCkgfSxcbiAgICBdO1xuICAgIGNvbnN0IHNjcmlwdHMgPSBsb2FkU2NyaXB0cyhcbiAgICAgICdjbGllbnQnLFxuICAgICAgLi4uKHJvdXRlLmNodW5rID8gW3JvdXRlLmNodW5rXSA6IFtdKSxcbiAgICAgIC4uLihyb3V0ZS5jaHVua3MgPyByb3V0ZS5jaHVua3MgOiBbXSksXG4gICAgKTtcblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAuLi5yb3V0ZSxcbiAgICAgIHN0eWxlcyxcbiAgICAgIHNjcmlwdHMsXG4gICAgICBhcHA6IHtcbiAgICAgICAgYXBpVXJsOiBjb25maWcuYXBpLmNsaWVudFVybCxcbiAgICAgICAgLy8gQ2FjaGUgZm9yIGNsaWVudC1zaWRlIGFwb2xsb0NsaWVudFxuICAgICAgICBjYWNoZTogY29udGV4dC5jbGllbnQuZXh0cmFjdCgpLFxuICAgICAgICAvLyBJbml0aWFsIHN0YXRlIGZvciBjbGllbnQtc2lkZSBzdGF0ZUxpbmtcbiAgICAgICAgaW5pdGlhbFN0YXRlLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgY29uc3QgaHRtbCA9IHJlbmRlckh0bWwocm9vdENvbXBvbmVudCwgZGF0YSk7XG4gICAgcmVzLnN0YXR1cyhyb3V0ZS5zdGF0dXMgPz8gMjAwKTtcbiAgICByZXMuc2VuZChodG1sKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbmV4dChlcnIpO1xuICB9XG59KTtcblxuLy9cbi8vIEVycm9yIGhhbmRsaW5nXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY29uc3QgcGUgPSBuZXcgUHJldHR5RXJyb3IoKTtcbnBlLnNraXBOb2RlRmlsZXMoKTtcbnBlLnNraXBQYWNrYWdlKCdleHByZXNzJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuYXBwLnVzZSgoZXJyLCByZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zb2xlLmVycm9yKHBlLnJlbmRlcihlcnIpKTtcblxuICBjb25zdCByb290Q29tcG9uZW50ID0gPEVycm9yUGFnZVdpdGhvdXRTdHlsZSBlcnJvcj17ZXJyfSAvPjtcblxuICBjb25zdCBzdHlsZXMgPSBbXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gICAgeyBpZDogJ2NzcycsIGNzc1RleHQ6IGVycm9yUGFnZVN0eWxlLl9nZXRDc3MoKSB9LFxuICBdO1xuXG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgdGl0bGU6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InLFxuICAgIGRlc2NyaXB0aW9uOiBlcnIubWVzc2FnZSxcbiAgICBzdHlsZXMsXG4gIH07XG5cbiAgY29uc3QgaHRtbCA9IHJlbmRlckh0bWwocm9vdENvbXBvbmVudCwgZGF0YSk7XG4gIHJlcy5zdGF0dXMoZXJyLnN0YXR1cyA/PyA1MDApO1xuICByZXMuc2VuZChodG1sKTtcbn0pO1xuXG4vL1xuLy8gTGF1bmNoIHRoZSBzZXJ2ZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmlmICh3cyAhPT0gbnVsbCkge1xuICB3cy5saXN0ZW4oY29uZmlnLnBvcnQsICgpID0+IHtcbiAgICBjb25zb2xlLmluZm8oYFRoZSBzZXJ2ZXIgaXMgcnVubmluZyBhdCBodHRwOi8vbG9jYWxob3N0OiR7Y29uZmlnLnBvcnR9L2ApO1xuICB9KTtcbn1cblxuLy9cbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pZiAobW9kdWxlLmhvdCkge1xuICBhcHAuaG90ID0gbW9kdWxlLmhvdDtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoJy4uL2NvcmUvcm91dGVyJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcbiIsImltcG9ydCB7IFNlcnZlclN0eWxlU2hlZXRzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5cbi8vIGltcG9ydCBhc3NldHMgZnJvbSAnLi9hc3NldC1tYW5pZmVzdC5qc29uJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbXBvcnQvbm8tdW5yZXNvbHZlZFxuaW1wb3J0IGNodW5rcyBmcm9tICcuL2NodW5rLW1hbmlmZXN0Lmpzb24nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGltcG9ydC9uby11bnJlc29sdmVkXG5cbmV4cG9ydCBjbGFzcyBJc29tb3JwaGljU3R5bGVMb2FkZXIge1xuICBjc3MgPSBuZXcgU2V0KCk7XG5cbiAgLy8gRW5hYmxlcyBjcml0aWNhbCBwYXRoIENTUyByZW5kZXJpbmdcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2tyaWFzb2Z0L2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyXG4gIGluc2VydENzcyguLi5zdHlsZXMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICBzdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IHRoaXMuY3NzLmFkZChzdHlsZS5fZ2V0Q3NzKCkpKTtcbiAgfVxuXG4gIGNvbGxlY3QoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmNzc10uam9pbignJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTY3JpcHRzKC4uLmNobmtzKSB7XG4gIGNvbnN0IHNjcmlwdHMgPSBuZXcgU2V0KCk7XG5cbiAgY2hua3MuZm9yRWFjaCgoY2h1bmspID0+IHtcbiAgICBpZiAoY2h1bmtzW2NodW5rXSkge1xuICAgICAgLy8gYWRkIGFsbCBhc3NldHMgYmVsb25naW5nIHRvIHRoYXQgY2h1bmtcbiAgICAgIGNodW5rc1tjaHVua10uZm9yRWFjaCgoYXNzZXQpID0+IHNjcmlwdHMuYWRkKGFzc2V0KSk7XG4gICAgfSBlbHNlIGlmIChfX0RFVl9fKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENodW5rIHdpdGggbmFtZSAnJHtjaHVua30nIGNhbm5vdCBiZSBmb3VuZGApO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFsuLi5zY3JpcHRzXTtcbn1cblxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsU3R5bGVMb2FkZXIge1xuICBzc3MgPSBuZXcgU2VydmVyU3R5bGVTaGVldHMoKTtcblxuICB3cmFwKGNvbXBvbmVudCkge1xuICAgIHJldHVybiB0aGlzLnNzcy5jb2xsZWN0KGNvbXBvbmVudCk7XG4gIH1cblxuICBjb2xsZWN0KCkge1xuICAgIHJldHVybiB0aGlzLnNzcy50b1N0cmluZygpO1xuICB9XG59XG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuXG5tb25nb29zZVxuICAuY29ubmVjdChjb25maWcubW9uZ29kYlVybCwge1xuICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcbiAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcbiAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gIH0pXG4gIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKCdNb25nb0RCIGluaXRpYWwgY29ubmVjdGlvbiBmYWlsZWQnLCBlcnJvcik7XG4gIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5jb25uZWN0aW9uO1xuIiwiaW1wb3J0IGRiIGZyb20gJy4vZGInO1xuXG5pbXBvcnQgKiBhcyBVc2VyU2NoZW1hIGZyb20gJy4vc2NoZW1hL1VzZXInO1xuaW1wb3J0ICogYXMgUHJvamVjdFNjaGVtYSBmcm9tICcuL3NjaGVtYS9Qcm9qZWN0JztcblxuZXhwb3J0IGNvbnN0IFVzZXIgPSBVc2VyU2NoZW1hLmNyZWF0ZU1vZGVsKGRiKTtcbmV4cG9ydCBjb25zdCBQcm9qZWN0ID0gUHJvamVjdFNjaGVtYS5jcmVhdGVQcm9qZWN0TW9kZWwoZGIpO1xuZXhwb3J0IGNvbnN0IEZpbGVUcmVlID0gUHJvamVjdFNjaGVtYS5jcmVhdGVGaWxlVHJlZU1vZGVsKGRiKTtcbmV4cG9ydCBjb25zdCBGaWxlID0gUHJvamVjdFNjaGVtYS5jcmVhdGVGaWxlTW9kZWwoZGIpO1xuXG5leHBvcnQgZGVmYXVsdCBkYjtcbiIsIi8vIEBmbG93XG5cbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgeyBjcmVhdGVNb2RlbEhlbHBlciB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdFNjaGVtYTogbW9uZ29vc2UuU2NoZW1hPGFueT4gPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgbmFtZTogU3RyaW5nLFxuICBpc1B1YmxpYzogQm9vbGVhbixcbiAgY3JlYXRlZEF0OiBEYXRlLFxuICBmaWxlVHJlZVJvb3Q6IHsgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6ICdGaWxlVHJlZScgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmlsZVRyZWVTY2hlbWE6IG1vbmdvb3NlLlNjaGVtYTxhbnk+ID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIHByb2plY3Q6IHsgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6ICdQcm9qZWN0JyB9LFxuICBjb250ZW50czogW1xuICAgIHtcbiAgICAgIG5hbWU6IFN0cmluZyxcbiAgICAgIHR5cGU6IHsgdHlwZTogU3RyaW5nLCBlbnVtOiBbJ0ZJTEUnLCAnVFJFRSddIH0sXG4gICAgICByZWY6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICB9LFxuICBdLFxufSk7XG5cbmV4cG9ydCBjb25zdCBmaWxlU2NoZW1hOiBtb25nb29zZS5TY2hlbWE8YW55PiA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICBwcm9qZWN0OiB7IHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiAnUHJvamVjdCcgfSxcbiAgZGF0YTogQnVmZmVyLFxufSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQcm9qZWN0TW9kZWwgPSBjcmVhdGVNb2RlbEhlbHBlcignUHJvamVjdCcsIHByb2plY3RTY2hlbWEpO1xuLy8gcHJldHRpZXItaWdub3JlXG5leHBvcnQgY29uc3QgY3JlYXRlRmlsZVRyZWVNb2RlbCA9IGNyZWF0ZU1vZGVsSGVscGVyKCdGaWxlVHJlZScsIGZpbGVUcmVlU2NoZW1hKTtcbmV4cG9ydCBjb25zdCBjcmVhdGVGaWxlTW9kZWwgPSBjcmVhdGVNb2RlbEhlbHBlcignRmlsZScsIGZpbGVTY2hlbWEpO1xuIiwiLy8gQGZsb3dcblxuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IGNyZWF0ZU1vZGVsSGVscGVyIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBzY2hlbWE6IG1vbmdvb3NlLlNjaGVtYTxhbnk+ID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIHVzZXJuYW1lOiB7IHR5cGU6IFN0cmluZywgdW5pcXVlOiB0cnVlIH0sXG4gIHBhc3N3b3JkOiBTdHJpbmcsXG4gIGNyZWF0ZWRBdDogRGF0ZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTW9kZWwgPSBjcmVhdGVNb2RlbEhlbHBlcignVXNlcicsIHNjaGVtYSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVNb2RlbEhlbHBlciA9IChuYW1lLCBzY2hlbWEpID0+IChjb25uZWN0aW9uKSA9PiB7XG4gIGlmIChfX0RFVl9fICYmIGNvbm5lY3Rpb24ubW9kZWxzW25hbWVdKSB7XG4gICAgLy8gd2UncmUgcHJvYmFibHkgaG90LXJlbG9hZGluZywgc28gY2FuJ3QgcmUtY29tcGlsZSB0aGUgbW9kZWwhXG4gICAgY29uc29sZS53YXJuKGBUcnlpbmcgdG8gcmUtY29tcGlsZSBzY2hlbWEgZm9yICcke25hbWV9Jzsga2VlcGluZyB0aGUgb3JpZ2luYWwgbW9kZWwuYCk7XG4gICAgcmV0dXJuIGNvbm5lY3Rpb24ubW9kZWxzW25hbWVdO1xuICB9XG4gIHJldHVybiBjb25uZWN0aW9uLm1vZGVsKG5hbWUsIHNjaGVtYSk7XG59O1xuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuXG5pbXBvcnQgeyBsb2FkU2NyaXB0cyB9IGZyb20gJy4vbG9hZGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckV4ZWN1dG9yKCkge1xuICBjb25zdCBzY3JpcHRzID0gbG9hZFNjcmlwdHMoJ2V4ZWN1dG9yJyk7XG5cbiAgY29uc3QgaHRtbCA9IFJlYWN0RE9NLnJlbmRlclRvU3RhdGljTWFya3VwKFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9odG1sLWhhcy1sYW5nXG4gICAgPGh0bWw+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAge3NjcmlwdHMubWFwKChzY3JpcHQpID0+IChcbiAgICAgICAgICA8bGluayBrZXk9e3NjcmlwdH0gcmVsPVwicHJlbG9hZFwiIGhyZWY9e3NjcmlwdH0gYXM9XCJzY3JpcHRcIiAvPlxuICAgICAgICApKX1cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICB7c2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gKFxuICAgICAgICAgIDxzY3JpcHQga2V5PXtzY3JpcHR9IHNyYz17c2NyaXB0fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+LFxuICApO1xuICByZXR1cm4gYDwhZG9jdHlwZSBodG1sPiR7aHRtbH1gO1xufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuXG5pbXBvcnQgSHRtbCBmcm9tICcuL0h0bWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJIdG1sKHJvb3RDb21wb25lbnQsIGRhdGEpIHtcbiAgY29uc3QgY29udGVudCA9IFJlYWN0RE9NLnJlbmRlclRvU3RyaW5nKHJvb3RDb21wb25lbnQpO1xuICBjb25zdCBodG1sID0gUmVhY3RET00ucmVuZGVyVG9TdGF0aWNNYXJrdXAoPEh0bWwgey4uLmRhdGF9Pntjb250ZW50fTwvSHRtbD4pO1xuICByZXR1cm4gYDwhZG9jdHlwZSBodG1sPiR7aHRtbH1gO1xufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0IHsgTWVzc2FnZUZvcm1hdEVsZW1lbnQgfSBmcm9tICdyZWFjdC1pbnRsJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuaW1wb3J0IG1lc3NhZ2VzX2RlIGZyb20gJy4vbG9jYWxlcy9kZS5qc29uJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbmltcG9ydCBtZXNzYWdlc19lbiBmcm9tICcuL2xvY2FsZXMvZW4uanNvbic7XG5cbmV4cG9ydCB0eXBlIExvY2FsZU1hcDxUPiA9IHsgW2xvY2FsZTogc3RyaW5nXTogVCB9O1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbnR5cGUgTWVzc2FnZXMgPVxuICB8IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cbiAgfCB7IFtrZXk6IHN0cmluZ106IE1lc3NhZ2VGb3JtYXRFbGVtZW50W10gfTtcblxuZXhwb3J0IGNvbnN0IE1FU1NBR0VTOiBMb2NhbGVNYXA8TWVzc2FnZXM+ID0ge1xuICBkZTogbWVzc2FnZXNfZGUsXG4gIGVuOiBtZXNzYWdlc19lbixcbn07XG5cbi8vIHJldHVybnMgdGhlIGZpcnN0IGxvY2FsZSBpbiBgbG9jYWxlc2AgbWF0Y2hpbmcgdGhlIHByZWRpY2F0ZS4gTW9zdCBvZiB0aGVcbi8vIHRpbWUsIHRoZSBwcmVkaWNhdGUgd2lsbCBiZSBhIHNpbXBsZSBtZW1iZXJzaGlwIHRlc3QuXG4vLyBUaGUgdGVzdCBpcyBwZXJmb3JtZWQgYXMgZm9sbG93czpcbi8vIC0gZmlyc3QsIGFsbCBsb2NhbGVzIGFyZSBub3JtYWxpemVkIHNvIHRoYXQgZS5nLiBcImRlLUFUXCIgYmVjb21lcyBcImRlX2F0XCJcbi8vIC0gc2Vjb25kLCBpZiBhbnkgb2YgdGhlIGxvY2FsZXMgbWF0Y2hlcyB0aGUgcHJlZGljYXRlLCB0aGF0IGlzIHJldHVybmVkXG4vLyAtIHRoaXJkLCB0aGUgbGFuZ3VhZ2Utb25seSB2YXJpYW50cyBhcmUgdGFrZW4sIGkuZS4gXCJkZV9hdFwiIGJlY29tZXMgXCJkZVwiXG4vLyAtIGlmIHRoZXJlIGlzIGEgbWF0Y2gsIHRoYXQgaXMgcmV0dXJuZWRcbi8vIC0gbGFzdGx5LCBudWxsIGlzIHJldHVybmVkLlxuLy8gRm9yIG1lYW5pbmdmdWwgcmVzdWx0cywgdGhlIGBsb2NhbGVzYCBhcnJheSBzaG91bGQgYWxyZWFkeSBjb250YWluXG4vLyBsYW5ndWFnZS1vbmx5IGxvY2FsZXMgYXMgYWx0ZXJuYXRpdmVzLiBPdGhlcndpc2UsIGFuIGFycmF5IHN1Y2ggYXNcbi8vXG4vLyAgICAgWydlbi1VUycsICdkZSddXG4vL1xuLy8gV2lsbCByZXR1cm4gJ2RlJyBpbiBmYXZvciBvZiAnZW4nIGlmIHRob3NlIGFyZSBzdXBwb3J0ZWQgYnV0ICdlbi1VUycgaXNuJ3QuXG4vLyBJbnN0ZWFkIG9mIHZhbHVpbmcgYSBsYW5ndWFnZSBtYXRjaCBvdmVyIGFuIGV4YWN0IG1hdGNoLCBhIHN1ZmZpY2llbnRseVxuLy8gZGV0YWlsZWQgbGlzdCBvZiBwcmVmZXJlbmNlcyBpcyByZXF1aXJlZC5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFZmZlY3RpdmVMb2NhbGUoXG4gIGxvY2FsZXM6IHN0cmluZ1tdLFxuICBzdXBwb3J0ZWQ6IChzdHJpbmcpID0+IGJvb2xlYW4sXG4pOiBzdHJpbmcgfCBudWxsIHtcbiAgLy8gbm9ybWFsaXplIHRoaW5ncyBsaWtlICdkZS1BVCcgdG8gJ2RlX2F0J1xuICBjb25zdCBub3JtYWxpemVkID0gbG9jYWxlcy5tYXAoKGxvY2FsZSkgPT4gbG9jYWxlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnLScsICdfJykpO1xuXG4gIC8vIHRyeSB0byBmaW5kIGEgbWF0Y2ggZm9yIGFueSBvZiB0aGUgZXhhY3QgbG9jYWxlc1xuICBjb25zdCBleGFjdCA9IG5vcm1hbGl6ZWQuZmluZChzdXBwb3J0ZWQpO1xuICBpZiAoZXhhY3QpIHJldHVybiBleGFjdDtcblxuICAvLyB0cnkgdG8gZmluZCBhIG1hdGNoIGZvciBhbnkgb2YgdGhlIGV4YWN0IGxhbmd1YWdlLW9ubHkgbG9jYWxlc1xuICBjb25zdCBsYW5ndWFnZSA9IG5vcm1hbGl6ZWQubWFwKChsb2NhbGUpID0+IGxvY2FsZS5zcGxpdCgnXycpWzBdKS5maW5kKHN1cHBvcnRlZCk7XG4gIGlmIChsYW5ndWFnZSkgcmV0dXJuIGxhbmd1YWdlO1xuXG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBjaG9vc2VzIHRoZSBiZXN0IGVsZW1lbnQgaW4gYG1hcGAgYmFzZWQgb24gdGhlIGdpdmVuIGBsb2NhbGVzYCxcbi8vIHVzaW5nIHRoZSBhbGdvcml0aG0gb2YgYGdldEVmZmVjdGl2ZUxvY2FsZSgpYC5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2xhdGlvbjxUPihsb2NhbGVzOiBzdHJpbmdbXSwgbWFwOiBMb2NhbGVNYXA8VD4pOiBUIHwgbnVsbCB7XG4gIGNvbnN0IGxvY2FsZSA9IGdldEVmZmVjdGl2ZUxvY2FsZShsb2NhbGVzLCBPYmplY3QuaGFzT3duUHJvcGVydHkuYmluZChtYXApKTtcblxuICByZXR1cm4gbG9jYWxlID8gbWFwW2xvY2FsZV0gOiBudWxsO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL3JlYWN0LXNzclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcG9seWZpbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYnlsb25qcy9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJ5bG9uanMvY29yZS9Mb2FkaW5nL3NjZW5lTG9hZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFkZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1BdmF0YXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvY29tbW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9sYWIvQWxlcnRUaXRsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB1aXcvcmVhY3QtbWQtZWRpdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvZXh0LWxhbmd1YWdlX3Rvb2xzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvbW9kZS1qYXZhc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvdGhlbWUtZ2l0aHViXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFjZS1idWlsZHMvd2VicGFjay1yZXNvbHZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWNsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tbGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tbGluay1lcnJvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tbGluay1zY2hlbWFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFzZTY0LWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdGpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJsb2NrbHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmxvY2tseS9ibG9ja3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmxvY2tseS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJsb2NrbHkvamF2YXNjcmlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJibG9ja2x5L21zZy9kZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJibG9ja2x5L21zZy9lblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJibG9ja2x5L3B5dGhvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWUtcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1qd3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlsZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmxleGxheW91dC1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtc3Vic2NyaXB0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRvb2xzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhpc3RvcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXN0eWxlLWxvYWRlci9TdHlsZUNvbnRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvdXNlU3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtc3R5bGUtbG9hZGVyL3dpdGhTdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzc3RvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNzdG9yZS9kaXN0L2pzc3RvcmUud29ya2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC5tZXJnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXRlcmlhbC11aS1wb3B1cC1zdGF0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXRlcmlhbC11aS1wb3B1cC1zdGF0ZS9ob29rc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXR0ZXItanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL0FjY291bnRDaXJjbGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL0Fycm93QWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9BeGlzQXJyb3dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL0NoZXZyb25MZWZ0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9DaGV2cm9uUmlnaHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL0Nsb3VkVXBsb2FkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9Db2dzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9Db25zb2xlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9EYXRhYmFzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvRGVsZXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9Eb3RzVmVydGljYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL0Rvd25sb2FkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9FeGNsYW1hdGlvblRoaWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9FeGl0VG9BcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL0ZpbGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL0ZpbGVQZGZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL0ZvbGRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvRm9sZGVySW1hZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL0ZvbGRlck9wZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL0ZvcnVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9IZWxwQ2lyY2xlT3V0bGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvSW1hZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL0xhbmd1YWdlSmF2YXNjcmlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvTGFuZ3VhZ2VNYXJrZG93blwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvTGFuZ3VhZ2VQeXRob25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL01hZ25pZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL01hZ25pZnlNaW51c091dGxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL01hZ25pZnlQbHVzT3V0bGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvTWFnbmlmeVNjYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL1BlbmNpbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvUGxheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvUGx1c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvUmVmcmVzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvUmVzaXplXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9Sb2JvdEluZHVzdHJpYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL1JvdGF0ZUxlZnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL1JvdGF0ZU9yYml0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9TaGFyZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvU3RvcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvVG9vbGJveE91dGxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL1RveUJyaWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9UcmFuc2xhdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL1R1bmVWZXJ0aWNhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZGktbWF0ZXJpYWwtdWkvVXBsb2FkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1kaS1tYXRlcmlhbC11aS9WaWV3Q29tcGFjdE91dGxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRpLW1hdGVyaWFsLXVpL1dpZGdldHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoc2VnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBlZXJqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwb2x5LWRlY29tcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmV0dHktZXJyb3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyYy10cmVlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFjZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWludGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VyaWFsaXplLWphdmFzY3JpcHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidW5pdmVyc2FsLXJvdXRlclwiKTsiXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN3dCQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBM0JBO0FBQ0E7QUFEQTtBQUNBO0FBNEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFHQTtBQUVBO0FBRUE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7OztBQ25IQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQW9CQTtBQUNBO0FBQ0E7QUFNQTtBQUdBO0FBQ0E7QUFNQTtBQUdBO0FBQ0E7QUFNQTtBQUdBO0FBQ0E7Ozs7Ozs7O0FDcEdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBM0JBO0FBNkJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7OztBQ2xLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBOzs7Ozs7OztBQ3BJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFEQTtBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUVBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7OztBQ3ZGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7Ozs7Ozs7O0FDTEE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVZBO0FBREE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFoQ0E7QUF3Q0E7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBUEE7QUFTQTs7Ozs7Ozs7QUNuQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBOzs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQVZBOzs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFTQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUF0QkE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQUNBO0FBc0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdEJBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQSx1UUFBQTtBQUZBO0FBS0E7QUFDQSxrUUFBQTtBQUZBO0FBS0E7QUFDQSw4UUFBQTtBQUZBO0FBS0E7QUFDQSx3UUFBQTtBQUZBO0FBS0E7QUFDQSxpUkFBQTtBQUZBO0FBS0E7QUFDQSwrUkFBQTtBQUZBO0FBS0E7QUFDQSw4UUFBQTtBQUZBO0FBS0E7QUFDQSx3UUFBQTtBQUZBO0FBS0E7QUFDQSw4UUFBQTtBQUZBO0FBS0E7QUFDQSx3UUFBQTtBQUZBO0FBS0E7QUFDQSxvUkFBQTtBQUZBO0FBS0E7QUFDQSwyUUFBQTtBQUZBO0FBTUE7QUFDQTtBQUNBLG9SQUFBO0FBRkE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBdkVBO0FBQ0E7QUF5RUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQWFBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUEvREE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUErREE7Ozs7Ozs7OztBQy9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsYUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBR0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFuQkE7QUE3QkE7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFOQTs7Ozs7Ozs7QUNwRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFQQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFWQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBRUE7QUFHQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkZBO0FBOUJBO0FBNUVBO0FBcU1BOzs7Ozs7OztBQzdNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQWZBO0FBZ0JBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFwQ0E7QUFqQkE7QUF6QkE7QUFrRkE7Ozs7Ozs7O0FDMUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBLGFBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBaEJBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUExQkE7QUE4QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFKQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaFNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUVBOzs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBSEE7QUFXQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQU1BOzs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9