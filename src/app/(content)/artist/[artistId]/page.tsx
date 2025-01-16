import {Metadata} from "next";

type Props = {
  params: Promise<{ artistId: string }>;
};

export const generateMetadata = async ({
  params
}: Props): Promise<Metadata> => {
  const id = (await params).artistId;
  return {
    title: `Artist ${id}`,
  }
}

export default async function ArtistDetails({
  params
}: Props
) {
  const artistId = (await params).artistId;
  console.log(artistId);
  return (<h1>Details about artist {artistId}</h1>);
}