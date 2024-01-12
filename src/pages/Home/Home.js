import React, { useState } from "react";
import { Row, Col, Typography, Flex, Button } from "antd";
import MonsterCard from "../../components/MonsterCard.js";
import MonstersList from "../../components/MonstersList.js";
import fetchData from "../../config/util.js";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [playerMonster, setPlayerMonster] = useState();
  const [computerMonster, setComputerMonster] = useState();
  const [gameResult, setGameResult] = useState();

  const handleSelect = async (player, computer) => {
    setPlayerMonster(player);
    setComputerMonster(computer);
    const data = {
      id1: player.id,
      id2: computer.id,
    };
    const res = await fetchData("/gameStart", data);
    setGameResult(res.data);
  };

  return (
    <>
      <Row>
        <Col span={16} className="m-auto">
          <Flex justify="center" align="center" gap={6} vertical>
            <Typography className="lg:text-5xl md:text-3xl sm:text-2xl text-2xl">
              Battle of Monsters
            </Typography>
            <Typography className=" md:text-xl sm:text-lg text-lg">
              Select your Monster
            </Typography>
          </Flex>
          <Row>
            <MonstersList onSelect={handleSelect} />
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={15} className="m-auto">
          <Flex justify="center">
            <MonsterCard monster={playerMonster} />
            <Flex justify="center" className="m-auto">
              <Button>
                <Link to={`/winner/${gameResult?.id}`}>Start Battle</Link>
              </Button>
            </Flex>
            <MonsterCard monster={computerMonster} />
          </Flex>
        </Col>
      </Row>
    </>
  );
}
