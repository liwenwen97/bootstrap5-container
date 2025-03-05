'use client'
import { Collapse } from 'antd';
import { useState } from 'react';
const { Panel } = Collapse;

const data = [
  {
    key: '1',
    label: 'template',
    children: [
      {
        key: '1-1',
        label: '模版1',
      },
      {
        key: '1-2',
        label: '模版2',
      },
    ]
  },
  {
    key: '2',
    label: 'block',
    children: [
      {
        key: '2-1',
        label: 'button',
      },
      {
        key: '2-2',
        label: 'input',
      },
    ]
  }
];

export default function CollapseComponent() {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const handleClick = (key: string) => {
    console.log(key);
    setSelectedKey(key);
  }

  return (
    <Collapse
      accordion
      bordered={false}
      expandIconPosition="end"
      className="bg-white shadow-md rounded-lg"
    >
      {data.map(item => (
        <Panel
          header={item.label}
          key={item.key}
          className="border-b border-gray-200"
        >
          <ul>
            {item.children.map(child => (
              <li
                key={child.key}
                className={`cursor-pointer py-1 ${selectedKey === child.key ? 'font-bold' : 'hover:font-medium'}`}
                onClick={() => handleClick(child.key)}
              >
                {child.label}
              </li>
            ))}
          </ul>
        </Panel>
      ))}
    </Collapse>
  );
};
