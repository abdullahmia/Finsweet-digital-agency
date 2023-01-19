import { useEffect } from "react";
import toast from 'react-hot-toast';
import CategoryForm from "../../../../components/forms/CategoryForm";
import DashboardLayout from "../../../../components/layouts/DashboardLayout";
import CategoriesTable from "../../../../components/tables/CategoriesTable";
import { useCreateArticleCategoryMutation, useDeleteArticleCategoryMutation, useGetArticleCategoryQuery } from "../../../../features/articleCategory/articleCategoryApi";

const ArticleCategories = () => {
  const { data: articleCategories, isLoading } = useGetArticleCategoryQuery();

  // create a article category
  const [createArticleCategory, {isLoading: createCatLoading, isSuccess, isError, error: responseError}] = useCreateArticleCategoryMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success('Category has been added!');
    }
    if (isError) {
      toast.error('Something went wrong!');
    }
  }, [createCatLoading, isSuccess, isError, responseError])


  // delete a article category
  const [deleteArticleCategory, {isLoading: deleteCatLoading, isSuccess: deleteSuccess, isError: deleteError, error: deleteResponseError}] = useDeleteArticleCategoryMutation();

  useEffect(() => {
    if (deleteSuccess) {
      toast.success('Category has been deleted!');
    }
    if (deleteError) {
      toast.error('Something went wrong!');
    }
  }, [deleteSuccess, deleteError, deleteResponseError])

  return (
    <DashboardLayout title="Article Categories">
        <div className="bg-white px-6 py-3 rounded">
        <CategoryForm createHandler={createArticleCategory} isLoading={createCatLoading} />
        </div>

      <div className="bg-white px-6 py-3 rounded mt-8">
        <CategoriesTable categories={articleCategories} deleteHandlers={{deleteArticleCategory, deleteCatLoading}} />
      </div>
    </DashboardLayout>
  )
}

export default ArticleCategories;