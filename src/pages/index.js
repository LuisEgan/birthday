import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import bd from "../images/bd.gif"
import photo1 from "../images/1.jpg"
import photo2 from "../images/2.jpg"
import photo3 from "../images/3.jpg"
import photo4 from "../images/4.jpg"
import photo5 from "../images/5.jpg"
import photo6 from "../images/6.jpg"
import photo7 from "../images/7.jpg"

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7]

const IndexPage = () => (
  <main>
    <div id="carousel">
      <Carousel
        transitionTime={1000}
        showThumbs={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
      >
        {photos.map((p, i) => (
          <div key={i}>
            <img src={p} />
          </div>
        ))}
      </Carousel>
    </div>

    <h1>HAPPY BIRTHDAY!!!</h1>
    <br />
    <span>🎂🎂🎂🎂🎂🎂🎂🎂🎂</span>
    <br />
    <img src={bd} />
    <br />
    <span>❤️❤️❤️❤️❤️❤️❤️❤️❤️</span>
  </main>
)

export default IndexPage
