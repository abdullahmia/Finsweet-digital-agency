

const Image = ({src, ...rest}) => {
  return (
      <img src={`${process.env.REACT_APP_CLOUDINARY_IMAGE_URL}${src}`} {...rest} />
  )
}

export default Image