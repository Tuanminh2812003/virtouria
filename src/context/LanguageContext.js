import { createContext, useState, useEffect } from "react";

// Tạo Context
export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("EN"); 

    // Lấy ngôn ngữ từ localStorage khi load trang
    useEffect(() => {
        const savedLanguage = localStorage.getItem("language");
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);

    // Hàm thay đổi ngôn ngữ và lưu vào localStorage
    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem("language", lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}
