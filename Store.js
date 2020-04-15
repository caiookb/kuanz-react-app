// @flow
import {createStore, applyMiddleware} from 'redux';

import ReduxThunk from 'redux-thunk';
import Reducers from './src/libs/redux/reducers';

export default createStore(Reducers, applyMiddleware(ReduxThunk));
