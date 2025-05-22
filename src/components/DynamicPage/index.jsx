import React, { useState } from 'react'
import { IoMdAddCircle } from "react-icons/io";
import { useLocation } from 'react-router';
import { Table } from 'antd';
import StoreForm from '../Forms/StoreForm';



function DynamicPage({ columns, data }) {
    const [open, setOpen] = useState(false);
    let location = useLocation()
    let pathname = location.pathname.split('/')[1]
    const dataWithKey = data.map(item => ({ ...item, key: item.id }));
    const onClose = () => {
        setOpen(false)
    }

    return (
        <div className='dynamic-page'>
            <h2>{pathname}</h2>

            <div className="dynamic-table">
                <div className="table-head">
                    <h3>{pathname} Data</h3>
                    <button onClick={() => setOpen(true) } ><IoMdAddCircle /> Add {pathname.slice(0, -1)}</button>
                </div>
                <Table style={{ width: "100%" }} columns={columns} dataSource={dataWithKey} />
            </div>
            <StoreForm open={open} onClose = {onClose} />
        </div>
    )
}

export default DynamicPage