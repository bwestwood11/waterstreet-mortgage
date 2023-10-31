import Image from "next/image";
import React from "react";

const people = [
  {
    name: "Kevin Tabares",
    role: "Broker Owner",
    imageUrl: "/Kevin.jpg",
    NMLS: "NMLS# 1994473",
    email: "ktabares@waterstreetmtg.com",
    linkedIn: "https://www.linkedin.com/in/kevin-tabares/",
    Instagram:
      "https://www.instagram.com/therealkevintabares/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==",
  },
  {
    name: "Jeffrey Tabares",
    role: "Broker Owner",
    imageUrl: "/Jeffrey.jpg",
    NMLS: "NMLS# 2105748",
    email: "jtabares@waterstreetmtg.com",
    linkedIn: "https://www.linkedin.com/in/jeffreytabares/",
    Instagram: "https://www.instagram.com/tabares28k/?hl=en",
  },
  {
    name: "Haley Tubbs",
    role: "Mortgage Broker",
    imageUrl: "/Haley.jpg",
    NMLS: "NMLS# 2082764",
    email: "ahtubbs@waterstreetmtg.com",
    linkedIn: "https://www.linkedin.com/in/amandahaleytubbs/",
    Instagram: "https://www.instagram.com/haytubbs/?hl=en",
  },
];

const Team = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-16">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our team
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Meet our dedicated Mortgage team, a dynamic group of professionals
          committed to delivering exceptional results for our clients.
        </p>
      </div>
      <ul
        role="list"
        className="mx-auto mt-20 grid max-w-2xl z-[100] grid-cols-1 gap-x-16 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        {people.map((person) => (
          <li key={person.name}>
            <Image
              className="w-full h-3/4 rounded-2xl object-cover"
              src={person.imageUrl}
              alt=""
              width={500}
              height={500}
              priority
            />
            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
              {person.name}
            </h3>
            <p className="text-base leading-7 text-gray-600">{person.role}</p>
            <ul role="list" className="mt-6 flex flex-col gap-x-6">
              <li>
                <p className="text-gray-600 tracking-wide">{person.NMLS}</p>
              </li>
              <li>
                <a href={`mailto:${person.email}`}>
                  <p className="text-gray-600 tracking-wide cursor-pointer">
                    {person.email}
                  </p>
                </a>
              </li>
              <div className="flex gap-5 mt-4 items-center">
                <li>
                  <a
                    href={person.Instagram}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Instagram</span>
                    <Image
                      src="/instagram.png"
                      alt="Instagram"
                      width={25}
                      height={25}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={person.linkedIn}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </div>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
