import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import Trust from "@/assets/about/trust.svg"
import Years from "@/assets/about/years.svg"
import Doctors from "@/assets/about/doctors.svg"
import Center from "@/assets/about/center.svg"
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/about/BenefitsPageGraphic.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <img src={Trust} className="h-10 w-10"  alt="Trust us"/>,
    title: "Ценим доверие",
    description:
      "От диагностики до лечения с вниманием к Вам.",
  },
  {
    icon: <img src={Years} className="h-10 w-10"  alt="11 years"/>,
    title: "11 лет",
    description:
      "С 2012 г. заботимся о здоровье взрослых и детей.",
  },
  {
    icon: <img src={Doctors} className="h-10 w-10"  alt="50 doctors"/>,
    title: "50 врачей",
    description:
      "Делаем ставку на лучших специалистов.",
  },
  {
    icon: <img src={Center} className="h-10 w-10"  alt="Center"/>,
    title: "Мы в центре",
    description:
        "Легко найти, удобно добираться.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>Консультации лучших специалистов для взрослых и детей</HText>
          <p className="my-5 text-sm">
            Взрослые, детские, семейные консультации при тревожности, стрессах, сложностях в отношениях, семейных кризисах, неуверенности в себе, вопросах развития.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    О МЕДИЦИНСКОМ{" "}
                    <span className="text-primary-500">ЦЕНТРЕ</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Многопрофильный медицинский центр начал свою работу в Минске еще в 2012 году.
                Изначально медцентр специализировался на уникальном направлении – сомнологии.
                С течением времени медицинский центр развивался, внедрялись новые медицинские услуги, открывались новые направления.
                Подход к лечению стал более комплексным.
                Центр стал мультифункциональным и сейчас он специализируется на предоставлении высококачественных услуг по основным медицинским направлениям.
              </p>
              <p className="mb-5">
                В нашем центре Вы можете получить профессиональные консультации врачей и провести современные обследования.
                Диагностика и лечение проводятся с использованием медицинского оборудования из Швейцарии, Германии, США.
                Благодаря высокому уровню технологического оснащения и профессионализму врачей, Вы можете быть уверены, что диагноз будет поставлен быстро и точно, а лечение назначено правильно.

                "Центр здорового сна" - с заботой о самом ценном!
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Записаться
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
