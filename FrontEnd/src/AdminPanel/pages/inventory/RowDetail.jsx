import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const RowDetail = () => {
    const location = useLocation();
    const { data } = location.state || {};
    const navigate=useNavigate();
    return (
        <div className="flex items-center justify-center min-h-screen  bg-transparent p-6">
            <div className="dark:bg-gray-800 bg-white text-gray-900 shadow-md rounded-sm overflow-hidden max-w-2xl w-full">
                <div className='flex justify-end'>
                     <button
                        type="submit"
                        className="w-[12%] m-5  bg-gray-100 darK:text-gray-900 py-1 rounded-md hover:bg-gray-200 focus:outline-none"
                        onClick={()=>navigate("/admin/inventory/all")}
                     >
                        Back
                    </button>
                </div>
                <div className="p-6 space-y-4">
                    <div className='text-center text-3xl font-bold dark:text-white text-gray-900'>Row Detail</div>
                    <DetailItem label="Brand" value={data.brand} />
                    <DetailItem label="Color" value={data.color} />
                    <DetailItem label="Model" value={data.model} />
                    <DetailItem label="Price" value={`${data.price} birr`} />
                    <DetailItem label="Status" value={data.status} />
                    <DetailItem label="Year" value={data.year} />
                    <DetailItem label="Gear" value={data.gear} />
                    <DetailItem label="Fuel Type" value={data.fuel_type} />
                    <DetailItem label="Description" value={data.description} isDescription={true} />
                </div>
            </div>
        </div>
    );
};

// Reusable component for displaying each detail
const DetailItem = ({ label, value, isDescription }) => {
    return (
        <div className={`flex ${isDescription ? 'flex-col' : 'justify-between'} border-b border-gray-600 pb-2`}>
            <span className="font-semibold text-gray-900 dark:text-gray-300">{label}:</span>
            <span className={`dark:text-gray-100 text-gray-900  ${isDescription ? 'mt-1' : ''} ${isDescription ? 'whitespace-pre-wrap' : ''}`}>
                {value}
            </span>
        </div>
    );
};

export default RowDetail;
