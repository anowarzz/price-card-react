import React from 'react';
import PriceOption from '../PriceOption/PriceOption'

const Pricing = () => {

const pricingOptions = [

    {id: 1, name:'Free', price: 0, 
    features: [
        'Awesome Feature',
        'Extra Feature',
        'Unnecessary Feature',
        'Will Never Use Feature',
        'Hudai Feature',
        'Ajaira Feature'
    ]},
    {id: 2, name:'Medium', price: 9.99, features: [
        'Everything On Free',
        'Extra Feature',
        'Unnecessary Feature',
        'Will Never Use Feature',
        'Hudai Feature',
        'Ajaira Feature'
    ]},
    {id: 3, name:'Premium', price: 19.99, features: [
        'Everything On Medium',
        'Extra Feature',
        'Unnecessary Feature',
        'Will Never Use Feature',
        'Hudai Feature',
        'Ajaira Feature'
    ]} 
]



    return (
        <div>
            <h2 className='text-5xl font-bold bg-emerald-400 rounded-lg p-12 w-9/12 mx-auto text-white'>Best deal of the town </h2>
            <div className='mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                pricingOptions.map(option => <PriceOption
                key = {option.id} option = {option}
                > </PriceOption>)
            }
            </div>
        </div>
    );
};

export default Pricing;