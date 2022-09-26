import React from "react";
import { useSelector } from "react-redux";

export default function Model() {
  let clothes = useSelector((state) => state.dressingRoomReducer.clothes);

  return (
    <div className="col-4">
      <div className="contain">
        <div className="body" />
        <div className="model" />
        <div
          className={clothes.hairstyle ? "renderHairstyle" : "hairstyle"}
          style={{
            background: `url(${
              clothes.hairstyle ? clothes.hairstyle.imgSrc_png : ""
            })`,
          }}
        ></div>
        <div
          className={clothes.necklaces ? "renderNecklace" : "necklace"}
          style={{
            background: `url(${
              clothes.necklaces ? clothes.necklaces.imgSrc_png : ""
            })`,
          }}
        ></div>
        <div
          className={clothes.topclothes ? "renderBikiniTop" : "bikinitop"}
          style={{
            background: `url(${
              clothes.topclothes
                ? clothes.topclothes.imgSrc_png
                : "./assets/images/allbody/bikini_branew.png"
            })`,
          }}
        ></div>
        <div
          className={clothes.botclothes ? "renderBikiniBottom" : "bikinibottom"}
          style={{
            background: `url(${
              clothes.botclothes
                ? clothes.botclothes.imgSrc_png
                : "./assets/images/allbody/bikini_pantsnew.png"
            })`,
          }}
        ></div>
        <div
          className={clothes.handbags ? "renderHandbags" : "handbag"}
          style={{
            background: `url(${
              clothes.handbags ? clothes.handbags.imgSrc_png : ""
            })`,
          }}
        ></div>
        <div
          className={clothes.shoes ? "renderFeet" : "feet"}
          style={{
            background: `url(${
              clothes.shoes
                ? clothes.shoes.imgSrc_png
                : "./assets/images/shoes/shoes1.png"
            })`,
          }}
        ></div>
        <div
          className="background"
          style={{
            backgroundImage: `url(${
              clothes.background
                ? clothes.background.imgSrc_png
                : "./assets/images/background/background1.jpg"
            })`,
          }}
        ></div>
      </div>
    </div>
  );
}
