//variables pour créer le svg
var WIDTH = 470;
var HEIGHT = 470;
var radius = Math.min(WIDTH, HEIGHT) / 2;

//Déclaration des variables pour aditionner nos données
let goodNumber = 0
let badNumber = 0
let neutralNumber = 0

//Variables pour aditionner les nouvelles des lundis
let goodNumberMonday = 0
let badNumberMonday = 0
let neutralNumberMonday = 0

//Création des variables pour stocker les liens menants aux nouvelles
const lienBonneNouvelle = []
const lienMauvaiseNouvelle =[]
const lienNeutreNouvelle = []

//Création du SVG
const svg = d3.select('svg')    
    .attr('width', WIDTH)    
    .attr('height', HEIGHT);
var container = d3.select('g')
    .attr('transform', 'translate ('+ (WIDTH/2) +','+ (HEIGHT/2) +')');

//Importation des données
d3.csv('donneesRTS.csv',function(d){
    // Nomination des variables reliées aux données
    return {
        jourSemaine : d.JourMot,
        mois : d.Mois,
        lienNouvelle : d.Lien,
        emotion : d.Emotion,
        date : d.Date,
    }
    }).then(donnees =>{
    // vérfier que les données ont bien été importées
    console.log(donnees)
    //Classer nos données selon les émotions 
    donnees.forEach(d => {
        if (d.emotion == 'Good'){
            goodNumber ++
            const count = lienBonneNouvelle.push(d.lienNouvelle)
        }
        else if(d.emotion == 'Bad'){
            badNumber ++
            const count = lienMauvaiseNouvelle.push(d.lienNouvelle)
        }
        else if (d.emotion == 'Neutral'){
            neutralNumber ++
            const count = lienNeutreNouvelle.push(d.lienNouvelle)
        }
    });

    //Mise en place de notre base de données pour le graphique avec toutes les nouvelles
    var data = {'Bonnes nouvelles': goodNumber, 'Mauvaises nouvelles': badNumber, 'Nouvelles neutres': neutralNumber}

    //Attribuer une couleur différente à chaque section du graphique
    var color = d3.scaleOrdinal()
          .domain(data)
          .range(["green", "red", "orange"])
        
    // Calculer la position de chaque section dans le graphique
    var pie = d3.pie()
          .value(function(d) {return d.value; })
    var data_ready = pie(d3.entries(data))

    //Création d'une fonction pour faciliter la création des arcs
    var arcGenerator = d3.arc()
          .innerRadius(0)
          .outerRadius(radius)
    
    //Choisir un lien aléatoire pour l'événement click 
    var hasardBonne = Math.floor(Math.random()*lienBonneNouvelle.length);
    var uneBonneNouvelle = lienBonneNouvelle[hasardBonne];

    var hasardMauvaise = Math.floor(Math.random()*lienMauvaiseNouvelle.length);
    var uneMauvaiseNouvelle = lienMauvaiseNouvelle[hasardMauvaise];

    var hasardNeutre = Math.floor(Math.random()*lienNeutreNouvelle.length);
    var uneNouvelleNeutre = lienNeutreNouvelle[hasardNeutre];
        
    // Construction du graphique
    svg
      .selectAll('g').selectAll('path')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', arcGenerator)
      .attr('fill', function(d){ return(color(d.data.key)) })
      .attr("stroke", "black")
      .style("stroke-width", "2px")
      .style("opacity", 0.8)
      // Ajout des animations
      .on("mouseover", function(){
          d3.select(this)
            .style("opacity", 1);
          })
      .on("mouseout", function(){
          d3.select(this)
            .style("opacity", 0.8)
          })
      //Ajout d'un événement : lorsque l'on clique sur une partie du graphique, une page internet s'ouvre pour nous proposer une nouvelle tirer au sort dans notre base de données
      .on("click", function(d){
            if (d.data.key == 'Bonnes nouvelles'){
            window.open (uneBonneNouvelle)
            location.reload()
            }
            else if (d.data.key == 'Mauvaises nouvelles'){
              window.open (uneMauvaiseNouvelle)
              location.reload()
            }
            else if (d.data.key == 'Nouvelles neutres'){
              window.open (uneNouvelleNeutre)
              location.reload()
            }
          })

      //Ajout du nom de chaque section du graphique ainsi que le nombre total de bonnes, mauvaises ou neutres nouvelles
      svg
        .selectAll('g').selectAll('text')
        .data(data_ready)
        .enter()
        .append('text')
        .text(function(d){ return d.data.key})
          .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
          .attr("y", "-0.4em")
          .style("text-anchor", "middle")
          .style("font-size", 17)
          .style("font-weight", "bold")
          .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
            .attr("x", 0)
            .attr("y", "0.7em")
            .attr("fill-opacity", 0.7)
            .attr("font-weight", "normal")
            .text(d => d.data.value.toLocaleString()));
        });
