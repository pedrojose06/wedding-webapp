import giftList from "../assets/json/gifts/gift-list.json";
import { IGifts } from "../atoms/GiftChosen/activeGift";

const UseDataBase = (id: number) => {
	const gift = giftList.find((gift) => gift.id === id) as IGifts;

	return gift;
};

export default UseDataBase;
