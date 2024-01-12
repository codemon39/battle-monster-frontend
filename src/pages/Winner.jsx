import React, { useEffect, useState } from "react";
import { Flex, Image, Typography } from "antd";
import axios from "axios";
import { useParams } from "react-router";

const { Text } = Typography;
export default function Winner() {
  const { id } = useParams();
  const [data, setData] = useState();
  console.log(id);
  useEffect(() => {
    axios({
      url: "http://localhost:5000/api/result",
      method: "post",
      data: { id },
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("Error from backend");
      });
  }, []);

  return (
    <>
      {id === "0" ? (
        <Flex justify="center">
          <Text className="text-5xl">This game is tie!</Text>
        </Flex>
      ) : (
        <>
          <Flex className="m-auto text-5xl mt-10" justify="center">
            W I N N E R !
          </Flex>
          <Flex justify="center">
            <Image src={data?.imageUrl} className="mt-10"></Image>
          </Flex>
          <Flex justify="center">
            <Text className=" text-2xl">{data?.name}</Text>
          </Flex>
        </>
      )}
    </>
  );
}
