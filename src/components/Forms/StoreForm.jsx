import React, { useState } from 'react'
import { Drawer } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
function StoreForm({ open, onClose, initialValues, onSubmit }) {

    const formik = useFormik({
       
        initialValues: initialValues || {
            name: '',
            location: '',
            manager: '',
            phone: '',
            status: '',
        },
         enableReinitialize: true,
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Required'),
            location: Yup.string()
                .required('Required'),
            manager: Yup.string().required('Required'),
            phone: Yup.string()
                .required('Required'),
            status: Yup.string()
                .required('Required'),

        }),
        onSubmit,
    });
    return (
        <div >
            <Drawer
                title={`Add New Store`}
                placement="right"
                size={"378px"}
                onClose={onClose}
                open={open}
                className='store-form'
            >
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div>{formik.errors.name}</div>
                    ) : null}

                    <label htmlFor="manager">Manager</label>
                    <input
                        id="manager"
                        name="manager"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.manager}
                    />
                    {formik.touched.manager && formik.errors.manager ? (
                        <div>{formik.errors.manager}</div>
                    ) : null}

                    <label htmlFor="location">Location</label>
                    <input
                        id="location"
                        name="location"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.location}
                    />
                    {formik.touched.location && formik.errors.location ? (
                        <div>{formik.errors.location}</div>
                    ) : null}


                    <label htmlFor="phone">Store Phone</label>
                    <input
                        id="phone"
                        name="phone"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                        <div>{formik.errors.phone}</div>
                    ) : null}

                    <label htmlFor="status">Status</label>
                    <select
                        id="status"
                        name="status"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.status}
                    >
                        <option value="" label="Select status" />
                        <option value="open" label="Open" />
                        <option value="close" label="Close" />
                    </select>
                    {formik.touched.status && formik.errors.status ? (
                        <div>{formik.errors.status}</div>
                    ) : null}

                    <button type="submit">Submit</button>
                </form>
            </Drawer>
        </div>
    )
}

export default StoreForm