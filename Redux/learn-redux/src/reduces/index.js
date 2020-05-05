import {counter} from './counter';
import logedreducer from './islog';
import {combineReducers} from 'redux'

const rootersReduces = combineReducers({
    counter,
    logedreducer
});

export default rootersReduces;