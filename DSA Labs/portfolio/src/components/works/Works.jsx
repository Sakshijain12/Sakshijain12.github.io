import { useState } from "react"
import "./works.scss"
import arr from "./arrow.png"


export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "https://cdn1.vectorstock.com/i/1000x1000/33/10/ux-ui-design-icon-outline-vector-33243310.jpg",
      title: "UI-UX Designer",
      desc:"Work on Live Project - Invest In Yourself. Designed the layouts for Web apps, mobile apps, web pages. The project is for the students of tier-2 or tier-3 college. Competitive analysis and critical analysis of market competitors was done.",
      image: "https://leveragedgrowth.in/wp-content/uploads/2020/01/ezgif.com-video-to-gif-1.gif",
      type: "Internship",
      link: "https://www.investinyourself.in/",
    },
    {
      id: "2",
      icon: "https://image.shutterstock.com/image-vector/dossier-folder-outline-icon-linear-260nw-1045477789.jpg",
      title: "Portfolio Website",
      desc: "My portfolio website using ReactJs, Javascript, SCSS",
      image: "https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=85,format=auto/uploads/2020/06/SOC101_Portfolio_Guide.png",
      type : "Project",
      link : "",
    },
    {
      id: "3",
      icon: "https://cdn5.vectorstock.com/i/1000x1000/43/64/machine-learning-icon-artificial-intelligence-vector-35234364.jpg",
      title: "Machine Learning",
      desc: "Course project on Spectral Relaxation by K-means Clustering.",
      image : "https://slideplayer.com/slide/5008353/16/images/3/K+means+and+Kernel+K+means.jpg",
      type : "Project",
      link : "https://github.com/Sakshijain12/Spectral-Relaxation-by-K-means-Clustering",
    },
    {
      id: "4",
      icon: "https://cdn.sparkfun.com/assets/9/1/e/4/8/515b4656ce395f8a38000000.png",
      title: "Replication of limb motion",
      desc: "This project replicates the motion of human upper limb in real-time with the use of Arduino, MPU6050 sensors.",
      image: "https://www.researchgate.net/profile/Lucian-Milea/publication/304222482/figure/fig4/AS:669952956719126@1536740640861/Detecting-human-arm-and-hand-motions-using-bend-sensors-included-into-support-bandages.png",
      type : "Project",
      link : "https://github.com/Sakshijain12/Replication-of-human-limb-motion-in-real-time",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <h1>Work and Experience</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span><a href= {d.link} target = "_blank"> {d.type} </a></span>
                </div>
              </div>
              <div className="right">
                <img src= {d.image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src = {arr} className="arrow left" onClick={() => handleClick("left")} />
      <img src= {arr} className="arrow right" onClick={() => handleClick()} />
    </div>
  );
}