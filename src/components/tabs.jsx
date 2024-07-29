"use client";
import { Tabs, Tab, Box } from "@mui/material";
import TabPanel from "./tabsPanel";
import { useState } from "react";
import { BlockChain, Ecommerce, FeaturedProject } from "@/sections";

const CustomTab = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="FHD:w-[1320px] MHD:w-[1100px] HD:w-[900px] lg:w-[800px] max-lg:hidden mx-auto relative">
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ backgroundColor: 'red', border:'1px solid red' }}
        >
          <Tab label="All" id="tab-0" aria-controls="tabpanel-0" />
          <Tab label="Blockchain" id="tab-1" aria-controls="tabpanel-1" />
          <Tab label="AI" id="tab-2" aria-controls="tabpanel-2" />
          <Tab label="Web Development" id="tab-3" aria-controls="tabpanel-3" />
          <Tab label="Ecommerce" id="tab-4" aria-controls="tabpanel-4" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <FeaturedProject/>
          <Ecommerce/>
          <BlockChain />
        </TabPanel>
      </Box>
    </section>
  );
};

export default CustomTab;
