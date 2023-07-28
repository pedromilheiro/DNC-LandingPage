var setaLeft = window.document.getElementById('seta-left')
 var Card1 = window.document.getElementById('card1')
 var Card2 = window.document.getElementById('card2')
 var Card3 = window.document.getElementById('card3')
 var setaRigth = window.document.getElementById('seta-right')

 function rollToRight() {
    Card1.style = "display:none"
    Card3.style = "display:flex"
    setaLeft.style = "display:flex; margin-top:65px"
    setaRigth.style = "display:none"
 }

 function rollToLeft() {
    Card1.style = "display:flex"
    Card3.style = "display:none"
    setaLeft.style = "display:none"
    setaRigth.style = "display:flex; margin-top:52px"
 }