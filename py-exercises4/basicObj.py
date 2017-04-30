#!/usr/bin/env python3

'''
practice using objects
'''

class Person():

    friends = []
    greet_count = 0
    ppl_greeted = []

    def __init__(self, name, email, phone):
        self.name = name
        self.email = email
        self.phone = phone

    def __str__(self):
        return 'Person: {} {} {}'.format(self.name, self.email, self.phone)

    def greet(self, other_person):
        try:
            print('Hello {}, I am {}!'.format(other_person.name, self.name))
            self.greet_count += 1
            if other_person.name not in self.ppl_greeted:
                self.ppl_greeted.append(other_person.name)
        except NameError:
            print("You did not save this person as an object")

    def print_contact_info(self):
        print("{0}'s email: {1}, {0}'s' phone number: {2}".format(self.name, self.email, self.phone))

    def add_friend(self, friend):
        self.friends.append(friend)

    def num_friends(self):
        print(len(self.friends))

    def num_unique_ppl_greeted(self):
        print(len(self.ppl_greeted))

    @classmethod
    def make(cls):
        name = input("What's your name?")
        email = input("What's your email?")

        return cls(name, email)

    @staticmethod
    def fix_name(name):
        return name.replace('-', ' ')

if __name__ == "__main__":
    sonny = Person('Sonny', 'sonny@hotmail.com', '483-485-4948')
    jordan = Person('Jordan', 'jordaon@aol.com', '495-586-3456')
    jj = Person('JJ', 'someone@something.com', '010-4114-1176')

    sonny.greet(jordan)
    jordan.greet(sonny)
    sonny.greet(jj)

    sonny.num_unique_ppl_greeted()
