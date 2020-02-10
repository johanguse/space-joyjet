import React from "react"
import ImageAboutUs from './about-image'
import './_about.scss';

const About = () => (
  <section id="about-us" className="container about-us">
    <div className="row">
        <div className="col-4">
          <ImageAboutUs />
        </div>
        <div className="col-8">
          <h4 className="about-title">About us</h4>
          <p className="about-text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
          <br /><br />
          In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis
          pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
          eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
          ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
          Quisque rutrum. 
          </p>
        </div>
    </div>
  </section>
);

export default About;
