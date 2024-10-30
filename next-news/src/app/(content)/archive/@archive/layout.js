import YearsList from "@/components/Years/YearsList";

export default function ArchiveSlugLayout({ children }) {
  return (
    <>
      <YearsList />
      {children}
    </>
  );
}
