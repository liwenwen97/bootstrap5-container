'use client'
import React, { useState } from 'react';
// import { db } from "@/db";
import Collapse from '@/components/Collapse';
import CodeEdit from '@/components/code-edit';
const Home = () => {
  // const [htmlContent, setHtmlContent] = useState('<h1>Hello World</h1>');

  // const blocks = await db.block.findMany();
  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/6 h-full bg-gray-100">
        <Collapse />
      </div>
      <div className="w-5/6 h-full bg-grey-100 flex">
        <div className="w-1/2 h-full">
          <CodeEdit />
        </div>
        {/* <div className="w-1/2 h-full bg-white p-4 overflow-auto">
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div> */}
      </div>
    </div>
  );
};

export default Home;