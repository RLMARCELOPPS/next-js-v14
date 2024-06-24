import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => resolve(`Iphone - ${params.id}`), 100); //
  });
  return {
    title: `Product Detail - ${title}`,
  };
};

export default function Product({ params }: Props) {
  return <div>Product Detail {params.id}</div>;
}
