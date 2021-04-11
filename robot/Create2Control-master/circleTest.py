import create2api
import time

bot = create2api.Create2()

bot.start()
bot.safe()

time.sleep(10)

bot.drive(500,500) #units are in mm/s
time.sleep(6) #units are in seconds


bot.drive(0,0)

bot.destroy()
