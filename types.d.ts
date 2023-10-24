type Meta = {
    id: string;
    title: string;
    date: string;
    cover_image: string;
    category: string;
    description: string;
    tags: string[];
  };
  
  type BlogPost = {
      meta: Meta;
      content: ReactElement<any, string | JSXElementConstructor<any>>;
  }