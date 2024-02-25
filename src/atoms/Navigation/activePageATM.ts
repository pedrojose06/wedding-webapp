import { atom } from "jotai";
import ACTIVE_PAGE from "../../templates/MobileNavigation/constants";

const activePage = atom(ACTIVE_PAGE.HOME);

export { activePage };
