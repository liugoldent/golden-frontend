import React, { useState, useEffect } from "react";

export default function CapitalCode() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${process.env.API_BASE_URL}/stock/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="bg-black flex justify-center items-center min-h-screen">
      <div className="flex flex-col w-2/4">
        {/* 多方input */}
        <div className="relative flex h-10 w-full flex-row-reverse overflow-clip rounded-lg">
          <input
            className="peer w-4/5 rounded-r-lg border border-slate-400 px-2 text-slate-900 placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none"
            type="text"
            name="domain"
            id="domain"
            placeholder="請輸入股票代號"
          />
          <label
            className="flex justify-center items-center text-center w-1/5 rounded-l-lg border border-slate-400 bg-slate-50 px-2 text-sm text-slate-400 transition-colors duration-300 peer-focus:border-red-400 peer-focus:bg-red-400 peer-focus:text-white"
            htmlFor="domain"
          >
            多 {message}
          </label>
        </div>
        <button className="group self-end	rounded-2xl mt-2 h-10 lg:w-1/5 sm:w-full md:w-full bg-red-500 font-bold text-lg text-white relative overflow-hidden">
          更新多方!
          <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
        </button>

        {/* 更新空方 */}
        <div className="relative flex h-10 w-full flex-row-reverse overflow-clip rounded-lg mt-4">
          <input
            className="peer w-4/5 rounded-r-lg border border-slate-400 px-2 text-white-900 placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none "
            type="text"
            name="domain"
            id="domain2"
            placeholder="請輸入股票代號"
          />
          <label
            className="flex justify-center items-center w-1/5 rounded-l-lg border border-slate-400 bg-slate-50 px-2 text-sm text-slate-400 transition-colors duration-300 peer-focus:border-green-400 peer-focus:bg-green-400 peer-focus:text-white"
            htmlFor="domain2"
          >
            空
          </label>
        </div>
        <button className="group self-end mt-2 rounded-2xl h-10 lg:w-1/5 sm:w-full md:w-full bg-green-500 font-bold text-lg text-white overflow-hidden">
          更新空方!
          <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
        </button>

        <div className="mt-4 flex flex-col justify-end items-end">
          <button className="group rounded-2xl mb-2 h-12 w-48 bg-blue-500 font-bold text-lg text-white relative overflow-hidden">
            監測開始
            <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
          </button>
          <button className="group rounded-2xl h-12 w-48 bg-blue-500 font-bold text-lg text-white relative overflow-hidden">
            監測結束
            <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
