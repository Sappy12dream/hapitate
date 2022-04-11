import {
  faShoppingBag,
  faUser,
  faTruck,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
export const title = {
  text: "Welcome to Your Healthy Appetite Store",
};

export const data = [
  {
    icon: faShoppingBag,
    data: "Shop",
    path: "/shop",
  },
  {
    icon: faUser,
    data: "My Account",
    path: "/myaccount",
  },
  {
    icon: faTruck,
    data: "Track Your Order",
    path: "/order",
  },
  {
    icon: faLocationDot,
    data: "Sell on Hapital",
    path: "/sell",
  },
];
