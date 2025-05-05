'use client';
import { createContext, useState } from "react";

export const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    console.log({menuOpen});
    setMenuOpen((prev) => !prev);
  };
  return (
    <MenuContext.Provider value={{ menuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
