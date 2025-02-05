import time
from flask import Flask
# from flask import jsonify
import requests 
import json 
import create2api

class zoombaClient():
    def __init__(self, addr):
        self.serv_addr = addr

    def get_command(self):
        #get request to post the button press

        response = requests.get('https://'+self.serv_addr)

        data = response.json()

        command = data['Direction']

        print(response.json())
        # jsonify(response.json())

        return command


address='still-fjord-52738.herokuapp.com'

buttonClient = zoombaClient(address)
bot = create2api.Create2()
time.sleep(1)

bot.start()
bot.safe()

while True:
    userCommand = buttonClient.get_command()
#     print(userCommand)
    if userCommand == 'up':
        bot.drive_straight(200)
        time.sleep(0.7)
    elif userCommand == 'down':
        bot.drive_straight(-200)
        time.sleep(0.7)
    elif userCommand == 'left':
        bot.turn_counter_clockwise(200)
        time.sleep(0.1)
    elif userCommand == 'right':
        bot.turn_clockwise(200)
        time.sleep(0.1)
    elif userCommand == 'stop':
        bot.drive_straight(0)
        time.sleep(0.01)


bot.destroy()
