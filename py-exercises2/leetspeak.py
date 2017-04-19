# converts a paragraph into leetspeak
# leetspeak replaces some letters with numbers

# A => 4
# E => 3
# G => 6
# I => 1
# O => 0
# S => 5
# T => 7

paragraph = "THIS IS MY PARAGRAPH OF TEXT IN ALL CAPS. IT IS A RATHER \
BORING PARAGRAPH, BUT IT NEEDS A BIT MORE TO BE CONSIDERED A PROPER \
PARAGRAPH. LAST SENTENCE HERE."
print("\n")
for char in paragraph:
    if char == "A":
        char = 4
    elif char == "E":
        char = 3
    elif char == "G":
        char = 6
    elif char == "I":
        char = 1
    elif char == "O":
        char = 0
    elif char == "S":
        char = 5
    elif char == "T":
        char = 7
    print(char, end="")
print("\n")
