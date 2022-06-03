import "./App.css";
import Saoudi from "./img_saoudi.jpg";
import "./style.css"
function App() {
  return (
    <div>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title_red">Ousama Saoudi</h1>
        <br />
        <img width={400} height= {300} src={Saoudi} alt="imageinSource" />
        <br />
        <img width={400} height= {300} src="/real_madrid.webp" alt="imageinpublic" />
      </div>
      <video width={320} height={240} controls>
        <source src="/git_intr.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
