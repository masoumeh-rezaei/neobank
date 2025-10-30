export type Account = {
    id: string;
    name: string;
    bankName: string;
    accountType: string;
    interestRate: string;
    balance: number;
    currency: string;
    cardNumber: string;
    status: string;
    createdAt: string;
};

export type Transaction = {
    id: string;
    type: "واریز" | "خرید" | "انتقال وجه";
    amount: number;
    date: string;
    time: string;
    description: string;
    balanceAfter: number;
};

export type Wallet = {
    id: string;
    name: string;
    balance: number;
    interest: string;
    type: string;
    status: string;
};

export type User = {
    id: string;
    fullName: string;
    nationalId: string;
    phone: string;
    email: string;
    profileImage: string;
    joinedAt: string;
    level: string;
};
