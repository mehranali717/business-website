import Image from "next/image"
import protfolioHeroImage from "../../../public/img/Hero.png";
import portfolioImg from "../../../public/img/Portfolio.png";
import objectsImg from "../../../public/img/objects.png";
import phonenumberImg from "../../../public/img/phonenumber.svg";
import emailImg from "../../../public/img/email.svg";
import innvationImg from "../../../public/img/Innovation.svg";
import classes from "./portfolioHero.module.css"
import GradientBtn from "@/components/gradient-btn"

const PortfolioHero = () => <section className={classes.protfolioHeroWrapper}>
    <div className="FHD:w-[1320px] MHD:w-[1100px] HD:w-[900px] lg:w-[800px] mx-auto relative">
        <div className={classes.protfolioHero}>
            <div className='flex flex-col md:items-center lg:flex-row'>
                <div className={classes.protfolioHeroDescription}>
                    <span className={classes.tagline}>We've delivered </span>
                   <span className={classes.states}>200+</span>
                    <h1 className={classes.heading}>Successful
                        Projects</h1>
                    <div className="max-md:justify-center max-md:flex max-md:items-center">
                        <GradientBtn text="Book a Discovery Call" className="w-[246px] md:w-[246px]" />
                    </div>
                </div>
                <div className={classes.protfolioHeroImg}>
                    <Image src={protfolioHeroImage} width height alt="protfolioHero image" />
                    <div className={classes.phonenumber}>
                        <Image src={phonenumberImg} width height />
                    </div>
                    <div className={classes.email}>
                        <Image src={emailImg} width height />
                    </div>
                </div>
            </div>
        </div>
        <div className={`${classes.innovationImgWrapper}`}>
            <Image src={innvationImg} layout="responsive" width height alt="innovation img" />
        </div>
    </div>
</section>
export default PortfolioHero