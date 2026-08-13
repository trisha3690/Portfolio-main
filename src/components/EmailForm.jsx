import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { useState } from "react";
import { toast } from "react-toastify";

const EmailForm = () => {
  const initialFormData = {
    from_name: "",
    from_email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);

  const updateFormData = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.from_email || !formData.message) {
      toast.error("Please fill all fields!");
      return;
    }

    setLoading(true);

    const templateMessage = `Hi, my name is ${formData.from_name}. I am reaching out from ${formData.from_email}.\n\nMessage:\n${formData.message}\n\nPlease contact me back on WhatsApp.`;
    const whatsappUrl = `https://wa.me/917439452981?text=${encodeURIComponent(templateMessage)}`;

    window.open(whatsappUrl, "_blank");
    toast.success("Opening WhatsApp with your message...");
    setFormData(initialFormData);
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSendMail}
      className="w-full text-white lg:px-8 mx-auto grid gap-4 lg:gap-6 tracking-wide leading"
    >
      <div className=" grid gap-3 items-center">
        <label className="text-nowrap">Name</label>
        <input
          type="text"
          name="from_name"
          value={formData.from_name}
          placeholder="Enter your Name"
          className="border-b text-sm w-full p-2 outline-none bg-transparent"
          onChange={updateFormData}
        />
      </div>

      <div className=" grid gap-3 items-center">
        <label className="text-nowrap">Email</label>
        <input
          type="email"
          name="from_email"
          value={formData.from_email}
          required
          placeholder="johndoe@gmail.com"
          className="border-b text-sm w-full p-2 outline-none bg-transparent"
          onChange={updateFormData}
        />
      </div>

      <div className=" grid gap-3 ">
        <label>Message</label>
        <textarea
          rows={3}
          name="message"
          placeholder="Write your message"
          value={formData.message}
          className="border-b text-sm w-full p-2 outline-none bg-transparent resize-none"
          onChange={updateFormData}
        />
      </div>

      <button
        type="submit"
        className="border border-white/30 px-6 py-2 rounded-full w-full md:w-2/3 mt-4
             hover:bg-white hover:text-black transition-all duration-500 cursor-pointer"
      >
        {loading ? "Sending..." : "Send Message →"}
      </button>
    </form>
  );
};

export default EmailForm;
