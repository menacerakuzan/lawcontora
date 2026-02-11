'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'UA' | 'EN';

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lang, setLang] = useState<Language>('UA');

    const t = (key: string) => {
        // Simple translation helper for key branding/UI elements
        // For larger blocks, we'll use conditional rendering in components
        const translations: Record<Language, Record<string, string>> = {
            UA: {
                services: "Послуги",
                partners: "Партнери",
                legacy: "Про нас",
                portal: "Клієнт-портал",
                individuals: "Фізичним особам",
                military: "Військовим",
                business: "Бізнесу",
                consultation: "Замовити консультацію",
                footer_notice: "Всі права захищено.",
                contact_us: "Зв’яжіться з нами",
                urgent: "Термінові питання",
                address_odesa: "Одеса, Покровський пров. 6",
                address_kherson: "Херсон",
                address_lviv: "Львів, вул. Єфремова 4",
                // Mega Menu / Services
                service_family: "Сімейне право",
                service_property: "Майнові спори",
                service_inheritance: "Спадщина",
                service_auto: "Автоадвокат / ДТП",
                service_military_law: "Військовий адвокат",
                service_tcc: "Супровід в ТЦК",
                service_vvk: "Оскарження ВВК",
                service_deferment: "Відстрочка від мобілізації",
                service_it: "IT-право",
                service_tax: "Податкове право",
                service_bankruptcy: "Банкрутство",
                // Form
                form_name: "Залиште ім’я",
                form_phone: "Залиште номер",
                form_service: "Оберіть послугу",
                form_message: "Повідомлення (необов'язково)",
                form_submit: "Замовити консультацію",
                form_placeholder_name: "Ваше повне ім'я",
                form_placeholder_phone: "+38 (0__) ___-__-__",
                form_placeholder_message: "Коротко опишіть вашу ситуацію...",
                success_title: "Запит отримано",
                success_message: "Дякуємо за звернення до Granenko & Dovzhenko. Юрист перегляне ваш запит і зв'яжеться з вами найближчим часом."
            },
            EN: {
                services: "Services",
                partners: "Partners",
                legacy: "Legacy",
                portal: "Client Portal",
                individuals: "For Individuals",
                military: "Military Law",
                business: "For Business",
                consultation: "Schedule a Consultation",
                footer_notice: "All rights reserved.",
                contact_us: "Contact Us",
                urgent: "Urgent Inquiries",
                address_odesa: "Odesa, Pokrovsky ln, 6",
                address_kherson: "Kherson",
                address_lviv: "Lviv, Yefremova St, 4",
                // Mega Menu / Services
                service_family: "Family Law",
                service_property: "Property Law",
                service_inheritance: "Inheritance",
                service_auto: "Auto-law / Accidents",
                service_military_law: "Military Lawyer",
                service_tcc: "TCC (ТЦК) Support",
                service_vvk: "VVK (ВВК) Appeals",
                service_deferment: "Mobilization Deferment",
                service_it: "IT-law",
                service_tax: "Tax Law",
                service_bankruptcy: "Bankruptcy",
                // Form
                form_name: "Leave your name",
                form_phone: "Leave your number",
                form_service: "Select a service",
                form_message: "Message (Optional)",
                form_submit: "Request Consultation",
                form_placeholder_name: "Your Full Name",
                form_placeholder_phone: "+38 (0__) ___-__-__",
                form_placeholder_message: "Briefly describe your situation...",
                success_title: "Request Received",
                success_message: "Thank you for contacting Granenko & Dovzhenko. A legal specialist will review your inquiry and contact you shortly."
            }
        };
        return translations[lang][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
