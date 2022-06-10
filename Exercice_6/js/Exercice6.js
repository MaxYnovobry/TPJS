let paniers = document.querySelectorAll('.ajouter_panier');
let ElementPaniers = localStorage.getItem("produitsdanslepanier");
let produit = [
    {
        nom:'Pepe',
        tag:'peluche_pepe_1',
        prix: 25,
        danspanier: 0,
        id : 0,
    },
    {
        nom:'Pikachu',
        tag:'pepe_pikachu',
        prix: 42,
        danspanier: 0,
        id : 1,
    },
    {
        nom:'Kermit',
        tag:'kermit',
        prix: 34,
        danspanier: 0,
        id : 2,
    }
]


for (let i=0; i < paniers.length; i++) {
    paniers[i].addEventListener('click', () => {
        nombreDePaniers(produit[i]);
        prixTotal(produit[i])
        alert("Vous avez ajouté un produit au panier")
    })
}

function KeepPanier() {
    let Produits = localStorage.getItem('nombreDePaniers');

    if (Produits) {
        document.querySelector('.panier span').textContent = Produits;
    }
}



function nombreDePaniers(produit) {

    let Produits = localStorage.getItem('nombreDePaniers');
    Produits = parseInt(Produits);

    if (Produits) {
        localStorage.setItem('nombreDePaniers', Produits + 1 );
        document.querySelector('.panier span').textContent = Produits + 1;
    } else {
        localStorage.setItem('nombreDePaniers', 1)
        document.querySelector('.panier span').textContent = 1;
    }

    putProducts(produit)
}


function putProducts(produit){
    let ElementPaniers = localStorage.getItem('produitsdanslepanier')
    ElementPaniers = JSON.parse(ElementPaniers)

    if(ElementPaniers != null) {
        if (ElementPaniers[produit.tag] === undefined) {
            ElementPaniers ={
                ...ElementPaniers,
                [produit.tag] : produit
            }
        }
        ElementPaniers[produit.tag].danspanier += 1
    } else {
        produit.danspanier = 1;
        ElementPaniers = {
            [produit.tag]:produit
        }
    }
    localStorage.setItem("produitsdanslepanier", JSON.stringify(ElementPaniers))
}

function prixTotal(produit) {

    let PrixDuPanier = localStorage.getItem('prixTotal')

    if (PrixDuPanier != null) {
        PrixDuPanier = parseInt(PrixDuPanier)
        localStorage.setItem("prixTotal", PrixDuPanier + produit.prix)
    } else {
        localStorage.setItem("prixTotal", produit.prix);
    }
}

function showPanier(){
    let ElementPaniers = localStorage.getItem("produitsdanslepanier");
    ElementPaniers = JSON.parse(ElementPaniers)
    let contenuProduits = document.querySelector(".produits");
    let PrixDuPanier = localStorage.getItem('prixTotal')
    if(ElementPaniers && contenuProduits){
        Object.values(ElementPaniers).map(item => {
            contenuProduits.innerHTML += `
        <div class="content">
            <div class="produit">
                <img src="../img/${item.tag}.jpg">
                <span>${item.nom}</span>
            </div>
            <div class="prix_content">
                ${item.prix}
            </div>
            <div class="quantite_content">
                <span>${item.danspanier}</span>
            </div>
            <div class="totale_content">
                ${item.danspanier * item.prix}
            </div>
          </div>   
          `
        });
            contenuProduits.innerHTML += `
                <div class="contenu_panier">
                    <h4 class="totale_panier_title">
                        TOTAL :
                    </h4>
                    <h4 class="totale_panier">
                        $${PrixDuPanier},00
                    </h4>
                </div>
                `
    }
}

KeepPanier();
showPanier();