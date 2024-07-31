import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const PricingTier = ({ name, price, features, delay }) => (
  <motion.div 
    className="border rounded-lg p-6 flex flex-col"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <h3 className="text-2xl font-bold mb-4">{name}</h3>
    <p className="text-3xl font-bold mb-6">${price}<span className="text-sm font-normal">/month</span></p>
    <ul className="mb-6 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="mb-2">✓ {feature}</li>
      ))}
    </ul>
    <Button variant="outline" className="w-full">Choose Plan</Button>
  </motion.div>
);

const Pricing = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Simple, Transparent Pricing
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingTier
            name="Basic"
            price={9}
            features={['1 User', '10 Projects', 'Basic Support']}
            delay={0.2}
          />
          <PricingTier
            name="Pro"
            price={29}
            features={['5 Users', 'Unlimited Projects', 'Priority Support', 'Advanced Analytics']}
            delay={0.4}
          />
          <PricingTier
            name="Enterprise"
            price={99}
            features={['Unlimited Users', 'Unlimited Projects', '24/7 Support', 'Custom Integrations']}
            delay={0.6}
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
