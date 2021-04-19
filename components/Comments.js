export const Comments = () => {
    return (
        <div>
            <h3 className="comments__title">¿Qué dicen de Cafecito?</h3>
            <div>
                <ul>
                    <li><figure className="figure">
                        <div className="img-div">
                            <img className="img" src="https://cafecito.app/static/images_profile/729c00c0-a7bf-11ea-8e67-77e1cb44281b.jpg" alt="" />
                        </div>
                        <div className="figure__content">
                            <blockquote>
                                <p >
                                    "Cafecito es una plataforma facilitadora: acerca, simplifica y amplifica.
                                    En lo personal, como periodista, me dio la mayor de las alegrías posibles:
                                    permitir que mis libros vuelvan a circular y que terminaran encontrando
                                    más (y nuevos) lectores."
                                </p>
                            </blockquote>
                            <figcaption >
                                <div className="figure__name">
                                    Hernan Panessi
                                </div>
                                <div className="figure__area" >
                                    Periodismo
                                </div>
                            </figcaption>
                        </div>
                    </figure></li>
                    <li><figure className="figure">
                        <div className="img-div">
                            <img className="img" src="https://cafecito.app/static/images_profile/5d7f7e10-a7bf-11ea-8e67-77e1cb44281b.jpg" alt="" />
                        </div>
                        <div className="figure__content" >
                            <blockquote>
                                <p >
                                    "Cafecito permite sustentar tus proyectos de una manera intuitivamente
                                    sencilla: Tendiendo un puente retórico entre invitar a alguien a tomar
                                    algo en forma de agradecimiento y una aplicación digital. Parece difícil
                                    que algo analógico tenga resonancia en lo digital, pero Cafecito lo logra."
                                </p>
                            </blockquote>
                            <figcaption >
                                <div className="figure__name">
                                    Bauhasaurus
                                </div>
                                <div className="figure__area" >
                                    Arquitectura
                                </div>
                            </figcaption>
                        </div>
                    </figure></li>
                    <li><figure className="figure">
                        <div className="img-div">
                            <img className="img" src="https://cdn.cafecito.app/images_profile/aed4fea0-aea6-11ea-a551-25c0967a22e9.jpg" alt="" />

                        </div>
                        <div className="figure__content">
                            <blockquote>
                                <p >
                                    "Cafecito es una plataforma que ayuda mucho a los emprendedores
                                    y creadores de contenido. Yo lo encontré como una forma de conectarme
                                    con mis seguidores donde ellos pueden ayudarme a seguir creando con
                                    su aporte y mejorar mí espacio de trabajo."
                                </p>
                            </blockquote>
                            <figcaption >
                                <div className="figure__name">
                                    Nillusart
                                </div>
                                <div className="figure__area" >
                                    Arte
                                </div>
                            </figcaption>
                        </div>
                    </figure></li>
                </ul>
            </div>
            <style jsx>
                {`
                .comments__title {
                    padding-top: 6rem;
                    font-family: "Recoleta Bold";
                    text-align: center;
                    font-size: 1.875rem;
                    line-height: 2.25rem;
                    font-weight: 800;
                }
                ul {
                    display:flex;
                    list-style-type: none;
                }
                li {
                    flex: auto;
                    padding: 0 ;
                }
                figure {
                    margin: 3rem 0.5rem; 
                    border-radius: 0.75rem;
                    padding: 1rem 0.25rem ;
                    --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
                }
                .img-div {
                    display:flex;
                    justify-content:center;
                }
                .img {
                    width: 4rem;
                    height: 4rem;
                    border-radius: 9999px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .figure__content {
                    padding-top: 1.5rem;
                    text-align: center;
                }
                figcaption {
                    font-weight: 500;
                }
                .figure__name {
                    --tw-text-opacity: 1;
                    color: #b67801;
                }
                .figure__area {
                    --tw-text-opacity: 1;
                    color: rgba(107, 114, 128, var(--tw-text-opacity));
                }
                p {
                    font-size: 0.9rem;
                }
                @media (max-width: 768px) {
                    ul {
                        margin: 0;
                        list-style: none;
                        padding: 30px 0 45px;
                        display: flex;
                        flex-wrap: nowrap;
                        overflow-x: scroll;
                    }
                    li {
                        flex: 0 0 auto;
                        box-sizing: border-box;
                        width:100%;
                    }
                }
                `}
            </style>
        </div>
    )
}