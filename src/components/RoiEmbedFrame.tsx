'use client';

import { useEffect, useRef } from 'react';

interface Props {
  src: string;
  title?: string;
}

export default function RoiEmbedFrame({ src, title = 'ROI Calculator' }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.data?.type === 'roi-height' && typeof e.data.height === 'number' && iframeRef.current) {
        iframeRef.current.style.height = `${e.data.height}px`;
      }
    }
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={src}
      title={title}
      className="w-full border-0"
      style={{ height: '700px' }}
      loading="lazy"
    />
  );
}
