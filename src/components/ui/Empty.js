import emptyImg from '../../assets/images/empty.png';


const Empty = () => {
  return (
    <div className='w-full bg-red-300'>
        <img src={emptyImg} className="w-96" alt="Empty" />
    </div>
  )
}

export default Empty;