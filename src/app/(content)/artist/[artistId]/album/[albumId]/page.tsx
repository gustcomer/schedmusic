import { redirect } from "next/navigation";

export default async function ArtistAlbumDetail({
  params,
}: {
  params: Promise<{ artistId: string; albumId: string }>;
}) {
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