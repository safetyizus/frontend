import { createContext, useContext, useState } from "react";

export const InterfaceContext = createContext();

export const InterfaceProvider = (props) => {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => setShowNav(!showNav);
    const openNav = () => setShowNav(true);
    const closeNav = () => setShowNav(false);

    const initialValue = {
        showNav,
        toggleNav,
        openNav,
        closeNav,
    };

    return <InterfaceContext.Provider value={initialValue} {...props} />;
};

export const useInterface = () => {
    const context = useContext(InterfaceContext);
    return context;
};
