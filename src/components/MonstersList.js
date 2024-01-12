import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Image, Typography } from "antd";

function MonstersList({ onSelect }) {
  const [data, setData] = useState([]);
  const random = Math.floor(Math.random() * 5 + 1);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/test")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("Error from backend");
      });
  }, []);

  function monsterCard(playerMonster) {
    const computerMonster = data.find((monster) => monster.id == random);
    onSelect(playerMonster, computerMonster);
  }

  return (
    <>
      {data.map((val, idx) => (
        <Col className="m-auto" key={idx}>
          <div
            onClick={() => monsterCard(val)}
            style={{
              boxShadow: "-2px 3px 10px rgba(0, 0, 0, 0.25)",
            }}
            className="monster-content xl:w-42 lg:w-32 md:w-28 sm:w-20 w-20 rounded-md m-4"
          >
            <Image
              className="rounded-md p-2 "
              preview={false}
              src={val.imageUrl}
            ></Image>
            <Typography className=" text-xs text-center pt-2">
              {val.name}
            </Typography>
          </div>
        </Col>
      ))}
    </>
  );
}
export default MonstersList;
