export default function ArtistDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2>Related Artists</h2>
    </>
  );
}