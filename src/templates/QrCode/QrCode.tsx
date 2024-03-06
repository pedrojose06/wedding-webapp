import { useTranslation } from "react-i18next";
import qrcode from "../../../src/assets/jpg/c6-qrcode.jpeg";
import Image from "../../components/Image/Image";

export default function QrCode() {
	const { t } = useTranslation();
	return (
		<div className="p-4">
			<Image src={qrcode} alt="QR Code" />
			<div className="text-center">
				<h2 className="text-2xl text-amber-600 font-semibold">
					{t("Atencao")}
				</h2>
				<p className="pt-4 text-neutral-300">{t("InfoDePagamento")}</p>
			</div>
		</div>
	);
}
