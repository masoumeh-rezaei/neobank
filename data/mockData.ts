import { Account, Transaction, Wallet, User } from "@/types/neobank";

export const mockUser: User = {
    id: "usr-001",
    fullName: "علی رضایی",
    nationalId: "1234567890",
    phone: "09123456789",
    email: "ali.rezaei@example.com",
    profileImage: "/images/profile.png",
    joinedAt: "1401/04/10",
    level: "طلایی",
};

export const mockAccounts: Account[] = [
    {
        id: "acc-001",
        name: "کارآمَد",
        bankName: "بانک صادرات ایران",
        accountType: "حساب درآمد ویژه",
        interestRate: " ۲۶٪ ",
        balance: 28500000,
        currency: "ریال",
        cardNumber: "6037-9912-1234-5678",
        status: "فعال",
        createdAt: "1402/07/15",
    },
    {
        id: "acc-002",
        name: "سرمایه طلایی",
        bankName: "بانک ملت",
        accountType: "حساب سرمایه‌گذاری کوتاه‌مدت",
        interestRate: "۲۲٪",
        balance: 17850000,
        currency: "ریال",
        cardNumber: "6104-3310-8765-4321",
        status: "فعال",
        createdAt: "1403/02/05",
    },
];
export const mockTransactions: Transaction[] = [
    {
        id: "tr-1001",
        type: "واریز",
        amount: 5000000,
        date: "1403/07/28",
        time: "10:15",
        description: "واریز سود ماهانه",
        balanceAfter: 28500000,
    },
    {
        id: "tr-1002",
        type: "خرید",
        amount: -1500000,
        date: "1403/07/25",
        time: "17:42",
        description: "خرید اینترنتی دیجی‌کالا",
        balanceAfter: 23500000,
    },
    {
        id: "tr-1003",
        type: "انتقال وجه",
        amount: -2000000,
        date: "1403/07/21",
        time: "09:20",
        description: "انتقال به حساب شخصی",
        balanceAfter: 25000000,
    },
];

export const mockWallets: Wallet[] = [
    {
        id: "wlt-01",
        name: "صندوق کوتاه‌مدت",
        balance: 8500000,
        interest: "۲۴٪",
        type: "کوتاه‌مدت",
        status: "فعال",
    },
    {
        id: "wlt-02",
        name: "صندوق بلندمدت",
        balance: 15000000,
        interest: "۳۰٪",
        type: "بلندمدت",
        status: "در حال سپرده‌گذاری",
    },
    {
        id: "wlt-03",
        name: "صندوق ارزی",
        balance: 200,
        interest: "۱۵٪",
        type: "ارزی (دلار)",
        status: "فعال",
    },
];
