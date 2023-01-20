import ProjectForm from "../../../../components/forms/ProjectForm";
import DashboardLayout from "../../../../components/layouts/DashboardLayout";

const AddProject = () => {
  return (
      <DashboardLayout title="New Project">
        <ProjectForm />
      </DashboardLayout>
  )
}

export default AddProject;