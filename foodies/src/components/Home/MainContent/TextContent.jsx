import Section from "./SectionHomePage";

export default function TextContent() {
  return (
    <main className="md:px-32 md:py-16 px-6 py-8">
      <Section
        title="How it works"
        content={[
          "NextLevel Food is a platform for foodies to share their favorite recipes with the world.",
          "It’s a place to discover new dishes, and to connect with other food lovers.",
        ]}
      />

      <Section
        title="Why NextLevel Food?"
        content={[
          "NextLevel Food is the ultimate destination for food enthusiasts.",
          "Connect, share, and explore a world of culinary delights!",
        ]}
      />
    </main>
  );
}
