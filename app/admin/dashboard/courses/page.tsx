"use client"
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const AdminCoursesPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [topicInput, setTopicInput] = useState('');
  const [topics, setTopics] = useState<string[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [resources, setResources] = useState<File[]>([]);

  const handleAddTopic = () => {
    if (topicInput.trim()) {
      setTopics([...topics, topicInput.trim()]);
      setTopicInput('');
    }
  };

  const handleRemoveTopic = (index: number) => {
    setTopics(topics.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (image && !['image/png', 'image/jpeg'].includes(image.type)) {
      alert('Please upload a PNG or JPEG image.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('topics', JSON.stringify(topics));
    if (image) formData.append('image', image);
    resources.forEach((resource, index) => {
      const idx = index+1
      formData.append(`resources[${idx}]`, resource);
    });

    try {
      const response = await fetch('/api/courses', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("adminToken")}`, // Replace with actual token
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to create course');
      }

      const data = await response.json();
      console.log('Course created:', data);
      setTitle('');
      setDescription('');
      setTopicInput('');
      setTopics([]);
      setImage(null);
      setResources([]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="admin-courses-page p-4">
      <Card>
        <CardHeader>
          <CardTitle>Create a New Course</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label>Title:</label>
              <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
              <label>Description:</label>
              <Textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
              <label>Topics:</label>
              <div className="flex items-center space-x-2">
                <Input type="text" value={topicInput} onChange={(e) => setTopicInput(e.target.value)} />
                <Button type="button" onClick={handleAddTopic}>Add Topic</Button>
              </div>
              <div className="flex flex-wrap mt-2 space-x-2">
                {topics.map((topic, index) => (
                  <div key={index} className="flex items-center space-x-1 bg-gray-200 rounded px-2 py-1">
                    <span className="text-sm">{topic}</span>
                    <Button type="button" variant="ghost" size="sm" onClick={() => handleRemoveTopic(index)}>x</Button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label>Image:</label>
              <Input type="file" accept=".jpg,.png" onChange={(e) => setImage(e.target.files?.[0] || null)} required />
            </div>
            <div>
              <label>Resources:</label>
              <Input type="file" accept=".pdf,.pptx" multiple onChange={(e) => setResources(Array.from(e.target.files || []))} />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminCoursesPage;