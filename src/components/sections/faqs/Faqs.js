import { Link } from "react-router-dom"
import Faq from "./Faq"

const Faqs = () => {
  return (
    <section className="py-24 lg:px-0 px-4">
      <div className="container">
        <div className="grid grid-cols-12 gap-8">
          <div className="lg:col-span-4 col-span-12">
            <h2 className="text-[30px] leading-none font-poppins text-darkBlue mb-3">Frequently asked questions</h2>
            <Link to="/contact" className="font-poppins text-blue-800 font-semibold">Contact us for more info</Link>
          </div>
          <div className="lg:col-span-8 col-span-12">
            <div className="divide-y-2">
              <Faq no={'1'} title="How much time does it take?" open />
              <Faq no={'2'} title="What is your class naming convention?" />
              <Faq no={'3'} title="How do you communicate?" />
              <Faq no={'4'} title="I have a bigger project. Can you handle it?" />
              <Faq no={'5'} title="What is your class naming convention?" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faqs