import React from 'react'

const ToggleLanguage = () => {
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