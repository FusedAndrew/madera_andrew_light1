while (true) {
    // print("Light Level: " + input.light_level())
    if (input.lightLevel() >= 125) {
        light.clear()
    } else {
        light.setAll(light.rgb(255, 255, 255))
    }
    
}
