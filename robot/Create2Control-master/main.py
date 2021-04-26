from gpiozero import Button 
from time import sleep
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

        response = requests.get(f"https://{self.serv_addr}/")

        data = response.json()

        command = data['Direction']

        print(response.json())
        # jsonify(response.json())

        return command


address='still-fjord-52738.herokuapp.com'

buttonClient = iagoClient(address)
bot = create2api.Create2()
time.sleep(1)

bot.start()
bot.safe()

while True:
    userCommand = buttonClient.get_command()

    if userCommand == 'up':
        bot.drive_straight(200)
        time.sleep(0.2)
    elif userCommand == 'down':
        bot.drive_straight(0)
        time.sleep(0.2)
    elif userCommand == 'left':
        bot.turn_counter_clockwise(200)
        time.sleep(0.2)
    elif userCommand == 'right':
        bot.turn_clockwise(200)
        time.sleep(0.2)
    elif userCommand == 'stop':
        bot.drive_straight(0)
        time.sleep(0.2)


bot.destroy()
