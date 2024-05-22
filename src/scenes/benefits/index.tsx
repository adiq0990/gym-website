import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import HText from "@/shared/HText";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6"/>,
    title: "State of the Art Facilities",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At repellat alias repellendus eum reprehenderit laudantium perferendis? Aliquam obcaecati temporibus modi minus, nisi vero animi deleniti reiciendis pariatur, possimus sint quis."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6"/>,
    title: "100's of Diverse Classes",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At repellat alias repellendus eum reprehenderit laudantium perferendis? Aliquam obcaecati temporibus modi minus, nisi vero animi deleniti reiciendis pariatur, possimus sint quis."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6"/>,
    title: "Expert and Pro Trainers",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At repellat alias repellendus eum reprehenderit laudantium perferendis? Aliquam obcaecati temporibus modi minus, nisi vero animi deleniti reiciendis pariatur, possimus sint quis."
  }
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

function Benefits({setSelectedPage}: Props) {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>

        {/* HEADER */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w--3/5 md:my-20">
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At repellat alias repellendus eum reprehenderit laudantium perferendis? Aliquam obcaecati temporibus modi minus, nisi vero animi deleniti reiciendis pariatur, possimus sint quis.</p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div 
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView='visible'
          viewport={{ once: true, amount: 0.5}}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => 
            <Benefit 
              key={benefit.title} 
              icon={benefit.icon} 
              title={benefit.title} 
              description={benefit.description} 
              setSelectedPage={setSelectedPage} />)}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-20 md:flex items-center">
          {/* GRAPHIC */}
          <img className="mx-auto mb-7"alt="benefits-page-graphic" src={BenefitsPageGraphic}/>

          {/* DESCRIPTION */}
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{delay: 0.4, duration: 0.5 }}
             variants={{
               hidden: { opacity: 0, x: 50 },
               visible: { opacity: 1, x: 0 },
             }}
            className="md:pl-10">
            {/* TITLE */}
            <div className="relative">
              <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{duration: 0.5 }}
                 variants={{
                   hidden: { opacity: 0, x: 50 },
                   visible: { opacity: 1, x: 0 },
                 }}
                className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <HText>
                  MILIONS OF HAPPY MEMBERS GETTING <span className="text-primary-500">FIT</span>
                </HText>
              </motion.div>
            </div>
            {/* DESCRIPTION */}
            <div>
              <p className="my-7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet delectus ea incidunt soluta expedita eos cupiditate, laudantium facere quam maxime explicabo adipisci ipsam aut at odio suscipit praesentium officiis nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio labore totam natus, dolore quas inventore minima autem nihil maiores praesentium ad adipisci dolor vero architecto accusantium placeat tempore nobis sapiente. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium eum id assumenda adipisci repudiandae possimus quidem voluptatibus, hic temporibus mollitia, esse modi reprehenderit officia pariatur. Maiores eius ullam libero temporibus!</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsa repudiandae explicabo necessitatibus, voluptatum dolor nemo. Illo velit pariatur non molestiae aspernatur facilis suscipit ipsa incidunt, neque adipisci rerum ipsum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt corporis obcaecati maiores sequi vitae dignissimos, culpa nobis voluptas, ducimus officiis quibusdam cumque soluta totam aliquid, quos libero ut hic saepe?</p>
            </div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:left-52 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
              </div>

            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits;