// src/ProductList.tsx
import React, { useState } from 'react';
import CheckoutModal from './CheckoutModal';
import { products } from './Products';

export interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
}

const ProductList: React.FC = () => {
    const [showCheckoutModal, setShowCheckoutModal] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState<Product[]>([]);

    const handleAddToCart = (product: Product) => {
        setCartItems(prevItems => [...prevItems, product]);
    };

    const handleCheckoutClick = () => {
        setShowCheckoutModal(true);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Menu</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-16">
                {products.map(product => (
                    <div key={product.id} className="flex flex-col border p-4 rounded-lg shadow hover:shadow-lg transition duration-300 h-full">
                        <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-t-lg" />
                        <div className="mt-4 flex-grow">
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p className="text-gray-700">{product.description}</p>
                            <p className="text-green-600 font-bold">{product.price}</p>
                        </div>
                        <button
                            onClick={() => handleAddToCart(product)}
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-2 w-full hover:bg-blue-600"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
            <div className="fixed bottom-0 left-0 w-full flex justify-center pb-4">
                <button
                    onClick={handleCheckoutClick}
                    className="bg-green-500 text-white py-2 px-12 rounded-lg hover:bg-green-600"
                >
                    View Cart ({cartItems.length})
                </button>
            </div>
            <CheckoutModal
                show={showCheckoutModal}
                onClose={() => setShowCheckoutModal(false)}
                cartItems={cartItems}
            />
        </div>
    );
};

export default ProductList;
