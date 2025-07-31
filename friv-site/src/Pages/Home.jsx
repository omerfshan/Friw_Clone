import GameCard from "../Companents/GameCard";

function Home() {
  const games = [
    {
      title: "Zeka Oyunu",
      image: "./Assets/Images/zeka.jpg",
      description: "Zekanızı zorlayacak harika bir oyun!"
    },
    {
      title: "Araba Yarışı",
      image: "./Assets/Images/zeka.jpg",
      description: "Hız tutkunları için nefes kesici yarış!"
    },
    {
      title: "Balon Patlatma",
      image: "./Assets/images/zeka.jpg",
      description: "Renkli balonları patlatarak puan topla!"
    },
    {
      title: "Zeka Oyunu",
      image: "./Assets/Images/zeka.jpg",
      description: "Zekanızı zorlayacak harika bir oyun!"
    },
    {
      title: "Araba Yarışı",
      image: "./Assets/Images/zeka.jpg",
      description: "Hız tutkunları için nefes kesici yarış!"
    },
    {
      title: "Balon Patlatma",
      image: "./Assets/images/zeka.jpg",
      description: "Renkli balonları patlatarak puan topla!"
    }
  ];

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {games.map((game, index) => (
        <div className="col" key={index}>
          <GameCard
            title={game.title}
            image={game.image}
            description={game.description}
          />
        </div>
      ))}
    </div>
  );
}

export default Home;
