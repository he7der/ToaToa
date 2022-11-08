import React from "react";
import { useForm } from "react-hook-form"
// import { Link } from "react-router-dom"
// import Header from "../template/Header";

function Post () {
    const {Register} = useForm()
    return (
        <div>
            <Header/>
            <main>
                <div className="card-post">
                    <h1>Criar Postagem</h1>
                    <div className="line-post"></div>
                    <div className="card-body-post">
                        <form>
                            <div className="fields">
                                <label>Títulos</label>
                                <input type="text" name="title" {...Register("title")} />
                            </div>

                            <div className="fields">
                                <label>Descrição</label>
                                <input type="text"  name="description" {...Register("description")}/>
                            </div>

                            <div className="fields">
                                <label>Conteúdo</label>
                                <textarea type="text"  name="content" {...Register("content")}></textarea>
                            </div>

                            <div className="btn-post">
                                <button type="submit">Entrar</button>
                            </div>

                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Post