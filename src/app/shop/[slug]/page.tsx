import { redirect } from "next/navigation";
import RawMakhanaProductPage from "../raw-makhana/page";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductSlugPage({ params }: Props) {
  const { slug } = await params;

  if (slug === "raw-makhana" || slug === "raw-phool-makhana") {
    return <RawMakhanaProductPage />;
  }

  redirect("/shop/raw-makhana");
}
