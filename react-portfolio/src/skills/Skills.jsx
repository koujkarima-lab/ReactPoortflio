import React from 'react'

const Skills = () => {
  return (
<section className="second__section">
    <div className="section__skills">
      <h1> Skills</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ea, saepe, quos et molestias ratione
        ducimus quae aliquid harum corrupti maxime laudantium sapiente beatae quidem nesciunt amet, vitae
        nihil
        odio?</p>
    </div>
    <div className="section__data">
      <div className="data__focus">
        <h3> MY FOCUS </h3> <span className="my">___________________</span>
        <p>UI/UX design</p>
        <p>Reponsive Desing</p>
        <p>Web Design</p>
        <p>Mobile Ap Desing</p>
      </div>
      <div className="data__progress">
        <div className="html">
          <label htmlFor="html" className="label"> HTML</label>
          <progress value="90" max="100"></progress>
        </div>
        <div className="css">
          <label htmlFor="html">CSS</label> <progress value="90" max="100" color="#6BBBE5"> </progress>
        </div>
        <div className="javascript">
          <label htmlFor="html">javascript</label> <progress value="88" max="100"></progress>
        </div>
        <div className="react">
          <label htmlFor="html">React</label><progress value="86" max="100"></progress>
        </div>
        <div className="photoshop">
          <label htmlFor="html">Photoshop</label> <progress value="79" max="100"></progress>
        </div>
        <div className="abode">
          <label htmlFor="html">Adobe XD</label><progress value="76" max="100"></progress>
        </div>
        <div className="node">
          <label htmlFor="html">Node.js</label> <progress value="60" max="100"></progress>
        </div>
        <div className="wordpress">
          <label htmlFor="html"> Wordpress</label> <progress value="59" max="100"></progress>
        </div>
      </div>
    </div>
  </section>
    )
}

export default Skills