export const formatCurrency = (value: number, currency = "ریال") => {

    return `${currency}\u200E ${new Intl.NumberFormat("fa-IR").format(value)}`;
};



export const formatDate = (date: string) => {
    return date.replaceAll("-", "/");
};
