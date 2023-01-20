import ArticleForm from "../../../../components/forms/ArticleForm";
import DashboardLayout from "../../../../components/layouts/DashboardLayout";

const EditArticle = () => {
    return (
        <DashboardLayout title="Edit Article">
            <ArticleForm isEdit/>
        </DashboardLayout>
    )
}

export default EditArticle;