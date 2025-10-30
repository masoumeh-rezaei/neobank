"use client";

import { useState } from "react";
import {Bell, Menu, X} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [open, setOpen] = useState(false);

    const menus = ["تراکنش", "برداشت", "موجودی", "خرید"];

    return (
        <header className="w-full! bg-white shadow-md fixed top-0 right-0 z-50">
            <div className=" mx-auto flex justify-between items-center px-4 py-3">



                {/* desktop menue */}
                <nav className="hidden md:flex space-x-6 space-x-reverse text-gray-700">
                    {menus.map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="hover:text-blue-600 transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </nav>


                {/* mobile button */}
               <div className={' '}>
                   <button
                       onClick={() => setOpen(true)}
                       className="md:hidden text-gray-700 hover:text-blue-600"
                       aria-label="menu"
                   >
                       <Menu  className={'w-7 h-7 bg-gray-100 p-1 rounded-md border border-gray-200'} />
                   </button>
                   <button className="md:hidden text-gray-700 hover:text-blue-600 relative "> <Bell className="w-7 h-7 text-gray-600 ml-3 bg-gray-100 p-1 rounded-md border border-gray-200" /> <span className="absolute top-1 right-1 bg-red-500 w-2 h-2 rounded-full" />
                   </button>
               </div>
                <div className="text-xl font-bold text-blue-700 ">حساب درآمد ویژه</div>
            </div>

            {/* mobile menue */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* bg */}
                        <motion.div
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                        />

                        {/* menue */}
                        <motion.div
                            className="fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg p-5"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "tween" }}
                        >
                            <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-semibold text-blue-700">
                  منو
                </span>
                                <button onClick={() => setOpen(false)}>
                                    <X size={24} className="text-gray-700 hover:text-red-500" />
                                </button>
                            </div>

                            <nav className="flex flex-col space-y-4 text-gray-700">
                                {menus.map((item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        onClick={() => setOpen(false)}
                                        className="hover:text-blue-600 transition-colors"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
