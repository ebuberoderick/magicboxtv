import Image from "next/image";
import AppLayout from "./components/layouts/appLayout";
import AppBanner from "./components/organisms/AppBanner";

export default function Home() {
  return (
    <AppLayout active="home">
      <AppBanner />
    </AppLayout>
  );
}
