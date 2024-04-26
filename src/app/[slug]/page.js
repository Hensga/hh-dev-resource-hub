"use client";
import React from "react";
import client from "@/app/services/apollo-client";
import { GET_SITES } from "@/app/graphql/getSites";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  const [data, setData] = useState(null);

  useEffect(() => {
    const slug = pathname.split("/").pop();
    console.log("Extracted Slug:", slug);

    const fetchData = async () => {
      try {
        const { data } = await client.query({
          query: GET_SITES,
          variables: { slug },
        });
        console.log("Data from GraphQL:", data);
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
                    <img
                      className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                      src="https://images.unsplash.com/photo-1630569267625-157f8f9d1a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                    <p className="text-base font-semibold leading-7 text-indigo-600">
                      Hier sollte die Kategorie stehen
                    </p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {item.title}
                    </h1>
                    <div className="max-w-xl">
                      <p className="mt-6">
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed
                        eget risus enim. Mattis mauris semper sed amet vitae sed
                        turpis id. Id dolor praesent donec est. Odio penatibus
                        risus viverra tellus varius sit neque erat velit.
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed
                        eget risus enim. Mattis mauris semper sed amet vitae sed
                        turpis id.
                      </p>
                      <p className="mt-8">
                        Et vitae blandit facilisi magna lacus commodo. Vitae
                        sapien duis odio id et. Id blandit molestie auctor
                        fermentum dignissim. Lacus diam tincidunt ac cursus in
                        vel. Mauris varius vulputate et ultrices hac adipiscing
                        egestas. Iaculis convallis ac tempor et ut. Ac lorem vel
                        integer orci.
                      </p>
                      <p className="mt-8">
                        Et vitae blandit facilisi magna lacus commodo. Vitae
                        sapien duis odio id et. Id blandit molestie auctor
                        fermentum dignissim. Lacus diam tincidunt ac cursus in
                        vel. Mauris varius vulputate et ultrices hac adipiscing
                        egestas. Iaculis convallis ac tempor et ut. Ac lorem vel
                        integer orci.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))) || (
        <div className="container mx-auto py-24 sm:py-32">Loading...</div>
      )}
    </>
  );
}
