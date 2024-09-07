let dados = [
    // Jogos existentes
    {
        titulo: "The Witcher 3: Wild Hunt",
        descricao: "No mundo aberto de Wild Hunt, você traça seu próprio caminho para a aventura.",
        plataformas: ["PC", "Xbox", "PlayStation","Nintendo Switch"],
        data_lancamento: "19 de maio de 2015",
        desenvolvedor: "CD Projekt RED",
        genero: "RPG",
        link: "https://www.thewitcher.com/br/pt-br/witcher3"
    },
    {
        titulo: "The Witcher 2: Assassins of Kings",
        descricao: "Geralt de Rívia é acusado de assassinar um rei e precisa provar sua inocência.",
        plataformas: ["PC", "Xbox 360","PlayStation 3"],
        data_lancamento: "17 de maio de 2011",
        desenvolvedor: "CD Projekt RED",
        genero: "RPG",
        link: "https://www.thewitcher.com/en/witcher2" 
    },
    {
        titulo: "The Witcher",
        descricao: "Geralt de Rívia é contratado para encontrar uma princesa sequestrada.",
        plataformas: ["PC", "Xbox 360", "PlayStation 3"],
        data_lancamento: "26 de novembro de 2005",
        desenvolvedor: "CD Projekt RED",
        genero: "RPG",
        link: "https://www.thewitcher.com/en/witcher1" 
    },
    {
        titulo: "FIFA 23",
        descricao: "A última edição da popular franquia de futebol, com modos de jogo como Carreira e Ultimate Team.",
        plataformas: ["PC", "Xbox", "PlayStation", "Nintendo Switch"],
        data_lancamento: "30 de setembro de 2022",
        desenvolvedor: "EA Sports",
        genero: "Esporte",
        link: "https://www.ea.com/games/fifa/fifa-23"
    },
    {
        titulo: "The Legend of Zelda: Breath of the Wild",
        descricao: "Um vasto mundo aberto de exploração e aventura, onde Link deve derrotar Ganon para salvar Hyrule.",
        plataformas: ["Nintendo Switch", "Wii U"],
        data_lancamento: "3 de março de 2017",
        desenvolvedor: "Nintendo",
        genero: "Açao/Aventura",
        link: "https://www.zelda.com/breath-of-the-wild/"
    },
    {
        titulo: "Cyberpunk 2077",
        descricao: "Em um mundo futurista e distópico, você assume o papel de V, um mercenário em busca de imortalidade.",
        plataformas: ["PC", "Xbox", "PlayStation", "Google Stadia"],
        data_lancamento: "10 de dezembro de 2020",
        desenvolvedor: "CD Projekt RED",
        genero: "RPG",
        link: "https://www.cyberpunk.net"
    },
    {
        titulo: "Hades",
        descricao: "Um rogue-like onde você tenta escapar do submundo grego, enfrentando deuses e monstros mitológicos.",
        plataformas: ["PC", "Nintendo Switch", "PlayStation", "Xbox"],
        data_lancamento: "17 de setembro de 2020",
        desenvolvedor: "Supergiant Games",
        genero: "Rogue-like/Açao",
        link: "https://www.supergiantgames.com/games/hades/"
    },
    {
        titulo: "Red Dead Redemption 2",
        descricao: "Uma epopeia de faroeste que explora a vida de um fora da lei em um mundo aberto e detalhado.",
        plataformas: ["PC", "Xbox", "PlayStation"],
        data_lancamento: "26 de outubro de 2018",
        desenvolvedor: "Rockstar Games",
        genero: "Açao/Aventura",
        link: "https://www.rockstargames.com/reddeadredemption2/"
    },
    {
        titulo: "Among Us",
        descricao: "Um jogo multiplayer de dedução social onde os jogadores trabalham para completar tarefas enquanto tentam descobrir quem é o impostor.",
        plataformas: ["PC", "Nintendo Switch", "Mobile"],
        data_lancamento: "15 de junho de 2018",
        desenvolvedor: "InnerSloth",
        genero: "Deduçao Social",
        link: "https://innersloth.com/gameAmongUs.php"
    },
    // Novos jogos adicionados
    {
        titulo: "Assassin's Creed Valhalla",
        descricao: "Acompanhe Eivor, um vikingo, em sua jornada para conquistar e explorar a Inglaterra.",
        plataformas: ["PC", "Xbox", "PlayStation", "Stadia"],
        data_lancamento: "10 de novembro de 2020",
        desenvolvedor: "Ubisoft",
        genero: "Açao/RPG",
        link: "https://www.ubisoft.com/en-us/game/assassins-creed/valhalla/"
    },
    {
        titulo: "Final Fantasy VII Remake",
        descricao: "Uma nova versão do clássico RPG com gráficos atualizados e uma nova abordagem para a narrativa.",
        plataformas: ["PlayStation 4", "PC"],
        data_lancamento: "10 de abril de 2020",
        desenvolvedor: "Square Enix",
        genero: "RPG",
        link: "https://www.ffvii-remake.com/"
    },
    {
        titulo: "Ghost of Tsushima",
        descricao: "Um samurai luta para proteger sua terra natal durante a invasão mongol no Japão feudal.",
        plataformas: ["PlayStation 4"],
        data_lancamento: "17 de julho de 2020",
        desenvolvedor: "Sucker Punch Productions",
        genero: "Açao/Aventura",
        link: "https://www.playstation.com/en-us/games/ghost-of-tsushima/"
    },
    {
        titulo: "Sekiro: Shadows Die Twice",
        descricao: "Um jogo de ação e aventura onde você assume o papel de um shinobi em busca de vingança.",
        plataformas: ["PC", "PlayStation", "Xbox"],
        data_lancamento: "22 de março de 2019",
        desenvolvedor: "FromSoftware",
        genero: "Açao/Aventura",
        link: "https://www.sekirothegame.com/"
    },
    {
        titulo: "The Last of Us Part II",
        descricao: "Segunda parte da aclamada série, que explora temas de vingança e sobrevivência em um mundo pós-apocalíptico.",
        plataformas: ["PlayStation 4"],
        data_lancamento: "19 de junho de 2020",
        desenvolvedor: "Naughty Dog",
        genero: "Açao/Aventura",
        link: "https://www.thelastofusplaystation.com/"
    },
    {
        titulo: "Control",
        descricao: "Você explora uma agência secreta em Nova York com poderes paranormais para descobrir a verdade sobre o desaparecimento de seu irmão.",
        plataformas: ["PC", "PlayStation", "Xbox"],
        data_lancamento: "27 de agosto de 2019",
        desenvolvedor: "Remedy Entertainment",
        genero: "Açao/Aventura",
        link: "https://controlgame.com/"
    },
    {
        titulo: "Monster Hunter Rise",
        descricao: "Caçadores enfrentam monstros gigantes em um mundo vibrante e dinâmico para coletar recursos e melhorar suas habilidades.",
        plataformas: ["Nintendo Switch", "PC"],
        data_lancamento: "26 de março de 2021",
        desenvolvedor: "Capcom",
        genero: "Açao/RPG",
        link: "https://www.monsterhunter.com/rise/"
    },
    {
        titulo: "Doom Eternal",
        descricao: "A sequência do aclamado Doom, trazendo mais ação frenética e combate contra hordas de demônios.",
        plataformas: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
        data_lancamento: "20 de março de 2020",
        desenvolvedor: "id Software",
        genero: "Tiro em Primeira Pessoa",
        link: "https://slayersclub.bethesda.net/en/doometernal"
    },
    {
        titulo: "Hollow Knight",
        descricao: "Um jogo de ação e aventura em 2D com exploração em um vasto mundo subterrâneo cheio de segredos.",
        plataformas: ["PC", "Nintendo Switch", "PlayStation", "Xbox"],
        data_lancamento: "24 de fevereiro de 2017",
        desenvolvedor: "Team Cherry",
        genero: "Metroidvania",
        link: "https://hollowknight.com/"
    },
    {
        titulo: "Stardew Valley",
        descricao: "Um jogo de simulação de vida onde você administra uma fazenda, faz amizade com os moradores e explora cavernas.",
        plataformas: ["PC", "Nintendo Switch", "PlayStation", "Xbox", "Mobile"],
        data_lancamento: "26 de fevereiro de 2016",
        desenvolvedor: "ConcernedApe",
        genero: "Simulaçao",
        link: "https://www.stardewvalley.net/"
    },
    {
        titulo: "Celeste",
        descricao: "Um jogo de plataforma desafiador sobre escalar uma montanha e superar desafios pessoais.",
        plataformas: ["PC", "Nintendo Switch", "PlayStation", "Xbox"],
        data_lancamento: "25 de janeiro de 2018",
        desenvolvedor: "Maddy Makes Games",
        genero: "Plataforma",
        link: "https://www.celestegame.com/"
    },
    {
        titulo: "Overwatch",
        descricao: "Um jogo de tiro em equipe com heróis variados e habilidades únicas, focado em trabalho em equipe e estratégias.",
        plataformas: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
        data_lancamento: "24 de maio de 2016",
        desenvolvedor: "Blizzard Entertainment",
        genero: "Tiro em Primeira Pessoa",
        link: "https://playoverwatch.com/"
    },
    {
        titulo: "Subnautica",
        descricao: "Um jogo de sobrevivência em um planeta oceânico alienígena, onde você explora e constrói em um vasto ambiente subaquático.",
        plataformas: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
        data_lancamento: "23 de janeiro de 2018",
        desenvolvedor: "Unknown Worlds Entertainment",
        genero: "Sobrevivencia",
        link: "https://www.subnautica.com/"
    },
    {
        titulo: "Dead Cells",
        descricao: "Um rogue-like de ação com combate rápido e exploração em um mundo gerado proceduralmente.",
        plataformas: ["PC", "Nintendo Switch", "PlayStation", "Xbox"],
        data_lancamento: "7 de agosto de 2018",
        desenvolvedor: "Motion Twin",
        genero: "Rogue-like/Açao",
        link: "https://dead-cells.com/"
    },
    {
        titulo: "Cuphead",
        descricao: "Um jogo de plataforma e tiro com uma estética inspirada em desenhos animados dos anos 1930 e desafios difíceis.",
        plataformas: ["PC", "Nintendo Switch", "PlayStation", "Xbox"],
        data_lancamento: "29 de setembro de 2017",
        desenvolvedor: "Studio MDHR",
        genero: "Plataforma/Açao",
        link: "https://www.cupheadgame.com/"
    },
    {
        titulo: "Terraria",
        descricao: "Um jogo de sandbox 2D com exploração, construção e combate em um mundo gerado aleatoriamente.",
        plataformas: ["PC", "Nintendo Switch", "PlayStation", "Xbox", "Mobile"],
        data_lancamento: "16 de maio de 2011",
        desenvolvedor: "Re-Logic",
        genero: "Sandbox",
        link: "https://terraria.org/"
    },
    {
        titulo: "The Outer Worlds",
        descricao: "Um RPG de ação com escolhas impactantes em um universo de ficção científica e uma narrativa rica.",
        plataformas: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
        data_lancamento: "25 de outubro de 2019",
        desenvolvedor: "Obsidian Entertainment",
        genero: "RPG",
        link: "https://theouterworlds.com/"
    },
    {
        titulo: "Fall Guys: Ultimate Knockout",
        descricao: "Um jogo de batalha real em estilo de corrida, onde você compete em minijogos coloridos e caóticos.",
        plataformas: ["PC", "PlayStation", "Nintendo Switch", "Xbox"],
        data_lancamento: "4 de agosto de 2020",
        desenvolvedor: "Mediatonic",
        genero: "Battle Royale/Party",
        link: "https://fallguys.com/"
    },
    {
        titulo: "Factorio",
        descricao: "Um jogo de simulação e gerenciamento de recursos onde você constrói e otimiza fábricas em um mundo alienígena.",
        plataformas: ["PC"],
        data_lancamento: "14 de agosto de 2020",
        desenvolvedor: "Wube Software",
        genero: "Simulaçao/Estrategia",
        link: "https://factorio.com/"
    },
    {
        titulo: "Dying Light 2",
        descricao: "Uma sequência de Dying Light, que combina combate em primeira pessoa e parkour em um mundo aberto pós-apocalíptico.",
        plataformas: ["PC", "PlayStation", "Xbox"],
        data_lancamento: "4 de fevereiro de 2022",
        desenvolvedor: "Techland",
        genero: "Açao/Sobrevivencia",
        link: "https://dyinglightgame.com/dying-light-2/"
    },
    {
        titulo: "Minecraft",
        descricao: "Um jogo de sandbox onde você pode explorar, construir e sobreviver em um mundo gerado proceduralmente composto por blocos.",
        plataformas: ["PC", "PlayStation", "Xbox", "Nintendo Switch", "Mobile"],
        data_lancamento: "18 de novembro de 2011",
        desenvolvedor: "Mojang Studios",
        genero: "Sandbox",
        link: "https://www.minecraft.net/"
    }
];
