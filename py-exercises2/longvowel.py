# this program extends the vowels in words with double vowels
# EXP: cheese => cheeeeeseeeee, man => man

# Known Issues:
# 1. Assumes user will enter a valid string
# 2. Assumes word only has one double vowel

string = input("Enter a word: ")
vowels = ("a", "e", "i", "o", "u")
result = string

for i in range(len(string)-1):
    if string[i] in vowels and string[i] == string[i+1]:
        result = string[:i] + (string[i] * 3) + string[i:]

print(result)
