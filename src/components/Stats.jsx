import styles from '../style'
import { stats } from '../constants'

const Stats = () => {
  return (
    <section className={` ${styles.flexCenter} md:flex-row flex-col flex-wrap sm:mb-20 mb-6  `}>
      { stats.map((stat) =>
      <div key={stat.id} className=' flex flex-1 justify-center items-center flex-row m-3'>
          <h4 className=" font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white  ">{stat.value} </h4>
          <p className=" font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[15px] text-gradient uppercase ml-3  ">{stat.title} </p>
      </div>
      ) }
    </section>
  )
}

export default Stats