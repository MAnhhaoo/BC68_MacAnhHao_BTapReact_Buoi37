import React from 'react';
import { Space, Table, Tag } from 'antd';

const TableForm = ({ arrSinhvien, handleDelete, handleGetSinhVien }) => {
  const columns = [
    {
      title: 'MSSV',
      dataIndex: 'MSSV',
      key: 'MSSV',
    },
    {
      title: 'Họ Tên',
      dataIndex: 'hoten',
      key: 'hoten',
    },
    {
      title: 'Số Điện Thoại',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '',
      render: (text, record, index) => {
        return (
          <>
            <button
              className='bg-red-500 py-2 px-5 text-white rounded-md'
              onClick={() => {
                handleDelete(record.MSSV);
              }}
            >
              Xóa
            </button>
            <button
              onClick={() => {
                handleGetSinhVien(record);
              }}
              className='px-5 py-2 rounded-md bg-yellow-400 ml-3'
            >
              Sửa
            </button>
          </>
        );
      },
    },
  ];

  const dataSourceWithKeys = arrSinhvien.map((item, index) => ({
    ...item,
    key: index, 
  }));

  return (
    <div>
      <Table columns={columns} dataSource={dataSourceWithKeys} />
    </div>
  );
};

export default TableForm;
