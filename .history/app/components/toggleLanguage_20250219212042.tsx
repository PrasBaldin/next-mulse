import { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";

import IconEN from "../assets/icon/iconEN";
import IconID from "../assets/icon/iconID";

import "./toggleLanguage.css";

const ToggleLanguage = () => {
    // const { i18n } = useTranslation();
    // const isEnglish = i18n.language === "en";

    // const toggleLanguage = () => {
    //     i18n.changeLanguage(isEnglish ? "id" : "en");
    // };

    const [isEnglish] = useState(true);

    useEffect(() => {
        localStorage.setItem('language', isEnglish ? 'id' : 'en');
    }, [isEnglish]);

    return (
        <button className="btn w-11 h-11 relative overflow-hidden">
            <div className={`toggle-change-lang ${isEnglish ? 'opacity-100 scale-1' : 'opacity-0 scale-0'}`} >
                <IconEN />
            </div>
            <div className={`toggle-change-lang ${isEnglish ? 'opacity-0 scale-0' : 'opacity-100 scale-1'}`} >
                <IconID />
            </div>
        </button>
    )
}

export default ToggleLanguage