import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: {},
  addFavorites: (id) => {},
  removeFavorites: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoritesIds, setFavoritesIds] = useState([]);

  const addFavorites = (id) =>
    setFavoritesIds((currentFavIds) => [...currentFavIds, id]);

  const removeFavorites = (id) =>
    setFavoritesIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId != id)
    );

  const value = { ids: favoritesIds, addFavorites, removeFavorites };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
