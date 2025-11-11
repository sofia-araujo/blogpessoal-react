
// Cores do projeto:
// #58F7BC
// #A48AF4
// #F3D74C
// #CEF855
// Fonte: Noto Sans
function Home() {
  return (
    <div
      style={{
        backgroundColor: "#58F7BC",
        display: "flex",
        justifyContent: "center",}}>
        {/* Div principal */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            color: "#000020",
            width: "100%",
            maxWidth: "1280px"
          }}>
            {/* Lado esquerdo */}
            <div 
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}>

              <h2
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
              }}
              >Seja bem Vindo!</h2>
              <p
              style={{
                fontSize: "1.25rem",
                fontWeight: "500",
              }}
              >Compartilhe aqui seu conhecimento e conselhos!</p>

              <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                gap: "1rem",
              }}>
                <div
                style={{
                  borderRadius: "0.5rem",
                  color: "#000020",
                  border: "3px solid #000020",
                  padding: "0.5rem 1rem",
                  fontWeight: "600",
                }}>
                  Nova Postagem
                </div>
              </div>
            </div>
            {/* Lado direito */}
            <div 
            style={{
              display: "flex",
              justifyContent: "center",
            }}>
                <img src="https://ik.imagekit.io/gwm5ha4ws/imagem-blog.png?updatedAt=1762871572646" 
                alt="Imagem da página Home" 
                style={{
                  width: "66%"
                }}/>
            </div>
        </div>
    </div>
  )
}

export default Home