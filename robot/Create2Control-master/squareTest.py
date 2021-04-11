import create2api
import time

bot = create2api.Create2()

bot.start()
bot.safe()

time.sleep(10)

for x in range(4):

    bot.drive_straight(200) #units are in mm/s
    time.sleep(1) #units are in seconds

    bot.turn_clockwise(200) 
    time.sleep(1)

bot.destroy()