import React from 'react';

import Images from './Images';
import One from '../assets/images/ImageOne.jpg';
import Two from '../assets/images/ImageTwo.jpg';
import Three from '../assets/images/ImageThree.jpg';
import Four from '../assets/images/ImageFour.jpg';
import Five from '../assets/images/ImageFive.jpg';

import Legends from './Legends';

export default function table() {
  return (
    <div>
      <section>
        <Images bookImages={One} />
        <Legends
          legends="Um Estudo em Vermelho é a primeira história de Sherlock Holmes e o primeiro livro
                publicado por Sir Arthur Conan Doyle (1859-1930). Um estudo em vermelho propõe um
                enigma terrível e invencível para a polícia, que pede auxílio a Holmes: um homem
                é encontrado morto, sem ferimentos e cercado de manchas de sangue."
        />
      </section>
      <section>
        <Images bookImages={Two} />
        <Legends
          legends="Harry Potter e o Enigma do Príncipe dá continuidade à saga do jovem bruxo
                Harry Potter a partir do ponto onde o livro anterior parou, o momento em que
                fica provado que o poder de Voldemort e dos Comensais da Morte cresce mais a cada dia,
                em meio à batalha entre o bem e o mal."
        />
      </section>
      <section>
        <Images bookImages={Three} />
        <Legends
          legends="Madrid, anos 1950. Alicia Gris é uma alma nascida das sombras da guerra, que lhe tirou os
                pais e lhe deu em troca uma vida de dor crônica. Investigadora talentosa, é a ela que a
                polícia recorre quando o ilustre ministro Mauricio Valls desaparece; um mistério que os
                meios oficiais falharam em solucionar. Em Barcelona, Daniel Sempere não consegue escapar
                dos enigmas envolvendo a morte de sua mãe, Isabella."
        />
      </section>
      <section>
        <Images bookImages={Four} />
        <Legends
          legends="Esta é uma história maravilhosa de viagem no tempo, aventura e riquezas, na qual
                um menino de 12 anos, Nicholas McIver, se expõe para se tornar o herói da própria
                vida. Nesta impressionante aventura, Nick tem de enfrentar inimigos cruéis em dois
                séculos diferentes, em terra e no mar, para derrotar aqueles determinados a destruir seu lar e sua família."
        />
      </section>
      <section>
        <Images bookImages={Five} />
        <Legends
          legends="De Onde Viemos? Para Onde Vamos? Robert Langdon, o famoso professor de Simbologia de
                Harvard, chega ao ultramoderno Museu Guggenheim de Bilbao para assistir a uma
                apresentação sobre uma grande descoberta que promete mudar para sempre o papel da
                ciência."
        />
      </section>
    </div>
  );
}
