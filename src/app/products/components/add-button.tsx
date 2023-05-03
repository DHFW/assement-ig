"use client";

import Icon from "../../../components/icon";
import { useStore } from "../../../store";
import { Product } from "../../../types";

interface ToggleWishlistButtonProps {
  product: Product;
}

const ToggleWishlistButton: React.FC<ToggleWishlistButtonProps> = (props) => {
  const store = useStore();
  async function handleFavoriteProduct(product: Product) {
    if (inWishlist()) {
      // remove from wishlist
      store.wishlist = store.wishlist.filter((t) => t.id !== product.id);
    } else {
      // add to wishlist
      store.wishlist.push({
        ...product,
        nrOfItems: 1,
      });
    }
  }
  const inWishlist = () => {
    return store.wishlist.find((t) => t.id === props.product.id);
  };

  return (
    <button
      onClick={() => handleFavoriteProduct(props.product)}
      className="border border-white p-2 rounded-full"
      data-testid="heart"
      aria-label="Add to wishlist"
    >
      <Icon
        imageName="heart"
        className={`${
          inWishlist() ? "stroke-red-500 dark:stroke-red-500" : ""
        }`}
        size={24}
      />
    </button>
  );
};

export default ToggleWishlistButton;
