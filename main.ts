input.onGesture(Gesture.LogoUp, function on_gesture_logo_up() {
    
    Index = randint(0, text_list.length - 1)
    basic.showString("" + text_list[Index])
})
input.onGesture(Gesture.ScreenUp, function on_gesture_screen_up() {
    game.addScore(1)
})
input.onGesture(Gesture.ScreenDown, function on_gesture_screen_down() {
    game.removeLife(1)
})
let Index = 0
let text_list : string[] = []
game.startCountdown(30000)
text_list = ["ant", "bot", "cat", "dog", "egg", "fan", "goat"]
