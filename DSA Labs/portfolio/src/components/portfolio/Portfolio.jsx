import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  programmingPortfolio,
  libPortfolio,
  toolsPortfolio,
  /*skillPortfolio,
  rolesPortfolio,*/
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("Programming");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "Programming",
      title: "Programming",
    },
    {
      id: "Library/Framework",
      title: "Library/Framework",
    },
    {
      id: "Tools",
      title: "Tools",
    },
    {/*{
      id: "Skills",
      title: "Skills",
    },
    {
      id: "Roles & Responsibility",
      title: "Roles & Responsibility",
    },*/}
  ];

  useEffect(() => {
    switch (selected) {
      case "Programming":
        setData(programmingPortfolio);
        break;
      case "Library/Framework":
        setData(libPortfolio);
        break;
      case "Tools":
        setData(toolsPortfolio);
        break;
      {/*case "Skills":
        setData(skillPortfolio);
        break;
      case "Roles & Responsibility":
        setData(rolesPortfolio);
      break;*/}
      default:
        setData(programmingPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Skills</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}