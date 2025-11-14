
// Cores do projeto:
// #58F7BC
// #A48AF4
// #F3D74C
// #CEF855
// Fonte: Noto Sans
function Home() {

    return (

        /* Container */
        <div
            
            className="bg-1 flex justify-center"
        >
            {/* Grid que divide a tela em duas colunas */}
            <div
                className="container grid grid-cols-2 text-slate-900"
            >
                {/* Coluna da Esquerda */}
                <div
                    className="flex flex-col gap-4 items-center justify-center py-4"
                >
                    <h2
                        className="text-5xl font-bold"
                    >Seja Bem Vindo!</h2>
                    <p
                       className="text-xl"
                    >Expresse aqui seus pensamentos e opniões</p>
                    
                    {/* Link/Botão */}
                    <div
                       className="flex justify-around gap-4"
                    >
                        <div
                            className="rounded text-slate-900 border-[2px] border-slate-900 font-bold border-solid py-2 px-4 hover:text-white hover:bg-slate-900"
                        >Nova Postagem</div>
                    </div>
                </div>

                {/* Coluna da Direita */}
                <div
                    className="flex justify-center"
                >
                    <img
                        src="https://ik.imagekit.io/gwm5ha4ws/imagem-blog.png?updatedAt=1762871572646"
                        alt="Imagem da Pagina Home"

                        className="w-2/3"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home