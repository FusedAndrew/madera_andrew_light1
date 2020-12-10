while (true) {
    // print("Light Level: " + input.light_level())
    if (input.lightLevel() >= 14) {
        light.clear()
    } else if (input.lightLevel() < 10) {
        light.setAll(light.rgb(255, 255, 0))
    } else {
        light.setAll(light.rgb(0, 0, 255))
    }
    
}
