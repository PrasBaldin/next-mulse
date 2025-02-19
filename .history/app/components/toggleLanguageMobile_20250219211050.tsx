import React from 'react'

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