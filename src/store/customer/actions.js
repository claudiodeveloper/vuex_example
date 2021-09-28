const editCustomer = (context, customerData) => {
    context.commit('setCustomer', customerData);
}

const editCustomerName = (context, customerName) => {
    context.commit('setCustomerName', customerName);
}

const editCustomerNickname = (context, customerNickame) => {
    context.commit('setCustomerNickname', customerNickame);
}
export {
    editCustomer,
    editCustomerName,
    editCustomerNickname
}