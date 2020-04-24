﻿<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <style>
        *,
        ::after,
        ::before {
            box-sizing: border-box;
        }
        @font-face {
            font-family: 'supergroteska_rgregular';
            src: url('https://rainmakersents.co.uk/supergroteska/supergroteska-rg-webfont.eot');
		    src: url('https://rainmakersents.co.uk/supergroteska/supergroteska-rg-webfont.eot?#iefix') format('embedded-opentype'),
			     url('https://rainmakersents.co.uk/supergroteska/supergroteska-rg-webfont.svg#supergroteska_rgregular') format('svg'),
			     url('https://rainmakersents.co.uk/supergroteska/supergroteska-rg-webfont.woff') format('woff'),
			     url('https://rainmakersents.co.uk/supergroteska/supergroteska-rg-webfont.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
        }
        html, body {
            height: 100%;
        }
        body {
            font-family: 'supergroteska_rgregular',"Raleway",Arial,sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
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
            /*display: inline-block;*/
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
            max-width: 50%
        }
        .col-8 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 66%;
            flex: 0 0 66%;
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
                max-width: 92%
            }
        }
        @media(max-width:767px) {
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
                max-width: 100%
            }
            .ts-speaker-popup .ts-speaker-popup-content {
                padding: 50px 30px
            }
        }
    </style>
</head>
<body>
    <div class="mfp-content" style="--speaker-color: #25CD44">
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
                        <p>
                            <?= $message ?>
                        </p>
                        <div class="ts-speakers-social"> <a href="#"><i class="fa fa-facebook"></i></a> <a href="#"><i class="fa fa-twitter"></i></a> <a href="#"><i class="fa fa-instagram"></i></a> <a href="#"><i class="fa fa-google-plus"></i></a>                                                                                                <a href="#"><i class="fa fa-linkedin"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>