import { Button } from "@/components/ui/Button";

import Link from "next/link";
import React from "react";

import MobileTabs from "./MobileTabs";
import RoadMapRequests from "./MobileRequests";
import BackButton from "@/components/BackButton";

const Roadmap = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const { status = "in-progress" } = (await searchParams) as {
    status: StatusType;
  };
  return (
    <main>
      <header className="bg-[#373F68] px-6 md:px-8 py-6.5 flex items-center justify-between md:rounded-[10px]">
        <div className="flex flex-col items-center">
          <BackButton className="bg-transparent" />
          <h3 className="text-white">Roadmap</h3>
        </div>
        <Link href="/feedback/new">
          <Button variant="pink">
            {" "}
            <Link href="/feedback/new">+ Add Feedback</Link>
          </Button>
        </Link>
      </header>
      <aside className="md:hidden">
        <MobileTabs />
      </aside>
      <section className="md:hidden mt-6">
        <RoadMapRequests status={status} />
      </section>
      <section className="md:grid grid-cols-3 hidden gap-[30px] md:mt-8 lg:mt-12">
        <RoadMapRequests status="planned" />
        <RoadMapRequests status="in-progress" />
        <RoadMapRequests status="live" />
      </section>
    </main>
  );
};

export default Roadmap;
