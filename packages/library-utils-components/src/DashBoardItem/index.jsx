import React from "react";
import PropTypes from "prop-types";
import {
  ColContainer,
  ItemContainer,
  ItemTitle,
  ItemIconTitle,
  ItemBody,
} from "./DashBoardItem.styled";

const DashboardItem = (props) => {
  const {
    children,
    numColsXs,
    numColsMd,
    numColsLg,
    itempositiontype,
    titleClassName,
    titleSize,
    title,
    icon,
    className,
    backgroundColor,
    borderColor,
    height,
  } = props;

  const width = window.innerWidth;
  let classmovile = "false";
  if (width < 576) {
    classmovile = "true";
  }

  return (
    <ColContainer
      xs={numColsXs}
      md={numColsMd}
      lg={numColsLg}
      itempositiontype={itempositiontype}
      classmovile={classmovile}
    >
      <ItemContainer
        height={height}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        className={className || ""}
      >
        <ItemTitle titleSize={titleSize} className={titleClassName}>
          {icon ? <ItemIconTitle className={icon}></ItemIconTitle> : ""}
          {title}
        </ItemTitle>
        <ItemBody className="dashboard-item-body">{children}</ItemBody>
      </ItemContainer>
    </ColContainer>
  );
};

DashboardItem.propTypes = {
  itempositiontype: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  titleClassName: PropTypes.string,
  numColsXs: PropTypes.number,
  numColsMd: PropTypes.number,
  numColsLg: PropTypes.number,
  height: PropTypes.number,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  titleSize: PropTypes.number,
};

export default DashboardItem;
