<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet">
    <style>
        *,
        ::after,
        ::before {
            box-sizing: border-box;
        }
        /*@font-face {
            font-family: 'supergroteska';
            font-style: normal;
			font-weight: normal;
            src: local('supergroteska'), url(/supergroteska/supergroteska-rg-webfont.woff) format('woff');            
        }
		
		@font-face {
		  font-family: 'Raleway';
		  font-style: normal;
		  font-weight: 400;
		  src: local('Raleway'), local('Raleway-Regular'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptug8zYS_SKggPNyCMIT5lu.woff2) format('woff2');
		  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
		}
		
		@font-face {
		  font-family: 'Raleway';
		  font-style: normal;
		  font-weight: 400;
		  src: local('Raleway'), local('Raleway-Regular'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptug8zYS_SKggPNyC0ITw.woff2) format('woff2');
		  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
		}*/
        html, body {
            height: 100%;
        }
        body {
            font-family: 'Raleway', sans-serif;
            font-size: 18px;
            font-weight: normal;
            line-height: 1.8;
            letter-spacing: 1px;
            background: #e7e4e0;
            color: #6e6b66;
            -webkit-font-smoothing: antialiased;
        }
        body {
		    margin: 0;
		}
        h3 {
            font-weight: 700;
            font-size: 1.75rem;
        }
        .mfp-content {
            position: relative;
            vertical-align: middle;
            margin: 0 auto;
            text-align: left;
            z-index: 1045;
        }
        .ts-speaker-popup {
            background: #fff;
            padding: 0;
            position: relative
        }
        .container {
            width: 80%;
            padding: 15px;
            margin-right: auto;
            margin-left: auto;
        }
        .row {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            margin-right: 15px;
            margin-left: 15px;
            border: 2px solid #00c1c1;
        }
        .col-6 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            width: 50%;
            max-width: 50%
        }
        .col-8 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 66%;
            flex: 0 0 66%;
            width: 66%;
            max-width: 66%
        }
        .ts-speaker-popup .ts-speaker-popup-content {
            padding: 60px 40px
        }

            .ts-speaker-popup .ts-speaker-popup-content .ts-title {
                color: #1c1c24
            }

            .ts-speaker-popup .ts-speaker-popup-content .speaker-designation {
                display: block;
                margin-bottom: 20px;
                padding-top: 3px
            }

        .inner-row {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            border-top: 2px solid #f7f7f7;
            border-bottom: 2px solid #f7f7f7;
        }
        @media(max-width:1024px) {
            .container {
                width: 100%
            }
            .row {
                margin-right: 0;
                margin-left: 0
            }
            .col-md-11 {
                -webkit-box-flex: 0;
                -ms-flex: 0 0 92%;
                flex: 0 0 92%;
                width: 92%;
                max-width: 92%
            }
        }
        @media(max-width:768px), (max-width:991px){
            .container {
                width: 100%;
                padding: 5px;
            }
            .row {
                margin-right: 0;
                margin-left: 0
            }
            .col-xs-12 {
                -webkit-box-flex: 0;
                -ms-flex: 0 0 100%;
                flex: 0 0 100%;
                width: 100%;
                max-width: 100%
            }
            .ts-speaker-popup .ts-speaker-popup-content {
                padding: 50px 30px
            }
        }
    </style>
</head>
<body>
    <div class="mfp-content">
        <div class="container ts-speaker-popup">
            <div class="row">
                <div class="col-8 col-md-11 col-xs-12">
                    <div class="ts-speaker-popup-content">
                        <h3 class="ts-title"><?= $name ?></h3>
                        <div class="inner-row">
                            <div class="col-6 col-xs-12"><span class="speaker-designation"><?= $number ?></span></div>
                            <div class="col-6 col-xs-12"><span class="speaker-designation"><?= $sender ?></span></div>
                        </div>
                        <p></p>
                        <p><?= $message ?></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>