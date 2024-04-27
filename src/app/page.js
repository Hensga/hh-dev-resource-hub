"use client";
import { useEffect, useState } from "react";
import HeroHeader from "@/app/components/HeroHeader";
import Announcement from "@/app/components/Announcement";
import Divider from "@/app/components/Divider";
import Grid from "@/app/components/Grid";
import client from "@/app/services/apollo-client";
import { GET_FILTERS } from "@/app/graphql/getFilters";
import { Filter } from "@/app/components/Filter";
import { ButtonWithIcon } from "@/app/components/ButtonWithIcon";
import { Plus } from "lucide-react";

export default function Home() {
  const [data, setData] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await client.query({
          query: GET_FILTERS,
        });
        const filterCounts = {};
        // Zählen der Vorkommen jedes Filters
        data.siteCollection.items.forEach((site) => {
          const filterTitle = site.filter?.title || "All";
          filterCounts[filterTitle] = (filterCounts[filterTitle] || 0) + 1;
        });
        const filterData = [
          { filter: { title: "All", count: data.siteCollection.items.length } },
        ];
        for (const title in filterCounts) {
          filterData.push({ filter: { title, count: filterCounts[title] } });
        }
        setData(filterData);
      } catch (error) {
        console.error("Error fetching filters:", error);
      }
    };
    fetchData();
  }, []);

  const handleFilterClick = (filterTitle) => {
    setActiveFilter(filterTitle);
  };

  return (
    <>
      <HeroHeader />
      <Announcement />
      <Divider />
      <div className="container mx-auto flex justify-center flex-wrap mt-10">
        <ul className="flex gap-2 md:gap-4 text-lg text-gray font-mono">
          {data &&
            data.map((item, index) => (
              <Filter
                key={index}
                title={item.filter?.title || ""}
                onClick={() => handleFilterClick(item.filter?.title)}
                isActive={activeFilter === item.filter?.title}
                count={item.filter?.count || 0}
              />
            ))}
        </ul>
      </div>
      <div className="container flex justify-end items-center mt-10">
        <ButtonWithIcon
          IconComponent={Plus}
          name="Add resource"
          link="/submit"
        />
      </div>
      <Grid activeFilter={activeFilter} />
    </>
  );
}
