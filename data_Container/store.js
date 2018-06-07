import {applyMiddleware,createStore} from 'redux'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './reducers/combinedReducer'

const middleware=applyMiddleware(promise(),thunk)

const store =createStore(reducers,middleware)

export default store