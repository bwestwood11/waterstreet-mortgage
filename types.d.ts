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


  type HomeBuyer = {
    propertyType: String;
    intendedUse: String;
    purchasePrice: String;
    downPayment: String;
    military: String;
    firstTimeBuyer: String;
    creditScore: String;
    name: String;
    email: String;
    phone: String;
  }

  type RefinanceProspect = {
    propertyType: String;
    intendedUse: String;
    refinanceReason: String;
    currentProgram: String;
    military: String;
    creditScore: String;
    name: String;
    email: String;
    phone: String;
  }