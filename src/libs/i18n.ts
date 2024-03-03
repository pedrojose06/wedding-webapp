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
		ns: ["translation", "routes"], // Make sure 'routes' is included here
		defaultNS: "translation",
		debug: false,
		returnObjects: true,
		interpolation: {
			escapeValue: false,
		},
		backend: {
			loadPath: "/locales/{{lng}}/{{ns}}.json",
		},
	});
