import { render } from "@testing-library/react";
import React, { Component } from "react";
import Lottie from "react-lottie";
import rest from "./rest.json";
import FlatList from "flatlist-react";
import food1 from "./food1.json";
import wrap from "./hotdog.json";
import bav from "./bav.json";
import fries from "./fries.json";
import pizza from "./pizza.json";

const people = [
  { firstName: "بـــانـــيه", info: { age: 20 } },
  { firstName: "بـــانـــيه", info: { age: 20 } },
  { firstName: "بـــانـــيه", info: { age: 20 } },
  { firstName: "بـــانـــيه", info: { age: 20 } },
  { firstName: "بـــانـــيه", info: { age: 20 } },
  { firstName: "بـــانـــيه", info: { age: 20 } },
  { firstName: "بـــانـــيه", info: { age: 20 } },
];

const defaultOptions = (data) => ({
  loop: true,
  autoplay: true,
  animationData: data,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
});
const renderPerson = (person, idx) => {
  return (
    <li key={idx}>
      <b>{person.firstName}</b> (<span>{person.info.age}</span>)
    </li>
  );
};
export default function Home() {
  render();
  {
    return (
      <div
        style={{
          marginBottom: "20%",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flexDirection: "row",
            display: "flex",
          }}
        >
          <Lottie options={defaultOptions(wrap)} height={"20%"} width={"20%"} />
          <Lottie options={defaultOptions(bav)} height={"20%"} width={"20%"} />
          <Lottie
            options={defaultOptions(food1)}
            height={"20%"}
            width={"20%"}
          />
          <Lottie
            options={defaultOptions(pizza)}
            height={"20%"}
            width={"20%"}
          />
          <Lottie
            options={defaultOptions(fries)}
            height={"20%"}
            width={"20%"}
          />
          <Lottie
            options={defaultOptions(food1)}
            height={"20%"}
            width={"20%"}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <ul>
              <FlatList
                list={people}
                renderItem={renderPerson}
                renderWhenEmpty={() => <div>List is empty!</div>}
                sortBy={["firstName", { key: "lastName", descending: true }]}
              />
            </ul>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              flex: 1,
              marginRight: "10%",
            }}
          >
            <ul>
              <FlatList
                list={people}
                renderItem={renderPerson}
                renderWhenEmpty={() => <div>List is empty!</div>}
                sortBy={["firstName", { key: "lastName", descending: true }]}
              />
            </ul>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            flexDirection: "column",
          }}
        >
          <h1 style={{ fontStyle: "italic" }}>Difference</h1>
          <Lottie options={defaultOptions(rest)} height={"50%"} width={"50%"} />
        </div>
      </div>
    );
  }
}
