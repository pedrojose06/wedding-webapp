import { useState } from "react";
import { useTranslation } from "react-i18next";
import { activeLanguage } from "../../atoms/Languages/activeLanguage";
export default function ChangeLanguage() {
	const {
		t,
		i18n: { changeLanguage, language },
	} = useTranslation();

	const handleChangeLanguage = (
		event: React.ChangeEvent<HTMLSelectElement>,
	) => {
		changeLanguage(event.target.value);
	};
	return (
		<select onChange={handleChangeLanguage}>
			<option selected={language === "fr"} value="fr">
				French
			</option>
			<option selected={language === "pt"} value="pt">
				Portuguese
			</option>
			<option selected={language === "en"} value="en">
				English
			</option>
		</select>
	);
}
