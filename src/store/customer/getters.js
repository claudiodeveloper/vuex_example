const currentCustomer = state => {
    return state.data;
}

const currentCustomerAddress = state => {
    return state.data.address;
}

export {
    currentCustomer,
    currentCustomerAddress
}