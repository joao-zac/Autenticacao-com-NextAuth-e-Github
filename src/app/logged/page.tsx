import Image from "next/image"
import Menu from "../Components/Menu"

import DetailImage from "../../../public/Detail Image.svg"
import LogoutButton from "../Components/LogoutButton"
import { getServerSession } from "next-auth"
import { authOptions } from "../lib/auth"
import { redirect } from "next/navigation"

export default async function Log() {

    const session = await getServerSession(authOptions)

    console.log(session)

    if(!session) {
        return redirect('/')
    }

    const user = session.user

    const repoCount = session.user.githubProfile.public_repos +
    (session.user.githubProfile.total_private_repos ?? 0)
    const repoURL = session.user.githubProfile.repos_url

    const gistCount = session.user.githubProfile.public_gists +
    (session.user.githubProfile.private_gists ?? 0)
    const gistURL = `https://api.github.com/users/${session.user.githubProfile.login}/gists`

    const followers = session.user.githubProfile.followers
    const followersURL = session.user.githubProfile.followers_url

    return(
        <main>
            <header className="flex items-center justify-center flex-col">
                <Image src={user?.image ?? ''} alt="Avatar do usuario" width={100} height={100} className="rounded-full mt-14"/>
                <h1 className="text-6xl pt-4 text-txtDarkBtnBg">Boas vindas, <b>{user?.name}</b></h1>
                <p className="text-3xl text-txtMedium pt-8">Que tal analisarmos seu GitHub?</p>
            </header>

            <section className="ml-36 mt-20  w-2/5 divide-y border-y">
                <Menu URL={repoURL} title="Meus Repositórios" quant={repoCount} />
                <Menu URL={gistURL} title="Meus Gists" quant={gistCount} />
                <Menu URL={followersURL} title="Meus Seguidores" quant={followers} />
            </section>

            <LogoutButton />

            <Image src={DetailImage} alt="Image" className="fixed right-24 bottom-20"/>
        </main>
    )
}