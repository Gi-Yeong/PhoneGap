//$(function(){
	$('#insertOne').on("click", function(){
		rInvoiceNo ++;
		alert("rInvoiceNo: " + rInvoiceNo);
		var rivNumber = "aaabbbccc:" + rInvoiceNo;
		insertVm70One(rivNumber, "1111", "우리나라만세", 0, 0, 0, 0, 0, "16-12-15", "10:11:23", rivNo, "N");
		alert("하나등록성공!!!");
		return false;
	});

	$('#updateOne').on("click", function(){
		UpdateBusinssTable();
		return false;
	});

	$('#deleteOne').on("click", function(){
		DeleteBusinessTable();
		return false;
	});

	$('#selectOne').on("click", function(){
		GetBusinessData();
		return false;
	});
//};
