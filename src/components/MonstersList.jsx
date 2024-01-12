import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Flex, Image, Typography } from "antd";

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
  console.log(data);
  function monsterCard(playerMonster) {
    const computerMonster = data.find(
      (monster) => Number(monster.id) === random
    );
    onSelect(playerMonster, computerMonster);
  }

  return (
    <>
      {data.map((val) => (
        <Col className="m-auto" key={val.id}>
          <Flex
            vertical
            onClick={() => monsterCard(val)}
            className="monster-content xl:w-42 lg:w-32 md:w-28 sm:w-20 w-20 rounded-md m-4 shadow-[-2px_3px_10px_rgba(0,0,0,0.25)]"
          >
            <Image
              className="rounded-md p-2 "
              preview={false}
              src={val.imageUrl}
            ></Image>
            <Typography className=" text-xs text-center pt-2">
              {val.name}
            </Typography>
          </Flex>
        </Col>
      ))}
    </>
  );
}
export default MonstersList;
