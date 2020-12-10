while True:
    #print("Light Level: " + input.light_level())
    if input.light_level() >= 14:
        light.clear()
    elif input.light_level() < 10:
        light.set_all(light.rgb(255, 255, 0))
    else:
        light.set_all(light.rgb(0, 0, 255))