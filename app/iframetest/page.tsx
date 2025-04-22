'use client';
import { useState } from 'react';

export default function iframetest() {
  const [url, setUrl] = useState('');
  const [iframeUrl, setIframeUrl] = useState('');

  const handleLoad = () => {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      alert('Please enter a valid URL starting with http:// or https://');
      return;
    }
    setIframeUrl(url);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Enter a URL to view in iframe</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border p-2 flex-1 rounded"
        />
        <button
          onClick={handleLoad}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Load
        </button>
      </div>
      {iframeUrl && (
        <iframe
          src={iframeUrl}
          className="w-full h-[500px] border rounded"
          title="URL Viewer"
        ></iframe>
      )}
    </div>
  );
}
