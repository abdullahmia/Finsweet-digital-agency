import moment from 'moment';
import { useParams } from 'react-router-dom';
import Image from '../../components/custom/Image';
import Layout from "../../components/layouts/Layout";
import { useGetArticleQuery } from '../../features/article/articleApi';

const BlogDetail = () => {
    const {slug} = useParams();

    const {data: article, isLoading} = useGetArticleQuery(slug);
    if (isLoading) return <>Loading...</>;

  return (
      <Layout title="Blog Slug | Sweet Agency">
          <section className="py-24 lg:px-0 px-4">
              <div className="container">
                  <div className="lg:w-[700px] w-full mx-auto">
                      <h2 className='text-[35px] text-center font-poppins text-darkBlue font-semibold'>{article.title}</h2>
                      <p className="font-poppins text-gray-600 text-center">{article?.author?.firstName} {article?.author?.lastName} {moment(article.createdAt).format("MMM Do YY")}</p>
                  </div>

                  <div className='mt-10'>
                      <Image src={article.image} className="w-full h-[500px]" alt="" />
                  </div>


                  <div className='lg:px-36 mt-6 space-y-8'>
                      <div className='font-poppins space-y-3'>
                          <h2 className='text-[31px] text-darkBlue font-semibold'>About the project</h2>
                          <div dangerouslySetInnerHTML={{ __html: article?.description }} />

                      </div>

                      {/* Keywords */}
                      <div className='mt-10 border-t border-b border-gray-200 py-6'>
                          <div className='font-poppins flex items-center gap-7'>
                              <h5 className='text-[18px] text-blue-700'>Keywords</h5>
                            {
                                article.tags.map((tag, key) => (
                                    <p key={key} className='text-gray-700 uppercase'>{tag}</p>
                                ))
                            }
                          </div>
                      </div>

                  </div>

                  
              </div>
          </section>
      </Layout>
  )
}

export default BlogDetail