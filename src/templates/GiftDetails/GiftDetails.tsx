import { atom, useAtom } from "jotai";
import { useTranslation } from "react-i18next";

import { IoQrCode } from "react-icons/io5";
import { activeGift } from "../../atoms/GiftChosen/activeGift";
import { activePage } from "../../atoms/Navigation/activePageATM";
import Button from "../../components/Button/Button";
import Image from "../../components/Image/Image";
import Input from "../../components/Input/Input";
import GiftNotChosen from "../../molecules/GiftNotChosen/GiftNotChosen";
import ACTIVE_PAGE from "../MobileNavigation/constants";
const qtdValue = atom(1);

export default function GiftDetails() {
	const [chosenGift] = useAtom(activeGift);
	const [qtd, setQtd] = useAtom(qtdValue);
	const [, setPage] = useAtom(activePage);
	const { t } = useTranslation();

	const validateQtd = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (
			e.target.value === "" ||
			e.target.value === "0" ||
			Number(e.target.value) <= 0
		) {
			e.target.value = qtd.toString();
			return;
		}
	};

	const handleQtdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (Number(e.target.value) <= 0) return;
		setTimeout(() => {
			setQtd(Number(e.target.value));
		}, 300);
	};

	setPage(ACTIVE_PAGE.GIFT_DETAIL);

	return (
		<>
			{Object.keys(chosenGift).length ? (
				<div className="pb-20">
					<h1 className="p-4 bold text-2xl text-center">{chosenGift.name}</h1>
					<Image src={chosenGift.image} alt={chosenGift.name} className="" />
					<div className="p-4">
						<Input
							value={`${t("Moeda")} ${chosenGift.price.toLocaleString("pt-br", {
								minimumFractionDigits: 2,
							})}`}
							text={t("PrecoUnitario")}
							isBlocked
						/>
						<Input
							type="number"
							defaultValue={1}
							onBlur={validateQtd}
							onFocus={(e) => {
								e.target.value = "";
							}}
							onInput={handleQtdChange}
							text={t("Quantidade")}
						/>
						<Input
							value={`${t("Moeda")} ${(qtd * chosenGift.price).toLocaleString(
								"pt-br",
								{ minimumFractionDigits: 2 },
							)}`}
							text={t("Total")}
							isBlocked
						/>
					</div>
					<Button
						className="bg-indigo-500 text-white w-4/5 rounded-2xl flex justify-center items-center mx-auto h-12"
						to="qr-code"
						icon={<IoQrCode className="mr-3" color="white" />}
						onClick={() => setPage(ACTIVE_PAGE.QRCODE)}
						text={t("GerarQRCode")}
					/>
				</div>
			) : (
				<div className="py-20">
					<GiftNotChosen />
				</div>
			)}
		</>
	);
}
