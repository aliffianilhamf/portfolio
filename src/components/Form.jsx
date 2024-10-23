import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const ContactUs = () => {
  const form = useRef();
  // console.log(form);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("default_service", "template_ll3rcig", form.current, {
        publicKey: "wE-DNiLdIseUkyXqT",
      })
      .then(
        () => {
          form.current.reset();
          Swal.fire({
            title: "Email Sent!",
            text: "Your email has been successfully sent.",
            icon: "success",
            confirmButtonText: "OK",
          });
        },
        (error) => {
          Swal.fire({
            title: "Error",
            text: JSON.stringify(error),
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      );
  };

  return (
    <section className="flex justify-center mx-auto gap-5 py-16 xl:w-[80%] sm:w-full xs:w-[75%]">
      <img
        src="/img/macbook.png"
        alt="#"
        className="h-[220px] self-center md:w-[20%] xs:w-0"
      />
      <div className="sm:w-[50%] xs:w-full">
        <h2 className="text-5xl w-fit font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 from-30% via-pink-500 via-70% to-pink-400">
          Contact Me
        </h2>
        <p className="opacity-50">
          Feel free to contact me anytime to collaborate, or just have a
          friendly chat about coding!
        </p>

        <form
          id="form"
          autoComplete="off"
          className="flex flex-col py-2 mt-1"
          method="post"
          ref={form}
          onSubmit={sendEmail}
        >
          <label
            htmlFor="from_name"
            className="font-bold text-[17px] opacity-90"
          >
            Name
          </label>
          <input
            type="text"
            className="bg-transparent border-white/50 border-2 placeholder:text-white/50 px-3 py-[5px] rounded-md mb-3 md:w-[80%] xs:w-full"
            name="from_name"
            id="from_name"
            placeholder="What's your name?"
            required
          />
          <label htmlFor="email" className="font-bold text-[17px] opacity-90">
            Email
          </label>
          <input
            type="email"
            className="bg-transparent border-white/50 border-2 placeholder:text-white/50 px-3 py-[5px] rounded-md mb-3 md:w-[80%] xs:w-full"
            name="email"
            id="email"
            placeholder="Type email here..."
            required
          />

          <label htmlFor="message" className="font-bold text-[17px] opacity-90">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="bg-transparent border-white/50 border-2 placeholder:text-white/50 px-3 py-[5px] rounded-md mb-3 md:w-[80%] xs:w-full"
            placeholder="Type here..."
            required
          ></textarea>

          <button
            className="border-2 border-gray-400 rounded-md bg-transparent w-fit px-8 py-1 my-4"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
