import React from 'react'

const Content = () => {
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      class="content"
    >
      <h2>Skills</h2>
      <p>HTML</p>
      <div class="skill-content">
        <div class="skill html">90%</div>
      </div>

      <p>CSS</p>
      <div class="skill-content">
        <div class="skill css">87%</div>
      </div>

      <p>Bootstrap</p>
      <div class="skill-content">
        <div class="skill bs">82%</div>
      </div>

      <p>JavaScript</p>
      <div class="skill-content">
        <div class="skill js">5%</div>
      </div>
    </div>
  )
}

export default Content