'use client'
import React, { useState, useRef, useEffect } from 'react';
import { Tooltip } from 'antd';
import { CopyOutlined, CheckOutlined, EyeOutlined } from '@ant-design/icons';
import CodeEdit from '@/components/code-edit';

// Define the prop type for LoopItem
interface LoopItemProps {
  content: string;
  onCodeChange: (newCode: string) => void;
}

// Define a custom type for the element with fullscreen methods
interface FullscreenElement extends HTMLDivElement {
  webkitRequestFullscreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

const LoopItem: React.FC<LoopItemProps> = ({ content, onCodeChange }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const [currentCode, setCurrentCode] = useState(content);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      setIsCopied(true);
      navigator.clipboard.writeText(currentCode);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const toggleCodeVisibility = () => {
    setIsCodeVisible(prev => !prev);
  };

  const handleCodeChange = (newCode: string) => {
    setCurrentCode(newCode);
    onCodeChange(newCode);
  };

  const handleFullscreen = () => {
    if (previewRef.current) {
      const element = previewRef.current as FullscreenElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) { /* Safari */
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) { /* IE11 */
        element.msRequestFullscreen();
      }
      setIsFullscreen(true);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div className='flex flex-col border border-gray-300 p-4 rounded-md'>
      <div
        ref={previewRef}
        className={`border-dashed border-gray-300 border-b pb-4 relative overflow-hidden ${isFullscreen ? 'fullscreen-background' : ''}`}
        dangerouslySetInnerHTML={{ __html: currentCode }}
      />
      <div className='flex justify-center gap-3 py-2 border-dashed border-gray-300 border-b'>
        <Tooltip title={isCodeVisible ? '收起代码' : '显示代码'}>
          <span className='text-gray-500 cursor-pointer' onClick={toggleCodeVisibility}>
            {isCodeVisible ? `</>` : `< >`}
          </span>
        </Tooltip>
        <Tooltip title="复制代码">
          {isCopied ? (
            <CheckOutlined className='cursor-pointer' style={{ fontSize: 14, color: 'gray' }} />
          ) : (
            <CopyOutlined
              className='cursor-pointer'
              style={{ fontSize: 14, color: 'gray' }}
              onClick={handleCopy}
            />
          )}
        </Tooltip>
        <Tooltip title="全屏预览">
          <EyeOutlined className='cursor-pointer' onClick={handleFullscreen} />
        </Tooltip>
      </div>
      {isCodeVisible && (
        <CodeEdit code={currentCode} onCodeChange={handleCodeChange} />
      )}
    </div>
  )
}

// 如果使用了 React.memo，请确保正确处理 props 变化
// export default React.memo(LoopItem, (prevProps, nextProps) => {
//   return prevProps.content === nextProps.content;
// });

export default LoopItem;
