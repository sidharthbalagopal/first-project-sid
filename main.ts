/**
 * scorer
 * 
 * - 2 players
 * 
 * - score increases by 1
 * 
 * - tell score of both player
 * 
 *  -if player reaches 5 points he/she wins
 */
input.onButtonPressed(Button.A, function () {
    p1_score += 1
    if (p1_score) {
        basic.showString("d wins!")
    }
    p1_score = 0
    p2_score = 0
})
input.onButtonPressed(Button.AB, function () {
    p1_score += 1
    if (p2_score) {
        basic.showString("S wins!")
    }
    p1_score = 0
    p2_score = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showString("s")
    basic.showNumber(p1_score)
    basic.showString("d")
    basic.showNumber(p1_score)
})
let p2_score = 0
let p1_score = 0
p1_score = 10
p2_score = 10
