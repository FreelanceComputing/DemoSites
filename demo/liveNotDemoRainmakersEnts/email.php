<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <style>
        *,
        ::after,
        ::before {
            box-sizing: border-box;
        }
        html, body {
            height: 100%;
        }
        body {
            font-family: consolas, sans-serif;
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
            position: relative;
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
            max-width: 50%;
        }
        .col-8 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 66%;
            flex: 0 0 66%;
            width: 66%;
            max-width: 66%;
        }
        .ts-speaker-popup .ts-speaker-popup-content {
            padding: 60px 40px;
        }

            .ts-speaker-popup .ts-speaker-popup-content .ts-title {
                color: #1c1c24;
            }

            .ts-speaker-popup .ts-speaker-popup-content .speaker-designation {
                display: block;
                margin-bottom: 20px;
                padding-top: 3px;
            }

        .inner-row {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
        }
        .upper-row {
            border-top: 2px solid #f7f7f7;
            border-bottom: 2px solid #f7f7f7;
        }
        .lower-row {
            border-bottom: 2px solid #f7f7f7;
        }
        @media(max-width:1024px) {
            .container {
                width: 100%;
            }
            .row {
                margin-right: 0;
                margin-left: 0;
            }
            .col-md-11 {
                -webkit-box-flex: 0;
                -ms-flex: 0 0 92%;
                flex: 0 0 92%;
                width: 92%;
                max-width: 92%;
            }
        }
        @media(max-width:768px), (max-width:991px){
            .container {
                width: 100%;
                padding: 5px;
            }
            .row {
                margin-right: 0;
                margin-left: 0;
            }
            .col-xs-12 {
                -webkit-box-flex: 0;
                -ms-flex: 0 0 100%;
                flex: 0 0 100%;
                width: 100%;
                max-width: 100%;
            }
            .ts-speaker-popup .ts-speaker-popup-content {
                padding: 50px 30px;
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
                        <div class="inner-row upper-row">
                            <div class="col-6 col-xs-12"><span class="speaker-designation"><?= $number ?></span></div>
                        </div>
						<p></p>
                        <div class="inner-row lower-row">
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