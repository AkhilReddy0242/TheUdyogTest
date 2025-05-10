'use client';
import { useEffect, useState } from 'react';

export default function TranningPage() {
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/categories').then(res => res.json()),
      fetch('/api/courses').then(res => res.json()),
    ]).then(([catData, courseData]) => {
      setCategories(catData);
      setCourses(courseData);
      setLoading(false);
    });
  }, []);

  const filteredCourses = activeCategory
    ? courses.filter((c: any) => c.categoryId._id === activeCategory)
    : courses;

  return (
    <div className="min-h-screen">
      {/* Parallax Header */}
      <div className="h-64 bg-[url('/header.jpg')] bg-cover bg-fixed flex items-center justify-center">
        <h1 className="text-4xl font-bold drop-shadow-lg">Course List</h1>
      </div>

      <div className="flex justify-center py-8">
        <div className="w-full max-w-6xl flex">
          {/* Left Filter Panel */}
          <div className="w-1/4 p-4 border-r border-white">
            <h2 className="text-lg font-semibold mb-4">Skills</h2>
            {categories.map((cat: any) => (
              <button
                key={cat._id}
                className={`block text-left w-full px-3 py-2 mb-2 rounded`}
                onClick={() => setActiveCategory(cat._id)}>
                {cat.name}
              </button>
            ))}
          </div>

          {/* Course List */}
          <div className="w-3/4 p-6">
            {loading ? (
              <div className="space-y-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-24 animate-pulse rounded"></div>
                ))}
              </div>
            ) : (
              <div className="grid gap-6">
                {filteredCourses.map((course: any) => (
                  <div key={course._id} className=" shadow-md p-4 rounded flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold">{course.title}</h3>
                      <p className=" text-sm">{course.duration}</p>
                    </div>
                    <div className="space-x-2">
                      <a href={course.syllabusLink} target="_blank" className="px-4 py-2 rounded">Syllabus</a>
                      {/* <button className="px-4 py-2 rounded">Demo Trailer</button> */}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
