import ContactSocials from "./ContactSocials";
import { Helmet, HelmetProvider } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
    .send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      {
        from_name: form.name,
        reply_to: form.email, // Use this for reply functionality
        to_name: "MD. Tahsin Ferdous",
        to_email: "tahsin.ferdous3546@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_KEY
    )
    .then(
      () => {
        toast('Mail Sent.Thankyou for Contacting.', {
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: 'green',

          },
        })
        setTimeout(() => {
          setForm({
            name: "",
            email: "",
            message: "",
          });
        }, [3000]);
      },
      (error) => {
        console.error(error);
        toast('Error while sending mail. Try again!.', {
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: 'red',

          },
        })
      }
    );
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>MD. Tahsin Ferdous | Contact</title>
      </Helmet>
      <div className="flex flex-col w-full px-8 pt-5 gap-x-8 gap-y-8 bg-mainBg xl:flex-row xl:divide-x-2 xl:divide-accentColor">
        <div className="xl:w-1/2 ">
          <ContactSocials />
        </div>
        <div className="flex flex-col xl:w-1/2 xl:pl-10">
          <p className="text-3xl text-textColor">Or Fill Out This Form</p>
          <form
            ref={formRef}
            className="pt-5 space-y-4 text-textColor"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col ">
              <label
                className="text-base font-semibold md:text-lg"
                htmlFor="name"
              >
                NAME
              </label>
              <input
                className="input "
                name="name"
                type="text"
                id="name"
                required
              value={form.name}
              onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-base font-semibold md:text-lg"
                htmlFor="email"
              >
                EMAIL
              </label>
              <input
                className="input"
                type="email"
                id="email"
                name="email"
                required
              value={form.email}
              onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-base font-semibold md:text-lg"
                htmlFor="textmessage"
              >
                MESSAGE
              </label>
              <textarea
                className="w-full p-2 text-xl bg-articleBg focus:border-accentColor focus:outline-none focus:ring-1 focus:ring-accentColor"
                name="message"
                cols="30"
                rows="6"
                value={form.message}
              onChange={handleChange}
              ></textarea>

            </div>
            <button
              type="submit"
              className="px-6 py-1 text-lg font-medium text-black bg-accentColor"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Toaster
        toastOptions={{
          className: '',
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#713200',
          },
        }}
      />
    </HelmetProvider>
  );
}

export default Contact;
