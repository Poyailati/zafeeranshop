import React, { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {isLogin ? "ورود راننده" : "ثبت‌نام راننده"}
        </h2>
        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="نام کامل"
              className="w-full px-4 py-2 border rounded-md"
            />
          )}
          <input
            type="tel"
            placeholder="شماره موبایل"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="password"
            placeholder="رمز عبور"
            className="w-full px-4 py-2 border rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            {isLogin ? "ورود" : "ثبت‌نام"}
          </button>
        </form>
        <p
          className="mt-4 text-center text-sm text-gray-600 cursor-pointer hover:underline"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "ثبت‌نام نکرده‌اید؟ ثبت‌نام کنید"
            : "حساب دارید؟ وارد شوید"}
        </p>
      </div>
    </div>
  );
            }
