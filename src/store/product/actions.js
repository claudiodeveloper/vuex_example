const editProductValue = (context, value) => {
    context.commit('setProductValue', value);
}

export {
    editProductValue
}