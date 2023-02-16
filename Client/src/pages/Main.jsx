import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";

const Main = () => {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [heading, setHeading] = useState("");
  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch("/api/post/" + id);
      const json = await response.json();
      if (response.ok) {
        setData(json.post);
        setHeading(json.lang["title"]);
      }
    };
    getPosts();
  }, [id]);
  return (
    <>
      {data?.length ? (
        <Cards data={data} heading={heading} />
      ) : (
        "No Data to dispalay"
      )}
    </>
  );
};

export default Main;
