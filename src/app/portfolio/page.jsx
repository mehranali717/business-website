import { PortfolioHero, TeamStacks } from "@/sections";
import CustomTab from "../../components/tabs"
import classes from "./page.module.css"
const Portfolio = () => <>
    <PortfolioHero />
    <CustomTab tabWrapper={classes.tabWrapper} tabInner={classes.tabInner} />
    <TeamStacks />
</>
export default Portfolio