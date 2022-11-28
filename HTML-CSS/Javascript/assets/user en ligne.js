// if(utilisateur1.enLigne) {
//     if(utilisateur1.typeDeCompte === "normal") {
//         console.log(`Salut ${utilisateur1} !`);
//     }
//     else {
//         console.log(`Bienvenue sur votre compte premium ${utilisateur1}`);
//     }
// }

// if(utilisateur2.enLigne) {
//     if(utilisateur2.typeDeCompte === "normal") {
//         console.log(`Salut ${utilisateur2} !`);
//     }
//     else {
//         console.log(`Bienvenue sur votre compte premium ${utilisateur2}`);
//     }
// }

// if(utilisateur3.enLigne) {
//     if(utilisateur3.typeDeCompte === "normal") {
//         console.log(`Salut ${utilisateur3} !`);
//     }
//     else {
//         console.log(`Bienvenue sur votre compte premium ${utilisateur3}`);
//     }
// }
const envoiMessageUtilisateur = (utilisateur)=>{
    if (utilisateur==="normal"){
        console.log(`salut ${utilisateur}`)
    }else{
        console.log(`Bienvenue sur votre compte premium ${utilisateur}`)

    }
    

}
