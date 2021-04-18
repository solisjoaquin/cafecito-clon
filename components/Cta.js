export const Cta = () => {
    return (
        <div>
            <main className="main">
                <div className="main__content">
                    <h1 className="main__title">Potencia tus ideas</h1>
                    <p className="main__p">Cafecito es una plataforma de crowdfunding que busca unir a creadores de contenido, ONGs o proyectos con gente que quiera aportar a lo que hacen.</p>

                    <div className="">
                        <form className="main__form">
                            <div className="main__group-input">
                                <span>
                                    cafecito.app/
                                </span>
                                <input className="main__input" type="text" />
                            </div>
                            <button className="main__button">Crear cuenta</button>
                        </form>
                    </div>
                </div>
            </main>
            <style jsx>{
                `
        .main__content {
          text-align:center;
          padding-top: 7rem;
          padding-bottom: 10rem;
          padding-left: 1.25rem;
          padding-right: 1.25rem;

        }
        .main__title {
          font-family: "Recoleta Bold";
          font-size: 3rem;
          line-height: 1;
        }
        .main__p {
          
          padding-left: 4rem;
          padding-right: 4rem;
          font-size: 1.125rem;
          line-height: 1.75rem;
        }
        .main__form {
          padding-left: 0.75rem;
          padding-right: 0.75rem;
          margin-top: 3.5rem;
          display:flex;
          justify-content: center;
        }
        .main__group-input {
          padding: 0.5rem 0.75rem;
          border-radius: 0.375rem;
          border: 1px solid black;
          background: white;
          display: flex;
          align-items: center;
        }
        .main__input {
          border:none;
          padding: 0.125rem;
          box-sizing:border-box
          font-size:1rem;
          border-radius: 0.375rem;
        }
        .main__input:focus {
          outline: none;
        }
        .main__button {
          border:1px solid black;
          background: black;
          color: white;
          padding: 0.75rem;
          font-size:1rem;
          border-radius: 0.375rem;
          margin-left: 0.5rem;
        }
        .main__button:hover {
            cursor:pointer; 
        }
        
        @media (max-width: 600px) {
        .main__group-input {
            display:flex;
            padding: 0.75rem;
            width: 100%;
        }
          .main__form {
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .main__button {
            margin-top: 0.5rem;
            width: 100%;
            margin-left: 0;
            box-sizing:border-box
        }
          .main__title {
            font-size: 2.25rem;
            line-height: 2.5rem;
          }
          .main__p {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
        }

        `
            }</style>
        </div>
    )
}