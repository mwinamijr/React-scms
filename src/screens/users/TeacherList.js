import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Breadcrumb, Table, Space, Typography } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { listTeachers } from "../../features/user/teacherSlice";

const { Title } = Typography;

const TeacherList = () => {
  const dispatch = useDispatch();

  // Access teacher state from the store
  const { loading, error, teachers } = useSelector(
    (state) => state.getTeachers
  );

  useEffect(() => {
    dispatch(listTeachers()); // Dispatch the action to fetch teachers
  }, [dispatch]);

  // Define columns for the Ant Design Table
  const columns = [
    {
      title: "Emp ID",
      dataIndex: "empId",
      key: "empId",
    },
    {
      title: "Full Name",
      key: "fullName",
      render: (text, record) => `${record.first_name} ${record.last_name}`,
    },
    {
      title: "Short Name",
      dataIndex: "short_name",
      key: "short_name",
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          <Link to={`/users/teachers/${record.id}`}>
            <EyeOutlined style={{ color: "blue" }} />
          </Link>
          <Link to={`/users/teachers/${record.id}/edit`}>
            <EditOutlined style={{ color: "green" }} />
          </Link>
          <DeleteOutlined
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => handleDelete(record.id)}
          />
        </Space>
      ),
    },
  ];

  // Handle delete action
  const handleDelete = (id) => {
    console.log("Delete teacher with ID:", id);
    // Add delete logic here
  };

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <Breadcrumb style={{ marginBottom: 16 }}>
        <Breadcrumb.Item>
          <Link to="/dashboard">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Teachers</Breadcrumb.Item>
      </Breadcrumb>

      {/* Title */}
      <Title level={2} style={{ textAlign: "center", marginBottom: 24 }}>
        Teachers
      </Title>

      {/* Content */}
      {loading ? (
        <div style={{ textAlign: "center" }}>
          <Typography.Text>Loading...</Typography.Text>
        </div>
      ) : error ? (
        <div style={{ textAlign: "center" }}>
          <Typography.Text type="danger">{error}</Typography.Text>
        </div>
      ) : (
        <Table
          dataSource={teachers}
          columns={columns}
          rowKey="id"
          bordered
          pagination={{ pageSize: 10 }}
        />
      )}
    </div>
  );
};

export default TeacherList;
