import create2api
import time

bot = create2api.Create2()

bot.start()
bot.safe()

time.sleep(10)

bot.drive_straight(200) #units are in mm/s
time.sleep(4) #units are in seconds

bot.turn_clockwise(100) 
time.sleep(2)

bot.turn_clockwise(0) 

bot.destroy()