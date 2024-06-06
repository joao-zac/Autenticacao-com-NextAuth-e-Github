import Image from "next/image"
import Menu from "../Components/Menu"

import Avatar from "../../../public/Avatar.svg"
import DetailImage from "../../../public/Detail Image.svg"

export default function Log() {
    return(
        <main>
            <header className="flex items-center justify-center flex-col">
                <Image src={Avatar} alt="Avatar do usuario" className="mt-14"/>
                <h1 className="text-6xl pt-4 text-txtDarkBtnBg">Boas vindas, <b>Fulano de Tal</b></h1>
                <p className="text-3xl text-txtMedium pt-8">Que tal analisarmos seu GitHub?</p>
            </header>

            <section className="ml-36 mt-20  w-2/5 divide-y border-y">
                <Menu title="Meus Repositórios" quant={5} />
                <Menu title="Meus Gists" quant={3} />
                <Menu title="Meus Seguidores" />
            </section>

            <button className="ml-36 bg-txtDarkBtnBg text-2xl text-txtLghtBg mt-8 px-16 py-3 rounded-xl">Logout</button>

            <Image src={DetailImage} alt="Image" className="fixed right-24 bottom-20"/>
        </main>
    )
}