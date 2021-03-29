import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

const ButtonPrimary = ({ type, to }) => (
  <Link className="buttonPrimary" to={to}>
    <Button
      variant="contained"
      color="secondary"
      endIcon={<ExitToAppOutlinedIcon>back</ExitToAppOutlinedIcon>}
    >
      {type === "other" ? "OtherOption" : "GO BACK"}
    </Button>
  </Link>
);

ButtonPrimary.displayName = "ButtonPrimary";

export default ButtonPrimary;
