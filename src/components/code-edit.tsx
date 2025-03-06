'use client'
import React from 'react'
import Editor from '@monaco-editor/react';

interface CodeEditProps {
  onCodeChange: (code: string) => void;
  code: string;
}

export default function CodeEdit({ onCodeChange, code }: CodeEditProps) {

  const handleChange = (code: string = '') => {
    onCodeChange(code);
  }

  return (
    <div className='border-dashed border-gray-300 border-b pb-4 relative overflow-hidden'>
      <Editor theme='light' height="400px" language='html' options={{
        minimap: {
          enabled: false
        },
        wordWrap: "on",
        wordWrapColumn: 80,
        fontSize: 14,
      }} value={code} onChange={handleChange} />
    </div>
  )
}
