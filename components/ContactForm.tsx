import React from "react";

const ContactForm = () => {
  return (
    <form>
      <h2 className="text-2xl font-bold mb-5 text-white font-vazirmatn">
        تماس با من
      </h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="نام"
          name="name"
          className="w-full px-3 py-2 text-sm font-vazirmatn text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="Email"
          placeholder="ایمیل"
          name="email"
          className="w-full px-3 py-2 text-sm font-vazirmatn text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          placeholder="پیغام"
          name="message"
          className="w-full px-3 py-2 text-sm text-gray-200 font-vazirmatn placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <button className="px-6 font-vazirmatn mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400">
        ارسال پیام
      </button>
    </form>
  );
};

export default ContactForm;
