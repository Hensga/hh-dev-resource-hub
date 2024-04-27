import Image from "next/image";
const bonus = [
  {
    id: 1,
    role: "Centralized Resource Access",
    description:
      "Enjoy immediate access to a vast array of design and developer tools, all centralized in one online hub. From the latest software and apps to inspirational websites and tutorials, find everything in one place to streamline your projects and enhance your productivity.",
  },
  {
    id: 2,
    role: "Community-Driven Contributions",
    description:
      "Join a community where every member contributes to the growth and quality of the resource collection. Submit your favorite tools and resources through a simple form, and after a quick review, watch our library grow. It’s a platform built by you, for you, fostering a sense of ownership and collaboration.",
  },
  {
    id: 3,
    role: "Effortless Search and Discovery",
    description:
      "Forget about endless Google searches and browsing through multiple websites to find the tools you need. With a few clicks, you can discover new tools and stay up-to-date with the latest trends.",
  },
];
export default function ImageWithTextAndHeading() {
  return (
    <div className="mx-auto py-24 sm:py-32 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
        <div className="w-full lg:max-w-lg lg:flex-auto">
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            Why Search Everywhere? Find All Your Design and Developer Tools in
            One Place.
          </h2>
          <p className="mt-6 text-xl leading-8 ">
            Discover a place where you can find the most important resources for
            your work in design and development, curated and organized just for
            you. I decided to start this project to help both you and me.
            I&apos;ve spent countless hours online finding cool tools and
            websites, only to lose track of them with laptop changes and browser
            profile switches. With this site, that won&apos;t happen anymore.
            Just one link to remember to have all your resources in one place.
          </p>
          <Image
            src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80"
            alt=""
            width={1344}
            height={1104}
            className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
          />
          <span className="block mt-2 ml-6 text-sm text-slate-500">
            Henning Huth
          </span>
        </div>
        <div className="w-full lg:max-w-xl lg:flex-auto">
          <ul className="-my-8 divide-y divide-gray-100">
            {bonus.map((artOf) => (
              <li key={artOf.id} className="py-8">
                <dl className="relative flex flex-wrap gap-x-3">
                  <dd className="w-full flex-none text-lg font-semibold tracking-tight ">
                    {artOf.role}
                  </dd>
                  <dt className="sr-only">Description</dt>
                  <dd className="mt-2 w-full flex-none text-base leading-7 ">
                    {artOf.description}
                  </dd>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
