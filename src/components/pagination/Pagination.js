import React from 'react'

const Pagination = ({totalPages, handlePageChange, page}) => {
  return (
    <>
          {
              totalPages > 1 && <div className='flex justify-center item-center pt-10'>
                  <nav aria-label="Page navigation example">
                      <ul class="inline-flex items-center -space-x-px">

                          {/* pagination button with total page */}
                          {
                              Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                                  <li>
                                      <button onClick={() => handlePageChange(number)} class={`block px-3 py-2 ml-0 leading-tight border hover:text-gray-700 ${page === number ? 'bg-darkBlue border-darkBlue text-white' : 'bg-white border-gray-300'}`}>
                                          {number}
                                      </button>
                                  </li>
                              ))
                          }
                      </ul>
                  </nav>
              </div>
          }
    </>
  )
}

export default Pagination