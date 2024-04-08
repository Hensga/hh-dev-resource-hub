"use client";
import React, { useEffect, useState } from "react";
import client from "@/app/services/apollo-client";
import { GET_TOTAL } from "@/app/graphql/getCards";

export default function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const totalEntries = async () => {
      try {
        const { data } = await client.query({
          query: GET_TOTAL,
        });
        setData(data.siteCollection.items);
      } catch (error) {
        console.error(error);
      }
    };
    totalEntries();
  }, []);

  return (
    <div>
      <div>
        {data
          ? data.map((item, index) => <p key={index}>{item.title}</p>)
          : "Loading..."}
      </div>
    </div>
  );
}
