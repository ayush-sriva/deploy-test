import React from "react";
export const JobContext = React.createContext({
  cardId: -1,
  setCardId: (_id: number) => {
    console.log(_id);
  },
});
