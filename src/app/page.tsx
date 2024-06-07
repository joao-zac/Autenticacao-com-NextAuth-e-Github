import Image from "next/image";
import LoginButton from "./Components/LoginButton";

import linesVector from "../../public/linesVector.svg"
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {

  const session = await getServerSession(authOptions)

  if(session) {
    return redirect('/logged')
  }

  return (
    <article className="w-screen h-screen flex">

      <div className="absolute left-10 bottom-0 invisible xl:visible">
        <Image src={linesVector} alt="Linha estilizada" height={0} width={420}/>
      </div>

      <main className="lg:mt-64 mt-40 flex flex-col text-center relative items-center min-w-full">
        <h1 className="font-light md:text-8xl text-5xl text-txtDarkBtnBg xl:bg-neutral-50 max-w-6xl">Desbloqueie o poder da <b className="font-medium">Análise do github</b></h1>

        <p className="text-txtMedium mt-32 lg:mt-8 w-[85%] mx-auto md:text-2xl text-xl">Eleve o desenvolvimento de software com análises automáticas do GitHub, 
          revelando métricas e KPIs inestimáveis para aprimorar a entrega 
          e a qualidade do software.
        </p>

        <LoginButton />
      </main>
    </article>
    
    
  );
}
