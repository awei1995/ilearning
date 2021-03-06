var home_page_path = "http://"+window.location.hostname+"/index.php";

// 測驗區變數
var username,
	download_excel,
	account,
	num,
	pre_page,
	test_zone,
	answer_array,
	mode = 0,
	// 範例變數
	example_choosen_option,
	example_commit_btn,
	// 第一部分變數
	part1_container,
	part1_question_type,
	part1_question_type_content,
	part1_question_num,
	part1_audio,
	part1_option_a ,
	part1_option_b ,
	part1_option_c ,
	part1_option_d ,
	part1_choosen_option,
	part1_commit_btn,
	// 第二部分變數
	part2_container,
	part2_question_type,
	part2_question_content,
	part2_question_num,
	part2_question,
	part2_question_content,
	part2_option_a,
	part2_option_b,
	part2_option_c,
	part2_option_d,
	part2_audio_a,
	part2_audio_b,
	part2_audio_c,
	part2_audio_d,
	part2_choosen_option,
	part2_commit_btn
	;
//audio路徑 
var audio_path = "templates/audio/normtest/";
//測驗結束後變數
var  thank_zone,
	result_tbody,
	correct_num,
	correct_unitsound,
	correct_singleconsonant,
	correct_doubleconsonant,
	true_false_table = {
		"student":"tester",
		"email":"vvv@gmail.com",
		"result":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
	},
	correct_answer_array = ["B","A","D","D","B","A","C","B","B","A","A","C","D","A","B","C","B","D","A","C","B","C","A","D","A","C","B","D"];

// email rule
var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

window.onload = function(){	
	//true_false_table.result = [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1];
	// console.log(true_false_table.result);
	//complete();
	//alert(location);

	num=1;
	// username = document.getElementById("username");
	test_email = document.getElementById("test_email");
	test_email_download = document.getElementById("test_email_download");
	download_excel = document.getElementById("download_excel");

	//開始測驗前的注意事項
	
	pre_page = document.getElementById("pre_page");
	// 範例區
	example_choosen_option = document.getElementById("example_choosen_option");
	example_commit_btn = document.getElementById("example_commit_btn");

	// 初始測驗區
	answer_array = new Array();
	test_zone = document.getElementById("test_zone");
	
	part1_container = document.getElementById("part1_container");	
	part1_question_num = document.getElementById("part1_question_num");
	part1_question_type = document.getElementById("part1_question_type");
	part1_question_type_content = document.getElementById("part1_question_type_content");
	part1_option_a = document.getElementById("part1_option_a");
	part1_option_b = document.getElementById("part1_option_b");
	part1_option_c = document.getElementById("part1_option_c");
	part1_option_d = document.getElementById("part1_option_d");
	part1_audio = document.getElementById("part1_audio");
	part1_choosen_option = document.getElementById("part1_choosen_option");
	part1_commit_btn = document.getElementById("part1_commit_btn");
	
	
	part2_container = document.getElementById("part2_container");
	part2_question_type = document.getElementById("part2_question_type");
	part2_question_type_content = document.getElementById("part2_question_type_content");
	part2_question_num = document.getElementById("part2_question_num");

	part2_question = document.getElementById("part2_question");
	part2_question_content = document.getElementById("part2_question_content");
	part2_option_a = document.getElementById("part2_option_a");
	part2_option_b = document.getElementById("part2_option_b");
	part2_option_c = document.getElementById("part2_option_c");
	part2_option_d = document.getElementById("part2_option_d");

	part2_audio_a = document.getElementById("part2_audio_a");
	part2_audio_b = document.getElementById("part2_audio_b");
	part2_audio_c = document.getElementById("part2_audio_c");
	part2_audio_d = document.getElementById("part2_audio_d");
	part2_choosen_option = document.getElementById("part2_choosen_option");
	part2_commit_btn = document.getElementById("part2_commit_btn");
	

	// 初始測驗結束區
	thank_zone = document.getElementById("thank_zone");
	correct_num = document.getElementById("correct_num");
	correct_unitsound = document.getElementById("correct_unitsound");
	correct_singleconsonant = document.getElementById("correct_singleconsonant");
	correct_doubleconsonant = document.getElementById("correct_doubleconsonant");
	result_tbody = document.getElementById("result_tbody");

	update_content();
}




// 開始測驗 *使用pre_test_submit 並且將說明頁面跟題目分開 因此這裡尚未使用到
// function start_test() {
// 	if(test_email.value.search(emailRule)==-1){
// 		alert("請輸入正確的電子信箱1");
// 	}
// 	// else if(username.value ==""){
// 	// 	alert("請輸入暱稱");
// 	// }
// 	else{
// 		//document.getElementById("pre_page_form").action = "./normtest.php";
// 		document.getElementById("pre_page_form").submit();

// 		pre_page.style.display="none";
// 		test_zone.style.display = "block";
// 	}
	
// }

// 下載excel
// function download_excel_click() {
// 	// body...
// 	if(test_email.value=="mingmin@gmail.nsysu.edu.tw"){
// 		// 在這裡下載excel
		
// 		document.getElementById("pre_page_form").action = "./export_excel.php";
// 		document.getElementById("pre_page_form").submit();
		
// 		alert("downloading..");

// 	}else{
// 		alert("此為管理員使用");
// 	}
// }


// pre_test_submit
// function pre_test_submit() {
// 	if(test_email.value.search(emailRule)==-1){
// 		alert("請輸入正確的電子信箱");
// 	}
// 	else{
// 		document.getElementById("pre_page_form").action = "./normtest.php";
// 		document.getElementById("pre_page_form").submit();

// 	}
	
// }

// 選擇option
function clickoption(option){
	if (mode==0) {
		part1_choosen_option.innerHTML=option;
		part1_commit_btn.removeAttribute("disabled");
	}else if(mode==1){
		part2_choosen_option.innerHTML=option;
		part2_commit_btn.removeAttribute("disabled");
	}		
}

function update_content(){
	

	// 題目區。更新
	if (num<=4) {
		mode=0;
		
		part1_question_type.innerHTML = question_json1.question_type;
		part1_question_type_content.innerHTML = question_json1.question_type_content;
		part1_question_num.innerHTML=num;
		
		part1_option_a.innerHTML=question_json1.question[num-1].A;
		part1_option_b.innerHTML=question_json1.question[num-1].B;
		part1_option_c.innerHTML=question_json1.question[num-1].C;
		part1_option_d.innerHTML=question_json1.question[num-1].D;
		part1_audio.src = audio_path+question_json1.mp3_location+question_json1.question[num-1].mp3;
		
	}else
	if(5<=num && num<=10){
		mode=1;
		part1_container.style.display = "none";
		part2_container.style.display = "block";

		part2_question_num.innerHTML=num;
		part2_question_type.innerHTML = question_json1.question_type;
		part2_question_type_content.innerHTML = question_json1.question_type_content;
		part2_question.innerHTML = "單元音";
		part2_question_content.innerHTML = question_json1.question[num-1].question_text;
		part2_audio_a.src = audio_path+question_json1.mp3_location+question_json1.question[num-1].mp3a;
		part2_audio_b.src = audio_path+question_json1.mp3_location+question_json1.question[num-1].mp3b;
		part2_audio_c.src = audio_path+question_json1.mp3_location+question_json1.question[num-1].mp3c;
		part2_audio_d.src = audio_path+question_json1.mp3_location+question_json1.question[num-1].mp3d;
	

	}else
	if(11<=num && num<=14){
		mode=0;
		part1_container.style.display = "block";
		part2_container.style.display = "none";
		
		part1_question_type.innerHTML = question_json2.question_type;
		part1_question_type_content.innerHTML = question_json2.question_type_content;
		part1_question_num.innerHTML=num;
		
		part1_option_a.innerHTML=question_json2.question[num-11].A;
		part1_option_b.innerHTML=question_json2.question[num-11].B;
		part1_option_c.innerHTML=question_json2.question[num-11].C;
		part1_option_d.innerHTML=question_json2.question[num-11].D;
		part1_audio.src = audio_path+question_json2.mp3_location+question_json2.question[num-11].mp3;
	}else 
	if(15<=num && num<=20){
		mode=1;
		part1_container.style.display = "none";
		part2_container.style.display = "block";

		part2_question_num.innerHTML=num;
		part2_question_type.innerHTML = question_json2.question_type;
		part2_question_type_content.innerHTML = question_json2.question_type_content;
		part2_question.innerHTML = "單輔音 ";
		part2_question_content.innerHTML = question_json2.question[num-11].question_text;
		part2_audio_a.src = audio_path+question_json2.mp3_location+question_json2.question[num-11].mp3a;
		part2_audio_b.src = audio_path+question_json2.mp3_location+question_json2.question[num-11].mp3b;
		part2_audio_c.src = audio_path+question_json2.mp3_location+question_json2.question[num-11].mp3c;
		part2_audio_d.src = audio_path+question_json2.mp3_location+question_json2.question[num-11].mp3d;

	}else
	if(21<=num && num<=24){
		mode=0;
		part1_container.style.display = "block";
		part2_container.style.display = "none";
		
		part1_question_type.innerHTML = question_json3.question_type;
		part1_question_type_content.innerHTML = question_json3.question_type_content;
		part1_question_num.innerHTML=num;
		
		part1_option_a.innerHTML=question_json3.question[num-21].A;
		part1_option_b.innerHTML=question_json3.question[num-21].B;
		part1_option_c.innerHTML=question_json3.question[num-21].C;
		part1_option_d.innerHTML=question_json3.question[num-21].D;
		part1_audio.src = audio_path+question_json3.mp3_location+question_json3.question[num-21].mp3;

	}else 
	if(25<=num && num<=28){
		mode=1;
		part1_container.style.display = "none";
		part2_container.style.display = "block";

		part2_question_num.innerHTML=num;
		part2_question_type.innerHTML = question_json3.question_type;
		part2_question_type_content.innerHTML = question_json3.question_type_content;
		part2_question.innerHTML = "雙輔音 ";
		part2_question_content.innerHTML = question_json3.question[num-21].question_text;
		part2_audio_a.src = audio_path+question_json3.mp3_location+question_json3.question[num-21].mp3a;
		part2_audio_b.src = audio_path+question_json3.mp3_location+question_json3.question[num-21].mp3b;
		part2_audio_c.src = audio_path+question_json3.mp3_location+question_json3.question[num-21].mp3c;
		part2_audio_d.src = audio_path+question_json3.mp3_location+question_json3.question[num-21].mp3d;

	}else{
		test_zone.style.display = "none" ;
		thank_zone.style.display = "block";

		result();
	}


}



// 送出選擇 及 是否已經答題完成
function commitanswer(){
	if(mode==0){
		// mode==0 表示選擇正確字
		answer_array[num-1]=part1_choosen_option.innerHTML;
		num++;
		// 更新介面
		update_content();
		
		// 送出後，將btn鎖死。並且更新choosen_option
		part1_choosen_option.innerHTML="";
		part1_commit_btn.setAttribute('disabled','');
	}else if(mode==1){
		// mode==1 表示選擇正確音
		answer_array[num-1]=part2_choosen_option.innerHTML;
		num++;
		// 更新介面
		update_content();
		
		// 送出後，將btn鎖死。並且更新choosen_option
		part2_choosen_option.innerHTML="";
		part2_commit_btn.setAttribute('disabled','');
	}
	
}


function result(){
	console.log("result : ");
	var correct = 0;

	for (var i = 0; i <answer_array.length ; i++) {
		var row = result_tbody.insertRow(i);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		cell1.innerHTML = "第"+(i+1).toString()+"題";
		
		if(i<10){
			var answer_audio = document.createElement('audio');
			answer_audio.src = audio_path+question_json1.mp3_location+question_json1.question[i].mp3;
			answer_audio.controls = true;
			answer_audio.setAttribute('controlsList','nodownload');
			cell2.innerHTML = question_json1.question[i][correct_answer_array[i]];
			cell3.appendChild(answer_audio);
			cell4.innerHTML = question_json1.question[i][answer_array[i]];
			if(cell2.innerHTML!=cell4.innerHTML){
				cell4.style.color = 'red';
			}
		}else if( 10<=i && i<20 ){
			var answer_audio = document.createElement('audio');
			answer_audio.src = audio_path+question_json2.mp3_location+question_json2.question[i-10].mp3;
			answer_audio.controls = true;
			answer_audio.setAttribute('controlsList','nodownload');
			cell2.innerHTML = question_json2.question[i-10][correct_answer_array[i]];
			cell3.appendChild(answer_audio);
			cell4.innerHTML = question_json2.question[i-10][answer_array[i]];
			if(cell2.innerHTML!=cell4.innerHTML){
				cell4.style.color = 'red';
			}
		}else {
			var answer_audio = document.createElement('audio');
			answer_audio.src = audio_path+question_json3.mp3_location+question_json3.question[i-20].mp3;
			answer_audio.controls = true;
			answer_audio.setAttribute('controlsList','nodownload');
			cell2.innerHTML = question_json3.question[i-20][correct_answer_array[i]];
			cell3.appendChild(answer_audio);
			cell4.innerHTML = question_json3.question[i-20][answer_array[i]];
			if(cell2.innerHTML!=cell4.innerHTML){
				cell4.style.color = 'red';
			}
		}


		// cell2.innerHTML = correct_answer_array[i];
		// cell3.innerHTML = answer_array[i];

		// 輸出結果
		if(cell2.innerHTML==cell4.innerHTML){
			true_false_table.result[i]=1;
			correct++;
		}
		else {
			true_false_table.result[i]=0;
		}
	}


	correct_unitsound_num = 0;
	correct_singleconsonant_num =0;
	correct_doubleconsonant_num =0;

	for (var i = 0; i < true_false_table.result.length; i++) {
		console.log(i);
		if (i<10 && true_false_table.result[i]==1) {
			correct_unitsound_num++;
			console.log(correct_unitsound_num);
		}
		if (10<=i && i<20 && true_false_table.result[i]==1) {
			correct_singleconsonant_num++;
		}
		if (20<=i && i<28 && true_false_table.result[i]==1) {
			correct_doubleconsonant_num++;
		}
	}

	correct_num.innerHTML = correct;
	correct_unitsound.innerHTML = correct_unitsound_num;
	correct_singleconsonant.innerHTML = correct_singleconsonant_num;
	correct_doubleconsonant.innerHTML = correct_doubleconsonant_num;

	// alert最後結果 0或1
	//alert(true_false_table.result);

}




function output_true_false_table(i,x){
	true_false_table.result[i]=x;
}

function example_clickoption(option) {
	// body...
	example_choosen_option.innerHTML = option;
	example_commit_btn.removeAttribute('disabled');
}
function example_commit(){
	example_choosen_option.innerHTML ="　";
	example_commit_btn.setAttribute('disabled','');
}

function complete(){
	var faultornot=0;
	for (var i = 0; i < true_false_table.result.length; i++) {
		if(true_false_table.result[i]==0)
			faultornot=1;
	}
	if (faultornot==1) {
			window.location.href = "game.php?"+true_false_table.result;
	}else{
		console.log(window.location.hostname+home_page_path);
		window.location.href=home_page_path;
	}

	
}

// 假題庫 part1

var question_json1 ={

	"question_type":"一、 單元音：",
	"question_type_content":"Nguyên âm",

	"mp3_location":"unitsound/",

	"question":[
		{	"mp3":"q1.mp3",
			"A":"Ơơ" ,	"B":"Ââ" ,	"C":"Ii" ,	"D":"Ee"	},

		{	"mp3":"q2.mp3",
			"A":"Aa" ,	"B":"Oo" , 	"C":"Êê", 	"D":"Ââ"	},

		{	"mp3":"q3.mp3",
			"A":"Ii" ,	"B":"Ee" ,	"C":"Ưư" ,	"D":"Êê"		},

		{	"mp3":"q4.mp3",
			"A":"Ơơ" , "B":"Aa" , "C":"Ôô" , "D":"Ee"},

		{	"question_text" : "Oo","mp3":"q5/(B)O.mp3",
			"mp3a":"q5/(A)Ô.mp3",	"mp3b":"q5/(B)O.mp3",	"mp3c":"q5/(C)Ơ.mp3",	"mp3d":"q5/(D)Ư.mp3",
			"A":"ô" , "B":"o" , "C":"ơ" , "D":"ư"},

		{	"question_text" : "Ơơ", "mp3":"q6/(A)Ơ.mp3",
			"mp3a":"q6/(A)Ơ.mp3",	"mp3b":"q6/(B)Ư.mp3",	"mp3c":"q6/(C)A.mp3",	"mp3d":"q6/(D)I.mp3",
			"A":"Ơ" , "B":"Ư" , "C":"A" , "D":"I"},

		{	"question_text" : "Ưư", "mp3":"q7/(C)Ư.mp3",
			"mp3a":"q7/(A)U.mp3",	"mp3b":"q7/(B)Ê.mp3",	"mp3c":"q7/(C)Ư.mp3",	"mp3d":"q7/(D)Ă.mp3",
			"A":"u" , "B":"ê" , "C":"ư" , "D":"â"},

		{	"question_text" : "Ăă", "mp3":"q8/(B)Ă.mp3",
			"mp3a":"q8/(A)O.mp3",	"mp3b":"q8/(B)Ă.mp3",	"mp3c":"q8/(C)A.mp3",	"mp3d":"q8/(D)E.mp3",
			"A":"O" , "B":"Ă" , "C":"A" , "D":"E"},

		{	"question_text" : "Ii", "mp3":"q9/(B)I.mp3",
			"mp3a":"q9/(A)Â.mp3",	"mp3b":"q9/(B)I.mp3",	"mp3c":"q9/(C)Ư.mp3",	"mp3d":"q9/(D)A.mp3",
			"A":"Â" , "B":"Ii" , "C":"Ư" , "D":"A"},

		{	"question_text" : "Uu", "mp3":"q10/(A)U.mp3",
			"mp3a":"q10/(A)U.mp3",	"mp3b":"q10/(B)Ô.mp3",	"mp3c":"q10/(C)O.mp3",	"mp3d":"q10/(D)Ư.mp3",
			"A":"u" , "B":"ô" , "C":"o" , "D":"ư"},

	],
	"answer":["B","A","D","D","B","A","C","B","B","A"]
};

var question_json2 = {
	"question_type":"二、 單輔音：",
	"question_type_content":"Phụ âm đơn",

	"mp3_location":"singleconsonant/",

	"question":[
		{	"mp3":"q1.mp3",
			"A":"Bb" ,	"B":"Hh" ,	"C":"Đđ" ,	"D":"Mm"	},

		{	"mp3":"q2.mp3",
			"A":"Xx" ,	"B":"Ll" , 	"C":"Cc", 	"D":"Kk"	},

		{	"mp3":"q3.mp3",
			"A":"Kk" ,	"B":"Yy" ,	"C":"Dd" ,	"D":"Qq"	},

		{	"mp3":"q4.mp3",
			"A":"Dd" , "B":"Rr" , "C":"Ss" , "D":"Đđ"},

		{	"question_text" : "Đđ", "mp3":"q5/(B)Đ.mp3",
			"mp3a":"q5/(A)L.mp3",	"mp3b":"q5/(B)Đ.mp3",	"mp3c":"q5/(C)C.mp3",	"mp3d":"q5/(D)N.mp3",
			"A":"l" , "B":"đ" , "C":"c" , "D":"n"},

		{	"question_text" : "Ss", "mp3":"q6/(C)S.mp3",
			"mp3a":"q6/(A)C.mp3",	"mp3b":"q6/(B)G.mp3",	"mp3c":"q6/(C)S.mp3",	"mp3d":"q6/(D)X.mp3",
			"A":"c" , "B":"g" , "C":"s" , "D":"x"},

		{	"question_text" : "Tt", "mp3":"q7/(B)T.mp3",
			"mp3a":"q7/(A)D.mp3",	"mp3b":"q7/(B)T.mp3",	"mp3c":"q7/(C)M.mp3",	"mp3d":"q7/(D)N.mp3",
			"A":"d" , "B":"t" , "C":"m" , "D":"n"},

		{	"question_text" : "Gg", "mp3":"q8/(D)G.mp3",
			"mp3a":"q8/(A)C.mp3",	"mp3b":"q8/(B)L.mp3",	"mp3c":"q8/(C)Đ.mp3",	"mp3d":"q8/(D)G.mp3",
			"A":"C" , "B":"L" , "C":"Đ" , "D":"G"},

		{	"question_text" : "Mm", "mp3":"q9/(A)M.mp3",
			"mp3a":"q9/(A)M.mp3",	"mp3b":"q9/(B)N.mp3",	"mp3c":"q9/(C)H.mp3",	"mp3d":"q9/(D)P.mp3",
			"A":"M" , "B":"N" , "C":"H" , "D":"P"},

		{	"question_text" : "Pp", "mp3":"q10/(C)P.mp3",
			"mp3a":"q10/(A)H.mp3",	"mp3b":"q10/(B)L.mp3",	"mp3c":"q10/(C)P.mp3",	"mp3d":"q10/(D)Y.mp3",
			"A":"h" , "B":"l" , "C":"p" , "D":"y"},

	],
	"answer":["A","C","D","A","B","C","B","D","A","C"]
};


var question_json3 = {
	"question_type":"三、雙輔音：",
	"question_type_content":"Phụ âm kép",

	"mp3_location":"doubleconsonant/",

	"question":[
		{	"mp3":"q1.mp3",
			"A":"GH gh" ,	"B":"CH ch" ,	"C":"TR tr" ,	"D":"NG ng"	},

		{	"mp3":"q2.mp3",
			"A":"NH nh" ,	"B":"TH th" , 	"C":"GI gi", 	"D":"NG ng"	},

		{	"mp3":"q3.mp3",
			"A":"KH kh" ,	"B":"GH gh" ,	"C":"PH ph" ,	"D":"QU qu"	},

		{	"mp3":"q4.mp3",
			"A":"QU qu" , "B":"PH ph" , "C":"TR tr" , "D":"NH nh"},

		{	"question_text" : "PH ph", "mp3":"q5/(A)PH.mp3",
			"mp3a":"q5/(A)PH.mp3",	"mp3b":"q5/(B)TH.mp3",	"mp3c":"q5/(C)NG-NGH.mp3",	"mp3d":"q5/(D)GI.mp3",
			"A":"PH ph" , "B":"TH th" , "C":"NG ng" , "D":"GI gi"},

		{	"question_text" : "TR tr", "mp3":"q6/(C)TR.mp3",
			"mp3a":"q6/(A)TH.mp3",	"mp3b":"q6/(B)GH.mp3",	"mp3c":"q6/(C)TR.mp3",	"mp3d":"q6/(D)PH.mp3",
			"A":"TH th" , "B":"GH gh" , "C":"TR tr" , "D":"PH ph"},

		{	"question_text" : "GH gh", "mp3":"q7/(B)GH.mp3",
			"mp3a":"q7/(A)TR.mp3",	"mp3b":"q7/(B)GH.mp3",	"mp3c":"q7/(C)TH.mp3",	"mp3d":"q7/(D)QU.mp3",
			"A":"TR tr" , "B":"GH gh" , "C":"TH th" , "D":"Qu qu"},

		{	"question_text" : "NG ng", "mp3":"q8/(D)NG-NGH.mp3",
			"mp3a":"q8/(A)GH.mp3",	"mp3b":"q8/(B)NH.mp3",	"mp3c":"q8/(C)PH.mp3",	"mp3d":"q8/(D)NG-NGH.mp3",
			"A":"GH gh" , "B":"NH nh" , "C":"PH ph" , "D":"NG ng"}

	],
	"answer":["B","C","A","D","A","C","B","D"]
};


/**
 *  EXCEL 匯出功能
 */
// 生成隱藏的POST表單給 export_excel.php
// function add_element(obj){
// 	var element_count = 0;
// 	for(var i=0; i<answer_array.length+1; i++){
// 		var new_element = document.createElement("input");
// 		element_count++;
// 		//設定這個input的屬性
// 		if(i != answer_array.length){
// 			new_element.type = "text";
// 			new_element.name = "Q" + element_count;
// 			new_element.value = true_false_table.result[i];
// 			//new_element.style = "display: none";
// 		}
// 		else{
// 			// question number
// 			new_element.type = "text";
// 			new_element.name = "q_num";
// 			new_element.value = answer_array.length;
// 			//new_element.style = "display: none";
// 		}
		
		
// 		//最後再使用appendChild加到要加的form裡
// 		obj.form.appendChild(new_element);
// 		//換行
// 		var s = document.createElement("br");
// 		obj.form.appendChild(s);
// 	}

// 	document.getElementById("myform").action = "./test_answer.php";
// 	//document.getElementById("myform").action = "./export_excel.php";
// 	document.getElementById("myform").submit();	
// }

// alert及confirm 取消顯示Ip及域名
// window.alert = function(name){

//         var iframe = document.createElement("IFRAME");
//         iframe.style.display="none";
//         iframe.setAttribute("src", 'data:text/plain,');
//         document.documentElement.appendChild(iframe);
//         window.frames[0].window.alert(name);
//         iframe.parentNode.removeChild(iframe);
//     }


// window.confirm = function (message) {
//             var iframe = document.createElement("IFRAME");
//             iframe.style.display = "none";
//             iframe.setAttribute("src", 'data:text/plain,');
//             document.documentElement.appendChild(iframe);
//             var alertFrame = window.frames[0];
//             var result = alertFrame.window.confirm(message);
//             iframe.parentNode.removeChild(iframe);
//             return result;
//     }