import React, { useEffect, useState } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import axios from "axios";
import { css } from "@emotion/core";
import { BarLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/layout";

const override = css`
  margin: 20px auto;
`;

// TODO: change to prod
const tweetFetchUrl =
  "https://m6t8xt0vz8.execute-api.eu-west-1.amazonaws.com/dev/tweets";

export default function HundredDaysOfCode() {
  const [tweets, setTweets] = useState(null);
  const [error, setError] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [username, setUsername] = useState("");
  const [fetchedUsername, setFetchedUsername] = useState("");
  const [showingVisitorTweets, setShowingVisitorTweets] = useState(false);
  const [visitorTweets, setVisitorTweets] = useState(null);

  const fetchTweets = username => {
    const headers = {
      "x-api-key": "OGVd2RIxSX4VDFoXvj0CJ9fbXI3txIkE8xhdVd17"
    };
    return axios.get(
      `${tweetFetchUrl}?username=${username}&filter=100daysofcode`,
      { headers }
    );
  };

  useEffect(() => {
    setFetching(true);
    fetchTweets("harri_etty")
      .then(result => {
        setError(null);
        setTweets(result.data);
        setFetching(false);
      })
      .catch(e => {
        setError(e);
        setFetching(false);
        setTweets(null);
      });
  }, []);

  const round1Tweets = [];
  const round2Tweets = [];
  if (tweets) {
    tweets.forEach(t => {
      if (t.full_text.toLowerCase().includes("round \u0032")) {
        round2Tweets.push(t);
      } else {
        round1Tweets.push(t);
      }
    });
  }

  const showVisitorTweets = e => {
    e.preventDefault();
    setFetching(true);
    setShowingVisitorTweets(false);
    setFetchedUsername("");
    setVisitorTweets(null);
    fetchTweets(username)
      .then(result => {
        setError(null);
        setVisitorTweets(result.data);
        setShowingVisitorTweets(true);
        setFetching(false);
        setFetchedUsername(username);
        setUsername("");
      })
      .catch(e => {
        setError(e);
        setUsername("");
        setFetching(false);
      });
  };

  return (
    <Layout>
      <div className="main-container container">
        <div className="row">
          <div className="column column-80" style={{ margin: "auto" }}>
            <h4>100 Days of Code</h4>
            <p>
              <a
                href="https://www.100daysofcode.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                #100DaysOfCode
              </a>{" "}
              is a public challenge encouraging developers to code for an hour a
              day, and post their progress.
            </p>
            <p>
              I&apos;ve been doing it for over a year, and wanted to see all the
              tweets I&apos;d made containing the hashtag. So I built a little{" "}
              <a
                href="https://github.com/harrietty/list-tweets-api"
                target="_blank"
                rel="noopener noreferrer"
              >
                golang API
              </a>{" "}
              to pull down all my tweets in which I mention #100DaysOfCode.
            </p>
            <p>
              If your Twitter profile is public, you can pop your username in
              the field below and see all your #100DaysOfCode tweets, too!
            </p>
            <form>
              <div className="container">
                <div className="row" style={{ justifyContent: "center" }}>
                  <div className="column" style={{ margin: "auto" }}>
                    <input
                      type="text"
                      placeholder="Your twitter username"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="column" style={{ margin: "5px" }}>
                    <button className="button" onClick={showVisitorTweets}>
                      See my #100DaysOfCode Tweets!{" "}
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                </div>
              </div>
            </form>
            {error && (
              <React.Fragment>
                <p>Sorry, this isn&apos;t working at the moment</p>
                <p>😞</p>
              </React.Fragment>
            )}
            {fetching && (
              <BarLoader
                className="bar-loader"
                color="lightseagreen"
                css={override}
              />
            )}
            {showingVisitorTweets && visitorTweets && (
              <React.Fragment>
                <h5>Showing {fetchedUsername}&apos;s tweets</h5>
                {visitorTweets.map(t => (
                  <TwitterTweetEmbed tweetId={t.id_str} key={t.id} />
                ))}
                {visitorTweets.length === 0 && (
                  <p>
                    Sorry, we didn&apos;t find any #100DaysOfCode tweets for{" "}
                    {fetchedUsername}
                  </p>
                )}
              </React.Fragment>
            )}
            {tweets && !showingVisitorTweets && !fetching && (
              <React.Fragment>
                <h5>Showing harri_etty&apos;s tweets</h5>
                <h3>Round 2:</h3>
                {round2Tweets.map(t => (
                  <TwitterTweetEmbed tweetId={t.id_str} key={t.id} />
                ))}
                <h3>Round 1:</h3>
                {round1Tweets.map(t => (
                  <TwitterTweetEmbed tweetId={t.id_str} key={t.id} />
                ))}
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
