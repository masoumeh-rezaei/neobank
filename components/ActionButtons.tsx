"use client";

import { ShoppingCart, DollarSign, RefreshCw, Send } from "lucide-react";
import { motion } from "framer-motion";

const actions = [
    { label: "خرید", icon: ShoppingCart },
    { label: "فروش", icon: DollarSign },
    { label: "تبدیل", icon: RefreshCw },
    { label: "انتقال", icon: Send },
];

export default function ActionButtons() {
    return (
        <div
            className="
        mt-6
         rounded-2xl
        flex justify-around items-center
        py-3 sm:py-4
         border-gray-200
        transition-all duration-300
      "
        >
            {actions.map(({ label, icon: Icon }) => (
                <motion.button
                    key={label}
                    whileTap={{ scale: 0.95 }}
                    className="
            relative flex flex-col items-center gap-1
            text-gray-800 text-xs sm:text-sm font-medium
            transition-all duration-300
            group
            focus:outline-none
          "
                >
                    <div
                        className="
              relative w-10 h-10 sm:w-12 sm:h-12
              flex items-center justify-center
              rounded-xl
              shadow-sm transition-all duration-300 bg-gray-200
              overflow-hidden
            "
                    >
                        {/* آیکن */}
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 z-10 " />

                        {/*  hover */}
                        <span
                            className="
                absolute inset-0 bg-green-600/10
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
              "
                        ></span>
                    </div>

                    {/* متن */}
                    <span className="mt-1">{label}</span>
                </motion.button>
            ))}
        </div>
    );
}
