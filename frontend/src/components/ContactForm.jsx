import React from "react";

const ContactForm = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
        Do you have any question?
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 justify-between">
        {/* Left: Form */}
        <div className="w-full lg:w-2/3 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="text"
              placeholder="Your Phone"
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>

          {/* reCAPTCHA Box */}
          {/* <div className="w-[300px]">
            <div className="bg-white border border-red-400 text-red-600 text-sm p-2 rounded-t">
              ERROR for site owner: Invalid site key
            </div>
            <div className="border border-gray-300 rounded-b shadow-md p-4">
              <div className="text-xs text-gray-500 text-center">
                reCAPTCHA <br />
                <a
                  href="https://policies.google.com/privacy"
                  className="underline"
                  target="_blank"
                >
                  Privacy
                </a>{" "}
                -{" "}
                <a
                  href="https://policies.google.com/terms"
                  className="underline"
                  target="_blank"
                >
                  Terms
                </a>
              </div>
            </div>
          </div> */}

          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold transition">
            Send Message
          </button>
        </div>

        {/* Right: Contact Info */}
        <div className="w-full lg:w-1/3 space-y-6">
          {/* Patna Office */}
          <div className=" rounded-lg shadow-sm p-6 bg-white">
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-sm text-gray-700 mb-1">
              📍 CIMP, Institutional Area, Mithapur, Patna 800001
            </p>
            <p className="text-sm text-gray-700 mb-1">📞 +91 9472337476</p>
            <p className="text-sm text-green-600">✉️ support@agirocabs.com</p>
          </div>

          {/* Bangalore Office */}
          <div className=" rounded-lg shadow-sm p-6 bg-white">
            <h3 className="text-lg font-semibold mb-2">Bangalore Office</h3>
            <p className="text-sm text-gray-700 mb-1">
              📍 Sarlaya Layout, Kattigenhalli, Yelahanka, Bangalore, India,
              560064
            </p>
            <p className="text-sm text-gray-700 mb-1">📞 +91 9006484700</p>
            <p className="text-sm text-green-600">✉️ support@agirocabs.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
