import React, { useState, useEffect, useDeferredValue } from "react";
console.log(process.env.API_BASE_URL)
export default function CapitalCode() {
  const [bullCode, setBullCode] = useState('');
  const [bearCode, setBearCode] = useState('');
  const [dbBullCode, setDbBullCode] = useState([])
  const [dbBearCode, setDbBearCode] = useState([])
  useEffect(() => {
    // 在組件剛開始渲染時執行的函式
    const initFunc = async () => {
      setDbBullCode(await fetchCodeList('bull'))
      setDbBearCode(await fetchCodeList('bear'))
    }
    initFunc()
    // 清除副作用函式
    return () => {
      // 在組件卸載時執行的清除函式
    };
  }, []); // 第二個參數為空陣列，只在剛開始渲染時執行一次
  const fetchCodeList = async (type) => {
    const result = await fetch(`${process.env.API_BASE_URL}/stock/getBullBearCode`, {
      method: 'POST',
      body: JSON.stringify({
        collectionName: type
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.text()) // 將 Response 轉換為文字格式
      .then(text => {
        return text
      }) // 在控制台中顯示文字資料
    return result
  }

  const handleBullInputChange = (e) => {
    setBullCode(e.target.value)
  }
  const handleBearInputChange = (e) => {
    setBearCode(e.target.value)
  }
  /**
   * @description 更新code
   */
  const updateCode = async (type) => {
    try {
      let list = []
      if (type === 'bull') {
        list = bullCode.split(',')
      }
      if (type === 'bear') {
        list = bearCode.split(',')
      }
      list = list.filter(item => item.length >= 4)
      const result = await fetch(`${process.env.API_BASE_URL}/stock/updateCode`, {
        method: 'POST',
        body: JSON.stringify({
          codeArr: list,
          marketType: type
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (result.status === 200) {
        alert('修改成功')
        setBullCode('')
        setBearCode('')
        setDbBullCode(await fetchCodeList('bull'))
        setDbBearCode(await fetchCodeList('bear'))
      }
    } catch (error) {
      console.error(error.message)
    }

  };
  const startFunc = async () => {
    try {
      await fetch(`${process.env.API_BASE_URL}/stock/burstStart`, {
        method: 'POST'
      })
    } catch (error) {
      console.error(error.message)
    }
  }
  const endFunc = async () => {
    try {
      await fetch(`${process.env.API_BASE_URL}/stock/burstStop`, {
        method: 'POST'
      })
    } catch (error) {
      console.error(error.message)
    }
  }
  return (
    <div className="bg-black flex justify-center items-center min-h-screen">
      <div className="flex flex-col w-2/4">
        {/* 多方input */}
        <div className="relative flex h-10 w-full flex-row-reverse overflow-clip rounded-lg">
          <input
            value={bullCode}
            onChange={handleBullInputChange}
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
            多
          </label>
        </div>
        <button onClick={() => updateCode('bull')} className="group self-end	rounded-2xl mt-2 h-10 lg:w-1/5 sm:w-full md:w-full bg-red-500 font-bold text-lg text-white relative overflow-hidden">
          更新多方!
          <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 rounded-2xl"></div>
        </button>
        <p>目前多方資料庫代碼：{dbBullCode}</p>

        {/* 更新空方 */}
        <div className="relative flex h-10 w-full flex-row-reverse overflow-clip rounded-lg mt-4">
          <input
            value={bearCode}
            onChange={handleBearInputChange}
            className="peer w-4/5 rounded-r-lg border border-slate-400 px-2 text-slate-900 placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none "
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
        <button onClick={() => updateCode('bear')} className="group self-end mt-2 rounded-2xl h-10 lg:w-1/5 sm:w-full md:w-full bg-green-500 font-bold text-lg text-white overflow-hidden">
          更新空方!
          <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 rounded-2xl"></div>
        </button>
        <p>目前空方資料庫代碼：{dbBearCode}</p>
        {/* <div className="mt-4 flex flex-col justify-end items-end">
          <button onClick={() => startFunc()} className="group rounded-2xl mb-2 h-12 w-48 bg-blue-500 font-bold text-lg text-white relative overflow-hidden">
            監測開始
            <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
          </button>
          <button onClick={() => endFunc()} className="group rounded-2xl h-12 w-48 bg-blue-500 font-bold text-lg text-white relative overflow-hidden">
            監測結束
            <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
          </button>
        </div> */}
      </div>
    </div>
  );
}
