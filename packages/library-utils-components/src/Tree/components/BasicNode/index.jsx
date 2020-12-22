import React from "react";
import PropTypes from "prop-types";
import { NodeContainer } from "./BasicNode.styled";

const TreeNode = (props) => {
  const { node, idNodeTitle, idNode, idNodeText } = props;
  return (
    <NodeContainer id={node[idNode]}>
      <div className="nodeAction">
        <div className="row">
          <div className="col-12 node-Text">{node[idNodeTitle] || ""}</div>
        </div>
        <div className="row">
          <div className="col-12 node-Text">{node[idNodeText]}</div>
        </div>
      </div>
    </NodeContainer>
  );
};

TreeNode.propTypes = {
  node: PropTypes.object.isRequired,
  idNode: PropTypes.string,
  idNodeTitle: PropTypes.string,
  idNodeText: PropTypes.string.isRequired,
};

export default TreeNode;
