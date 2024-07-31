import React from 'react';
import { Zap, Shield, BarChart } from 'lucide-react';

const Feature = ({ icon, title, description }) => (
  <div className="flex flex-col items-center p-6">
    {icon}
    <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
    <p className="text-center">{description}</p>
  </div>
);

const Features = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature
            icon={<Zap className="w-12 h-12 text-blue-500" />}
            title="Lightning Fast"
            description="Experience unparalleled speed and efficiency"
          />
          <Feature
            icon={<Shield className="w-12 h-12 text-blue-500" />}
            title="Secure"
            description="Your data is protected with enterprise-grade security"
          />
          <Feature
            icon={<BarChart className="w-12 h-12 text-blue-500" />}
            title="Analytics"
            description="Gain insights with powerful analytics tools"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
