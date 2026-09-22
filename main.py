def on_gesture_logo_up():
    global Index
    Index = randint(0, len(text_list) - 1)
    basic.show_string("" + (text_list[Index]))
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_gesture_screen_up():
    game.add_score(1)
input.on_gesture(Gesture.SCREEN_UP, on_gesture_screen_up)

def on_gesture_screen_down():
    game.remove_life(1)
input.on_gesture(Gesture.SCREEN_DOWN, on_gesture_screen_down)

Index = 0
text_list: List[str] = []
game.start_countdown(30000)
text_list = ["ant", "bot", "cat", "dog", "egg", "fan", "goat"]