import React, { useState } from "react";

export const TvContext = React.createContext(null);

const TvContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  const [myReviews, setMyReviews] = useState({});

  const addToFavorites = (tv) => {
    let newFavorites = [];
    if (!favorites.includes(tv.id)) {
      newFavorites = [...favorites, tv.id];
    } else {
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites);
  };

  const addReview = (tv, review) => {
    setMyReviews({ ...myReviews, [tv.id]: review });
  };
  //console.log(myReviews);

  // We will use this function in a later section
  const removeFromFavorites = (tv) => {
    setFavorites(favorites.filter((mId) => mId !== tv.id));
  };

  return (
    <TvContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
      }}
    >
      {props.children}
    </TvContext.Provider>
  );
};

export default TvContextProvider;
