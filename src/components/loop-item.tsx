'use client'
import React, { useState, useRef, useEffect } from 'react';
import { Tooltip } from 'antd';
import { CopyOutlined, CheckOutlined, DesktopOutlined, TabletOutlined, MobileOutlined } from '@ant-design/icons';
import CodeEdit from '@/components/code-edit';

interface LoopItemProps {
  content: string;
  onCodeChange: (newCode: string) => void;
  instanceId: string;
}

const LoopItem: React.FC<LoopItemProps> = ({ content, onCodeChange, instanceId }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const [currentCode, setCurrentCode] = useState(content);
  const [device, setDevice] = useState('desktop');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // 只在 currentCode 变化时更新 iframe.srcdoc
  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.srcdoc = getIframeContent();
    }
  }, [currentCode]);

  // 监听 iframe 高度调整消息
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.instanceId === instanceId && event.data.iframeHeight && iframeRef.current) {
        iframeRef.current.style.height = `${event.data.iframeHeight}px`;
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [instanceId]);

  // 设备切换时，向 iframe 发送宽度信息
  useEffect(() => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const width = getWidth();
      iframeRef.current.contentWindow.postMessage({ instanceId, deviceWidth: width }, '*');
    }
  }, [device, instanceId]);

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

  const handleDeviceChange = (newDevice: string) => {
    setDevice(newDevice);
  };

  const getIconColor = (iconDevice: string) => {
    return device === iconDevice ? '#007bff' : '#000';
  };

  const getWidth = () => {
    switch (device) {
      case 'mobile':
        return '375px';
      case 'tablet':
        return '768px';
      case 'desktop':
      default:
        return '100%';
    }
  };

  const getIframeContent = () => {
    return `<!DOCTYPE html>
      <html>
        <head>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
          <style>
            #contentWrapper {
              width: 100%; /* 默认全宽 */
            }
          </style>
        </head>
        <body style="margin:0; overflow:hidden;">
          <div id="contentWrapper">
            ${currentCode}
          </div>
          <script>
            function sendHeight() {
              const height = document.body.scrollHeight;
              window.parent.postMessage({ instanceId: "${instanceId}", iframeHeight: height }, '*');
            }
            // 监听父页面发送的设备宽度消息
            window.addEventListener('message', (event) => {
              if (event.data.instanceId === "${instanceId}" && event.data.deviceWidth) {
                const wrapper = document.getElementById('contentWrapper');
                if (wrapper) {
                  wrapper.style.width = event.data.deviceWidth;
                }
                sendHeight(); // 宽度变化后重新计算高度
              }
            });
            window.addEventListener('load', sendHeight);
            window.addEventListener('resize', sendHeight);
            const observer = new MutationObserver(sendHeight);
            observer.observe(document.body, { childList: true, subtree: true });
          </script>
        </body>
      </html>`;
  };

  return (
    <div className="flex flex-col border border-gray-300 p-4 rounded-md">
      <div className="flex justify-center gap-3 py-2">
        <Tooltip title="手机">
          <MobileOutlined className="cursor-pointer" style={{ fontSize: 16, color: getIconColor('mobile') }} onClick={() => handleDeviceChange('mobile')} />
        </Tooltip>
        <Tooltip title="平板">
          <TabletOutlined className="cursor-pointer" style={{ fontSize: 16, color: getIconColor('tablet') }} onClick={() => handleDeviceChange('tablet')} />
        </Tooltip>
        <Tooltip title="电脑">
          <DesktopOutlined className="cursor-pointer" style={{ fontSize: 16, color: getIconColor('desktop') }} onClick={() => handleDeviceChange('desktop')} />
        </Tooltip>
      </div>
      <div
        style={{ width: getWidth(), margin: '0 auto', transition: 'width 0.3s ease' }}
      >
        <iframe
          ref={iframeRef}
          className="w-full"
          style={{ border: 'none' }}
        />
      </div>
      <div className="flex justify-center gap-3 py-2 border-dashed border-gray-300 border-b transition-all duration-300">
        <Tooltip title={isCodeVisible ? '收起代码' : '显示代码'}>
          <span className="text-black cursor-pointer transition-all duration-300" onClick={toggleCodeVisibility}>
            {isCodeVisible ? '</>' : '< >'}
          </span>
        </Tooltip>
        <Tooltip title="复制代码">
          {isCopied ? (
            <CheckOutlined className="cursor-pointer" style={{ fontSize: 14, color: 'gray' }} />
          ) : (
            <CopyOutlined
              className="cursor-pointer transition-all duration-300"
              style={{ fontSize: 14, color: '#000' }}
              onClick={handleCopy}
            />
          )}
        </Tooltip>
      </div>
      {isCodeVisible && <CodeEdit code={currentCode} onCodeChange={handleCodeChange} />}
    </div>
  );
};

export default LoopItem;