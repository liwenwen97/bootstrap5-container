'use client'
import React from 'react'
import Editor from '@monaco-editor/react';
export default function SnippetEdit() {
  // const [code, setCode] = useState(snippet.code)
  const handleChange = (code: string = '') => {
    console.log(code)
  }
  return (
    <div>
      <Editor theme='vs-dark' height="40vh" language='javascript' options={{
        minimap: {
          enabled: false
        }
      }} onChange={handleChange} />
      {/* <form action={editSnippetWithCodeId}>
        <button className='px-2 py-1 border border-teal-500 rounded mt-1'>Save</button>
      </form> */}
    </div>
  )
}
