import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import 'react-quill/dist/quill.snow.css';
import { useParams } from "react-router-dom";
import ArticleForm from '../../../../components/forms/ArticleForm';
import DashboardLayout from "../../../../components/layouts/DashboardLayout";
import { useGetArticleQuery, useUpdateArticleMutation } from "../../../../features/article/articleApi";
import { useGetArticleCategoryQuery } from "../../../../features/articleCategory/articleCategoryApi";


const EditArticle = () => {
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
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
        }
    };

    // reset Image
    const resetImage = () => {
        setImage(null);
    }


    const {slug} = useParams();

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

    

    // get the article
    const { data: article, isLoading, isSuccess: editArticleSuccess } = useGetArticleQuery(slug);
    useEffect(() => {
        if (editArticleSuccess) {
            if (article) {
                setTitle(article.title);
                setShortDescirption(article.shortDescription);
                setDescription(article.description);
                setImage(article.image);
                setTags(article.tags);

                // set default categoreis _id for checkbox
                const defaultCategories = article.categories.map(category => category._id);
                setCategories(defaultCategories);

                // set default tags label and value on tags state
                setTags(article.tags);
                
                
            }
        }
    }, [article, editArticleSuccess])

    // check if image is binary or not
    const isBinary = str => typeof str === 'string' && str.startsWith('data:');


    // Edit Article Handler
    const [updateArticle, { isLoading: updateArticleLoading, isSuccess: updateSuccess, isError: updateError }] = useUpdateArticleMutation();

    const editAticleHandler = (e) => {
        e.preventDefault();
        if (title && categories && tags && image && description && shortDescription) {
            updateArticle({id: article._id, body: { title, categories, tags, image: isBinary(image) ? image : null, description, shortDescription}});
        } else {
            // an error toast
            toast.error('Please fill all fields');
        }
    }


    useEffect(() => {
        if (updateSuccess) {
            toast.success('Article updated successfully');
        }
        if (updateError) {
            toast.error('Something went wrong');
        }
    }, [updateSuccess, updateError])


    const updateArticleData = {
        inputs: { title, shortDescription, description, tag, image, categories, tags, allCategories },
        inputsHandler: { setTitle, setShortDescirption, setDescription, setTag, addPhotoToPost, addCategoryHandler, setTags, resetImage, filePickerRef },
        editAticleHandler,
        methods: {isBinary},
        loadings: { isLoading, updateArticleLoading, categoryFetching },
    }

    return (
        <DashboardLayout title="Edit Article">
            <ArticleForm articleData={updateArticleData} isEdit />
        </DashboardLayout>
    )
}

export default EditArticle;