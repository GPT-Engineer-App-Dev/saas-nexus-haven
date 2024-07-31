import React from 'react';
import { Button } from '@/components/ui/button';

const PricingTier = ({ name, price, features }) => (
  <div className="border rounded-lg p-6 flex flex-col">
    <h3 className="text-2xl font-bold mb-4">{name}</h3>
    <p className="text-3xl font-bold mb-6">${price}<span className="text-sm font-normal">/month</span></p>
    <ul className="mb-6 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="mb-2">✓ {feature}</li>
      ))}
    </ul>
    <Button variant="outline" className="w-full">Choose Plan</Button>
  </div>
);

const Pricing = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingTier
            name="Basic"
            price={9}
            features={['1 User', '10 Projects', 'Basic Support']}
          />
          <PricingTier
            name="Pro"
            price={29}
            features={['5 Users', 'Unlimited Projects', 'Priority Support', 'Advanced Analytics']}
          />
          <PricingTier
            name="Enterprise"
            price={99}
            features={['Unlimited Users', 'Unlimited Projects', '24/7 Support', 'Custom Integrations']}
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
