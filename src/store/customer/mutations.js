const setCustomerName = (state, customerName) => {
    state.data.name = customerName;
}

const setCustomerNickname = (state, customerNickame) => {
    state.data.nickname = customerNickame;
}

const setCustomer = (state, customerData) => {
    state.data = customerData;
}

export {
    setCustomer,
    setCustomerName,
    setCustomerNickname
}