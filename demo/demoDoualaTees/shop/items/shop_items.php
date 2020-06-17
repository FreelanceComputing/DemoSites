<?php
  require_once('vendor/autoload.php');

  ini_set('session.gc_maxlifetime', 3600);
  session_set_cookie_params(3600);

  session_start();

  $now = time();
  if (isset($_SESSION['discard_after']) && $now > $_SESSION['discard_after'])
  {
    // this session has worn out its welcome; kill it and start a brand new one
    session_unset();
    session_destroy();
    session_start();
  }
  $_SESSION['discard_after'] = $now + 3600;

  if(isset($_POST['total_cart_items']))
  {
	echo total_cart_items();
	exit();
  }

  if(isset($_POST['add_item']))
  {
	echo add_item();
    exit();
  }

  if(isset($_POST['show_cart_item']))
  {
	$ind = $_POST['ind'];
	echo "".$_SESSION['id'][(int)$ind].",".$_SESSION['title'][(int)$ind].",".$_SESSION['desc'][(int)$ind].",".$_SESSION['size'][(int)$ind].",".$_SESSION['price'][(int)$ind].",".$_SESSION['img'][(int)$ind].",".$_SESSION['link'][(int)$ind].",".$_SESSION['qty'][(int)$ind].",".$_SESSION['uId'][(int)$ind]."";
    exit();
  }

  if(isset($_POST['increase_item_qty']))
  {
	echo increase_item_qty($_POST['item_uId']);
	exit();
  }

  if(isset($_POST['reduce_item_qty']))
  {
	echo reduce_item_qty($_POST['item_uId']);
	exit();
  }

  if(isset($_POST['delete_item']))
  {
	echo delete_item($_POST['item_uId']);
	exit();
  }

  if(isset($_POST['calculate_total']))
  {
	echo calculate_total();
	exit();
  }

  function add_item()
  {
    if(count($_SESSION['id'] ?? []))
	{
	  $newQty = increase_item_qty($_POST['item_uId']);
	  if($newQty > 0)
	  {
		return count($_SESSION['id']);
		//exit();
	  }
	}
    $_SESSION['id'][]=$_POST['item_id'];
    $_SESSION['title'][]=$_POST['item_title'];
    $_SESSION['desc'][]=$_POST['item_desc'];
    $_SESSION['size'][]=$_POST['item_size'];
    $_SESSION['price'][]=$_POST['item_price'];
    $_SESSION['img'][]=$_POST['item_img'];
    $_SESSION['link'][]=$_POST['item_link'];
    $_SESSION['uId'][]=$_POST['item_uId'];
    $_SESSION['dflt'][]=$_POST['item_default'];
    $_SESSION['shipping'][]=$_POST['item_postage'];
	$_SESSION['qty'][]=1;
    return count($_SESSION['id']);
  }

  function increase_item_qty($uniqueId)
  {
	$newQ = 0;
	$key = array_search($uniqueId,$_SESSION['uId']);
	if($key!==false)
	{
	  $curQty = $_SESSION['qty'][$key];
	  $newQ = $curQty + 1;
	  $_SESSION['qty'][$key] = $newQ;
	}
	return $newQ;
  }

  function reduce_item_qty($uniqueId)
  {
	$newQ = 0;
	$key = array_search($uniqueId,$_SESSION['uId']);
	if($key!==false)
	{
	  $curQty = $_SESSION['qty'][$key];
	  $newQ = $curQty - 1;
	  $_SESSION['qty'][$key] = $newQ;
	}
	return $newQ;
  }

  function delete_item($uniqueId)
  {
	$key = array_search($uniqueId,$_SESSION['uId']);
	if($key!==false)
	{
	  unset($_SESSION['id'][$key]);
	  unset($_SESSION['title'][$key]);
	  unset($_SESSION['desc'][$key]);
	  unset($_SESSION['size'][$key]);
	  unset($_SESSION['price'][$key]);
	  unset($_SESSION['img'][$key]);
	  unset($_SESSION['link'][$key]);
	  unset($_SESSION['uId'][$key]);
	  unset($_SESSION['qty'][$key]);
	  unset($_SESSION['dflt'][$key]);
	  unset($_SESSION['shipping'][$key]);
	  //print_r($_SESSION);
	  //re-index array
	  $_SESSION['id'] = array_values($_SESSION['id']);
	  $_SESSION['title'] = array_values($_SESSION['title']);
	  $_SESSION['desc'] = array_values($_SESSION['desc']);
	  $_SESSION['size'] = array_values($_SESSION['size']);
	  $_SESSION['price'] = array_values($_SESSION['price']);
	  $_SESSION['img']= array_values($_SESSION['img']);
	  $_SESSION['link'] = array_values($_SESSION['link']);
	  $_SESSION['uId']= array_values($_SESSION['uId']);
	  $_SESSION['qty']= array_values($_SESSION['qty']);
	  $_SESSION['dflt'] = array_values($_SESSION['dflt']);
	  $_SESSION['shipping'] = array_values($_SESSION['shipping']);
	  //print_r($_SESSION);
	  echo count($_SESSION['id'] ?? []);
	}
  }

  function calculate_total()
  {
	$numOfDest = validate_destination();
	if($numOfDest > 1)
	{
	  echo "0.0 AUD,0.0,0.0,0";
	}
	else
	{
	  $shipping = $_SESSION['shipping'][0];
	  $curSubTotal = 0.0;
	  $quantity = 0;
	  $defSubTotal = 0.0;
	  $defTotal = 0.0;
	  $currency = explode(" ", $_SESSION['price'][0])[1];
	  for($i=0;$i<count($_SESSION['id']);$i++)
	  {
	    $unitQty = $_SESSION['qty'][$i];
	    $quantity = $quantity + $unitQty;
	    $unitPrice = floatval(explode(" ", $_SESSION['price'][$i])[0]);
	    $defUnitPrice = floatval(explode(" ", $_SESSION['dflt'][$i])[0]);
	    $unitTotal = $unitPrice * $unitQty;
	    $defUnitTotal = $defUnitPrice * $unitQty;
	    $curSubTotal = $curSubTotal + $unitTotal;
	    $defSubTotal = $defSubTotal + $defUnitTotal;
	  }
	  if($quantity < 5)
	  {
	    $shipping = $shipping * 1.0;
	  }
	  elseif($quantity > 4 && $quantity < 11)
	  {
	    $shipping = $shipping * 1.5;
	  }
	  else
	  {
	    $shipping = $shipping * 3.0;
	  }
	  $defSubTotal= round($defSubTotal, 2);
	  $curSubTotal= round($curSubTotal, 2);
	  $shipping= round($shipping, 2);

	  $_SESSION['defSubTotal'] = $defSubTotal;
	  $_SESSION['curSubTotal'] = $curSubTotal;
	  $_SESSION['finalShipping'] = $shipping;
	  $defTotal = $defSubTotal + $shipping;
	  $defTotal= round($defTotal, 2);
	  $_SESSION['total'] = round($defTotal,2);
	  echo "".$curSubTotal." ".$currency.",".$defSubTotal."";
	}
  }

  function total_cart_items()
  {
    $numOfItems = count($_SESSION['id'] ?? []);
	if($numOfItems > 0)
	{
	  $numOfDest = validate_destination();
	  if($numOfDest > 1)
	  {
		return "".$numOfItems.",0"; //problem
	  }
	  else
	  {
		return $numOfItems; //no problem
	  }
	}
	else
	{
	  return "".$numOfItems.",0"; //problem
	}
  }

  function validate_destination()
  {
	$dest = array();
	foreach($_SESSION['price'] as $key=>$val)
	{
	  $currency = explode(" ", $val)[1];
	  $dest[$currency] = true;
	}
	return count($dest);
  }


  /************************************ DETAILS *****************************/



  if (isset($_POST['show_session']))
  {
    echo json_encode($_SESSION);
	exit();
  }

  if(isset($_POST['edit_basket']))
  {
	$_SESSION['bil'] = [];
	$_SESSION['ship'] = [];
	$_SESSION['orderConf'] = false;
	echo json_encode($_SESSION);
  }

  /************************************ SHIPPING *****************************/

  if (isset($_POST['shipping_timeout']))
  {
	$_SESSION['discard_after'] = time() + 1200; //20 minutes
	echo total_cart_items();
	exit();
  }

  if (count($_POST['ship'] ?? []))
  {
	$notEmpty = count($_SESSION['uId'] ?? []);
	if($notEmpty < 1)
	{
	  session_unset();
      session_destroy();
	  echo 0;
	  exit();
	}
	else
	{
	  $shippingArray = $_POST['ship'];
	  $shippingArray['Country'] = replaceCountry($shippingArray['Country']);
	  $_SESSION['ship'] = $shippingArray;
	  echo json_encode($shippingArray);
	  exit();
	}
  }


  /************************************ BILLING *****************************/

  if (isset($_POST['billing_timeout']))
  {
	$_SESSION['discard_after'] = time() + 1200; //20 minutes
	echo count($_SESSION['ship'] ?? []);
	exit();
  }

  if (isset($_POST['duplicate_details']))
  {
	$notEmpty = count($_SESSION['uId'] ?? []);
	if($notEmpty < 1)
	{
	  session_unset();
      session_destroy();
	  echo 0;
	  exit();
	}
	else
	{
	  $_SESSION['bil'] = $_SESSION['ship'];
	  echo json_encode($_SESSION);
	}
  }

  if (count($_POST['bil'] ?? []))
  {
	$notEmpty = count($_SESSION['uId'] ?? []);
	if($notEmpty < 1)
	{
	  session_unset();
      session_destroy();
	  echo 0;
	  exit();
	}
	else
	{
	  $billingArray = $_POST['bil'];
	  $billingArray['Country'] = replaceCountry($billingArray['Country']);
	  $_SESSION['bil'] = $billingArray;
	  echo json_encode($billingArray);
	  exit();
	}
  }

  if(isset($_POST['edit_shipping']))
  {
	$_SESSION['ship'] = [];
	echo json_encode($_SESSION);
  }

  /************************************ REVIEW *****************************/

  if(isset($_POST['find_details']))
  {
	$_SESSION['discard_after'] = time() + 600; //10 minutes
	$bilSaved = count($_SESSION['bil'] ?? []);
	$notEmpty = count($_SESSION['uId'] ?? []);

	if($bilSaved < 1 || $notEmpty < 1)
	{
	  $bilSaved = 0;
	  session_unset();
      session_destroy();
	}
	else
    {
	  $_SESSION['orderConf'] = false;
	}

	echo $bilSaved;
	//print_r($_SESSION);
	exit();
  }

  if(isset($_POST['order_confirm']))
  {
	$notEmpty = count($_SESSION['uId'] ?? []);
	if($notEmpty < 1)
	{
	  session_unset();
      session_destroy();
	  echo 0;
	  exit();
	}
	else
	{
	  $_SESSION['orderConf'] = true;
	  echo json_encode($_SESSION);
	  exit();
	}
  }

  if(isset($_POST['edit_billing']))
  {
	$_SESSION['bil'] = [];
	echo json_encode($_SESSION);
  }

  /************************************ PAYMENT *****************************/

  if(isset($_POST['initiate_payment']))
  {
	if(count($_SESSION['uId'] ?? []) && $_SESSION['orderConf'])
	{
	  $_SESSION['discard_after'] = time() + 600; //10 minutes
	  echo '1';
	}
	else
	{
	  $_SESSION['discard_after'] = time() + 1;
	  echo '0';
	}
	exit();
  }

  if(isset($_POST['load_template']))
  {
    $current = file_get_contents('email.html');
	$summaryVariable = $_POST['summaryItems'];
	$rowOneVariable = $_POST['row1'];
	$rowTwoVariable = $_POST['row2'];
	$addressRowVariable = $_POST['addressRow'];
    $current = str_replace('{{summary}}', $summaryVariable, $current);
    $current = str_replace('{{rowOne}}', $rowOneVariable, $current);
    $current = str_replace('{{rowTwo}}', $rowTwoVariable, $current);
    $current = str_replace('{{addressRow}}', $addressRowVariable, $current);
    $_SESSION['htmlEmail'] = $current; //file_put_contents('email.html', $current);
    echo "updated email template";
    exit();
  }

  if(isset($_POST['stripeSource']))
  {
	$_SESSION['message'] = implementStripe($_POST);
	echo json_encode($_SESSION);
	exit();
  }

  if(isset($_POST['cancel_payment']))
  {
	$_SESSION = array();
	session_unset();
	echo json_encode($_SESSION);
	exit();
  }

  function replaceCountry($country)
  {
	switch($country)
	{
	  case "US":
	    return "United States of America";
	  case "BG":
	    return "Bulgaria";
	  case "CZ":
	    return "Czech Republic";
	  case "DK":
	    return "Denmark";
	  case "FR":
	    return "France";
	  case "DE":
	    return "Germany";
	  case "NL":
	    return "Netherlands";
	  case "RO":
	    return "Romania";
	  case "RU":
	    return "Russia";
	  case "SK":
	    return "Slovakia";
      case "ES":
	    return "Spain";
	  case "GB":
	    return "Great Britain";
	  case "AU":
	    return "Australia";
	  case "AT":
	    return "Austria";
	  case "IE":
	    return "Ireland";
	  case "IT":
	    return "Italy";
	  case "PL":
	    return "Poland";
	  case "PT":
	    return "Portugal";
	  case "SE":
	    return "Sweden";
	  case "CH":
	    return "Switzerland";
	  default:
	    return $country;
	}
  }

  function implementStripe($postData)
  {
      \Stripe\Stripe::setApiKey('sk_live_crONfwX2gEguo8mpF8R1Wjii');
	$message = "";

	try
	{
	  \Stripe\Charge::create([
        'amount' => $_SESSION['total']*100, // this is in cents
        'currency' => 'aud',
        'source' => $postData['stripeSource'],
        'description' => 'Example charge'
      ]);

	  $_SESSION['StripeSource'] = $postData['stripeSource'];
	  $_SESSION['StripeCard'] = $postData['token1'];
	  $orderConfirmationID = generateEmail();
	  $message = "Thanks - Your order is successful.\nYour order confirmation code is ".$orderConfirmationID;
	}
	catch( \Stripe\Error\Card $e)
	{
	  $err  = $e->getJsonBody()['error'];

	  $_SESSION['StripeError']['Status'] = $e->getHttpStatus();
	  $_SESSION['StripeError']['Type'] = $err['type'];
	  $_SESSION['StripeError']['Code'] = $err['code'];
	  $_SESSION['StripeError']['Message'] = $err['message'];

	  $message = "Unfortunately - ".$err['message'];
	}

	return $message;
  }

  function generateEmail()
  {

//generate ID
	  $confirmationID = substr($_SESSION['StripeSource'], -6);
	$message = $_SESSION['htmlEmail'];  //error check if it exists //file_get_contents('email.html');
	$customerName = "".$_SESSION['bil']['FirstName']." ".$_SESSION['bil']['LastName']."";
	$message = str_replace('{{customer}}', $customerName, $message);
	$message = str_replace('{{orderNumber}}', $confirmationID, $message);
	$_SESSION['htmlEmail'] = $message;

	$mail = new \PHPMailer\PHPMailer\PHPMailer(true);
  $mail->CharSet = "UTF-8";
    try
	{
	  //Server settings
	  //$mail->SMTPDebug = 1;
	  $mail->isSMTP();
	  $mail->Host = "doualatees.com";
	  $mail->SMTPAuth = true;
	  $mail->Username = 'order-confirmation@doualatees.com';
	  $mail->Password = 'order-confirmation';
	  $mail->SMTPSecure = 'ssl';
	  $mail->Port = 465;

	  //Recipients
	  $mail->setFrom('order-confirmation@doualatees.com', 'Douala Tees');
	  $mail->addAddress($_SESSION['bil']['Email'], $customerName);

	  //Content
	  $mail->isHTML(true);

	  $subject = "Order Confirmation - " . $confirmationID ."";
	  $mail->Subject = $subject;
	  $mail->Body    = $message;
	  $mail->send();
	  $mail->ClearAllRecipients( );
	  $mail->Body = $message. "<html><head></head><body><p>Customer's email: ". $_SESSION['bil']['Email']. "</p><p>Authorisation source: ". $_SESSION['StripeSource']. "</p><p>Card ID: ".  $_SESSION['StripeCard']. "</p></body></html>";
	  $mail->addAddress("doualatees@gmail.com", "Douala Tees");
	  $mail->send();
	  //return 'Message has been sent';
	}
	catch( \PHPMailer\PHPMailer\Exception $e)
	{
	  //echo 'Message could not be sent.';
	  return 'Mailer Error' . $mail->ErrorInfo;
	}

	//then clear cache
	$_SESSION = array();
	session_unset();
	return $confirmationID;
  }
?>