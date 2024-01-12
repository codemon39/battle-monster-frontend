import React from "react";
import { Progress, Image } from "antd";

function MonsterCard({ monster }) {
  return (
    <div
      className="xl:h-96 lg:h-96 md:h-96 sm:h-80 h-80 xl:w-64 lg:w-72 md:w-60 sm:w-48 w-44 rounded-md "
      style={{
        boxShadow: "-2px 3px 10px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Image
        width="100%"
        className="xl:min-h-48 lg:min-h-44 md:min-h-32 sm:min-h-28 min-h-28 pt-2 pr-3 pl-3"
        src={monster?.imageUrl}
      ></Image>
      <p className="xl:text-xl lg:text-xl md:text-xl sm:text-lg text-center ">
        {monster?.name}
      </p>
      <div className="text-xs pr-2 pl-2">
        HP
        <Progress percent={monster?.hp} strokeColor="red" size="small" />
        ATTACK
        <Progress percent={monster?.attack} size="small" />
        SPEED
        <Progress percent={monster?.speed} size="small" />
        DEFENSE
        <Progress percent={monster?.defense} size="small" />
      </div>
    </div>
  );
}
export default MonsterCard;
