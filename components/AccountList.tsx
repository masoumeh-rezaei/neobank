"use client";

import React, { useRef, useState } from "react";
import { mockAccounts } from "@/data/mockData";
import AccountCard from "./AccountCard";
import { motion } from "framer-motion";

export default function AccountList() {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // 🎯 کنترل اسکرول برای کلیک روی دایره‌ها
    const scrollToCard = (index: number) => {
        if (!scrollContainerRef.current) return;
        const container = scrollContainerRef.current;
        const cardWidth = container.clientWidth;
        container.scrollTo({
            left: cardWidth * index,
            behavior: "smooth",
        });
    };

    // 🎯 تشخیص کارت فعال هنگام اسکرول
    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const scrollLeft = e.currentTarget.scrollLeft;
        const cardWidth = e.currentTarget.clientWidth;
        const index = Math.round(scrollLeft / cardWidth);
        setActiveIndex(index);
    };

    return (
        <section className="relative mt-4">
            {/* کارت‌ها */}
            <div
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="
          flex gap-4 overflow-x-auto snap-x snap-mandatory
          no-scrollbar md:grid md:grid-cols-2 md:gap-6 md:overflow-visible
          scroll-smooth
        "
            >
                {mockAccounts.map((acc, ) => (
                    <div
                        key={acc.id}
                        className="
              snap-start flex-shrink-0 w-[92%] sm:w-[400px] md:w-auto
            "
                    >
                        <AccountCard account={acc} />
                    </div>
                ))}
            </div>

            {/* دایره‌های اندیکاتور */}
            <div className="flex justify-center gap-2 mt-3 md:hidden">
                {mockAccounts.map((_, i) => (
                    <motion.button
                        key={i}
                        onClick={() => scrollToCard(i)}
                        animate={{
                            scale: i === activeIndex ? 1.3 : 1,
                            opacity: i === activeIndex ? 1 : 0.4,
                        }}
                        className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${i === activeIndex ? "bg-green-700" : "bg-gray-400"}
            `}
                    />
                ))}
            </div>
        </section>
    );
}
