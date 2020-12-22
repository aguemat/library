import React from "react";
import PaginateList from ".";

export default {
  title: "Complex/List/Paginate List",
  component: PaginateList,
};

const getData = (filter) => {
  if (filter.page === 1) {
    return {
      docs: [
        {
          name: "Test 01",
          surname: "Test Tets",
          email: "Test01@testing.com",
          phone: "+34 856 8854 844",
        },
        {
          name: "Test 02",
          surname: "Test Tets",
          email: "Test02@testing.com",
          phone: "+34 856 8854 844",
        },
        {
          name: "Test 03",
          surname: "Test Tets",
          email: "Test03@testing.com",
          phone: "+34 856 8854 844",
        },
        {
          name: "Test 04",
          surname: "Test Tets",
          email: "Test04@testing.com",
          phone: "+34 856 8854 844",
        },
        {
          name: "Test 05",
          surname: "Test Tets",
          email: "Test05@testing.com",
          phone: "+34 856 8854 844",
        },
        {
          name: "Test 06",
          surname: "Test Tets",
          email: "Test06@testing.com",
          phone: "+34 856 8854 844",
        },
        {
          name: "Test 07",
          surname: "Test Tets",
          email: "Test07@testing.com",
          phone: "+34 856 8854 844",
        },
        {
          name: "Test 08",
          surname: "Test Tets",
          email: "Test08@testing.com",
          phone: "+34 856 8854 844",
        },
        {
          name: "Test 09",
          surname: "Test Tets",
          email: "Test09@testing.com",
          phone: "+34 856 8854 844",
        },
        {
          name: "Test 010",
          surname: "Test Tets",
          email: "Test010@testing.com",
          phone: "+34 856 8854 844",
        },
      ],
      totalDocs: 11,
      limit: 10,
      totalPages: 2,
      page: 1,
      pagingCounter: 1,
      hasPrevPage: false,
      hasNextPage: true,
      prevPage: null,
      nextPage: 2,
    };
  } else if (filter.page === 2) {
    return {
      docs: [
        {
          name: "Test 011",
          surname: "Test Tets",
          email: "Test011@testing.com",
          phone: "+34 856 8854 844",
        },
      ],
      totalDocs: 11,
      limit: 10,
      totalPages: 2,
      page: 2,
      pagingCounter: 2,
      hasPrevPage: false,
      hasNextPage: true,
      prevPage: null,
      nextPage: 2,
    };
  }
};

const getColumns = () => {
  return [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Surname",
      accessor: "surname",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Phone",
      accessor: "phone",
    },
  ];
};

const Template = (args) => <PaginateList {...args} />;

export const List = Template.bind({});
List.args = {
  title: "Paginated List Test",
  defaultPageSize: 10,
  columns: getColumns(),
  toList: getData,
};
