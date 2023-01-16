
export default function Navbar(){

    return (
        <header className="bg-fundomenu fixed top-0 w-full">
            <nav className="flex justify-around">
                <img></img>
                <div className="flex">
                    <a href="#sobre" className="p-5 font-semibold text-textos cursor-pointer hover:bg-botao hover:text-white duration-200">Sobre</a>
                    <a href="#skills" className="p-5 font-semibold text-textos cursor-pointer hover:bg-botao hover:text-white duration-200">Skills</a>
                    <a href="#projetos" className="p-5 font-semibold text-textos cursor-pointer hover:bg-botao hover:text-white duration-200">Projetos</a>
                    <a href="#contato" className="p-5 font-semibold text-textos cursor-pointer hover:bg-botao hover:text-white duration-200">Contato</a>
                </div>
            </nav>
        </header>
    )
}