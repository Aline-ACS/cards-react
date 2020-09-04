import React from 'react';
import '../Style.css';

import BookOne from '../imageCard/BookOne';
import BookTwo from '../imageCard/BookTwo';
import BookThree from '../imageCard/BookThree';
import BookFour from '../imageCard/BookFour';
import BookFive from '../imageCard/BookFive';



export default function table(){
    return(
       <div className="containerTable">
            <table>

                <thead>
                    <th className="cabecalho"> Acesse! </th>

                    <th> 
                        <a  target="_blank" href="https://www.saraiva.com.br/sherlock-holmes-em-um-estudo-em-vermelho-409914/p">
                            <BookOne/>
                        </a>
                    </th>

                    <th> 
                        <a target="_blank" href="https://www.saraiva.com.br/harry-potter-e-o-enigma-do-principe-6-189375/p">
                            <BookTwo/>
                        </a>
                    </th>

                    <th> 
                        <a target="_blank" href="https://www.saraiva.com.br/o-labirinto-dos-espiritos-9736218/p"> 
                            <BookThree/>
                        </a>
                    </th>

                    <th> 
                        <a target="_blank" href="https://www.saraiva.com.br/nick-of-time-uma-aventura-pelo-tempo-2877792/p">
                            <BookFour/>
                        </a>
                    </th>

                    <th> 
                        <a target="_blank" href="https://www.saraiva.com.br/origem-9731880/p">
                            <BookFive/>
                        </a>
                    </th>

                </thead>

                <tbody>
                    <tr>
                        <td className="cabecalho"> Nome </td> 
                        <td className="vermelho"> Um estudo em vermelho </td> 
                        <td className="verde"> Harry Potter e o Enigma do Príncipe </td> 
                        <td className="cinza"> O labirinto dos espíritos </td>
                        <td className="gold"> Nick of Time</td> 
                        <td className="azul"> Origem </td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td className="cabecalho"> Autor </td>
                        <td className="vermelho"> Arthur Conan Doyle </td>
                        <td className="verde"> J. K. Rowling </td>
                        <td className="cinza"> Carlos Ruiz Zafón </td>
                        <td className="gold"> Ted Bell</td>
                        <td className="azul"> Dan Brown </td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td className="cabecalho"> Editora </td>
                        <td className="vermelho"> L&PM </td>
                        <td className="verde"> Rocco </td>
                        <td className="cinza"> Suma De Letras </td>
                        <td className="gold"> Novo Século - SP </td>
                        <td className="azul"> Arqueiro </td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td className="cabecalho"> Páginas </td>
                        <td className="vermelho"> 192 </td>
                        <td className="verde"> 512 </td>
                        <td className="cinza"> 784 </td>
                        <td className="gold"> 336</td>
                        <td className="azul"> 432 </td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td className="cabecalho"> Ano </td>
                        <td className="vermelho"> 1998 </td>
                        <td className="verde"> 2005 </td>
                        <td className="cinza"> 2017 </td>
                        <td className="gold"> 2010</td>
                        <td className="azul"> 2017 </td>
                    </tr>
                </tbody>

            </table>
       </div>
    );
}