// src/redux/reducers/userReducer.js

const initialState = {
    userData: null,
    loading: false,
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          userData: action.payload,
          loading: false,
          error: null,
        };
      case 'SET_LOADING':
        return {
          ...state,
          loading: action.payload,
          error: null,
        };
      case 'SET_ERROR':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  