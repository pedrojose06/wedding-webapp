import { atom } from "jotai";

export type IGifts = {
	name: string;
	image: string;
	price: number;
};

const activeGift = atom({} as IGifts);

export { activeGift };
