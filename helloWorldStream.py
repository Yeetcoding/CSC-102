from time import *

sourceString = "Hello, World!"
displayString = ""
loopCMain = 0

def multiPrint(inputString, reps, delay):
    loopCMinor = 0
    while (loopCMinor != reps):
        print(inputString)
        sleep(delay)
        loopCMinor += 1
    
while (len(displayString) != len(sourceString)):
    displayString = displayString + sourceString[loopCMain]
    multiPrint(displayString, 3, 0.05)
    loopCMain += 1

