'''
Python3 program that converts user inputed value in Celsius to Fahrenheit
'''

temp = input("Temperature in C? ")

temp = float(temp) * 9 / 5 + 32

print("{} F".format(temp))
