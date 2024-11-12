import Layout from "./AppLayout";
import Checklist from "./Checklist/Checklist";
import NotepadCards from "./NoteCards";

export default function Home() {
  return (
    <Layout>
      <Checklist />
      <NotepadCards />
    </Layout>
  );
}
