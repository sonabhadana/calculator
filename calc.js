function add(){
    var act=0, b=0;
    act = f.a.value;
    b = act.charAt(act.length-1);
    if(b=='+' || b=='-'|| b=='/' || b=='*'){
        f.a.value=act.substring(0,act.length-1);
        f.a.value+='+';
    }else{
        f.a.value+='+';
    }
}

function sub(){
    var act=0, b=0;
    act = f.a.value;
    b = act.charAt(act.length-1);
    if(b=='+' || b=='-'|| b=='/' || b=='*'){
        f.a.value=act.substring(0,act.length-1);
        f.a.value+='-';
    }else{
        f.a.value+='-';
    }
}
    function mul(){
    var act=0, b=0;
    act = f.a.value;
    b = act.charAt(act.length-1);
    if(b=='+' || b=='-'|| b=='/' || b=='*'){
        f.a.value=act.substring(0,act.length-1);
        f.a.value+='*';
    }else{
        f.a.value+='*';
    }
}
    function div(){
    var act=0, b=0;
    act = f.a.value;
    b = act.charAt(act.length-1);
    if(b=='+' || b=='-'|| b=='/' || b=='*'){
        f.a.value=act.substring(0,act.length-1);
        f.a.value+='/';
    }else{
        f.a.value+='/';
    }
}

