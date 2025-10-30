"use client";

import { Account } from "@/types/neobank";
import { formatCurrency } from "@/utils/formatters";
import { CreditCard } from "lucide-react";

interface Props {
    account: Account;
}

export default function AccountCard({ account }: Props) {
    return (
        <div
            className="
        relative overflow-hidden
        bg-gradient-to-br from-emerald-800 via-green-700 to-emerald-600
        text-white rounded-2xl p-6 shadow-lg
        min-w-[92%] sm:min-w-[420px] md:min-w-0
        h-[240px] sm:h-[260px]
        flex flex-col justify-between
        transition-transform duration-300
      "
        >
            {/* لایه نوری برای جلوه کارت */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20 opacity-20 pointer-events-none" />

            {/* بالای کارت */}
            <div className="flex justify-between items-start relative z-10">
                <div>
                    <p className="text-xs text-emerald-100">{account.bankName}</p>
                    <h2 className="font-bold text-lg mt-1">{account.name}</h2>

                </div>
                <CreditCard className="w-8 h-8 opacity-70" />
            </div>

            {/* وسط: شماره کارت و نام دارنده */}
            <div className="relative z-10 text-center mt-4">
                <p className="text- text-emerald-200 mt-1">{account.accountType}</p>
                <p className="font-mono tracking-widest text-lg sm:text-xl select-none">
                    {account.cardNumber}
                </p>
                {/* اسم دارنده کارت */}

            </div>

            {/* پایین کارت: نرخ سود و موجودی */}
            <div className="relative z-10 flex justify-between items-end text-sm border-t border-white/20 pt-3">
                {/* سمت چپ: اعداد */}
                <div className="flex flex-col items-start space-y-2">
                    <p className="font-semibold text-base">

                        {formatCurrency(account.balance)}

                    </p>
                    <p className="font-semibold">  {account.interestRate} </p>
                </div>

                {/* سمت راست: عناوین */}
                <div className="flex flex-col items-end space-y-2 text-emerald-100 text-xs">
                    <p>موجودی</p>
                    <p>نرخ سود</p>
                </div>
            </div>
        </div>
    );
}
