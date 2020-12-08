while True:
    #print("Light Level: " + input.light_level())
    if input.light_level() >= 125:
        light.clear()
    else:
        light.set_all(light.rgb(255, 255, 255))