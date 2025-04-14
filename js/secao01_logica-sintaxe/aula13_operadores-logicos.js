// OPERADORES LÓGICOS
// Utilizados para combinar ou inverter expressões booleanas

// 1. AND (&&)
// Retorna true apenas se as duas expressões forem verdadeiras
console.log(true && true)   // true
console.log(true && false)  // false

const idade = 20
const temCarteira = true

console.log(idade >= 18 && temCarteira)  // true

// 2. OR (||)
// Retorna true se pelo menos uma das expressões for verdadeira
console.log(false || true)   // true
console.log(false || false)  // false

const diaChuvoso = false
const temGuardaChuva = true

console.log(diaChuvoso || temGuardaChuva)  // true

// 3. NOT (!)
// Inverte o valor booleano
console.log(!true)   // false
console.log(!false)  // true

const logado = false
console.log(!logado)  // true

// ------------------------------
// Operadores lógicos também avaliam valores "truthy" e "falsy"

console.log(0 || "valor padrão")  // "valor padrão" (0 é falsy)
console.log("" && "outra coisa") // "" (string vazia é falsy)
console.log("Gabi" && 123)       // 123 (ambos são truthy, retorna o último)

// ------------------------------
// Curiosidade: encadeamento para verificar múltiplas condições
const nome = "Gabrielly"
const senha = "1234"

if (nome === "Gabrielly" && senha === "1234") {
  console.log("Acesso permitido")
} else {
  console.log("Acesso negado")
}

// TABELA VERDADE DOS OPERADORES LÓGICOS

// A tabela verdade é uma forma de visualizar o resultado final
// de operadores lógicos a partir de possíveis combinações de true e false

// AND (&&) é mais restritivo: só retorna true se TUDO for true
// OR (||) é mais flexível: retorna true se ALGUMA coisa for true
// NOT (!) é unário: inverte o valor booleano original

// Esses operadores são muito usados em estruturas condicionais (if, while, etc.),
// validações de formulário, autenticação, lógica de segurança e controle de fluxo

// AND (&&) - Retorna true apenas se ambos os operandos forem true
// A      B      A && B
// true   true   true
// true   false  false
// false  true   false
// false  false  false

// OR (||) - Retorna true se pelo menos um dos operandos for true
// A      B      A || B
// true   true   true
// true   false  true
// false  true   true
// false  false  false

// NOT (!) - Inverte o valor booleano
// A      !A
// true   false
// false  true