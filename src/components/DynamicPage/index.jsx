import React from 'react'
import { IoMdAddCircle } from "react-icons/io";
import { useLocation } from 'react-router';
function DynamicPage() {
let location = useLocation()
let pathname = location.pathname.split('/')[1]

    return (
        <div className='dynamic-page'>
            <h2>{pathname}</h2>

            <div className="dynamic-table">
                <div className="table-head">
                    <h3>{pathname} Data</h3>
                    <button><IoMdAddCircle /> Add {pathname.slice(0, -1)}</button>
                </div>

            </div>

        </div>
    )
}

export default DynamicPage