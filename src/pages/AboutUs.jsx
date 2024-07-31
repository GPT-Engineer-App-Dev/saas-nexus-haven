import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h1>
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="mb-6">
            At SaaSLogo, we're passionate about streamlining workflows and boosting productivity for businesses of all sizes. Our journey began in 2020 with a simple idea: to create a powerful, user-friendly SaaS solution that addresses the common pain points faced by modern organizations.
          </p>
          <p className="mb-6">
            Our team of dedicated professionals brings together expertise in software development, user experience design, and business process optimization. We're committed to continuous innovation, regularly updating our platform with new features and improvements based on user feedback and industry trends.
          </p>
          <p>
            Our mission is to empower businesses to work smarter, not harder. By providing intuitive tools and actionable insights, we help our clients save time, reduce costs, and focus on what truly matters - growing their business.
          </p>
        </motion.div>
      </div>
    </Layout>
  );
};

export default AboutUs;
