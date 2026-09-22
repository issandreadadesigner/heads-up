input.onGesture(Gesture.LogoUp, function () {
    Index = randint(0, text_list.length - 1)
    basic.showString("" + (text_list[Index]))
})
input.onGesture(Gesture.ScreenUp, function () {
    game.addScore(1)
})
input.onGesture(Gesture.ScreenDown, function () {
    game.removeLife(1)
})
let Index = 0
let text_list: string[] = []
game.startCountdown(30000)
text_list = [
"ant",
"bot",
"cat",
"dog",
"egg",
"fan",
"goat"
]
