import create2api
import time

bot = create2api.Create2()

bot.start()
bot.safe()

time.sleep(10)

bot.drive_straight(100) #units are in mm/s
time.sleep(1) #units are in seconds
#bot should move 0.1m (about 4 inches)

bot.drive_straight(0) #stop moving
time.sleep(30) 
#bot should stop moving for 30s
#Aiden can mark the end point of the bot's path

bot.drive_straight(200) 
time.sleep(1)
#bot should move 0.2m (about 8 inches)

bot.drive_straight(0)
time.sleep(30)
#bot should stop moving for 30s

bot.drive_straight(300)
time.sleep(1)
#bot should move 0.3m (about 12 inches)

bot.drive_straight(0)
time.sleep(120)
#bot should stop moving for 2min

bot.turn_clockwise(200)
time.sleep(1)
#bot should rotate 0.2m in place (not sure what the zoomba's radius is though)

bot.turn_clockwise(0)
time.sleep(60)
#stop moving for 60s
#Aiden can use a protractor or something to see how much it rotated by

bot.turn_counter_clockwise(200)
time.sleep(1)
#bot should rotate 0.2m in place

bot.turn_counter_clockwise(0)
time.sleep(1)
#bot should end up at the angle it started at

bot.destroy()
