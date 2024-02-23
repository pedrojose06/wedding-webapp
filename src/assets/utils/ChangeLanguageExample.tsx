import { useState } from "react";
import { useTranslation } from "react-i18next";

function App2() {
	const {
		t,
		i18n: { changeLanguage, language },
	} = useTranslation();
	const [currentLanguage, setCurrentLanguage] = useState(language);
	const handleChangeLanguage = () => {
		const newLanguage = currentLanguage === "en" ? "fr" : "en";
		setCurrentLanguage(newLanguage);
		changeLanguage(newLanguage);
	};
	return (
		<div className="App">
			<h1>
				Our Translated Header:
				{t("headerTitle")}
			</h1>
			<h3>Current Language: {currentLanguage}</h3>
			<button type="button" onClick={handleChangeLanguage}>
				Change Language
			</button>
		</div>
	);
}
export default App2;
