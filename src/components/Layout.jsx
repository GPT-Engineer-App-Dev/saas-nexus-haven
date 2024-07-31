import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold text-blue-600">SaaSLogo</Link>
                    <nav>
                        <Button variant="ghost" asChild><Link to="/">Home</Link></Button>
                        <Button variant="ghost">Features</Button>
                        <Button variant="ghost">Pricing</Button>
                        <Button variant="ghost" asChild><Link to="/about">About Us</Link></Button>
                        <Button variant="ghost" asChild><Link to="/planetary-system">Planetary System</Link></Button>
                        <Button>Sign Up</Button>
                    </nav>
                </div>
            </header>
            <main className="flex-grow">
                {children}
            </main>
            <footer className="bg-gray-100 py-8">
                <div className="container mx-auto px-4 text-center text-gray-600">
                    © 2024 SaaSLogo. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Layout;
