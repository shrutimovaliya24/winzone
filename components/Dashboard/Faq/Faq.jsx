import CommonTitle from "@/components/Common/CommonTitle";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import QuestionAnswer from "./Components/QuestionAnswer";
import Link from "next/link";

const Faq = () => {
  return (
    <section className="bg-[#F7F7F7]">
      <div className="section-container lg:flex grid xl:gap-16 lg:gap-12 md:gap-10 sm:gap-8 gap-6">
        <div className="lg:max-w-[438px] grid lg:gap-12 md:gap-9 sm:gap-7 gap-5 h-fit">
          <CommonTitle
            tag="FREQUENTLY ASKED QUESTIONS"
            extraTagCss="hidden"
            title="FREQUENTLY ASKED QUESTIONS"
            extraTitleCss=""
            description="Compare our features with other hosting providers and see why 60,000+ customers choose MilesWeb."
            extraDescriptionCss=""
            gridView={true}
          />
          <div className="md:p-8 sm:p-6 p-3 bg-theme-color rounded-xl ">
            <div className="grid sm:gap-4 gap-3">
              <Image
                src="/img/people-few-question.png"
                width={82}
                height={50}
                alt="People Few Question Image"
              />
              <div className="grid gap-2">
                <h4 className="font-semibold text-2xl-responsive font-titillium text-white font-titillium">
                  Have more questions?
                </h4>
                <p className="text-[#C6C6C6] lg:text-lg sm:text-base text-xs font-archivo">
                  Book a free intro call with our team.
                </p>
              </div>
              <Link
                href="/contact-us"
                className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-xl bg-white flex gap-2 sm:gap-2.5 font-semibold text-theme-color font-archivo items-center w-fit text-sm sm:text-base"
              >
                Contact Now
                <div className="p-1 bg-theme-color  rounded-full">
                  <ArrowRightIcon color="white" size="20" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <QuestionAnswer />
      </div>
    </section>
  );
};

export default Faq;
