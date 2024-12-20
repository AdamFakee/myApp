
const filterItemReducer = (state, action) => {
    switch (action.type) {
      case "add":
        return [...state, action.value]; 
      case "delete":
        return state.filter(item => item !== action.value); 
      default:
        return state;
    }
  }

export default filterItemReducer