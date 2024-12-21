
const filterItemReducer = (state, action) => {
    switch (action.type) {
      case "add":
        return [...state, action.value]; 
      case "delete":
        return state.filter(item => item !== action.value); 
      case "delete_object":
        return state.filter(item => item.id !== action.value); 
      case "reset":
        return [];
      default:
        return state;
    }
  }

export default filterItemReducer