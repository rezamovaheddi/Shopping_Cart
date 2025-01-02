function AddToCart(products) {
    setAddProduct((prevItems) => {
        const existingProduct = prevItems.find((item) => item.id === products.id);
        if (existingProduct) {
            return prevItems.map((item) =>
                item.id === products.id ? {...item, quantity: item.quantity + 1 } :
                item
            );
        } else [...prevItems, {...products, quantity: 1 }];
    });
    setCartItems((preveCart) => {
        const isCartToItem = preveCart.find((item) => item.id === products.id);
        if (isCartToItem) {
            return preveCart.map((item) => {
                item.id === products.id ? {...item, quantity: item.quantity + 1 } :
                    item;
            });
        } else return [...preveCart, {...products, quantity: 1 }];
    });
}
export default AddToCart