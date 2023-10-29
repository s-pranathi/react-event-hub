export const getCartItemsFromStorage = (userInfoFromStorage) => {
  let cartItemsFromStorage;
  if (userInfoFromStorage) {
    cartItemsFromStorage = localStorage.getItem(userInfoFromStorage._id)
      ? JSON.parse(localStorage.getItem(userInfoFromStorage._id)).length === 0
        ? JSON.parse(localStorage.getItem("guestUser"))
        : JSON.parse(localStorage.getItem(userInfoFromStorage._id))
      : localStorage.getItem("guestUser")
      ? JSON.parse(localStorage.getItem("guestUser"))
      : [];
  } else {
    cartItemsFromStorage = localStorage.getItem("guestUser")
      ? JSON.parse(localStorage.getItem("guestUser"))
      : [];
  }
  return cartItemsFromStorage;
};
