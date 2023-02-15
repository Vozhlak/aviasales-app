import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware
} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { ticketsReducer } from './ticketsReducer';
import { filterReducer } from './filtersReducer';
import { tabsReducer } from './tabsReducer';
import { appReducer } from './appReducer';

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  filters: filterReducer,
  tabIsChecked: tabsReducer,
  reducerApp: appReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
