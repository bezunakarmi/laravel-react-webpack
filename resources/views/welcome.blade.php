<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="{{url('dist/app.css')}}">

	<title>Laravel-react-webpack</title>

</head>
<body>

<div id="app"></div>


<script src="{{url('dist/vendor.js')}}"></script>
<script src="{{url('dist/app.js')}}"></script>
</body>
</html>
