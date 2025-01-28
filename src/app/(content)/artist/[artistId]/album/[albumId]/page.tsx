import { redirect } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count );
}

export default async function ArtistAlbumDetail({
  params,
}: {
  params: Promise<{ artistId: string; albumId: string }>;
}) {
  const random = getRandomInt(3);
  if(random === 1) {
    throw new Error("Error loading review");
  }
  const { artistId, albumId } = await params;
  if (parseInt(artistId) > 1000) {
    //notFound(); // let's just try another option with redirect
    redirect("/")
  }
  return (
    <h1>
      Album {albumId} for Artist {artistId}
    </h1>
  );
}