
const filterRatingReducer = (state, action) => {
    switch (action.type) {
      case "delete":
        return state.filter(item => item.productId !== action.value.productId); 
      
      case "copy":
        const {data} = action.value;
        return data;
      default:
        return state;
    }
  }

export default filterRatingReducer