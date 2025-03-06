'use client'
import { useState } from 'react';
import { data } from './data';

interface Item {
  key: string,
  label: string, 
  code: string[];
}

interface LayoutComponentProps {
  onItemClick: (item: Item) => void;
}

export default function LayoutComponent({ onItemClick }: LayoutComponentProps) {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const handleClick = (item: Item) => {
    setSelectedKey(item.key);
    onItemClick(item);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg w-full max-w-md mx-auto">
      {data.map(({ key, label, children }) => (
        <div key={key} className="border-b border-gray-200">
          <div className="py-3 px-5 font-semibold text-gray-800">
            {label}
          </div>
          <ul className="px-5 py-1">
            {children.map(child => (
              <li
                key={child.key}
                className={`cursor-pointer py-1 text-gray-600 ${selectedKey === child.key ? 'font-bold text-gray-800' : 'hover:text-gray-800'}`}
                onClick={() => handleClick(child)}
              >
                {child.label}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

