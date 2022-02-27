import * as actionTypes from "../actionTypes";

const initialState = {
  data: [],
  error: "",
  isLoading: false,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
        return{
            ...state,
            isLoading: false,
            data : action.payload
        }
    case actionTypes.FETCH_PRODUCTS_FAIL:
        return{
            ...state,
            isLoading: false,
            error: action.payload
        }
    default:
      return state;
  }
};

export default productsReducer