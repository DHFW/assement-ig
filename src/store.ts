"use client";

import { proxy, subscribe } from "valtio";
import { useProxy } from "valtio/utils";
import { Product } from "./types";

interface IStore {
  wishlist: WishlistItem[];
}

export interface WishlistItem extends Product {
  nrOfItems: number;
}

const storageKey = "wishlist";

const state = proxy<IStore>(
  JSON.parse(
    typeof window !== "undefined"
      ? (window.localStorage.getItem(storageKey) as string)
      : `{"wishlist":[]}`
  ) || {
    wishlist: [],
  }
);

subscribe(state, () => {
  typeof window !== "undefined"
    ? window.localStorage.setItem(storageKey, JSON.stringify(state))
    : [];
});

// const state = proxy<IStore>(
//   JSON.parse( localStorage.getItem('wishlist')) || { wishlist: []}));
export const useStore = () => {
  return useProxy(state);
};
