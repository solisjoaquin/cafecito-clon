export const HowItWorks = () => {
    return (
        <div className="content">
            <h3 className="content__title">¿Cómo funciona Cafecito?</h3>
            <div className="content__group">
                <div>
                    <img className="content__img" src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80" alt="" />

                </div>

                <section className="section">
                    <article className="section__acticle">
                        <div >
                            <div className="content__svg-div">
                                <svg xmlns="http://www.w3.org/2000/svg" className="svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </div>
                        </div>

                        <div>
                            <h4 className="article__title">Creá tu cuenta</h4>
                            <p className="article__p">Solo te llevará 60 segundos personalizar tu perfil y comenzar a compartir lo que hacés.</p>
                        </div>

                    </article>
                    <article className="section__acticle">
                        <div>
                            <div className="content__svg-div">
                                <svg xmlns="http://www.w3.org/2000/svg" className="svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h4 className="article__title">
                                Creá contenido
                        </h4>
                            <p className="article__p">
                                Contale a tu comunidad sobre Cafecito y tus objetivos, publicalo en redes sociales así más personas podrán ver tu perfil.
                        </p>
                        </div>

                    </article>
                </section>
            </div>
            <style jsx>
                {`
                .content__title {
                    
                    font-family: "Recoleta Bold";
                    text-align: center;
                    font-size: 1.875rem;
                    line-height: 2.25rem;
                    font-weight: 800;
                }
                .content__group {
                    width: 1000px;
                    display: flex;
                    margin: 0 auto;
                    padding-top: 3rem; 
                }
                .content__img {
                    width: 100%;
                    box-sizing: border-box;
                    --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
                }
                .section {
                    padding: 0 0.75rem;
                }
                .section__acticle {
                    display:flex;
                }
                .content__svg-div {
                    display:flex;
                    align-items: center;
                    justify-content: center;
                    height: 3rem;
                    width: 3rem;
                    border-radius: 0.375rem;
                    background: black;
                    margin: 1rem;
                }

                .svg {
                    width: 1.5rem;
                    heigth: 1.5rem;
                    color: white;
                }
                .article__title {
                    margin: 0.5rem 0;
                    font-size: 1rem;
                    line-height: 2rem;
                }
                .article__p {
                    margin-top: 0.25rem;
                }
                @media (max-width: 768px) {
                    .content__group {
                        padding-top: 1rem;
                        width: 100%;
                        flex-direction: column;
                    }
                    .section {
                        padding-top: 2rem;
                    }
                    
                }
                `}
            </style>
        </div>
    )
}