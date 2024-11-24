import { SectionWrapper } from "../hoc";
import { awards } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const AwardCard = () => {};

const Awards = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My accomplishments</p>
        <h2 className={styles.sectionHeadText}>Awards.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Awarded to me
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {awards.length ? (
          awards.map((award, index) => (
            <AwardCard key={`award-${index}`} index={index} {...award} />
          ))
        ) : (
          <p className='font-mono italic text-xl'>To Be Added</p>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Awards, "awards");
