import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import CategoryForm from "../../../../components/forms/CategoryForm";
import DashboardLayout from "../../../../components/layouts/DashboardLayout";
import CategoriesTable from "../../../../components/tables/CategoriesTable";
import { useCreateProjectCategoryMutation, useDeleteProjectCategoryMutation, useGetProjectCategoryQuery, useUpdateProjectCategoryMutation } from "../../../../features/projectCategory/projectCategoryApi";
import { clearEditing, setEditing } from "../../../../features/projectCategory/projectCategorySlice";


const ProjectCategories = () => {
    const { data: projectCategories, isLoading } = useGetProjectCategoryQuery();

    // create a article category
    const [createProjectCategory, { isLoading: createCatLoading, isSuccess, isError, error: responseError }] = useCreateProjectCategoryMutation();

    useEffect(() => {
        if (isSuccess) {
            toast.success('Category has been added!');
        }
        if (isError) {
            toast.error('Something went wrong!');
        }
    }, [createCatLoading, isSuccess, isError, responseError])


    // delete a article category
    const [deleteProjectCategory, { isLoading: deleteCatLoading, isSuccess: deleteSuccess, isError: deleteError, error: deleteResponseError }] = useDeleteProjectCategoryMutation();

    useEffect(() => {
        if (deleteSuccess) {
            toast.success('Category has been deleted!');
        }
        if (deleteError) {
            toast.error('Something went wrong!');
        }
    }, [deleteSuccess, deleteError, deleteResponseError])


    // Category update
    const { isEditing, editItem } = useSelector(state => state.projectCategory);
    const [updateArticleCategory, { isError: updateError, isSuccess: updateSuccess }] = useUpdateProjectCategoryMutation();
    const categoryEdit = {
        isEditing,
        editItem,
        clearEditing,
        handler: updateArticleCategory
    }

    useEffect(() => {
        if (updateError) {
            toast.error("Something went wrong.");
        }
        if (updateSuccess) {
            toast.success('Category has been updated.');
        }
    }, [updateError, updateSuccess]);
  return (
      <DashboardLayout title="Project Categories">
          <div className="bg-white px-6 py-3 rounded">
              <CategoryForm createHandler={createProjectCategory} isLoading={createCatLoading} categoryEdit={categoryEdit} />
          </div>

          <div className="bg-white px-6 py-3 rounded mt-8">
              <CategoriesTable categories={projectCategories} deleteHandlers={{ deleteCategory: deleteProjectCategory, deleteCatLoading }} setEditing={setEditing} />
          </div>
      </DashboardLayout>
  )
}

export default ProjectCategories;