#!/usr/bin/env python3

# phone book dictionary
phonebook_dict = {
  'Alice': '703-493-1834',
  'Bob': '857-384-1234',
  'Elizabeth': '484-584-2923'
}

def print_num(name):
    print(phonebook_dict[name])

def add_num(name, number):
    phonebook_dict.update({name:number})

def delete_num(name):
    del phonebook_dict[name]

def change_num(name, number):
    phonebook_dict[name] = number

def print_all():
    for name in phonebook_dict:
        print(name + " : " + phonebook_dict[name])

if __name__ == "__main__":
    print_num('Elizabeth')
    add_num('Kareem', '938-489-124')
    delete_num('Alice')
    change_num('Bob', '968-489-1234')
    print_all()
