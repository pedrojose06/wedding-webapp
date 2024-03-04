import { atom } from "jotai";

export type IGifts = {
	id: number;
	name: string;
	image: string;
	price: number;
};

const activeGift = atom({} as IGifts);

export { activeGift };
