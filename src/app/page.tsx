import Image from "next/image";
import { AppCard } from "./components/AppCard";

export default function Home() {
   const app = await fetchAppDetails(params.appId);

   return (
      <div>
         <h1>{app.name}</h1>
         <img src={app.icon} alt={app.name} />
         <p>{app.description}</p>
         <h2>Версии</h2>
         <ul>
            {app.versions.map((version) => (
               <li key={version.version}>{version.version}</li>
            ))}
         </ul>
      </div>
   );
}
