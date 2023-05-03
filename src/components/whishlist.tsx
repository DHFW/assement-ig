"use client";

import { useState } from "react";
import { WishlistItem, useStore } from "../store";
import SlideOutModal from "./slide-out-modal";
import Icon from "./icon";

interface WhishListProps {}

const WhishList: React.FC<WhishListProps> = (props) => {
  const store = useStore();
  const [wishlistOpen, setWishlistOpen] = useState(false);

  const handleUpdateNrOfItems = (product: WishlistItem, nrOfItems: number) => {
    if (nrOfItems === 0) {
      store.wishlist = store.wishlist.filter((t) => t.id !== product.id);
    } else {
      const item = store.wishlist.find((wi) => wi.id === product.id);
      if (item) {
        item.nrOfItems = nrOfItems;
      }
    }
  };

  return (
    <>
      <button
        onClick={() => setWishlistOpen(true)}
        className="relative"
        data-testid="favorites"
        aria-label="Show wishlist"
      >
        <Icon
          imageName={"heart"}
          size={32}
          className="stroke-slate-300 hover:stroke-slate-400 dark:hover:stroke-white  transition-colors"
        ></Icon>
        {store.wishlist && store.wishlist.length > 0 && (
          <span className="text-sm text-white absolute -top-1 -right-1 bg-green-500 rounded-full px-1.5">
            {store.wishlist
              .map((wi) => wi.nrOfItems)
              .reduce((sum: number, current: number) => sum + current, 0)}
          </span>
        )}
      </button>
      <SlideOutModal
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
      >
        <div className="flex justify-end">
          <button onClick={() => setWishlistOpen(false)}>
            <Icon
              imageName="close"
              size={32}
              className="stroke-slate-600 hover:stroke-slate-900 dark:stroke-slate-400 dark:hover:stroke-white transition-colors"
            />
          </button>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <h1 className="text-3xl">Your wishlist</h1>

          {store.wishlist.length === 0 && (
            <div className="bg-slate-300 dark:bg-slate-700 p-4 rounded-md">
              There are no items on your wishlist yet.
              <br />
              <br />
              Click on the{" "}
              <Icon imageName="heart" className="inline" size={18} /> to add a
              T-shirt to your wishlist!
            </div>
          )}

          <div className="flex flex-col gap-5 mb-4">
            {store.wishlist.map((wi) => (
              <div
                key={wi.id}
                className="flex flex-col w-full gap-2 items-center bg-slate-200 dark:bg-slate-800 p-4 rounded-md"
              >
                <div className={`flex flex-col`}>
                  <div>{wi.name}</div>
                  <div className="text-gray-500 text-sm pb-2">{wi.color}</div>
                  <div className="min-h-80 w-full overflow-hidden rounded-md bg-gray-200 dark:bg-gray-800 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={wi.imageSrc}
                      alt={wi.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                </div>
                <form className="flex gap-2">
                  <button
                    data-testid="delete"
                    aria-label="Delete from wishlist"
                    onClick={() => handleUpdateNrOfItems(wi, 0)}
                  >
                    <Icon imageName="trash" size={32} />
                  </button>
                  <label
                    htmlFor="nrOfItems"
                    className="flex gap-2 items-center"
                  >
                    <input
                      name="nrOfItems"
                      type="number"
                      defaultValue={wi.nrOfItems}
                      min={1}
                      onChange={(e) =>
                        handleUpdateNrOfItems(wi, +e.target.value)
                      }
                      className="w-20 text-gray-800 dark:text-gray-200 form-input dark:bg-slate-700 rounded-md"
                    ></input>
                  </label>
                </form>
              </div>
            ))}
          </div>
        </div>
      </SlideOutModal>
    </>
  );
};

export default WhishList;
