import { PortfolioHero, TeamStacks } from "@/sections";
import classes from "./page.module.css"
import {CustomTab} from "@/shared"
const Portfolio = () => <>
    <PortfolioHero />
    <CustomTab tabWrapper={classes.tabWrapper} tabInner={classes.tabInner} />
    <TeamStacks />
</>
export default Portfolio