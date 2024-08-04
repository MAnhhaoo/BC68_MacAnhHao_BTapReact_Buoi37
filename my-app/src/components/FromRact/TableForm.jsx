import React from 'react'
import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'MSSV',
    dataIndex: 'MSSV',
    key: 'name',
  },
  {
    title: 'Họ Tên',
    dataIndex: 'hoten',
    key: 'age',
  },
  {
    title: 'Số Điện Thoại',
    dataIndex: 'phone',
    key: 'address',
  },
  {
    title: 'Email',
    key: 'tags',
    dataIndex: 'email',
   
  },
  {
    title: "",
    render: ()=>{
        return(
            <>
            <button className='bg-red-500 py-2 px-5 text-white rounded-md'>xoa </button>
            <button className='px-5 py-2 rounded-md bg-yellow-400 ml-3'>sua </button>
            </>
        );
    }
  },

];






const TableForm = ({arrSinhvien}) => {
  return (
    <div><Table columns={columns} dataSource={arrSinhvien} /></div>
  )
}

export default TableForm