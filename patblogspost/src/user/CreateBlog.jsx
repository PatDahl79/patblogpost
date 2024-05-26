import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Button, Typography } from '@material-tailwind/react';
import myContext from '../context/myContext';

function CreateBlog() {
  const context = useContext(myContext);
  const { mode } = context;

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [thumbnail, setThumbnail] = useState();
  ///title, category, content, and thumbnail states are managed using the useState hook.
  ///handleSubmit function to handle the form submission and log the form data.
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ title, category, content, thumbnail });
  };

  return (
    <div className='container mx-auto max-w-5xl py-6'>
      <div className="p-5" style={{
        background: mode === 'dark' ? '#353b48' : 'rgb(226, 232, 240)',
        borderBottom: mode === 'dark' ? '4px solid rgb(226, 232, 240)' : '4px solid rgb(30, 41, 59)'
      }}>
        <div className="mb-2 flex justify-between">
          <div className="flex gap-2 items-center">
            <Link to={'/dashboard'}>
              <BsFillArrowLeftCircleFill size={25} />
            </Link>
            <Typography
              variant="h4"
              style={{ color: mode === 'dark' ? 'white' : 'black' }}
            >
              Create Blog
            </Typography>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            {thumbnail && <img className="w-full rounded-md mb-3" src={URL.createObjectURL(thumbnail)} alt="thumbnail" />}
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-semibold"
              style={{ color: mode === 'dark' ? 'white' : 'black' }}
            >
              Upload Thumbnail
            </Typography>
            <input
              type="file"
              className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] placeholder-black w-full rounded-md p-1"
              style={{ background: mode === 'dark' ? '#dcdde1' : 'rgb(226, 232, 240)' }}
              onChange={(e) => setThumbnail(e.target.files[0])}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Your Title"
              className={`shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 outline-none ${mode === 'dark' ? 'placeholder-black' : 'placeholder-black'}`}
              style={{ background: mode === 'dark' ? '#dcdde1' : 'rgb(226, 232, 240)' }}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter Your Category"
              className={`shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 outline-none ${mode === 'dark' ? 'placeholder-black' : 'placeholder-black'}`}
              style={{ background: mode === 'dark' ? '#dcdde1' : 'rgb(226, 232, 240)' }}
            />
          </div>

          <div className="mb-3">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter Your Content"
              className={`shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 outline-none ${mode === 'dark' ? 'placeholder-black' : 'placeholder-black'}`}
              style={{ background: mode === 'dark' ? '#dcdde1' : 'rgb(226, 232, 240)' }}
              rows="10"
            />
          </div>

          <Button
            type="submit"
            className="w-full mt-5"
            style={{
              background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)',
              color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)'
            }}
          >
            Submit
          </Button>
        </form>

        {/* preview section is included to display the blog title and content.*/}
        <div className="mt-5">
          <h1 className="text-center mb-3 text-2xl">Preview</h1>
          <div className="content">
            <div className={`[&>h1]:text-[32px] [&>h1]:font-bold [&>h1]:mb-2.5 ${mode === 'dark' ? '[&>h1]:text-[#ff4d4d]' : '[&>h1]:text-black'}`}>
              {title}
            </div>
            <div className={`[&>p]:text-[16px] [&>p]:mb-1.5 ${mode === 'dark' ? '[&>p]:text-[#7efff5]' : '[&>p]:text-black'}`}>
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
