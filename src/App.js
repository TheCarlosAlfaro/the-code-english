import React, { Component } from "react";
import "./App.css";
import { successMessage } from "../src/theCodeBibleVerses.json";
import BibleVerse from "./components/BibleVerse";
import PinInput from "react-pin-input";
import logo from "./the-code-logo.png";
import logo2 from "./the-code-no-verse.png";
import {
  FacebookShareButton,
  FacebookShareCount,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon
} from "react-share";
import ReactPlayer from "react-player";

class App extends Component {
  constructor(props) {
    super(props);
    this.pinRef = React.createRef();
    this.state = {
      verse: "Enter the code to obtain access",
      password: "",
      showVideo: false
    };
  }

  generateVerse() {
    // let verse = bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
    let verse = successMessage;
    this.setState({ verse: verse });
  }

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.password === "") {
      const node = this.pinRef.current;
      this.setState({ verse: "Must enter code" });
      node.elements[0].focus();
    } else if (this.state.password === "JER333") {
      this.generateVerse();
      this.setState({ showVideo: true });
    } else {
      this.setState({
        verse: "Incorrect code, try again"
      });
      this.setState({ password: "" });
      const node = this.pinRef.current;
      node.elements.forEach(function(pinItem) {
        pinItem.setState({ value: "" });
      });
      node.elements[0].focus();
    }
  };

  render() {
    let url = "https://www.eaglescfc.org/thecode";
    const videoUrl = "https://aguilascfc.wistia.com/medias/xz6o9y2tjc";
    // let appId = '1792125874189569';
    const bosquejoUrl =
      "https://www.eaglescfc.org/wp-content/uploads/2019/01/THE-CODE-BOSQUEJOS-ingles-buenos.pdf";
    let appHeaderClassName = "App-header";
    if (this.state.showVideo) {
      appHeaderClassName += "Success";
    }

    return (
      <div className="App">
        <header className={appHeaderClassName}>
          {this.state.showVideo ? (
            <img src={logo} alt="Logo" className="App-logo" />
          ) : (
            <img src={logo2} alt="Logo" className="App-logo" />
          )}
          <p className="subtitle text-center">
            Share this page with your friends and family!
          </p>

          <div className="social-container">
            <FacebookShareButton
              className="fb-buttton"
              url={url}
              quote="Do you want to know the code?"
              hashtag="#THECODEJER333"
            >
              <FacebookIcon
                size={50}
                round={true}
                logoFillColor="#3A5A98"
                iconBgStyle={{ fill: "#fff" }}
              />
              <FacebookShareCount url={url} />
            </FacebookShareButton>
            <TwitterShareButton
              url={url}
              title="The Code"
              via="aguilascfc"
              hashtags={["THECODEJER333", "aguilascfc"]}
            >
              <TwitterIcon
                size={50}
                round={true}
                logoFillColor="#01ACED"
                iconBgStyle={{ fill: "#fff" }}
              />
            </TwitterShareButton>
            <WhatsappShareButton url={url} title="The Code" separator=" ">
              <WhatsappIcon
                size={50}
                round={true}
                logoFillColor="#2CB743"
                iconBgStyle={{ fill: "#fff" }}
              />
            </WhatsappShareButton>
            <EmailShareButton url={url} subject="The Code">
              <EmailIcon
                size={50}
                round={true}
                logoFillColor="#7F7F7F"
                iconBgStyle={{ fill: "#fff" }}
              />
            </EmailShareButton>
          </div>
          {/* <h1 className="title">The Code</h1> */}

          <BibleVerse verse={this.state.verse} />

          {this.state.showVideo ? null : (
            <form onSubmit={this.handleSubmit}>
              <PinInput
                focus
                ref={this.pinRef}
                length={6}
                onChange={(value, index) => {}}
                type="custom"
                style={{ padding: "10px" }}
                inputStyle={{
                  borderColor: "#fff",
                  fontSize: "2rem",
                  color: "#fff"
                }}
                inputFocusStyle={{ borderColor: "#FF0000" }}
                onComplete={(value, index) => {
                  this.setState({ password: value });
                }}
              />
              <button type="submit">OBTAIN ACCESS</button>
            </form>
          )}
        </header>
        {this.state.showVideo ? (
          <div className="container">
            <p className="sub-heading">The verse of the week</p>
            <div className="verse__container verse">
              <p>
                <small>5</small> “When you pray, don’t be like the hypocrites
                who love to pray publicly on street corners and in the
                synagogues where everyone can see them. I tell you the truth,
                that is all the reward they will ever get.
                <br />
                <strong className="verse__ref">(Matthew 6:5 NLT)</strong>
              </p>
            </div>
            <p className="sub-heading">Prayer of the week</p>
            <div className="verse">
              <p>
                Heavenly Father, I give you thanks for the great privilege you
                have given me of having access to your presence through prayer.
                <br />
                <br />
                Thank you for being my friend. I do not want to fail you, and
                because of that I ask that your Holy Spirit places in me not
                only wanting to speak to you every day, but also actually doing
                it. I want to speak to you in every moment and place as my best
                friend. I want to give you the best of me, just as you have
                given everything for me.
                <br />
                <br />
                Forgive me for not giving sufficient value to your love, time,
                and sacrifice.
                <br />
                <br />
                Thank you because, no matter what, the moment I speak to you,
                you lean in to hear me. When I am anxious, sad, or going through
                a difficult situation, you fill me with peace and love, you
                renew my strengths, give me joy, hope, and faith. Thank you
                because I know you will always be available for me, 24/7. There
                is no other friend like you! I love you!
              </p>
            </div>
            <p className="sub-heading">
              Tips for creating a lifestyle of prayer
            </p>
            <div className="verse">
              <ol>
                <li>
                  Speak with God as if he were your best friend. Remember that
                  he will always listen to you. Do it as soon as you wake up,
                  while you’re getting ready, driving, working, etc.
                </li>
                <br />
                <li>
                  Every morning, remember that you have an appointment with the
                  King of Kings. You cannot miss your appointment! What a great
                  privilege we have!
                </li>
                <br />
                <li>
                  If you have never prayed, begin with fifteen minutes, but make
                  it very good quality time. Let nothing distract you. Do it
                  when no one else has woken up, or when everyone has left
                  already.
                </li>
                <br />
                <li>
                  Add 5 more minutes every day to your prayer, until you reach
                  at least an hour.
                </li>
                <br />
                <li>
                  If you are going through a difficult situation, pray to God.
                  If you are struggling with temptation, pray to God. If you
                  need peace, pray to God. In all times, pray to God!
                </li>
              </ol>
            </div>
            <p className="sub-heading">Digital Outline.</p>
            <div className="verse">
              <p className="text-center">
                <a href={bosquejoUrl} target="_blank" rel="noopener noreferrer">
                  You can download the outline here!
                </a>
                <br />
              </p>
            </div>
            {/* <p className="sub-heading">Enseñanza en video.</p>
            <div className="video-container">
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player"
                  url={videoUrl}
                  width="100%"
                  height="100%"
                />
              </div>
            </div> */}
            <div className="github-link">
              {/* <small className="github-link">
                Made with <i className="fa fa-heart" /> by&nbsp;
                <a
                  href="https://github.com/devbysalas/the-code-random-bible-verses"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Carlos Alfaro
                </a>
              </small> */}
              <small className="github-link">
                Made with <i className="fa fa-heart" /> by&nbsp;
                <a
                  href="https://aguilascfc.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aguilas Centro Familiar Cristiano.
                </a>
              </small>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
