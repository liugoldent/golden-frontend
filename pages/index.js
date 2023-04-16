import Image from "next/image";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRouter } from "next/router";
import Modal from "react-modal";

import AlertModal from "@/components/AlertModal";
import AnimatedIcon from "@/components/AnimatedIcon";
const inter = Inter({ subsets: ["latin"] });
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#__next');

export default function Home() {
  const router = useRouter();
  const [pwd, setPwd] = useState(" ");
  const [modalIsOpen, setIsOpen] = useState(false);

  // 修改pwd欄位
  const handlePwdChange = (event) => {
    setPwd(event.target.value);
  };
  const handleGoSetCode = () => {
    if (pwd === "capital") {
      router.push("/capitalCode");
    } else {
      console.log("請輸入密碼");
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Go ahead Stock&nbsp;
        </p>
        {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          By Guan-Ting Liu
        </div> */}
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <AnimatedIcon />
      </div>

      <div className=" flex text-center lg:flex-row md:flex-col sm:flex-col lg:mb-0 lg:grid-cols-4 lg:text-left indexFooter">
        <div
          className="grow flex flex-col	group rounded-lg border px-5 py-4 transition-colors hover:border-red-300 hover:bg-gray-100 hover:dark:border-red-300 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`${inter.className} mb-3 text-2xl text-center font-semibold`}
          >
            修改監測參數{" "}
          </h2>
          <div className="flex align-center">
            <input
              type="password"
              value={pwd}
              onChange={handlePwdChange}
              className={`${inter.className} rounded-lg m-0 max-w-[30ch] text-sm text-black pl-2 pr-2`}
            />
            <FontAwesomeIcon
              onClick={handleGoSetCode}
              className="font-serif text-1xl ml-2"
              icon={faArrowRight}
            />
          </div>
        </div>

        {/* <div
          className="flex justify-center align-center grow group rounded-lg border px-5 py-4 transition-colors hover:border-red-300 hover:bg-gray-100 hover:dark:border-red-300 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} text-2xl font-semibold`}>
            Ptt Stock{" "}
          </h2>
        </div> */}

        {/* <div
          className="group rounded-lg border  px-5 py-4 transition-colors hover:border-red-300 hover:bg-gray-100 hover:dark:border-red-300 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} text-2xl font-semibold`}>
            Wantgoo{" "}
          </h2>
        </div> */}
      </div>
      <Modal isOpen={modalIsOpen}>
        A
      </Modal>
    </main>
  );
}
