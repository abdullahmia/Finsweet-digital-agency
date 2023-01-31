import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { useParams } from "react-router-dom";
import ServiceForm from "../../../../components/forms/ServiceForm";
import DashboardLayout from "../../../../components/layouts/DashboardLayout";
import { useGetServiceQuery, useUpdateServiceMutation } from "../../../../features/service/serviceApi";


const EditService = () => {
    const {id} = useParams();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [isFeatured, setIsFeatured] = useState(false);
    const [features, setFeatures] = useState([]);
    const [feature, setFeature] = useState('');

    // get the service
    const { data: service } = useGetServiceQuery(id);
    useEffect(() => {
        if (service) {
            setName(service.name);
            setPrice(service.price);
            setDescription(service.description);
            setIsFeatured(service.isFeatured);
            setFeatures(service.features);
        }
    }, [service])

    // update the service
    const [updateService, {isLoading, isError, isSuccess, error, data}] = useUpdateServiceMutation();
    const editServiceHandler = (e) => {
        e.preventDefault();
        updateService({id: service._id, body: {name, price, description, isFeatured, features}});
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success(data?.message);
        }
        if (isError) {
            toast.error(error?.message);
        }
    }, [isSuccess, isError, data, error])


    // service form props
    const serviceProps = {
        inputs: { name, price, description, isFeatured, features, feature },
        inputsHanlders: { setName, setPrice, setDescription, setIsFeatured, setFeatures, setFeature },
        isLoading,
        submitHandler: editServiceHandler
    }


  return (
    <DashboardLayout title="Edit Service | Smart Agency">
        <ServiceForm serviceProps={serviceProps} isEdit />
    </DashboardLayout>
  )
}

export default EditService