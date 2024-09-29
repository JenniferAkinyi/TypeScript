interface Product2 {
    id: number;
    name: string;
    price: number;
    description: string;
}

const updateProduct = (id: number, productInfo: Partial<Product2>) => {
    // Do something with the productInfo
};
updateProduct(1, {
    name: "Book",
});

updateProduct(1, {
    price: 12.99,
});