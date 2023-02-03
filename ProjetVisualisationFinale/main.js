//variables pour créer nos deux cercles
var WIDTH = 470;
var HEIGHT = 470;
var radius = Math.min(WIDTH, HEIGHT) / 2;

//Déclaration des variables pour aditionner nos données pour le PieChart sur les émotions des nouvelles et du choix random d'une nouvelle
let goodNumber = 0
let badNumber = 0
let neutralNumber = 0

//Création des variables pour stocker les liens menants aux nouvelles
const lienBonneNouvelle = []
const lienMauvaiseNouvelle =[]
const lienNeutreNouvelle = []

//Déclaration des variables pour aditionner nos données pour le PieChart sur la catégorie des nouvelles
let culturalNumber = 0
let scienceNumber = 0
let internationalNumber = 0
let economyNumber = 0
let swissNumber = 0
let diverNumber = 0
let natureNumber = 0
let sportNumber = 0
let covidNumber = 0

//Déclaration des variables pour aditionner nos données pour les PieCharts sur le nombre de bonne, mauvaise et nouvelle neutre par catégorie
let culturalNumberGood = 0
let scienceNumberGood = 0
let internationalNumberGood = 0
let economyNumberGood = 0
let swissNumberGood = 0
let diverNumberGood = 0
let natureNumberGood = 0
let sportNumberGood = 0
let covidNumberGood = 0
let culturalNumberBad = 0
let scienceNumberBad = 0
let internationalNumberBad = 0
let economyNumberBad = 0
let swissNumberBad = 0
let diverNumberBad = 0
let natureNumberBad = 0
let sportNumberBad = 0
let covidNumberBad = 0
let culturalNumberNeutral = 0
let scienceNumberNeutral = 0
let internationalNumberNeutral = 0
let economyNumberNeutral = 0
let swissNumberNeutral = 0
let diverNumberNeutral = 0
let natureNumberNeutral = 0
let sportNumberNeutral = 0
let covidNumberNeutral = 0

//Création du SVG
const svg = d3.select('svg')    
    .attr('width', 1500)    
    .attr('height', 550 );
var container = d3.select('#emotionPiechart')
    .attr('transform', 'translate ('+ (WIDTH/2) +','+ (HEIGHT/2) +')');
var containerType = d3.select('#categoriePiechart')
    .attr('transform', 'translate ('+ (WIDTH/2) +','+ (HEIGHT/2) +')');

//Importation des données
d3.csv('donneesRTS.csv',function(d){
    // Nomination des variables reliées aux données
    return {
        jourSemaine : d.JourMot,
        mois : d.Mois,
        titre : d.Titre,
        lienNouvelle : d.Lien,
        emotion : d.Emotion,
        date : d.Date,
        type : d.Type,
    }
    }).then(donnees =>{
    // vérfier que les données ont bien été importées
    console.log(donnees)
    //Classer nos données selon leurs émotions et leurs catégories
    donnees.forEach(d => {
        if (d.emotion == 'Good' && d.type == 'Culture'){
            goodNumber ++
            culturalNumber ++
            culturalNumberGood ++
            const count = lienBonneNouvelle.push(d)
        }
        else if(d.emotion == 'Bad' && d.type == 'Culture'){
            badNumber ++
            culturalNumber ++
            culturalNumberBad ++
            const count = lienMauvaiseNouvelle.push(d)
        }
        else if (d.emotion == 'Neutral' && d.type == 'Culture'){
            neutralNumber ++
            culturalNumber ++
            culturalNumberNeutral ++
            const count = lienNeutreNouvelle.push(d)
        }
        else if (d.emotion == 'Good' && d.type == 'Sciences'){
            goodNumber ++
            scienceNumber ++
            scienceNumberGood ++
            const count = lienBonneNouvelle.push(d)
        }
        else if(d.emotion == 'Bad' && d.type == 'Sciences'){
            badNumber ++
            scienceNumber ++
            scienceNumberBad ++
            const count = lienMauvaiseNouvelle.push(d)
        }
        else if (d.emotion == 'Neutral' && d.type == 'Sciences'){
            neutralNumber ++
            scienceNumber ++
            scienceNumberNeutral ++
            const count = lienNeutreNouvelle.push(d)
      }
      else if (d.emotion == 'Good' && d.type == 'International'){
          goodNumber ++
          internationalNumber ++
          internationalNumberGood ++
          const count = lienBonneNouvelle.push(d)
      }
      else if(d.emotion == 'Bad' && d.type == 'International'){
          badNumber ++
          internationalNumber ++
          internationalNumberBad ++
          const count = lienMauvaiseNouvelle.push(d)
      }
      else if (d.emotion == 'Neutral' && d.type == 'International'){
          neutralNumber ++
          internationalNumber ++
          internationalNumberNeutral ++
          const count = lienNeutreNouvelle.push(d)
      }
      else if (d.emotion == 'Good' && d.type == 'Economie'){
          goodNumber ++
          economyNumber ++
          economyNumberGood ++
          const count = lienBonneNouvelle.push(d)
      }
      else if(d.emotion == 'Bad' && d.type == 'Economie'){
          badNumber ++
          economyNumber ++
          economyNumberBad +1
          const count = lienMauvaiseNouvelle.push(d)
      }
      else if (d.emotion == 'Neutral' && d.type == 'Economie'){
          neutralNumber ++
          economyNumber ++
          economyNumberNeutral ++
          const count = lienNeutreNouvelle.push(d)
      }
      else if (d.emotion == 'Good' && d.type == 'Politique Suisse'){
          goodNumber ++
          swissNumber ++
          swissNumberGood ++
          const count = lienBonneNouvelle.push(d)
      }
      else if(d.emotion == 'Bad' && d.type == 'Politique Suisse'){
          badNumber ++
          swissNumber ++
          swissNumberBad ++
          const count = lienMauvaiseNouvelle.push(d)
      }
      else if (d.emotion == 'Neutral' && d.type == 'Politique Suisse'){
          neutralNumber ++
          swissNumber ++
          swissNumberNeutral ++
          const count = lienNeutreNouvelle.push(d)
      }
      else if (d.emotion == 'Good' && d.type == 'Faits divers'){
          goodNumber ++
          diverNumber ++
          diverNumberGood ++
          const count = lienBonneNouvelle.push(d)
      }
      else if(d.emotion == 'Bad' && d.type == 'Faits divers'){
          badNumber ++
          diverNumber ++
          diverNumberBad ++
          const count = lienMauvaiseNouvelle.push(d)
      }
      else if (d.emotion == 'Neutral' && d.type == 'Faits divers'){
          neutralNumber ++
          diverNumber ++
          diverNumberNeutral ++
          const count = lienNeutreNouvelle.push(d)
      }
      else if (d.emotion == 'Good' && d.type == 'Environnement'){
          goodNumber ++
          natureNumber ++
          natureNumberGood ++
          const count = lienBonneNouvelle.push(d)
      }
      else if(d.emotion == 'Bad' && d.type == 'Environnement'){
          badNumber ++
          natureNumber ++
          natureNumberBad ++
          const count = lienMauvaiseNouvelle.push(d)
      }
      else if (d.emotion == 'Neutral' && d.type == 'Environnement'){
          neutralNumber ++
          natureNumber ++
          natureNumberNeutral ++
          const count = lienNeutreNouvelle.push(d)
      }
      else if (d.emotion == 'Good' && d.type == 'Sport'){
        goodNumber ++
        sportNumber ++
        sportNumberGood ++
        const count = lienBonneNouvelle.push(d)
    }
    else if(d.emotion == 'Bad' && d.type == 'Sport'){
        badNumber ++
        sportNumber ++
        sportNumberBad ++
        const count = lienMauvaiseNouvelle.push(d)
    }
    else if (d.emotion == 'Neutral' && d.type == 'Sport'){
        neutralNumber ++
        sportNumber ++
        sportNumberNeutral ++
        const count = lienNeutreNouvelle.push(d)
    }
    else if (d.emotion == 'Good' && d.type == 'Covid'){
      goodNumber ++
      covidNumber ++
      covidNumberGood ++
      const count = lienBonneNouvelle.push(d)
  }
  else if(d.emotion == 'Bad' && d.type == 'Covid'){
      badNumber ++
      covidNumber ++
      covidNumberBad ++
      const count = lienMauvaiseNouvelle.push(d)
  }
  else if (d.emotion == 'Neutral' && d.type == 'Covid'){
      neutralNumber ++
      covidNumber ++
      covidNumberNeutral ++
      const count = lienNeutreNouvelle.push(d)
  }
    });

    //Mise en place de notre base de données pour le graphique avec toutes les nouvelles
    var dataTotal = {'Bonnes nouvelles': goodNumber, 'Mauvaises nouvelles': badNumber, 'Nouvelles neutres': neutralNumber}

    //Mise en place de notre base de données pour le graphique avec toutes les catégories
    var dataType = {'Culture': culturalNumber, 'Science': scienceNumber, 'International': internationalNumber, 'Economie':economyNumber, 'Politique suisse': swissNumber, 'Faits divers': diverNumber, 'Environnement': natureNumber, 'Sport':sportNumber, 'Covid': covidNumber}

    //Mise en place de nos bases de données pour les graphiques avec toutes les émotions par catégorie
    var dataCultural = {'Bonnes nouvelles': culturalNumberGood, 'Mauvaises nouvelles': culturalNumberBad, 'Nouvelles neutres': culturalNumberNeutral}
    var dataScience = {'Bonnes nouvelles': scienceNumberGood, 'Mauvaises nouvelles': scienceNumberBad, 'Nouvelles neutres': scienceNumberNeutral}
    var dataInternational = {'Bonnes nouvelles': internationalNumberGood, 'Mauvaises nouvelles': internationalNumberBad, 'Nouvelles neutres': internationalNumberNeutral}
    var dataEconomy = {'Bonnes nouvelles': economyNumberGood, 'Mauvaises nouvelles': economyNumberBad, 'Nouvelles neutres': economyNumberNeutral}
    var dataSwiss = {'Bonnes nouvelles': swissNumberGood, 'Mauvaises nouvelles': swissNumberBad, 'Nouvelles neutres': swissNumberNeutral}
    var dataDivers = {'Bonnes nouvelles': diverNumberGood, 'Mauvaises nouvelles': diverNumberBad, 'Nouvelles neutres': diverNumberNeutral}
    var dataNature = {'Bonnes nouvelles': natureNumberGood, 'Mauvaises nouvelles': natureNumberBad, 'Nouvelles neutres': natureNumberNeutral}
    var dataSport = {'Bonnes nouvelles': sportNumberGood, 'Mauvaises nouvelles': sportNumberBad, 'Nouvelles neutres': sportNumberNeutral}
    var dataCovid = {'Bonnes nouvelles': covidNumberGood, 'Mauvaises nouvelles': covidNumberBad, 'Nouvelles neutres': covidNumberNeutral}
    
    //Attribuer une couleur différente à chaque section du PieChart pour les émotions
    var color = d3.scaleOrdinal()
          .domain('Bonnes nouvelles', 'Mauvaises nouvelles', 'Nouvelles neutres')
          .range(['green', 'red', 'orange'])
    
    //Attribuer une couleur différente à chaque section du PieChart pour les catégories
    var colorType = d3.scaleOrdinal()
          .domain(dataType)
          .range(d3.schemeDark2)

    //Création d'une fonction pour faciliter la création des arcs
    var arcGenerator = d3.arc()
          .innerRadius(0)
          .outerRadius(radius)
    
    //Choisir un lien aléatoire pour l'événement click du PieChart sur les émotions 
    var hasardBonne = Math.floor(Math.random()*lienBonneNouvelle.length)
    var uneBonneNouvelle = lienBonneNouvelle[hasardBonne]

    var hasardMauvaise = Math.floor(Math.random()*lienMauvaiseNouvelle.length)
    var uneMauvaiseNouvelle = lienMauvaiseNouvelle[hasardMauvaise]

    var hasardNeutre = Math.floor(Math.random()*lienNeutreNouvelle.length)
    var uneNouvelleNeutre = lienNeutreNouvelle[hasardNeutre]

    //Création de la fonction getNewData pour l'événement click du PieChart sur les catégories
    function getNewData (d){
        if(d == 'Culture'){
            updateEmotion(dataCultural)
        }
        else if (d == 'Science'){
            updateEmotion(dataScience)
        }
        else if (d == 'International'){
            updateEmotion(dataInternational)
        }
        else if (d == 'Economie'){
            updateEmotion(dataEconomy)
        }
        else if (d == 'Politique suisse'){
            updateEmotion(dataSwiss)
        }
        else if (d == 'Faits divers'){
            updateEmotion (dataDivers)
        }
        else if (d == 'Environnement'){
            updateEmotion(dataNature)
        }
        else if (d == 'Sport'){
            updateEmotion(dataSport)
        }
        else if (d == 'Covid'){
            updateEmotion(dataCovid)
        }
    }
        
// Mise en place de la fonction pour créer les PieCharts selon les émotions (avec le total et les différentes catégories)
function updateEmotion(data){  

     // Calculer la position de chaque section dans le graphique
    var pie = d3.pie()
        .value(function(d) {return d.value})
        .sort(function(a, b) {return d3.ascending(a.key, b.key);} )
    var data_ready = pie(d3.entries(data))
    
    //Mise en place des variables pour construire le PieChart et les transitions
    var path = svg.selectAll('#emotionPiechart').selectAll('path')
    var text = svg.selectAll("#emotionPiechart").selectAll('text')
    
    //Construction du PieChart
    path
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', arcGenerator)
      .attr('id', function(d){return('total')})
      .attr('fill', function(d){ return(color(d.data.key)) })
      .attr('stroke', 'white')
      .style('stroke-width', '2px')
      .style('opacity', 0.8)
      // Ajout des animations
      .on('mouseover', function(){
          d3.select(this)
            .style('opacity', 1);
          })
      .on('mouseout', function(){
          d3.select(this)
            .style('opacity', 0.8)
          })
      //Ajout d'un événement : lorsque l'on clique sur une partie du graphique, une page internet s'ouvre pour nous proposer une nouvelle tirer au sort dans notre base de données
      .on('click', function(d){
        if(this.id == 'total'){
            if (d.data.key == 'Bonnes nouvelles'){
            window.open (uneBonneNouvelle.lienNouvelle, height=100, width=100)
            location.reload()  
            }
            else if (d.data.key == 'Mauvaises nouvelles'){
              window.open (uneMauvaiseNouvelle.lienNouvelle, height=100, width=100)
              location.reload()
            }
            else if (d.data.key == 'Nouvelles neutres'){
              window.open (uneNouvelleNeutre.lienNouvelle, height=100, width=100)
              location.reload()
            }}
        })

      //Ajout du nom de chaque section du graphique ainsi que le nombre total de bonnes, mauvaises ou neutres nouvelles
      text
        .data(data_ready)
        .enter()
        .append('text')
        .text(function(d){{return d.data.value + ' (~'+ Math.round((d.endAngle - d.startAngle)/(2*Math.PI)*100) + '%)'}})
          .attr('transform', function(d) { return 'translate(' + arcGenerator.centroid(d) + ')';  })
          .attr('transform', function(d) { return 'translate(' + arcGenerator.centroid(d) + ')';  })
          .attr('y', '-0.4em')
          .style('text-anchor', 'middle')
          .style('font-size', 17)
          .style('font-weight', 'bold')
    
    // Ajout des légendes
    var legend = svg.selectAll('.legend')
        .data(data_ready)
        .enter()
        .append('g')
        .attr('class', 'legend')
        .attr('transform', function(d, i) { return 'translate(-30,' + (i * 20 - 30) + ')'; });

    legend
        .append('rect')
        .attr('x', 720)
        .attr('y', 500)
        .attr('width', 18)
        .attr('height', 18)
        .style('fill', function(d){ return(color(d.data.key)) });

    legend
        .append('text')
        .attr('x', 710)
        .attr('y', 500)
        .attr('dy', '.90em')
        .style('text-anchor', 'end')
        .text(function(d) { return d.data.key; })
        .style('font-style', 'bold')
        .style('font-size', 17);

     //Ajout des transitions lorsqu'il y a un changement de données
     path
       .data(data_ready)
       .merge(path)
       .transition()
       .duration(500)
       .attr("d", arcGenerator)
       .attr('id', function(d){if(d.data.value > 170){
        return('total')}})
       .attr("fill", function(d) {return color(d.data.key)});
    
     text 
      .data(data_ready)
      .transition()
      .duration(500)
      .text(function(d){ 
        if(d.data.value != 0){return d.data.value + ' (~'+ Math.round((d.endAngle - d.startAngle)/(2*Math.PI)*100) + '%)'}})
          .attr('transform', function(d) { return 'translate(' + arcGenerator.centroid(d) + ')';  })
          .attr('y', '-0.4em')
          .style('text-anchor', 'middle')
          .style('font-size', 10)
          .style('font-weight', 'bold')
    
    
    //Enlever du graphique un section s'il n'y a pas de données pour cette catégorie
    path.exit().remove()

    }
    updateEmotion(dataTotal)

   

    // Construction du deuxième PieChart pour les catégories
    var pie = d3.pie()
        .value(function(d) {return d.value})
    var dataType_ready = pie(d3.entries(dataType))
    
    svg
      .selectAll('#categoriePiechart').selectAll('path')
      .data(dataType_ready)
      .enter()
      .append('path')
      .attr('d', arcGenerator)
      .attr('id', function(d){return(d.data.key)})
      .attr('fill', function(d){ return(colorType(d.data.key)) })
      .attr('stroke', 'white')
      .style('stroke-width', '2px')
      .style('opacity', 0.8)
      // Ajout des animations
      .on('mouseover', function(){
          d3.select(this)
            .style('opacity', 1);
          })
      .on('mouseout', function(){
          d3.select(this)
            .style('opacity', 0.8)
          })
      //Ajout d'un événement : lorsque l'on clique sur une partie du graphique, cela nous ouvre un nouveau PieChart avec la part des bonnes, mauvaise et nouvelles neutre pour cette catégorie
      .on('click', function(d){
        for (let key in dataType) {
            if(key == this.id){
                console.log(this.id)
                updateEmotion(getNewData(this.id))
            }
        }
        })
      .on('dblclick', function(d){
        updateEmotion(dataTotal)
      })
    
    //Ajout du nom de chaque section du graphique ainsi que le nombre total de nouvelles par catégorie
    svg
    .selectAll('#categoriePiechart').selectAll('text')
    .data(dataType_ready)
    .enter()
    .append('text')
    .text(function(d){ return d.data.key})
      .attr('transform', function(d) { return 'translate(' + arcGenerator.centroid(d) + ')';  })
      .attr('y', '-0.2em')
      .style('text-anchor', 'middle')
      .style('font-size', 13)
      .style('font-weight', 'bold')
      .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append('tspan')
        .attr('x', 0)
        .attr('y', '0.9em')
        .attr('fill-opacity', 0.7)
        .attr('font-weight', 'normal')
        .attr('font-size', 12)
        .text(d => d.data.value.toLocaleString()));

        });
