import { ADD_CLOTHES } from "../Types/DressingRoomAction";

const stateDressingRoom = {
  clothes: {
    topclothes: "",
    botclothes: "",
    shoes: "",
    handbags: "",
    necklaces: "",
    hairstyle: "",
    background: "",
  },
};

export const dressingRoomReducer = (state = stateDressingRoom, action) => {
  switch (action.type) {
    case ADD_CLOTHES:
      state.clothes = {
        ...state.clothes,
        [action.clothes.type]: action.clothes,
      };
      return { ...state };
    default:
      return { ...state };
  }
};
