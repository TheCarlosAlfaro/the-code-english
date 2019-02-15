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
            <p className="sub-heading">Verse of the week</p>
            <div className="verse__container verse">
              <p>
                <small>12-14</small> But most of all, my brothers and sisters,
                never take an oath, by heaven or earth or anything else. Just
                say a simple yes or no, so that you will not sin and be
                condemned.
                <br />
                <strong className="verse__ref">(James 5:12-14 NLT)</strong>
              </p>
            </div>
            <p className="sub-heading">Prayer of the week</p>
            <div className="verse">
              <p>
                Heavenly Father, I give you thanks for giving us a way of
                connecting with you through prayer, for always being available
                to hear us and letting us bring our burdens to you.
                <br />
                <br />
                Thank you because I know that you always hear me and respond to
                the majority of my petitions in your perfect timing. You have
                changed my mourning to dancing when I have called on you during
                my crises, and most importantly, I find rest, peace, guidance,
                strength and everything I need in you.
                <br />
                <br />
                Thank you for your promises you’ve given us that help us pray
                and fill us with hope and faith for every situation in our
                lives.
                <br />
                <br />
                Help me, Holy Spirit, to always depend on God and place in me
                every day the desire to pray.
              </p>
            </div>
            <p className="sub-heading">Tips to maintain your defenses</p>
            <div className="verse">
              <ol>
                <li>
                  Do not forget to cover your family in prayer everyday and that
                  your children see a role model in you as a man or woman that
                  depends on God.
                </li>
                <br />
                <li>
                  If you need wisdom to make a decision, come to God in prayer.
                </li>
                <br />
                <li>In the moments of crisis, come to God in prayer.</li>
                <br />
                <li>
                  If you are going through a time of stress in your life and
                  need peace, come to God in prayer.
                </li>
                <br />
                <li>
                  Other than your personal prayer time with God, join an
                  intercession group in church.
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
