import { useForm } from "react-hook-form";
import {SelectedPage, ServiceType} from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";
import useServices from "@/hooks/useServices";
import ReCAPTCHA  from "react-google-recaptcha";
import {useState} from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {

  const [isCaptchaSuccessful, setIsCaptchaSuccess] = useState(false)

  function onChange(value: string | null) {
    setIsCaptchaSuccess(true)
    console.log("captcha value: ", value);
  }

  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;

  const services = useServices("https://643145c5d4518cfb0e5de06b.mockapi.io/Services")

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            ЗАПИСЬ <span className="text-primary-500">ОНЛАЙН</span>
          </HText>
          <p className="my-5">
              Администратор центра свяжется с вами для подтверждения записи.
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://643145c5d4518cfb0e5de06b.mockapi.io/Patients"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="Ваше имя:"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="Ваш еmail:"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

                <select {...register("specialization")}
                    className={inputStyles}
                >
                    <option disabled selected hidden>Выбрать специализацию:</option>
                    {services.repos.map((item: ServiceType) => (
                        <option value={item.name}>{item.name}</option>
                    ))}
                </select>

              <input
                className={inputStyles}
                type="date"
                {...register("date", {
                  required: true,
                })}
              />

              <ReCAPTCHA
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={onChange}
              />

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                disabled={!isCaptchaSuccessful}
              >
                Записаться
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full"
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
