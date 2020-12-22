import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import { Title } from "@aguemat/react-basic-components";
import {
  AddItemContainerStyled,
  LinkAddItemStyled,
} from "./PaginateList.styled";

class EmployersList extends Component {
  render() {
    const {
      data,
      columns,
      pagination,
      onFetchData,
      title,
      formlinkToAdd,
      defaultPageSize,
      sortable,
      showPageSizeOptions,
      showPaginationTop,
      iconAdd,
      classNameLinkAdd,
      classNameTable,
      tbPreviousText,
      tbNextText,
      tbLoadingText,
      tbNoDataText,
      tbPageText,
      tbOfText,
      tbRowsText,
    } = this.props;
    return (
      <>
        <div className="row">
          <div className="col-10">
            {title ? <Title type="h5">{title}</Title> : ""}
          </div>
          {formlinkToAdd ? (
            <AddItemContainerStyled className="col-2">
              <LinkAddItemStyled
                to={formlinkToAdd}
                type="routerDom"
                variant="primary"
                className={classNameLinkAdd || ""}
              >
                <i className={iconAdd || "fas fa-plus-square"} />
              </LinkAddItemStyled>
            </AddItemContainerStyled>
          ) : (
            ""
          )}
        </div>
        <div className="row">
          <div className="col-12">
            <ReactTable
              data={data ? data : []}
              className={
                classNameTable
                  ? `${classNameTable} -striped -highlight`
                  : "-striped -highlight"
              }
              manual
              showPaginationTop={showPaginationTop || false}
              showPageSizeOptions={showPageSizeOptions || false}
              sortable={sortable || false}
              pageSizeOptions={defaultPageSize ? [defaultPageSize] : [10]}
              defaultPageSize={defaultPageSize ? defaultPageSize : 10}
              pages={pagination ? pagination.pageCount : 0}
              columns={columns}
              onFetchData={onFetchData}
              previousText={tbPreviousText}
              nextText={tbNextText}
              loadingText={tbLoadingText}
              noDataText={tbNoDataText}
              pageText={tbPageText}
              ofText={tbOfText}
              rowsText={tbRowsText}
            />
          </div>
        </div>
      </>
    );
  }
}

EmployersList.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  title: PropTypes.string,
  formlinkToAdd: PropTypes.string,
  defaultPageSize: PropTypes.number,
  sortable: PropTypes.bool,
  showPageSizeOptions: PropTypes.bool,
  showPaginationTop: PropTypes.bool,
  iconAdd: PropTypes.string,
  classNameLinkAdd: PropTypes.string,
  classNameTable: PropTypes.string,
  tbPreviousText: PropTypes.string,
  tbNextText: PropTypes.string,
  tbLoadingText: PropTypes.string,
  tbNoDataText: PropTypes.string,
  tbPageText: PropTypes.string,
  tbOfText: PropTypes.string,
  tbRowsText: PropTypes.string,
};

export default EmployersList;
