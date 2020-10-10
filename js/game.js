window.onload = function(){
    Game.init();
}
VAR = {
    fps:60,
    W:0,
    H:0,
    lastTime:0,
    lastUpdate:-1,
    rand:function(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    }
}
Game = {
    init:function(){
        Game.canvas = document.createElement('canvas');
        Game.ctx = Game.canvas.getContext('2d');

        document.body.appendChild(Game.canvas);
    },
    //Ustawienie wielkości okna
    layout:function(ev){
        VAR.W = window.innerWidth;
        VAR.W = window.innerHeight;
    //dopasownie elementów do wielkości okna (dodanie elem odniesienie czyli zawsze krótszego boku)
        VAR.d = Math.min(VAR.W, VAR.H);
    //
        Game.canvas.width = VAR.W;
        Game.canvas.height = VAR.H;
    //Za każdym razem jak zmieniamy wielkosć canvas to wszystko co ustawialiśmy(wypełnienie itp) w canvas zawsze sie resetuje.
    Game.ctx.fillStyle = 'white';

}