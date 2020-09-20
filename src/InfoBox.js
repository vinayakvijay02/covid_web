import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";
export default function InfoBox({
  title,
  active,
  isRed,
  cases,
  total,
  ...props
}) {
  return (
    <Card
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
      onClick={props.onClick}
    >
      <CardContent>
        <Typography color="textSecondary" className="infoBox_title">
          {title}
        </Typography>
        <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
          {cases}
        </h2>
        <Typography color="textSecondary" className="infoBox_total">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}
