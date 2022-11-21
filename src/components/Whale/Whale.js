import React from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import Beluga from "./Beluga";
import Blue from "./Blue";

export default function Whale() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  return (
    <>
      <h2>Whale</h2>
      {type == "blue" ? <Blue /> : type == "beluga" ? <Beluga /> : ""}
    </>
  );
}
