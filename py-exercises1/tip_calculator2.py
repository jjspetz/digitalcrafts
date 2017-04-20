'''
A tip calculator in Python3 version 2.0
adds the ability to divide the check by the number of people
'''

bill_amount = float(input("What was the initial bill amount? "))
service = input("How was the service? \n(good, fair, bad): ")
people = int(input("Amongst how many people will the bill be split? "))

tip_percents = {'good': .20, 'fair': .15, 'bad': .10}

# calculates print values
tip = bill_amount * tip_percents[service]
total = bill_amount + tip

print("tip amount is: {:.2f}".format(tip))
print("total amount is: {:.2f}".format(total))
print("amount per person: {:.2f}".format(total/people))
