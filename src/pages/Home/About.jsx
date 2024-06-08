import logo from "../../assets/zaphtours.jpeg";
import "./AboutUs.css";
const About = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <div className="image">
        <img src={logo} alt="" className="about-img" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          omnis deserunt nostrum in obcaecati quo. Vel inventore ut possimus
          alias, mollitia, doloremque deleniti dignissimos perspiciatis velit
          placeat vitae illum quo dolores nulla ex eum, similique itaque at
          odio! Voluptate dolor eos dolores dolorum ex hic maiores laboriosam
          mollitia? Eveniet, ducimus?
        </p>
      </div>
    </div>
  );
};
export default About;
