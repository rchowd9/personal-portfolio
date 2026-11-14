import React from "react";
import ProjectCard from "../components/ProjectCard";

const games = [
  {
    title: "Slipstream",
    description:
      "A fast-paced 1v1 HTML5 fighting game built around a high-stakes one-hit KO dash mechanic. The browser game uses a state machine for frame-dependent combat, while a .NET 8 Azure Functions API and Azure Table Storage support health checks, match results, and leaderboards.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "C# / .NET 8",
      "Azure Functions",
      "Azure Table Storage",
      "Vercel",
    ],
    featured: true,
    liveUrl: "https://slipstream-iota-five.vercel.app/",
    repoUrl: "https://github.com/rchowd9/Slipstream",
  },
  {
    title: "Pokemon Battle Simulator",
    description:
      "A turn-based battle application simulating move mechanics, stat calculations, and tactical play.",
    tech: ["React", "Node.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://pkmn-battle-simulator.vercel.app/",
    repoUrl: "https://github.com/rchowd9/pkmnBattleSimulator",
  },
  {
    title: "AI Maze Simulation",
    description:
      "An interactive maze experience that adapts hints in real time and uses behavioral analytics to improve the player journey.",
    tech: ["JavaScript", "React", "Web3", "Open AI API"],
    liveUrl: "https://toq2gn.jdoodle.io/",
    repoUrl: "https://github.com/rchowd9/AI-MazeGame",
  },
  {
    title: "Wizard101 Deck Builder",
    description:
      "A desktop application designed for Wizard101 players to construct, optimize, and simulate card draw probabilities for custom battle decks.",
    tech: ["FXML", "Java", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://w101deck-web.vercel.app/",
    repoUrl: "https://github.com/rchowd9/W101Deck",
  },
];

export default function Games() {
  return (
    <section className="projects-section">
      <div className="section-heading">
        <p className="section-kicker">Play &amp; build</p>
        <h2>Games</h2>
        <p className="section-description">
          Games and game-adjacent tools I've built, from real-time combat to
          turn-based strategy and deck optimization.
        </p>
      </div>

      <div className="projects-grid">
        {games.map((game) => (
          <ProjectCard key={game.title} {...game} />
        ))}
      </div>
    </section>
  );
}
