
const ChangeAmountReducer = (state, action) => {
    const {productId, amount} = action.value;
    switch (action.type) {
        case "plus":
            const new_State_plus = state.map(item => {
                return item.productId == productId ? {...item, amount : amount} : item;
            })
            return new_State_plus; 
        case "minus":
            const new_State_minus = state.map(item => {
                return item.productId == productId && item.amount > 1 ? {...item, amount : amount} : item;
            })
            return new_State_minus; 
        case 'copy':
            const {data} = action.value;
            const newData = data.map(item => {
                return {...item, amount : 1};
            })
            return newData;
        case 'delete': 
            const {productId_delete, sizeName} = action.value;
            const new_state_deleted = state.filter(item => {
                return item.productId != productId_delete || item.sizeName != sizeName;
            });
            return new_state_deleted;
        case 'reset':
            return [];
        default:
            return state;
    }
  }

export default ChangeAmountReducer