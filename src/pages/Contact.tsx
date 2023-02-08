import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";

interface DataType {
  phone: string;
  email: string;
  linkedin: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Phone Number",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Email Address",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "LinkedIn",
    dataIndex: "linkedin",
    key: "linkedin",
    render: (url) => (
      <a
        href="https://www.linkedin.com/in/justin-ng-932908239/"
        target="_blank"
      >
        {url}
      </a>
    ),
  },
];

const data: DataType[] = [
  {
    phone: "(734) 780 1789",
    email: "justinjn@umich.edu",
    linkedin: "https://www.linkedin.com/in/justin-ng-932908239/",
  },
];

function Contact() {
  return (
    <div>
      <Table dataSource={data} columns={columns} />
    </div>
  );
}

export default Contact;
