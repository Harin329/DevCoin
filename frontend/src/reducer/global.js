import { SET_ERROR, SET_LOADING, SET_USER } from "../actions/globalActions";
import { combineReducers } from "redux";

const initialLoadingState = true;
const initialErrorState = false;
const defaultUser = {
    id: "",
    name: "",
    email: "",
}

const loading = (state = initialLoadingState, action) => {
  switch (action.type) {
    case SET_LOADING: {
        return action.payload;
    }
    default: {
      return state;
    }
  }
};

const error = (state = initialErrorState, action) => {
  switch (action.type) {
    case SET_ERROR: {
        return action.payload;
    }
    default: {
      return state;
    }
  }
};

const user = (state = defaultUser, action) => {
    switch (action.type) {
      case SET_USER: {
          return action.payload;
      }
      default: {
        return state;
      }
    }
  };

export default combineReducers({ loading, error, user });