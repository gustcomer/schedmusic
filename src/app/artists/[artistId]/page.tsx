export default async function ArtistDetails({
  params
}: {
  params: Promise<{ artistId: string }>;
}) {
  const artistId = (await params).artistId;
  console.log(artistId);
  return (<h1>Details about artist {artistId}</h1>);
}