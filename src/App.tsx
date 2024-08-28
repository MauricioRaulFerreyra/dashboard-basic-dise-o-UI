import { useState } from "react";

import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiCalendar2Line,
  RiCheckboxBlankCircleFill,
  RiCheckLine,
  RiCloseLine,
  RiDashboardLine,
  RiEarthLine,
  RiLogoutCircleRLine,
  RiMenu3Fill,
  RiMessage3Line,
  RiNotification3Line,
  RiSettings3Line,
} from "react-icons/ri";

function App() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <div className="bg-[#141517]">
        {/*  SIDEBAR  */}
        <div
          className={`fixed transition-all lg:left-0 ${showMenu ? "left-0" : "-left-full"} overflow-y top-0 z-50 flex h-full w-72 flex-col justify-between bg-[#1E1F24] p-8`}
        >
          {/*  MENU */}
          <div>
            {/* LOGO */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold uppercase tracking-[4px] text-white">
                JT logo
              </h1>
            </div>
            {/*  NAV */}
            <nav>
              <a
                href="#"
                className="flex items-center gap-4 py-2 text-gray-400 transition-colors hover:text-gray-200"
              >
                <RiDashboardLine />
                Analitic
              </a>
              <a
                href="#"
                className="flex items-center gap-4 py-2 text-gray-400 transition-colors hover:text-gray-200"
              >
                <RiEarthLine />
                <span className="flex flex-1 items-center justify-between">
                  Social media <RiArrowDownSLine />{" "}
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 py-2 text-gray-400 transition-colors hover:text-gray-200"
              >
                <RiMessage3Line />
                Message
              </a>
              <a
                href="#"
                className="flex items-center gap-4 py-2 text-gray-400 transition-colors hover:text-gray-200"
              >
                <RiCalendar2Line />
                Schedule
              </a>
              <a href="#" className="flex flex-col gap-4 py-2 text-gray-200">
                <span className="flex items-center gap-4">
                  <RiSettings3Line className="text-orange-500" />
                  <div className="flex flex-1 items-center justify-between">
                    Settings
                    <RiArrowUpSLine />
                  </div>
                </span>
                <nav className="relative ml-[7px] flex list-none flex-col border-l border-gray-400">
                  <li className="relative py-2 pl-8 text-gray-300">
                    <RiCheckboxBlankCircleFill className="absolute -left-[7px] top-[50%] -translate-y-[40%] rounded-full bg-[#1E1F24] p-[4px] text-sm text-orange-500" />
                    Plan
                  </li>
                  <li className="relative py-2 pl-8 text-gray-400">
                    <RiCheckboxBlankCircleFill className="absolute -left-[7px] top-[50%] -translate-y-[40%] rounded-full bg-[#1E1F24] p-[4px] text-sm text-gray-500" />
                    Security
                  </li>
                </nav>
              </a>
            </nav>
          </div>
          {/* LOGOUT */}
          <div>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-400 transition-colors hover:text-gray-200"
            >
              <RiLogoutCircleRLine />
              Logout
            </a>
          </div>
        </div>
        {/*  Btn Menu Mobile */}
        <button
          className="fixed bottom-4 right-4 z-50 rounded-full bg-[#1E1F24] p-3 text-xl text-orange-600 ring-2 ring-gray-500 lg:hidden"
          onClick={toggleMenu}
        >
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
        {/*  Content */}
        <main className="p-8 lg:pl-80">
          {/*  Header  */}
          <header className="fixed left-0 top-0 z-30 flex w-full justify-end border-b border-gray-500 bg-[#141517] p-8">
            <ul className="flex items-center justify-center gap-4">
              <li>
                <a href="#" className="relative flex text-white">
                  <RiNotification3Line />
                  <RiCheckboxBlankCircleFill className="absolute right-0 text-[6px] text-orange-600" />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-white">
                  <img
                    src="/logo-persona.jpg"
                    alt="image"
                    className="h-7 w-7 rounded-full object-cover ring-2 ring-gray-400"
                  />
                  <span className="pb-1">Mauricio R Ferreyra</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  <RiArrowDownSLine />
                </a>
              </li>
            </ul>
          </header>
          {/*  Main Content */}
          <section className="pt-28">
            <h1 className="mb-10 text-4xl font-semibold text-gray-300">
              Plan & Pricing
            </h1>
            {/*  Plans */}
            <section className="grid grid-cols-1 gap-6 text-gray-300 md:grid-cols-2 lg:grid-cols-3">
              {/*  Card  */}
              <aside className="mb-8 rounded-2xl bg-[#1E1F24] p-8 lg:p-12">
                <div className="mb-14 flex flex-col items-center">
                  <span className="mb-4 h-14 w-14 rounded-full bg-gray-200 p-2 text-3xl">
                    😀
                  </span>
                  <h2 className="text-xl">Personal</h2>
                  <p className="mb-4 text-gray-500">
                    Perfect plan for starters
                  </p>
                  <h5 className="text-2xl font-bold uppercase tracking-[4px]">
                    Free
                  </h5>
                  <p className="mb-8 text-gray-500">For a Lifetime</p>
                  <button className="rounded-xl bg-[#141517] px-6 py-2 transition-colors hover:text-white">
                    Current plan
                  </button>
                </div>
                {/*  Futures  */}
                <ul className="flex flex-col gap-3 text-gray-400">
                  <li className="flex items-center gap-3">
                    <RiCheckLine className="pt-1 text-2xl text-green-500" />
                    <span>Detailed post analytics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <RiCheckLine className="pt-1 text-2xl text-green-500" />
                    <span>Share with 5 teams memebers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <RiCheckLine className="pt-1 text-2xl text-green-500" />
                    <span>Sync accross devices</span>
                  </li>
                  <li className="flex items-center gap-3 opacity-[.3]">
                    <RiCloseLine className="pt-1 text-2xl text-red-500" />
                    <span>Reach and impressions analytics</span>
                  </li>
                  <li className="flex items-center gap-3 opacity-[.3]">
                    <RiCloseLine className="pt-1 text-2xl text-red-500" />
                    <span>Up to 6 social profile</span>
                  </li>
                </ul>
              </aside>
              {/*  Card  */}
              <aside className="mb-8 rounded-2xl bg-[#6277dd] p-8 lg:p-12">
                <div className="mb-14 flex flex-col items-center">
                  <span className="mb-4 h-14 w-14 rounded-full bg-gray-200 p-2 text-3xl">
                    🎉
                  </span>
                  <h2 className="text-xl text-white">Professional</h2>
                  <p className="mb-4 text-gray-300">
                    For users who want to do more
                  </p>
                  <h5 className="text-2xl font-bold uppercase tracking-[4px]">
                    $99
                  </h5>
                  <p className="mb-8 text-gray-300">For a Lifetime</p>
                  <button className="rounded-xl bg-white px-6 py-2 text-gray-400 transition-colors hover:text-white">
                    Current plan
                  </button>
                </div>
                {/*  Futures  */}
                <ul className="flex flex-col gap-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <RiCheckLine className="pt-1 text-2xl text-green-400" />
                    <span>Detailed post analytics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <RiCheckLine className="pt-1 text-2xl text-green-400" />
                    <span>Share with 5 teams memebers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <RiCheckLine className="pt-1 text-2xl text-green-400" />
                    <span>Sync accross devices</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <RiCheckLine className="pt-1 text-2xl text-green-400" />
                    <span>Reach and impressions analytics</span>
                  </li>
                  <li className="flex items-center gap-3 opacity-[.3]">
                    <RiCloseLine className="pt-1 text-2xl text-red-500" />
                    <span>Up to 6 social profile</span>
                  </li>
                </ul>
              </aside>
              {/*  Card  */}
              <aside className="mb-8 rounded-2xl bg-[#1E1F24] p-8 lg:p-12">
                <div className="mb-14 flex flex-col items-center">
                  <span className="mb-4 grid h-14 w-14 place-content-center rounded-full bg-gray-200 p-2 text-3xl">
                    🔥
                  </span>
                  <h2 className="text-xl">Interprice</h2>
                  <p className="mb-4 text-gray-500">
                    Perfect plan for starters
                  </p>
                  <h5 className="text-2xl font-bold uppercase tracking-[4px]">
                    $199
                  </h5>
                  <p className="mb-8 text-gray-500">For a Lifetime</p>
                  <button className="rounded-xl bg-[#141517] px-6 py-2 transition-colors hover:text-white">
                    Current plan
                  </button>
                </div>
                {/*  Futures  */}
                <ul className="flex flex-col gap-3 text-gray-400">
                  <li className="flex items-center gap-3">
                    <RiCheckLine className="pt-1 text-2xl text-green-500" />
                    <span>Detailed post analytics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <RiCheckLine className="pt-1 text-2xl text-green-500" />
                    <span>Share with 5 teams memebers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <RiCheckLine className="pt-1 text-2xl text-green-500" />
                    <span>Sync accross devices</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <RiCheckLine className="pt-1 text-2xl text-green-500" />
                    <span>Reach and impressions analytics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <RiCheckLine className="pt-1 text-2xl text-green-500" />
                    <span>Up to 6 social profile</span>
                  </li>
                </ul>
              </aside>
            </section>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
