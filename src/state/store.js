import { createStore } from "redux";
import { widgetReducer } from './reducer';

export const store = createStore(widgetReducer);
