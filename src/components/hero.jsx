import styles from "../style";
import { discount, robot } from "../assets";
import Getstarted from "./GetStarted";

const Hero = ({ color }) => {
	return (
		<section
			id="home"
			className={`flex md:flex-row flex-col ${styles.paddingY}`}
		>
			<div
				className={` flex-1 ${styles.flexStart} flex-col xl:p-0 sm:px-16 px-6 `}
			>
				<div className=" flex flex-row items-center py[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 ">
					<img src={discount} alt="icon" className=" w-[32px] h-[32px]" />
					<p className={` ${styles.paragraph} ml-2`}>
						<span className=" text-white">20%</span> Discount for{" "}
						<span className="text-white">1 Month.</span>
					</p>
				</div>
				<div className="flex flex-row justify-between items-center w-full">
					<h1
						className={`ss:leading-[100px] leading-[72px] flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white `}
					>
						The next <br className="sm:block hidden" />{" "}
						<span className="text-gradient"> Generation</span>
					</h1>
					<div className="ss:flex hidden md:mr-4 mr-0">
						<Getstarted />
					</div>
				</div>
				<h1 className=" w-full ss:leading-[100px] leading-[72px] font-poppins font-semibold ss:text-[68px] text-[52px] text-white ">
					Payment Method.
				</h1>
				<p className={` ${styles.paragraph} max-w-[470px] mt-5 `}>
					Our team of experts uses a methodology to identify the credit cards
					most likely to fit your needs. We examine annual percentage rates and
					annual fees.
				</p>
			</div>
			<div
				className={` flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative overflow-visible  `}
			>
				<img
					src={robot}
					alt=""
					className=" w-[100%] h-[100%] relative z-[5]  "
				/>
				<div className=" absolute z-0 w-[40%] h-[35%] top-0 pink__gradient "></div>
				<div className=" absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full white__gradient "></div>
				<div className=" absolute z-0 w-[50%] h-[50%] right-20 bottom-20 blue__gradient "></div>
			</div>

			<div className={` ss:hidden ${styles.flexCenter} `}>
				<Getstarted />
			</div>
		</section>
	);
};

export default Hero;
