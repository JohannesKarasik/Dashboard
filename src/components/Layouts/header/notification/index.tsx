"use client";

import {
  Dropdown,
  DropdownContent,
  DropdownTrigger,
} from "@/components/ui/dropdown";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { BellIcon } from "./icons";

const notificationList = [
  {
    title: "Sarah Thompson purchased Hydrafacial",
    subTitle: "Treatment purchase • Just now",
  },
  {
    title: "Anna Müller bought Skin Revival Membership",
    subTitle: "Membership purchase • 5 minutes ago",
  },
  {
    title: "Michael Chen booked Microneedling",
    subTitle: "Treatment booking • 18 minutes ago",
  },
  {
    title: "Emma Johnson purchased Botox",
    subTitle: "Treatment purchase • 1 hour ago",
  },
  {
    title: "Sofia Martinez upgraded membership",
    subTitle: "Gold → Platinum • Today",
  },
];

// highlights name + product/treatment
function renderNotificationTitle(title: string) {
  const verbs = ["purchased", "bought", "booked", "upgraded"];
  const verb = verbs.find((v) => title.includes(v));

  if (!verb) {
    return (
      <span className="text-sm font-medium text-dark dark:text-white">
        {title}
      </span>
    );
  }

  const [namePart, rest] = title.split(` ${verb} `);

  return (
    <span className="text-sm font-medium text-dark dark:text-white">
      <span className="font-semibold text-primary">{namePart}</span>{" "}
      <span className="text-dark dark:text-white">{verb}</span>{" "}
      <span className="text-primary">{rest}</span>
    </span>
  );
}

export function Notification() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDotVisible, setIsDotVisible] = useState(true);
  const isMobile = useIsMobile();

  return (
    <Dropdown
      isOpen={isOpen}
      setIsOpen={(open) => {
        setIsOpen(open);
        if (setIsDotVisible) setIsDotVisible(false);
      }}
    >
      <DropdownTrigger
        className="grid size-12 place-items-center rounded-full border bg-gray-2 text-dark outline-none hover:text-primary focus-visible:border-primary focus-visible:text-primary dark:border-dark-4 dark:bg-dark-3 dark:text-white"
        aria-label="View Notifications"
      >
        <span className="relative">
          <BellIcon />
          {isDotVisible && (
            <span
              className={cn(
                "absolute right-0 top-0 z-1 size-2 rounded-full bg-red-light ring-2 ring-gray-2 dark:ring-dark-3",
              )}
            >
              <span className="absolute inset-0 -z-1 animate-ping rounded-full bg-red-light opacity-75" />
            </span>
          )}
        </span>
      </DropdownTrigger>

      <DropdownContent
        align={isMobile ? "end" : "center"}
        className="border border-stroke bg-white px-3.5 py-3 shadow-md dark:border-dark-3 dark:bg-gray-dark min-[350px]:min-w-[22rem]"
      >
        <div className="mb-1 flex items-center justify-between px-2 py-1.5">
          <span className="text-lg font-medium text-dark dark:text-white">
            Notifications
          </span>
          <span className="rounded-md bg-primary px-[9px] py-0.5 text-xs font-medium text-white">
            5 new
          </span>
        </div>

        <ul className="mb-3 max-h-[23rem] space-y-1.5 overflow-y-auto">
          {notificationList.map((item, index) => (
            <li key={index}>
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-2 py-2 outline-none hover:bg-gray-2 dark:hover:bg-dark-3"
              >
                {renderNotificationTitle(item.title)}

                <span className="mt-0.5 block text-sm font-medium text-dark-5 dark:text-dark-6">
                  {item.subTitle}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#"
          onClick={() => setIsOpen(false)}
          className="block rounded-lg border border-primary p-2 text-center text-sm font-medium tracking-wide text-primary transition hover:bg-blue-light-5 dark:border-dark-3 dark:text-dark-6 dark:hover:bg-dark-3"
        >
          See all notifications
        </Link>
      </DropdownContent>
    </Dropdown>
  );
}
