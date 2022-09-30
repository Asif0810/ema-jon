const LoacalStorag = (product) => {
    const { id } = product
    let shoppingCart = {};

    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)

    } else {
        shoppingCart = {}
    }
    const quantity = shoppingCart[id];
    if (quantity) {
        const newquantity = quantity + 1;
        shoppingCart[id] = newquantity
    } else {
        shoppingCart[id] = 1
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));


}

const getaddedcart = () => {
    let shoppingCart = {};

    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)

    }
    return shoppingCart
}
export { LoacalStorag, getaddedcart }