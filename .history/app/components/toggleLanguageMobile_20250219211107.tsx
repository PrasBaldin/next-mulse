import React from 'react';

import IconEN from "../assets/icon/iconEN";
import IconID from "../assets/icon/iconID";

import "./navbar.css";
const ToggleLanguageMobile = () => {
    return (
        <button onClick={toggleLanguage} className="btn flex items-center gap-2" >
            <span className="font-medium text-gray-700 dark:text-gray-300">
                {isEnglish ? <IconEN /> : <IconID />}
            </span>
            <span className="text-gray-700 dark:text-gray-300">
                {t("navbar.changeLang")}
            </span>
        </button>
    )
}

export default ToggleLanguageMobile