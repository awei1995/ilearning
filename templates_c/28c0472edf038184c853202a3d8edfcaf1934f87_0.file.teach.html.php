<?php
/* Smarty version 3.1.33, created on 2018-12-08 17:25:30
  from 'D:\xampp\htdocs\awei_ilearning\ilearning\templates\teach.html' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.33',
  'unifunc' => 'content_5c0bf07ab4f238_49914690',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '28c0472edf038184c853202a3d8edfcaf1934f87' => 
    array (
      0 => 'D:\\xampp\\htdocs\\awei_ilearning\\ilearning\\templates\\teach.html',
      1 => 1544286330,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c0bf07ab4f238_49914690 (Smarty_Internal_Template $_smarty_tpl) {
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
 type="text/javascript" src="templates/teach.js"><?php echo '</script'; ?>
>
	
	<link rel="stylesheet" type="text/css" href="templates/CSS/mycss.css">
    <link rel="stylesheet" type="text/css" href="templates/CSS/navbar.css">

    <title>教學課程</title>
</head>
<body>

	<ul id="navbar_ul" style="font-family: Microsoft JhengHei" align="center">
		<li id="navbar_li"><a class="active" href="index.php" class="nav navbar-inverse" >Home</a></li>
		<li id="navbar_li" style="float:right"><a href="#.php" >說明</a></li>
		<li id="navbar_li" style="float:right"><a href="#.php" >管理</a></li>
		<li id="navbar_li" style="float:right"><a href="<?php echo $_smarty_tpl->tpl_vars['login']->value;?>
.php" ><?php echo $_smarty_tpl->tpl_vars['login']->value;?>
</a></li>
	</ul>

	<div class="container" style="padding-top: 30px;">
		<!-- 教學內容 -->
		<div class="row">
			<div class="col-md-2"></div>	
			<div class="col-md-2">
				<p id="capital" style="font-size: 200px;"></p>
			</div>
			<div class="col-md-1">
				<p id="lowercase" style="font-size: 200px; "></p>
			</div>
			<div class="col-md-5">
				<img id="capital_vocabulary_img" style="width:100%; height: 380px;padding-left: 20px;"></img>
			</div>
			<dir class="col-md-2"></dir>
					<p id="capital_vocabulary_c" style="font-size: 32px; padding-top: 230px; padding-bottom: 0px;margin-bottom: 0px;">單字</p>
					<p id="capital_vocabulary_v" style="font-size: 32px;">a</p>
			</div> 	
		</div>
		<div class="row" style="padding-top: 20px;">
			<audio id="capital_nounce" class="col-md-9 col-md-offset-2" controls controlsList="nodownload"></audio>
		</div>
		<!-- 下一頁/上一頁/完成 -->
		<div class="row" style="padding-top: 20px;">
			<div class="col-md-4 col-md-offset-4 ">
				<button type="button" class="btn btn-default col-md-offset-3" style="font-size: 32px;" onclick="pre_page();">上一頁</button>
				<button type="button" class="btn btn-default" style="font-size: 32px;" onclick="next_page();">下一頁</button>
			</div>
				
			<div class="col-md-1">
				<button id="complete_btn" type="button" class="btn btn-default" style="font-size: 32px; display: none;" onclick="complete(); ">完成</button>
			</div>
		</div>

	</div>

	
</body>
</html><?php }
}
