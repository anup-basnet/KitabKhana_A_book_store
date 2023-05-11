import { fetchCart, fetchUser } from "../utils/fetchLocalStorageData"

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
    user: userInfo,
    bookItems: null,
    cartShow: false,
    cartItems: cartInfo,
}