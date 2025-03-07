'use client'
import React, { useState } from 'react';
import PannelCollapse from '@/components/pannel-collapse';
import LoopItem from '@/components/loop-item';

const Home = () => {
  const [htmlContent, setHtmlContent] = useState<{ key: string; content: string }[]>([]);

  interface Item {
    key: string;
    label: string;
    code: string[];
  }

  const handleItemClick = (item: Item) => {
    const updatedContent = item.code.map(code => ({
      key: Math.random().toString(),
      content: code,
    }));
    setHtmlContent(updatedContent);
  };

  const handleCodeChange = (newCode: string, index: number) => {
    setHtmlContent(prevContent => {
      const updatedContent = [...prevContent];
      updatedContent[index] = { ...updatedContent[index], content: newCode };
      return updatedContent;
    });
  };

  return (
    <div className="flex p-4 gap-4 w-full h-screen">
      <div className="w-[200px] flex-shrink-0">
        <PannelCollapse onItemClick={handleItemClick} />
      </div>
      <div className="flex flex-col w-full overflow-auto">
        <div className="flex flex-col gap-4">
          {htmlContent.map(({ key, content }, index) => (
            <LoopItem
              key={key}
              content={content}
              instanceId={`loop-item-${key}`}
              onCodeChange={(newCode) => handleCodeChange(newCode, index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;