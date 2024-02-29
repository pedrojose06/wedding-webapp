import { useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";
import Image from "../../components/Image/Image";
import { IGifts } from "../../templates/GiftList/GiftList";

export default function Gift({ name, image, price }: IGifts) {
	const { t } = useTranslation();
	return (
		<div className="flex justify-between px-4 pt-4 items-center">
			<div className="flex">
				<Image
					src={image}
					alt={name}
					className="h-14 w-14 object-cover rounded-lg"
				/>
				<div className="flex-col pl-4">
					<h3 className="bold text-xl">{name}</h3>
					<div className="text-indigo-400">
						{t("Moeda")} {price}
					</div>
				</div>
			</div>

			<Button
				className="bg-gray-200 h-9 w-24 border rounded-3xl"
				text={t("Presentear")}
			/>
		</div>
	);
}
