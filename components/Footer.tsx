"use client";

import { Home, PiggyBank, Wallet2 } from "lucide-react";

export default function FooterNav() {
    return (
        <div
            className="
        fixed bottom-0 left-0 right-0
        bg-white border-t border-gray-200
        shadow-[0_-2px_10px_rgba(0,0,0,0.05)]
        flex justify-around items-center
        py-2
        text-sm font-medium
        z-50
      "
        >
            {/* خانه (active) */}
            <button
                className="
    relative flex flex-col items-center justify-center
    text-green-600
    before:content-['']
    before:absolute before:bottom-14
    before:h-[3px]   before:bg-green-600
    before:rounded-full before:w-25
  "
            >
                <Home className="w-6 h-6 mb-1" />
                <span>خانه</span>
            </button>


            {/* صندوق‌ها */}
            <button
                className="
          flex flex-col items-center justify-center
          text-gray-500 hover:text-green-600 transition-all
          pt-1
        "
            >
                <PiggyBank className="w-6 h-6 mb-1" />
                <span>صندوق‌ها</span>
            </button>

            {/* سرمایه من */}
            <button
                className="
          flex flex-col items-center justify-center
          text-gray-500 hover:text-green-600 transition-all
          pt-1
        "
            >
                <Wallet2 className="w-6 h-6 mb-1" />
                <span>سرمایه من</span>
            </button>
        </div>
    );
}
