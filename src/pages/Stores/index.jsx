import React, { useEffect } from 'react'
import DynamicPage from '../../components/DynamicPage'
import { MdDelete, MdEdit } from "react-icons/md";
import { Col, Space, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStores } from '../../Redux/slice/StoreSlice';
const Columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Manager',
    dataIndex: 'manager',
    key: 'manager',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (_, { status }) => (
      <>
        {
          status === "open" ? (
            <Tag color="green" key={status}>
              {status.toUpperCase()}
            </Tag>
          ) : (
            <Tag color="red" key={status}>
              {status.toUpperCase()}
            </Tag>
          )
        }



      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <div className='action-btns'>
          <button ><MdEdit /></button>
          <button><MdDelete /></button>
        </div>
      </Space>
    ),
  },
];

function Stores() {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((state) => state.stores)
  useEffect(() => {
    dispatch(fetchStores())
  }, [dispatch])
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  console.log(data);
  return (
    <DynamicPage columns={Columns} data={data} />
  )
}

export default Stores