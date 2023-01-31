import { BiCaretRight, BiPlus, BiX } from "react-icons/bi";
import Circle from '../loaders/Circle';

const ServiceForm = ({ isEdit, serviceProps = {} }) => {
  const { name, price, description, isFeatured, features, feature } = serviceProps.inputs || {};
  const { setName, setPrice, setDescription, setIsFeatured, setFeatures, setFeature } = serviceProps.inputsHanlders || {};
  const { isLoading, submitHandler } = serviceProps || {};
  return (
    <div>
      <div className='shadow px-6 pb-10 pt-4 bg-white font-poppins'>
        <form className='space-y-8' onSubmit={submitHandler}>
          <div className='flex items-center justify-between flex-wrap border-b py-2'>
            <h2 className='text-xl'>
              {
                isEdit ? 'Update Service' : 'New Service'
              }
            </h2>
            <button className='black-sm-btn'>
              {isLoading ? <><Circle /> {isEdit ? 'Updating' : 'Publishing'}</> : isEdit ? 'Update' : 'Publish'}
            </button>
          </div>


            <div>
              <label className="text-gray-600 mb-2 block">Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="input" required />
            </div>

            <div>
              <label className="text-gray-600 mb-2 block">Price</label>
              <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="input" required />
            </div>

            <div>
              <label className="text-gray-600 mb-2 block">Featured</label>
            <select className="input" value={isFeatured} onChange={(e) => setIsFeatured(e.target.value)}>
                <option value={true}>Featured</option>
                <option value={false}>Nor Featured</option>
              </select>
            </div>


            <div>
              <label className="text-gray-600 mb-2 block">Features</label>
              {
                features && <div className="py-4">
                  {
                    features.map((item, key) => (
                      <p key={key} className='flex items-center gap-2'>
                        <BiCaretRight size={23} className="text-[#97DAAD]" />
                        <span className='font-poppins'>{item}</span>
                        <button onClick={(e) => {
                          e.preventDefault();
                          setFeatures(features.filter((_, index) => index !== key))
                        }} className="bg-darkBlue text-white rounded-full"><BiX /></button>
                      </p>
                    ))
                  }
                </div>
              }
              <div className='flex gap-2'>
                <input
                  type="text"
                  className='input focus:outline-none'
                  placeholder='Add Features'
                  value={feature}
                  onChange={(e) => setFeature(e.target.value)}
                />
                <button type='button' onClick={(e) => {
                  e.preventDefault();
                  if (feature) {
                    setFeatures([...features, feature])
                    setFeature('')
                  }
                }} className='bg-darkBlue text-white px-4 rounded'><BiPlus size={20} /></button>
              </div>
            </div>


          <div>
            <label className="text-gray-600 mb-2 block">Short Descripotions</label>
            <textarea className='input' value={description} onChange={(e) => setDescription(e.target.value)} rows="3"></textarea>
          </div>

          </form>
        </div>
    </div>
  )
}

export default ServiceForm