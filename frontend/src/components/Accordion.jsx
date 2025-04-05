import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineDown } from "react-icons/ai";

const faqData = [
  { question: "Do I have to return the car to the same location where I picked it up?", answer: "For all the bookings, return the AgiroCabs Car to its pick-up location. If you leave AgiroCabs Car away from your Pick-up location, you will be charged up to INR 10,000 in wrong location drop penalties + Car recovery expenses incurred by AgiroCabs until the vehicle is returned to the correct location. Late fees will also be charged at the effective hourly booking rate.Yes, you have to return it to the same location unless stated otherwise." },
  { question: "What happens if I return the car late?", answer: "A high penalty will be applicable for the amount of time you are late. In order to avoid paying this penalty, you can extend the booking from the app, well in advance." },
  { question: "How will I receive my Refund?", answer: "Refund will be initiated to the account/card used to make the payment and will take upto 7 days to settle. If the payment was made from the wallet account, it would take 24-48 hrs for the refund to settle." },
  { question: "How do I reach the location of the car?", answer: "Once the booking is confirmed, vehicle details with the location would be shared 3-4 hours prior to booking start time. We will also share an exact car location before 30 minutes of your booking start time along with the Navigation Link. Please use this Link or your application to navigate to your pickup location." },
  { question: "How do I proceed with my Start Checklist after reaching the location?", answer: "Filling checklists is easy! Now you can fill your pick up checklist via the AgiroCabs app. Just log in to the App, select your live booking from the My bookings page and start. 1. Fill Exterior cleanliness and damage reporting with images. 2. Unlock the vehicle 3. Interior cleanliness, documents check and vehicle KM/Fuel readings with images. 4. Pick up the car keys from the dashboard. 5. Start your trip. It is advised to keep the images for your future reference and do ensure proper network coverage filling the checklist. Location with Fleet assistance Collect the keys from the location executive." },
  { question: "What if I see there are exterior damages on the vehicle?", answer: "We try to inspect all our vehicle's condition periodically however if you notice any damage on the vehicle, Please do call out the same in the start checklist and also do capture the images for future reference." },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto my-10">
      <h2 className="text-3xl font-bold text-center mb-6">Have Any Questions?</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {faqData.map((item, index) => (
          <div key={index} className=" rounded-lg overflow-hidden bg-white shadow-md">
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium hover:bg-gray-100 transition-all duration-200"
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <AiOutlineDown className="w-5 h-5 text-white bg-green-400 " />
              </motion.div>
            </button>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={activeIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-4 py-3 bg-gray-50 text-gray-700">{item.answer}</div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
