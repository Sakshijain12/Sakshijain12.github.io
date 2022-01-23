import { useState } from "react";
import "./contact.scss";


export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <a href="https://github.com/Sakshijain12" target= "_blank"> <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className="icon"></img> </a>
        <a href = "https://www.linkedin.com/in/sakshi-jain-083855213/" target = "_blank"> <img src= "https://cdn-icons-png.flaticon.com/512/61/61109.png" className="icon"></img> </a>
        <p></p>
        <a href = "https://www.hackerrank.com/jain_60" target= "_blank"> <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/160_Hackerrank_logo_logos-512.png" className="icon"></img> </a>
        <a href = "https://www.codechef.com/users/sakshi_1212" target= "_blank"> <img src="https://icons-for-free.com/iconfiles/png/512/codechef-1324440139527402917.png" className="icon"></img> </a>
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}