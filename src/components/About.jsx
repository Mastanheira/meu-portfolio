import Image from "next/image";

export default function About(){
    return (
        <article id="sobre" className="flex flex-row justify-center pt-10 mt-[64px]">
            <figure className="h-full">
                <img className="rounded-full w-1/2 mx-auto" src='../images/profile.jpg' />
            </figure>
            <p className="px-10 w-2/4 text-textos text-xl align-center">Meu nome é Matheus Castanheira. Atuo como desenvolvedor desde maio de 2022, mas já estudo e tenho interese sobre a área desde o ensino
                médio, o qual me formei técnico em informática. Sou, além disso, estudante do curso de sistemas de informação na UFRRJ.
                <br/>
                Apesar de trabalhar como full-stack, minha maior paixão é o front-end, e busco ser referência profissional nessa stack.
            </p>
        </article>
    )
}