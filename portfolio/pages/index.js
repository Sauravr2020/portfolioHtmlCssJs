import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

export const metadata = {
  title: "Saurav's Dev Portfolio",
  description: "Hi this is saurav dev portfolio",
};

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <div className="left">Saurav's Portfolio</div>
          <div className="right">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">Contact Me</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section className="firstSection">
          <div className="leftSection">
            <div>
              Hi, My name is <span className="purple">Saurav</span>
            </div>
            <div>and I am a passionate</div>
            <span id="element"></span>
            <div className="buttons">
              <button className="btn">Download Resume</button>
              <button className="btn">Visit Github</button>
            </div>
          </div>
          <div className="rightSection">
            <img src="img/dev.png" alt="" />
          </div>
        </section>
        <hr />
        <section className="secondSection">
          <span className="text-gray">What I have done so far</span>
          <h1>Work Experience</h1>

          <div className="box">
            <div className="vertical">
              <img className="image-top" src="img/html.png" alt="" />
              <div className="vertical-title">Html Developer (2010-2012)</div>
              <div className="vertical-desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
                aliquid expedita. Natus exercitationem aliquid, sapiente, iusto
                voluptatibus culpa nihil ea ab doloribus eos sequi libero!
              </div>
            </div>
            <div className="vertical">
              <img className="image-top" src="img/nodejs.png" alt="" />
              <div className="vertical-title">
                Node.js Developer (2012-2014)
              </div>
              <div className="vertical-desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
                aliquid expedita. Natus exercitationem aliquid, sapiente, iusto
                voluptatibus culpa nihil ea ab doloribus eos sequi libero!
              </div>
            </div>
            <div className="vertical">
              <img className="image-top" src="img/js.png" alt="" />
              <div className="vertical-title">JS Developer (2010-2012)</div>
              <div className="vertical-desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
                aliquid expedita. Natus exercitationem aliquid, sapiente, iusto
                voluptatibus culpa nihil ea ab doloribus eos sequi libero!
              </div>
            </div>
            <div className="vertical">
              <img className="image-top" src="img/developer.png" alt="" />
              <div className="vertical-title">Html Developer (2010-2012)</div>
              <div className="vertical-desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
                aliquid expedita. Natus exercitationem aliquid, sapiente, iusto
                voluptatibus culpa nihil ea ab doloribus eos sequi libero!
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer">
          <div className="footer-first">
            <h3>Saurav Developer Portfolio</h3>
          </div>
          <div className="footer-second">
            <ul>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </div>
          <div className="footer-third">
            <ul>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </div>
          <div className="footer-forth">
            <ul>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </div>
        </div>
        <div className="footer-rights">
          Copyright &#169; sauravportfolio.com | All rights reserved
        </div>
      </footer>
    </>
  );
}
