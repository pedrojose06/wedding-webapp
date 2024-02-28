import { useTranslation } from "react-i18next";
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
		<select onChange={handleChangeLanguage} value={language}>
			<option value="fr">French</option>
			<option value="pt">Portuguese</option>
			<option value="en">English</option>
		</select>
	);
}
