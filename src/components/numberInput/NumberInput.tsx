import React from 'react';

const NumberInput = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: any;
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-500 text-lg font-bold mb-2">
        {label}
      </label>
      <input
        type="number"
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export { NumberInput };
