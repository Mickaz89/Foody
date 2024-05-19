import React, { useState } from 'react';

interface CheckoutModalProps {
    show: boolean;
    onClose: () => void;
    cartItems: any[];
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ show, onClose, cartItems }) => {
    const [currentStep, setCurrentStep] = useState<number>(1);

    const handleNextStep = () => {
        setCurrentStep(prevStep => prevStep + 1);
    };

    const handlePrevStep = () => {
        setCurrentStep(prevStep => prevStep - 1);
    };

    return (
        <div className={`${show ? 'block' : 'hidden'} fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50`}>
            <div className="bg-white pt-12 p-4 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 relative">
                <button onClick={onClose} className="text-gray-700 font-bold absolute top-2 right-4">&times;</button>
                {/* Progress Indicator */}
                <div className="flex justify-between items-center mb-4">
                    {['Cart', 'Shipping', 'Payment'].map((step, index) => (
                        <React.Fragment key={step}>
                            <div className={`w-8 h-8 rounded-full border-2 ${currentStep > index ? 'border-blue-500 bg-blue-500' : 'border-gray-300 bg-white'} flex items-center justify-center`}>
                                <span className="text-sm font-bold text-white">{index + 1}</span>
                            </div>
                            <div className="text-center text-sm font-semibold ml-0.5 mr-0.5">{step}</div>
                            {index < 2 && <div className={`flex-grow h-1 ${currentStep > index + 1 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>}
                        </React.Fragment>
                    ))}
                </div>
                {/* Modal content */}
                <div className="mb-4">
                    {/* Checkout steps */}
                    <div className={`${currentStep === 1 ? 'block' : 'hidden'}`}>
                        {/* Shopping cart step */}
                        <h2 className="text-lg font-semibold mb-2">Shopping Cart</h2>
                        {/* Display cart items */}
                        {cartItems.map(item => (
                            <div key={item.id} className="mb-2">
                                {/* Display cart item details */}
                            </div>
                        ))}
                    </div>
                    {/* Add more steps */}
                </div>
                {/* Buttons for navigating between steps */}
                <div className="flex justify-between">
                    <button onClick={handlePrevStep} disabled={currentStep === 1} className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg mr-2">Previous</button>
                    <button onClick={handleNextStep} disabled={currentStep === 3} className="bg-blue-500 text-white py-2 px-4 rounded-lg">{currentStep === 3 ? 'Preview Order' : 'Next'}</button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutModal;
