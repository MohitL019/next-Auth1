
'use client';

export default function Input({value,label, type, id, onChange}){
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block font-semibold mb-2">{label}</label>
            <input type={type}
            name={id}
            value={value}
            autoComplete="off"
            className="w-full p-2 border-gray-300 rounded-md focus:outline-none focus: border-blue-300"
            onChange={onChange}
            /> 
        </div>
    );
}