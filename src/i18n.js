import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from "i18next-http-backend";
import LanguageDetector from 'i18next-browser-languagedetector';
import en from "./assets/i18n/en/en.json"
import tw from "./assets/i18n/zh-tw/tw.json"
import jp from "./assets/i18n/jp/jp.json"
import cn from "./assets/i18n/zh-cn/cn.json"

const resources={
    en:{
        translation:en
    },
    "zh-TW":{
        translation:tw
    },
    "zh-CN":{
        translation:cn
    },
    "jp":{
        translation:jp
    }
};

i18n
.use(Backend)
.use(LanguageDetector)
// pass the i18n instance to react-i18next.
.use(initReactI18next)
.init({
    resources,
    caches: ["localStorage"],
    lng: localStorage.getItem("i18nextLng"),             //預設語言
    fallbackLng: 'en',     //如果當前切換的語言沒有對應的翻譯則使用這個語言，
    interpolation: {
      escapeValue: false,
    },    
    react: {
        useSuspense: false
      }
});
  
export default i18n;