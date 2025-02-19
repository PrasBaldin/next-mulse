import { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";

import IconEN from "../assets/icon/iconEN";
import IconID from "../assets/icon/iconID";

import "./navbar.css";

const ToggleLanguageMobile = () => {
    // const { i18n } = useTranslation();
    // const isEnglish = i18n.language === "en";

    // const toggleLanguage = () => {
    //     i18n.changeLanguage(isEnglish ? "id" : "en");
    // };

    const [isEnglish] = useState(true);

    useEffect(() => {
        localStorage.setItem('language', isEnglish ? 'en' : 'id');
    }, [isEnglish]);

    return (
        <button className="btn flex items-center gap-2" >
            <span className="font-medium text-gray-700 dark:text-gray-300">
                {isEnglish ? <IconEN /> : <IconID />}
            </span>
            <span className="text-gray-700 dark:text-gray-300">
                {("navbar.changeLang")}
            </span>
        </button>
    )
}

export default ToggleLanguageMobile