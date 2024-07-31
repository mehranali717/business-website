import Image from "next/image"
import classes from "./teamStacks.module.css"
import figmaIcon from "../../../public/icons/figmaIcon.svg"
import reactIcon from "../../../public/icons/reactIcon2.svg"
import cIcon from "../../../public/icons/c-icon.svg"
import nodeIcon from "../../../public/icons/nodeIcon.svg"
import atomIcon from "../../../public/icons/atomIcon.svg"
import jsIcon from "../../../public/icons/jsIcon2.svg"
import cssIcon from "../../../public/icons/cssIcon.svg"
import xdIcon from "../../../public/icons/xdIcon.svg"
import nextjsIcon from "../../../public/icons/nextjsIcon.svg"
import golongIcon from "../../../public/icons/golongIcon.svg"
import aiIcon from "../../../public/icons/aiIcon2.svg"
import expressIcon from "../../../public/icons/expressIcon.svg"
import mongodbIcon from "../../../public/icons/mongodbIcon.svg"

const stackIcons = [
    { icon: figmaIcon },
    { icon: reactIcon },
    { icon: cIcon },
    { icon: nodeIcon },
    { icon: atomIcon },
    { icon: jsIcon },
    { icon: cssIcon },
    { icon: xdIcon },
    { icon: nextjsIcon },
    { icon: golongIcon },
    { icon: aiIcon },
    { icon: expressIcon },
    { icon: mongodbIcon },
]

const { Typography } = require("@mui/material")

const TeamStacks = () => {
    return <div className={classes.teamStacksWrapper}>
    <section className={`FHD:w-[1320px] MHD:w-[1100px] HD:w-[900px] lg:w-[800px] max-lg:hidden mx-auto`}>
        <div style={{paddingBottom:"15px"}}>
        <Typography
            align="center"
            color="#FFFFFF"
            fontWeight={400}
            fontSize={24}
            lineHeight={1.8}
            variantMapping={{
                h3: 'h3'
            }}
        >
            We are currently looking to join a cross-functional team
        </Typography>
        <Typography
            align="center"
            color="#FFFFFF"
            fontWeight={400}
            fontSize={17}
            lineHeight={1.8}
            variantMapping={{
                h3: 'span'
            }}
        >
            that values improving people's lives through accessible design
        </Typography>
        </div>
        <div className={classes.stackIconsWrapper}>
            {stackIcons.map((item, index) => <div key={index} className={classes.stacksIcon}>

                <Image src={item.icon} width height alt="icon"  />
            </div>)}
        </div>
    </section>
    </div>
}
export default TeamStacks