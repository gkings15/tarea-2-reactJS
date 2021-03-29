import React from "react";
import confDATA from "../../constants/confDATA";
import ConferencesPreview from "../../components/Conferences/conferences-preview.component";
import "./HomePage.styles.scss";

const HomePage = () => {
  const conferences = confDATA;

  return (
    <div className="homepage">
      {conferences.map(({ id, ...otherProps }) => (
        <ConferencesPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

HomePage.displayName = "HomePage";

export default HomePage;
