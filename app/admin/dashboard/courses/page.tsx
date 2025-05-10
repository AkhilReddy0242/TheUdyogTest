'use client';
import { useState, useEffect } from 'react';

export default function AdminCoursesPage() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [courseData, setCourseData] = useState({ title: '', duration: '', syllabusLink: '' });

  useEffect(() => {
    fetch('/api/categories')
      .then(res => res.json())
      .then(setCategories);
  }, []);

  const handleAddCategory = async () => {
    await fetch('/api/categories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newCategory }),
    });
    setNewCategory('');
    const res = await fetch('/api/categories');
    setCategories(await res.json());
  };

  const handleAddCourse = async () => {
    await fetch('/api/courses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...courseData,
        categoryId: selectedCategory,
      }),
    });
    setCourseData({ title: '', duration: '', syllabusLink: '' });
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Category</h1>
      <input className="border p-2 w-full mb-2" placeholder="New Category" value={newCategory} onChange={e => setNewCategory(e.target.value)} />
      <button onClick={handleAddCategory} className="bg-green-600 text-white px-4 py-2 rounded">Add Category</button>

      <h1 className="text-2xl font-bold mt-8 mb-4">Add Course</h1>
      <select className="border p-2 w-full mb-2" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
        <option value="">Select Category</option>
        {categories.map((cat: any) => <option key={cat._id} value={cat._id}>{cat.name}</option>)}
      </select>
      <input className="border p-2 w-full mb-2" placeholder="Course Title" value={courseData.title} onChange={e => setCourseData({...courseData, title: e.target.value})} />
      <input className="border p-2 w-full mb-2" placeholder="Duration" value={courseData.duration} onChange={e => setCourseData({...courseData, duration: e.target.value})} />
      <input className="border p-2 w-full mb-2" placeholder="Syllabus Drive Link" value={courseData.syllabusLink} onChange={e => setCourseData({...courseData, syllabusLink: e.target.value})} />
      <button onClick={handleAddCourse} className="bg-blue-600 text-white px-4 py-2 rounded">Add Course</button>
    </div>
  );
}