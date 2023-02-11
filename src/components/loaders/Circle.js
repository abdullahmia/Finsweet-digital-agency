import { BiLoaderAlt } from 'react-icons/bi';

const Circle = ({size}) => {
  return (
      <BiLoaderAlt size={size ? size : 20} className="animate-spin" />
  )
}

export default Circle