import qrcode from "../../../src/assets/jpg/c6-qrcode.jpeg";
import Image from "../../components/Image/Image";

export default function QrCode() {
	return (
		<div>
			<Image src={qrcode} alt="QR Code" />
		</div>
	);
}
