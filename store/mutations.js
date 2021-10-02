export default {
    addItem(state, id) {
        // console.log(state)
        const product = state.products.find(product => product.id === id)
         state.myRentals.push(product)
    }
}