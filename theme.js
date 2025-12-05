const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  root.setAttribute("data-theme", "dark");
}

toggle.addEventListener("click", () => {
 const isDark = root.getAttribute("data-theme") === "dark";

  if (isDark) {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  } else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
});

class Problem {
  constructor(date, problem, fix1, use1, anger1, fix2, use2, anger2, explanation) {
    this.date = date;
    this.problem = problem;
    this.fix1 = fix1;
    this.use1 = use1;
    this.anger1 = anger1;
    this.fix2 = fix2;
    this.use2 = use2;
    this.anger2 = anger2;
    this.explanation = explanation

  }
}

let share = 5;
let maxshare = 15;
let anger = 5;
let maxanger = 15

let problems = [];
problems.push(new Problem("01-01-1990",
  "Félicitations, vous venez d'hériter l'entreprise familiale. Papa était plutôt secret, il était assez étrange. Alors voilà tout. Nous vendons un système d'exploitation! Et je n'ai pas grand chose d'autre à te dire... Alors commencons fort, que faisons nous en premier?",
  "Faire du marketing", 3, 1,
  "Recruter et faire une grande mise à jour", 1, -1,
  "Et voilà! Vos l'avez peut-être vu, mais vos actions ont des conséquences. Prêt pour la suite?"
));
problems.push(new Problem("03-01-1990",
  "La barre bleue indique combien utilisent notre système d'exploitation. Si personne ne l'utilise, l'entreprise coule! Si tout le monde l'utilise, ce sera un monopole, et on va le payer très cher!<br/>"
  + "La barre rouge indique à quel point le public est en colère. S'il deviennent tous fou de colère, je ne donne pas cher de notre peau. Alors ne faisait pas n'importe quoi, d'accord?",
  "D'accord!", 0, -1,
  "Je n'ai pas peur.", +3, +3,
  "Vous apprenez vite, je vous ai déjà tout apris! Faites les bon choix, ne coulez pas l'entreprise (s'il vous plait)."
))
// problems.push(new Problem("22-12-1990",
//   "Mauvaise mise à jour! Il semblerait que la dernière mise à jour ait provoqué des instabilités et pertes de performances dans près d'un tier des systèmes, en plein noël!",
//   "Retirer la mise à jour immédiatement", -1, 1,
//   "Publier un correctif d'ici une à deux semaines", -2, 2,
//   "Dans la première situation vous retirez la mise à jour pour éviter que davantage d’utilisateurs soient impactés.rrus assumez le problème mais évitez un retrait brutal de la mise à jour en promettant un patch rapie pour la deuxième situation ." 
// ));
problems.push(new Problem("17-12-1992",
  "Votre système collecte trop de données selon une enquête publique",
  "Réduire automatiquement la collecte et informer les utilisateurs", 3, 2,
  "Défendre votre collecte en disant qu’elle améliore l’expérience utilisateur", -3, -2,
  "Dans le premier cas lLes médias publient un rapport expliquant que votre OS collecte beaucoup d’informations privée, cepedant dans le deuxième cas vous assumez que la collecte sert à optimiser les services mais cela peut paraître peu éthique..,"
));
problems.push(new Problem("13-10-1993",
  "Un concurrent sort un OS très innovant",
  "Lancer une campagne marketing mettant en avant vos forces", 2, 1,
  "Sortir une mise à jour en beta avec de nouvelles fonctionnalités", 1, 2,
  "Dans le premier cas de figure : plutôt que d’attaquer, vous rappelez au public la stabilité et la compatibilité de votre OS, mais dans le second  cas de figure vous prouvez que vous êtes capables d’innover, mais c’est risqué."
));
problems.push(new Problem("23-06-1995",
  "Les développeurs tiers se plaignent de la complexité d’adaptation de leurs applications",
  "Simplifier le kit de développement (SDK)", 3, -3,
  "Proposer un programme premium payant pour un support technique prioritaire", 1, 3,
  "Dans le premier cas de figure : Vous aidez les développeurs à produire plus facilement pour votre OS, mais dans le second  cas de figure Vous offrez un service haut de gamme, mais cela peut faire polémique.."
));
problems.push(new Problem("02-05-1996",
  "Votre OS consomme trop de batterie sur les portables",
  "Activer automatiquement un mode économie d’énergie strict",  -1, -2,
  "Laisser les utilisateurs choisir le mode d’économie à activer", 2, -1,
  "Pour la première solution, vous diminuez la consommation, mais certaines performances baissent légèrement mais pour la deuxième solution vous permettez plus de liberté mais la plupart ne changeront rien eux-mêmes."
));
problems.push(new Problem("01-11-1997",
  "Les notifications sont trop fréquentes",
  "Réduire automatiquement la fréquence des notifications", 1, -2,
  "Envoyer un message expliquant comment personnaliser les notifications", 1, -1,
  "Dans le premier cas de figure :  Vous ajustez les réglages pour rendre l’expérience plus douce, mais dans le second  cas de figure Vous laissez le contrôle aux utilisateurs, mais certains ne feront rien."
));
problems.push(new Problem("23-01-2000",
  "Une appli préinstallée plante régulièrement",
  "Désinstaller l’appli automatiquement", -1, -3,
  "Publier un mini correctif", +2, -1, 
  "Dans la première partie, C’est radical mais rassurant pour les utilisateurs. Dans l'autre, Vous réparez sans retirer l’application, mais il faut un peu de temps." 
));
problems.push(new Problem("12-12-2001",
  "Les appareils anciens deviennent un peu lents",
  "Activer un mode “performance allégée”", +1, -2,
  "Promettre une optimisation plus tard", -1, +2, 
  "Dans la première partie, Vous faites gagner de la vitesse au prix de quelques effets visuels. Dans l'autre, Vous rassurez, mais vous ne réglez rien immédiatement." 
));
problems.push(new Problem("23-09-2002",
  "Des rumeurs disent que le système consomme beaucoup d'énergie",
  "Répondre publiquement et défendre votre choix design", +2, -1,
  "Déployer un patch mineur améliorant l'autonomie", +1, -1, 
  "Dans la première partie, C’est simple mais apprécié. Dans l'autre, Ce n’est pas énorme mais montre votre bonne volonté." 
));
problems.push(new Problem("11-03-2003",
  "Un concurrent critique publiquement votre interface",
  "Répondre publiquement et défendre votre choix design", +2, -1,
  "Ajouter une option “interface simplifiée”", +1, -1, 
  "Dans la première partie, Cela montre votre confiance. Dans l'autre, Vous proposez une alternative accessible." 
));
problems.push(new Problem("01-10-2004",
  "Certains utilisateurs trouvent la configuration initiale trop longue",
  "Raccourcir l’assistant d’installation", +1, -2,
  "Ajouter un tutoriel vidéo", +2, -3, 
  "Dans la première partie, Vous simplifiez le parcours dès le début. Dans l'autre, Aide supplémentaire mais ne réduit pas le temps nécessaire." 
));
problems.push(new Problem("10-07-2005",
  "Le navigateur intégré manque de fonctionnalités",
  "Ajouter rapidement une petite fonctionnalité demandée", +3, -1,
  "Intégrer un mode “rapide et léger”", +2, +1, 
  "Dans la première partie, Un petit plus qui montre que vous écoutez. Dans l'autre, Ce mode améliore les performances mais ne plais pas à tous." 
));
problems.push(new Problem("18-05-2006",
  "Certains paramètres sont difficiles à trouver",
  "Ajouter une barre de recherche dans les réglages", +2, -2,
  "Publier un guide interactif", +2, -1, 
  "Dans la première partie, Simplifie tout, mais nécessite du travail. Dans l'autre, Une aide visuelle sans modifier l'interface." 
));
problems.push(new Problem("10-10-2007",
  "Des pubs parlent d’un “bug fantôme” dans votre OS",
  "Ignorer les rumeurs", -1, +1,
  "Faire un communiqué rapide démentant la rumeur", +1, -2, 
  "Dans la première partie, Vous ne donnez pas d’importance à une fausse info. Dans l'autre, Vous rassurez immédiatement." 
));
problems.push(new Problem("30-12-2008",
  "Le stockage est trop rempli après une mise à jour",
  "Ajouter un outil de nettoyage automatique", +1, -3,
  "Donner des conseils pour gérer l'espace manuellement", +1, -1, 
  "Dans la première partie, Cela redonne de l’espace facilement. Dans l'autre, c'est utile, mais moins efficace." 
));
problems.push(new Problem("07-06-2009",
  "Le temps de chargement du menu démarre plus lentement",
  "Ajouter une animation pour masquer la lenteur", +1, +1,
  "Promettre une optimisation dans la prochaine version", -1, +2, 
  "Dans la première partie, Vous masquez le temps de chargement avec une animation, ce qui rend l’attente plus agréable sans changer la vitesse réelle. Dans l'autre, Vous rassurez les utilisateurs que le problème sera réglé bientôt, mais rien ne change pour eux immédiatement." 
));
problems.push(new Problem("17-05-2010",
  "L’icône du Wi-Fi met parfois du temps à se mettre à jour",
  "Patch rapide, mais qui consomme un peu plus de batterie", +2, +1,
  "Laisser comme ça pour se concentrer sur un autre problème", -1, +2, 
  "Dans la première partie, Vous corrigez le problème immédiatement, mais le correctif consomme légèrement plus d’énergie sur certains appareils. Dans l'autre, Vous priorisez d’autres bugs plus importants, au risque d’augmenter la frustration des utilisateurs affectés." 
));
problems.push(new Problem("25-03-2011",
  "Des utilisateurs trouvent le nouveau fond d’écran “trop flashy”",
  "Ajouter une option “fond discret”", +1, -1,
  "Garder le fond mais publier une note artistique", +1, +1, 
  "Dans la première partie, Vous laissez le choix aux utilisateurs entre le fond flashy et un fond plus sobre, augmentant leur satisfaction. Dans l'autre,  Vous expliquez votre démarche créative, mais certains restent mécontents." 
));
problems.push(new Problem("07-09-2012",
  "Une fenêtre pop-up apparaît une fois par erreur",
  "Corriger discrètement en tâche de fond", +2, -1,
  "Publier une note d’excuse", +1, +1, 
  "Dans la première partie,  Vous éliminez la fenêtre sans alerter les utilisateurs, ce qui résout le problème rapidement mais de façon invisible. Dans l'autre partie, Vous reconnaissez le bug publiquement, ce qui montre votre transparence mais attire l’attention sur l’erreur." 
));
problems.push(new Problem("03-09-2013",
  "Les widgets météo ne se mettent pas à jour partout",
  "Désactiver temporairement les widgets", -1, +1,
  "Lancer un redémarrage automatique des widgets", +1, +1, 
  "Dans la première partie, Vous retirez les widgets pour éviter que les utilisateurs voient des infos incorrectes, mais cela réduit l’expérience. Dans l'autre, Vous réinitialisez les widgets pour corriger le problème, sans que les utilisateurs n’aient à agir eux-mêmes." 
));
problems.push(new Problem("06-07-2014",
  "Certains raccourcis clavier changent de comportement",
  "Faire une correction partielle", +1, +1,
  "Préparer une révision complète des raccourcis", +2, +3, 
  "Dans la première situation, Vous ajustez seulement les raccourcis les plus utilisés, limitant l’impact tout en améliorant l’expérience. Dans l'autre, Vous proposez une solution globale mais qui prend du temps à être implémentée, frustrant temporairement certains utilisateurs." 
));
problems.push(new Problem("17-02-2015",
  "La batterie se décharge plus vite avec un thème sombre mal optimisé",
  "Désactiver automatiquement le thème sombre", -1, +1,
  "Déployer un mini correctif", +2, -1, 
  "Dans la prremière situation, Vous empêchez l’utilisation du thème pour améliorer l’autonomie, mais vous limitez le choix esthétique des utilisateurs. Dans l'autre, Vous optimisez légèrement le thème sombre, ce qui améliore la batterie sans gêner l’expérience." 
));
problems.push(new Problem("19-11-2016",
  "Un nouvel écran de tutoriel est mal traduit",
  "Ajouter une traduction automatique temporaire", +1, +1,
  "Enlever le tutoriel en attendant la vraie traduction", -2, +2, 
  "Dans la première situation, Vous fournissez une traduction instantanée mais approximative pour aider les utilisateurs immédiatement. Dans l'autre, Vous supprimez le tutoriel pour éviter la confusion, mais certains utilisateurs sont perdus." 
));
problems.push(new Problem("03-08-2017",
  "Le système détecte mal les clés USB très anciennes",
  "Ajouter un mode “compatibilité élargie”", +3, -1,
  "Conseiller d’utiliser des clés plus récentes", -1, +3, 
  "Dans la première situation, Vous permettez à l’OS de mieux gérer les périphériques anciens, améliorant l’expérience sans effort utilisateur. Dans l'autre, Vous ne changez rien mais indiquez la solution pratique aux utilisateurs, ce qui peut frustrer certains." 
));
problems.push(new Problem("20-09-2018",
  "Le système d’onglets du navigateur se réorganise mal",
  "Corriger la logique d’organisation", +2, -1,
  "Ajouter une option “organisation manuelle”", +1, +1, 
  "Dans la première situation, Vous ajustez le système pour que les onglets restent dans l’ordre attendu, améliorant la stabilité. Dans l'autre, Vous laissez les utilisateurs gérer eux-mêmes l’ordre des onglets, donnant plus de contrôle mais moins de simplicité." 
));

problems.push(new Problem("12-01-2019",
  "Des utilisateurs signalent que les notifications sont désormais trop intrusives, les poussant à désactiver toutes les notifications de l'OS.",
  "Réduire la fréquence des notifications", +2, -2,
  "Permettre aux utilisateurs de personnaliser la fréquence des notifications", +3, -1,
  "Dans la première situation, vous apportez une solution rapide pour réduire l'intrusion, mais cela peut nuire à la visibilité des notifications importantes. Dans l'autre, vous offrez un contrôle total à l'utilisateur, mais certains peuvent ne pas ajuster les paramètres correctement."
));

problems.push(new Problem("14-06-2019",
  "Un problème de compatibilité avec des logiciels populaires a fait chuter l'usage de l'OS sur certains marchés.",
  "Proposer une mise à jour de compatibilité", +1, 1,
  "Informer les utilisateurs et leur recommander des alternatives temporaires", -3, +3,
  "Dans la première situation, vous résolvez rapidement le problème, mais la mise à jour pourrait entraîner des bugs supplémentaires. Dans la seconde, vous laissez les utilisateurs s'adapter par eux-mêmes, ce qui peut augmenter la frustration."
));

problems.push(new Problem("27-08-2019",
  "Mauvaise détection des appareils reconditionnés",
  "Prioriser une mise à jour corrective", +3, -1,
  "Reporter la correction", -2, +2, 
  "Dans la première situation, Vous corrigez rapidement l’algorithme de détection pour améliorer le support du matériel reconditionné. Cela montre votre engagement pour le NIRD. Dans l'autre, Vous repoussez la mise à jour, ce qui maintient les problèmes pour beaucoup d’utilisateurs utilisant des appareils reconditionnés." 
));
problems.push(new Problem("29-11-2020",
  "OS trop énergivore",
  "Ajouter un “Mode Sobriété NIRD", +2, +1,
  "Reporter l’optimisation", -3, +2, 
  "Dans la première situation, Ce mode réduit les animations, limite les processus en arrière-plan et optimise l’énergie, ce qui encourage une utilisation responsable. Dans l'autre, Vous préférez sortir de nouvelles fonctionnalités avant d’améliorer l’énergie, ce qui déçoit les utilisateurs qui privilégient la durabilité." 
));
problems.push(new Problem("21-02-2021",
  "L’OS occupe trop de stockage",
  "Réduire la taille du système", +2, -1,
  "Imposer une carte SD pour les anciens appareils", -1, +3, 
  "Dans la première situation, Vous optimisez le système en supprimant des fichiers inutiles et en compressant certains éléments, bénéfique surtout pour les appareils d'occasion. Dans l'autre, Les utilisateurs doivent ajouter un accessoire pour que l’OS fonctionne correctement, ce qui donne l’impression que vous ne prenez pas en compte la réalité des appareils reconditionnés." 
));
problems.push(new Problem("17-03-2022",
  "Manque de traçabilité sur l’origine des appareils",
  "Ajouter une fiche de traçabilité NIRD", +3, +1,
  "Ne rien changer", -2, +2, 
  "Dans la première situation, Vous intégrez dans l’OS une fiche indiquant l’origine, les réparations effectuées et l’état général de l’appareil. Dans l'autre, Cela laisse un manque de transparence, ce qui inquiète les utilisateurs engagés dans une démarche durable." 
));
problems.push(new Problem("06-09-2023",
  "Trop d’applications préinstallées",
  "Proposer une version minimaliste de l’OS", +2, -1,
  "Garder toutes les applications préinstallées", -3, +3, 
  "Dans la première situation, Vous retirez les applications non essentielles, permettant aux appareils plus anciens de mieux fonctionner et réduisant l’impact écologique. Dans l'autre, Cela génère une frustration chez les utilisateurs qui veulent un OS léger compatible avec le reconditionné." 
));
problems.push(new Problem("30-12-2024",
  "Réparabilité insuffisante",
  "Publier des guides de réparation officiels", +1, -1,
  "Garder le design actuel", -2, +2, 
  "Dans la première situation, Vous rendez la réparation plus accessible, ce qui soutient le reconditionnement et augmente la longévité des appareils. Dans l'autre, Vous ne facilitez pas les réparations, ce qui va à l’encontre de l’économie circulaire." 
));
problems.push(new Problem("01-01-2025",
  "Manque d’informations sur la longévité",
  "Ajouter un indicateur de santé du système", +1, -1,
  "Ne pas afficher ces données", -1, +2, 
  "Dans la première situation, Le système affiche l’état de la batterie, du stockage, et des composants critiques, encourageant une utilisation plus durable. Dans l'autre, Les utilisateurs pensent que vous cachez l’état réel de leur appareil. " 
));
let currentProblem = 0;

function chooseSolution(num) {

  if (currentProblem < 0) {
    return;
  }
  if (currentProblem >= problems.length) {
    renderProblem(new Problem(problem.date,
      "Il est temps pour vous de partir, mais vous avez bien mené l'entreprise! Vous avez montré est possible de développer un espace Numérique Inclusif, Responsable et Durable!",
      "Rafraichissez la page pour rejouer", 0, 0,
      "Lissez en bas", 0, 0,
      "Fini"
    ))
  }

  problem = problems[currentProblem];
  if (num === 1) {
    anger += problem.anger1;
    share += problem.use1;
  } else if (num === 2) {
    anger += problem.anger2;
    share += problem.use2;
  }
  isGameOver = analyseStatsAndIsGameOver();
  if (!isGameOver) {
    currentProblem += 1;
    renderProblem(problems[currentProblem]);
  } else {
    renderProblem(new Problem(problem.date,
      "Game Over! Vous n'avez pas réussi à tenir votre entreprise assez longtemps...",
      "Rafraichissez la page pour rejouer", 0, 0,
      "Lissez en bas", 0, 0,
      "Fini"
    ));
    currentProblem = -1;
  }
}

function analyseStatsAndIsGameOver() {
  if (share >= maxshare) {
    share = maxshare;
    anger += 1;
  }
  if (share <= 0) {
    share = 0;
    return true;
  } 
  if (anger >= maxanger) {
    anger = maxanger;
    return true;
  }
  if (anger <= 0) {
    anger = 0;
  }
  return false;
}


function renderProblem(problem) {
  document.getElementById('date').innerHTML = problem.date;
  document.getElementById('problem').innerHTML = problem.problem;
  document.getElementById('fix1').innerHTML = problem.fix1;
  document.getElementById('use1').innerHTML = numberToArrows(problem.use1);
  document.getElementById('anger1').innerHTML = numberToArrows(problem.anger1);
  document.getElementById('fix2').innerHTML = problem.fix2;
  document.getElementById('use2').innerHTML = numberToArrows(problem.use2);
  document.getElementById('anger2').innerHTML = numberToArrows(problem.anger2);
  /*document.getElementById('explanation').innerHTML = problem.explanation;*/

  updateAllBars();
}

renderProblem(problems[currentProblem]);

function updateAllBars() {
  updateBar(document.getElementById('market-bar'), share / maxshare);

  updateBar(document.getElementById('anger-bar'), anger / maxanger);
}

function updateBar(bar, value) {
    // width en % (0 à 100%)
    bar.style.width = (value * 100) + '%';
}

function numberToArrows(num) {
  if (num == 0) return '/';
  if (num < 0) return '<'.repeat(-num);
  return '>'.repeat(num);
}

function increaseBar(barid) {
    let bar = document.getElementById(barid);
    defvalue += 0.1;
    if (defvalue > 1) defvalue = 1;
    updateBar(bar, defvalue);
}

function decreaseBar(barid) {
    let bar = document.getElementById(barid);
    defvalue -= 0.1;
    if (defvalue < 0) defvalue = 0;
    updateBar(bar);
}
