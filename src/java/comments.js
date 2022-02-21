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
        if($('#name').val().length==0 | $('#data').val().length==0 | $('#bodytext').val().length==0){
            alert("Todos os campos devem ser preenchidos!")
            return
        }
        location.reload(true);
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
        

        
        comment.push(addObj);
        localStorage.setItem('commentsData',JSON.stringify(comment));
        render(addObj);
        $('#name').val('');
        $('#data').val('');
        $('#bodytext').val('');
        
    });
    $('.total').html('comentários totais ='+i);
});


