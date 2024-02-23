import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

export default i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.use(Backend)
	.init({
		lng: "en",
		fallbackLng: "en",
		debug: true,
		returnObjects: true,
		backend: {
			loadPath: "/locales/{{lng}}/translation.json",
		},
	});
