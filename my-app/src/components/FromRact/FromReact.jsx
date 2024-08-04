import React from 'react';
import './FromReact.scss';
import { useFormik } from 'formik';

const FromReact = () => {
  const {handleChange , values , handleSubmit} = useFormik({
    initialValues: {
      MSSV: "",
      hoten: "",
      phone: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className='container py-2 bg'>
      <div>
        <h1 className='text-white text-3xl py-3 pl-4 color'>Thông tin sinh viên</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-2 gap-8'>
            <div>
              <label htmlFor="MSSV" className="block mb-2 text-sm font-medium text-gray-900">Mã sinh viên</label>
              <input
                type="text"
                name='MSSV'
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Nhập mã sinh viên của bạn"
                onChange={handleChange}
                value={values.MSSV}
              />
            </div>
            <div>
              <label htmlFor="hoten" className="block mb-2 text-sm font-medium text-gray-900">Họ tên</label>
              <input
                type="text"
                name='hoten'
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Nhập họ và tên của bạn"
                onChange={handleChange}
                value={values.hoten}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số điện thoại</label>
              <input
                type="tel"
                name='phone'
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Nhập số điện thoại của bạn"
                onChange={handleChange}
                value={values.phone}
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input
                type="email"
                name='email'
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nhập email của bạn"
                onChange={handleChange}
                value={values.email}
              />
            </div>
          </div>
          <button type="submit" className='bg-green-500 rounded px-3 py-2 mt-6'>Thêm sinh viên</button>
        </form>
      </div>
    </div>
  );
};

export default FromReact;
