/**
 * Created by Administrator on 2018/10/15 0015.
 */
import {createStore} from 'redux'
import reducer from '../reducer'

const state = {
    title: '首页'
}

const store = createStore(reducer, state)

export default store