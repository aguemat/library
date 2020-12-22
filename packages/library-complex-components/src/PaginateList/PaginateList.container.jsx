import React, { Component } from "react";
import PropTypes from "prop-types";
import List from "./PaginateList.view";
import { withTranslation } from "react-i18next";

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      forceRefresData: false,
      columns: [],
      pagination: {
        pageCount: 0,
        page: 0,
      },
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.filters !== this.props.filters) {
      this.refreshData(this.props.filters);
    }
    if (
      prevProps.forceRefresh !== this.props.forceRefresh &&
      this.props.forceRefresh === true
    ) {
      this.setRefresData(this.props.forceRefresh);
    }
    if (
      prevState.forceRefresData !== this.state.forceRefresData &&
      this.state.forceRefresData === true
    ) {
      this.refreshData(this.props.filters, true);
    }
  }

  setRefresData(forceRefresh) {
    this.setState({ forceRefresData: forceRefresh });
  }

  refreshData(filters, resetRefresh = false) {
    const { defaultPageSize } = this.props;
    if (resetRefresh) {
      this.setRefresData(false);
    }
    const filter = {
      page: 1,
      pageSize: defaultPageSize || 10,
      filters: filters,
    };

    this.getData(filter);
  }

  async fetchData(state, instance) {
    const { page } = state;

    const filter = {
      page: page + 1,
      pageSize: page.pageSize,
    };
    if (this.props.filters) {
      filter.filters = this.props.filters;
    }

    this.getData(filter);
  }

  async getData(filter) {
    const { toList } = this.props;
    if (toList) {
      const newPag = { ...this.state.pagination };

      const result = await toList(filter);
      newPag.pageCount = result?.totalPages || 0;
      newPag.page = result?.page || 0;
      this.setState({
        data: result?.docs || [],
        pagination: newPag,
      });
    }
  }

  render() {
    const {
      t,
      title,
      formlinkToAdd,
      columns,
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
      <List
        title={title}
        formlinkToAdd={formlinkToAdd}
        data={this.state.data || []}
        columns={columns}
        pagination={this.state.pagination}
        onFetchData={(state, instance) => {
          this.fetchData(state, instance);
        }}
        defaultPageSize={defaultPageSize}
        showPaginationTop={showPaginationTop}
        showPageSizeOptions={showPageSizeOptions}
        sortable={sortable}
        iconAdd={iconAdd}
        classNameLinkAdd={classNameLinkAdd}
        classNameTable={classNameTable}
        tbPreviousText={t(tbPreviousText || "generic.tables.previous")}
        tbNextText={t(tbNextText || "generic.tables.next")}
        tbLoadingText={t(tbLoadingText || "generic.tables.loading")}
        tbNoDataText={t(tbNoDataText || "generic.tables.no_data")}
        tbPageText={t(tbPageText || "generic.tables.page")}
        tbOfText={t(tbOfText || "generic.tables.of")}
        tbRowsText={t(tbRowsText || "generic.tables.rows")}
      />
    );
  }
}

ListContainer.propTypes = {
  title: PropTypes.string,
  formlinkToAdd: PropTypes.string,
  defaultPageSize: PropTypes.number,
  columns: PropTypes.array.isRequired,
  toList: PropTypes.func.isRequired,
  filters: PropTypes.object,
  forceRefresh: PropTypes.bool,
  resetRefreshData: PropTypes.func,
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

export default withTranslation()(ListContainer);
