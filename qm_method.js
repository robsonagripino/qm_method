// function primeImplicantsChart1(pi, mt){
//     // var tab = document.getElementById('tabela');
//     // tab.innerHTML = null;

//     var tab = document.createElement('table');
//     tab.border = '1';
//     tab.cellpadding= "5";

//     var content = document.getElementById('tableContent');
//     content.appendChild(tab);



//     var primes = document.createElement('text');
//     primes.innerHTML = "Primes";
//     var td = document.createElement('td');
//     td.appendChild(primes);
 
//     var tr = document.createElement('tr');
//     tr.style = "text-align: center";
//     tr.appendChild(td);
 
//     for(var i = 0; i < mt.length; i++){
//         var primes = document.createElement('text');
//         primes.innerHTML = mt[i];
//         var td = document.createElement('td');
//         td.appendChild(primes);
//         tr.appendChild(td);
 
//     }

//     tab.appendChild(tr);
//     for(var i = 0; i < pi.length; i++){
//         var primes = document.createElement('text');
//         primes.innerHTML = pi[i];
//         var td = document.createElement('td');
//         td.appendChild(primes);
 
//         var tr = document.createElement('tr');
//         tr.style = "text-align: center";
//         tr.appendChild(td);
 
//         var c = covered(mt[i]);
     
//         for(var j = 0; j < mt.length; j++){
//             var txt = document.createElement('text');
             
//             txt.innerHTML = '';
//             bin = pi[j].toString(2);
//             bin = qntZeros(bin, varNum);
//             if(inArray(c, bin) != 0){
//                     txt.innerHTML = "X";
                     
//             }   
//             var td = document.createElement('td');
//             td.appendChild(txt);
//             tr.appendChild(td);
//         }
//         tab.appendChild(tr);
//     }
// }

function primeImplicantsChart(pi, mt){
    var tab = document.createElement('table');
    tab.border = '1';
    tab.cellpadding= "5";
    tab.style = 'margin: 15px';


    var content = document.getElementById('tableContent');
    content.appendChild(tab);
 
    var primes = document.createElement('text');
    primes.innerHTML = "Primes";
    var td = document.createElement('td');
    td.appendChild(primes);
 
    var tr = document.createElement('tr');
    tr.style = "text-align: center";
    tr.appendChild(td);
 
    for(var i = 0; i < mt.length; i++){
        var primes = document.createElement('text');
        primes.innerHTML = mt[i];
        var td = document.createElement('td');
        td.appendChild(primes);
        tr.appendChild(td);
 
    }

    tab.appendChild(tr);
    for(var i = 0; i < pi.length; i++){
        var primes = document.createElement('text');
        primes.innerHTML = pi[i];
        var td = document.createElement('td');
        td.appendChild(primes);
 
        var tr = document.createElement('tr');
        tr.style = "text-align: center";
        tr.appendChild(td);
 
        var c = covered(pi[i]);
     
        for(var j = 0; j < mt.length; j++){
            var txt = document.createElement('text');
             
            txt.innerHTML = '';
            bin = mt[j].toString(2);
            bin = qntZeros(bin, varNum);
            if(inArray(c, bin) != 0){
                    txt.innerHTML = "X";            
            }   
            var td = document.createElement('td');
            td.appendChild(txt);
            tr.appendChild(td);
        }
        tab.appendChild(tr);
    }
}
 
function inArray(array, valor){
    var find = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] == valor)
            find = 1;
    }
    return find
}
 
function findPrimeImplicants(tabelas){
    var primes = [];
    for(var i = 0; i < tabelas.length; i++){
        for(var j = 0; j < tabelas[i].length; j++){
            for(var k = 0; k < tabelas[i][j].length; k++){
                 
                if(tabelas[i][j][k][2] == 0){
                    if(inArray(primes, tabelas[i][j][k][1]) == 0)
                        primes.push(tabelas[i][j][k][1]);
                }
            }
        }
    }
    return primes;
}
 
function covered(prime){
    var c = [];
    var traco = [];
    console.log(prime)
    for(var i = 0; i < prime.length; i++){
        if(prime[i] == '-'){
            traco.push(i);
        }
    }
    for(var i = 0; i < Math.pow(2,traco.length); i++){
        var bin = i.toString(2);
        bin = qntZeros(bin, traco.length);
         
        var cov = ''
        var iTraco = 0;
        for(var j = 0; j < prime.length; j++){
            if(prime[j] == '-'){
                cov += bin[iTraco];
                iTraco += 1;
            }else{
                cov += prime[j];
            }
        }
        c.push(cov);
    }
    return c;
}
 
function makeTable1(table){
    // var tab = document.getElementById('tabela');
    // tab.innerHTML = null;
    
    var tab = document.createElement('table');
    tab.border = '1';
    tab.cellpadding= "5";
    tab.style = 'margin: 15px';

    var content = document.getElementById('tableContent');
    content.appendChild(tab);

    var grupos = document.createElement('text');
    grupos.innerHTML = "Grupos";
    var m = document.createElement('text');
    m.innerHTML = "Minitermos";
    var rb = document.createElement('text');
    rb.innerHTML = "Representação <br> binária";

    var tr = document.createElement('tr');

    var td = document.createElement('td');
    td.innerHTML = grupos.innerHTML;
    tr.appendChild(td);
 
    var td = document.createElement('td');
    td.innerHTML = m.innerHTML;
    tr.appendChild(td);
 
    var td = document.createElement('td');
    td.innerHTML = rb.innerHTML;

    tr.appendChild(td);
    tr.style = "text-align: center";
    tab.appendChild(tr);
 
    for(var i = 0; i < table.length; i++){
        var g = document.createElement("td");
        var m = document.createElement("td");
        var rb = document.createElement("td");
        var rv = document.createElement("td");
        var check = document.createElement("td");
        var row = document.createElement('tr');
        var cont = 0;
        for(var k = 0; k < table[i].length; k++){    
            var contentG = document.createElement('text');
            contentG.innerHTML = i; //grupos
            if(cont == 0){
                g.appendChild(contentG);
                cont += 1;}
 
            var contentM = document.createElement('text');
            contentM.innerHTML = table[i][k][0]+'<br>'; //minitermos
            m.appendChild(contentM);
 
            var contentRB = document.createElement('text');
            contentRB.innerHTML = table[i][k][1]+'<br>' //representação binaria
            rb.appendChild(contentRB);
 
            var contentRV = document.createElement('text');
            contentRV.innerHTML = representacaoVar(table[i][k][1])+'<br>';
            rv.appendChild(contentRV);
 
            var contentCHECK = document.createElement('text');
            contentCHECK.innerHTML = table[i][k][2] +'<br>';
            check.appendChild(contentCHECK);
        }
        if(table[i] != 0){
            row.appendChild(g);
            row.appendChild(m);
            row.appendChild(rb);
            row.appendChild(rv);
            row.appendChild(check);
            row.style = "text-align: center";
            tab.appendChild(row);
        }
    }
}
 
// function makeTable(table){
//     var tab = document.getElementById('tabela');
//     tab.innerHTML = null;
 
//             var grupos = document.createElement('text');
//             grupos.innerHTML = "Grupos";
//             var m = document.createElement('text');
//             m.innerHTML = "Minitermos";
//             var rb = document.createElement('text');
//             rb.innerHTML = "Representação binária";
 
//             var tr = document.createElement('tr');
 
//             var td = document.createElement('td');
//             td.innerHTML = grupos.innerHTML;
//             tr.appendChild(td);
         
//             var td = document.createElement('td');
//             td.innerHTML = m.innerHTML;
//             tr.appendChild(td);
         
//             var td = document.createElement('td');
//             td.innerHTML = rb.innerHTML;
//             tr.appendChild(td);
 
//             tab.appendChild(tr);
 
//     for(var i = 0; i < table.length; i++){
//         var cont = 0;
//         for(var k = 0; k < table[i].length; k++){    
//             var grupos = document.createElement('text');
             
//             if(cont == 0){
//                 grupos.innerHTML = i+" ";
//                 cont += 1;
//             }
 
//             var m = document.createElement('text');
//             m.innerHTML = table[i][k][0]+" ";
//             var rb = document.createElement('text');
//             rb.innerHTML = table[i][k][1]+" ";
 
//             var pi = document.createElement('text');
//             pi.innerHTML = representacaoVar(table[i][k][1]);
 
//             var tr = document.createElement('tr');
//             tr.style = "text-align: center";
 
//             var td = document.createElement('td');
//             td.innerHTML = grupos.innerHTML;
//             tr.appendChild(td);
         
//             var td = document.createElement('td');
//             td.innerHTML = m.innerHTML;
//             tr.appendChild(td);
         
//             var td = document.createElement('td');
//             td.innerHTML = rb.innerHTML;
//             tr.appendChild(td);
 
//             var td = document.createElement('td');
//             td.innerHTML = pi.innerHTML;
//             tr.appendChild(td);
 
//             tab.appendChild(tr);
//         }
//     }
// }
 
function representacaoVar(min){
    var variaveis = 'ABCDEFGHIJK';
    var pi = '';
    for(var i = 0; i < min.length; i++){
        if(min[i] == 0)
            pi += variaveis[i]+"'";
        else if(min[i] == 1)
            pi += variaveis[i];
    }
    return pi;
}
 
function marge(mini1, mini2, varNum){
    var marg = "";
    var cont = 0;
    for(var i = 0; i < varNum; i++){
        if(mini1[i] != mini2[i]){
            marg += "-";
            cont += 1;
        }
        else
            marg += mini1[i]; //quando sao iguais
    }
     
    if(cont == 1)
        return marg;
    return "";
}
function copyArray(array1, array2){
    for(var i = 0; i < array2.length; i++){
        array1.push(array2[i]);
    }
    return array1;
}

function contUm(minitermo){
    cont = 0;
    for(var i = 0; i < minitermo.length; i++){
        if(minitermo[i] == '1')
            cont += 1;
    }
    return cont;
}
 
function qntZeros(bin, n){
    for(var i = bin.length ; i < n; i++){
        bin = "0" + bin;
    }
    return bin;
}



var tabelas = [];
var primeImpli = [];

var minitermosSemDontCares = [];
var varNum = 0;

function run(){
    tabelas = [];
    minitermosSemDontCares = [];
    primeImpli = [];


    //Número de variáveis
    varNum = document.getElementById('numVariaveis').value;
    //Minitermos
    var m = document.querySelectorAll('#radioContent > div > input');//[0,1,2,5,6,7];//[0,2,3,5,6,7,9,10,12,13,15];
    

    for(var i = 0; i < m.length;i++){
        if(m[i].checked)
            minitermosSemDontCares.push(parseInt(m[i].id));
    }

    //DontCares
    var dontCares = [];//[2, 9, 15];


    //Minitemos + dontCares
    var minitermos = copyArray([], minitermosSemDontCares);
    minitermos = copyArray(minitermos, dontCares);

    //Minitermos em binário
    var miniBin = [];

    for(var i = 0; i < minitermos.length; i++){
        bin = minitermos[i].toString(2);
        bin = qntZeros(bin, varNum);
        miniBin.push(bin);
    }
    
    //console.log(miniBin);
    

    //STEP 1
    var grupos = [];
    for(var i = 0; i <= varNum; i++){
        grupos.push([]); 
    }
    
    for(var i = 0; i < minitermos.length; i++){
        qnt = contUm(miniBin[i]);
        grupos[qnt].push([minitermos[i].toString(), miniBin[i], 0]); //Minitermos | Representação binária
    }
    
    //makeTable1(grupos);

    //STEP 2


    
    var noMarge = 0;
    
    while(noMarge == 0){
        grupos1 = [];
        for(var i = 0; i <= varNum; i++){
            grupos1.push([]); 
        }
        noMarge = 1;
        for(var i = 0; i < grupos.length - 1; i++){
            for(var j = 0; j < grupos[i].length; j++){
                for(var k = 0; k < grupos[i+1].length; k++){
                    marg = marge(grupos[i][j][1], grupos[i+1][k][1], varNum);
                    if(marg != ""){
                        grupos[i][j][2] = 1; //MARCA OS IMPLICANTES QUE DERAM MATCH
                        grupos[i+1][k][2] = 1;
    
                        noMarge = 0;
                        qnt = contUm(marg);
                        m = (grupos[i][j][0]+", "+grupos[i+1][k][0]);
                        grupos1[qnt].push([m, marg, 0]);
                    }
    
                }
            }
        }
        tabelas.push(grupos);
        //mostrar em cada etada;
        grupos = grupos1;
    
    }

    primeImpli = findPrimeImplicants(tabelas);
    
    document.getElementById('tableContent').innerHTML =  '';
    for(var tabs = 0; tabs < tabelas.length; tabs++)
        makeTable1(tabelas[tabs]);

    primeImplicantsChart(primeImpli, minitermosSemDontCares);
}