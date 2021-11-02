function radio(){
    
    var n = document.getElementById('numVariaveis').value;
    var content = document.getElementById('radioContent');
    content.innerHTML = '';

    for(var i = 0; i < Math.pow(2, n); i++){
        var div = document.createElement('div');
        var input = document.createElement('input');
        input.type = 'radio';
        input.id = i.toString();
        var label = document.createElement('label');
        label.for = i.toString();
        label.innerHTML = i;
    
        div.appendChild(input);
        div.appendChild(label);

        content.appendChild(div);
    }
    
}

