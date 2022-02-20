function render(dados) {
    var html = "<div class='comentbox'><div class='left-painel-img '></div><div class='right-painel'><span>" + dados.name  + "</span><div class='date'>" + dados.data + "</div><p>" + dados.body + "</p></div><div class='clear clearfix'></div></div>";
    $('#text-menssage').append(html)

}
$(document).ready(function () {
    var comment=[];
        
    if(!localStorage.commentsData){
        localStorage.commentsData = [];
    }else{
        comment=JSON.parse(localStorage.commentsData);
    }
    
    for (var i = 0; i < comment.length; i++) {
        render(comment[i]);
        

    }
    $('#addcomment').click(function () {
        function converdata(){
            const teste=$('#data').val().split('-')
        var dd=teste[2],mm=teste[1],yyyy=teste[0]
        return dd+'/'+mm+'/'+yyyy;
        }
        
        
        var addObj = {
            name: $('#name').val(),
            data: converdata(),
            body: $('#bodytext').val()
        };
        // localStorage.commentsData=JSON.stringify(comment)
        comment.push(addObj);
        localStorage.setItem('commentsData',JSON.stringify(comment));
        render(addObj);
        $('#name').val('');
        $('#data').val('');
        $('#bodytext').val('');

    });

});


