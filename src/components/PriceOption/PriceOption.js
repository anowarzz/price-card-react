import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({option}) => {

const {features, } = option


    return (
        <div className='bg-indigo-500 m-3 rounded-md p-3'>
          <div>
          <h3>
            <span className='text-6xl font-semibold text-white'>{option.price}</span>

            <span className='text-2xl text-gray-200'>/mon</span>
            </h3>

            <p className='text-3xl my-4 font-semibold'>{option.name}</p>

          </div>
        {
            features.map((feature, idx )=> <Feature feature={feature} key={idx} > </Feature>) 
        }

        <button className='bg-green-500 w-[50%] mt-8 py-3 rounded-lg text-white font-bold hover:bg-rose-500 hover:text-black'>Buy Now</button>
        </div>
    );
};

export default PriceOption;