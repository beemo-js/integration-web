import {
    LocalStorageKVStore,
    WebBackgroundTaskManager,
    WebHttpRequestSender,
    WebLogDataFormatter
} from '../components'
import {
    container,
    HttpServiceName,
    initContainer,
    InMemoryKVStore,
    LoggingServiceName,
    PersistenceServiceName,
    SerializationServiceName,
    ThreadsServiceName,
} from 'beemo-lib'

let containerInitialized = false

export function initWebContainer() {

    if (containerInitialized) {
        return false
    }

    initContainer()

    // Http

    container.set(HttpServiceName.HttpClient, () => new WebHttpRequestSender())

    // Logging

    container.set(LoggingServiceName.LogDataFormatter, () => new WebLogDataFormatter())

    // Persistence

    container.set(PersistenceServiceName.KVStore, () => {
        return !!localStorage ?
            new LocalStorageKVStore(container.get(SerializationServiceName.Encoder)):
            new InMemoryKVStore()
    })

    // Threads

    container.set(ThreadsServiceName.BackgroundTaskManager, () => new WebBackgroundTaskManager())

}