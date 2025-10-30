"use client";

import { HeartHandshake } from "lucide-react";

export default function PromoBanner() {
    return (
        <div
            className="
        flex items-center justify-between
        bg-gradient-to-br from-emerald-800 via-green-700 to-emerald-600
        text-white p-4 rounded-2xl shadow-md
        mt-6 mx-1
      "
        >
            {/* متن بنر */}
            <div className="flex flex-col">
                <span className="text-lg font-bold">در اوج مهربانی 💚</span>
                <span className="text-sm opacity-90 mt-1">
          کارمزد ویژه ۰٪ ، ۲٪ ، ۳٪ برای کاربران فعال
        </span>
            </div>

            {/* آیکون سمت راست */}
            <div
                className="
          bg-white/20 p-3 rounded-xl
          flex items-center justify-center
          backdrop-blur-sm
          hover:bg-white/30 transition-all duration-300
        "
            >
                <HeartHandshake className="w-7 h-7 text-white" />
            </div>
        </div>
    );
}
