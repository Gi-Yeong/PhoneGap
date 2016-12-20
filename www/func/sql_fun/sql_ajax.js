function mysqlget(){
    $("#test_table2").empty();
    $.ajax({
        url : "http://203.236.209.217:8070/inp/getmyJsonp",
        dataType: "jsonp",
		jsonp : "callback",
        jsonpCallback: "my",
        beforeSend: function(){
            $.mobile.loading('show', {text:"잠시만 기다려주세요.", textonly:true, textVisible: true});
        },
        complete: function(){
            $.mobile.loading('hide');
        },
        success : function(msg) {
        var alist=msg.result_list;
        for(var i=0; i< alist.length; i++)
        {
            table_td='';
            table_td = '<tr><td>' + alist[i].ID + '</td>'
                    + '<td>' + alist[i].Name + '</td>'
                    + '<td>' + alist[i].District + '</td>'
                    + '<td>' + alist[i].Population + '</td></tr>';
                    $("#test_table2").append(table_td);
            }//for
        },
        error:function(jqXHR,textStatus){
            alert(textStatus +":"+jqXHR.status);
        }
    });
    return false;
};

function listget(){
        $("#test_table").empty();
        $.ajax({
            url : "http://203.236.209.217:8070//inp/getorcJsonp",
            dataType: "jsonp",
            jsonp : "callback",
            jsonpCallback: "my",
            beforeSend: function(){
                $.mobile.loading('show', {text:"잠시만 기다려주세요.", textonly:true, textVisible: true});
            },
            complete: function(){
                $.mobile.loading('hide');
            },
            success : function(msg) {
               var alist=msg.result_list;
              /*  alert(alist);*/
                for(var i=0; i< alist.length; i++)
                    {
                        table_td='';
                        table_td = '<tr><td>' + alist[i].sabun + '</td>'
                                + '<td>' + alist[i].name + '</td>'
                                + '<td>' + alist[i].nalja + '</td>'
                                + '<td>' + alist[i].pay + '</td></tr>';
                        $("#test_table").append(table_td);
                    }//for
            },
            error:function(jqXHR,textStatus){
                alert(textStatus +":"+jqXHR.status);
            }
        });
        return false;
};
