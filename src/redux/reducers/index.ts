import { combineReducers } from 'redux';
import { catalogReducer } from './CatalogReducer';

const rootReducer = combineReducers({
    catalog: catalogReducer
});

export default rootReducer;
