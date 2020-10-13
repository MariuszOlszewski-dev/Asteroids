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
        Game.layout();

        window.addEventListener('resize', Game.layout, false);

        document.body.appendChild(Game.canvas);

        Game.ship = new Ship();

        window.addEventListener('keydown',Game.onKey, false);
        window.addEventListener('keyup',Game.onKey, false);

        Game.animationLoop();
    },
    onKey: function(ev){
        if(ev.keyCode==32 || ev.keyCode==37 || ev.keyCode==38 || ev.keyCode==39){

            if(ev.type=='keydown' && !Game['key_'+ev.keyCode]){
                Game['key_'+ev.keyCode]=true;
                if(ev.keyCode==37){
                    Game.key_39=false;
                }
                else if(ev.keyCode==39){
                    Game.key_37=false;
                }
            }
            else if(ev.type=='keyup'){
                Game['key_'+ev.keyCode]=false;            
            }
        }
    },

    //Ustawienie wielkości okna
    layout:function(ev){
        VAR.W = window.innerWidth;
        VAR.H = window.innerHeight;
        //dopasownie elementów do wielkości okna (dodanie elem odniesienie czyli zawsze krótszego boku)
        VAR.d = Math.min(VAR.W, VAR.H);
        //Update wilkości Canvas
        Game.canvas.width = VAR.W;
        Game.canvas.height = VAR.H;
        //Za każdym razem jak zmieniamy wielkosć canvas to wszystko co ustawialiśmy(wypełnienie itp) w canvas zawsze sie resetuje. Aby nie definiować ustawień za każdym razem, definiujemy je w funkcji layout.
        Game.ctx.fillStyle = 'white';
        Game.ctx.strokeStyle = 'white';
        Game.ctx.lineWidth = 3;
        Game.ctx.lineJoin = 'round';
    },
    animationLoop:function(time){
        requestAnimationFrame(Game.animationLoop);
        if(time-VAR.lastTime>=1000/VAR.fps){
            VAR.lastTime=time;
            Game.ctx.clearRect(0,0,VAR.W,VAR.H);
            //rysowanie statku
            Game.ship.draw();
            console.log('draw');

        }
    }


}