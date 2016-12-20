// 마지막것 1Ea 검출작업..
var selectLastVm70 = function (callback) {
    myDB.transaction(function(transaction) {
        transaction.executeSql("SELECT j_date, j_no FROM Vm70 ORDER BY j_date DESC, j_no DESC"
            , []
            , function(tx, result) {
                var dataLength = result.rows.length;
                if(dataLength > 0){
                    callback(result.rows.item(0).j_no);
                }else{
                    //return 0;
                    callback(0);
                };
              }
            , function(error) {
                alert("Error occurred while getting the data.");
            }
        );
    }); 
};

// 판매처마스타 생성
var createTableJm40 = function(callback) {
	myDB.transaction(function(transaction) {
        transaction.executeSql("CREATE " +
                   "TABLE IF NOT EXISTS " +
                   "Jm40 (code text not null primary key, " +  // 사용자코드
							   "title1     text, "    +  // 판매처상호
							   "bbigo      text, "    +  // 단가번호      
							   "tel1       text, "    +  // 전화번호        
							   "address    text, "    +  // 사업장주소  	
							   "number     text, "    +  // 사업자벚호 
							   "name       text, "    +  // 대표자명
 							   "gubun      text, "    +  // 활동여부         
							   "lastdan    text, "    +  // 최종단가 사용여부			
							   "moneyA5    integer "  +  // 현재미수금
							   ")",  
			[],
            function(tx, result) {
                //alert("Business table created successfully.");
				callback(true);
            }, 
            function(error) {
                alert("(jm40) Error occurred while creating the table.");
				callback(false);
            }
        );
    });
};

// 거래처마스타 삭제하기..
var dropTableJm40 = function(){
    myDB.transaction(
        function(transaction) {
        // Define delete query
        var executeQuery = "DROP TABLE IF EXISTS jm40";
        transaction.executeSql(executeQuery, []
            , function(tx, result) {   // On success
                 alert('Table(jm40) deleted successfully(성공!..).');
            },
            function(error){     // On error                               
                 alert('Error(연락요망!..) occurred while droping the table.'); 
            }
        );
    });
};

// 거래처마스타 이름으로 검색
var selectJm40Title1 = function(pTitle1, callback) {
	// 이것은 index.html에서 정의한 것을 사용해야 하는데... <확인해봐야됨>
	jm40Array = null;
	myDB.transaction(function(transaction) {
        transaction.executeSql("select * from jm40 where (title1 like '%" + pBarCode + 
							   "%')"
            , []
            , function(tx, result) {
                var dataLength = result.rows.length;
                if(dataLength > 0){
					for (var i=0; i<dataLength; i++) {
						var jm40Info = new Object();
						
						jm40Info.code    = result.rows.item(i).code;
						jm40Info.title1  = result.rows.item(i).title1;
						jm40Info.bbigo   = result.rows.item(i).bbigo;
						jm40Info.tel1    = result.rows.item(i).tel1;
						jm40Info.address = result.rows.item(i).address;
						jm40Info.number  = result.rows.item(i).number;
						jm40Info.name    = result.rows.item(i).name;
						jm40Info.gubun   = result.rows.item(i).gubun;
						jm40Info.lastdan = result.rows.item(i).lastdan;
						jm40Info.moneyA5 = result.rows.item(i).moneyA5;
						
						jm40Array.push(jm40Info);
					};
					callback(true);
                }else{
                    //alert("No business found having this business id."); 
					callback(true);
                }
              }
            , function(error) {
                alert("Error occurred while getting the data.");
				callback(false);
            }
        );
    }); 
};

// 상품마스타 생성
var createTableJm20 = function(callback) {
	myDB.transaction(function(transaction) {
        transaction.executeSql("CREATE " +
                   "TABLE IF NOT EXISTS " +
                   "Jm20 (jycode text not null primary key, " +  // 사용자코드
							   "jname      text, "       +  // 상품명
							   "jwxt       text, "       +  // 규격      
							   "jchk       text, "       +  // 종류(+:과세, -:면세)     
							   "jgubun     text, "       +  // 구분(활동여부)        
							   "jea        integer, "    +  // 입수  	
							   "jwdan1     integer, "    +  // 별도판매가 
							   "jwdan2     integer, "    +  // 포함판매가
 							   "jsdan2     integer, "    +  // 소비자가         
							   "jbcode1    text, "       +  // 낱개바코드		
							   "jbcode2    text "        +  // 박스바코드
							   ")",  
			[],
            function(tx, result) {
                //alert("Business table created successfully.");
				callback(true);
            }, 
            function(error) {
                alert("(jm20) Error occurred while creating the table.");
				callback(false);
            }
        );
    });
};

// 상품마스타 삭제하기..
var dropTableJm20 = function(){
    myDB.transaction(
        function(transaction) {
        // Define delete query
        var executeQuery = "DROP TABLE IF EXISTS jm20";
        transaction.executeSql(executeQuery, []
            , function(tx, result) {   // On success
                 alert('Table(jm20) deleted successfully(성공!..).');
            },
            function(error){     // On error                               
                 alert('Error(연락요망!..) occurred while droping the table.'); 
            }
        );
    });
};

// 바코드로 정학하게 검색..
var selectJm20BarCode1 = function(pBarCode, callback) {
	
	jm20Array = null;
	
	myDB.transaction(function(transaction) {
        transaction.executeSql("select * from jm20 where (jbcode1 = ?) or (jbcode2 = ?)"
            , [pBarCode, pBarCode]
            , function(tx, result) {
                var dataLength = result.rows.length;
                if(dataLength > 0){
                    //var businessName = result.rows.item(0).j_title;
                    //alert("이름은 := " + businessName);
					callback(true);
                }else{
                    //alert("No business found having this business id."); 
					callback(true);
                }
              }
            , function(error) {
                alert("Error occurred while getting the data.");
				callback(false);
            }
        );
    }); 
};


// 바코드로 Like 검색
var selectJm20BarCode1 = function(pBarCode, callback) {
	
	myDB.transaction(function(transaction) {
		
        transaction.executeSql("select * from jm20 where (jbcode1 like '%" + pBarCode + 
							   "%') or (jbcode2 like '%" + pBarCode + "%')"
            , []
            , function(tx, result) {
                var dataLength = result.rows.length;
                if(dataLength > 0){
					for (var i=0; i<dataLength; i++) {
						
					};
					callback(true);
                }else{
                    //alert("No business found having this business id."); 
					callback(true);
                }
              }
            , function(error) {
                alert("Error occurred while getting the data.");
				callback(false);
            }
        );
    }); 
};

// 테이블생성하기.. <없을때만!..>
//function createVm70Table() {
var createTableVm70 = function (callback) {
    myDB.transaction(function(transaction) {
        transaction.executeSql("CREATE " +
                   "TABLE IF NOT EXISTS " +
                   "Vm70 (j_number text not null primary key, " +  // 명세표번호  
							   "j_code    text, "    +  // 판매처코드  (사용자코드만사용)
							   "j_title   text, "    +  // 상호           
							   "j_schk    text, "    +  // 전송여부        
							   "j_date    text, "    +  // 발행일자  		
							   "j_time    text, "    +  // 발행시간         
							   "j_memo1   text, "    +  // 메모사항			
							   "j_no      integer, " +  // 발행순서			
							   "j_gunsu   integer, " +  // 작업건수			
							   "j_money1  integer, " +  // 공급가액			
							   "j_money2  integer, " +  // 부가세액			
							   "j_money3  integer, " +  // 합계금액			
							   "j_money4  integer, " +  // 입금합계			
							   "j_money5  integer, " +  // 미수할인(에누리)  
							   "j_money6  integer"   +  // 외상판매			
							   ")",  
			[],
            function(tx, result) {
                //alert("Business table created successfully.");
				callback(true);
            }, 
            function(error) {
                alert("(Vm70) Error occurred while creating the table.");
				callback(false);
            }
        );
    });
};

// 레코드 1Ea 추가작업
var insertOneVm70 = function(obj, callback){
	
    myDB.transaction(function(transaction) {
        // Define insert query
        var executeQuery = "INSERT INTO Vm70 (j_number, " +
            "j_code, j_title, j_schk, j_date, j_time, j_memo1, " +
			"j_no, j_gunsu, j_money1,  j_money2, j_money3, j_money4, j_money5, j_money6) " +
            "VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
		
        transaction.executeSql(executeQuery 
			, [obj.j_number, obj.j_code,   obj.j_title, 
			   obj.j_schk,   obj.j_date,   obj.j_time,   obj.j_memo1, 
			   obj.j_no,     obj.j_gunsu,  obj.j_money1, obj.j_money2, 
			   obj.j_money3, obj.j_money4, obj.j_money5, obj.j_money6]
            , function(tx, result) {   // On success
				alert("Vm70 data inserted successfully.");
            },

            function(error){     // On error                               
                 /*console.log('Error occurred while inserting business data.'); */
                alert("Error occurred while inserting Vm70 data.");
            }
        );
    });
};

// 1Ea 검출작업.. <반드시 있어야됨>
var selectOneVm70 = function(pj_number, callback) {
    myDB.transaction(function(transaction) {
        transaction.executeSql("SELECT * FROM Vm70 WHERE j_number = ?"
            , [pj_Number]
            , function(tx, result) {
                var dataLength = result.rows.length;
                if(dataLength > 0){
                    //var businessName = result.rows.item(0).j_title;
                    //alert("이름은 := " + businessName);
					callback(true);
                }else{
                    //alert("No business found having this business id."); 
					callback(false);
                }
              }
            , function(error) {
                alert("Error occurred while getting the data.");
				callback(false);
            }
        );
    }); 
};

// 레코드 수정작업..  이따가.....
var updateOneVm70 = function(callback){
    myDB.transaction(function(
        transaction) {
        // Define update query
        var executeQuery = "UPDATE Vm70 SET " + 
			"j_gunsu  = ?, " +   // 건수
			"j_money1 = ?, " +   // 공급가액
			"j_money2 = ?, " +   // 부가세액
			"j_money3 = ?, " +   // 합계금액
			"j_money4 = ?, " +   // 입금합계
			"j_money5 = ?, " +   // 에누리액
			"j_money6 = ? "  +   // 외상판매
			"WHERE j_number = ?"; 
			
			
        //이것이 뭔지 모르는 상태임..
        //Helper.log(executeQuery);     
		
            transaction.executeSql(executeQuery, [m70_gunsu, m70_money1, m70_money2, m70_money3, 
												  m70_money4, m70_money5, m70_money6, m70_number]
                , function(tx, result) {   // On success
                 //console.log('Business updated successfully.');
				callback(true);
            },
            function(error){     // On error                               
                //console.log('Error occurred while updating the business.'); 
				callback(false);
            }
        );
   });
};

// 레코드 삭제 -> 전송된것만..
var deleteSubVm70 = function(callback) {
    myDB.transaction(
        function(transaction) {
        // Define delete query
        var executeQuery = "DELETE FROM Vm70 where (j_schk = ?)";
        transaction.executeSql(executeQuery, ["Y"]
            , function(tx, result) {   // On success
                 //console.log('All business data deleted successfully.');
				callback(true);
            },
            function(error){     // On error                               
                 //console.log('Error occurred while deleting the business data.'); 
				callback(false);
            }
        );
    });
};

// 레코드 삭제.. 하나만
var deleteOneVm70 = function(pj_number, callback){
    myDB.transaction(
        function(transaction) {
        // Define delete query
        var executeQuery = "DELETE FROM Vm70 WHERE j_number = ?";
        transaction.executeSql(executeQuery, [pj_number]
            , function(tx, result) {   // On success
                 //console.log('All business data deleted successfully.');
				callback(true);
            },
            function(error){     // On error                               
                 //console.log('Error occurred while deleting the business data.'); 
				callback(false);
            }
        );
    });
};

// 테이블삭제..
var dropTableVm70 = function(){
    myDB.transaction(
        function(transaction) {
        // Define delete query
        var executeQuery = "DROP TABLE IF EXISTS Vm70";
        transaction.executeSql(executeQuery, []
            , function(tx, result) {   // On success
                 alert('Table(Vm70) deleted successfully(성공!..).');
            },
            function(error){     // On error                               
                 alert('Error(연락요망!..) occurred while droping the table.'); 
            }
        );
    });
};

// 전부 검출작업.. ("A, Y, N" -> 전송한것, 안한것)
var selectVm70All = function(pj_schk, callback) {
    var varSql = "SELECT * FROM Vm70 WHERE (j_number <> '.') ";
    if (pj_schk != "A") {
        varSql += "and (j_schk = ?)";
    } else {
        varSql += "and (j_schk <> ?)";
        pj_schk = ".";
    };

	//alert("Vm70All -> sql: " + varSql);
	
	// 여기서 만들고 콜백함수로 리턴한다. <일단 이방식을 사용한다>
	//var vm70Array = new Array();
	
	myVm70Array = [];
	myVm70Index = 0;
	
    myDB.transaction(function(transaction) {
        transaction.executeSql(varSql
            , [pj_schk]
            , function(tx, result) {
                var dataLength = result.rows.length;
                if(dataLength > 0){
                    for (var i=0; i<dataLength; i++) {
						var vm70Info = new Object();
						
						vm70Info.j_number = result.rows.item(i).j_number;
						vm70Info.j_code   = result.rows.item(i).j_code;
						vm70Info.j_title  = result.rows.item(i).j_title;
						vm70Info.j_schk   = result.rows.item(i).j_schk;
						vm70Info.j_date   = result.rows.item(i).j_date;
						vm70Info.j_time   = result.rows.item(i).j_time;
						vm70Info.j_memo1  = result.rows.item(i).j_memo1;
						vm70Info.j_no     = result.rows.item(i).j_no;
						vm70Info.j_gunsu  = result.rows.item(i).j_gunsu;
						vm70Info.j_money1 = result.rows.item(i).j_money1;
						vm70Info.j_money2 = result.rows.item(i).j_money2;
						vm70Info.j_money3 = result.rows.item(i).j_money3;
						vm70Info.j_money4 = result.rows.item(i).j_money4;
						vm70Info.j_money5 = result.rows.item(i).j_money5;
						vm70Info.j_money6 = result.rows.item(i).j_money6;
						
						//vm70Array.push(vm70Info);
						myVm70Array.push(vm70Info);
                    }
					//callback(true, vm70Array);
					callback(true);
                }else{
					//callback(true, vm70Array);
					callback(true);
                }
              }
            , function(error) {
                alert("Error(selectVm70All) occurred while getting the data.");
				callback(false);
            }
        );
    });
}; 

// vm71 테이블 생성
var createTableVm71 = function(callback) {
    myDB.transaction(function(transaction) {
        transaction.executeSql("CREATE " +
                   "TABLE IF NOT EXISTS " +
                   "Vm71 (s_number text not null, " +
							   "s_jno    int not null, " +  // 판매순번
							   "s_jcode  text, " +      // 상품고유코드
							   "s_jname  text, " +      // 상품명
							   "s_jwxt   text, " +      // 규격
							   "s_jchk   text, " +      // 종류
							   "s_jea    integer, " +   // 입수
							   "s_jsur1  integer, " +   // 판매량
							   "s_box    integer, " +   // 박스량
							   "s_ea     integer, " +   // 낱개량 
							   "s_jdan1  integer, " +   // 별도가
							   "s_jdan2  integer, " +   // 포함가
							   "s_money1 integer, " +   // 공급가액
							   "s_money2 integer, " +   // 부가세액
							   "s_money3 integer, " +   // 합계금액 
							   "s_jbcode1 text, " +     // 바코드
							   "primary key (s_number, s_jno))",  // 명세표번호, 순번
			[],
            function(tx, result) {
                //alert("Business table created successfully.");
				callback(true);
            }, 
            function(error) {
                alert("Error occurred while creating the table.");
				callback(false);
            }
        );
    });
};

// vm71 레코드 1Ea 추가작업
var insertOneVm71 = function(callback){
    myDB.transaction(function(transaction) {
        // Define insert query
        var executeQuery = "INSERT INTO Vm71 (s_number, s_jno, s_jcode, " + 
			"s_jname, s_jwxt, s_jchk, " +
			"s_jea, s_jsur, " + 
			"s_box, s_ea, s_jdan1, " + 
			"s_jdan2, s_money1, s_money2, " + 
			"s_money3, s_jcode1) " +
            "VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
	
        //이것이 뭔지 모르는 상태임..
        //Helper.log(executeQuery);     

        transaction.executeSql(executeQuery, [m71_number, m71_jno, m71_jcode,
											  m71_jname, m71_jwxt, m71_jchk, 
											  m71_jea, m71_jsur, 
											  m71_jbox, m71_ea, m71_jdan1, 
											  m71_jdan2, m71_money1, m71_money2, 
											  m71_money3, m71_jbcode1]
            , function(tx, result) {   // On success
                //console.log('Business data inserted successfully.');
                //alert("Vm70 data inserted successfully.");
            },

            function(error){     // On error                               
                 /*console.log('Error occurred while inserting business data.'); */
                alert("Error occurred while inserting Vm71 data.");
            }
        );
    });
};

// 레코드 삭제.. 한 품목만..
var deleteOneVm71 = function(ps_number, ps_jno, callback){
    myDB.transaction(
        function(transaction) {
        // Define delete query
        var executeQuery = "DELETE FROM Vm71 WHERE s_number = ? AND s_jno = ?";
        transaction.executeSql(executeQuery, [ps_number, ps_jno]
            , function(tx, result) {   // On success
                 //console.log('All business data deleted successfully.');
				callback(true);
            },
            function(error){     // On error                               
                 //console.log('Error occurred while deleting the business data.'); 
				callback(false);
            }
        );
    });
};

// 한 명세표 전체상품 목록..
var selectOneVm71 = function(ps_number, callback) {
    myDB.transaction(function(transaction) {
        transaction.executeSql("SELECT * FROM Vm71 WHERE s_number = ? ORDERBY s_jno"
            , [pj_Number]
            , function(tx, result) {
                var dataLength = result.rows.length;
                if(dataLength > 0){
                    for (var i=0; i < dataLength; i++) {
						//
						// 작업할것...
                    };
                };
				/*else{
                    //alert("No business found having this business id."); 
                }*/
				callback(true);
              }
            , function(error) {
                //alert("Error occurred while getting the data.");
				callback(false);
            }
        );
    }); 
};

// 테이블삭제..
var dropTableVm71 = function(){
    myDB.transaction(
        function(transaction) {
        // Define delete query
        var executeQuery = "DROP TABLE IF EXISTS Vm71";
        transaction.executeSql(executeQuery, []
            , function(tx, result) {   // On success
                 alert('Table(Vm70) deleted successfully(성공!..).');
            },
            function(error){     // On error                               
                 alert('Error(연락요망!..) occurred while droping the table.'); 
            }
        );
    });
};

// 인자값으로 Array를 가지고 다니는겟 좋을것 같으나 값얻기가 너무 힘들어 메모리변수 로 뺐다.
//function refreshVm70(obj) {
//    var vm70Array = new Array();
//    vm70Array = obj;
	//$('#vm70Body ol').find('li').each(function(i, e) {
	//	$(this).remove();	
	//});
	
function refreshVm70() {
	
	$("#vm70Body ol").empty();
	var list70;
	
	for (var i=0; i<myVm70Array.length; i++) {
		var infoVm70 = new Object();
		infoVm70 = myVm70Array[i];
		
		/*[obj.j_number, obj.j_code,   obj.j_title, 
			   obj.j_schk,   obj.j_date,   obj.j_time,   obj.j_memo1, 
			   obj.j_no,     obj.j_gunsu,  obj.j_money1, obj.j_money2, 
			   obj.j_money3, obj.j_money4, obj.j_money5, obj.j_money6]*/
		
		/*<li id="161230-02"><a href="#"><h3>가나슈퍼</h3>
			<p>(건수:10) (판매금액:50,000) (에누리:0)</p>
			<p>(입금액:20,000) (외상판매:30,000) - 미전송</p>
			<p class="ui-li-aside">02:30 AM</p>
		</a></li>*/
		
		list70 = "";
		list70 += "<li><a href='#'><h3>" + infoVm70.j_title + "(" + infoVm70.j_no +")</h3>";
		list70 += "<p>(건수: " + infoVm70.j_gunsu + ") (판매금액: " + AddComma(infoVm70.j_money3) +") (에누리: " +
			AddComma(infoVm70.j_money5) + ")<p>";
		list70 += "<p>(입금액: " + AddComma(infoVm70.j_money4) + ") (외상판매: " +
			AddComma(infoVm70.j_money6) + ")  - (전송: " + infoVm70.j_schk + ")";
		list70 += "<p class='ui-li-aside'>" + infoVm70.j_time + "/" + infoVm70.j_date + "</p>";
		list70 += "</a><a href='jobVm70Ipkeum.html'>Split Button</a></li>";
		
		$("#vm70Body ol").append(list70);
	}; 
	
	$("#vm70Body ol").listview("refresh");
	
	// 뿌려주고 나서.. 포커스 및 index번호를 잘 잡아야 한다...
	if (myVm70Index >= myVm70Array.length) {
		myVm70Index = myVm70Array.length - 1;  // 마지막 것으로...	
	};
	
	$('#vm70Body ol>li').eq(myVm70Index).focusin();
};

function AddComma(data_value) {
	return Number(data_value).toLocaleString('en');
};
  
var startLocalDB = function(callback) {
	
	//alert("databaseName: " + databaseName);

	// 이두개를 모두사용해야 하는지, 아니면 하나만 사용해도 되는지.. 그렇다면 차이점은???
	myDB = window.openDatabase(databaseName, databaseVersion, databaseDisplayName, databaseSize);
	//myDB = window.sqlitePlugin.openDatabase({name: databaseName});

	//alert("myDB: " + myDB);
	
	
    createTableVm70(function(retMsg) {
		//alert("createVm70Table :=" + retMsg);
		if (retMsg == true) {
			//alert("createVm70Table(true) 이것다음에 vm70Last로 가야함..:=" + retMsg);
			
			createTableJm20(function(retMsg) {
				if (retMsg == true) {
					
					createTableJm40(function(retMsg) {
						if (retMsg == true) {
							
							createTableVm71(function(retMsg) {
								if (retMsg == true) {
									callback(true);	
								} else {
									callback(false);
								};
							});
						} else {
							callback(false);
						};
					});
				} else {
					callback(false);
				};
			});
			/*
			selectLastVm70(function(ivNo) {
				rInvoiceNo = ivNo;
			    alert("(startLocalDB(vm70Last후) --> ivno := " + rInvoiceNo);
				callback(true);
			});
			*/
		} else {
			//alert("createVm70Table(false) :=" + retMsg);
			callback(false);
		};
	});
};

function startJobVm70Ipkeum() {
	$('#name').val(myVm70Index);
	//alert("myVm70Index:" + myVm70Index);
};

// 삭제화면 생성시..
function startJobVm70Del() {
	
	if (myVm70Array[myVm70Index].j_schk == "Y") {
		$('#vm70Del_schk').val("<Ok>");
	}
	else {
		$('#vm70Del_schk').val("<미전송>");
	};
	$('#vm70Del_title').val(myVm70Array[myVm70Index].j_title);

	$('#vm70Del_money3').val(AddComma(myVm70Array[myVm70Index].j_money3) + " 원");
	$('#vm70Del_money4').val(AddComma(myVm70Array[myVm70Index].j_money4) + " 원");
	//$('#vm70Del_money4').val("1,000 원");
	
	$(".line1").attr("readonly",true).attr("disabled",false); 
};


/*<!--
	이곳에다 각 페이지의 동적 이벤트를 기술할때는 최대한 페이지이름을 표기할수 있도록한다.
-->*/
$(document).on('click','#vm70Body ol>li',function(index){
	myVm70Index = $('li').index(this);
	
	//alert("index: " + i + "/ id: " + $('li').eq(i).attr('id'));
	/*$('#vm70Body ol>li').eq(myVm70Index).remove();*/
	
	// 클릭한것 색상 변경 하려니까 안되네....
	//$('#vm70Body ol>li').eq(myVm70Index).addClass("selected"); 
	//$('#vm70Body ol>li').eq(myVm70Index).removeClass("selected");
	//$('#vm70Body ol>li').eq(myVm70Index).css("background: blue");

});

// 내용이 있을때만 삭제가능하고..
$(document).on('click','#btnDelForm',function(index){
	if (myVm70Array.length >= 1) {
		// 내역이 없는 것들만 작업가능 함!..
		//if (Number(myVm70Array[myVm70Index].j_gunsu) == 0) {
		if (Number(myVm70Array[myVm70Index].j_gunsu) < 10) {
			$.mobile.changePage("jobVm70Del.html", {
				transition: "flip",   //"fade",
				role: "dialog"
			});
		} else {
			alert("건수있음!. <삭제불가!.>");	
		};
	};
});

$(document).on('click', '#btnVm70Del', function() {
	// 삭제를 한다면..
	// 여기서 테이블 삭제하고..
	// Array도 지운다..
	
	myVm70Array.splice(myVm70Index, 1);  // Array의 해당 행을 드러낸다.
	
	/*deleteOneVm70(myVm70Array[myVm70Index].j_number, function(retMsg) {
		if (retMsg == true) {
			myVm70Array.splice(myVm70Index, 1);  // Array의 해당 행을 드러낸다.
			// btnVm70Del 버튼에 data-rel="back" 을 넣어 버리면 수동으로 페이지체인지를 하지않아도 자동으로 돌아간다.
			// $.mobile.changePage("jobVm70.html", {transition: "flip"});
		};
	});
	*/
});
