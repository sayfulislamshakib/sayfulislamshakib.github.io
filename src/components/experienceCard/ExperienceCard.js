import React from "react";
import "./ExperienceCard.css";

function ExperienceCard(props) {
  const experience = props.experience;
  const theme = props.theme;
  return (
    <div
      className="experience-card"
      style={{
        // border: `1px solid ${experience["color"]}`,
        backgroundColor: "#FAFAFA",
      }}
    >
      <div className="experience-card-logo-div">
        <img
          className="experience-card-logo"
          src={require(`../../assests/images/${experience["logo_path"]}`)}
          alt=""
        />
      </div>
      <div className="experience-card-body-div">
        <div className="experience-card-header-div">
          <div className="experience-card-heading-left">
            <h3 className="experience-card-title" style={{ color: "#000" }}>
              {experience["title"]}
            </h3>
            <p
              className="experience-card-company"
              style={{ color: "#000" }}
            >
              <a
                href={experience["company_url"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience["company"]}
              </a>
            </p>
          </div>
          <div className="experience-card-heading-right">
            <p
              className="experience-card-duration"
              style={{ color: "#000" }}
            >
              {experience["duration"]}
            </p>
            <p
              className="experience-card-location"
              style={{ color: "#000" }}
            >
              {experience["location"]}
            </p>
          </div>
        </div>
        <p
          className="experience-card-description"
          style={{ color: "#000" }}
        >
          {experience["description"]}
        </p>
      </div>
    </div>
  );
}

export default ExperienceCard;
