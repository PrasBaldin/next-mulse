import React from 'react'
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import IconEN from "../assets/icon/iconEN";
import IconID from "../assets/icon/iconID";

const ToggleLanguage = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);
    const [flag, setFlag] = useState(enFlag);
    const [loading, isLoading] = useState(false);

    const toggleLanguage = () => {
        const newLanguage = language === 'en' ? 'id' : 'en';
        setLanguage(newLanguage);
        i18n.changeLanguage(newLanguage);
        const newFlag = language === 'en' ? idFlag : enFlag;
        const img = new Image();
        img.src = newFlag;
        img.onload = () => {
            setFlag(newFlag);
            isLoading(false);
        };
    };

    return (
        <button onClick={toggleLanguage} className="btn w-11 h-11 relative overflow-hidden">
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