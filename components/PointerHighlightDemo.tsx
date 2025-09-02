import React from "react";
import { PointerHighlight } from "./ui/pointer-highlight";

export default function PointerHighlightDemo() {
  return (
    <div className="container">
      <div className="mx-auto max-w-xl py-20 text-2xl font-bold tracking-tight md:text-4xl">
        Tools designed to help you grow,
        <PointerHighlight>
          <span>not just apply.</span>
        </PointerHighlight>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 py-4 sm:grid-cols-3">
        <div className="rounded-md p-6">
          <div className="h-40 w-full rounded-lg bg-linear-to-r from-blue-200 to-sky-200" />
          <div className="mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
            Craft a job-ready{" "}
            <PointerHighlight
              rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 leading-loose"
              pointerClassName="text-yellow-500 h-3 w-3"
              containerClassName="inline-block mr-1"
            >
              <span className="relative z-10"> resume </span>
            </PointerHighlight>
            in minutes
          </div>
          <p className="mt-4 text-sm text-neutral-500">
            AI-assisted content suggestions based on your skills, experience,
            and target roles.
          </p>
        </div>
        <div className="rounded-md p-6">
          <div className="h-40 w-full rounded-lg bg-linear-to-r from-blue-200 to-purple-200" />
          <div className="mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
            <PointerHighlight
              rectangleClassName="bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 leading-loose"
              pointerClassName="text-blue-500 h-3 w-3"
              containerClassName="inline-block mx-1"
            >
              <span className="relative z-10">Cover</span>
            </PointerHighlight>
            Letter Generator
          </div>
          <p className="mt-4 text-sm text-neutral-500">
            Instantly generate personalized cover letters that match your resume
            and speak directly to the job.
          </p>
        </div>

        <div className="rounded-md p-6">
          <div className="h-40 w-full rounded-lg bg-linear-45 from-green-200 to-yellow-200" />
          <div className="mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
            Prepare with confidence using
            <PointerHighlight
              rectangleClassName="bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700 leading-loose"
              pointerClassName="text-green-500 h-3 w-3"
              containerClassName="inline-block ml-1"
            >
              <span className="relative z-10">AI-generated questions</span>
            </PointerHighlight>
          </div>
          <p className="mt-4 text-sm text-neutral-500">
            Realistic, role-specific practice that helps you speak with clarity
            and calm.
          </p>
        </div>
      </div>
    </div>
  );
}
