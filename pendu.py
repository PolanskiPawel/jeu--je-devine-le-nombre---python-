import random

score_file = 'score.txt'

def generate_random_number():
    return random.randint(1, 100)

def read_score():
    try:
        with open(score_file, 'r') as f:
            return int(f.read().strip())
    except FileNotFoundError:
        return 0

def write_score(score):
    with open(score_file, 'w') as f:
        f.write(str(score))

def play_game():
    secret_number = generate_random_number()
    score = read_score()
    while True:
        guess = input("Entrez un nombre : ")
        try:
            guess = int(guess)
            if guess == secret_number:
                print("Félicitations ! Vous avez trouvé le nombre.")
                score += 1
                write_score(score)
                break
            elif guess < secret_number:
                print("Le nombre est plus grand.")
            else:
                print("Le nombre est plus petit.")
        except ValueError:
            print("Veuillez entrer un nombre entier.")

if __name__ == '__main__':
    play_game()
