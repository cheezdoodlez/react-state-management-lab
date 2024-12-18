import { useState } from 'react'
import './App.css'


const App = () => {

  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState (0)
  const [zombieFighters, setZombieFighters] = useState([

    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROm2qlAQel2AREc8y7Gy5-FVrGAWpmXY-_pQ&s',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://i1.sndcdn.com/artworks-000280343972-go2ic2-t500x500.jpg',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://i.chzbgr.com/full/9675421440/h59942597/cat',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://yt3.googleusercontent.com/ytc/AIdro_lDjfGfVcZhyx9duJCAPpOWgy8XGtB5GLWHHlI6CZNWY6M=s900-c-k-c0x00ffffff-no-rj',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://preview.redd.it/cats-snipers-v0-hoz70j4tnm2b1.png?width=640&crop=smart&auto=webp&s=1de164edae9247edf13d6f2a8f35d9220b9e4976',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://i.redd.it/40c5bumqbufy.jpg',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaDU5U4J5ENYwOhMuAqJKnXXcyb4cocHdf7Q&s',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://thumbs.dreamstime.com/b/buff-white-cat-gym-working-out-made-generative-ai-280905554.jpg',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://i.ytimg.com/vi/sUSOurSUHro/maxresdefault.jpg',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://i.redd.it/v4suk6f4e8k71.png',
    },

  ])
  const handleAddToTeam = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter])
      setMoney(money - fighter.price)
      setTotalStrength(totalStrength + fighter.strength)
      setTotalAgility(totalAgility + fighter.agility)
      alert("Fighter added to team captain")
    }
    else {
      alert("Not enough money punk")
    }
  }
  const handleRemoveFromTeam = (fighter) => {
    setTeam(team.filter((member) => member !== fighter))
    setMoney(money + fighter.price)
    setTotalStrength(totalStrength - fighter.strength)
    setTotalAgility(totalAgility - fighter.agility)
    alert("Fighter honorably discharged")
  }


  return (
    <>
      <div className="App">
        <h1>Zombie Fighters</h1>
        <h2>Money: ${money}</h2>
        <div className="fighters-list">
          {zombieFighters.map((fighter, index) => (
            <div key={index} className="fighter-card">
              <img src={fighter.img} alt={fighter.name} className="fighter-image" style={{ width: "150px", height: "150px" }} />
              <h3>{fighter.name}</h3>
              <p>Price: ${fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleAddToTeam(fighter)}>Add to Team</button>
            </div>
          ))}
        </div>
        <h1>Your Team</h1>
        <h2>Total Strength: {totalStrength}</h2>
        {team.length === 0 ? (<h3>Choose your team Captain!</h3>) :
        (
        <ul>
          {team.map((member, index) => (
            <li key={index}>
              <p>{member.name}</p> <br />
              <img src={member.img} className="fighter-image" style={{ width: "150px", height: "150px" }} /> <br />
              <p>Strength: {member.strength}</p>
              <p> Agility: {member.agility}</p>
              <p> Price: ${member.price}</p>
              <button onClick={() => handleRemoveFromTeam(member)}>Remove from team</button>
            </li>
          ))}
        </ul>
        )}
      </div>
    </>
  )
}

export default App