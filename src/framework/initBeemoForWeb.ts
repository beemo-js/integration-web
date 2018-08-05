import {initWebContainer} from './initWebContainer'
import {initBeemoCore} from 'beemo-lib'

export function initBeemoForWeb() {
    initBeemoCore()
    initWebContainer()
}