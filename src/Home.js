import { render } from "@testing-library/react";
import React, { Component, useEffect, useState } from "react";
import Lottie from "react-lottie";
import rest from "./rest.json";
import FlatList from "flatlist-react";
import food1 from "./food1.json";
import wrap from "./hotdog.json";
import bav from "./bav.json";
import fries from "./fries.json";
import pizza from "./pizza.json";
import drink from "./drink.json";
import foody from "./foody.json";
import firename from "./foodo.json";
import { Wave } from "react-animated-text";
import { Random } from "react-animated-text";

import Button from "react-bootstrap/Button";
import { shareTextToWhatsApp } from "share-text-to-whatsapp";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const msg = [];
const defaultOptions = (data) => ({
  loop: true,
  autoplay: true,
  animationData: data,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
});

export default function Home() {
  const [people, setPeople] = useState([
    { firstName: "مياه معدنية", info: { age: 1, price: 5 }, count: 0 },
    { firstName: "شاى", info: { age: 2, price: 5 }, count: 0 },
    { firstName: "شاى اخضر", info: { age: 2, price: 5 }, count: 0 },

    { firstName: "حلبة", info: { age: 3, price: 5 }, count: 0 },
    { firstName: "ينسون", info: { age: 4, price: 5 }, count: 0 },
    { firstName: "نعناع", info: { age: 5, price: 5 }, count: 0 },
    {
      firstName: "عنــاب فــتــلــة سخــن",
      info: { age: 6, price: 5 },
      count: 0,
    },
    {
      firstName: "عناب فتلة سخن او ساقع",
      info: { age: 7, price: 10 },
      count: 0,
    },
    { firstName: "ليمون", info: { age: 8, price: 15 }, count: 0 },
    { firstName: "ليمون نعناع", info: { age: 9, price: 15 }, count: 0 },
    { firstName: "موز", info: { age: 10, price: 15 }, count: 0 },
    { firstName: "فراولة", info: { age: 11, price: 15 }, count: 0 },
    { firstName: "خوخ راني", info: { age: 12, price: 10 }, count: 0 },
    { firstName: "مانجا", info: { age: 13, price: 20 }, count: 0 },
    { firstName: "جوافة", info: { age: 14, price: 15 }, count: 0 },
    { firstName: "زبادى", info: { age: 15, price: 15 }, count: 0 },
    { firstName: "زبادي عسل", info: { age: 16, price: 20 }, count: 0 },
    { firstName: "كانز", info: { age: 17, price: 10 }, count: 0 },
    { firstName: "كريم كرامل", info: { age: 18, price: 15 }, count: 0 },
    { firstName: "جيلي", info: { age: 19, price: 20 }, count: 0 },
  ]);
  const [people2, setPeople2] = useState([
    { firstName: "ستربس عادي", info: { age: 1, price: 20 }, count: 0 },
    { firstName: "ستربس سبايسي", info: { age: 2, price: 20 }, count: 0 },
    { firstName: "برجر فراخ", info: { age: 3, price: 20 }, count: 0 },
    { firstName: "برجر لحمة", info: { age: 4, price: 15 }, count: 0 },
    { firstName: "بانيه عادي", info: { age: 5, price: 10 }, count: 0 },
    { firstName: "بانيه سبايسي", info: { age: 6, price: 10 }, count: 0 },
    { firstName: "بانيه بطاطس", info: { age: 7, price: 15 }, count: 0 },
    { firstName: "بيض بسطرمه", info: { age: 8, price: 10 }, count: 0 },
    { firstName: "بيض بلوبيف", info: { age: 9, price: 10 }, count: 0 },
    { firstName: "بطاطس", info: { age: 10, price: 10 }, count: 0 },
    { firstName: "بطاطس جبنة تلاجة", info: { age: 11, price: 10 }, count: 0 },
    { firstName: "بطاطس رومي", info: { age: 12, price: 10 }, count: 0 },
    { firstName: "بطاطس لانشون", info: { age: 13, price: 10 }, count: 0 },
    { firstName: "جبنة تلاجة", info: { age: 14, price: 5 }, count: 0 },
    { firstName: "جبنة رومي", info: { age: 15, price: 10 }, count: 0 },
    { firstName: "جبنة كيري", info: { age: 16, price: 10 }, count: 0 },
    { firstName: "حلاوة", info: { age: 17, price: 5 }, count: 0 },
    { firstName: "حلاوة قشطة", info: { age: 18, price: 10 }, count: 0 },
    { firstName: "مربى قشطة", info: { age: 19, price: 10 }, count: 0 },
    { firstName: "سكلنس", info: { age: 20, price: 10 }, count: 0 },
  ]);
  const [name, setName] = useState("");
  const renderPerson = (person, idx) => {
    const add = () => {
      let temp = [...people];
      temp[idx].count = temp[idx].count + 1;
      setPeople(temp);
    };
    const subtract = () => {
      let temp = [...people];
      if (temp[idx].count > 0) {
        temp[idx].count = temp[idx].count - 1;
        setPeople(temp);
      }
    };
    return (
      <li
        key={idx}
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginRight: "10%",
        }}
      >
        {person.info.price > 9 ? (
          <span style={{ marginRight: "10%" }}>{person.firstName}</span>
        ) : (
          <span style={{ marginRight: "13%" }}>{person.firstName}</span>
        )}
        <span style={{ marginRight: "2%" }}>({person.info.price})</span>
        <b style={{ marginRight: "10%" }}>{person.count}</b>
        <div style={{ flexDirection: "row", display: "flex", marginTop: "1%" }}>
          <div style={{ marginRight: "20%" }}>
            <Button
              style={{ borderRadius: "50%" }}
              onClick={add}
              variant="success"
              size="sm"
            >
              +
            </Button>
          </div>
          <div style={{ height: "20%" }}>
            <Button
              style={{ borderRadius: "50%" }}
              onClick={subtract}
              variant="danger"
              size="sm"
            >
              -
            </Button>
          </div>
        </div>
      </li>
    );
  };
  const renderPerson2 = (person, idx) => {
    const add = () => {
      let temp = [...people2];
      temp[idx].count = temp[idx].count + 1;

      setPeople2(temp);
      console.log(people2[idx]);
    };
    const subtract = () => {
      let temp = [...people2];
      if (temp[idx].count > 0) {
        temp[idx].count = temp[idx].count - 1;
        setPeople2(temp);
      }
    };
    return (
      <li
        key={idx}
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginRight: "10%",
        }}
      >
        {person.info.price > 9 ? (
          <span style={{ marginRight: "10%", flexDirection: "row" }}>
            {person.firstName}{" "}
          </span>
        ) : (
          <b style={{ marginRight: "13%" }}>{person.firstName}</b>
        )}
        <span style={{ marginRight: "2%" }}>({person.info.price})</span>
        <b style={{ marginRight: "10%" }}>{person.count}</b>
        <div style={{ flexDirection: "row", display: "flex", marginTop: "1%" }}>
          <div style={{ marginRight: "20%" }}>
            <Button
              style={{ borderRadius: "50%" }}
              className="btn"
              onClick={add}
              variant="success"
              size="sm"
            >
              +
            </Button>
          </div>
          <div style={{ height: "20%" }}>
            <Button
              style={{ borderRadius: "50%" }}
              onClick={subtract}
              variant="danger"
              size="sm"
            >
              -
            </Button>
          </div>
        </div>
      </li>
    );
  };

  const submit = (name) => {
    let msg = "";
    for (let i = 0; i < people.length; i++) {
      if (people[i].count > 0) {
        msg = msg.concat(
          "  ",
          people[i].firstName,
          people[i].count.toLocaleString("ar-EG"),
          "  "
        );
      }
    }
    for (let i = 0; i < people2.length; i++) {
      if (people2[i].count > 0) {
        msg = msg.concat(
          "  ",
          people2[i].firstName,
          people2[i].count.toLocaleString("ar-EG"),

          "  "
        );
      }
    }
    console.log(name);
    if (name === "") {
      alert("اكتب اسمك");
    } else {
      window.location = `https://wa.me/+201007530276/?text=${msg + name}`;
    }
    console.log(msg);
  };
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
        <Wave text="Difference" />
        <Lottie options={defaultOptions(drink)} height={"40%"} width={"40%"} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <ul>
              <FlatList
                list={people}
                renderItem={renderPerson}
                renderWhenEmpty={() => <div>List is empty!</div>}
                sortBy={["age", { key: "age", descending: false }]}
              />
            </ul>
          </div>
          <Lottie
            options={defaultOptions(foody)}
            height={"40%"}
            width={"40%"}
          />

          <ul>
            <FlatList
              list={people2}
              renderItem={renderPerson2}
              renderWhenEmpty={() => <div>List is empty!</div>}
              sortBy={["age", { key: "age", descending: false }]}
            />
          </ul>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                flex: 1,
                marginRight: "4%",
              }}
            ></div>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            flexDirection: "column",
          }}
        >
          <input
            type="text"
            style={{ marginRight: "5%" }}
            onChange={(text) => {
              setName(text.target.value);
            }}
            placeholder="اكتب اسمك"
          ></input>
          <Button
            style={{ borderRadius: "10%" }}
            onClick={() => submit(name)}
            variant="primary"
            size="md"
          >
            otlob
          </Button>
        </div>
        <div style={{ display: "flex", marginTop: "10%", marginLeft: "2%" }}>
          <Random text="@author ziad ashraf" />
        </div>
      </div>
    );
  }
}
