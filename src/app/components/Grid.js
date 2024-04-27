"use client";
import Card from "@/app/components/Card";
import client from "@/app/services/apollo-client";
import { GET_CARDS } from "@/app/graphql/getCards";
import { useEffect, useState } from "react";

export default function Grid({ activeFilter }) {
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
    <div className="container mx-auto px-6 pt-8 pb-24 sm:pb-32 xl:px-0">
      <div className="grid grid-cols-1 gap-[clamp(1rem,2rem,6rem)] sm:grid-cols-2 lg:grid-cols-4">
        {cards &&
          cards.map((card, index) => {
            const slug = sites[index]?.slug;
            if (activeFilter !== "All" && card.filter?.title !== activeFilter) {
              return null;
            }
            return (
              <Card
                key={index}
                image={card.cardImage.url}
                title={card.cardTitle}
                link={`/${slug}`}
              />
            );
          })}
      </div>
    </div>
  );
}
