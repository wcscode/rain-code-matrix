window.addEventListener('load', () =>{

    const chacracters = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    const CHAR_SIZE = canvas.clientWidth / canvas.clientHeight + 10;
    const TOTAL_CHARACTER_X =  canvas.clientWidth /  CHAR_SIZE
    const TOTAL_CHARACTER_Y = canvas.clientHeight /  CHAR_SIZE
    //let fallRate = 0.8;
    let fallY = [];

    for(let x = 0; x < TOTAL_CHARACTER_X; ++x) 
        fallY[x] = Math.floor(Math.random() * TOTAL_CHARACTER_Y);

    const fps = 15;
   
    animate = () => {

        setTimeout(()=>{
            ctx.fillStyle = 'rgba(0,0,0,0.03)';
          
            ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

            ctx.font = CHAR_SIZE + 'px monospace';         
            
            for(let x = 0; x < TOTAL_CHARACTER_X; ++x) 
            { 
                const charRandomIndex = Math.floor(Math.random() * chacracters.length);    
                const initialFall = fallY[x] * CHAR_SIZE; 
                
                ctx.fillStyle = 'rgba(0,0,0,1)';
                ctx.fillRect(CHAR_SIZE * x - CHAR_SIZE * .5, initialFall - CHAR_SIZE, CHAR_SIZE, CHAR_SIZE);

                ctx.textAlign="center";
                ctx.fillStyle = '#32fb3a';                    
                ctx.fillText(chacracters[charRandomIndex], CHAR_SIZE * x, initialFall);

              //  ctx.shadowColor = "red";
                ctx.fillStyle = '#ffffff';              //  ctx.shadowBlur = 1;
                ctx.fillText(chacracters[charRandomIndex], CHAR_SIZE * x, initialFall + CHAR_SIZE);

                fallY[x]++;  
                
                if(fallY[x] > TOTAL_CHARACTER_Y)
                fallY[x] = 0;
            }

            requestAnimationFrame(animate);
        }, 1000/fps);
    }

    animate(0);
});
