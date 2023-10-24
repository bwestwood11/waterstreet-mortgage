import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    post: Meta
}

const ListItem = ({post}: Props) => {
 
  const { id, title, date, cover_image, category, description } = post
 console.log({ id, title, date, cover_image, category, description })

  return (
    <article
    key={id}
    className="flex flex-col items-start justify-between"
  >
    <div className="relative w-full">
      <Image
        src={cover_image}
        alt=""
        width={500}
        height={500}
        className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
      />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
    </div>
    <div className="max-w-xl">
      <div className="mt-8 flex items-center gap-x-4 text-xs">
        <time dateTime={date} className="text-gray-500">
          {post.date}
        </time>
        <Link
          href={`/posts/${id}`}
          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        >
          {title}
        </Link>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <Link href={`/posts/${id}`}>
            <span className="absolute inset-0" />
            {post.title}
          </Link>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {post.description}
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <Image
          src='/Kevin.jpg'
          width={40}
          height={40}
          alt=""
          className="h-10 w-10 rounded-full bg-gray-100"
        />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
              <span className="absolute inset-0" />
              Kevin Tabares
          </p>
          <p className="text-gray-600">Broker Owner</p>
        </div>
      </div>
    </div>
  </article>
  )
}

export default ListItem