function radi(){
    minitermos = [];

    var n = document.getElementById('numVariaveis').value;
    var content = document.getElementById('radioContent');
    content.innerHTML = '';

    for(var i = 0; i < Math.pow(2, n); i++){
        var div = document.createElement('div');
        var input = document.createElement('input');
        input.type = 'checkbox';
        input.id = i.toString();
        input.addEventListener('click', a(i.toString()) );
        input.name = 0;
       
        var label = document.createElement('label');
        label.for = i.toString();
        label.innerHTML = i;
        
        //div.className ='dontcare';
        div.id = 'div'+i.toString();
        div.appendChild(input);
        div.appendChild(label);

        content.appendChild(div);

        minitermos.push(0);
    }   
    run();
}

var minitermos = [];

a = function onOff(id){
    return () =>{
        div = document.getElementById('div'+id);
        intId = parseInt(id);
        minitermos[intId] += 1;
        //console.log(minitermos)

        div.className = '';
        if(minitermos[intId]% 3 == 2){
            document.getElementById(id).checked = true;
            div.className = 'dontcare';
        }
    }
}


