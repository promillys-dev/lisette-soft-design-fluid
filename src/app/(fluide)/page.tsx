import { Accueil } from "@/components/accueil";
import { chargerLctv } from "@/lib/lctv";

export default async function Page() {
  return <Accueil forme="fluide" lctv={await chargerLctv()} />;
}
