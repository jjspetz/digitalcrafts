#!/usr/bin/env python3

'''
phone_book_app.py
This uses dictionaries and file IO to build a phonebook app
'''

# used for reading and writing python dictionaries
import pickle


# starts the main menu of the program
def menu():
    # This is the basic menu displayed othen by the app
    display = "==================== \n\
               1. Look up an entry \n\
               2. Set an entry \n\
               3. Delete an entry \n\
               4. List all entries \n\
               5. Quit"

    print(display)
    while True:
        try:
            reply = int(input("What do you want to do?: "))
            router(reply)
            break
        except ValueError:
            print("Enter an integer.")

# all menu choices are routed through this function
def router(number):
    if number == 1:
        lookup()
    elif number == 2:
        setEntry()
    elif number == 3:
        deleteEntry()
    elif number == 4:
        listAll()
    elif number == 5:
        quit()
    else:
        menu()

# looks up user entered phone number
def lookup():
    # reads in dictionary
    data = opendict()

    name = input("\nWho's number do you need?\n")

    if name in data.keys():
        print(data[name])
        menu()
    else:
        print("Name not found.")
        menu()

def setEntry():
    # reads in dictionary
    data = opendict()

    # gets user inputed contact info
    name = input("\nEnter a contact name: ")
    phonenumber = input("Enter contact's phone number: ")

    # dump data into new entry
    data[name] = phonenumber
    with open('data.pickle', 'wb') as fh:
        pickle.dump(data, fh)

    menu()

def deleteEntry():
    # reads in dictionary
    data = opendict()

    name = input("\nWho should I delete?: ")
    if name in data:
        # deletes name from data
        del data[name]
        # rewrite data to pickle
        with open('data.pickle', 'wb') as fh:
            fh.seek(0)
            pickle.dump(data, fh)

    else:
        print("Name not found.")

    menu()

def listAll():
    # reads in dictionary
    data = opendict()

    for key, value in data.items():
        print("{} {}".format(key, value))

    menu()

def quit():
    return 0

def opendict():
    try:
        with open('data.pickle', 'rb') as fh:
                return pickle.load(fh)
    except FileNotFoundError:
        print("No dictionay yet.")

if __name__ == "__main__":
    menu()
