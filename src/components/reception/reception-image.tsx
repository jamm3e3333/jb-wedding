import React, {useEffect, useRef} from "react";
import {motion, useAnimation, useInView} from "framer-motion";
import styles from './reception-image.module.scss'

const JAKUB_LIFTING_BRENDA_IMAGE_FILE_PATH = './img/jakub_lifting_brenda.jpeg'
const ReceptionImage: React.FC = () => {
  const receptionImgRef = useRef(null)
  const  isInView = useInView(receptionImgRef, { once: true })
  const animationController = useAnimation()

  useEffect(() => {

    if (isInView) {
      void animationController.start('visible')
    }
  }, [isInView])

  return <motion.div
      ref={receptionImgRef}
      className={styles['image-box']}
      variants={{
        hidden: { opacity: 0, y: 70 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={animationController}
      transition={{
        duration: .6,
        delay: .1,
      }}
    >
      <img src={JAKUB_LIFTING_BRENDA_IMAGE_FILE_PATH} alt="Jakub is lifting Brenda" />
    </motion.div>

}

export default ReceptionImage;
