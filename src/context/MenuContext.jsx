import { createContext, useState } from "react";

export const MenuContext = createContext();


export const MenuProvider = ({children}) => {
  const [menubar, setMenubar] = useState(true);
  return <MenuContext.Provider value={{menubar, setMenubar}}>
    {children}
  </MenuContext.Provider>
}