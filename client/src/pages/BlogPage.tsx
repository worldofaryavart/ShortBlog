import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Slide {
  id: string;
  heading: string;
  image: string;
  content: string;
}

interface CustomizationOptions {
  headingStyle: string;
  headingColor: string;
  contentStyle: string;
  contentColor: string;
  contentBackground: string;
  boxStyle: string;
}

const BlogPage: React.FC = () => {
  const [slides, setSlides] = useState<Slide[]>([
    {
      id: uuidv4(),
      heading: 'Welcome to My Blog',
      image: 'https://via.placeholder.com/800x400',
      content: 'This is the content of your first slide.',
    },
  ]);

  const [customization, setCustomization] = useState<CustomizationOptions>({
    headingStyle: 'text-4xl font-bold',
    headingColor: 'text-black',
    contentStyle: 'text-lg',
    contentColor: 'text-gray-700',
    contentBackground: 'bg-white',
    boxStyle: 'rounded-lg shadow-md',
  });

  const addSlide = () => {
    setSlides([
      ...slides,
      {
        id: uuidv4(),
        heading: 'New Slide',
        image: 'https://via.placeholder.com/800x400',
        content: 'Add your content here.',
      },
    ]);
  };

  const updateSlide = (id: string, field: keyof Slide, value: string) => {
    setSlides(slides.map(slide => 
      slide.id === id ? { ...slide, [field]: value } : slide
    ));
  };

  const updateCustomization = (field: keyof CustomizationOptions, value: string) => {
    setCustomization({ ...customization, [field]: value });
  };

  const createPost = async () => {
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slides, customization }),
      });
      if (response.ok) {
        alert('Post created successfully!');
      } else {
        throw new Error('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Failed to create post. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          {slides.map((slide) => (
            <div key={slide.id} className={`mb-8 ${customization.boxStyle}`}>
              <input
                type="text"
                value={slide.heading}
                onChange={(e) => updateSlide(slide.id, 'heading', e.target.value)}
                className={`w-full ${customization.headingStyle} ${customization.headingColor} mb-2`}
              />
              <div className="relative">
                <img src={slide.image} alt={slide.heading} className="w-full h-64 object-cover" />
                <textarea
                  value={slide.content}
                  onChange={(e) => updateSlide(slide.id, 'content', e.target.value)}
                  className={`absolute inset-0 w-full h-full p-4 ${customization.contentStyle} ${customization.contentColor} ${customization.contentBackground}`}
                />
              </div>
            </div>
          ))}
          <button onClick={addSlide} className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Slide
          </button>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Customize</h2>
          <div className="space-y-4">
            <div>
              <label className="block">Heading Style</label>
              <input
                type="text"
                value={customization.headingStyle}
                onChange={(e) => updateCustomization('headingStyle', e.target.value)}
                className="w-full border p-2"
              />
            </div>
            <div>
              <label className="block">Heading Color</label>
              <input
                type="text"
                value={customization.headingColor}
                onChange={(e) => updateCustomization('headingColor', e.target.value)}
                className="w-full border p-2"
              />
            </div>
            <div>
              <label className="block">Content Style</label>
              <input
                type="text"
                value={customization.contentStyle}
                onChange={(e) => updateCustomization('contentStyle', e.target.value)}
                className="w-full border p-2"
              />
            </div>
            <div>
              <label className="block">Content Color</label>
              <input
                type="text"
                value={customization.contentColor}
                onChange={(e) => updateCustomization('contentColor', e.target.value)}
                className="w-full border p-2"
              />
            </div>
            <div>
              <label className="block">Content Background</label>
              <input
                type="text"
                value={customization.contentBackground}
                onChange={(e) => updateCustomization('contentBackground', e.target.value)}
                className="w-full border p-2"
              />
            </div>
            <div>
              <label className="block">Box Style</label>
              <input
                type="text"
                value={customization.boxStyle}
                onChange={(e) => updateCustomization('boxStyle', e.target.value)}
                className="w-full border p-2"
              />
            </div>
          </div>
        </div>
      </div>
      <button onClick={createPost} className="mt-8 bg-green-500 text-white px-6 py-3 rounded text-xl">
        Create Post
      </button>
    </div>
  );
};

export default BlogPage;