export default {
    getProduct: (state) => (id) => {
        return state.products.find(product => product.id === id)
    },
    myRentals: (state) => {
        return state.myRentals
    }
}