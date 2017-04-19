# decodes a text ciphered with ROT13

text = "lbh zhfg hayrnea jung lbh unir yrnearq"

for char in text:
    if char == " ":
        print(" ", end="")
    else:
        print(chr((ord(char) - 13 - 97)%26 + 97), end="")

print("\n")
