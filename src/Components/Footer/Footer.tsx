// components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#2d3742] text-white py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-xl font-bold mb-2">About Us</h2>
                        <p className="text-gray-300">
                            We are committed to delivering the best products and services to our customers.
                            Our mission is to innovate and inspire through quality and excellence.
                        </p>
                    </div>
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-xl font-bold mb-2">Company</h2>
                        <ul className="text-gray-300">
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-xl font-bold mb-2">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Facebook">
                                <svg
                                    className="h-6 w-6 text-gray-300 hover:text-white transition-colors"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.49v-9.294H9.691V12h3.124V9.343c0-3.1 1.837-4.786 4.537-4.786 1.308 0 2.429.097 2.759.14v3.203l-1.897.001c-1.486 0-1.773.707-1.773 1.74V12h3.55l-.464 3.706h-3.086V24h6.065c.731 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Twitter">
                                <svg
                                    className="h-6 w-6 text-gray-300 hover:text-white transition-colors"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M24 4.557a9.965 9.965 0 0 1-2.828.775 4.936 4.936 0 0 0 2.163-2.724 9.867 9.867 0 0 1-3.127 1.198A4.926 4.926 0 0 0 16.616 4c-2.719 0-4.927 2.202-4.927 4.917 0 .386.044.761.127 1.125C7.728 10.09 4.1 8.13 1.67 5.148a4.917 4.917 0 0 0-.666 2.476c0 1.71.87 3.213 2.188 4.094a4.91 4.91 0 0 1-2.229-.616v.062c0 2.392 1.697 4.389 3.946 4.843a4.935 4.935 0 0 1-2.224.085c.634 1.977 2.447 3.417 4.601 3.459A9.877 9.877 0 0 1 0 20.201 13.92 13.92 0 0 0 7.548 22c9.055 0 14.015-7.486 14.015-13.942 0-.212 0-.423-.015-.634A10.022 10.022 0 0 0 24 4.557z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Instagram">
                                <svg
                                    className="h-6 w-6 text-gray-300 hover:text-white transition-colors"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2.163c3.206 0 3.582.012 4.857.07 1.307.061 2.487.286 3.25.604a5.859 5.859 0 0 1 2.26 1.53c.577.577 1.026 1.247 1.53 2.26.318.763.543 1.943.604 3.25.058 1.275.07 1.651.07 4.857s-.012 3.582-.07 4.857c-.061 1.307-.286 2.487-.604 3.25a5.859 5.859 0 0 1-1.53 2.26c-.577.577-1.247 1.026-2.26 1.53-.763.318-1.943.543-3.25.604-1.275.058-1.651.07-4.857.07s-3.582-.012-4.857-.07c-1.307-.061-2.487-.286-3.25-.604a5.859 5.859 0 0 1-2.26-1.53c-.577-.577-1.026-1.247-1.53-2.26-.318-.763-.543-1.943-.604-3.25C2.175 15.745 2.163 15.369 2.163 12s.012-3.582.07-4.857c.061-1.307.286-2.487.604-3.25a5.859 5.859 0 0 1 1.53-2.26c.577-.577 1.247-1.026 2.26-1.53.763-.318 1.943-.543 3.25-.604C8.418 2.175 8.794 2.163 12 2.163zM12 0C8.741 0 8.306.012 7.057.07 5.604.133 4.484.36 3.66.718 2.734 1.094 1.919 1.647 1.285 2.281.652 2.916.099 3.731.023 5.184.012 6.433 0 6.87 0 12c0 5.13.012 5.467.023 6.816.075 1.453.63 2.268 1.185 2.903.734.734 1.555 1.073 2.618 1.215 1.262.171 1.639.183 5.12.183 3.481 0 3.858-.012 5.12-.183 1.063-.142 1.884-.481 2.618-1.215.555-.635 1.11-1.45 1.185-2.903.012-1.349.023-1.686.023-6.816 0-5.13-.012-5.467-.023-6.816-.075-1.453-.63-2.268-1.185-2.903-.734-.734-1.555-1.073-2.618-1.215C15.858.012 15.481 0 12 0zm0 5.844A6.16 6.16 0 1 0 18.16 12 6.161 6.161 0 0 0 12 5.844zm0 10.31A4.154 4.154 0 1 1 16.154 12 4.158 4.158 0 0 1 12 16.154zM17.485 6.515a1.5 1.5 0 1 0-1.5-1.5 1.5 1.5 0 0 0 1.5 1.5z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p className="text-gray-300">© {new Date().getFullYear()} GAMCS All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
