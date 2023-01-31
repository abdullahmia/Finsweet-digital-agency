import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { BiPlus, BiX } from 'react-icons/bi';
import { CiExport } from 'react-icons/ci';
import 'react-quill/dist/quill.snow.css';
import { useCreateProjectMutation } from '../../features/project/projectApi';
import { useGetProjectCategoryQuery } from '../../features/projectCategory/projectCategoryApi';
import Editor from '../custom/Editor';


const ProjectForm = ({ isEdit }) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [tags, setTags] = useState([]);
    const [shortDescription, setShortDescription] = useState('');
    const [description, setDescription] = useState('');
    const [tag, setTag] = useState('');
    const filePickerRef = useRef(null);
    const [images, setImages] = useState([]);

    // add photo to image
    const addPhoto = (e) => {
        const files = Array.from(e.target.files);

        files.forEach(file => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImages(oldArray => [...oldArray, reader.result])
            }
        })
    };


    // proejct category
    const { data: projectCategories } = useGetProjectCategoryQuery()


    //delete image from form
    const removeImage = (image) => {
        let index = images.indexOf(image);
        if (index > -1) {
            let restImages = images.filter(image => images.indexOf(image) !== index);
            setImages(restImages);
        }
    }

    // create proejct handlers
    const [createProject, {data: createResponse, isLoading: createProjectLoading, isSuccess: createSuccess, isError: createError}] = useCreateProjectMutation()

    const createProjectHandler = (e) => {
        e.preventDefault();
        createProject({title, category, shortDescription, description, images, tags})
    }

    useEffect(() => {
        if (createSuccess) {
            toast.success(createResponse.message);
        }
        if (createError) {
            toast.error('Something went wrong!');
        }
    }, [createSuccess, createError, createResponse])


    return (
        <div className='shadow px-6 pb-10 pt-4 bg-white font-poppins'>
            <form className='space-y-8' onSubmit={createProjectHandler}>
                <div className='flex items-center justify-between flex-wrap border-b py-2'>
                    <h2 className='text-xl'>
                        {isEdit ? 'Edit Project' : 'Add a new Project'}
                    </h2>
                    <button className='black-sm-btn'>Publish</button>
                </div>
                <div>
                    <label className="text-gray-600 mb-2 block">Title</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="input" required />
                </div>

                <div>
                    <label className="text-gray-600 mb-2 block">Images</label>
                    <div className='w-full flex flex-wrap gap-2 border p-4'>
                        {
                            images && (
                                images.map((image, key) => (
                                    <div key={key} className='relative'>
                                        <img src={image} className="w-28 h-20 rounded object-contain" alt="" />
                                        <button onClick={(e) => {
                                            e.preventDefault();
                                            removeImage(image);
                                        }} className='absolute top-2 right-2 bg-gray-800 text-white rounded-full'>
                                            <BiX size={20} />
                                        </button>
                                    </div>
                                ))
                            )
                        }

                        <input
                            type="file"
                            hidden
                            onChange={addPhoto}
                            ref={filePickerRef}
                            multiple
                        />
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                filePickerRef.current.click();
                            }}
                            className='w-28 h-20 rounded bg-gray-100 hover:bg-gray-200 transition flex justify-center items-center'>
                            <CiExport size={20} />
                        </button>
                    </div>
                </div>

                

                <div className='w-full'>
                    <label className="text-gray-600 mb-2 block">Category</label>
                    <select className='input' value={category} onChange={e => setCategory(e.target.value)}>
                        {
                            projectCategories && (
                                projectCategories.map((category, key) => (
                                    <option key={key} value={category._id}>{category.name}</option>
                                ))
                            )
                        }
                    </select>
                </div>
                <div className='w-full'>
                    <label className="text-gray-600 mb-2 block">Tags</label>
                    <div className='flex flex-wrap'>
                        {
                            tags.map((tag, key) => (
                                <div key={key} onClick={(e) => {
                                    e.preventDefault();
                                    const newTags = tags.filter((t, i) => i !== key);
                                    setTags(newTags);
                                }} className='cursor-pointer flex items-center bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2 mb-2'>
                                    <span className='mr-2'>{tag}</span>
                                    <button className='text-gray-400 hover:text-gray-500'>
                                        <BiX size={18} />
                                    </button>
                                </div>
                            ))
                        }

                        {/* tag input with valina html intpu and submit btn */}
                        <div className='w-full flex gap-2'>
                            <input
                                type="text"
                                className='input focus:outline-none'
                                placeholder='Add tag'
                                value={tag}
                                onChange={(e) => setTag(e.target.value)}
                            />
                            <button type='button' onClick={() => {
                                if (tag) {
                                    setTags([...tags, tag]);
                                    setTag('');
                                }
                            }} className='bg-darkBlue text-white px-4 rounded'><BiPlus size={20} /></button>
                        </div>
                    </div>
                </div>

                <div>
                    <label className="text-gray-600 mb-2 block">Short Descripotions</label>
                    <textarea className='input' value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} rows="3"></textarea>
                </div>

                <div>
                    <label className="text-gray-600 mb-2 block">Descripotions</label>
                    <Editor value={description} handleChange={setDescription} />
                </div>

            </form>
        </div>
    )
}

export default ProjectForm;