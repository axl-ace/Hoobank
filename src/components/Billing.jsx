import { motion } from "framer-motion";
import { google, apple, bill } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
	return (
		<section id="product" className={` ${layout.sectionReverse}`}>
			<div className={`${layout.sectionImgReverse}`}>
				<img
					src={bill}
					alt="bill"
					className="w-[100%] h-[100%] relative z-[5]  "
				/>
				<div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
				<div className="absolute z-[0] -left-1/2 top-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
			</div>
			<div className={`${layout.sectionInfo}`}>
				<h2 className={`${styles.heading2}`}>
					Easily control your <br className="sm:block hidden" /> billing &
					invoicing.
				</h2>
				<p className={`${styles.paragraph} max-w[470px] mt-5`}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
					repellat dolore. Culpa, quod laborum harum necessitatibus non sit
					dolores minus iusto impedit veniam dicta ad deserunt doloribus eius
					corporis autem!
				</p>
				<div className="flex flex-row flex-wrap sm:mt-10 mt-6">
					<motion.img
						whileTap={{
							scale: 0.9,
						}}
						src={apple}
						alt="Apple appstore"
						className=" w-[128px] h-[42px] object-contain mr-5 cursor-pointer  "
					/>
					<motion.img
						whileTap={{
							scale: 0.9,
						}}
						src={google}
						alt="Google playstore"
						className=" w-[128px] h-[42px] object-contain  cursor-pointer  "
					/>
				</div>
			</div>
		</section>
	);
};

export default Billing;
