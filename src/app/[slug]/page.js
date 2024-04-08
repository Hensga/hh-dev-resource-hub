"use client";
import React from 'react'
import client from "@/app/services/apollo-client";
import { GET_SITES } from '@/app/graphql/getSites';
import { useEffect, useState } from 'react';
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
          variables: { slug }
        });
        console.log("Data from GraphQL:", data);
        setData(data.siteCollection.items);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }
  , [pathname]);

  return (
    <div>
      <div>
        {data
          ? data.map((item, index) => <p key={index}>{item.title}</p>)
          : "Loading..."}
      </div>
    </div>
  )
}
