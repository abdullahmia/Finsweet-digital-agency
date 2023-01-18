import React, { useRef, useState } from 'react';
import { BiX } from 'react-icons/bi';
import { CiExport } from 'react-icons/ci';
import 'react-quill/dist/quill.snow.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import CreatableSelect from 'react-select/creatable';
import Editor from '../custom/Editor';

// animation on select
const animatedComponents = makeAnimated();

// image uplaod file type
const fileTypes = ["JPEG", "PNG", "GIF"];

const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
];

const ProjectForm = ({ isEdit }) => {
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const filePickerRef = useRef(null);
    const [images, setImages] = useState([]);
    const [value, setValue] = useState('');
    const [file, setFile] = useState(null);

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
        // if (e.target.files[0]) {
        //     setImages([...images, e.target.files[0]]);
        // }
    };


    //delete image from form
    const removeImage = (image) => {
        let index = images.indexOf(image);
        if (index > -1) {
            let restImages = images.filter(image => images.indexOf(image) !== index);
            setImages(restImages);
        }
    }


    const handleChange = (file) => {
        setFile(file);
    };


    return (
        <div className='shadow px-6 pb-10 pt-4 bg-white font-poppins'>
            <form className='space-y-8'>
                <div className='flex items-center justify-between flex-wrap border-b py-2'>
                    <h2 className='text-xl'>
                        {isEdit ? 'Edit Project' : 'Add a new Project'}
                    </h2>
                    <button className='black-sm-btn'>Publish</button>
                </div>
                <div>
                    <label className="text-gray-600 mb-2 block">Title</label>
                    <input type="text" className="input" required />
                </div>

                <div>
                    <label className="text-gray-600 mb-2 block">Images</label>
                    <div className='w-full flex flex-wrap gap-2 border p-4'>
                        {
                            images && (
                                images.map((image, key) => (
                                    <div className='relative'>
                                        <img src={image} className="w-28 h-20 rounded" alt="" />
                                        <button onClick={() => removeImage(image)} className='absolute top-2 right-2 bg-gray-800 text-white rounded-full'>
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
                    <label className="text-gray-600 mb-2 block">Categories</label>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        defaultValue={[colourOptions[4], colourOptions[5]]}
                        isMulti
                        options={colourOptions}
                        onChange={(categories) => setCategories(categories)}
                    />
                </div>
                <div className='w-full'>
                    <label className="text-gray-600 mb-2 block">Tags</label>
                    <CreatableSelect isMulti options={tags} onChange={(tags) => setTags(tags)} />
                </div>



                <div>
                    <label className="text-gray-600 mb-2 block">Descripotions</label>
                    <Editor value={value} handleChange={setValue} />
                </div>

            </form>
        </div>
    )
}

export default ProjectForm;