"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var components_1 = require("../components");
var beemo_lib_1 = require("beemo-lib");
var containerInitialized = false;
function initWebContainer() {
    if (containerInitialized) {
        return false;
    }
    beemo_lib_1.initContainer();
    // Http
    beemo_lib_1.container.set(beemo_lib_1.HttpServiceName.HttpClient, function () { return new components_1.WebHttpRequestSender(); });
    // Logging
    beemo_lib_1.container.set(beemo_lib_1.LoggingServiceName.LogDataFormatter, function () { return new components_1.WebLogDataFormatter(); });
    // Persistence
    beemo_lib_1.container.set(beemo_lib_1.PersistenceServiceName.KVStore, function () {
        return !!localStorage ?
            new components_1.LocalStorageKVStore(beemo_lib_1.container.get(beemo_lib_1.SerializationServiceName.Encoder)) :
            new beemo_lib_1.InMemoryKVStore();
    });
    // Threads
    beemo_lib_1.container.set(beemo_lib_1.ThreadsServiceName.BackgroundTaskManager, function () { return new components_1.WebBackgroundTaskManager(); });
}
exports.initWebContainer = initWebContainer;
