import React from 'react';

export default function AboutUsSectionNavigations1() {
    return (
        <React.Fragment>
            <>
                <section>
  <nav>
    <div className="container mx-auto px-4">
      <div className="flex h-24 items-center">
        <a className="inline-block" href="#">
          <img className="h-5" src="https://static.shuffle.dev/uploads/files/17/17f96f3b3d93cba2c16bf0b17ff6c2e0c13385c4/comfyhomz.svg" alt="" />
        </a>
        <button className="lg:hidden navbar-burger py-1 ml-auto">
          <svg width={44} height={16} viewBox="0 0 44 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width={44} height={2} rx={1} fill="black" /><rect y={14} width={44} height={2} rx={1} fill="black" /></svg>
        </button>
        <div className="hidden lg:flex ml-auto mr-12 items-center">
          <a className="inline-block hover:underline mr-10" href="about_us.html">About</a><a className="inline-block hover:underline mr-10" href="#">Services</a><a className="inline-block hover:underline" href="#">Contact us</a>
        </div>
        <a className="group hidden lg:inline-flex py-4 px-8 items-center justify-center leading-none font-medium text-black hover:text-white border border-black rounded-full hover:bg-black transition duration-200" href="#">
          <span className="mr-2">Get consulation</span>
          <span className="group-hover:rotate-45 transform transition duration-100">
            <svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1L1 9" stroke="currentColor" strokeWidth="1.3" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 8.33571V1H1.66429" stroke="currentColor" strokeWidth="1.3" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  </nav>
  <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50">
    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-50" />
    <nav className="relative flex flex-col py-6 px-10 w-full h-full bg-white overflow-y-auto">
      <div className="flex mb-auto items-center">
        <a className="inline-block mr-auto" href="#">
          <img className="h-4" src="asitrastudio-assets/logos/logo-asi.svg" alt="" />
        </a>
        <a className="navbar-close" href="#">
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6L18 18" stroke="#111827" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
      <div className="py-12 mb-auto">
        <ul className="flex-col">
          <li className="mb-6"><a className="inline-block hover:underline text-black" href="#">About</a></li>
          <li className="mb-6"><a className="inline-block hover:underline text-black" href="#">Services</a></li>
          <li className="mb-6"><a className="inline-block hover:underline text-black" href="#">Projects</a></li>
          <li><a className="inline-block hover:underline text-black" href="#">Contact us</a></li>
        </ul>
      </div>
      <div>
        <a className="block mb-3 px-4 py-4 text-center font-medium text-black hover:text-white border border-black hover:bg-black rounded-full transition duration-200" href="#">Login</a><a className="block px-4 py-4 text-center font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200" href="#">Sign in</a>
      </div>
    </nav>
  </div>
</section>


            </>
        </React.Fragment>
    );
}

