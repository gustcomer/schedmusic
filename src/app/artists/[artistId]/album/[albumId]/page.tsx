export default async function ArtistAlbumDetail({
  params,
}: {
  params: Promise<{ artistId: string; albumId: string }>;
}) {
  const { artistId, albumId } = await params;
  return (
    <h1>
      Album {albumId} for Artist {artistId}
    </h1>
  );
}