"use client";

import {
    Send,
    CreditCard,
    Wallet,
    Smartphone,
    FileText,
    MoreHorizontal,
} from "lucide-react";

const services = [
    { label: "سایر خدمات", icon: MoreHorizontal },
    { label: "کارت به کارت", icon: Send },
    { label: "مانده کارت", icon: CreditCard },
    { label: "انتقال پول", icon: Wallet },

    { label: "خرید شارژ", icon: Smartphone },
    { label: "پرداخت قبض", icon: FileText },

];

export default function QuickServices() {
    return (
        <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3 px-1 text-right">خدمات پرکاربرد</h3>

            {/* گرید خدمات */}
            <div
                className="
      grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6
      gap-3 sm:gap-4
      justify-items-center content-center
    "
            >
                {services.map(({ label, icon: Icon }) => (
                    <button
                        key={label}
                        className="
          flex flex-col items-center justify-center
          bg-gray-50 border border-gray-200
          rounded-2xl
          w-24 h-24  /* مربعی و اندازه ثابت */
          shadow-sm hover:shadow-md
          transition-all duration-300
          hover:bg-green-50
          focus:outline-none group
        "
                    >
                        <div
                            className="
            w-12 h-12
            flex items-center justify-center

            text-green-600
            mb-2


          "
                        >
                            <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-green-700 text-center">
          {label}
        </span>
                    </button>
                ))}
            </div>
        </div>

    );
}
