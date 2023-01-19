import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const Home: NextPage = () => {
  interface Card {
    id: number;
    title: {
      en: string;
      pt: string;
    };
    front: {
      en: string;
      pt: string;
    };
    back: {
      en: string;
      pt: string;
    };
  }

  const cards: Card[] = [
    {
      id: 1,
      title: {
        en: "The Death of the Heiress",
        pt: "A Morte da Herdeira",
      },
      front: {
        en: "A wealthy heiress was found dead in her mansion. It's up to you to figure out how she died.",
        pt: "Uma herdeira rica foi encontrada morta em sua mansão. Cabe a você descobrir como ela morreu.",
      },
      back: {
        en: "The heiress was found dead in her bedroom, with a poisoned cocktail sitting on her nightstand. The investigation revealed that she had recently had a heated argument with her business partner, who stood to gain a significant amount of money if the heiress died. It turns out that the business partner had slipped poison into the heiress's drink during their argument, hoping to get rid of her and take over the company. The business partner was eventually arrested and charged with murder.",
        pt: "A herdeira foi encontrada morta em seu quarto, com um coquetel envenenado em sua mesa de cabeceira. A investigação revelou que ela havia tido uma discussão acalorada com seu sócio de negócios, que se beneficiaria significativamente se a herdeira morresse. Descobriu-se que o sócio de negócios havia colocado veneno no copo da herdeira durante a discussão, com a esperança de se livrar dela e assumir a empresa. O sócio de negócios foi finalmente preso e acusado de assassinato.",
      },
    },
    {
      id: 2,
      title: {
        en: "The Mysterious Disappearance",
        pt: "A Desaparição Misteriosa",
      },
      front: {
        en: "A young man vanished without a trace, and it's up to you to figure out what happened.",
        pt: "Um jovem desapareceu sem deixar rastro, e cabe a você descobrir o que aconteceu.",
      },
      back: {
        en: "The young man had been out on a hike in the mountains when he vanished. His backpack and a few personal items were found at the base of a steep cliff, leading authorities to believe that he had fallen while climbing. However, further investigation revealed that the young man had been in debt to a local loan shark, and it was discovered that the loan shark had hired a hitman to stage the young man's disappearance and make it look like an accident. The hitman was eventually caught and the truth about the young man's disappearance was uncovered.",
        pt: "O jovem havia saído para uma caminhada nas montanhas quando desapareceu. Sua mochila e alguns pertences pessoais foram encontrados na base de uma encosta íngreme, levando as autoridades a acreditar que ele havia caído enquanto escalava. No entanto, uma investigação mais aprofundada revelou que o jovem estava devendo a um agiota local e descobriu-se que o agiota havia contratado um assassino para simular o desaparecimento do jovem e fazer parecer um acidente. O assassino foi eventualmente preso e a verdade sobre o desaparecimento do jovem foi descoberta.",
      },
    },
    {
      id: 3,
      title: {
        en: "The Deadly Game of Poker",
        pt: "O Jogo Mortal de Pôquer",
      },
      front: {
        en: "A man was found dead at a high stakes poker game. It's up to you to figure out how he died.",
        pt: "Um homem foi encontrado morto em um jogo de pôquer de altas apostas. Cabe a você descobrir como ele morreu.",
      },
      back: {
        en: "The man had been playing in a high stakes poker game with a group of shady characters. During the game, he accused one of his opponents of cheating and a heated argument ensued. It was later revealed that the accused cheat had slipped poison into the victim's drink during the argument, causing him to collapse and die at the table. The cheat was eventually arrested and charged with murder.",
        pt: "O homem estava jogando em um jogo de pôquer de altas apostas com um grupo de personagens suspeitos. Durante o jogo, ele acusou um de seus oponentes de trapaça e uma discussão acalorada surgiu. Mais tarde, descobriu-se que o trapaceiro acusado havia colocado veneno no copo da vítima durante a discussão, causando sua queda e morte na mesa. O trapaceiro foi eventualmente preso e acusado de assassinato.",
      },
    },
  ];

  const [filteredCard, setFilteredCard] = useState<Card>();
  const [numbersUsed, setNumbersUsed] = useState<number[]>([]);
  const [isFront, setIsFront] = useState(true);

  const [language, setLanguage] = useState<"en" | "pt">("en");

  const handleLanguageChange = (newLanguage: "en" | "pt") => {
    setLanguage(newLanguage);
  };

  const handleSide = () => {
    setIsFront(!isFront);
  };

  const handleCard = () => {
    if (numbersUsed.length < cards.length) {
      let randomIndex = Math.floor(Math.random() * cards.length);
      while (numbersUsed.includes(randomIndex)) {
        randomIndex = Math.floor(Math.random() * cards.length);
      }
      const randomCard = cards[randomIndex];
      setFilteredCard(randomCard);
      setNumbersUsed([...numbersUsed, randomIndex]);
      setIsFront(true);
    } else {
      alert("Sem novas cartas");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>The Enigma Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex flex-col sm:flex-row h-24 w-full items-center justify-center">
        <div className="w-1/4"></div>
        <h1 className="text-3xl md:text-6xl font-bold text-center sm:w-1/2">
          The Enigma Game
        </h1>
        <div className="flex gap-3 justify-center sm:justify-end w-1/4 p-0 sm:pr-4">
          <button onClick={() => handleLanguageChange("en")}>English </button>
          <button onClick={() => handleLanguageChange("pt")}>Portuguese</button>
        </div>
      </header>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center m-10">
        <div className="flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {filteredCard ? (
            <a className="w-96 rounded-xl border p-6 text-left min-h-[350px]">
              <h3 className="text-2xl">{filteredCard.title[language]}</h3>
              <div>
                {isFront
                  ? filteredCard.front[language]
                  : filteredCard.back[language]}
              </div>
            </a>
          ) : (
            <div className="text-2xl font-medium">Selecione uma carta</div>
          )}
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleCard}
            className="border-red-500 border mt-6 p-4 rounded-md text-red-500 bg-white hover:bg-red-100 w-44"
          >
            Select {numbersUsed.length > 0 && "another"} card
          </button>
          <button
            onClick={handleSide}
            className="border-red-500 border mt-6 p-4 rounded-md text-white bg-red-500 hover:bg-red-600 w-44"
          >
            Twist card
          </button>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        Soon you'll be able to donate to{" "}
        <a className="font-bold ml-1"> The Enigma Game!</a>
      </footer>
    </div>
  );
};

export default Home;
