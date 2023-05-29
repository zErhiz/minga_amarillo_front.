import React, { useState } from 'react';
import axios from 'axios';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import apiUrl from '../../../api';

const Donation = () => {
   
    initMercadoPago('TEST-03defaa4-a48e-4308-8d41-98af4afd29f2')
    const [preferenceId, setPreferenceId] = useState(false);
    const [amount, setAmount] = useState(0);

    const handleDonation = async (amount) => {
        try {
            const response = await axios.post(`${apiUrl}donation`, {
                unit_price: amount,
            });
            const preferenceId = response.data.preferenceId;

            setPreferenceId(preferenceId);

            setAmount(amount)
        } catch (error) {
            console.error(error);
        }
    };

   

    return (
        <>
            {preferenceId === false ?
                <div className='text-white h-screen flex flex-col justify-center items-center bg-hero bg-cover'>
                    <h1 className='text-[2rem] mb-[10%] pr-[2%] font-extrabold '>
                        Contribute to our devs
                    </h1>
                    <div className='flex flex-col sm:flex-row justify-center items-center gap-16'>
                        <div className="flex flex-col rounded-lg bg-white   md:max-w-xl md:flex-row">
                            <div className="flex flex-col justify-center items-center p-6">
                                <h5 className="mb-2 text-xl font-medium text-neutral-800 ">
                                   AR$1000 Donation
                                </h5>
                                <button className='w-[80%]  bg-orange-400  text-white font-bold py-2 px-4 rounded-[2rem]'
                                    onClick={() => handleDonation(1000)}>
                                    Donate
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col rounded-lg bg-white  md:max-w-xl md:flex-row">
                            <div className="flex flex-col justify-center items-center p-6">
                                <h5
                                    className="mb-2 text-xl font-medium text-neutral-800 ">
                                     AR$5000 Donation
                                </h5>
                                <button className='w-[80%]  bg-orange-400  text-white font-bold py-2 px-4 rounded-[2rem]'
                                    onClick={() => handleDonation(5000)}>
                                    Donate
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col rounded-lg bg-white md:max-w-xl md:flex-row">
                            <div className="flex flex-col justify-center items-center p-6">
                                <h5 className="mb-2 text-xl font-medium text-neutral-800 ">
                          AR$10000 Donation
                                </h5>
                                <button className='w-[80%]  bg-orange-400  text-white font-bold py-2 px-4 rounded-[2rem]'
                                    onClick={() => handleDonation(10000)}>
                                    Donate
                                </button>
                              </div>
                           </div>
                       </div>
                      </div>
                : (
                    <div className=" flex flex-col text-black h-screen justify-center items-center bg-hero bg-no-repeat bg-cover">
                        <div className='bg-orange-500 bg-no-repeat  bg-covermin-h-[50%] rounded-[2rem] flex flex-col justify-center items-center mx-4'>
                            <div className='flex flex-col items-center'>
                                <p className='text-center font-extrabold text-white text-[2rem] m-4'>
                                    Are you sure you want to donate ${amount}?
                                </p>
                                <Wallet initialization={{ preferenceId: preferenceId, redirectMode: 'modal' }} />
                                <button className='transition duration-300 ease-in-out bg-white  text-black font-bold py-2 px-4 rounded-[1rem] ' onClick={() => setPreferenceId(false)}>Return</button>
                            </div>
                        </div>
                    </div>
                )}
        </>
    );
};
export default Donation;