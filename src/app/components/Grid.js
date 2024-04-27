"use client";
import Card from "@/app/components/Card";
import client from "@/app/services/apollo-client";
import { GET_SITES_STANDARD } from "@/app/graphql/getSitesStandard";
import { useEffect, useState } from "react";

export default function Grid({ activeFilter }) {
  const [sites, setSites] = useState(null); // Umbenennung von cards zu sites für Klarheit

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await client.query({
          query: GET_SITES_STANDARD,
        });
        setSites(data.siteCollection.items);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-6 pt-8 pb-24 sm:pb-32 xl:px-0">
      <div className="grid grid-cols-2 gap-[clamp(1rem,2rem,6rem)] sm:grid-cols-2 lg:grid-cols-4">
        {sites &&
          sites.map((site, index) => {
            if (activeFilter !== "All" && site.filter?.title !== activeFilter) {
              return null;
            }
            return (
              <Card
                key={index}
                image={site.image?.url} // Stelle sicher, dass die Felder korrekt abgefragt werden
                title={site.title}
                link={`/${site.slug}`} // Verwende den tatsächlichen slug der Site für den Link
                filter={site.filter?.title}
              />
            );
          })}
      </div>
    </div>
  );
}
