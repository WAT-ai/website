import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ReactComponent as Logo } from "../assets/wat_ai_logo.svg"; // Adjust the path as necessary

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Main Content */}
      <div className="main">
        {/* Section 1 */}
        <div
          className="section1"
          style={{ textAlign: "center", padding: "40px 0" }}
        >
          <Logo
            style={{
              display: "block",
              margin: "0 auto",
              width: "22%",
              minWidth: "300px",
            }}
          />
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              fontSize: "17px",
              marginTop: "-20px",
              fontWeight: 200,
              letterSpacing: "2px",
            }}
          >
            Fostering the future of artificial intelligence at Waterloo
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", marginTop: "-15px" }}
          >
            <a
              href="https://forms.gle/7bxf6ijXSGTZ8gyu9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Involved <b style={{ color: "#fff" }}>❱</b>
            </a>
          </Typography>
        </div>
        {/* Section 2: About Us */}
        <div className="section2" style={{ padding: "50px" }}>
          <Typography variant="h4" sx={{ marginBottom: "20px", color: "grey" }}>
            About Us
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              lineHeight: "40px",
              marginBottom: "20px",
            }}
          >
            Fostering The Future Of AI Talent <br />
            At The University of Waterloo
          </Typography>
          <Typography variant="body1">
            WAT.ai is a student-run Artificial Intelligence (AI) Organization at
            the University of Waterloo and the undergraduate student body of the{" "}
            <a
              href="https://uwaterloo.ca/artificial-intelligence-institute/"
              style={{ fontSize: "13px" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Waterloo AI Institute
            </a>{" "}
            and member of the{" "}
            <a
              href="https://uwaterloo.ca/sedra-student-design-centre/"
              style={{ fontSize: "13px" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Sedra Student Design Centre (SSDC)
            </a>
            . Our goal is to establish an environment to enable the continued
            growth of AI talent and suitable access to opportunities within the
            Waterloo community. We provide opportunities for undergraduate and
            graduate students to engage in impactful projects through
            collaboration with companies and internal research.
          </Typography>
          <Typography sx={{ marginTop: "40px" }}>
            <a href="team.html">
              Meet The Team <b style={{ color: "#fff" }}>❱</b>
            </a>
          </Typography>
        </div>
        {/* Section 3: Our Partners */}
        <div
          className="slide"
          style={{
            marginTop: "-120px",
            textAlign: "center",
            padding: "50px 0",
          }}
        >
          <Typography variant="h4" sx={{ marginBottom: "20px", color: "grey" }}>
            Our Partners
          </Typography>
          <div className="tech-slideshow">
            <div className="mover-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
