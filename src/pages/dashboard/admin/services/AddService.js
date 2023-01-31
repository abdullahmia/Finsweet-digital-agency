import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import ServiceForm from '../../../../components/forms/ServiceForm';
import DashboardLayout from '../../../../components/layouts/DashboardLayout';
import { useAddServiceMutation } from '../../../../features/service/serviceApi';

const AddService = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [isFeatured, setIsFeatured] = useState(false);
    const [features, setFeatures] = useState([]);
    const [feature, setFeature] = useState('');

    // add new service mutation
    const [addService, {isLoading, isSuccess, isError, data, error}] = useAddServiceMutation();

    // submit form
    const addServiceHandler = (e) => {
        e.preventDefault();
        addService({name, price, description, isFeatured, features});
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success(data?.message);

            setName('');
            setPrice('');
            setDescription('');
            setIsFeatured(false);
            setFeatures([]);
            setFeature('');
        }

        if (isError) {
            toast.error(error?.message);
        }

    }, [isSuccess, isError, data, error])

    const serviceProps = {
        inputs: {name, price, description, isFeatured, features, feature},
        inputsHanlders: {setName, setPrice, setDescription, setIsFeatured, setFeatures, setFeature},
        isLoading,
        submitHandler: addServiceHandler
    }



  return (
      <DashboardLayout title="Add Service | Smart Agency">
        <ServiceForm serviceProps={serviceProps} />
      </DashboardLayout>
  )
}

export default AddService