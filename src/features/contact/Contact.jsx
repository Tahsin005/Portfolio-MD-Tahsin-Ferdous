import { useForm } from "react-hook-form";
import ContactSocials from "./ContactSocials";
import { Helmet, HelmetProvider } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      textmessage: "",
    },
  });

  const formData = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const sendEmail = () => {
    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        formData.current,
        `${import.meta.env.VITE_EMAILJS_KEY}`,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    reset();
    toast('Mail Sent.Thankyou for Contacting.');
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
            ref={formData}
            className="pt-5 space-y-4 text-textColor"
            onSubmit={handleSubmit(sendEmail)}
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
                {...register("name", {
                  required: { value: true, message: "Name is required" },
                })}
              />
              <p className="text-sm text-red-600 error">
                {errors.name?.message}{" "}
              </p>
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
                {...register("email", {
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email format",
                  },
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
              />
              <p className="text-sm text-red-600 error">
                {errors.email?.message}{" "}
              </p>
            </div>
            <div className="flex flex-col">
              <label
                className="text-base font-semibold md:text-lg"
                htmlFor="subject"
              >
                SUBJECT
              </label>
              <input
                className="input"
                type="text"
                name="subject"
                id="subject"
                {...register("subject", {
                  required: {
                    value: true,
                    message: "Subject is required",
                  },
                })}
              />
              <p className="text-sm text-red-600 error">
                {errors.subject?.message}{" "}
              </p>
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
                id="textmessage"
                name="textmessage"
                cols="30"
                rows="6"
                {...register("textmessage", {
                  required: {
                    value: true,
                    message: "Message is required",
                  },
                  validate: {
                    isLessThanfiveChar: (fieldValue) => {
                      return (
                        fieldValue.length > 4 ||
                        "Should be of minimum 5 characters"
                      );
                    },
                  },
                })}
              ></textarea>
              <p className="text-sm text-red-600 error">
                {errors.textmessage?.message}{" "}
              </p>
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
