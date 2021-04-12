import create2api
import time

bot = create2api.Create2()

time.sleep(1)

bot.start()
bot.safe()

bot.drive_straight(200)
time.sleep(2)

bot.turn_counter_clockwise(200)
time.sleep(1)

bot.drive_straight(200)
time.sleep(8)

bot.turn_clockwise(200)
time.sleep(1)

bot.drive_straight(200)
time.sleep(15)

bot.drive_straight(0)

bot.destroy()

32
64
110
