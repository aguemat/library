import React, { Component } from "react";
import PropTypes from "prop-types";
import "treantjs/Treant.css";
import "treantjs/examples/comments/example8.css";
import Raphael from "raphael";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicNode from "./components/BasicNode";

window.Raphael = Raphael;

var Treant = require("treantjs/Treant");
Treant = window.Treant;

class Tree extends Component {
  constructor(props) {
    super(props);
    this.treant = null;
  }

  componentDidMount() {
    this.buildNodes();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data && this.props.data.length > 0) {
      this.buildNodes();
    }
  }

  getNewNodes(idNode) {
    const { onSelectNode } = this.props;
    if (onSelectNode) {
      onSelectNode(idNode);
    }
  }

  configTreeNodes() {
    const config = {
      container: "#basic-example",
      connectors: {
        type: "step",
      },
      node: {
        collapsable: true,
      },
      callback: {
        onTreeLoaded: () => {
          const $oNodes = $(".Treant .node");
          $oNodes.on("click", (oEvent) => {
            this.getNewNodes(oEvent.currentTarget.id.replace("-clone", ""));
          });
        },
      },
    };

    return config;
  }

  generateRootNode(parentNode, idNode, idNodeTitle, idNodeText, idImageNode) {
    const parent = {
      uuid: parentNode[idNode],
      active: true,
      text: {
        name: parentNode[idNodeTitle],
        title: parentNode[idNodeText],
      },
    };

    if (idImageNode) {
      parent.image = parentNode[idImageNode];
    }

    return parent;
  }

  async buildNodes() {
    const {
      data,
      parentNode,
      nameParentId,
      idNode,
      idNodeTitle,
      idNodeText,
      idImageNode,
    } = this.props;
    let nodes = [];
    nodes.push(this.configTreeNodes());
    nodes.push(
      this.generateRootNode(
        parentNode,
        idNode,
        idNodeTitle,
        idNodeText,
        idImageNode
      )
    );

    if (data && data.length > 0 && parentNode) {
      data.forEach((node) => {
        let father = node[nameParentId];
        const uuid = (element) => element.uuid === father;
        const indexFather = nodes.findIndex(uuid);
        if (indexFather !== -1) {
          const newNode = {
            uuid: node[idNode],
            parent: nodes[indexFather],
            innerHTML: `#${node[idNode]}`,
          };
          nodes.push(newNode);
        }
      });
    }
    this.treant = new Treant(nodes, null, $);
  }

  renderNodes() {
    const {
      data,
      parentNode,
      children,
      idNode,
      idNodeText,
      idNodeTitle,
      idImageNode,
      typeNode,
    } = this.props;
    if (children) {
      if (data && data.length > 0 && parentNode) {
        return data.map((node) => {
          return React.cloneElement(children, {
            key: node[idNode],
            node: node,
            idNode: idNode,
            idNodeText: idNodeText,
            idNodeTitle: idNodeTitle,
            idImageNode: idImageNode || null,
          });
        });
      }
    } else {
      if (!typeNode || (typeNode && typeNode === "Basic")) {
        if (data && data.length > 0 && parentNode) {
          return data.map((node) => {
            return (
              <BasicNode
                key={node[idNode]}
                node={node}
                idNode={idNode}
                idNodeTitle={idNodeTitle || "title"}
                idNodeText={idNodeText || "text"}
                idImageNode={idImageNode || null}
              />
            );
          });
        }
      }
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          {this.renderNodes()}
          <div
            id="basic-example"
            style={{ minHeight: "400px", width: "100%" }}
          ></div>
        </div>
      </div>
    );
  }
}

Tree.propTypes = {
  data: PropTypes.array,
  onSelectNode: PropTypes.func,
  parentNode: PropTypes.object.isRequired,
  nameParentId: PropTypes.string,
  idNode: PropTypes.string,
  idNodeText: PropTypes.string,
  typeNode: PropTypes.oneOf(["Basic"]),
};

export default Tree;
