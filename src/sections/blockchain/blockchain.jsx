import Image from "next/image"
import arcImg from "../../../public/img/arc.png"
import { Typography } from "@mui/material"
import blockchainImage from "../../../public/img/blockchain.png"
import icon1 from "../../../public/icons/icon1.svg"
import socialIcon from "../../../public/icons/socialIcon.svg"
import jsIcon from "../../../public/icons/jsIcon.svg"
import reactIcon from "../../../public/icons/reactIcon.svg"
import icon2 from "../../../public/icons/icon2.svg"
import GradientBtn from "@/components/gradient-btn"
import classes from "./blockchain.module.css"

const BlockChain = () => {
    return <>
        <div className={`flex items-center  justify-between ${classes.blockChainWrapper}`}>
            <div style={{ width: '250px' }}>
                <Typography
                    align="left"
                    color="#0E35E3"
                    fontWeight={600}
                    fontSize={20}
                    lineHeight={1.5}
                    variantMapping={{
                        h3: 'h3'
                    }}
                    sx={{ paddingBottom: '1.35px' }}
                >
                    Blockchain
                </Typography>
                <Typography
                    align="left"
                    color="#FFFFFF"
                    fontWeight={400}
                    fontSize={40}
                    lineHeight={1.1}
                    variantMapping={{
                        body1: 'p',
                    }}
                    sx={{ paddingBottom: '17px' }}
                >
                    Consortia
                </Typography>
                <Image src={arcImg} width height alt="arc" style={{ paddingBottom: '19px' }} />
                <div className="flex justify-between" style={{ width: '220px' }}>
                    <Image src={icon1} height width alt="icon" />
                    <Image src={socialIcon} height width alt="icon" />
                    <Image src={jsIcon} height width alt="icon" />
                    <Image src={reactIcon} height width alt="icon" />
                    <Image src={icon2} height width alt="icon" />
                </div>
            </div>
            <div>
                <Image src={blockchainImage} width height alt="feat image" />
            </div>
            <div style={{ width: '288px' }}>
                <Typography
                    align="left"
                    color="#FFFFFF"
                    fontWeight={400}
                    fontSize={16}
                    lineHeight={1.1}
                    variantMapping={{
                        body1: 'p',
                    }}
                    sx={{ paddingBottom: '17px' }}
                >
                    At Foundation, we are revolutionizing how people engage with information. It’s a unique platform for individuals to understand the world and contribute to the global discourse. Here, every voice matters, and every opinion helps shape a more informed and connected world.
                </Typography>
                <GradientBtn text="View Details" />
            </div>
        </div>
    </>
}
export default BlockChain