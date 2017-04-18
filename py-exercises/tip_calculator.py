'''
A tip calculator in Python3
'''

bill_amount = float(input("What was the initial bill amount? "))
service = input("How was the service? \n(good, fair, bad): ")

tip_percents = {'good': .20, 'fair': .15, 'bad': .10}

# calculates print values
tip = bill_amount * tip_percents[service]
total = bill_amount + tip

print("tip amount is: {:.2f}".format(tip))
print("total amount is: {:.2f}".format(total))
