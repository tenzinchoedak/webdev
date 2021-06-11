import string
import random

letters = string.ascii_letters
numbers = string.digits
char = string.punctuation

print('Welcome to Random Password')

length = int(input('please enter the length of your password! \n'))

all = letters + numbers + char

while True:
 if(length < 11):
   length = int(input('Your password is too short, yout password should have at least 11 character!\n'))
 else:  
    temp = random.sample(all, length)
    password = "".join(temp)
    print("your password: ", password)
    break
