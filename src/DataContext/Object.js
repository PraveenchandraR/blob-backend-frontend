import React from "react";
import { createContext, useState } from "react";


export const DataBlog = createContext();

function DataBase(props) {


    const [data, setData] = useState([
        {
           category: "indianCinema",
            image:"https://2.bp.blogspot.com/-BAqgmI5zsz4/WV7NfaRat_I/AAAAAAAAAvk/N8nq7pjP9WMNFS34ERIsv7wP-g2F0H1ZACLcBGAs/s1600/maxresdefault.jpg",
            id: 1,
            title: "Bahubali2",
            Description:
                "Bahubali2 is Indian Action Drama Mythology Directed   by S.S.Rajamouli Starring By Prabhas Anushka",
            release: "Released on 2017",
            Rating : "IMDB :8.3"
            
               
        }, {
           category: "indianCinema",
            image: "https://1.bp.blogspot.com/-iPVReYFaHHo/XZ3ulQ-om-I/AAAAAAAADsI/LYHUfKs-Y10xM4dj3HEl8OKITkEf840ywCLcBGAsYHQ/s1600/EGa5f6cUUAA_u6E.jpg",
            id: 2,
            title: "R R R",
              release: "Released on 2022",
            Rating : "IMDB :8",
            Description: "RRR  centers around fictional versions of two Indian revolutionaries, Alluri Sitarama Raju(Charan) and Komaram Bheem(Rama Rao), their friendship and their fight against the British Raj."
        },
        {
           category: "indianCinema",
            id: 3,
            title: "KGF 2",
            release: "Released on 2022",
            Rating : "IMDB :8.4",
            image: "https://www.indiannewslive.com/movies/wp-content/uploads/2021/02/kgf2-1024x576.jpg",
            Description:
                "K.G.F: Chapter 2 is a 2022 Indian Kannada-language period action . It follows mercenary Rocky, who after becoming the ruler of the Kolar Gold Fields, must retain his supremacy over adversaries and government officials, including Suryavardhan's brother Adheera,"
  
        },
        {
            category: "hollywood",
            image: "https://image.tmdb.org/t/p/original/jOoGga5UZ5sdYE94ogcjjHfsWaK.jpg",
            id:4 ,
            title: " Titanic",
            release: "Released on (1997)",
            Rating: "imdb : 7.9",
            Description :"A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic"
        },
        {category: "hollywood",
            image: "https://smedia2.intoday.in/dailyo/story/embed/201807/tdk_071818043506.jpg",
            id: 5,
            title: " The Dark Knight",
            release: "Released on (2008)",
            Rating: "imdb : 9",
            Description :"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice"},
        {category: "hollywood",
            image: "http://3.bp.blogspot.com/-5CTQrsI26cA/TpQuRZNn2sI/AAAAAAAABSg/hrVhE2hXiu0/s1600/Pirates+of+the+Caribbean+1.jpg",
            id: 6,
            title: " Pirates of the Caribbean: 1",
            release: "Released on (2003)",
            Rating: "imdb : 8.1",
            Description :"Blacksmith Will Turner teams up with eccentric pirate  Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead"},
        {category: "hollywood",
            image: "https://image.tmdb.org/t/p/original/qrKcg4CbBm3165QNT3kQWQnqlTM.jpg",
            id: 7,
            title: "Harry Potter :1",
            release: "Released on (2001)",
            Rating: "imdb : 7.6",
            Description :"An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world."},
        {
            category: "technology",
            image: "https://wallpapercave.com/wp/ngPEfyE.jpg",
            id: 8,
            title: "Semiconductor Chips",
            Market: " USD 520.08 billion in 2022 ",
          Growth :"13.9% increased ",
            Description: "An integrated circuit or monolithic integrated circuit (also referred to as an IC, a chip, or a microchip) is a set of electronic circuits on one small flat piece (or chip) of semiconductor material, usually silicon. Large numbers of miniaturized transistors and other electronic components are integrated together on the chip."
        },
         { category: "technology",
            image: "https://electricvehicles.in/wp-content/uploads/2019/05/Electric-Vehicles-Sales-.jpg",
            id:9,
            title: "Electric vehicles",
            Market :"US$457.60bn in 2023 ",
           Growth : "17.2% increased ",
        Description: "Electric Car propelled by Electric Motors and uses electrical energy sored in batteries.Unlike vehicles with combustion engines, electric vehicles do not produce exhaust gases during operation. This alone makes electric vehicles more environmentally friendly than vehicles with conventional technology."},
        
        {
            category: "technology",
            image: "https://tse1.mm.bing.net/th?id=OIP.LQMRLDPoe571q0Led28L7AHaE7&pid=Api&P=0",
            id:10,
            title: "Artificial Intelligence",
            Market: " USD 136.55 billion in 2022  ",
           Growth :"47% increased",
            Description: "Artificial intelligence (AI) is a fast-growing branch of computer science focused on enabling computers to perform a wide range of tasks that previously required human intelligence. Today, AI is used to power a wide range of tasks, such as image recognition, language translation, and prioritization of email or business workflows"
        },
        
       
        { category: "anime",
            image: "https://1.bp.blogspot.com/-KGdjogPT0wI/Xq4nMba2BbI/AAAAAAAADBg/tEWBzMzQW1Ayqx0FEtdtwrcOn3zRGuYDQCLcBGAsYHQ/s1600/Death-Note.jpg",
            id:11,
            title: "Death Note",
            release: "Released on : 2006",
            Rating:"imdb : 9",
        Description: " a genius who discovers a mysterious notebook: the Death Note, which belonged to the shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name is written in its pages.  and the subsequent efforts of an elite Japanese police task force, led by enigmatic detective L, to apprehend him."},
             {category: "anime",
            image: "https://cdn.technadu.com/wp-content/uploads/2021/08/Demon-Slayer-Season-2.jpg",
            id:12,
            title: "Demon Slayer",
            release: "Released on : 2019--Present  ",
            Rating:"imdb :8.7 ",
            Description: "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister."
        },
             {category: "anime",
            image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/05/dragon-ball-super-header.jpg",
            id:13,
            title: "Dragon Ball Super",
            release: "Released on : 2018",
            Rating:"imdb :8.3",
            Description: "The last seasiion of the epic series ends with the biggest rival between the 10 universes with each team having  10 legendry figheters of their places infront of the little gods Zenos . And goku leading the universe 7 becomes the ultra instinct at last and the war lasts for 3 hours which is 131 episodes in TV."
        },
             {category: "games",
            image: "https://cdn.akamai.steamstatic.com/steam/apps/1262560/ss_82adddc724f99986dafdfe5f713de45e12a4ece5.1920x1080.jpg?t=1605151411",
            id:14,
            title: "NFS-Most wanted",
            release: "Released on :2005",
               type: "Open world racing adventure",
            Description: "In Need for Speed Most Wanted, users will also be able to go head-to-head with their opponents while simultaneously trying to avoid more than six different police cars at once. Now, The street is your playground!"
        },
         {category: "games",
            image: "https://tse1.mm.bing.net/th?id=OIP.IMLOpuUBowBkVQqBLatd9wHaEK&pid=Api&P=0",
            id:15,
            title: "God Of War",
             release: "Released on : 2005",
            type: "open world Action adventure",
            Description: "The gameplay of God of War focuses on combo-based combat, achieved through the player's main weapon—the Blades of Chaos—and a secondary weapon acquired later in the game. It features quick time events that require the player to complete various game controller actions in a timed sequence to defeat stronger enemies and bosses."
        },
        {category: "games",
            image: "https://www.gamingdragons.com/images/game_img/screenshots/prototype/0000008861.1920x1080.jpg",
            id:16,
            title: "Prototype",
            release: "Released 2009:",
            type:"open world Action adventure",
            Description: "Alex Mercer as he attempts to stop an outbreak of a virus called Blacklight in Manhattan, which mutates individuals into powerful, violent monsters. Alex also attempts to uncover his mysterious past while coming into conflict with both the US military and a black operations force called Blackwatch. "
        },
       
       
    ]);
    return (
       
            
                <DataBlog.Provider value={[data, setData]}>
                    {props.children}
                    
                </DataBlog.Provider>
           
        
     
    );

}
export default DataBase;