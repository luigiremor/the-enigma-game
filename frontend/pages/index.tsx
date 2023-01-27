import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import DropdownMenu from "../components/DropdownMenu";
import { Fragment, useState } from "react";
import { LanguageContext } from "../contexts/context";

const Home: NextPage = () => {
  interface Card {
    id: number;
    path: string;
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
      path: "/images/the_death_of_the_heiress.png",
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
      path: "/images/the_deadly_game_of_poker.png",
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
      path: "/images/the_mysterious_disappearance.png",
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

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset the game?")) {
      setNumbersUsed([]);
      setFilteredCard(undefined);
    }
  };

  const [language, setLanguage] = useState<"en" | "pt">("en");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-slate-100">
      <Head>
        <title>The Enigma Game</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <meta name="title" content="The Enigma Game" />
        <meta
          name="description"
          content="The Enigma Game is a collection of short mystery stories. Each story is presented in the form of a tarot card, and the player must solve the mystery by reading the story on the back of the card."
        />
        <meta name="keywords" content="enigma, game, mystery, tarot, card" />
        <meta name="og:image" content="/images/logo.png" />
      </Head>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <header className="flex flex-col sm:flex-row h-24 w-full items-center justify-center mt-4">
          <div className="w-1/4"></div>
          <h1 className="flex justify-center items-center text-3xl md:text-4xl font-bold text-center sm:w-1/2">
            <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
          </h1>
          <div className="flex flex-col gap-3 justify-center sm:justify-end w-1/4 p-0 sm:pr-4">
            <DropdownMenu />
          </div>
        </header>

        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center m-10">
          <div className="flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
            {filteredCard ? (
              <a className="w-96 rounded-xl border mx-2 p-6 text-left min-h-[350px] bg-white shadow-2xl">
                <h3 className="text-2xl">{filteredCard.title[language]}</h3>
                <div className="flex flex-col items-center">
                  {isFront ? (
                    <Fragment>
                      <Image
                        src={filteredCard.path}
                        className="w-56 opacity-80"
                        alt={filteredCard.title[language]}
                        width={500}
                        height={500}
                      />
                      <div>{filteredCard.front[language]}</div>
                    </Fragment>
                  ) : (
                    filteredCard.back[language]
                  )}
                </div>
              </a>
            ) : (
              <div className="text-2xl font-medium">Selecione uma carta</div>
            )}
          </div>
          <div className="flex gap-4">
            {numbersUsed.length === 0 ? (
              <button
                onClick={handleCard}
                className="border-gray-500 border mt-6 p-4 rounded-md text-white bg-gray-600 hover:bg-gray-700 w-44"
              >
                Select card
              </button>
            ) : numbersUsed.length < cards.length ? (
              <Fragment>
                <button
                  onClick={handleCard}
                  className="border-gray-500 border mt-6 p-4 rounded-md text-gray-500 bg-white hover:bg-gray-100 w-44"
                >
                  Select {numbersUsed.length > 0 && "another"} card
                </button>
                <button
                  onClick={handleSide}
                  className="border-gray-500 border mt-6 p-4 rounded-md text-white bg-gray-600 hover:bg-gray-700 w-44"
                >
                  Twist card
                </button>
              </Fragment>
            ) : (
              <button
                onClick={handleReset}
                className="border-gray-500 border mt-6 p-4 rounded-md text-white bg-gray-600 hover:bg-gray-700 w-44"
              >
                Reset
              </button>
            )}
          </div>
        </main>

        <footer className="flex h-24 w-full items-center justify-center border-t">
          Soon you'll be able to donate to{" "}
          <a className="font-bold ml-1"> The Enigma Game!</a>
        </footer>
      </LanguageContext.Provider>
    </div>
  );
};

export default Home;
