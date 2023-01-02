import type { NextPage } from "next"
import Head from "next/head"
import { useState } from "react"

const Home: NextPage = () => {
  const cards = [
    {
      id: 1,
      title: "The Death of the Heiress",
      front:
        "A wealthy heiress was found dead in her mansion. It's up to you to figure out how she died.",
      back: "The heiress was found dead in her bedroom, with a poisoned cocktail sitting on her nightstand. The investigation revealed that she had recently had a heated argument with her business partner, who stood to gain a significant amount of money if the heiress died. It turns out that the business partner had slipped poison into the heiress's drink during their argument, hoping to get rid of her and take over the company. The business partner was eventually arrested and charged with murder.",
    },
    {
      id: 2,
      title: "The Mysterious Disappearance",
      front:
        "A young man vanished without a trace, and it's up to you to figure out what happened.",
      back: "The young man had been out on a hike in the mountains when he vanished. His backpack and a few personal items were found at the base of a steep cliff, leading authorities to believe that he had fallen while climbing. However, further investigation revealed that the young man had been in debt to a local loan shark, and it was discovered that the loan shark had hired a hitman to stage the young man's disappearance and make it look like an accident. The hitman was eventually caught and the truth about the young man's disappearance was uncovered.",
    },
    {
      id: 3,
      title: "The Deadly Game of Poker",
      front:
        "A man was found dead at a high stakes poker game. It's up to you to figure out how he died.",
      back: "The man had been playing in a high stakes poker game with a group of shady characters. During the game, he accused one of his opponents of cheating and a heated argument ensued. It was later revealed that the accused cheat had slipped poison into the victim's drink during the argument, causing him to collapse and die at the table. The cheat was eventually arrested and charged with murder.",
    },
  ]

  interface FilteredCard {
    id: number
    title: string
    front: string
    back: string
  }

  const [filteredCard, setFilteredCard] = useState<FilteredCard>()
  const [numbersUsed, setNumbersUsed] = useState([])


  const handleCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length)
    const randomCard = cards[randomIndex]
    setFilteredCard(randomCard)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>The Enigma Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex h-24 w-full items-center justify-center">
        <h1 className="text-6xl font-bold">The Enigma Game</h1>
      </header>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {filteredCard && (
            <a className="mt-6 w-96 rounded-xl border p-6 text-left">
              <h3 className="text-2xl">{filteredCard.title}</h3>
              <div>{filteredCard.front}</div>
            </a>
          )}
        </div>

        <button
          onClick={handleCard}
          className="border-red-500 border mt-6 p-4 rounded-md text-white bg-red-500 hover:bg-red-600"
        >
          Selecionar carta
        </button>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        Soon you'll be able to donate to{" "}
        <a className="font-bold ml-1"> The Enigma Game!</a>
      </footer>
    </div>
  )
}

export default Home
