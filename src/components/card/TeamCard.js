
const TeamCard = ({ image, name, title }) => {
    return (
        <div className="bg-white p-4 text-center py-14 rounded space-y-2">
            <img src={image} className="w-32 mx-auto" alt="" />
            <h1 className='text-[20px] text-center font-poppins text-darkBlue font-semibold'>{name}</h1>
            <p className='font-poppins text-gray-500'>{title}</p>
        </div>
    )
}

export default TeamCard;