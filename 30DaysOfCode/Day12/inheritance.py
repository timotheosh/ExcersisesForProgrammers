#!/usr/bin/python

class Person:
    def __init__(self, firstName, lastName, idNumber):
        self.firstName = firstName
        self.lastName = lastName
        self.idNumber = idNumber
    def printPerson(self):
        print("Name:", self.lastName + ",", self.firstName)
        print("ID:", self.idNumber)

class Student(Person):
    #   Class Constructor
    #
    #   Parameters:
    #   firstName - A string denoting the Person's first name.
    #   lastName - A string denoting the Person's last name.
    #   id - An integer denoting the Person's ID number.
    #   scores - An array of integers denoting the Person's test scores.
    #
    # Write your constructor here
    def __init__(self, firstName, lastName, id, scores):
        self.firstName = firstName
        self.lastName = lastName
        self.id = id
        self.scores = scores

    #   Function Name: calculate
    #   Return: A character denoting the grade.
    #
    # Write your function here
    def calculate(self):
        total = 0
        for x in self.scores:
            total += x
        avg = total / len(self.scores)
        if avg > 89:
            grade = 'O'
        elif avg > 79:
            grade = 'E'
        elif avg > 69:
            grade = 'A'
        elif avg > 54:
            grade = 'P'
        elif avg > 39:
            grade = 'D'
        else:
            grade = 'T'
        return grade

    def printPerson(self):
        print("Name: {}, {}".format(self.lastName, self.firstName))
        print("ID: {}".format(self.id))

line = input().split()
firstName = line[0]
lastName = line[1]
idNum = line[2]
numScores = int(input()) # not needed for Python
scores = list( map(int, input().split()) )
s = Student(firstName, lastName, idNum, scores)
s.printPerson()
print("Grade:", s.calculate())
