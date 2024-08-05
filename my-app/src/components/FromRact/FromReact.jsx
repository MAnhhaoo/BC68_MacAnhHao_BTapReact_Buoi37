import React, { useEffect, useState } from 'react';
import './FromReact.scss';
import { useFormik } from 'formik';
import TableForm from './TableForm';
import Input from './Input';
import { getValueLocalStorage, setValueLocalStorage } from '../../utils/utils';
import * as yup from 'yup';

const FromReact = () => {
  const [arrSinhvien, setarrSinhvien] = useState([]);
  const [sinhvien, setsinhvien] = useState(null);

  const formik = useFormik({
    initialValues: {
      MSSV: "",
      hoten: "",
      phone: "",
      email: "",
    },
    onSubmit: (values, { resetForm }) => {
      let newarrsinhvien = [...arrSinhvien, values];
      setarrSinhvien(newarrsinhvien);
      setValueLocalStorage("arrSinhvien", newarrsinhvien);
      resetForm();
    },
    validationSchema: yup.object({
      MSSV: yup.string()
        .matches(/^\d+$/, "Mã sinh viên chỉ được chứa số")
        .min(3, "Vui lòng nhập từ 3 số trở lên")
        .max(6, "Chỉ tối đa 6 số")
        .required("Mã sinh viên không được để trống"),
      hoten: yup.string().required("Họ tên không được để trống")
        .min(6, "Vui lòng nhập từ 6 ký tự trở lên")
        .max(13, "Chỉ tối đa 13 ký tự"),
      phone: yup
        .string()
        .matches(/^(0[1-9])+([0-9]{8,9})$/, "Số điện thoại không hợp lệ")
        .required("Số điện thoại không được để trống"),
      email: yup.string().email("Vui lòng nhập đúng định dạng").required("Email không được để trống")
    })
  });

  useEffect(() => {
    const data = getValueLocalStorage("arrSinhvien");
    if (data) {
      setarrSinhvien(data);
    }
  }, []);

  const handleDelete = (mssv) => {
    let newarrsinhvien = [...arrSinhvien];
    let index = newarrsinhvien.findIndex((item) => item.MSSV === mssv);
    if (index !== -1) {
      newarrsinhvien.splice(index, 1);
      setarrSinhvien(newarrsinhvien);
      setValueLocalStorage("arrSinhvien", newarrsinhvien);
    }
  };

  useEffect(() => {
    if (sinhvien) {
      formik.setValues(sinhvien);
    }
  }, [sinhvien]);

  const handleGetSinhVien = (sinhvien) => {
    setsinhvien(sinhvien);
  };

  const handleUpdate = async () => {
    formik.setTouched({
      MSSV: true,
      hoten: true,
      phone: true,
      email: true,
    });

    await formik.validateForm();

    if (!formik.isValid) {
      return;
    }

    const updatedArrSinhvien = arrSinhvien.map(item =>
      item.MSSV === formik.values.MSSV ? { ...item, ...formik.values } : item
    );
    setarrSinhvien(updatedArrSinhvien);
    setValueLocalStorage("arrSinhvien", updatedArrSinhvien);
    formik.resetForm();
  };

  return (
    <div className='container py-2 bg'>
      <div>
        <h1 className='text-white text-3xl py-3 pl-4 color'>Thông tin sinh viên</h1>
      </div>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className='grid grid-cols-2 gap-8'>
            <Input
              name='MSSV'
              placeholder='Nhập mã sinh viên của bạn'
              value={formik.values.MSSV}
              onChange={formik.handleChange}
              contentlabel='Mã sinh viên'
              type='text'
              onBlur={formik.handleBlur}
              error={formik.errors.MSSV}
              touched={formik.touched.MSSV}
            />
            <Input
              name='hoten'
              placeholder='Nhập họ và tên của bạn'
              value={formik.values.hoten}
              onChange={formik.handleChange}
              contentlabel='Họ tên'
              type='text'
              onBlur={formik.handleBlur}
              error={formik.errors.hoten}
              touched={formik.touched.hoten}
            />
            <Input
              name='phone'
              placeholder='Nhập số điện thoại của bạn'
              value={formik.values.phone}
              onChange={formik.handleChange}
              contentlabel='Số điện thoại'
              type='text'
              onBlur={formik.handleBlur}
              error={formik.errors.phone}
              touched={formik.touched.phone}
            />
            <Input
              name='email'
              placeholder='Nhập email của bạn'
              value={formik.values.email}
              onChange={formik.handleChange}
              contentlabel='Email'
              type='text'
              onBlur={formik.handleBlur}
              error={formik.errors.email}
              touched={formik.touched.email}
            />
          </div>
          <button type="submit" className='bg-green-500 rounded px-3 py-2 mt-6'>Thêm sinh viên</button>
          <button
            type="button"
            onClick={handleUpdate}
            className='bg-red-500 mx-6 rounded px-3 py-2 mt-6'
          >
            Cập nhật
          </button>
        </form>
      </div>
      <TableForm handleDelete={handleDelete} handleGetSinhVien={handleGetSinhVien} arrSinhvien={arrSinhvien} />
    </div>
  );
};

export default FromReact;
