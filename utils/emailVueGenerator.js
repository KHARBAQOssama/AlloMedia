/* search for this <a href="http://127.0.0.1:3000/auth/verifyEmail/${token}" */
module.exports ={
	mailVueGenerator
} 
function mailVueGenerator(token,subject){
	let url , buttonContent;
	if(subject == "Email Verification"){
		url = `http://127.0.0.1:3000/auth/verifyEmail/${token}`
		buttonContent = "Verify email"
	}else{
		url = `http://127.0.0.1:3000/auth/resetPassword/${token}`
		buttonContent = "Reset Password"
	}
    return `
    <head>
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<style type="text/css">
		body {
			margin: 0;
			background: #FEFEFE;
			color: #585858;
		}

		table {
			font-size: 15px;
			line-height: 23px;
			max-width: 500px;
			min-width: 460px;
			text-align: center;
		}
		.table_inner { min-width: 100% !important; }
		td {
			font-family: -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
			vertical-align: top;
		}
		
		.carpool_logo { margin: 30px auto; }

		.dummy_row { padding-top: 20px !important; }
		.section,
		.sectionlike { background: #C9F9E9; }
		.section { padding: 0 20px;  }
		.sectionlike { padding-bottom: 10px; }
		.section_content {
			width: 100%;
			background: #fff;
		}
		.section_content_padded { padding: 0 35px 40px; }
		.section_zag { background: #F4FBF9; }
		.imageless_section { padding-bottom: 20px; }

		img {
			display: block;
			margin: 0 auto;
		}
		.img_section {
			width: 100%;
			max-width: 500px;
		}
		.img_section_side_table { width: 100% !important; }

		h1 {
			font-size: 20px;
			font-weight: 500;
			margin-top: 40px;
			margin-bottom: 0;
		}
		.near_title { margin-top: 10px; }
		.last { margin-bottom: 0; }

		a {
			color: #63D3CD;
			font-weight: 500;
			word-break: break-word; /* Footer has long unsubscribe link */
		}

		.button {
			display: block;
			width: 100%;
			max-width: 300px;
			background: #20DA9C;
			border-radius: 8px;
			color: #fff;
			font-size: 18px;
			font-weight: normal; /* Resetting from a */
			padding: 12px 0;
			margin: 30px auto 0;
			text-decoration: none;
		}

		small {
			display: block;
			width: 100%;
			max-width: 330px;
			margin: 14px auto 0;
			font-size: 14px;
		}
		.signature { padding: 20px; }

		.footer,
		.footer_like { background: #1FD99A; }
		.footer { padding: 0 20px 30px; }
		.footer_content {
			width: 100%;
			text-align: center;
			font-size: 12px;
			line-height: initial;
			color: #005750;
		}
		.footer_content a {
			color: #005750;
		}
		.footer_item_image { margin: 0 auto 10px; }
		.footer_item_caption { margin: 0 auto; }

		.footer_legal {
			padding: 20px 0 40px;
			margin: 0;
			font-size: 12px;
			color: #A5A5A5;
			line-height: 1.5;
		}

		.text_left { text-align: left; }
		.text_right { text-align: right; }
		.va { vertical-align: middle;  }
		
		.stats {
			min-width: auto !important;
			max-width: 370px;
			margin: 30px auto 0;
		}
		.counter { font-size: 22px; }
		.stats_counter { width: 23%; }
		.stats_image {
			width: 18%;
			padding: 0 10px;
		}
		.stats_meta { width: 59%; }
		.stats_spaced { padding-top: 16px; }
		.walkthrough_spaced { padding-top: 24px; }

		.walkthrough { max-width: none;  }
		.walkthrough_meta { padding-left: 20px; }

		.table_checkmark { padding-top: 30px;  }
		.table_checkmark_item { font-size: 15px; }
		.td_checkmark {
			width: 24px;
			padding: 7px 12px 0 0;
		}

		.padded_bottom { padding-bottom: 40px; }
		.marginless { margin: 0; }

		/* Restricting responsive for iOS Mail app only as Inbox/Gmail have render bugs */
		@media only screen and (max-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
			table { min-width: auto !important; }

			.section_content_padded {
				padding-right: 25px !important;
				padding-left: 25px !important;
			}

			.counter { font-size: 18px !important; }
		}
	</style>
</head>
<body style="	margin: 0;
	background: #FEFEFE;
	color: #585858;
">
	<!-- Preivew text -->
	<span class="preheader" style="display: none !important; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;border-collapse: collapse;border: 0px;"></span> 
	<!-- Carpool logo -->
	<table align="center" border="0" cellspacing="0" cellpadding="0" style="	font-size: 15px;
	line-height: 23px;
	max-width: 500px;
	min-width: 460px;
	text-align: center;
">
		<tbody><tr>
			<td style="	font-family: -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
	vertical-align: top;
    border: none !important;
">
				<img src="https://carpool-email-assets.s3.amazonaws.com/shared/carpool-logo@2x.png" class="carpool_logo" width="232" style="	display: block;
	margin: 0 auto;
margin: 30px auto;">
			</td>
		</tr>
		<!-- Header -->
		<tr>
			<td class="sectionlike imageless_section" style="	font-family: -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
	vertical-align: top;
    border: none !important;
  background: #C9F9E9;
  padding-bottom: 10px;
padding-bottom: 20px;"></td>
		</tr>
		<!-- Content -->
		<tr>
			<td class="section" style="	font-family: -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
	vertical-align: top;
    border: none !important;
	background: #C9F9E9;
	padding: 0 20px;
">
				<table border="0" cellspacing="0" cellpadding="0" class="section_content" style="	font-size: 15px;
	line-height: 23px;
	max-width: 500px;
	min-width: 460px;
	text-align: center;
	width: 100%;
	background: #fff;
">
					<tbody><tr>
						<td class="section_content_padded" style="	font-family: -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
	vertical-align: top;
    border: none !important;
padding: 0 35px 40px;">
							
							<p class="near_title last" style="margin-top: 10px;margin-bottom: 0;">${subject}</p>
							<a href="${url}" style="	display: block;
	width: 100%;
	max-width: 300px;
	background: #20DA9C;
	border-radius: 8px;
	color: #fff;
	font-size: 18px;
	padding: 12px 0;
	margin: 30px auto 0;
	text-decoration: none;
" target="_blank">${buttonContent}</a>
						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>
		<!-- Signature -->
		<tr>
			<td class="section" 
                style="	font-family: -apple-system, 
                    BlinkMacSystemFont, Roboto, sans-serif;
                    vertical-align: top;
                    border: none !important;
                    background: #C9F9E9;
                    padding: 0 20px;
                ">
				<table border="0" cellspacing="0" cellpadding="0" class="section_content section_zag"       
                        style="	font-size: 15px;
                            line-height: 23px;
                            max-width: 500px;
                            min-width: 460px;
                            text-align: center;
                            width: 100%;
                            background: #fff;
                        background: #F4FBF9;">
					<tbody>
                      <tr>
						<td class="signature" style="	
                            font-family: -apple-system,           
                            BlinkMacSystemFont,     
                            Roboto, sans-serif;
                            vertical-align: top;
                            border: none !important;
                            padding: 20px;">
							<p class="marginless" style="margin: 0;">Allo Media</p>
						</td>
					</tr>
				</tbody>
            </table>
			</td>
		</tr>
	</tbody>
 </table>
</body>
    `
}