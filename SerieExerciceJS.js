// Exercice1:

const entierEnChaine = (x)=> {

    console.log(typeof(x)) // here the type is number
 
    let ch= " "+x
    console.log(ch)
    console.log(typeof(ch)) // here the type become string

    //ou bien

    let ch= x.toString()
    console.log(ch)
    console.log(typeof(ch))

}

// tests EX1
entierEnChaine(500)
entierEnChaine(5)*/


// Exercice2

const SommeTableau = (t)=>{
    let som=0
   for(let i=0;i<= t.length;i++){
       som=som+t[i]
    }

    console.log(som)

}
// ou bien


const SommeTableau = (t)=>{
    let som=0
  t.filter(elet=>{
       som+=elet
  })
  console.log("la somme du tableau est "+som)
}

// tests EX2

SommeTableau([1,2,3,4]) 
SommeTableau([0,6,11,-8])  

// remarque sayed lorsque j'ai utilisée boucle for , le resultat pour les 2 tests est NaN
//  Mais avec filter() la fonction ça marche bien et des résultasts des sommes 


// Exercice3

const MoyenneTableau = (t)=>{
    let som=0
 t.filter(elet=>{
  som+=elet
 })
 let moy=som/t.length
 console.log('la moyenne du tableau est ' +moy)
}

// tests EX3
MoyenneTableau([1,2,3,4])  
MoyenneTableau([0,6,11,-8])*/


//Exercice4

T = [
    {
    id : 1, first:'ahmed', last:'ben ali', age : 23, email : 'ahmed.benali@gmail.com', address :'Tunis'
    }, {
    id : 2, first:'aziz', last:'ameri', age : 44, email : 'ahmed.benali@gmail.com', address :'Tunis'
    }, {
    id : 3, first:'khalil', last: 'ben lamine', age : 18, email : 'ahmed.benali@gmail.com', address :'Tunis'
    },
    ] 


const getUserById = (users,id)=>{
  const msg="pas d’utilisateur avec cet ID" 
    users.filter(user=>{
        if(user.id==id){
            return user
        }else{
           return msg
        }
    })

}

// tests EX3 
console.log(getUserById(T,1))
console.log(getUserById(T,20))


// remarque sayed les résultats des tests est undefined  lorsque je remplace return par console.log la fonction marche
// et fait un affichage 


//Exercice5

const  SortUsers= (users)=>{
  
  let OrderedUsers= users.sort()

  console.log(OrderedUsers)
 

 }


 // tests EX5
SortUsers(T)











































