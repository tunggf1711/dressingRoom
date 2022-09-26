import React from "react";
import { useDispatch } from "react-redux";
import { addClothesActions } from "../../Redux/Actions/DressingRoomAction";

export default function Item(props) {
  let { item } = props;

  let dispatch = useDispatch();

  return (
    <div className="col-md-3">
      <div className="card text-center">
        <img src={item.imgSrc_jpg} alt={item.name} />
        <h4>
          <b>{item.name}</b>
        </h4>
        <button onClick={() => dispatch(addClothesActions(item))}>
          Thử đồ
        </button>
      </div>
    </div>
  );
}
