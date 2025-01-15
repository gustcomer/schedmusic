import { notFound } from "next/navigation";

export default async function ArtistAlbumDetail({
  params,
}: {
  params: Promise<{ artistId: string; albumId: string }>;
}) {
  const { artistId, albumId } = await params;
  if (parseInt(artistId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Album {albumId} for Artist {artistId}
    </h1>
  );
}