import React, { useEffect, useState } from 'react'
import DynamicPage from '../../components/DynamicPage'
import { MdDelete, MdEdit } from "react-icons/md";
import { Col, Space, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { createStore, fetchStores, updateStoreData ,deleteStoreData} from '../../Redux/slice/StoreSlice';
import StoreForm from '../../components/Forms/StoreForm';


function Stores() {
  const [open, setOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((state) => state.stores)
  useEffect(() => {
    dispatch(fetchStores())
  }, [dispatch])
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  const onClose = () => {
    setOpen(false)
    setSelectedStore(null)
  }

  const handleAddStore = (values) => {
    dispatch(createStore(values))
    setOpen(false)
    console.log(values);
  }
  const handleEdit = (record) => {
    setSelectedStore(record)
    setOpen(true)
  }

const handleUpdateStore = (id, values) => {
  dispatch(updateStoreData({
    id: id,
    updateStoreData: values
  }));
  setOpen(false);
};

const handleDelete=(id)=>{
dispatch(deleteStoreData(id))

}

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
                {status}
              </Tag>
            ) : (
              <Tag color="red" key={status}>
                {status}
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
            <button onClick={() => handleEdit(record)} ><MdEdit /></button>
            <button onClick={()=>handleDelete(record.id)} ><MdDelete /></button>
          </div>
        </Space>
      ),
    },
  ];


  return (
    <>
      <DynamicPage columns={Columns} data={data} onSubmit={handleAddStore} />
      <StoreForm
        open={open}
        onClose={onClose}
        onSubmit={(values) => {
          if (selectedStore) {
            handleUpdateStore(selectedStore.id, values);
          } else {
            handleAddStore(values);
          }
        }}
        initialValues={selectedStore} />
    </>
  )
}

export default Stores