// src/redux/actions/userActions.js

export const setUser = (userData) => {
    return {
      type: 'SET_USER',
      payload: userData,
    };
  };
  
  export const setLoading = (isLoading) => {
    return {
      type: 'SET_LOADING',
      payload: isLoading,
    };
  };
  
  export const setError = (error) => {
    return {
      type: 'SET_ERROR',
      payload: error,
    };
  };
  