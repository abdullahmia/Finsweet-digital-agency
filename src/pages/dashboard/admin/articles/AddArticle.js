import ArticleForm from "../../../../components/forms/ArticleForm";
import DashboardLayout from "../../../../components/layouts/DashboardLayout";

const AddArticle = () => {
  return (
    <DashboardLayout title="New Article">
        <ArticleForm />
    </DashboardLayout>
  )
}

export default AddArticle;