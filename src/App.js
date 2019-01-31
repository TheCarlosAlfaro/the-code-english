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
            <p className="sub-heading">The verse of the week.</p>
            <div className="verse__container verse">
              <p>
                <small>3</small> Never stop praying
                <br />
                <strong className="verse__ref">
                  (1 Thessalonians 5:17 NLT)
                </strong>
              </p>
            </div>
            <p className="sub-heading">Prayer of the week.</p>
            <div className="verse">
              <p>
                Father, help me be able to pray without ceasing. May I always
                remember, in each moment and in each place, that You are at my
                side to help me succeed, to listen to me and to guide me. Help
                me, Holy Spirit, to be aware of Your Presence in my life.
                <br />
                <br />
                I want to be grateful with you. Do your will, not mine. I want
                to listen to you, have a conversation with you, and not just
                talk about myself. I want to know you more, to be more like You
                and to adore you in spirit and in truth.
                <br />
                <br />
                Help me to keep my heart healthy and without pride by being
                humble. Also, guide me to forgive and ask for forgiveness. I
                want to be your best friend and talk to you every day. I ask you
                in the name of Jesus, Amen.
              </p>
            </div>
            <p className="sub-heading">
              Tips that will help you pray without ceasing.
            </p>
            <div className="verse">
              <ul>
                <li>
                  Every day when you wake up, thank God for one more day of
                  life, for your family, health, work, and for all of his
                  benefits.
                </li>
                <li>Surrender your daily plans to God.</li>
                <li>
                  As you’re driving, play worship music in the car and take
                  advantage of that quiet time to listen and worship him.
                </li>
                <li>Follow the Bible reading plan (3 chapters daily).</li>
                <li>
                  Before going to bed, forgive anyone who offended you
                  throughout the day. Pray for that person by name and ask God
                  for forgiveness if you offended anyone or did something that
                  wouldn’t please him. End by thanking God for his protection
                  for you and your family.
                </li>
              </ul>
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
