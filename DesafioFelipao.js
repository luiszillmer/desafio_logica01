//Primeiro Desafio de Lógica de Programação da DIO

//Declaração de Variáveis
let nomeHeroi = "Alpha"
let xp = Math.floor(Math.random() * (15001 -1000) + 1000)

//Teste de condições para verificar em qual nível o herói está
switch (true) {
    case xp >= 1000:
        console.log("O Herói de nome: " + nomeHeroi + "está no nível Ferro")
        break
    case xp > 1000 && xp<2000:
        console.log("O Herói de nome: " + nomeHeroi + "está no nível Bronze")
        break
    case xp >2001 && xp< 5000:
        console.log("O Herói de nome: " + nomeHeroi + "está no nível Prata")
        break
    case xp >5001 && xp<7000:
        console.log("O Herói de nome: " + nomeHeroi + "está no nível Ouro")
        break
    case xp >7001 && xp<8000:
        console.log("O Herói de nome: " + nomeHeroi + "está no nível Platina")
        break
    case xp >8001 && xp<9000:
        console.log("O Herói de nome: " + nomeHeroi + "está no nível Ascendente")
        break
    case xp >9001 && xp<1000:
        console.log("O Herói de nome: " + nomeHeroi + "está no nível Imortal")
        break
    case xp >10001:
        console.log("O Herói de nome: " + nomeHeroi + "está no nível Radiante")
        break
    default:
        console.log("O Herói de nome: " + nomeHeroi + "está no nível zero")
}