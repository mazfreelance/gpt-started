import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const SettingModal = ({ isOpen, onClose } : any) => {
    const [apikey, setApiKey] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [savedKey, setSavedKey] = useState('');

    useEffect(() => {
        // Get the saved count value from localStorage
        const openaikey = localStorage.getItem('openaikey');
        
        // If the saved count value exists, update the state with it
        if (openaikey !== null) {
            setApiKey(openaikey);
        }
    }, []);
    
    const handleTogglePasswordVisibility = () => {
        setIsPasswordVisible((prevState) => !prevState);
    };

    const handleNameChange = (event : any) => {
        setApiKey(event.target.value);
    };

    const handleSubmit = (event : any) => {
        event.preventDefault();
        // alert(`Your API key ${ apikey }!`);
        
        // Save the openaikey value to localStorage whenever it changes
        localStorage.setItem('openaikey', apikey);

        onClose();
    };

    return (
        <>
            { isOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
                        <div className="fixed inset-0 transition-opacity bg-gray-500 opacity-75"></div>
                        <div className="relative z-10 inline-block max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg min-w-[70%]">
                            <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">
                                    <div className="flex justify-between">
                                        <div className="">Settings</div>
                                        <button
                                                type="button"
                                                onClick={ onClose }
                                                className="inline-flex justify-center ml-4 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                        >
                                            <AiOutlineClose/>
                                        </button>
                                    </div>
                                </h3>
                                <div className="mt-2">
                                    <form onSubmit={ handleSubmit }>
                                        <div className="mb-4">
                                            <div className="flex flex-col mb-4">
                                                <label htmlFor='apikey' className="mb-2 font-bold text-md text-gray-700">
                                                OpenAI API Key
                                                </label>
                                                <div className="relative">
                                                    <input
                                                    type={isPasswordVisible ? 'text' : 'password'}
                                                    id="apikey"
                                                    name="apikey"
                                                    value={ apikey }
                                                    onChange={ handleNameChange }
                                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    required
                                                    />
                                                    <div className="absolute inset-y-0 right-0 flex items-center px-0 rounded-r-md ">
                                                        <button
                                                            type="button"
                                                            onClick={handleTogglePasswordVisibility}
                                                            className="inline-flex justify-center ml-4 px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                                        >
                                                            { isPasswordVisible ? (
                                                                <AiFillEyeInvisible/>
                                                            ) : (
                                                                <AiFillEye/>
                                                            )}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="list-disc ml-5">
                                                <li>
                                                    <Link href='https://platform.openai.com/account/api-keys'>
                                                        Get your OpenAI API key
                                                    </Link>
                                                </li>
                                                <li>The API Key is stored locally on your browser and never sent anywhere else.</li>
                                            </ul>
                                        </div>
                                        <div className="mt-4">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) }
        </>
    );
};

