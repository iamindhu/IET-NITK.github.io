import React, { useState } from "react";
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SearchEngineOps from "../components/seo"
import Img_IETUpview from "../assets/img/iet-upview.jpg"
import { RenderAuthors } from "../components/helper"
import video from "../../static/home.mp4"
import { SIGShowcase } from "../components/SIGShowcase"
import ReactMarkdown from "react-markdown"






function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len)
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available")
  while (n--) {
    var x = Math.floor(Math.random() * len)
    result[n] = arr[x in taken ? taken[x] : x]
    taken[x] = --len in taken ? taken[len] : len
  }
  return result
}

const MainPage = ({ location, data }) => {
  const [showChatbot, toggleChatbot] = useState(true);
  return (
    <Layout location={location.pathname} title={"Main"}>
      <SearchEngineOps title="We are IET NITK" />
      <main className="page landing-page">
        <div className="video-overlay-wrap">
          <div style = {{maxWidth: "300px"}}>
          </div>
          <div
            id="video-overlay"
            style={{
              // backgroundColor: "rgba(128, 51, 145, 0.44)",
              width: "100%",
              height: "100vh",
              position: "absolute",
              zIndex: 2,
            }}
          />
          <video
            loop={true}
            style={{
              width: "100%",
              zIndex: "1",
              backgroundColor: "black",
            }}
            autoPlay={true}
            muted={true}
            id="hero-video"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </div>
        {/* <div className="app-chatbot-container">
          <ConditionallyRender
            ifTrue={showChatbot}
            show={
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            }
          />
        </div>

        <button
          className="app-chatbot-button"
          onClick={() => toggleChatbot((prev) => !prev)}
        >
          {/* <ButtonIcon className="app-chatbot-button-icon" /> */}
        {/* </button> */} 
        <section className="clean-block about-us" id="about-us">
          <div className="container">
            <div className="block-heading mobile-marginx2">
              <h2 className="text-primary">Who are we?</h2>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <img
                  alt="IET"
                  src={Img_IETUpview}
                  style={{
                    width: "100%",
                    height: "auto",
                    paddingBottom: "1em",
                  }}
                />
              </div>
              <ReactMarkdown
                skipHtml={true}
                className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
              >
                {data.about.main}
              </ReactMarkdown>
            </div>
          </div>
        </section>
        <section className="clean-block about-us">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-primary">Our SIGs</h2>
              <p>
                IET NITK consists of three different Special Interest Groups:
              </p>
            </div>
            <SIGShowcase />
          </div>
        </section>

        <section className="clean-block about-us">
          <div className="container">
            <div className="article-list">
              <div className="container">
                <div className="intro">
                  <h2
                    className="text-primary text-center"
                    style={{ fontWeight: "500" }}
                  >
                    Latest Articles
                  </h2>
                  <p className="text-center">
                    We love to write! Check out more of our stuff on{" "}
                    <Link to="/blog">the IET Blog</Link>
                  </p>
                </div>
                <div className="row" style={{ paddingTop: "2em" }}>
                  {data.blog.nodes.map((element, index) => {
                    let imagelink =
                      element.header.childImageSharp &&
                      element.header.childImageSharp.fixed.srcWebp
                    if (!imagelink) {
                      imagelink = element.header.publicURL
                    }
                    return (
                      <div key={index} className="col-sm-6 col-md-4 item h-100">
                        <div className="card">
                          <img
                            alt={element.title}
                            className="card-img-top w-100 d-block"
                            src={imagelink}
                          />
                          <div className="card-body">
                            <h4 className="card-title">{element.title}</h4>
                            <h6 className="text-muted card-subtitle mb-2">
                              By&nbsp;
                              {RenderAuthors(element.authors, "")}
                              &nbsp;
                              <br />
                              {element.date}
                            </h6>
                            <div style={{ textAlign: "center" }}>
                              <Link
                                className=""
                                style={{ textDecoration: "none" }}
                                to={"blog/" + element.route}
                              >
                                Read More
                                <i className="fa fa-arrow-circle-right ml-2" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="clean-block about-us">
          <div className="container">
            <div className="article-list">
              <div className="container">
                <div className="intro">
                  <h2
                    className="text-primary text-center"
                    style={{ fontWeight: "500", paddingBottom: "-1em" }}
                  >
                    Our Projects
                  </h2>
                  <p className="text-center">
                    We love doing our projects! Find more{" "}
                    <Link to="/projects">here</Link>
                  </p>
                </div>
                <div className="articles row" style={{ paddingTop: "2em" }}>
                  {getRandom(data.projects.nodes, 4).map((element, index) => (
                    <div key={index} className="col-lg-6 col-md-6 mt-4">
                      <div className="card h-100">
                        <div className="card-body">
                          <h6 className="card-title">
                            {element.url ? (
                              <Link
                                to={
                                  "/projects/" +
                                  element.title
                                    .toLowerCase()
                                    .split(" ")
                                    .join("")
                                }
                                className="card-link text-capitalize"
                              >
                                {element.title}
                              </Link>
                            ) : (
                              element.title
                            )}
                          </h6>
                          {element.sig ? (
                            <Link
                              to={"/sigs/" + element.sig.name.toLowerCase()}
                              className="badge badge-info text-uppercase mr-2"
                            >
                              {element.sig.name}
                            </Link>
                          ) : null}
                          {element.label ? (
                            <div className="badge badge-primary ">
                              {element.label}
                            </div>
                          ) : null}
                          <p className="card-text">
                            Built by
                            {RenderAuthors(element.authors || [], "")}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="clean-block about-us">
          <div className="container">
            <div className="article-list">
              <div className="container">
                <div className="articles row" style={{ paddingTop: "2em" }}>
                  <div className="col-lg-6 col-md-6 mt-4">
                    <div className="intro">
                      <h2
                        className="text-primary text-center"
                        style={{ fontWeight: "500", paddingBottom: "-1em" }}
                      >
                        Our Events
                      </h2>
                      <p className="text-center">
                        Our latest event was {data.events.nodes[0].title}, but
                        we conduct many events throughout the year. Find more{" "}
                        <Link to="/events">here</Link>
                      </p>
                    </div>
                  </div>
                  {/* {data.events.nodes.map((element, index) => ( */}
                  <div className="col-lg-6 col-md-6 mt-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h6 className="card-title">
                          <Link
                            to={"/events/" + data.events.nodes[0].route}
                            className="card-link text-capitalize"
                          >
                            {data.events.nodes[0].title}
                          </Link>
                        </h6>
                        <div className="text-muted card-subtitle">
                          {data.events.nodes[0].date}
                        </div>
                        <p className="card-text">
                          {data.events.nodes[0].excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* ))} */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const postQuery = graphql`
  {
    about: strapiAboutClub {
      main
    }
    blog: allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        date(formatString: "MMMM Do, YYYY")
        excerpt
        title
        route
        header {
          childImageSharp {
            fixed {
              srcWebp
            }
          }
          publicURL
        }
        authors {
          name
        }
      }
    }
    events: allStrapiEvents(sort: { fields: date, order: DESC }, limit: 1) {
      nodes {
        route
        title
        route
        date(formatString: "MMMM Do, YYYY")
        excerpt
      }
    }
    projects: allStrapiProjects(
      filter: { authors: { elemMatch: { name: { ne: null } } } }
    ) {
      nodes {
        title
        description
        sig {
          name
        }
        url
        authors {
          name
        }
      }
    }
  }
`
export default MainPage
