import React from "react";
import Navbar from "../bars/Navbar";
import Copyright from "../utilities/Copyright";
import SocialMediaArea from "../utilities/SocialMediaArea";
import ceo from "../../assets/images/about-page-images/ceo.jpeg";

const About = () => {
  return (
    <>
      <Navbar />
      <hr />
      <main className="about">
        <div className="container">
          <section className="grid">
            <div className="info">
              <div className="about">
                <h1 className="section-heading">About Me</h1>
              </div>
              <div className="img-ml">
                <img alt="" src={ceo} />
              </div>
              <div>
                <div className="intro">
                  <h2>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aliquid, repellat!
                  </h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Reprehenderit assumenda eveniet magnam earum? Voluptates
                    voluptas beatae placeat reiciendis tenetur odio soluta,
                    quasi ipsum quod vel temporibus quibusdam sunt rem unde.
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Natus atque perspiciatis ratione voluptatem perferendis odio
                    odit dicta velit neque officiis! Quia dolorem numquam
                    officiis eius consequatur cumque quam facere aspernatur?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae, aut?
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <SocialMediaArea />;
      <Copyright />
    </>
  );
};

export default About;
