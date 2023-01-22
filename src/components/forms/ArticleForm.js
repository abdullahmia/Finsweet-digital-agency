import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { BiPlus, BiX } from 'react-icons/bi';
import 'react-quill/dist/quill.snow.css';
import Circle from '../../components/loaders/Circle';
import { useCreateArticleMutation } from '../../features/article/articleApi';
import { useGetArticleCategoryQuery } from '../../features/articleCategory/articleCategoryApi';
import Editor from '../custom/Editor';

const ArticleForm = ({isEdit, slug, article}) => {
    const [title, setTitle] = useState('');
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const filePickerRef = useRef(null);
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');
    const [shortDescription, setShortDescirption] = useState('');
    const [tag, setTag] = useState('');

    // add photo to image
    const addPhotoToPost = (e) => {
        const files = Array.from(e.target.files);
        files.forEach(file => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImage(reader.result);
            }
        })
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    // reset Image
    const resetImage = () => {
        setImage(null);
    }


    // categories
    const { data: allCategories, isLoading: categoryFetching } = useGetArticleCategoryQuery();

    // add category handler with handling checkbox if checked or not then add to categories state
    const addCategoryHandler = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setCategories([...categories, value]);
        } else {
            setCategories(categories.filter(category => category !== value));
        }
    }
  

    // add article
    const [createArticle, {isLoading, data, isSuccess, isError}] = useCreateArticleMutation();
    useEffect(() => {
        if (isSuccess) {
            resetForm();
            toast.success('Article has been posted!');
        }
        if (isError) {
            toast.error('Something went wrong!');
        }
    }, [isSuccess, isError, data]);

    // reset forms
    const resetForm = () => {
        setTitle("");
        setShortDescirption("");
        setDescription("");
        setImage(null);
        setTags([]);
        setCategories([]);
    }

    // add category handler
    const addArticleHandler = (e) => {
        e.preventDefault();
        createArticle({ title, categories, shortDescription, description, image, tags});
    } 

    return (
        <div className='shadow px-6 pb-10 pt-4 bg-white font-poppins'>
            <form className='space-y-8' onSubmit={addArticleHandler}>
                <div className='flex items-center justify-between flex-wrap border-b py-2'>
                    <h2 className='text-xl'>
                        {isEdit ? 'Edit Article' : 'Add a new Article'}
                    </h2>
                    <button className='black-sm-btn'>
                        {
                            isLoading ? <span className='flex items-center gap-2'><Circle />Publishing</span> : 'Publish'
                        }
                    </button>
                </div>
                <div>
                    <label className="text-gray-600 mb-2 block">Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="input" required />
                </div>

                <div className='flex items-center gap-10'>
                    <div className='lg:w-1/2 w-full'>
                        {
                            image && <div className="relative">
                                <div
                                    className="absolute bg-[#15181c] w-8 h-8 hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-3 left-3 cursor-pointer"
                                    onClick={() => resetImage()}
                                >
                                    <BiX className="text-white h-5" />
                                </div>
                                {
                                    image && <img
                                        src={image}
                                        className='w-full h-48 object-contain'
                                        alt=""
                                    />
                                }
                            </div>
                        }
                        {
                            !image && <div className="w-full h-48 bg-gray-100 rounded flex items-center justify-center">
                                <div className="flex flex-col gap-3 justify-center items-center">
                                    <svg
                                        aria-label="Icon to represent media such as images or videos"
                                        className="dark:text-gray-400"
                                        color="#262626"
                                        fill="#262626"
                                        height="77"
                                        role="img"
                                        viewBox="0 0 97.6 77.3"
                                        width="96"
                                    >
                                        <path
                                            d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            d="M78.2 41.6L61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6l-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>

                                    <input
                                        type="file"
                                        hidden
                                        onChange={addPhotoToPost}
                                        ref={filePickerRef}
                                    />
                                    <button className="underline"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            filePickerRef.current.click();
                                        }}
                                    >
                                        Select from computer
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                    <div className='lg:w-1/2 w-full space-y-4'>
                        <div className=''>
                            <label className="text-gray-600 mb-2 block">Categories</label>
                            <div className='h-44 overflow-y-scroll'>
                                {
                                    categoryFetching ? <>Loading...</> : allCategories?.map((category, key) => (
                                        <div class="flex items-center mb-4">
                                            <input id={key} type="checkbox" value={category._id} onChange={addCategoryHandler} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                                            <label for={key} class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{category.name}</label>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                        {/* tag input */}
                        <div className=''>
                            <label className="text-gray-600 mb-2 block">Tags</label>
                            {/* simple tag with delete btn */}
                            <div className='flex flex-wrap'>
                                {
                                    tags.map((tag, key) => (
                                        <div onClick={() => {
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
                            </div>

                            {/* tag input with valina html intpu and submit btn */}
                            <div className='flex gap-2'>
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
                </div>

                <div>
                    <label className="text-gray-600 mb-2 block">Short Descripotions</label>
                    <textarea className='input' value={shortDescription} onChange={(e) => setShortDescirption(e.target.value)} rows="3" required></textarea>
                </div>

                <div>
                    <label className="text-gray-600 mb-2 block">Descripotions</label>
                    <Editor value={description} handleChange={setDescription} />
                </div>  

            </form>
        </div>
    )
}

export default ArticleForm;