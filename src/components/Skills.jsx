import { Icon } from '@iconify/react';

export default function Skills(){
    return (
        <article id="skills" className="flex flex-col mt-20">
            <h2 className="text-xl text-center">Minhas Skills</h2>
                <section className="w-full py-10">
                    <h3 className='text-center'>Hard Skills</h3>
                    <div className='flex flex-row w-full'>
                        <div className='w-[50%] flex items-center justify-center'>
                            <ul className='flex flex-col bg-white p-6 w-2/5 bg-mola bg-left bg-repeat-y'>
                                <li className='flex items-center justify-between text-lg font-semibold text-textos border-b border-b-titulo py-1'><Icon width='30' icon="tabler:brand-nextjs"/>NextJS</li>
                                <li className='flex items-center justify-between text-lg font-semibold text-textos border-b border-b-titulo py-1'><Icon width='30' icon="ri:reactjs-fill"/>ReactJS</li>
                                <li className='flex items-center justify-between text-lg font-semibold text-textos border-b border-b-titulo py-1'><Icon width='30' icon="mdi:nodejs"/>Node.js</li>
                                <li className='flex items-center justify-between text-lg font-semibold text-textos border-b border-b-titulo py-1'><Icon width="30" icon="tabler:brand-typescript" />Typescript</li>
                                <li className='flex items-center justify-between text-lg font-semibold text-textos border-b border-b-titulo py-1'><Icon width='30' icon="mdi:tailwind"/>Tailwind CSS</li>
                                <li className='flex items-center justify-between text-lg font-semibold text-textos border-b border-b-titulo py-1'><Icon width='30' icon="simple-icons:chakraui"/>Chakra UI</li>
                                <li className='flex items-center justify-between text-lg font-semibold text-textos border-b border-b-titulo py-1'><Icon width='30' icon="tabler:brand-mysql"/>MySQL</li>
                                <li className='flex items-center justify-between text-lg font-semibold text-textos border-b border-b-titulo py-1'><Icon width='30' icon="uil:html5-alt"/>HTML</li>
                                <li className='flex items-center justify-between text-lg font-semibold text-textos border-b border-b-titulo py-1'><Icon width='30' icon="iconoir:css3"/>CSS</li>
                                <li className='flex items-center justify-between text-lg font-semibold text-textos border-b border-b-titulo py-1'><Icon width="30" icon="mdi:aws"/>AWS</li>
                                <li className='flex items-center justify-between text-lg font-semibold text-textos border-b border-b-titulo py-1'><Icon width="30" icon="ph:git-branch-bold"/>GIT</li>
                            </ul>
                        </div>
                        <div className='w-[50%] flex items-center justify-center bg-cupcake bg-repeat'>
                        </div>
                    </div>
                </section>
                <section className="w-full py-10">
                    <h3 className='text-center'>Soft Skills</h3>
                    <div className='flex flex-row w-full'>
                        <div className='w-[50%] flex items-center justify-center bg-bolo bg-repeat-space'></div>
                        <div className='w-[50%] flex items-center justify-center'>
                            <ul className='flex flex-col bg-white p-6 w-2/5 list-disc bg-mola bg-left bg-repeat-y'>
                                <li className='flex items-center text-lg font-semibold text-textos border-b border-b-titulo py-1'>Comunicação</li>
                                <li className='flex items-center text-lg font-semibold text-textos border-b border-b-titulo py-1'>Escrita</li>
                                <li className='flex items-center text-lg font-semibold text-textos border-b border-b-titulo py-1'>Relacionamento interpessoal</li>
                                <li className='flex items-center text-lg font-semibold text-textos border-b border-b-titulo py-1'>Trabalho em equipe</li>
                                <li className='flex items-center text-lg font-semibold text-textos border-b border-b-titulo py-1'>Flexibilidade</li>
                                <li className='flex items-center text-lg font-semibold text-textos border-b border-b-titulo py-1'>Organização</li>
                                <li className='flex items-center text-lg font-semibold text-textos border-b border-b-titulo py-1'>Proatividade</li>
                                <li className='flex items-center text-lg font-semibold text-textos border-b border-b-titulo py-1'>Influência</li>
                            </ul>
                        </div>
                    </div>
                </section>
        </article>
    )
}