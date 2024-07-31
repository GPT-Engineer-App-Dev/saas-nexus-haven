import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-bold mb-6">Streamline Your Workflow</h1>
      <p className="text-xl mb-8">Boost productivity with our all-in-one SaaS solution</p>
      <Button size="lg">Get Started</Button>
    </div>
  );
};

export default Hero;
