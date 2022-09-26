import { combineReducers } from "redux";
import { dressingRoomReducer } from "./DressingRoomReducer";

export const rootReducer = combineReducers({
  dressingRoomReducer: dressingRoomReducer,
});
