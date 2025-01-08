
const ChangeAmountReducer = (state, action) => {
    const {id, amount} = action.value;
    switch (action.type) {
        case "plus":
            const new_State_plus = state.map(item => {
            return item.id == id ? {...item, amount : amount} : item;
            })
            return new_State_plus; 
        case "minus":
            const new_State_minus = state.map(item => {
            return item.id == id && item.amount > 1 ? {...item, amount : amount} : item;
            })
            return new_State_minus; 
        case 'reset':
            return [];
        default:
            return state;
    }
  }

export default ChangeAmountReducer