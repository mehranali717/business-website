"use client";
import { Tabs, Tab, Box } from "@mui/material";
import TabPanel from "../../components/tabsPanel";
import { useState } from "react";
import { BlockChain, Ecommerce, FeaturedProject } from "@/sections";
import allIcon from "../../../public/icons/AllIcon.svg";
import blockchainIcon from "../../../public/icons/blockchainIcon.svg";
import aiIcon from "../../../public/icons/AIIcon.svg";
import webIcon from "../../../public/icons/wdIcon.svg";
import ecommIcon from "../../../public/icons/ecommIcon.svg";
import CustomPagination from "../../components/pagination"
import "./tabs.css"
const CustomTab = (props) => {
  const { tabWrapper, tabInner } = props;
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   <div className="tabsWrapper">
     <section className="FHD:w-[1320px] MHD:w-[1100px] HD:w-[900px] lg:w-[800px] mx-auto relative">
      <Box sx={{ width: "100%" }}>
        <div className={tabWrapper}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            className={tabInner}
          >
            <Tab label="All" id="tab-0" aria-controls="tabpanel-0" icon={<img src={allIcon.src} alt="All Icon" />} />
            <Tab label="Blockchain" id="tab-1" aria-controls="tabpanel-1" icon={<img src={blockchainIcon.src} alt="Blockchain Icon" />} />
            <Tab label="AI" id="tab-2" aria-controls="tabpanel-2" icon={<img src={aiIcon.src} alt="AI Icon" />} />
            <Tab label="Web Development" id="tab-3" aria-controls="tabpanel-3" icon={<img src={webIcon.src} alt="Web Development Icon" />} />
            <Tab label="Ecommerce" id="tab-4" aria-controls="tabpanel-4" icon={<img src={ecommIcon.src} alt="Ecommerce Icon" />} />
          </Tabs>
        </div>

        <TabPanel value={value} index={0}>
          <FeaturedProject />
          <Ecommerce />
          <BlockChain />
          <CustomPagination />
        </TabPanel>
      </Box>
    </section>
   </div>
  );
};

export default CustomTab;
