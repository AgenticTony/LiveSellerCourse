import Hero from "@/components/sections/Hero";
import WhatYouLearn from "@/components/sections/WhatYouLearn";
import BootcampOverview from "@/components/sections/BootcampOverview";
import Warehouse from "@/components/sections/Warehouse";
import Included from "@/components/sections/Included";
import Pricing from "@/components/sections/Pricing";
import Dates from "@/components/sections/Dates";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatYouLearn />
      <BootcampOverview />
      <Warehouse />
      <Included />
      <Pricing />
      <Dates />
      <FinalCTA />
    </>
  );
}
