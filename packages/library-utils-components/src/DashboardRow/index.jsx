import React from "react";
import PropTypes from "prop-types";
import { RowContainer } from "./DashBoardRow.styled";

const DashboardRow = (props) => {
  const { children, className } = props;

  const renderItems = (children) => {
    return children.map((item, index) => {
      let itempositiontype = "";
      if (index === 0) {
        itempositiontype = "first-item";
      } else if (index === React.Children.count(children) - 1) {
        itempositiontype = "last-item";
      } else {
        itempositiontype = "normal-item";
      }
      return (
        <React.Fragment key={index}>
          {React.cloneElement(item, { itempositiontype: itempositiontype })}
        </React.Fragment>
      );
    });
  };

  const renderItem = (children) => {
    return (
      <React.Fragment>
        {React.cloneElement(children, { itempositiontype: null })}
      </React.Fragment>
    );
  };

  return (
    <RowContainer className={className || ""}>
      {children && React.Children.count(children) > 1 && renderItems(children)}
      {children && React.Children.count(children) === 1 && renderItem(children)}
    </RowContainer>
  );
};

DashboardRow.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default DashboardRow;
