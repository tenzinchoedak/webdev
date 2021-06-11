

class userInfo:
    def __init__(self, firstname, lastname, age):
        self.firstname = firstname
        self.lastname = lastname
        self.age = age
    
 
list = []

list.append( userInfo("Brain", "Mohr", 54) )
list.append( userInfo("Bella", "VonRueden", 17) )
list.append( userInfo("Franz", "Raynor", 28) )
list.append( userInfo("Celestino", "Bailey", 61) )

for obj in list:
    print("my name is ", obj.firstname, obj.lastname, " and I am ", obj.age, "years old.")
