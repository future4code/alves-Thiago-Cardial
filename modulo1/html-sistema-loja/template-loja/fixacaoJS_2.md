function calculaPrecoTotal(quantidade) {
  if (quantidade < 12){
   quantum = quantidade * 1.30
  }
  else if (quantidade >= 12){
    quantum = quantidade * 1.0

  }
  return console.log(quantum)
  }

calculaPrecoTotal(2)