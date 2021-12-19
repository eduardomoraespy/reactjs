import React from 'react';
import '../App.css'

export default function Login(){

    //
    const info_btn = document.getElementsByClassName("info-btn")
    for (let i = 0; i < info_btn.length; i++) {
        info_btn[i].onclick = () => {
            document.querySelector(".container").classList.toggle("log-in");
        };
    }
            

    return (
        <body>
            <div className="container">
                <div className="container-forms">
                    <div className="container-info">
                        <div className="info-item">
                            <div className="table">
                                <div className="table-cell">
                                    <p>
                                        Possui uma conta?
                                    </p>
                                    <button className="info-btn">
                                        Entrar
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="table">
                                <div className="table-cell">
                                    <p>
                                    Não tem conta?
                                    </p>
                                    <button className="info-btn">
                                        Criar conta
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-form">
                        <div className="form-item log-in">
                            <div className="table">
                                <div className="table-cell">
                                    <input name="Username" placeholder="Usuário" type="text" autoComplete='off' />
                                    <input name="Password" placeholder="Senha" type="Password" />
                                    <button className="btn">
                                        Entrar
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="form-item sign-up">
                            <div className="table">
                                <div className="table-cell">
                                    <input name="email" placeholder="Email" type="text" autoComplete='off' />
                                    <input name="fullName" placeholder="Nome Completo" type="text" autoComplete='off' />
                                    <input name="Username" placeholder="Usuário" type="text" autoComplete='off' />
                                    <input name="Password" placeholder="Senha" type="Password" />
                                    <button className="btn">
                                        Criar conta
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}