import { SelectedPage, ServiceType } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Service from "./Service";
import useServices from "@/hooks/useServices";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurServices = ({ setSelectedPage }: Props) => {
  const services = useServices("https://643145c5d4518cfb0e5de06b.mockapi.io/Services")

  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>НАШИ УСЛУГИ</HText>
            <p className="py-5">
              В медицинском центре «Центр здорового сна» работают лучшие в своей сфере специалисты, имеющие богатый опыт и многолетнюю практику.
              Все наши врачи имеют первую, высшую категорию, многие являются кандидатами и докторами медицинских наук.
              Каждый врач – настоящий профессионал, точно знающий все аспекты своей работы и заинтересованный в том, чтобы Вам помочь!
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {services.repos.map((item: ServiceType, index) => (
              <Service
                key={`${item.name}-${index}`}
                name={item.name}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurServices;
