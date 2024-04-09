"use client";
import Card from "@/app/components/Card";
import client from "@/app/services/apollo-client";
import { GET_CARDS } from "@/app/graphql/getCards";
import { useEffect, useState } from "react";

export default function Grid() {
  const [cards, setCards] = useState(null);
  const [sites, setSites] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await client.query({
          query: GET_CARDS,
        });
        setCards(data.cardCollection.items);
        setSites(data.siteCollection.items);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  

  return (
    <div className="container mx-auto px-6 py-24 sm:py-32 lg:px-0">
      <div className="grid grid-cols-1 gap-[clamp(1rem,2rem,6rem)] sm:grid-cols-2 lg:grid-cols-4">
        {cards && sites && cards.map((cardData, index) => {
          const slug = sites[index]?.slug;
          return (
            <Card
              key={index}
              image={cardData.cardImage.url}
              title={cardData.cardTitle}
              link={`/${slug}`}
            />
          );
        }) || "Loading..."}
      </div>
    </div>
  );
}
