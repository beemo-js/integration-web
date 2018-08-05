import { BackgroundTaskManager } from 'beemo-lib';
export declare class WebBackgroundTaskManager implements BackgroundTaskManager {
    executeInBackground(fn: Function): void;
}
