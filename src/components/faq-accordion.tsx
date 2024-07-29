import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

export default function FaqAccordion() {
  const FAQs = [
    {
      question:
        "Q1: What exactly does FlexLab offer to businesses struggling with software development?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laborum exercitationem amet est nam maiores eius? Minus ex officiis, tenetur esse aliquid veniam! Asperiores consequuntur vitae exercitationem nulla tempore perspiciatis inventore ipsa, mollitia unde tenetur harum reprehenderit veniam dolorem excepturi laboriosam et odit commodi aliquam? Eligendi tempore corrupti, earum magnam quam facere alias iste saepe veniam illo consectetur velit suscipit laudantium fugiat consequatur omnis hic facilis nobis sunt? Enim nisi magnam maiores consequuntur eos. Neque hic doloremque aliquam provident cupiditate quis labore.",
    },
    {
      question: `Q2: How does FlexLab ensure that the software development team aligns with a client's existing company culture and workflow?`,
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laborum exercitationem amet est nam maiores eius? Minus ex officiis, tenetur esse aliquid veniam! Asperiores consequuntur vitae exercitationem nulla tempore perspiciatis inventore ipsa, mollitia unde tenetur harum reprehenderit veniam dolorem excepturi laboriosam et odit commodi aliquam? Eligendi tempore corrupti, earum magnam quam facere alias iste saepe veniam illo consectetur velit suscipit laudantium fugiat consequatur omnis hic facilis nobis sunt? Enim nisi magnam maiores consequuntur eos. Neque hic doloremque aliquam provident cupiditate quis labore.",
    },
    {
      question:
        "Q3: What makes FlexLab different from other software development outsourcing services?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laborum exercitationem amet est nam maiores eius? Minus ex officiis, tenetur esse aliquid veniam! Asperiores consequuntur vitae exercitationem nulla tempore perspiciatis inventore ipsa, mollitia unde tenetur harum reprehenderit veniam dolorem excepturi laboriosam et odit commodi aliquam? Eligendi tempore corrupti, earum magnam quam facere alias iste saepe veniam illo consectetur velit suscipit laudantium fugiat consequatur omnis hic facilis nobis sunt? Enim nisi magnam maiores consequuntur eos. Neque hic doloremque aliquam provident cupiditate quis labore.",
    },
    {
      question:
        "Q4: Can FlexLab handle rapid scaling of operations for a business experiencing fast growth?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laborum exercitationem amet est nam maiores eius? Minus ex officiis, tenetur esse aliquid veniam! Asperiores consequuntur vitae exercitationem nulla tempore perspiciatis inventore ipsa, mollitia unde tenetur harum reprehenderit veniam dolorem excepturi laboriosam et odit commodi aliquam? Eligendi tempore corrupti, earum magnam quam facere alias iste saepe veniam illo consectetur velit suscipit laudantium fugiat consequatur omnis hic facilis nobis sunt? Enim nisi magnam maiores consequuntur eos. Neque hic doloremque aliquam provident cupiditate quis labore.",
    },
    {
      question:
        "Q5: What kind of performance guarantees does FlexLab offer to ensure client satisfaction?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laborum exercitationem amet est nam maiores eius? Minus ex officiis, tenetur esse aliquid veniam! Asperiores consequuntur vitae exercitationem nulla tempore perspiciatis inventore ipsa, mollitia unde tenetur harum reprehenderit veniam dolorem excepturi laboriosam et odit commodi aliquam? Eligendi tempore corrupti, earum magnam quam facere alias iste saepe veniam illo consectetur velit suscipit laudantium fugiat consequatur omnis hic facilis nobis sunt? Enim nisi magnam maiores consequuntur eos. Neque hic doloremque aliquam provident cupiditate quis labore.",
    },
  ];

  return (
    <div className="">
      <Accordion type="single" collapsible className="space-y-4">
        {FAQs?.map((faq, index) => (
          <AccordionItem value={index.toString() + "item"} key={index + "uh"}>
            <div className="bg-[linear-gradient(126.95deg,rgba(59,90,255,0.44)_-49.52%,_rgba(71,28,245,0)71.47%)] p-[1px] rounded-[10px]">
              <AccordionTrigger className="border rounded-[8px] text-left p-4 max-md:text-sm text-base flex items-center h-full ">
                {faq.question}
              </AccordionTrigger>
            </div>
            <AccordionContent className="p-4 text-base text-[#BCB9B4]">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
