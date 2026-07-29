<div align="center">

# 🎮 Binary Game

### بازی آموزشی تبدیل اعداد ده‌دهی به باینری با React Native و Expo

<p align="center">
  <img src="https://img.shields.io/badge/React%20Native-Latest-61DAFB?style=for-the-badge&logo=react">
  <img src="https://img.shields.io/badge/Expo-SDK%2057-000020?style=for-the-badge&logo=expo">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript">
  <img src="https://img.shields.io/badge/Game-Educational-success?style=for-the-badge">
  <img src="https://img.shields.io/badge/Platform-Android%20%7C%20iOS-success?style=for-the-badge">
</p>

> یک بازی آموزشی و سرگرم‌کننده برای یادگیری سیستم اعداد باینری که با **React Native** و **Expo** توسعه داده شده است.

</div>

---

## 📖 معرفی پروژه

**Binary Game** یک بازی آموزشی برای تقویت مهارت تبدیل اعداد **Decimal (ده‌دهی)** به **Binary (باینری)** است.

در این بازی، یک عدد تصادفی بین 1 تا 255 به کاربر نمایش داده می‌شود و کاربر باید با روشن و خاموش کردن بیت‌ها، مقدار باینری صحیح آن عدد را پیدا کند.

هدف پروژه، آموزش مفاهیم پایه کامپیوتر مانند:

- سیستم اعداد دودویی
- بیت و بایت
- تبدیل Decimal به Binary
- منطق برنامه‌نویسی
- مدیریت State در React Native

است.

---

## ✨ امکانات

| ویژگی | وضعیت |
|--------|--------|
| بازی تبدیل Decimal به Binary | ✅ |
| تولید عدد تصادفی | ✅ |
| سیستم امتیازدهی | ✅ |
| تایمر ۱۵ ثانه‌ای | ✅ |
| انتخاب بیت‌ها با لمس کاربر | ✅ |
| بررسی پاسخ لحظه‌ای | ✅ |
| صفحه پایان بازی | ✅ |
| امکان شروع دوباره بازی | ✅ |
| رابط کاربری مدرن Dark Mode | ✅ |
| طراحی Responsive | ✅ |

---

## 🎮 نحوه بازی

۱. یک عدد Decimal به شما نمایش داده می‌شود.

مثال:

```
Target Number: 25
```

۲. باید بیت‌های مناسب را فعال کنید.

```
16 + 8 + 1 = 25
```

۳. اگر مقدار ساخته شده درست باشد:

```
+10 Score
```

دریافت می‌کنید.

۴. اگر زمان تمام شود، بازی به پایان می‌رسد.

---

## 🧮 سیستم باینری در بازی

هر بیت دارای یک مقدار مشخص است:

```
128 64 32 16 8 4 2 1
```

مثال:

عدد 13:

```
8 + 4 + 1

Binary:

00001101
```

---

## 🛠 تکنولوژی‌های استفاده شده

- **React Native**
- **Expo SDK 57**
- **JavaScript**
- **React Hooks**
- **useState**
- **useEffect**
- **StyleSheet**
- **Expo Vector Icons**

---

## 📂 ساختار پروژه

```text
bi

├── src

│── app
│   └── App.jsx

├── components
│   ├── Header.jsx
│   ├── GameStats.jsx
│   ├── TargetCard.jsx
│   ├── BitGrid.jsx
│   └── GameOver.jsx

├── constants
│   └── game.js

├── assets

├── package.json

└── README.md
```

---

## 🧩 کامپوننت‌های پروژه

| Component | توضیح |
|------------|-------|
| App.jsx | مدیریت منطق اصلی بازی |
| Header | عنوان بازی |
| GameStats | نمایش امتیاز و زمان |
| TargetCard | نمایش عدد هدف و مقدار فعلی |
| BitGrid | نمایش بیت‌ها |
| GameOver | صفحه پایان بازی |

---

## 🚀 ساخت پروژه جدید

برای ساخت پروژه جدید Expo:

```bash
npx create-expo-app@latest
```

یا:

```bash
npx create-expo-app@latest bi
```

ورود به پروژه:

```bash
cd bi
```

---

## 💻 پیش‌نیازهای نصب

قبل از اجرای پروژه موارد زیر باید نصب باشند:

- [ ] Node.js (LTS)
- [ ] npm
- [ ] Git
- [ ] Visual Studio Code
- [ ] Android Studio
- [ ] Android SDK
- [ ] Java JDK
- [ ] Expo Go

---

## ⚙ راه‌اندازی محیط توسعه

برای نصب صحیح React Native از مستندات رسمی استفاده کنید:

🔗 [https://reactnative.dev/docs/set-up-your-environment](https://reactnative.dev/docs/set-up-your-environment)

در این مستند نحوه نصب موارد زیر توضیح داده شده است:

- Android Studio
- Android SDK
- Java JDK
- Environment Variables
- Android Emulator
- اجرای پروژه روی موبایل

---

## 📥 دانلود Android Studio

در صورت مشکل در دانلود Android Studio می‌توانید از لینک زیر استفاده کنید.

🔗 [https://soft98.ir/mobile/16739-android-studio.html](https://soft98.ir/mobile/16739-android-studio.html)

---

## 📦 دانلود آفلاین Android SDK

اگر هنگام دانلود Emulator یا System Image با مشکل مواجه شدید:

🔗 [https://androidsdkoffline.blogspot.com/p/android-sysimg-gapi-playstore-ia-x64.html?m=1](https://androidsdkoffline.blogspot.com/p/android-sysimg-gapi-playstore-ia-x64.html?m=1)

---

## ⚡ نصب وابستگی‌ها

```bash
npm install
```

---

## ▶ اجرای پروژه

### شروع Expo

```bash
npx expo start
```

### اجرای اندروید

```bash
npx expo run:android
```

### اجرای iOS

```bash
npx expo run:ios
```

### پاک کردن Cache

```bash
npx expo start -c
```

---

## 📱 اجرای روی موبایل

۱. برنامه **Expo Go** را نصب کنید.

۲. سرور Expo را اجرا کنید:

```bash
npx expo start
```

۳. QR Code را با **Expo Go** اسکن کنید.

---

## 📦 دستورات کاربردی

### بررسی نسخه Node

```bash
node -v
```

### بررسی نسخه npm

```bash
npm -v
```

### بررسی نسخه Expo

```bash
npx expo --version
```

### نصب پکیج

```bash
npm install package-name
```

### نصب پکیج مخصوص Expo

```bash
npx expo install package-name
```

---

## 🎯 اهداف آموزشی پروژه

در این پروژه با مفاهیم زیر آشنا می‌شوید:

- React Native
- Expo
- Component
- Props
- State
- useState
- useEffect
- مدیریت تایمر
- Event Handling
- Array Manipulation
- reduce()
- Conditional Rendering
- طراحی UI بازی
- مدیریت وضعیت بازی
- ساخت کامپوننت‌های قابل استفاده مجدد

---

## 🚀 توسعه‌های آینده

- [ ] 🏆 جدول امتیازات
- [ ] 🔥 سیستم Level
- [ ] 🎵 افکت صوتی
- [ ] 🎨 انیمیشن بیت‌ها
- [ ] 🌙 Dark / Light Mode
- [ ] 🧠 سوالات سخت‌تر
- [ ] ⏱ حالت سرعتی
- [ ] 👥 حالت چندنفره
- [ ] 📊 ذخیره رکوردها

---

## ❗ رفع مشکلات متداول

### بازی اجرا نمی‌شود

کش Expo را پاک کنید:

```bash
npx expo start -c
```

### نصب پکیج‌ها مشکل دارد

```bash
npm install
```

یا:

```bash
rm -rf node_modules
npm install
```

### Emulator اجرا نمی‌شود

بررسی کنید:

- ✅ Virtualization فعال باشد
- ✅ Android SDK نصب باشد
- ✅ Java JDK نصب باشد
- ✅ Emulator ساخته شده باشد
- ✅ در صورت مشکل از Android SDK Offline استفاده کنید

---

## 📚 منابع آموزشی

### مستندات React Native

🔗 [https://reactnative.dev/docs](https://reactnative.dev/docs)

### راه‌اندازی محیط توسعه

🔗 [https://reactnative.dev/docs/set-up-your-environment](https://reactnative.dev/docs/set-up-your-environment)

### مستندات Expo

🔗 [https://docs.expo.dev](https://docs.expo.dev)

---

## 🤝 مشارکت

اگر ایده‌ای برای بهتر شدن بازی دارید، می‌توانید پروژه را **Fork** کرده و **Pull Request** ارسال کنید.

---

## 📄 لایسنس

این پروژه تحت لایسنس **MIT** منتشر شده است.

---

<div align="center">

⭐ اگر این پروژه برای شما مفید بود، لطفاً آن را **Star** کنید.

ساخته شده با ❤️ توسط **React Native + Expo**

</div>
