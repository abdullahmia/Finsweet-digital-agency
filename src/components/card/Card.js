const Card = ({ icon, title, ...arg }) => {
    return (
        <div {...arg} >
            <div className="space-y-4 p-8 rounded">
                <img src={icon} alt="Icon" />
                <h2 className="text-[24px] font-poppins text-darkBlue font-semibold">{title}</h2>
                <p className="text-[16px] font-poppins text-darkBlue">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
            </div>
        </div>
    )
}

export default Card;