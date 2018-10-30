<?php
/* Smarty version 3.1.33, created on 2018-10-30 11:51:05
  from 'C:\Users\a0979\Documents\GitHub\ilearning\templates\pre_test_page.html' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.33',
  'unifunc' => 'content_5bd837999c7c50_46769151',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '30d6612f029d064aae5cdedefe17863367a5a7a3' => 
    array (
      0 => 'C:\\Users\\a0979\\Documents\\GitHub\\ilearning\\templates\\pre_test_page.html',
      1 => 1540896664,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5bd837999c7c50_46769151 (Smarty_Internal_Template $_smarty_tpl) {
?><html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <?php echo '<script'; ?>
 src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"><?php echo '</script'; ?>
>
    <?php echo '<script'; ?>
 src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript" src="templates/normtest.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript" src="templates/export_xls.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript" src="js-xlsx/dist/xlsx.core.min.js"><?php echo '</script'; ?>
>
	<link rel="stylesheet" type="text/css" href="templates/CSS/mycss.css">
	<link rel="stylesheet" type="text/css" href="templates/CSS/navbar.css">
    <style >
    	
    	.btn{
    		
    		font-size: 20px;
    	}
    </style>

    <title>常模測驗</title>
</head>
<body>
	<!-- 登入後資訊區 navbar-->
	<ul id="navbar_ul" style="font-family: Microsoft JhengHei;">
		<li id="navbar_li"><a class="active" href="normtest.php" class="nav navbar-inverse" >越南語言測驗</a></li>
		<li id="navbar_li" style="float:right"><a class="active" href="normtest.php" class="nav navbar-inverse" onclick="download_excel_click();">下載</a></li>
	</ul>
	
	<!-- 題前提示 -->
	<div class="container text-center" id="pre_page">
		<div class="row">
			<h2><strong>越南語測驗</strong></h2>	
		</div>
		
		<div class="row">
				<h4>聽力測驗共有三大題，分為單元音、單輔音、雙輔音。</h4>
				<h4>每大題共有兩部分 (A) 選出正確的字母  (B) 選出正確的讀音。</h4>
		</div>
		<div class="row" >
			<!-- 範例區塊 -->
			<div class="container" style="border: 1px solid #cecece; text-align: left; padding-bottom: 20px;">
				<div class="container" >
					<!-- 題號區 -->
					<div class="container">
						<h2><strong>一、單元音 (範例)</strong></h2>
						<div class="col-sm-4">
							<h2><strong>請選出正確的字母 </strong> </h2>
						</div>
						<div class="col-sm-4"> 
							<h2><strong>第x題 / 共28題</strong> </h2>
						</div>
					</div>
					<!-- 音檔、選擇區 -->
					<div class="container col-sm-8">
						<!-- 音檔播放區 -->
					    <div class="container" style="padding-top: 15px;">
					    	<audio src="templates/audio/normtest/unitsound/q3.mp3" controls="controls" controlsList="nodownload" oncontextmenu="return false">
					    	</audio>
					    </div>
					    <!-- 選擇區 -->
					    <div class="container" style="padding-top: 15px">
					    	<div class="row" style="padding-top: 10px; ">
					    		<div class="col-sm-3" >
					    			<button type="button" class="btn btn-secondary btn-block" onclick="example_clickoption('A')">A : i</button>
					    		</div>
					    		<div class="col-sm-3" >
					    			<button type="button" class="btn btn-secondary btn-block" onclick="example_clickoption('B')">B : e</button>
					    		</div>
					    	</div>
					    	<div class="row " style="padding-top: 10px; ">
					    		<div class="col-sm-3" >
					    			<button type="button" class="btn btn-secondary btn-block" onclick="example_clickoption('C')">C : ư</button>
					    		</div>
					    		<div class="col-sm-3" >
					    			<button type="button" class="btn btn-secondary btn-block" onclick="example_clickoption('D')">D : ê</button>
					    		</div>
					    	</div>
					    </div>
					</div>
					
				    <!-- 確認區 -->
				    <div class="container col-sm-3" >
			    		<div class="row" style="font-size: 50px"><strong>選擇:<span id="example_choosen_option"></span></strong></div>
			    		<div class="row" style="padding-top: 10px"><button id="example_commit_btn" type="button" disabled="" class="btn" onclick="example_commit();">確認</button></div>
			    		<div class="row"><p>(點擊A、B、C、D後，按下確認，即可進入下一題。)</p></div>
			    	</div>
				</div>
			</div>
		</div>
		<!-- 表單填寫 -->
		<div class="row" style="padding-top: 20px; justify-content: center;">
			<div class="" >
				<div>
	       			<form id="pre_page_form" method="POST">
		            	<input type="hidden" name="postback" value="true">
		            	<div class="form-group" style="width: 75%; padding-left: 25%;">
							<label for="test_email">請輸入電子信箱</label>
							<input type="text" name="test_email" id="test_email"  placeholder="請填入電子信箱 example@gmail.com" class="form-control"/>
		            	</div>

		            	<!-- <div class="form-group" style="width: 75%;padding-left: 25%;">
		                	<label for="username">暱稱</label>
		                	<input type="text" name="username" id="username" value="" placeholder="請填入暱稱" class="form-control">
		            	</div>	 -->            
					</form>

	    		</div>
				<div class="row" style="padding-top: 10px;">
					<button  class="btn btn-success" onclick="pre_test_submit();" style="font-size: 40px">開始</button>
				</div>
			</div>
		</div>	
	</div>
	
	
</body>
</html><?php }
}
