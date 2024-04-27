"use client";
import React from "react";
import Image from "next/image";
import client from "@/app/services/apollo-client";
import { GET_SITES } from "@/app/graphql/getSites";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { ButtonWithIcon } from "@/app/components/ButtonWithIcon";
import { SquareArrowOutUpRight } from "lucide-react";

export default function Page() {
  const pathname = usePathname();
  const [data, setData] = useState(null);

  useEffect(() => {
    const slug = pathname.split("/").pop();

    const fetchData = async () => {
      try {
        const { data } = await client.query({
          query: GET_SITES,
          variables: { slug },
        });
        setData(data.siteCollection.items);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [pathname]);

  return (
    <>
      {(data &&
        data.map((item, index) => (
          <div key={index} className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-4">
                  <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-[100%] shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                    <Image
                      className="absolute inset-0 h-full w-full object-cover"
                      src={item.image?.url}
                      alt={item.title}
                      width={1000}
                      height={1000}
                      lazy="eager"
                      priority
                    />
                  </div>
                </div>
                <div>
                  <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                    <div className="text-base font-semibold leading-7 text-indigo-600">
                      <ul className="flex gap-4 text-xs text-gray font-mono">
                        <li className="flex items-center gap-2">
                          <div className="h-[6px] w-[6px] rounded-full bg-indigo-600"></div>
                          {item.filter.title}
                        </li>
                      </ul>
                    </div>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {item.title}
                    </h1>
                    <div className="max-w-xl">
                      <p className="mt-6">{item.description}</p>
                    </div>
                  </div>
                  <ButtonWithIcon
                    IconComponent={SquareArrowOutUpRight}
                    name="View Resource"
                    className="my-8"
                    link={item.ressource}
                  />
                </div>
              </div>
            </div>
          </div>
        ))) || (
        <div className="container mx-auto py-24 sm:py-32 text-center">
          Loading...
        </div>
      )}
    </>
  );
}
