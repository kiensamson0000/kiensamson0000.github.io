import Image from "next/image";
import { useState } from "react";
import Menu from "@/components/common/menu";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <header className="w-full fixed top-0 py-8 select-none z-50 bg-gradient-to-b from-gray-900 to-transparent">
      <div className="flex justify-between section-container">
        <a href="#home" className="link">
          <Image
            src="/logo.svg"
            alt="Logo - Kien Khuat"
            width={22}
            height={22}
          />
        </a>
        <nav className={`outer-menu ${menuVisible ? "menu-visible" : ""}`}>
          <button
            className="hamburger w-6 h-6 flex items-center justify-center link relative"
            onClick={setMenuVisible.bind(null, !menuVisible)}
          >
            <div className="relative flex-none w-full bg-white duration-300 flex items-center justify-center"></div>
          </button>
          <Menu setMenuVisible={setMenuVisible} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
