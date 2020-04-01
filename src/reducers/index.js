import {combineReducers} from 'redux';
import count from './count';

export default combineReducers({ count });//export defaultされたものを使いたい時、importする側は任意の名前をつけることができます
//countをreturnしてる関数