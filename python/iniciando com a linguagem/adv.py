print('********************************')

print('Bem vindo ao jogo de adivinhacao')

print('********************************')

numeroSecreto = 43

chute = input("digite o seu numero: ")


print('voce digitou ', chute)

acertou = (str(numeroSecreto) == chute)
if(acertou):
    print('voce acertou')
else:
    if(float(chute) > float(numeroSecreto)):
        print('voce errou chutou muito alto')
    if(float(chute) < float(numeroSecreto)):
        print('voce errou chutou muito baixo')
    
    
