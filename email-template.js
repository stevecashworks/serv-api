const createDynamicTemplate=(code, name)=>{
    return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <!--[if gte mso 9]>
        <xml>
            <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    <![endif]-->
    <!--[if gt mso 15]>
        <style type="text/css" media="all">
            table, tr, td {border-collapse: collapse;}
            tr { font-size:0px; line-height:0px; border-collapse: collapse; }
        </style>
    <![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
    <meta name="robots" content="noindex, nofollow">
    <title>Welcome Email</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet">
    <style>
        body {
            margin: 0;
            padding: 0;
            mso-line-height-rule: exactly;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            font-family: 'Lato', Arial, Helvetica, sans-serif;
            background-color: #f1f1f1;
            -webkit-font-smoothing: antialiased;
        }
        table {
            border-spacing: 0;
            border-collapse: collapse;
            width: 100%;
        }
        img {
            border: 0;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
        }
        a {
            color: inherit;
            cursor: default;
            text-decoration: none;
        }
        @media only screen and (max-width: 640px) {
            body {
                margin: 0!important;
                padding: 0!important;
            }
            .table-container, .social-icons, table, .table-container td {
                width: 100%!important;
                min-width: 100%!important;
                margin: 0!important;
                float: none!important;
            }
            .table-container img {
                width: 100%!important;
                max-width: 100%!important;
                display: block;
                height: auto!important;
            }
            .social-icons {
                float: none!important;
                margin-left: auto!important;
                margin-right: auto!important;
                width: 220px!important;
                max-width: 220px!important;
                min-width: 220px!important;
                background: #383e56!important;
            }
        }
    </style>
</head>
<body>
    <!-- Main Parent Table -->
    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0 auto;">
        <tbody>
            
            <tr>
                <td>
                    <!-- Content Starts Here -->
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="center" class="table-container" style="background-color: #121212;">
                        <tr>
                            <td align="center">
                                <img src="https://example.com/assets/logo-dark-01.png" alt="Logo" width="220" height="35" class="logo">
                            </td>
                        </tr>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="center" bgcolor="#f6f5f5">
                        <tr>
                            <td valign="top" bgcolor="#383e56" background="https://example.com/assets/top-section-bg-01.jpg" style="padding: 60px 0;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="center">
                                    <tr>
                                        <td align="center" style="color:#FFFFFF;padding:20px 40px 0 40px;font-family: 'Lato', Arial, Helvetica, sans-serif;font-weight:800;font-size:34px;line-height:1.2;">
                                            Congratulations, you’re <br>ready to get started!
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="color:#FFFFFF;padding:20px 40px 0 40px;font-family: 'Lato', Arial, Helvetica, sans-serif;font-weight:normal;font-size:16px;line-height:1.4;">
                                          Welcome aboard ${name} your email verification code is
                                          <br/>
                                           <b style="font-size:30px;letter-spacing:3px;">${code.split("").join(" ")}</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <!-- Content Ends Here -->
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>

        `;
}


export default createDynamicTemplate