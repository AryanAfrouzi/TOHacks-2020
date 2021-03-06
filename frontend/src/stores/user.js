import {writable} from "svelte/store";

export const loggedIn = writable(false);
export const currentUser = writable(null);
export const userId = writable(null);
export const isNew = writable(null);
export const userType = writable(""); //"Doctor" or "Patient"
export const filename = writable("");
export const condition = writable("Infected");
export const trained = writable(false);