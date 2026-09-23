// The Great Vibes script font renders some capital letters (like "A") as a
// small, subtle swash that doesn't read clearly as a capital at display
// size. This nudges just the first letter larger so the name still reads
// as properly capitalized.
export default function ScriptName({ name }: { name: string }) {
  return (
    <>
      <span style={{ fontSize: "1.65em", display: "inline-block", lineHeight: 0.7 }}>
        {name.charAt(0)}
      </span>
      {name.slice(1)}
    </>
  );
}
