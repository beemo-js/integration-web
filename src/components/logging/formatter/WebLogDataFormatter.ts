import {LogDataFormatter} from 'beemo-lib'

export class WebLogDataFormatter implements LogDataFormatter {
    format(log: Object): Object {
        return {
            date: new Date(),
            data: log
        }
    }
}