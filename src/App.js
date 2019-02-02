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
                <small>16</small> “The earnest prayer of a righteous person has
                great power and produces wonderful results.”
                <br />
                <strong className="verse__ref">(James 5:16b NLT)</strong>
              </p>
            </div>
            <p className="sub-heading">Prayer of the week.</p>
            <div className="verse">
              <p>
                Heavenly Father, I want my prayer to not be impeded and reach
                your throne. I ask you to help me with my faith, that I can see
                with your eyes and see things that are not done yet as if they
                already were.
                <br />
                <br />
                I ask forgiveness for not doing what pleases you, because
                although I know what is good, many times I don’t do it. Help me
                align myself to your perfect will.
                <br />
                <br />
                Lord, examine my heart and show me if there is a lack of
                forgiveness toward someone. Help me to guard my heart above
                everything else.
                <br />
                <br />I declare I have the mind of Christ, that my mind is a
                highway of your thoughts and not the Devil’s garbage bin. I will
                think of good, of what is pleasing, what has virtue and what is
                worthy of praise.
                <br />
                <br />I ask you to be the center of my home, my marriage, and my
                life. In the name of Jesus, amen.
              </p>
            </div>
            <p className="sub-heading">
              Tips For Your Prayer To Not Have Obstacles
            </p>
            <div className="verse">
              <ol>
                <li>
                  Speak with faith. Give thank to God in advance, daily, for the
                  response to your prayers. Example: If you are asking to be
                  healed, say, “Thank you God because I am already healed.”
                </li>
                <br />
                <li>
                  Look for a promise of God in the Bible that supports your
                  petition. Learn it and repeat it in your prayer time. Example,
                  if you’re praying for your family to be saved, say, “Because
                  your Word says, ‘Believe in the Lord and you and your house
                  will be saved’ (Acts 16:31).”
                </li>
                <br />
                <li>
                  If you have a damaged relationship, fix the situation as soon
                  as possible, ask for forgiveness and forgive.
                </li>
                <br />
                <li>
                  In your daily prayer, ask God to examine your heart. Give him
                  your areas of weakness and ask him to align you to his will.
                </li>
                <br />
                <li>
                  If you are married and have problems in your marriage, invest
                  in your marriage. Go to the “Love and Prayer” dinner. Ask your
                  mentor, elder, or pastor for help or more information.
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
