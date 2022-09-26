import { ADD_CLOTHES } from "../Types/DressingRoomAction";

export const addClothesActions = (clothes) => {
  return {
    type: ADD_CLOTHES,
    clothes,
  };
};
