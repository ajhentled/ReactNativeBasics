import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
<<<<<<< HEAD
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
=======

export default combineReducers({
  libraries: LibraryReducer
>>>>>>> 60a83e9549319f322eaeb70bc810a2c43747c7fc
});