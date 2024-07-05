import Link from "next/link"
import Image from "next/image"

import Arrow from "../../../public/circle-arrow-up-right-filled.svg"

type Props = {
    title: string
    quant: number
    URL: string
}

export default function Menu(props: Props) {

    return (
        <Link href={props.URL} className="
        flex text-xl justify-between py-8
        ">
            <p className="pl-2">{props.title}({props.quant})</p>
            <Image src={Arrow} alt="Seta" />
        </Link>
    )
    
}