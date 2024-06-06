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

      <div className="fixed left-10 bottom-0 ">
        <Image src={linesVector} alt="Linha estilizada" height={0} width={420}/>
      </div>

      <main className="mt-64 mx-64 text-center">
        <h1 className="font-light text-8xl text-txtDarkBtnBg">Desbloqueie o poder da <b className="font-medium">Análise do github</b></h1>

        <p className="text-txtMedium mt-8 w-[85%] mx-auto">Eleve o desenvolvimento de software com análises automáticas do GitHub, 
          revelando métricas e KPIs inestimáveis para aprimorar a entrega 
          e a qualidade do software.
        </p>

        <LoginButton />
      </main>
    </article>
    
    
  );
}
