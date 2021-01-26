const users = [
  {
    id: 1,
    name: "Neo",
    about:
      "During the years prior to the events of The Matrix, Neo has spent his time trying to find the one man who he thought could tell him what the Matrix was: a supposed terrorist known only as Morpheus. After an encounter with another hacker, Trinity, Anderson is suddenly contacted by Morpheus via a cell phone mailed to his office, but is almost immediately captured by the virtual reality's Agents, led by Agent Smith."
  },
  {
    id: 2,
    name: "Morpheus",
    about:
      "In the Matrix films, Morpheus is the captain of the Nebuchadnezzar, which is a hovercraft of the human forces of the last human city, Zion, in a devastated world where most humans are grown by sentient machines and kept imprisoned in the Matrix, a virtual computer-generated world. Morpheus was once a human living inside the Matrix until he was freed."
  },
  {
    id: 3,
    name: "Trinity",
    about:
      "Trinity is a computer programmer and a hacker who has escaped from the Matrix, a sophisticated computer program in which most humans are imprisoned. Though few specifics are revealed about her previous life inside the Matrix, it is told that she cracked a database so secure that she is famous among hackers, and that Morpheus, one of a number of real-world hovercraft commanders, initially identified her and helped her escape from the program."
  }
];

export class UserService {
  static getUser({ id }) {
    return users.find(user => user.id === id);
  }
}
