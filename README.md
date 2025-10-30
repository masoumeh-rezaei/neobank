# Neobank PWA

یک داشبورد مدرن برای نئوبانک با **Next.js + TypeScript + TailwindCSS + PWA**  
طراحی شده برای نمایش حساب‌ها، خدمات بانکی و تراکنش‌ها با داده‌های ماک.

---

## 🚀 ویژگی‌ها
- ⚡ ساخته‌شده با **Next.js 16 + TypeScript**
- 📱 کاملاً **PWA** (قابل نصب و آفلاین)
- 🎨 طراحی با **TailwindCSS + ShadCN/UI**
- 💾 داده‌های ماک بدون لاجیک بک‌اند
- 🔤 فونت فارسی **Vazirmatn** با `next/font/local`
- 💳 کارت‌های واکنش‌گرا و اسکرول‌پذیر در موبایل

---

PWA Setup

این پروژه از پکیج @ducanh2912/next-pwa برای فعال‌سازی PWA استفاده می‌کند.
فایل‌های مربوطه شامل:

next.config.ts

public/manifest.json

public/sw.js 

برای ساخت نسخه‌ی production:

npm run build -- --turbopack
npm start


## 🧰 نصب و اجرا
```bash
git clone https://github.com/USERNAME/neobank-pwa.git
cd neobank-pwa
npm install
npm run dev
