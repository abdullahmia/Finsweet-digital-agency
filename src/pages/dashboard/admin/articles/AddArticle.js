import { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import ArticleForm from "../../../../components/forms/ArticleForm";
import DashboardLayout from "../../../../components/layouts/DashboardLayout";
import { useCreateArticleMutation } from "../../../../features/article/articleApi";
import { useGetArticleCategoryQuery } from "../../../../features/articleCategory/articleCategoryApi";

const AddArticle = () => {
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
  const [createArticle, { isLoading: createArticleLoading, data, isSuccess, isError }] = useCreateArticleMutation();
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

    // check all fields
    if (!title || !shortDescription || !description || !image || !categories.length || !tags.length) {
      toast.error('Please fill all the fields!');
      return;
    }

    createArticle({ title, categories, shortDescription, description, image, tags });
  }


  const addArticleData = {
    inputs: {title, shortDescription, description, tag, image, categories, tags, allCategories},
    inputsHandler: { setTitle, setShortDescirption, setDescription, setTag, addPhotoToPost, addCategoryHandler, setTags, resetImage, filePickerRef },
    addArticleHandler,
    loadings: { categoryFetching, createArticleLoading },
  }

  return (
    <DashboardLayout title="New Article">
      <ArticleForm articleData={addArticleData} />
    </DashboardLayout>
  )
}

export default AddArticle;