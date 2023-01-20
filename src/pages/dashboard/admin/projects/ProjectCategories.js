import CategoryForm from "../../../../components/forms/CategoryForm"
import DashboardLayout from "../../../../components/layouts/DashboardLayout"
import CategoriesTable from "../../../../components/tables/CategoriesTable"

const ProjectCategories = () => {
  return (
      <DashboardLayout title="Project Categories">
          <div className="bg-white px-6 py-3 rounded">
              <CategoryForm />
          </div>

          <div className="bg-white px-6 py-3 rounded mt-8">
              <CategoriesTable />
          </div>
      </DashboardLayout>
  )
}

export default ProjectCategories